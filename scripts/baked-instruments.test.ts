import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadBakedBank, selectBakedSample, bakedCalibrationGain, type BakedBank } from '../src/engine/playback/bakedInstruments';
import { calibrateBakedLevels } from '../src/engine/playback/bakedLevels';
import { makeupGainFor } from '../src/engine/playback/elementaryEngine';
import { renderBakedTrack } from '../src/engine/playback/renderBakedTrack';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { codeForGesture } from '../src/engine/band/gestures';
import type { PerfNote, Performance } from '../src/engine/band/performanceData';
import { renderPerformanceToAudio } from '../src/engine/playback/mp3Export';

const sr = 44100;
const pcm = Float32Array.from({ length: sr * 2 }, (_, i) => .2 * Math.sin(2 * Math.PI * 261.625565 * i / sr));
const bank: BakedBank = { pcm, manifest: { version: 1, qualityVersion: 2, instrumentId: 'organ', sourceHash: 'test', sampleRate: sr, unpitched: false,
  samples: [{ midi: 60, velocity: 100, action: 'tone', offset: 0, frames: pcm.length, loopStart: sr * .75, loopEnd: sr * 1.75 }] } };
const note = (extra: Partial<PerfNote> = {}): PerfNote => ({ time: 0, dur: .5, midi: 60, vel: 100, trackId: 'keys', bar: 0,
  gestureCode: codeForGesture('tone'), hitFunctionCode: 0, accent: 0, ...extra });

test('sample selection respects kit identity and prefers pitch before velocity', () => {
  const multiple: BakedBank = { ...bank, manifest: { ...bank.manifest, samples: [
    bank.manifest.samples[0], { ...bank.manifest.samples[0], midi: 72, velocity: 48 },
  ] } };
  assert.equal(selectBakedSample(multiple, 72, 100, 'tone')?.midi, 72);
  assert.equal(selectBakedSample({ ...multiple, manifest: { ...multiple.manifest, unpitched: true } }, 38, 100, 'tone'), undefined);
});

test('wide transposition and unbaked source techniques use the physical fallback', () => {
  assert.equal(selectBakedSample(bank, 66, 100, 'tone'), undefined);
  assert.equal(selectBakedSample(bank, 60, 100, 'chicharra'), undefined);
  assert.equal(selectBakedSample(bank, 63, 100, 'accent')?.midi, 60);
});

test('measured bank gain removes legacy compensation without clipping a dry reference note', async () => {
  const params = resolveTrackSound('tres'); params.roleGain = 1;
  const referenceRms = .2 / Math.sqrt(2);
  const calibrated: BakedBank = { ...bank, manifest: { ...bank.manifest, playbackGain: bakedCalibrationGain(referenceRms, 30) } };
  const rendered = await renderBakedTrack(calibrated, [note()], [], params, 1, 0, sr);
  assert.ok(rendered);
  const peak = rendered.left.reduce((peak, value) => Math.max(peak, Math.abs(value)), 0);
  assert.ok(peak < .15 && peak > .04, `calibrated peak ${peak}`);
  assert.throws(() => bakedCalibrationGain(0, 30));
});

test('bass calibration supplies six dB more level while user faders remain proportional', async () => {
  const referenceRms = .2 / Math.sqrt(2);
  const normal = bakedCalibrationGain(referenceRms, 30);
  const bassGain = bakedCalibrationGain(referenceRms, 30, .16);
  assert.equal(bassGain, normal * 2);
  const calibrated: BakedBank = { ...bank, manifest: { ...bank.manifest, playbackGain: bassGain } };
  const params = resolveTrackSound('tres'); params.roleGain = 1;
  const full = await renderBakedTrack(calibrated, [note()], [], params, 1, 0, sr);
  const half = await renderBakedTrack(calibrated, [note()], [], params, .5, 0, sr);
  assert.ok(full && half);
  assert.ok(Math.abs(half.left[4000] * 2 - full.left[4000]) < 1e-6);
});

test('baked playback preserves pan, mix gain, expression and note-off release', async () => {
  const params = resolveTrackSound('organ'); params.pan = 0;
  const a = await renderBakedTrack(bank, [note()], [], params, .5, 0, sr)!;
  const b = await renderBakedTrack(bank, [note()], [{ trackId: 'keys', time: .2, cc: 11, value: 0 }], params, 1, 0, sr)!;
  assert.ok(a && b);
  assert.ok(a.left.some(x => Math.abs(x) > .01));
  assert.ok(a.right.every(x => x === 0));
  assert.ok(Math.abs(b.left[4000] - a.left[4000] * 2) < 1e-6);
  assert.ok(b.left.slice(sr * .3).every(x => x === 0));
  assert.ok(a.left.slice(sr * .7).every(x => x === 0));
});

test('held instruments sustain beyond the bank duration with a finite loop', async () => {
  const result = await renderBakedTrack(bank, [note({ dur: 4 })], [], resolveTrackSound('organ'), 1, 0, sr * 5);
  assert.ok(result);
  assert.ok(result.left.slice(sr * 3, sr * 4).some(x => Math.abs(x) > .01));
  assert.ok(result.left.every(Number.isFinite));
  assert.ok(result.left.slice(Math.ceil(sr * 4.2)).every(x => x === 0));
});

test('microtuning and pitch bends change sample playback frequency', async () => {
  const params = resolveTrackSound('organ');
  const a = await renderBakedTrack(bank, [note()], [], params, 1, 0, sr);
  const b = await renderBakedTrack(bank, [note({ frequencyHz: 523.25113 })], [], params, 1, 0, sr);
  const c = await renderBakedTrack(bank, [note({ pitchBend: [{ offset: .1, value: 16383 }] })], [], params, 1, 0, sr);
  assert.ok(a && b && c);
  const crossings = (data: Float32Array) => data.slice(1000, 18000).reduce((count, value, i, values) => count + (i > 0 && value >= 0 && values[i - 1] < 0 ? 1 : 0), 0);
  assert.ok(Math.abs(crossings(b.left) / crossings(a.left) - 2) < .06);
  assert.ok(crossings(c.left) > crossings(a.left));
});

test('sample rendering honors cancellation and avoids substituting kit sounds', async () => {
  const controller = new AbortController(); controller.abort();
  await assert.rejects(renderBakedTrack(bank, [note()], [], resolveTrackSound('organ'), 1, 0, sr, controller.signal), { name: 'AbortError' });
  const kit = { ...bank, manifest: { ...bank.manifest, unpitched: true } };
  assert.equal(await renderBakedTrack(kit, [note({ midi: 38 })], [], resolveTrackSound('organ'), 1, 0, sr), undefined);
});

test('export loads a baked bank and applies the existing ensemble route', async () => {
  const dir = mkdtempSync(path.join(tmpdir(), 'mixgenres-bank-'));
  try {
    writeFileSync(path.join(dir, 'organ.json'), JSON.stringify(bank.manifest));
    writeFileSync(path.join(dir, 'organ.f32'), Buffer.from(pcm.buffer));
    const baseUrl = pathToFileURL(`${dir}/`).href;
    assert.ok(await loadBakedBank('organ', baseUrl));
    const performance: Performance = { notes: [note()], ccs: [], bars: [], duration: .5, tail: 0, blends: {} };
    const options = { sampleBankBaseUrl: baseUrl, trackInstruments: new Map([['keys', 'organ']]), rawStem: true };
    const rendered = await renderPerformanceToAudio(performance, options);
    const expected = await renderBakedTrack(bank, [note()], [], resolveTrackSound('organ'), 1, 0, rendered.left.length);
    assert.ok(expected);
    assert.deepEqual(rendered.left, expected.left);
    assert.deepEqual(rendered.right, expected.right);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('invalid or missing banks safely return the physical fallback', async () => {
  const dir = mkdtempSync(path.join(tmpdir(), 'mixgenres-bad-bank-'));
  try {
    const baseUrl = pathToFileURL(`${dir}/`).href;
    assert.equal(await loadBakedBank('missing', baseUrl), undefined);
    writeFileSync(path.join(dir, 'organ.json'), JSON.stringify({ ...bank.manifest, samples: [{ ...bank.manifest.samples[0], offset: -1 }] }));
    writeFileSync(path.join(dir, 'organ.f32'), Buffer.from(pcm.buffer));
    assert.equal(await loadBakedBank('organ', baseUrl), undefined);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('compact PCM restores its source level and resamples 22.05 kHz banks at the correct pitch', async () => {
  const dir = mkdtempSync(path.join(tmpdir(), 'mixgenres-compact-bank-'));
  try {
    const count = 22050;
    const bytes = Buffer.alloc(count * 2);
    for (let i = 0; i < count; i++) bytes.writeInt16LE(Math.round(Math.sin(2 * Math.PI * 261.625565 * i / 22050) * 32767), i * 2);
    const manifest = { ...bank.manifest, encoding: 'pcm16', sampleRate: 22050,
      samples: [{ midi: 60, velocity: 100, action: 'tone', offset: 0, frames: count, scale: .2 }] };
    writeFileSync(path.join(dir, 'organ.json'), JSON.stringify(manifest));
    writeFileSync(path.join(dir, 'organ.pcm'), bytes);
    const loaded = await loadBakedBank('organ', pathToFileURL(`${dir}/`).href);
    assert.ok(loaded);
    assert.ok(Math.abs(loaded.pcm[20] - .2 * Math.sin(2 * Math.PI * 261.625565 * 20 / 22050)) < .00001);
    const rendered = await renderBakedTrack(loaded, [note()], [], resolveTrackSound('organ'), 1, 0, sr * 2);
    assert.ok(rendered);
    let crossings = 0;
    for (let i = 1001; i < 18000; i++) if (rendered.left[i] >= 0 && rendered.left[i - 1] < 0) crossings++;
    assert.ok(Math.abs(crossings - 261.625565 * 17000 / sr) < 2);
    assert.ok(rendered.left.slice(sr + 1).every(x => x === 0));
  } finally { rmSync(dir, { recursive: true, force: true }); }
});


test('per-key calibration balances unequal source levels through playback and preserves soft dynamics', async () => {
  const amplitudes = [.02, .8, .7, .9];
  const frames = sr / 2;
  const source = new Float32Array(frames * amplitudes.length);
  for (let layer = 0; layer < amplitudes.length; layer++) for (let i = 0; i < frames; i++) source[layer * frames + i] = amplitudes[layer] * Math.sin(2 * Math.PI * 260 * i / sr);
  const calibrated: BakedBank = { pcm: source, manifest: { ...bank.manifest, samples: [
    { midi: 60, velocity: 100, action: 'tone', offset: 0, frames },
    { midi: 72, velocity: 100, action: 'tone', offset: frames, frames },
    { midi: 72, velocity: 48, action: 'tone', offset: frames * 2, frames },
    { midi: 72, velocity: 100, action: 'marcato', offset: frames * 3, frames },
  ] } };
  const params = resolveTrackSound('organ'); params.roleGain = 1; params.pan = .5; params.brightness = 1; params.mute = 0;
  calibrateBakedLevels(calibrated.manifest, source, { makeupGain: makeupGainFor(params.model, 'organ'), bass: false, centre: 60 });
  const metrics = async (midi: number, velocity = 100, gesture = 'tone', level = 1) => {
    const audio = await renderBakedTrack(calibrated, [note({ midi, vel: velocity, gestureCode: codeForGesture(gesture) })], [], params, level, 0, sr / 4);
    assert.ok(audio);
    let power = 0, peak = 0;
    for (let i = 1000; i < 8000; i++) { power += audio.left[i] ** 2 + audio.right[i] ** 2; peak = Math.max(peak, Math.hypot(audio.left[i], audio.right[i])); }
    return { rms: Math.sqrt(power / 7000), peak };
  };
  const low = await metrics(60), high = await metrics(72), soft = await metrics(72, 48), accent = await metrics(72, 100, 'marcato'), half = await metrics(72, 100, 'tone', .5);
  assert.ok(Math.abs(low.rms / high.rms - 1) < .01, `key imbalance: ${low.rms}/${high.rms}`);
  assert.ok(soft.rms < high.rms * .481 && soft.rms > high.rms * .45);
  assert.ok(accent.rms <= high.rms * 1.4 * 1.25 * 1.01);
  assert.ok(accent.peak < .35 * 1.25);
  assert.ok(Math.abs(half.rms / high.rms - .5) < .0001);
});

test('kit calibration retains authored component balance and constrains exceptional transients', () => {
  const frames = sr / 2;
  const source = new Float32Array(frames * 3);
  for (let i = 0; i < frames; i++) { source[i] = .1 * Math.sin(2 * Math.PI * 260 * i / sr); source[frames + i] = .8 * Math.sin(2 * Math.PI * 260 * i / sr); source[frames * 2 + i] = source[i]; }
  source[frames * 2 + 1] = 20;
  const manifest: BakedBank['manifest'] = { ...bank.manifest, unpitched: true, samples: [
    { midi: 36, velocity: 100, action: 'tone', offset: 0, frames },
    { midi: 38, velocity: 100, action: 'tone', offset: frames, frames },
    { midi: 42, velocity: 100, action: 'tone', offset: frames * 2, frames },
  ] };
  calibrateBakedLevels(manifest, source, { makeupGain: 30, bass: false, centre: 60, componentGains: new Map([[38, .5]]) });
  assert.ok(Math.abs(manifest.samples[1].nominalRms! / manifest.samples[0].nominalRms! - .5) < .0001);
  assert.ok(manifest.samples[2].nominalPeak! <= .350001);
  assert.ok(manifest.samples[2].nominalRms! < manifest.samples[0].nominalRms!);
});
