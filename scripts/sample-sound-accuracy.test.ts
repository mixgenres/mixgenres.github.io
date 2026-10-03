import test from 'node:test';
import assert from 'node:assert/strict';
import OfflineRenderer from '@elemaudio/offline-renderer';
import { renderVoice, midiToFreq } from '../src/engine/playback/elementaryEngine';
import { prepareNoteVoice } from '../src/engine/playback/performancePlan';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { codeForGesture } from '../src/engine/band/gestures';
import { frequencyEnergy, spectralPeak, rms } from './lib/spectral';

const sr = 44100;
async function physical(id: string, midi = 60, action = 'tone', held = .8, release = 0) {
  const renderer = new OfflineRenderer();
  await renderer.initialize({ sampleRate: sr, numInputChannels: 0, numOutputChannels: 1, blockSize: 64 });
  try {
    const params = resolveTrackSound(id, 'tango');
    const note = { time: 0, dur: held, midi, vel: 100, trackId: 'test', bar: 0, gestureCode: codeForGesture(action), hitFunctionCode: 0, accent: 0 };
    const voice = prepareNoteVoice(note, params, 'tango', ''); voice.gate = 1;
    await renderer.render(renderVoice('test', 0, voice, params));
    const heldFrames = Math.ceil(held * sr / 64) * 64;
    const pcm = new Float32Array(heldFrames + Math.ceil(release * sr / 64) * 64);
    renderer.process([], [pcm.subarray(0, heldFrames)]);
    if (release > 0) {
      voice.gate = 0;
      await renderer.render(renderVoice('test', 0, voice, params));
      renderer.process([], [pcm.subarray(heldFrames)]);
    }
    return pcm;
  } finally { renderer.reset(); }
}

test('bandoneon uses a dry fundamental and upper octave, without a lower octave reed', async () => {
  const pcm = await physical('bandoneon'); const f = midiToFreq(60);
  const fundamental = frequencyEnergy(pcm, sr, f), upper = frequencyEnergy(pcm, sr, f * 2), lower = frequencyEnergy(pcm, sr, f / 2);
  assert.ok(upper > fundamental * .005, '4-foot register is audible');
  assert.ok(lower < fundamental * .001, `spurious lower octave: ${10 * Math.log10(lower / fundamental)} dB`);
  assert.ok(Math.abs(spectralPeak(pcm, sr, f * .95, f * 1.05, .1, .3) / f - 1) < .007, 'held reed stays tuned');
});

test('brass renders harmonic pitches without synthetic half/octave-plus-fifth tones', async () => {
  for (const id of ['french-horn', 'trombone', 'tuba']) {
    const midi = id === 'tuba' ? 48 : 60;
    const pcm = await physical(id, midi); const f = midiToFreq(midi);
    const wanted = frequencyEnergy(pcm, sr, f);
    for (const ratio of [.5, 1.5]) assert.ok(frequencyEnergy(pcm, sr, f * ratio) < wanted * .003, `${id}: spurious ${ratio}f`);
  }
});

test('a trombone fall moves downward before note-off', async () => {
  const pcm = await physical('trombone', 60, 'fall', .8); const f = midiToFreq(60);
  const early = spectralPeak(pcm, sr, .7 * f, 1.03 * f, .1, .25);
  const late = spectralPeak(pcm, sr, .7 * f, 1.03 * f, .68, .78);
  assert.ok(late < early * .9, `${early} -> ${late} Hz; fall must finish the held note`);
});

test('carved marimba bars and steel pan use their tuned modal spectra', async () => {
  const f = midiToFreq(60);
  for (const [id, tuned] of [['marimba', 4], ['steel-drums', 2]] as const) {
    const pcm = await physical(id);
    assert.ok(frequencyEnergy(pcm, sr, f * tuned, .01, .07) > frequencyEnergy(pcm, sr, f * 2.756, .01, .07) * 10, `${id}: wrong bar modes`);
  }
});

test('physical piano and vibraphone respect short notes and their dampers', async () => {
  for (const id of ['piano', 'vibraphone']) {
    const pcm = await physical(id, 60, 'staccato', .1, .6);
    const attack = rms(pcm, sr, .01, .09);
    assert.ok(attack > .001, `${id} has an audible attack`);
    assert.ok(rms(pcm, sr, .3, .6) < attack * .01, `${id} must stop ringing after damping`);
  }
});
