import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { bakedCalibrationGain, type BakedManifest } from '../src/engine/playback/bakedInstruments';
import { makeupGainFor } from '../src/engine/playback/elementaryEngine';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { measureBakedLevel } from '../src/engine/playback/bakedLevels';
import { renderBakedTrack } from '../src/engine/playback/renderBakedTrack';
import { prepareNoteVoice } from '../src/engine/playback/performancePlan';
import { codeForGesture } from '../src/engine/band/gestures';

const root = 'public/instrument-banks';
const index = JSON.parse(readFileSync(path.join(root, 'index.json'), 'utf8')) as { instruments: string[] };
const findings: string[] = [];
const summaries: object[] = [];
let sampleCount = 0, renderedCount = 0;

/** Frequency-specific energy with a Hann window, rather than mistaking a
 * naturally strong overtone for an octave tuning error. */
function energy(pcm: Buffer, sample: BakedManifest['samples'][number], sr: number, hz: number) {
  const start = Math.round(.005 * sr), end = Math.min(sample.frames, Math.round(.03 * sr));
  let real = 0, imaginary = 0;
  for (let i = start; i < end; i++) {
    const value = pcm.readInt16LE((sample.offset + i) * 2) * sample.scale! / 32767;
    const window = .5 - .5 * Math.cos(2 * Math.PI * (i - start) / (end - start - 1));
    const phase = 2 * Math.PI * hz * i / sr;
    real += value * window * Math.cos(phase); imaginary += value * window * Math.sin(phase);
  }
  return real * real + imaginary * imaginary;
}

for (const id of Object.keys(INSTRUMENTS_BY_ID)) {
  try {
    const manifest: BakedManifest = JSON.parse(readFileSync(path.join(root, `${id}.json`), 'utf8'));
    const pcm = readFileSync(path.join(root, `${id}.pcm`));
    if (!index.instruments.includes(id)) findings.push(`${id}: missing from catalog coverage`);
    if (manifest.qualityVersion !== 2 || (manifest.warmupFrames ?? 0) < 44100 * .15) findings.push(`${id}: unsettled attack bake`);
    if (manifest.encoding !== 'pcm16' || manifest.sampleRate !== 22050) findings.push(`${id}: unexpected PCM format`);
    const params = resolveTrackSound(id);
    const def = INSTRUMENTS_BY_ID[id];
    const bass = def.voicing === 'bass' || def.acousticProfile?.role === 'bass';
    const targetRms = manifest.calibrationTargetRms ?? .08;
    if (bass && (targetRms !== .16 || Math.abs((manifest.referenceMidi ?? 60) - (def.acousticProfile?.centre ?? 40)) > 3)) findings.push(`${id}: bass calibration does not use its playing register and level`);
    const gain = bakedCalibrationGain(manifest.referenceRms!, makeupGainFor(params.model, id), targetRms);
    if (Math.abs(gain - manifest.playbackGain!) > 1e-8 || manifest.playbackGain === undefined) findings.push(`${id}: missing/incorrect measured gain calibration`);
    if (manifest.levelsVersion !== 2) findings.push(`${id}: missing per-key level calibration`);
    const decoded = new Float32Array(pcm.length / 2);
    for (const sample of manifest.samples) for (let i = sample.offset; i < sample.offset + sample.frames; i++) decoded[i] = pcm.readInt16LE(i * 2) * sample.scale! / 32767;
    params.roleGain = 1; params.pan = .5; params.brightness = 1; params.mute = 0;
    let cursor = 0, silent = 0, boundedSamples = 0;
    let maxRenderedPeak = 0, minReferenceRms = Infinity, maxReferenceRms = 0;
    const levels = new Map<string, number>();
    for (const sample of manifest.samples) {
      sampleCount++;
      if (sample.offset !== cursor || sample.frames < 2 || (sample.offset + sample.frames) * 2 > pcm.length ||
        !Number.isFinite(sample.scale) || sample.scale! <= 0) throw new Error('invalid PCM bounds/level');
      let encodedPeak = 0;
      for (let i = sample.offset; i < sample.offset + sample.frames; i++) encodedPeak = Math.max(encodedPeak, Math.abs(pcm.readInt16LE(i * 2)));
      if (!encodedPeak) silent++;
      if (sample.loopStart !== undefined && !(sample.loopStart >= 0 && sample.loopEnd! > sample.loopStart && sample.loopEnd! < sample.frames)) throw new Error('invalid sustain loop');
      const measured = measureBakedLevel(decoded, sample, manifest.sampleRate, manifest.unpitched);
      const gain = manifest.playbackGain! * sample.levelTrim! * makeupGainFor(params.model, id);
      if (!Number.isFinite(gain) || gain <= 0 || Math.abs(measured.rms * gain - sample.nominalRms!) > 1e-5 || Math.abs(measured.peak * gain - sample.nominalPeak!) > 1e-5) findings.push(`${id}/${sample.midi}/${sample.action}/${sample.velocity}: incorrect per-sample calibration`);
      if (sample.nominalPeak! > manifest.calibrationPeakLimit! * sample.velocity / 100 + 1e-5) findings.push(`${id}/${sample.midi}: excessive calibrated peak`);
      levels.set(`${sample.midi}:${sample.action}:${sample.velocity}`, sample.nominalRms!);
      const gesture = sample.action === 'pluck' && def.family === 'bowed' ? 'pizzicato' : sample.action;
      const note = { time: 0, dur: .3, midi: sample.midi, vel: sample.velocity, trackId: 'audit', bar: 0, gestureCode: codeForGesture(gesture), hitFunctionCode: 0, accent: 0, bellowsDirectionCode: sample.bellowsDirectionCode };
      const rendered = await renderBakedTrack({ manifest, pcm: decoded }, [note], [], params, 1, 0, 11025);
      if (!rendered) throw new Error(`sample unreachable through renderer: ${sample.midi}/${sample.action}`);
      renderedCount++;
      let peak = 0, squares = 0;
      const from = Math.round((manifest.unpitched ? .005 : .01) * 44100), to = Math.round((manifest.unpitched ? .06 : .2) * 44100);
      for (let i = 0; i < rendered.left.length; i++) {
        const power = rendered.left[i] ** 2 + rendered.right[i] ** 2;
        if (!Number.isFinite(power)) throw new Error('non-finite rendered note');
        peak = Math.max(peak, Math.sqrt(power));
        if (i >= from && i < to) squares += power;
      }
      const rms = Math.sqrt(squares / (to - from));
      const expressiveGain = prepareNoteVoice(note, params, '', '').velocity / (sample.velocity / 127);
      if (peak > sample.nominalPeak! * expressiveGain + 1e-5 || rms < 1e-8) findings.push(`${id}/${sample.midi}/${sample.action}/${sample.velocity}: rendered headroom/silence failure`);
      maxRenderedPeak = Math.max(maxRenderedPeak, peak);
      if (sample.action === 'tone' && sample.velocity === 100) { minReferenceRms = Math.min(minReferenceRms, rms); maxReferenceRms = Math.max(maxReferenceRms, rms); }
      cursor += sample.frames; boundedSamples++;
    }
    for (const sample of manifest.samples.filter(s => s.action === 'tone' && s.velocity === 48)) {
      if (levels.get(`${sample.midi}:tone:48`)! > levels.get(`${sample.midi}:tone:100`)! * .48001) findings.push(`${id}/${sample.midi}: soft layer louder than normal layer`);
    }
    if (cursor * 2 !== pcm.length) findings.push(`${id}: PCM payload does not match manifest`);
    if (silent) findings.push(`${id}: ${silent} silent samples`);
    const pitches = [...new Set(manifest.samples.map(s => s.midi))].sort((a, b) => a - b);
    if (!manifest.unpitched && pitches.some(p => !Number.isInteger(p))) findings.push(`${id}: fractional anchors do not match the recorded MIDI key`);
    if (!manifest.unpitched && (pitches[0] !== Math.ceil(def.tuningAndMechanics?.keyRange?.lowMidi ?? def.acousticProfile!.low)
      || pitches.at(-1) !== Math.floor(def.tuningAndMechanics?.keyRange?.highMidi ?? def.acousticProfile!.high))) findings.push(`${id}: bank misses its physical compass`);
    if (!manifest.unpitched && pitches.some((p, i) => i > 0 && p - pitches[i - 1] > 6)) findings.push(`${id}: pitch anchors require shifts greater than 3 semitones`);
    let attackFundamentalVsThirdDb: number | undefined;
    if (id === 'piano' || id === 'tres') {
      const sample = manifest.samples.find(s => s.midi === 60 && s.velocity === 100 && s.action === 'tone')!;
      const fundamental = 440 * Math.pow(2, (sample.midi - 69) / 12);
      attackFundamentalVsThirdDb = 10 * Math.log10(energy(pcm, sample, manifest.sampleRate, fundamental) /
        Math.max(1e-30, energy(pcm, sample, manifest.sampleRate, fundamental * 3)));
      if (attackFundamentalVsThirdDb < 1) findings.push(`${id}: opening attack still dominated by the spurious third-harmonic sweep (${attackFundamentalVsThirdDb.toFixed(1)} dB)`);
    }
    summaries.push({ id, samples: boundedSamples, pitches, bytes: pcm.length, playbackGain: manifest.playbackGain, referenceRms: manifest.referenceRms, minReferenceRms, maxReferenceRms, maxRenderedPeak, attackFundamentalVsThirdDb });
  } catch (error) { findings.push(`${id}: ${String(error)}`); }
}
mkdirSync('audit', { recursive: true });
const report = { status: findings.length ? 'FAIL' : 'PASS', instruments: summaries.length, samples: sampleCount, renderedNotes: renderedCount,
  checks: ['catalog coverage', 'settled control warmup', 'PCM format and bounds', 'non-silent payloads', 'sustain loop bounds', 'pitch-shift limits', 'per-key/component RMS calibration', 'velocity dynamics', 'full-sample peak headroom', 'actual playback of every sample', 'piano/tres attack spectral regression'], findings, summaries };
writeFileSync('audit/baked-audio-quality.json', JSON.stringify(report, null, 2));
console.log(`${report.status}: ${report.instruments} instruments, ${sampleCount} samples; audit/baked-audio-quality.json`);
for (const finding of findings) console.error(finding);
if (findings.length) process.exitCode = 1;
