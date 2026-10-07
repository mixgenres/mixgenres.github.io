import test from 'node:test';
import assert from 'node:assert/strict';
import { progressionForSection } from '../src/engine/sheet/arrangementContext';
import { makeSheet, toBar } from '../src/engine/sheet/sheet';
import { VoiceLeadingResolver } from '../src/engine/band/voiceLeading';
import { createPhraseState, realizeMidi, type PhraseContext } from '../src/engine/band/phrasePerformance';
import { arrangeBand } from '../src/engine/band/arrangeBand';
import type { PerfNote } from '../src/engine/band/performanceData';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';
import { getGenreTheory } from '../src/engine/lookup/theory';
import { requiredVoiceCount } from '../src/engine/playback/voiceAllocation';
import { prepareNoteVoice } from '../src/engine/playback/performancePlan';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { resolveTuningSystem } from '../src/engine/sheet/tuning';
import { parseChord } from '../src/engine/sheet/musicTheory';

const note = (time = 0, midi = 60): PerfNote => ({ time, dur: 0.1, midi, vel: 80, trackId: 'keys', bar: 0,
  gestureCode: 0, hitFunctionCode: 0, accent: 0.8 });

test('authored harmonic sentences retain repetitions and incomplete cycles', () => {
  const sentence = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim', 'C'];
  assert.deepEqual(progressionForSection({ A: sentence }, 'A', 'A', []), sentence);
  assert.deepEqual(progressionForSection({ A: [...sentence, ...sentence] }, 'A', 'A', []), [...sentence, ...sentence]);
  assert.deepEqual(progressionForSection({ A: ['C', 'F', 'C', 'F', 'C'] }, 'A', 'A', []), ['C', 'F', 'C', 'F', 'C']);
});

test('extended harmony retains every pitch class and reaches the upper keyboard register', () => {
  const theory = getGenreTheory('jazz');
  const profile = getInstrumentPerformanceProfile('piano');
  const context = { profile: { ...profile, capabilities: { ...profile.capabilities, comfortableLowMidi: 82 } },
    pattern: { roles: ['harmony'] }, role: 'harmony', chord: 'Cmaj13', phrasePosition: 0.2,
    hybridTheory: { ...theory, harmony: { ...theory.harmony, voicing: 'open' } },
  } as PhraseContext;
  const state = createPhraseState();
  const midis = realizeMidi(context, 0, 4, state);
  const pcs = new Set(parseChord(context.chord).intervals.map(iv => iv % 12));
  assert.ok(midis.length > 4);
  assert.deepEqual(new Set(midis.map(m => m % 12)), pcs);
  assert.ok(midis.some(m => m > 83), 'register is not capped at octave six');
  assert.deepEqual(realizeMidi(context, 1, 4, state), midis, 'repeated chords do not churn register');
});

test('voice leading preserves chord tones when the bass changes inversion', () => {
  const chord = [60, 64, 67, 71];
  const voiced = new VoiceLeadingResolver().applySmoothVoiceLeading(chord, [64, 67, 71, 72]) as number[];
  assert.deepEqual(new Set(voiced.map(midi => midi % 12)), new Set(chord.map(midi => midi % 12)));
});

test('sustained musicians retain each authored attack and whole-bar durations follow meter', () => {
  const compile = (meter: string) => {
    const sheet = makeSheet('jazz');
    const track = { ...sheet.tracks[0], instrumentId: 'flute', role: 'lead' };
    sheet.tracks = [track];
    sheet.timeSignature = meter;
    sheet.bpm = 60;
    sheet.regions = [{ ...sheet.regions[0], start: 0, end: 1, bars: 1, bpm: 60 }];
    sheet.measures = [sheet.measures[0]];
    const detail = sheet.measures[0].patternDetailsByTrack![track.id];
    Object.assign(detail, { perf: { stepsPerBar: 16, onsets: [0, 4, 8, 12],
      durations: [16, 16, 16, 16], durationsAuthored: true, accents: [1, .8, .8, .8] } });
    return arrangeBand(sheet).notes.filter(n => n.originCode === 0);
  };
  const simple = compile('4/4'), triple = compile('3/4');
  assert.equal(simple.length, 4, 'sustain does not erase fast attacks');
  assert.equal(triple.length, 4);
  assert.ok(simple.at(-1)!.dur > 2, 'long notes are not capped at two beats');
  assert.ok(Math.abs(triple.at(-1)!.dur / simple.at(-1)!.dur - .75) < .01, 'duration uses the actual meter');
});

test('grid conversion retains all tuplets and fine subdivisions', () => {
  const tuplets = toBar([0, 1, 2, 3, 4, 5, 6], [1, .9, .8, .7, .6, .5, .4], undefined, 7, 0);
  assert.equal(tuplets.onsets[1], 16 / 7);
  const dense = toBar(Array.from({ length: 30 }, (_, i) => i), undefined, undefined, 30, 0);
  assert.equal(dense.onsets.length, 30);
  assert.equal(new Set(dense.onsets).size, 30);
});

test('voice allocation has no 12/32-voice ceiling and accounts for release occupancy', () => {
  assert.equal(requiredVoiceCount(Array.from({ length: 64 }, () => note()), 0.1), 64);
  assert.equal(requiredVoiceCount([note(0), note(0.1)], 0.2), 2);
  assert.equal(requiredVoiceCount([note(0), note(0.1)], 0), 1);
});

test('final tuning follows phrase-shaped pitches and chord/phrase attacks stay coherent', () => {
  for (const genre of ['jazz', 'tango', 'salsa', 'electronic']) {
    const sheet = makeSheet(genre);
    const perf = arrangeBand(sheet);
    assert.ok(perf.notes.length);
    const attacks = new Map<string, PerfNote[]>();
    for (const n of perf.notes) {
      const region = sheet.regions.find(r => r.id === perf.bars[n.bar].regionId)!;
      // These genres default to 12-tet; the assertion still verifies final MIDI/frequency consistency.
      const expected = resolveTuningSystem('12-tet').getFrequencyHz(n.midi, parseChord(sheet.measures[n.bar].chord || 'C').rootPc);
      assert.ok(Math.abs(n.frequencyHz! - expected) < 1e-6, `${genre}/${region.id}/${n.midi}`);
      assert.ok(n.phraseId && n.attackId);
      const group = attacks.get(n.attackId!) ?? []; group.push(n); attacks.set(n.attackId!, group);
    }
    for (const group of attacks.values()) assert.equal(new Set(group.map(n => n.gestureCode)).size, 1, `${genre}: chord articulation`);
  }
});

test('section sound identity crosses preparation and physical controllers retain ownership', () => {
  const params = resolveTrackSound('guitar', 'folk', '', 'harmony');
  const authored: PerfNote = { ...note(), soundContext: { worldId: 'metal', styleId: 'metal-heavy-metal', role: 'lead' } };
  const voice = prepareNoteVoice(authored, params, 'folk', '', 'harmony', [74]);
  assert.equal(voice.soundParams?.genreId, 'metal');
  assert.equal(voice.soundParams?.dialect, resolveTrackSound('guitar', 'metal', 'metal-heavy-metal', 'lead').dialect);
  assert.deepEqual(voice.controllerKeys, ['brightness']);
});
