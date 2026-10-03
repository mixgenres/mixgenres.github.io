import { mkdirSync, readFileSync, writeFileSync, renameSync, existsSync, readdirSync, unlinkSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import path from 'node:path';
import OfflineRenderer from '@elemaudio/offline-renderer';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { renderVoice, makeupGainFor } from '../src/engine/playback/elementaryEngine';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { resolveVoiceParameters } from '../src/engine/playback/instrumentRegistry';
import { prepareNoteVoice } from '../src/engine/playback/performancePlan';
import { voiceTailSeconds } from '../src/engine/playback/voiceAllocation';
import { codeForGesture } from '../src/engine/band/gestures';
import type { BakedManifest } from '../src/engine/playback/bakedInstruments';
import { calibrateBakedLevels } from '../src/engine/playback/bakedLevels';
import type { PerfNote } from '../src/engine/band/performanceData';

const args = process.argv.slice(2);
const value = (name: string, fallback: string) => args.find(a => a.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback;
const output = path.resolve(value('out', 'public/instrument-banks'));
const instrument = value('instrument', '');
const sr = 44100, block = 64;
const maxTail = 12;

function sourceHash() {
  const hash = createHash('sha256');
  const visit = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) visit(file);
      else if (file.endsWith('.ts')) { hash.update(file); hash.update(readFileSync(file)); }
    }
  };
  visit('src/data'); visit('src/engine'); hash.update(readFileSync('scripts/bake-instruments.ts'));
  return hash.digest('hex');
}

async function bake(id: string, fingerprint: string) {
  const def = INSTRUMENTS_BY_ID[id];
  if (!def) throw new Error(`Unknown instrument: ${id}`);
  const manifestPath = path.join(output, `${id}.json`);
  const pcmPath = path.join(output, `${id}.pcm`);
  const legacyPath = path.join(output, `${id}.f32`);
  if (args.includes('--calibrate') && existsSync(manifestPath) && existsSync(pcmPath)) {
    const old: BakedManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    if (old.qualityVersion !== 2) throw new Error(`${id}: cannot calibrate unsettled attacks`);
    const bytes = readFileSync(pcmPath);
    const pcm = new Float32Array(bytes.length / 2);
    for (const sample of old.samples) for (let i = sample.offset; i < sample.offset + sample.frames; i++) pcm[i] = bytes.readInt16LE(i * 2) * sample.scale! / 32767;
    calibrate(old, pcm);
    writeFileSync(`${manifestPath}.tmp`, JSON.stringify(old)); renameSync(`${manifestPath}.tmp`, manifestPath);
    return;
  }
  if (args.includes('--compact') && existsSync(manifestPath) && (existsSync(legacyPath) || existsSync(pcmPath))) {
    const old: BakedManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    if (old.qualityVersion !== 2) throw new Error(`${id}: old attacks must be rebaked; compacting cannot repair them`);
    if (old.encoding === 'pcm16' && old.sampleRate === 22050) return;
    const bytes = readFileSync(old.encoding === 'pcm16' ? pcmPath : legacyPath);
    const pcm = old.encoding === 'pcm16' ? new Float32Array(bytes.length / 2)
      : new Float32Array(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
    if (old.encoding === 'pcm16') for (const sample of old.samples) for (let i = sample.offset; i < sample.offset + sample.frames; i++) pcm[i] = bytes.readInt16LE(i * 2) * sample.scale! / 32767;
    old.sourceHash = fingerprint;
    saveBank(old, pcm, manifestPath, pcmPath);
    if (existsSync(legacyPath)) unlinkSync(legacyPath);
    console.log(`${id}: compacted ${(pcm.length / 1024 / 1024).toFixed(1)} MiB`);
    return;
  }
  if (!args.includes('--force') && existsSync(manifestPath) && existsSync(pcmPath)) {
    const old = JSON.parse(readFileSync(manifestPath, 'utf8')) as BakedManifest;
    if (old.version === 1 && old.qualityVersion === 2 && old.sourceHash === fingerprint) return;
  }
  const unpitched = def.voicing === 'unpitched' || !!def.kit || !!def.drum;
  const low = Math.ceil(def.tuningAndMechanics?.keyRange?.lowMidi ?? def.acousticProfile?.low ?? 36);
  const high = Math.floor(def.tuningAndMechanics?.keyRange?.highMidi ?? def.acousticProfile?.high ?? 84);
  const pitches = unpitched
    ? [...new Set(def.kitComponents?.map(component => component.midi) ?? [36, 38, 42, 46, 48, 60, 72])].sort((a, b) => a - b)
    : [...new Set([...Array.from({ length: Math.floor((high - low) / 6) + 1 }, (_, i) => low + i * 6), high,
      ...[60, Math.round(def.acousticProfile?.centre ?? 60)].filter(midi => midi >= low && midi <= high)])].sort((a, b) => a - b);
  const actions = ['tone', ...def.techniques.articulations.filter(action => /^(pizzicato|chapa|mute|slap|rimshot|open|marcato|arco|yumba|campana)$/.test(action))];
  const warmupFrames = 8192;
  const manifest: BakedManifest = { version: 1, qualityVersion: 2, warmupFrames, instrumentId: id, sourceHash: fingerprint, sampleRate: sr, unpitched, samples: [] };
  const chunks: Float32Array[] = [];
  let offset = 0;
  const params = resolveTrackSound(id);
  params.volume = 1; params.roleGain = 1; params.pan = .5;
  for (const direction of (id === 'bandoneon' ? [1, 2] as const : [undefined])) for (const action of actions) for (const midi of pitches) for (const velocity of [48, 100]) {
    const note: PerfNote = { trackId: 'bake', time: 0, dur: 2, midi, vel: velocity, bar: 0,
      gestureCode: codeForGesture(action), hitFunctionCode: 0, accent: 0, bellowsDirectionCode: direction };
    const voice = prepareNoteVoice(note, params, '', '');
    // Samples contain source dynamics. Accent/ghost gain stays in performance.
    voice.velocity = velocity / 127;
    const physical = resolveVoiceParameters(voice, params);
    const held = !physical.isDecayingInstrument;
    const seconds = held ? 2 : Math.min(maxTail, Math.max(.3, voiceTailSeconds(params, voice) + .15));
    const frames = Math.ceil(seconds * sr / block) * block;
    const pcm = new Float32Array(frames);
    const core = new OfflineRenderer();
    await core.initialize({ sampleRate: sr, numInputChannels: 0, numOutputChannels: 1, blockSize: block });
    try {
      voice.gate = 0;
      await core.render(renderVoice('bake', 0, voice, params));
      // Settle resonators and control state with the gate closed before
      // recording. Fresh frequency and delay nodes already start in tune.
      core.process([], [new Float32Array(warmupFrames)]);
      voice.gate = 1;
      await core.render(renderVoice('bake', 0, voice, params));
      core.process([], [pcm]);
    } finally { core.reset(); }
    let peak = 0;
    for (const sample of pcm) {
      if (!Number.isFinite(sample)) throw new Error(`${id}/${action}/${midi}: non-finite sample`);
      peak = Math.max(peak, Math.abs(sample));
    }
    if (peak < 1e-9) throw new Error(`${id}/${action}/${midi}: silent sample`);
    // Bounded tails end with a fade. Held voices use a crossfaded sustain loop.
    if (!held) {
      const fade = Math.min(frames, Math.round(.05 * sr));
      for (let i = 0; i < fade; i++) pcm[frames - fade + i] *= 1 - i / fade;
    }
    manifest.samples.push({ midi, velocity, action: voice.action ?? action, offset, frames, bellowsDirectionCode: direction,
      ...(held ? { loopStart: Math.round(.75 * sr), loopEnd: Math.round(1.75 * sr) } : {}) });
    chunks.push(pcm); offset += frames;
  }
  const pcm = new Float32Array(offset);
  let cursor = 0;
  for (const chunk of chunks) { pcm.set(chunk, cursor); cursor += chunk.length; }
  saveBank(manifest, pcm, manifestPath, pcmPath);
  console.log(`${id}: ${manifest.samples.length} samples, ${(pcm.length * 2 / 1024 / 1024).toFixed(1)} MiB`);
}

function saveBank(manifest: BakedManifest, pcm: Float32Array, manifestPath: string, pcmPath: string) {
  // Anti-alias before decimation. Banks cover 0..11 kHz; the studio still runs
  // at 44.1 kHz. This halves bandwidth/storage again without pitch aliasing.
  if (manifest.sampleRate === 44100) {
    const taps = Array.from({ length: 31 }, (_, i) => {
      const x = i - 15;
      return (x === 0 ? .45 : Math.sin(Math.PI * .45 * x) / (Math.PI * x)) * (.54 - .46 * Math.cos(2 * Math.PI * i / 30));
    });
    const sum = taps.reduce((a, b) => a + b, 0);
    const reduced = new Float32Array(Math.ceil(pcm.length / 2));
    for (const sample of manifest.samples) {
      for (let i = 0; i < sample.frames; i += 2) {
        let value = 0;
        for (let j = 0; j < taps.length; j++) {
          const source = i + j - 15;
          if (source >= 0 && source < sample.frames) value += pcm[sample.offset + source] * taps[j];
        }
        reduced[(sample.offset + i) / 2] = value / sum;
      }
      sample.offset /= 2; sample.frames /= 2;
      if (sample.loopStart !== undefined) sample.loopStart = Math.floor(sample.loopStart / 2);
      if (sample.loopEnd !== undefined) sample.loopEnd = Math.floor(sample.loopEnd / 2);
    }
    pcm = reduced; manifest.sampleRate = 22050;
  }
  calibrate(manifest, pcm);
  const bytes = Buffer.alloc(pcm.length * 2);
  manifest.encoding = 'pcm16';
  for (const sample of manifest.samples) {
    let peak = 1e-9;
    for (let i = sample.offset; i < sample.offset + sample.frames; i++) peak = Math.max(peak, Math.abs(pcm[i]));
    sample.scale = peak;
    for (let i = sample.offset; i < sample.offset + sample.frames; i++) bytes.writeInt16LE(Math.max(-32767, Math.min(32767, Math.round(pcm[i] / peak * 32767))), i * 2);
  }
  // Publish the manifest last so interrupted bakes are safely resumable.
  writeFileSync(`${pcmPath}.tmp`, bytes); renameSync(`${pcmPath}.tmp`, pcmPath);
  writeFileSync(`${manifestPath}.tmp`, JSON.stringify(manifest)); renameSync(`${manifestPath}.tmp`, manifestPath);
}

function calibrate(manifest: BakedManifest, pcm: Float32Array) {
  const def = INSTRUMENTS_BY_ID[manifest.instrumentId];
  const params = resolveTrackSound(manifest.instrumentId);
  const componentGains = new Map<number, number>();
  for (const component of def.kitComponents ?? []) if (!componentGains.has(component.midi)) componentGains.set(component.midi, Math.pow(10, (component.gainTrimDb ?? 0) / 20));
  calibrateBakedLevels(manifest, pcm, { makeupGain: makeupGainFor(params.model, manifest.instrumentId),
    bass: def.voicing === 'bass' || def.acousticProfile?.role === 'bass', centre: def.acousticProfile?.centre ?? 40, componentGains });
}

async function main() {
  mkdirSync(output, { recursive: true });
  const fingerprint = value('hash', sourceHash());
  if (instrument) { await bake(instrument, fingerprint); return; }
  const catalogIds = Object.keys(INSTRUMENTS_BY_ID).sort();
  const ids = args.includes('--bass-only') ? catalogIds.filter(id => INSTRUMENTS_BY_ID[id].voicing === 'bass' || INSTRUMENTS_BY_ID[id].acousticProfile?.role === 'bass') : catalogIds;
  const jobs = Math.max(1, Math.min(8, Number(value('jobs', '3')) || 3));
  let next = 0;
  const errors: string[] = [];
  await Promise.all(Array.from({ length: jobs }, async () => {
    while (next < ids.length) {
      const id = ids[next++];
      await new Promise<void>(resolve => {
        const child = spawn(process.execPath, ['--import', 'tsx', 'scripts/bake-instruments.ts', `--instrument=${id}`, `--out=${output}`, `--hash=${fingerprint}`, ...(args.includes('--force') ? ['--force'] : []), ...(args.includes('--compact') ? ['--compact'] : []), ...(args.includes('--calibrate') ? ['--calibrate'] : [])], { stdio: 'inherit' });
        child.on('error', error => { errors.push(`${id}: ${error.message}`); resolve(); });
        child.on('exit', code => { if (code !== 0) errors.push(`${id}: exit ${code}`); resolve(); });
      });
    }
  }));
  const index = { version: 1, sourceHash: fingerprint, instruments: catalogIds.filter(id => {
    const file = path.join(output, `${id}.json`);
    return existsSync(file) && (args.includes('--calibrate') || JSON.parse(readFileSync(file, 'utf8')).sourceHash === fingerprint);
  }), errors };
  if (args.includes('--calibrate')) index.sourceHash = JSON.parse(readFileSync(path.join(output, 'index.json'), 'utf8')).sourceHash;
  writeFileSync(path.join(output, 'index.json'), JSON.stringify(index, null, 2));
  console.log(`Baked ${index.instruments.length}/${catalogIds.length} instruments. Assets: ${output}`);
  if (errors.length) throw new Error(errors.join('\n'));
}
main().catch(error => { console.error(error); process.exitCode = 1; });
