import test from 'node:test';
import assert from 'node:assert/strict';
import { makeSheet, rebuild } from '../src/engine/sheet/sheet';
import { composeMusicianScore, compileWholeSong } from '../src/engine/band/arrangeBand';
import { beatFraction, beatValue, compileMusicianScore, musicianScoreFromArrangement, scoreNoteSegments, scoreRests, type MusicianScore, type ScoreNote } from '../src/engine/score/musicianScore';
import { exportMusicXml } from '../src/engine/score/musicXml';
import { codeForGesture } from '../src/engine/band/gestures';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { sliceBarNative } from '../src/engine/sheet/grid';
import { prepareNoteVoice } from '../src/engine/playback/performancePlan';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import type { MusicalPattern } from '../src/types';

function fixture(): MusicianScore {
  return { version: 1, title: 'Precision & expression', worldId: 'tango', meter: '4/4', pitchConvention: 'concert',
    parts: [{ id: 'p', name: 'Piano', instrumentId: 'piano', role: 'harmony', percussion: false }],
    bars: [{ index: 0, start: 0, end: 2, bpm: 120, beatsPerBar: 4, regionId: 'a', chord: 'Am', section: 'A' },
      { index: 1, start: 2, end: 6, bpm: 60, beatsPerBar: 4, regionId: 'b', chord: 'E7', section: 'B' }],
    notes: [], rests: [], controllers: [], phrases: [], duration: 6, tail: 2, blends: {} };
}
function note(overrides: Partial<ScoreNote> = {}): ScoreNote {
  return { id: 'n', trackId: 'p', bar: 0, sourceBar: 0, position: beatFraction(1 / 3), duration: beatFraction(2 / 3),
    midi: 69, frequencyHz: 440 * 2 ** (23 / 1200), velocity: 86, technique: 'legato',
    expression: { offsetSeconds: -.013, gateRatio: .85 }, source: { pitch: 'written', rhythm: 'written', technique: 'written', derived: false },
    playback: { gestureCode: codeForGesture('legato'), hitFunctionCode: 0, accent: .75 }, ...overrides };
}

test('score fractions retain tuplets and fine authored positions', () => {
  assert.deepEqual(beatFraction(1 / 3), { numerator: 1, denominator: 3 });
  assert.deepEqual(beatFraction(.35), { numerator: 7, denominator: 20 });
  assert.deepEqual(beatFraction(3.9999), { numerator: 39999, denominator: 10000 });
  assert.deepEqual(beatFraction(-.125), { numerator: -1, denominator: 8 });
  assert.throws(() => beatFraction(NaN), /finite/);
});

test('score projection keeps exact pitch, technique and notation distinct from expression', () => {
  const score = fixture(); score.notes = [note()];
  const before = structuredClone(score), performance = compileMusicianScore(score), event = performance.notes[0];
  assert.deepEqual(score, before, 'compilation must not mutate its score');
  assert.equal(event.midi, 69); assert.equal(event.frequencyHz, before.notes[0].frequencyHz);
  assert.equal(event.gestureCode, codeForGesture('legato'));
  assert.ok(Math.abs(event.time - (1 / 6 - .013)) < 1e-10);
  assert.ok(Math.abs(event.dur - 1 / 3 * .85) < 1e-10);
  assert.equal(event.notation!.beat, 1 / 3);
  score.bars[0].chord = 'F#7';
  assert.deepEqual(compileMusicianScore(score).notes, performance.notes, 'clock compilation cannot reinterpret harmony');
  const prepared = prepareNoteVoice(event, resolveTrackSound('piano', 'tango'), 'tango', '');
  assert.equal(prepared.frequencyHz, event.frequencyHz, 'DSP preparation cannot replace score tuning');
  assert.throws(() => compileMusicianScore({ ...score, notes: [note({ midi: 69.5 })] }), /Unresolved/);
});

test('written sustains cross tempo changes and become tied continuations, with no false rests', () => {
  const score = fixture(); score.notes = [note({ position: beatFraction(3), duration: beatFraction(2), expression: { offsetSeconds: 0, gateRatio: 1 } })];
  const event = compileMusicianScore(score).notes[0];
  assert.equal(event.time, 1.5); assert.equal(event.dur, 1.5);
  assert.deepEqual(scoreNoteSegments(score).map(s => [s.bar, s.position, s.duration, s.tieIn, s.tieOut]), [[0, 3, 1, false, true], [1, 0, 1, true, false]]);
  assert.deepEqual(scoreRests(score).map(r => [r.bar, beatValue(r.position), beatValue(r.duration)]), [[0, 0, 3], [1, 1, 3]]);
});

test('muting and audition solo affect sound without changing written musical decisions', () => {
  const song = makeSheet('tango', 'tango-golden-age'), before = composeMusicianScore(song);
  const after = composeMusicianScore({ ...song, tracks: song.tracks.map((t, i) => ({ ...t, muted: i === 0, solo: i === 1, volume: .13 })) });
  assert.deepEqual(after.notes, before.notes);
  assert.deepEqual(after.rests, before.rests);
  const compiled = compileMusicianScore(before), reconstructed = musicianScoreFromArrangement(song, compiled);
  assert.deepEqual(compileMusicianScore(reconstructed).notes, compiled.notes);
  assert.equal(compileWholeSong(song).scoreVersion, 1);
});

test('fine attacks at the end of a bar are retained in the original measure', () => {
  const sliced = sliceBarNative([16], [1], undefined, [.02], undefined, undefined, 16, 1, 0, ['legato'], [15.9996], [{ midi: 69 }]);
  assert.equal(sliced.stepsPerBar, 16);
  assert.deepEqual(sliced.fractionalPositions, [.999975]);
  assert.deepEqual(sliced.pitches, [{ midi: 69 }]);
});

test('absolute pitches and fractional rests/ties survive pattern projection and high energy', () => {
  const base = makeSheet('tango', 'tango-golden-age'), piano = base.tracks.find(t => t.instrumentId === 'piano')!;
  const pattern: MusicalPattern = { ...Object.values(PATTERNS_BY_ID).find(p => p.worldId === 'tango' && p.instruments?.includes('piano'))!,
    id: 'precision-score-fixture', variants: [], cycleLength: 1, subdivisions: 16, anticipationOffset: 0,
    events: [{ kind: 'attack', position: 0, duration: 1, articulation: 'legato', pitch: { midi: [60, 64, 69], cents: 23 } },
      { kind: 'rest', position: .35, duration: .1 },
      { kind: 'attack', position: 1 / 3 + 1, duration: .25, articulation: 'legato', pitch: { midi: 73 } },
      { kind: 'tie', position: 1 / 3 + 1.25, duration: .5 },
      { kind: 'attack', position: 3.9999, duration: .0007, articulation: 'legato', pitch: { midi: 69 } }],
  };
  PATTERNS_BY_ID[pattern.id] = pattern;
  try {
    const region = { ...base.regions[0], bars: 1, start: 0, end: 1, energy: 5 as const, solo: undefined };
    const song = rebuild({ ...base, regions: [region], tracks: [piano],
      arrangement: { [region.id]: { [piano.id]: pattern.id } }, energies: { [region.id]: { [piano.id]: 5 } } });
    const score = composeMusicianScore(song), notes = score.notes.filter(n => !n.source.derived);
    assert.deepEqual(notes.map(n => n.midi).sort((a, b) => a - b), [60, 64, 69, 69, 73]);
    for (const n of notes.filter(n => beatValue(n.position) === 0)) {
      assert.deepEqual(n.duration, beatFraction(.35));
      assert.ok(Math.abs(n.frequencyHz / (440 * 2 ** ((n.midi - 69) / 12)) - 2 ** (23 / 1200)) < 1e-10);
    }
    assert.deepEqual(notes.find(n => n.midi === 73)!.duration, beatFraction(.75));
    assert.deepEqual(notes.find(n => beatValue(n.position) > 3.99)!.duration, beatFraction(.0007));
    assert.ok(scoreRests(score).some(rest => beatValue(rest.position) === .35));
  } finally { delete PATTERNS_BY_ID[pattern.id]; }
});

test('MusicXML retains triplets, microtonal pitches, overlapping voices and ties', () => {
  const score = fixture(); score.notes = [note(), note({ id: 'held', position: beatFraction(3), duration: beatFraction(2) }),
    note({ id: 'overlap', position: beatFraction(3.5), duration: beatFraction(.75), midi: 72, frequencyHz: 523.2511306011972 })];
  const xml = exportMusicXml(score);
  assert.ok(xml.includes('Precision &amp; expression'));
  assert.ok(xml.includes('<alter>0.23</alter>'));
  assert.ok(xml.includes('<actual-notes>3</actual-notes>'));
  assert.ok(xml.includes('<tie type="start"/>') && xml.includes('<tie type="stop"/>'));
  assert.ok(xml.includes('<backup>') && xml.includes('<voice>2</voice>'));
  assert.ok(xml.includes('<per-minute>60</per-minute>'));
  const extended = fixture(); extended.notes = [note({ bar: 1, sourceBar: 1, position: beatFraction(3), duration: beatFraction(2) })];
  assert.ok(exportMusicXml(extended).includes('<measure number="3">'), 'final sustain is not truncated at the end of the form');
});
