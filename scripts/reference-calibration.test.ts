import test from 'node:test';
import assert from 'node:assert/strict';
import { compileSamplePlan, SAMPLE_RELEASE_RESERVE } from '../src/engine/playback/soundfont/plan';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileSongPipeline } from '../src/engine/pipeline/compileSong';
import type { PerfNote, Performance } from '../src/engine/band/performanceData';

test('sample-backed synth plan retains the authored note and release budget', () => {
  const note: PerfNote = { trackId: 'p', time: 0, dur: 1.5, bar: 0, midi: 69, vel: 80, gestureCode: 0, hitFunctionCode: 0, accent: .8 };
  const performance: Performance = { notes: [note], ccs: [], bars: [], duration: 1.5, tail: 0, blends: {}, trackInfo: { p: { instrumentId: 'synth', role: 'lead' } } };
  const plan = compileSamplePlan(performance, { trackInstruments: new Map([['p', 'synth']]), worldId: 'ambient', styleId: 'ambient-atmospheric' });
  assert.equal(plan.events.filter(event => event.type === 'on').length, 1);
  assert.equal(plan.events.find(event => event.type === 'on')?.patch.pack, 'electronic');
  assert.ok(plan.duration >= note.time + note.dur);
  assert.ok(SAMPLE_RELEASE_RESERVE > 0, 'the shared sample planner has a finite fallback tail');
});

test('default ambient has independent overlapping registers and flamenco opens with guitar alone', () => {
  const ambient = compileSongPipeline(makeSheet('ambient'));
  const tracks = new Set(ambient.performance.notes.filter(n => n.time < 15).map(n => n.trackId));
  assert.equal(tracks.size, 3);
  assert.ok(ambient.performance.notes.some(n => n.midi >= 72 && n.dur > 4));
  const flamenco = makeSheet('flamenco'), notes = compileSongPipeline(flamenco).performance.notes;
  const introEnd = flamenco.regions[0].end * 6 * 60 / flamenco.bpm;
  const guitar = flamenco.tracks.find(t => t.instrumentId === 'guitar')!.id;
  assert.ok(notes.filter(n => n.time < introEnd - .1).every(n => n.trackId === guitar));
});

test('salsa late bass attack anticipates the next root while clave retains its written timeline', () => {
  const sheet = makeSheet('salsa');
  const performance = compileSongPipeline(sheet).performance;
  const bass = sheet.tracks.find(t => t.instrumentId === 'bass')!;
  const notes = performance.notes.filter(n => n.trackId === bass.id && n.bar === 1).sort((a, b) => a.time - b.time);
  assert.equal(notes.at(-1)!.midi % 12, 2, 'A7 anticipates the following D minor root on four-and');
  const clave = sheet.tracks.find(t => t.instrumentId === 'claves')!;
  const firstClave = performance.notes.find(n => n.trackId === clave.id)!;
  assert.ok(firstClave.time < .04, 'the written downbeat is not shifted by a global sixteenth');
});
