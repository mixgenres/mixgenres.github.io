import test from 'node:test';
import assert from 'node:assert/strict';
import { progressionForSection } from '../src/engine/sheet/arrangementContext';
import { makeSheet, toBar } from '../src/engine/sheet/sheet';
import { VoiceLeadingResolver } from '../src/engine/band/voiceLeading';
import { createPhraseState, realizeMidi, type PhraseContext } from '../src/engine/band/phrasePerformance';
import { arrangeBand } from '../src/engine/band/arrangeBand';
import type { PerfNote, Performance } from '../src/engine/band/performanceData';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';
import { getGenreTheory, styleTheoryFor } from '../src/engine/lookup/theory';
import { GENRE_WORLDS, GENRE_WORLDS_BY_ID } from '../src/data/genres';
import { CATALOG_INFERRED_THEORY_GENRES } from '../src/data/musicTheory/genreTheory';
import { compileSamplePlan } from '../src/engine/playback/soundfont/plan';
import { resolveTuningSystem } from '../src/engine/sheet/tuning';
import { parseChord, scalePcsForMode } from '../src/engine/sheet/musicTheory';

const note = (time = 0, midi = 60): PerfNote => ({ time, dur: 0.1, midi, vel: 80, trackId: 'keys', bar: 0,
  gestureCode: 0, hitFunctionCode: 0, accent: 0.8 });
const samplePerformance = (instrumentId: string, notes: PerfNote[]): Performance => ({ notes, ccs: [], bars: [],
  duration: 1, tail: .5, blends: {}, trackInfo: { keys: { instrumentId, role: 'harmony' } }, worldId: 'folk' });

test('phrase behavior metadata varies with authored style cells instead of a shared placeholder', () => {
  const styles = GENRE_WORLDS.flatMap(world => world.styleDefinitions);
  const phraseProfiles = new Set(styles.map(style => JSON.stringify(style.calibration?.patterns.phraseBehaviors ?? [])));
  assert.ok(phraseProfiles.size >= 30, `expected style-specific phrase cues; found ${phraseProfiles.size} profiles`);
  assert.equal(styles.filter(style => JSON.stringify(style.calibration?.patterns.phraseBehaviors)
    === JSON.stringify(['pickup', 'phrase-end cadence', 'section variation'])).length, 0);

  const homeStyle = (genreId: string) => {
    const world = GENRE_WORLDS_BY_ID[genreId];
    return world.styleDefinitions.find(style => style.id === world.homeStyleId)!;
  };
  assert.deepEqual(homeStyle('weird').calibration?.patterns.phraseBehaviors,
    ['motif development', 'break and re-entry']);
  assert.ok(homeStyle('japanese').calibration?.patterns.phraseBehaviors?.includes('interlocking lines'));
  assert.ok(homeStyle('mexican').calibration?.patterns.phraseBehaviors?.includes('call-and-response'));
});

test('inferred melody and bass targets follow authored pitch cells and the style harmonic vocabulary', () => {
  const homeStyle = (genreId: string) => {
    const world = GENRE_WORLDS_BY_ID[genreId];
    return world.styleDefinitions.find(style => style.id === world.homeStyleId)!;
  };
  const inferredStyles = GENRE_WORLDS
    .filter(world => CATALOG_INFERRED_THEORY_GENRES.has(world.id))
    .flatMap(world => world.styleDefinitions.map(style => styleTheoryFor(style.id, world.id)));
  const distinctMelodyProfiles = new Set(inferredStyles.map(theory => JSON.stringify(theory.melody.targetDegrees)));
  const distinctBassProfiles = new Set(inferredStyles.map(theory => JSON.stringify(theory.bass.targetDegrees)));
  assert.ok(distinctMelodyProfiles.size >= 15, `expected authored melodic pitch/harmony targets; found ${distinctMelodyProfiles.size} profiles`);
  assert.ok(distinctBassProfiles.size >= 4, `expected authored bass pitch/harmony targets; found ${distinctBassProfiles.size} profiles`);

  const punkTheory = styleTheoryFor(homeStyle('punk').id, 'punk');
  assert.deepEqual(punkTheory.melody.targetDegrees, [1, 5],
    'power-chord styles anchor to the written root and fifth rather than an invented third/seventh arpeggio');
  assert.deepEqual(punkTheory.bass.targetDegrees, [1, 5],
    'power-chord bass motion does not inject a third or seventh absent from the riff');
  assert.deepEqual(styleTheoryFor(homeStyle('amapiano').id, 'amapiano').bass.targetDegrees, [1, 5, 3, 7],
    'Amapiano bass targets retain the tones in its authored seventh-chord vocabulary');
  assert.deepEqual(styleTheoryFor(homeStyle('mexican').id, 'mexican').melody.targetDegrees, [1, 3, 5, 7],
    'dominant-seventh targets stay when the style actually authors a seventh chord');
  assert.deepEqual(styleTheoryFor(homeStyle('chinese').id, 'chinese').melody.targetDegrees, [1, 2, 3, 5, 4, 6],
    'melodic targets preserve the ordered pitch vocabulary from the authored Jiangnan phrase cell');
  assert.deepEqual(styleTheoryFor(homeStyle('weird').id, 'weird').melody.targetDegrees,
    Array.from({ length: 12 }, (_, index) => index + 1),
    'chromatic styles retain the full pitch collection instead of collapsing to every other semitone');
  assert.deepEqual(styleTheoryFor('gamelan-javanese', 'gamelan').melody.targetDegrees, [1, 2, 3, 4, 5],
    'chordless slendro/pentatonic material keeps its five-note inventory instead of implying a triad');
  assert.deepEqual(styleTheoryFor('indian-classical-hindustani-khayal', 'indian-classical').melody.targetDegrees,
    [1, 2, 3, 4, 5, 6, 7],
    'a chordless raga exposes its full authored pitch inventory when no narrower phrase cell is written');
  assert.deepEqual(styleTheoryFor('arabic-tarab', 'arabic').melody.targetDegrees,
    [1, 2, 3, 4, 5, 6, 7],
    'maqam-like chordless melodies are not reduced to triadic targets');
  const curatedTango = getGenreTheory('tango').melody.targetDegrees;
  assert.deepEqual(styleTheoryFor('tango-golden-age', 'tango').melody.targetDegrees, curatedTango,
    'hand-authored genre profiles retain their explicit melodic targets');
});

test('plain minor solo-scale name resolves to natural minor', () => {
  assert.deepEqual(scalePcsForMode('minor', 9), [9, 11, 0, 2, 4, 5, 7]);
  assert.deepEqual(scalePcsForMode('minor', 9), scalePcsForMode('natural-minor', 9));
});

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

test('final tuning follows phrase-shaped pitches and chord/phrase attacks stay coherent', () => {
  for (const genre of ['jazz', 'tango', 'salsa', 'electronic']) {
    const sheet = makeSheet(genre);
    const perf = arrangeBand(sheet);
    assert.ok(perf.notes.length);
    const attacks = new Map<string, PerfNote[]>();
    for (const n of perf.notes) {
      const region = sheet.regions.find(r => r.id === perf.bars[n.bar].regionId)!;
      // These genres default to 12-tet; the assertion still verifies final MIDI/frequency consistency.
      assert.ok(n.harmonicChord, `${genre}/${region.id}/${n.midi} has harmony identity`);
      const expected = resolveTuningSystem('12-tet').getFrequencyHz(n.midi, parseChord(n.harmonicChord).rootPc);
      assert.ok(Math.abs(n.frequencyHz! - expected) < 1e-6, `${genre}/${region.id}/${n.midi}`);
      assert.ok(n.phraseId && n.attackId);
      const group = attacks.get(n.attackId!) ?? []; group.push(n); attacks.set(n.attackId!, group);
    }
    for (const group of attacks.values()) assert.equal(new Set(group.map(n => n.gestureCode)).size, 1, `${genre}: chord articulation`);
  }
});

test('section sound identity and per-part pitch bends reach sample planning directly', () => {
  const authored: PerfNote = { ...note(), soundContext: { worldId: 'metal', styleId: 'metal-heavy-metal', role: 'lead' },
    pitchBend: [{ offset: .05, value: 9000 }] };
  const options = { trackInstruments: new Map([['keys', 'guitar']]), worldId: 'folk', trackRoles: new Map([['keys', 'harmony']]) };
  const withContext = compileSamplePlan(samplePerformance('guitar', [authored]), options);
  const explicitContext = compileSamplePlan(samplePerformance('guitar', [{ ...authored, soundContext: undefined }]),
    { ...options, worldId: 'metal', styleId: 'metal-heavy-metal', trackRoles: new Map([['keys', 'lead']]) });
  const attack = (plan: ReturnType<typeof compileSamplePlan>) => plan.events.find(event => event.type === 'on');
  assert.deepEqual(attack(withContext)?.type === 'on' ? attack(withContext)?.patch : undefined,
    attack(explicitContext)?.type === 'on' ? attack(explicitContext)?.patch : undefined);
  assert.ok(withContext.events.some(event => event.type === 'bend' && event.cents > 0), 'the part keeps its authored bend trajectory');
});
