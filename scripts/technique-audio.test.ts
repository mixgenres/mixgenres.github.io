import test from 'node:test';
import assert from 'node:assert/strict';
import { renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import { codeForGesture } from '../src/engine/band/gestures';
import { prepareNoteVoice } from '../src/engine/playback/performancePlan';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import type { PerfNote, Performance } from '../src/engine/band/performanceData';

async function render(instrument: string, technique: string, controls: Record<string, number> = {}, bodyAttack = false) {
  const midi = instrument === 'bass' || instrument === 'upright-bass' ? 40 : instrument === 'violin' ? 69 : instrument === 'cello' ? 48 : 60;
  const note: PerfNote = { trackId: 'p', time: 0, dur: .2, bar: 0, midi, vel: 85,
    gestureCode: codeForGesture(technique), hitFunctionCode: 0, accent: .8, bodyAttack,
    musicianNotation: bodyAttack ? { bodyTechnique: 'golpe' } : undefined };
  const params = { ...resolveTrackSound(instrument), ...controls };
  const voice = prepareNoteVoice(note, params, '', '');
  voice.soundParams = params;
  note.physical = { key: `${instrument}/${technique}/${JSON.stringify(controls)}/${bodyAttack}`, voice, tailSeconds: .5 };
  const perf: Performance = { notes: [note], ccs: [], bars: [], duration: .3, tail: .5, blends: {}, trackInfo: { p: { instrumentId: instrument, role: 'lead' } } };
  const audio = await renderPerformanceToAudio(perf, { trackInstruments: new Map([['p', instrument]]), rawStem: true });
  const samples = audio.left;
  assert.ok(samples.every(Number.isFinite), `${instrument}/${technique} finite PCM`);
  const rms = (start: number, end: number) => {
    const section = samples.subarray(Math.floor(start * audio.sampleRate), Math.min(samples.length, Math.floor(end * audio.sampleRate)));
    return Math.sqrt(section.reduce((sum, n) => sum + n * n, 0) / Math.max(1, section.length));
  };
  assert.ok(rms(0, .2) > 1e-7, `${instrument}/${technique} audible excitation`);
  return { samples, rms };
}

test('string, bow and body mechanisms render finite audible PCM through the shared playback/export renderer', async () => {
  for (const [instrument, technique] of [
    ['guitar', 'rasgueado'], ['guitar', 'picado'], ['guitar', 'alzapua'], ['guitar', 'golpe'],
    ['violin', 'arco'], ['violin', 'pizzicato'], ['violin', 'tambor'], ['violin', 'chicharra'],
    ['upright-bass', 'arrastre'], ['upright-bass', 'strappata'], ['upright-bass', 'slap'],
    ['bass', 'slap'], ['bass', 'pop'], ['bass', 'dead-note'],
    ['cello', 'arrastre'], ['cello', 'strappata'], ['cello', 'chicharra'], ['viola', 'tambor'], ['viola', 'chicharra'],
  ]) await render(instrument, technique);
});

test('a body golpe is an impulse, rather than a pitched sustain under a held gate', async () => {
  const hit = await render('guitar', 'golpe');
  assert.ok(hit.rms(.12, .19) < hit.rms(0, .06) * .1, 'body strike decays while note gate is still held');
});

test('pluck position changes the rendered string spectrum and simultaneous golpe adds an attack', async () => {
  const neck = await render('guitar', 'fingerstyle', { pluckPosition: .45 });
  const bridge = await render('guitar', 'fingerstyle', { pluckPosition: .08 });
  const difference = (a: Float32Array, b: Float32Array) => Math.sqrt(a.reduce((sum, n, i) => sum + (n - (b[i] ?? 0)) ** 2, 0) / a.length);
  assert.ok(difference(neck.samples, bridge.samples) > 1e-7);
  const plain = await render('guitar', 'fingerstyle');
  const combined = await render('guitar', 'fingerstyle', {}, true);
  assert.ok(difference(plain.samples.subarray(0, 1100), combined.samples.subarray(0, 1100)) > 1e-7, 'body contact changes the audible onset');
});
