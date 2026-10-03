import test from 'node:test';
import assert from 'node:assert/strict';
import OfflineRenderer from '@elemaudio/offline-renderer';
import { el } from '@elemaudio/core';
import { renderMixBuses } from '../src/engine/playback/elementaryEngine';
import { renderPerformanceToMp3, renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import { voiceTailSeconds } from '../src/engine/playback/voiceAllocation';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import type { PerfNote, Performance } from '../src/engine/band/performanceData';
const note = (time = 0, midi = 60): PerfNote => ({ time, dur: 0.1, midi, vel: 80, trackId: 'keys', bar: 0,
  gestureCode: 0, hitFunctionCode: 0, accent: 0.8 });
const performanceOf = (notes: PerfNote[]): Performance => ({ notes, ccs: [], bars: [], duration: 0.4, tail: 0.1, blends: {},
  worldId: 'jazz', trackInfo: { keys: { instrumentId: 'organ', role: 'harmony' } } });

test('raw bus rendering keeps all six output channels separate', async () => {
  const renderer = new OfflineRenderer();
  await renderer.initialize({ sampleRate: 44100, numInputChannels: 0, numOutputChannels: 6, blockSize: 64 });
  try {
    const signals = [ ['drums', 'drums', 0.1], ['sub', 'bass', 0.2], ['inst', 'piano', 0.3] ] as const;
    const buses = renderMixBuses(signals.map(([category, instrumentId, value]) => ({ category, instrumentId, left: el.const({ value }), right: el.const({ value: -value }) })));
    await renderer.render(buses.drums.left, buses.drums.right, buses.sub.left, buses.sub.right, buses.inst.left, buses.inst.right);
    const outputs = Array.from({ length: 6 }, () => new Float32Array(64));
    for (let block = 0; block < 32; block++) renderer.process([], outputs);
    [0.1, -0.1, 0.2, -0.2, 0.3, -0.3].forEach((expected, i) => assert.ok(Math.abs(outputs[i][63] - expected) < 1e-6, `channel ${i}: ${outputs[i][63]} expected ${expected}`));
  } finally { renderer.reset(); }
});

test('dense offline WAV renders all voices as finite, audible PCM and preserves its tail', async () => {
  const perf = performanceOf(Array.from({ length: 20 }, (_, i) => note(0, 48 + i)));
  let invalidSamples = 0;
  const blob = await renderPerformanceToMp3(perf, { trackInstruments: new Map(), format: 'wav', rawStem: true,
    onDiagnostics: event => { invalidSamples += event.metrics.nonFiniteSamples; } });
  assert.equal(invalidSamples, 0);
  const bytes = await blob.arrayBuffer();
  const data = new DataView(bytes);
  assert.equal(String.fromCharCode(...new Uint8Array(bytes, 0, 4)), 'RIFF');
  const seconds = (bytes.byteLength - 44) / (44100 * 2 * 2);
  assert.ok(seconds >= 0.1 + voiceTailSeconds(resolveTrackSound('organ', 'jazz', '', 'harmony')) - 0.001);
  let peak = 0;
  for (let i = 44; i + 1 < bytes.byteLength; i += 2) peak = Math.max(peak, Math.abs(data.getInt16(i, true)));
  assert.ok(peak > 10, 'audible waveform');
});

test('isolated playback windows allocate only the selected instrument lifetime', async () => {
  const perf = performanceOf([{ ...note(), trackId: 'lead' }, { ...note(), trackId: 'piano' }]);
  const audio = await renderPerformanceToAudio(perf, { selectedTrackIds: ['lead'], renderWindow: { start: 0, end: .4 },
    trackInstruments: new Map([['lead', 'bandoneon'], ['piano', 'piano']]), worldId: 'tango', rawStem: true });
  const expected = Math.max(1, .4, .1 + voiceTailSeconds(resolveTrackSound('bandoneon', 'tango')));
  assert.ok(Math.abs(audio.left.length / audio.sampleRate - expected) < 1 / audio.sampleRate,
    'an unselected piano must not add its long ring to a bandoneon clip');
});

test('piano release budgeting follows the played articulation', () => {
  const params = resolveTrackSound('piano', 'tango');
  const voice = { id: 'piano-tail', note: 60, velocity: .7, gate: 0 };
  const sustained = voiceTailSeconds(params, { ...voice, action: 'tone' });
  const marcato = voiceTailSeconds(params, { ...voice, action: 'marcato' });
  const muted = voiceTailSeconds(params, { ...voice, action: 'chapa' });
  assert.ok(sustained > marcato, 'dry strikes do not inherit the sustained string lifetime');
  assert.ok(marcato >= muted, 'a damped strike remains shorter than a marcato');
  assert.ok(muted >= .12, 'the physical release remains intact');
});

test('background song mixes preserve export levels and apply the ensemble processing once', async () => {
  const { renderSongMix, songMixOptions } = await import('../src/engine/playback/renderSongMix');
  const { clearStemCache } = await import('../src/engine/cache/stemCache');
  const { makeSheet } = await import('../src/engine/sheet/sheet');
  const song = makeSheet('tango');
  song.tracks = [
    { ...song.tracks[0], id: 'keys', instrumentId: 'organ', role: 'harmony', volume: .3, pan: .25, muted: false, solo: false },
    { ...song.tracks[0], id: 'lead', instrumentId: 'bandoneon', role: 'lead', volume: .8, pan: .7, muted: false, solo: false },
  ];
  const perf = { ...performanceOf([note(), { ...note(.2, 67), trackId: 'lead' }]), worldId: 'tango',
    trackInfo: { keys: { instrumentId: 'organ', role: 'harmony' }, lead: { instrumentId: 'bandoneon', role: 'lead' } } };
  clearStemCache();
  const expected = await renderPerformanceToAudio(perf, songMixOptions(song));
  const actual = await renderSongMix(perf, song, new AbortController().signal);
  assert.equal(actual.sampleRate, expected.sampleRate);
  assert.equal(actual.left.length, expected.left.length);
  let difference = 0;
  for (let i = 0; i < actual.left.length; i++) difference = Math.max(difference,
    Math.abs(actual.left[i] - expected.left[i]), Math.abs(actual.right[i] - expected.right[i]));
  assert.ok(difference < 1e-6, `prepared stems must reproduce the shared export mix; max difference ${difference}`);
});
