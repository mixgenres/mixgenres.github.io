import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import { setSoundfontBankReader } from '../src/engine/playback/soundfont/banks';
import { measureAudio } from '../src/engine/studio/audioMetrics';
import { reserveOutputHeadroom } from '../src/engine/studio/outputHeadroom';
import type { Performance } from '../src/engine/band/performanceData';

setSoundfontBankReader(async id => {
  const bytes = readFileSync(`src/assets/soundfonts/${id}.sfpack`);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
});

async function probe(instrumentId: string, midi: number, velocity = 80) {
  const performance: Performance = { notes: [{ trackId: 'probe', time: 0, dur: .4, midi, vel: velocity,
    bar: 0, gestureCode: 0, hitFunctionCode: 0, accent: 1 }], ccs: [], bars: [], duration: .5, tail: 0,
    blends: {}, trackInfo: { probe: { instrumentId, role: 'comp' } } };
  const audio = await renderPerformanceToAudio(performance, { trackInstruments: new Map([['probe', instrumentId]]),
    trackRoles: new Map([['probe', 'comp']]), rawStem: true, maxDurationSeconds: .5 });
  return measureAudio(audio.left, audio.right, audio.sampleRate);
}

test('calibrated guitar no longer masks a same-register horn by tens of decibels', async () => {
  const guitar = await probe('guitar', 60), trumpet = await probe('trumpet', 60);
  assert.equal(guitar.nonFiniteSamples + trumpet.nonFiniteSamples, 0);
  assert.ok(guitar.samplePeak < 1 && trumpet.samplePeak < 1);
  assert.ok(Math.abs(guitar.rmsDbfs! - trumpet.rmsDbfs!) < 12, `${guitar.rmsDbfs} versus ${trumpet.rmsDbfs}`);
  const soft = await probe('guitar', 60, 35);
  assert.ok(guitar.rmsDbfs! > soft.rmsDbfs! + 3, 'static trims retain expressive velocity dynamics');
});

test('upright bass remains audible alongside the violin without isolated overload', async () => {
  const bass = await probe('upright-bass', 48), violin = await probe('violin', 60);
  assert.equal(bass.nonFiniteSamples + violin.nonFiniteSamples, 0);
  assert.ok(bass.samplePeak < 1 && violin.samplePeak < 1);
  assert.ok(Math.abs(bass.rmsDbfs! - violin.rmsDbfs!) < 15, `${bass.rmsDbfs} versus ${violin.rmsDbfs}`);
});

test('program lift uses one stereo gain, preserves silence and leaves peak headroom', () => {
  const left = new Float32Array([.1, -.2]), right = new Float32Array([.05, -.1]);
  reserveOutputHeadroom(left, right);
  assert.ok(left[0] > .15 && left[0] < .17);
  assert.ok(Math.abs(left[0] / right[0] - 2) < 1e-6);
  const loud = new Float32Array([2, -1]); reserveOutputHeadroom(loud, loud);
  assert.ok(Math.abs(loud[0] - .98) < 1e-6);
  assert.ok(Math.abs(loud[1] + .49) < 1e-6);
  const silence = new Float32Array(10); reserveOutputHeadroom(silence, silence);
  assert.ok(silence.every(value => value === 0));
});
