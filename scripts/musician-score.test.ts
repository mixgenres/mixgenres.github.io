import test from 'node:test';
import assert from 'node:assert/strict';
import { makeSheet, rebuild, setSectionChords } from '../src/engine/sheet/sheet';
import { createCatalogSong } from '../src/engine/sheet/songCatalog';
import { composeMusicianScore, compileWholeSong } from '../src/engine/band/arrangeBand';
import { beatFraction, beatValue, compileMusicianScore, musicianScoreFromArrangement, scoreNoteSegments, scoreRests, type MusicianScore, type ScoreNote } from '../src/engine/score/musicianScore';
import { exportMusicXml } from '../src/engine/score/musicXml';
import { codeForGesture } from '../src/engine/band/gestures';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { ALL_STYLES, getStyle } from '../src/engine/style/registry';
import { sliceBarNative } from '../src/engine/sheet/grid';
import { compileSamplePlan } from '../src/engine/playback/soundfont/plan';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import { velocityForEnergy } from '../src/engine/band/velocity';
import { applyFeel, grooveVelocityMultiplier, grooveForStyle } from '../src/engine/band/groove';
import { roleInteractionMultiplier } from '../src/engine/band/interpretBand';
import { getPerformanceGrammar } from '../src/engine/band/performanceGrammar';
import { resolveStyle } from '../src/engine/style/resolve';
import type { MusicalPattern, Role } from '../src/types';
import type { PatternEvent } from '../src/data/schema';
import { compileNotatedScore } from '../src/engine/score/notatedScore';
import { INSTRUMENTS_BY_ID, INSTRUMENT_CATALOG } from '../src/engine/lookup/instruments';
import { resolveNotatedDrum } from '../src/engine/score/percussionNotation';
import { kitHitIntent } from '../src/data/performance/kitHitRules';
import { resolveTuningSystem } from '../src/engine/sheet/tuning';
import { parseChord } from '../src/engine/sheet/musicTheory';

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

function withFusionPhrase(instrumentId: string, role: Role, sourceInstrument: string, sourceRole: Role,
  events: PatternEvent[], check: (song: ReturnType<typeof makeSheet>) => void) {
  const base = makeSheet('tango', 'tango-golden-age');
  const piano = base.tracks.find(track => track.instrumentId === 'piano')!;
  const source = Object.values(PATTERNS_BY_ID).find(pattern => pattern.instruments?.includes(sourceInstrument))!;
  const pattern: MusicalPattern = { ...source, id: `fusion-phrase-${instrumentId}-${role}`, instruments: [sourceInstrument],
    roles: [sourceRole], canCrossRole: true, sectionUsage: undefined, variants: [], cycleLength: 1,
    anticipationOffset: 0, events };
  PATTERNS_BY_ID[pattern.id] = pattern;
  try {
    const track = { ...piano, instrumentId, instrument: INSTRUMENTS_BY_ID[instrumentId].name,
      name: INSTRUMENTS_BY_ID[instrumentId].name, kind: instrumentId, role };
    const region = { ...base.regions[0], bars: 1, start: 0, end: 1, activeInstrumentIds: [instrumentId],
      solo: undefined, soloInstrumentId: undefined, leadInstrumentId: undefined };
    check(rebuild({ ...base, tracks: [track], regions: [region], partRoles: {},
      arrangement: { [region.id]: { [track.id]: pattern.id } },
      lockedPatternAssignments: { [region.id]: { [track.id]: pattern.id } } }));
  } finally { delete PATTERNS_BY_ID[pattern.id]; }
}

test('section dynamics preserve soft attacks, accent contrast, and a non-saturated forte ceiling', () => {
  const quiet = velocityForEnergy(0.2, 0.8, 1);
  const mid = velocityForEnergy(0.6, 0.8, 1);
  const peak = velocityForEnergy(1, 1, 1.6);
  const softAccent = velocityForEnergy(0.8, 0.2, 1);
  const strongAccent = velocityForEnergy(0.8, 0.9, 1);
  assert.ok(quiet < mid && mid < peak, `${quiet} < ${mid} < ${peak}`);
  assert.ok(softAccent < strongAccent, `${softAccent} < ${strongAccent}`);
  assert.ok(peak <= 107, `forte ceiling should leave headroom below MIDI 127, got ${peak}`);
});

test('style groove carries written accents into a stable, bounded velocity contour', () => {
  const groove = grooveForStyle(resolveStyle({ genreId: 'country', styleId: 'country-honky-tonk' }));
  const input = { beatInBar: 0, beatsPerBar: 4, role: 'comp' as const, seed: 481,
    bpm: 112, intensity: 0.7, ensembleSeed: 72 };
  const strong = grooveVelocityMultiplier(groove, { ...input, accent: 1 });
  const soft = grooveVelocityMultiplier(groove, { ...input, accent: 0.3 });
  assert.ok(strong > soft * 2, `${strong} should articulate more than ${soft}`);
  assert.equal(grooveVelocityMultiplier(groove, { ...input, accent: 1 }), strong,
    'the phrase contour is seeded, not re-randomized on each render');
});

test('phrase dynamics share a stable band breath with small player-specific expression', () => {
  const groove = grooveForStyle(resolveStyle({ genreId: 'country', styleId: 'country-honky-tonk' }));
  const common = { beatInBar: 1.5, beatsPerBar: 4, accent: 0.72, bpm: 112, intensity: 0.7,
    ensembleSeed: 918, ensemblePosition: 9.5 };
  const piano = grooveVelocityMultiplier(groove, { ...common, role: 'comp', seed: 104 });
  const bass = grooveVelocityMultiplier(groove, { ...common, role: 'bass', seed: 807 });
  assert.ok(Math.abs(piano - bass) < 0.08, `${piano} and ${bass} should breathe together`);
  assert.equal(grooveVelocityMultiplier(groove, { ...common, role: 'comp', seed: 104 }), piano,
    'phrase breathing stays deterministic for playback and export');
});

test('performers enrich beginner guides with authored style phrasing and keep intentional space', () => {
  const pugliese = resolveStyle({ genreId: 'tango', styleId: 'tango-pugliese' });
  const electrotango = resolveStyle({ genreId: 'tango', styleId: 'tango-electrotango-gotan' });
  assert.ok((pugliese.rhythm.grooveMechanics?.roughness ?? 0) > (electrotango.rhythm.grooveMechanics?.roughness ?? 0),
    'dramatic acoustic tango gets more mugre than the loop-led electronic style');
  const offsetSpan = (style: typeof pugliese) => {
    const groove = grooveForStyle(style);
    const offsets = Array.from({ length: 32 }, (_, i) => applyFeel(groove, {
      beatInBar: i % 4, beatsPerBar: 4, role: 'lead', accent: i % 4 === 0 ? .9 : .5,
      seed: 100 + i, bpm: 120, intensity: .8, ensembleSeed: 17, ensemblePosition: i * .5,
    }).offsetMs);
    return Math.max(...offsets) - Math.min(...offsets);
  };
  assert.ok(offsetSpan(pugliese) > offsetSpan(electrotango),
    'mugre adds a bounded phrase and attack grain instead of a generic shuffle');

  const expressive = getPerformanceGrammar(resolveStyle({ genreId: 'jazz', styleId: 'jazz-hard-bop' }));
  const spacious = getPerformanceGrammar(resolveStyle({ genreId: 'classical', styleId: 'classical-minimalist' }));
  assert.ok(expressive.allowDerivedAttacks > .28 && expressive.allowDerivedPitch > .2,
    'a style with an authored rapid-run language can embellish a beginner cell');
  assert.ok(expressive.subdivisionVocabulary?.lead?.includes(8),
    'rapid-run styles permit their authored finer connection without imposing it on every genre');
  assert.equal(spacious.allowDerivedAttacks, 0, 'minimalist cells keep their intentional space');

  const hardBop = compileWholeSong(createCatalogSong('jazz-hard-bop_song'));
  assert.ok(hardBop.notes.some(note => note.soundContext?.role === 'lead' && note.originCode === 1),
    'the player adds a quiet style-authorized connection inside short gaps between the written guide attacks');

  const canaro = compileWholeSong(createCatalogSong('tango-canaro_song'));
  const lead = canaro.notes.filter(note => note.soundContext?.role === 'lead');
  assert.ok(lead.some(note => note.originCode === 1), 'the rendered player adds a small connection in a real melodic gap');
  assert.ok(new Set(lead.map(note => note.gestureCode)).size > 3,
    'generic beginner articulations are interpreted with the style’s playable touch vocabulary');
});

test('phrase development follows style-local arrangement cells across the catalog', () => {
  const profiles = new Set(ALL_STYLES.map(style => {
    const resolved = resolveStyle({ genreId: style.primaryGenre, styleId: style.id });
    return JSON.stringify(getPerformanceGrammar(resolved).phraseDevelopment);
  }));
  assert.ok(profiles.size >= 100,
    `421 styles should not collapse into a small set of phrase profiles (found ${profiles.size})`);

  const afrobeat = getPerformanceGrammar(resolveStyle({ genreId: 'afrobeat', styleId: 'afrobeat-classic-afrobeat' })).phraseDevelopment!;
  const minimalist = getPerformanceGrammar(resolveStyle({ genreId: 'classical', styleId: 'classical-minimalist' })).phraseDevelopment!;
  const pugliese = getPerformanceGrammar(resolveStyle({ genreId: 'tango', styleId: 'tango-pugliese' })).phraseDevelopment!;
  const drumAndBass = getPerformanceGrammar(resolveStyle({ genreId: 'bass', styleId: 'bass-drum-and-bass' })).phraseDevelopment!;
  assert.ok(afrobeat.repeatProbability > 0,
    'an authored cycle/ostinato vocabulary retains a repeat option');
  assert.equal(minimalist.restProbability, 0,
    'minimalist cells without authored rest events do not acquire generic phrase gaps');
  assert.ok(pugliese.restProbability > minimalist.restProbability,
    'Pugliese ensemble silences inform its own phrase actions');
  assert.equal(drumAndBass.restProbability, 0,
    'a breakbeat identity does not get a rest action from the word “break” alone');
});

test('band interaction models balance roles without flattening counterpoint', () => {
  const simultaneous = { leadOverlap: true, leadAttack: true, pulseAttack: true, harmonyAttack: true, unisonAttack: true };
  assert.equal(roleInteractionMultiplier('homophonic', 'harmony', simultaneous), 0.84,
    'homophonic accompaniment yields when it masks the lead');
  assert.equal(roleInteractionMultiplier('interlock', 'comp', simultaneous), 0.84,
    'interlocking comping yields on a pulse attack');
  assert.equal(roleInteractionMultiplier('unison', 'lead', simultaneous), 1.03,
    'unison ensemble attacks reinforce one another');
  assert.equal(roleInteractionMultiplier('counterpoint', 'harmony', simultaneous), 1,
    'counterpoint lines are not ducked by a generic overlap rule');
});

test('returning blues verses use an existing same-style teaching variation', () => {
  const song = createCatalogSong('blues-modern-blues_song');
  const verses = song.regions.filter(region => region.kind === 'verse');
  assert.ok(verses.length >= 2);
  const guitar = song.tracks.find(track => track.instrumentId === 'guitar')!;
  const first = song.arrangement[verses[0].id][guitar.id];
  const returned = song.arrangement[verses[1].id][guitar.id];
  const variation = PATTERNS_BY_ID[returned];
  assert.notEqual(returned, first, 'the return should develop instead of photocopying the opening cell');
  assert.equal(variation?.arrangementVariation, true);
  assert.ok(variation?.styleIds?.includes(song.styleId!));
  assert.ok(variation?.instruments?.includes('guitar'));
  assert.ok(variation?.roles.includes(guitar.role));
});

test('Arabic Takht sample gives taqsim a solo voice and distinct section cells to its ensemble', () => {
  const song = createCatalogSong('arabic-takht_song');
  const taqsim = song.regions.find(region => region.kind === 'taqsim')!;
  assert.deepEqual(taqsim.activeInstrumentIds, ['ney']);
  const pattern = (instrumentId: string, section: string) => {
    const track = song.tracks.find(part => part.instrumentId === instrumentId)!;
    const region = song.regions.find(part => part.kind === section)!;
    return song.arrangement[region.id][track.id];
  };
  assert.notEqual(pattern('ney', 'intro'), pattern('ney', 'response'));
  assert.notEqual(pattern('violin', 'intro'), pattern('violin', 'response'));
  assert.notEqual(pattern('oud', 'verse'), pattern('oud', 'response'));
  assert.notEqual(pattern('qanun', 'verse'), pattern('qanun', 'response'));
});

test('reference score sections begin with their authored instrument cells', () => {
  const verify = (styleId: string, instrumentId: string, section: string, expectedName: string) => {
    const song = createCatalogSong(`${styleId}_song`);
    const region = song.regions.find(part => part.kind === section);
    assert.ok(region, `${styleId} has a ${section} section`);
    const track = song.tracks.find(part => part.instrumentId === instrumentId);
    assert.ok(track, `${styleId} includes ${instrumentId}`);
    const patternId = song.arrangement[region.id]?.[track.id];
    assert.equal(PATTERNS_BY_ID[patternId ?? '']?.shortName, expectedName,
      `${styleId}/${section}/${instrumentId} starts from its section-authored pattern`);
  };

  verify('flamenco-sevillanas', 'cajon', 'link', 'Cajón link remate');
  verify('cinematic-modern-score', 'synth', 'ostinato', 'Synth ostinato');
  verify('cinematic-modern-score', 'synth', 'build', 'Synth Resolution');
  verify('pop-power-pop', 'synth', 'chorus', 'Synth swell');
  verify('tango-chacarera-crossover', 'violin', 'interlude', 'Violin interlude');
});

test('country sample phrases develop through same-instrument teaching variations', () => {
  const song = createCatalogSong('country-bluegrass_song');
  const verse = song.regions.find(region => region.kind === 'verse')!;
  const banjo = song.tracks.find(track => track.instrumentId === 'banjo')!;
  const ids = [...new Set(song.measures.filter(measure => measure.regionId === verse.id)
    .map(measure => measure.patternDetailsByTrack?.[banjo.id]?.patternId).filter((id): id is string => !!id))];
  assert.ok(ids.length > 1, 'the bluegrass banjo line should change within a long verse');
  for (const id of ids) {
    const pattern = PATTERNS_BY_ID[id]!;
    assert.ok(pattern.instruments?.includes('banjo'), `${pattern.shortName} must remain playable on banjo`);
    assert.ok(pattern.sourceLevel !== 'style-authored' || pattern.styleIds?.includes('country-bluegrass'),
      `${pattern.shortName} must remain inside the selected bluegrass style`);
  }
});

test('catalog songs expose an explicit full teaching roster without generic support cells', () => {
  for (const styleId of ['blues-piedmont', 'persian-radif', 'ambient-drone']) {
    const song = createCatalogSong(`${styleId}_song`);
    const authoredIds = new Set(getStyle(styleId)!.arrangement!.ensemble!.flatMap(part => part.instrumentIds));
    const songIds = new Set(song.tracks.map(track => track.instrumentId!));
    assert.ok([...authoredIds].filter(instrumentId => instrumentId !== 'voice').every(instrumentId => songIds.has(instrumentId)),
      `${styleId} keeps its authored core roster`);
    assert.ok(songIds.size >= 8, `${styleId} exposes the full teaching roster`);
    assert.equal(Object.values(song.lockedPatternAssignments ?? {}).flatMap(Object.values)
      .some(patternId => PATTERNS_BY_ID[patternId]?.sourceLevel === 'sample-support'), false);
  }
  const tonas = createCatalogSong('flamenco-tonas-martinetes_song');
  assert.ok(tonas.tracks.some(track => track.instrumentId === 'voice'));
  assert.ok(new Set(tonas.tracks.map(track => track.instrumentId)).size >= 8,
    'unaccompanied tonás retains its vocal core while exposing the full teaching roster');
});

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
  const samples = compileSamplePlan(performance, { trackInstruments: new Map([['p', 'piano']]), worldId: 'tango' });
  const sampledAttack = samples.events.find(sample => sample.type === 'on');
  assert.equal(sampledAttack?.type === 'on' ? sampledAttack.key : -1, 69);
  assert.ok(Math.abs((sampledAttack?.type === 'on' ? sampledAttack.cents : 0) - 23) < 1e-8,
    'sample planning preserves the score tuning without per-note voice preparation');
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

test('a guest metal part retains its power voicing and recorded electric sound inside a tango song', () => {
  withFusionPhrase('guitar','harmony','guitar','harmony',[
    {position:0,duration:1,pitch:{voicing:'chord',register:48},articulation:'legato'},
    {position:2,duration:1,pitch:{voicing:'chord',register:48},articulation:'legato'},
  ],song=>{
    const region=song.regions[0],track=song.tracks[0];
    const fused=rebuild({...song,partLens:{[region.id]:{[track.id]:{genreId:'metal',styleId:'metal-heavy-metal',weight:1}}}});
    const performance=compileWholeSong(fused),written=performance.notes.filter(note=>note.originCode===0);
    const attacks=new Map<string,typeof written>();
    for(const note of written){const group=attacks.get(note.attackId!)??[];group.push(note);attacks.set(note.attackId!,group);}
    assert.equal(attacks.size,2,'both written attacks survive the assignment');
    for(const group of attacks.values()){
      const midis=group.map(note=>note.midi).sort((a,b)=>a-b);
      assert.deepEqual(midis.map(midi=>midi-midis[0]),[0,7,12]);
      assert(group.every(note=>note.soundContext?.worldId==='metal'&&note.soundContext.styleId==='metal-heavy-metal'));
    }
    const plan=compileSamplePlan(performance,songMixOptions(fused));
    assert(plan.events.filter(event=>event.type==='on').every(event=>event.type==='on'&&event.patch.pack==='electricDrive'),
      'the guest metal part reaches its recorded electric source instead of inheriting tango nylon');
    assert.deepEqual(fused.measures.map(measure=>measure.chord),song.measures.map(measure=>measure.chord));
  });
});

test('guest tuning survives the musician score and sample boundary without changing written pitches', () => {
  withFusionPhrase('guitar','lead','guitar','lead',[
    {position:0,duration:1,pitch:{midi:59,cents:12},articulation:'legato'},
  ],song=>{
    const region=song.regions[0],track=song.tracks[0];
    const fused=rebuild({...song,partLens:{[region.id]:{[track.id]:{genreId:'arabic',styleId:'arabic-tarab',weight:1}}}});
    const performance=compileWholeSong(fused),note=performance.notes.find(note=>note.originCode===0)!;
    assert.equal(note.midi,59);
    const tuning=resolveTuningSystem(resolveStyle({genreId:'arabic',styleId:'arabic-tarab'}).harmony.tuningSystem!);
    const expected=tuning.getFrequencyHz(note.midi,parseChord(note.harmonicChord!).rootPc)*2**(12/1200);
    assert(Math.abs(note.frequencyHz!-expected)<1e-9,'the guest tuning and written cents both reach the final frequency');
    const attack=compileSamplePlan(performance,songMixOptions(fused)).events.find(event=>event.type==='on');
    assert(attack&&attack.type==='on');
    const expectedCents=1200*Math.log2(expected/(440*2**((note.midi-69)/12)));
    assert(Math.abs(attack.cents-expectedCents)<1e-8,'the sample plan preserves the full guest pitch offset');
    assert(Math.abs(expectedCents)>20,'the fixture has a measurable non-equal-tempered offset');
  });
});

test('fusion moves an absolute phrase into the receiving register without cutting its attacks or gates', () => {
  const events: PatternEvent[] = [
    { position: .25, duration: 1.25, pitch: { midi: [78, 82], cents: 17 }, articulation: 'legato' },
    { position: 2, duration: .75, pitch: { midi: [81, 85] }, articulation: 'legato' },
  ];
  const source = structuredClone(events);
  withFusionPhrase('guitar', 'harmony', 'piano', 'harmony', events, song => {
    const attacks = compileNotatedScore(song).sections[0].cells[song.tracks[0].id].bars[0].attacks;
    assert.deepEqual(attacks.map(attack => attack.pitch.kind === 'notes' ? attack.pitch.value.midi : undefined),
      [[66, 70], [69, 73]], 'the whole phrase moves one octave, retaining both voices and its intervals');
    assert.deepEqual(attacks.map(attack => beatValue(attack.position)), [.25, 2]);
    assert.deepEqual(attacks.map(attack => beatValue(attack.duration)), [1.25, .75]);
    const performance = compileWholeSong(song);
    const written = performance.notes.filter(note => note.originCode === 0);
    assert.deepEqual(written.map(note => note.midi).sort((a, b) => a - b), [66, 69, 70, 73]);
    assert.ok(compileSamplePlan(performance, songMixOptions(song)).events.some(event => event.type === 'on'));
  });
  withFusionPhrase('piano', 'harmony', 'piano', 'harmony', events, song => {
    const attacks = compileNotatedScore(song).sections[0].cells[song.tracks[0].id].bars[0].attacks;
    assert.deepEqual(attacks.map(attack => attack.pitch.kind === 'notes' ? attack.pitch.value.midi : undefined),
      [[78, 82], [81, 85]], 'the original player keeps its literal written register');
  });
  withFusionPhrase('violin', 'lead', 'guitar', 'lead', [{ position: 1 / 3, duration: .75,
    pitch: { midi: 66 }, notation: { string: 1, fret: 2, tuplet: { actual: 3, normal: 2 } } }], song => {
    const attack = compileNotatedScore(song).sections[0].cells[song.tracks[0].id].bars[0].attacks[0];
    assert.equal(attack.pitch.kind === 'notes' && attack.pitch.value.midi, 66);
    assert.equal(attack.notation?.string, undefined, 'a guitar string number cannot retune the violin phrase');
    assert.equal(attack.notation?.fret, undefined);
    assert.deepEqual(attack.notation?.tuplet, { actual: 3, normal: 2 }, 'the musical notation survives the instrument change');
    assert.ok(compileWholeSong(song).notes.some(note => note.originCode === 0 && note.midi === 66));
  });
  assert.deepEqual(events, source, 'arranging the receiving part does not mutate the source pattern');
});

test('fusion turns chordal material into a playable wind line or a requested bass voice', () => {
  const events: PatternEvent[] = [
    { position: 0, duration: .8, pitch: { midi: [72, 76, 79] } },
    { position: 2, duration: .8, pitch: { midi: [74, 77, 81] } },
  ];
  for (const [instrumentId, role, expected] of [
    ['flute', 'harmony', [[79], [81]]],
    ['piano', 'bass', [[48], [50]]],
    ['flute', 'bass', [[60], [62]]],
  ] as const) {
    withFusionPhrase(instrumentId, role, 'piano', 'harmony', events, song => {
      const cell = compileNotatedScore(song).sections[0].cells[song.tracks[0].id];
      assert.equal(cell.role, role, 'the receiving role remains the requested role');
      assert.deepEqual(cell.bars[0].attacks.map(attack => attack.pitch.kind === 'notes' ? attack.pitch.value.midi : undefined), expected);
      const written = compileWholeSong(song).notes.filter(note => note.originCode === 0);
      assert.equal(written.length, 2, 'each source attack becomes one playable line attack');
      assert.deepEqual(written.map(note => note.midi), expected.flat());
    });
  }
  const chords: PatternEvent[] = [{ position: 0, duration: .8, pitch: { voicing: 'chord' } },
    { position: 2, duration: .8, pitch: { voicing: 'chord' } }];
  for (const role of ['harmony', 'bass'] as const) {
    withFusionPhrase('flute', role, 'piano', 'harmony', chords, song => {
      const written = compileWholeSong(song).notes.filter(note => note.originCode === 0);
      assert.equal(written.length, 2, `${role} produces one flute line through both chord gestures`);
      assert.ok(written.every(note => note.midi >= 60 && note.midi <= 96), 'a high instrument can keep a bass contour in its own register');
    });
  }
  for (const instrumentId of ['marimba', 'mandolin']) {
    withFusionPhrase(instrumentId, 'harmony', 'piano', 'harmony', events, song => {
      const written = compileWholeSong(song).notes.filter(note => note.originCode === 0);
      assert.equal(written.length, 6, `${instrumentId} keeps all three playable chord voices at both attacks`);
      assert.deepEqual(written.map(note => note.midi).sort((a, b) => a - b), [72, 74, 76, 77, 79, 81]);
    });
  }
});

test('timpani retain tuned pitch and bass-staff notation instead of fixed kit notes', () => {
  withFusionPhrase('timpani', 'percussion', 'timpani', 'percussion', [
    { position: 0, duration: .6, articulation: 'open' },
    { position: 2, duration: .6, articulation: 'open' },
  ], song => {
    const notation = compileNotatedScore(song).sections[0].cells[song.tracks[0].id];
    assert.equal(notation.rules.clef, 'bass');
    assert.equal(notation.rules.staffLines, 5);
    assert.ok(notation.bars[0].attacks.every(attack => attack.pitch.kind !== 'drum'));
    const tones = (chord: string) => compileWholeSong(setSectionChords(song, song.regions[0].id, [chord]))
      .notes.filter(note => note.originCode === 0);
    const c = tones('C'), eb = tones('Eb');
    assert.ok(c.length > 0 && c.every(note => !note.percussion && note.midi >= 38 && note.midi <= 60));
    assert.deepEqual(eb.map(note => note.midi % 12), c.map(note => (note.midi + 3) % 12),
      'the tuned part follows the harmony instead of repeating fixed B/D/F drum-key numbers');
  });
});

test('fusion transfers percussion rhythm and contact meaning instead of leaking raw MIDI key numbers', () => {
  const events: PatternEvent[] = [
    { position: 0, duration: .2, pitch: { midi: 36 }, kind: 'accent' },
    { position: .75, duration: .3, pitch: { midi: 40 }, kind: 'attack' },
  ];
  withFusionPhrase('piano', 'harmony', 'drums', 'percussion', events, song => {
    const attacks = compileNotatedScore(song).sections[0].cells[song.tracks[0].id].bars[0].attacks;
    assert.deepEqual(attacks.map(attack => beatValue(attack.position)), [0, .75]);
    assert.ok(attacks.every(attack => attack.pitch.kind === 'instruction' && attack.pitch.instruction === 'voice-chord'),
      'kit contact numbers become a pitched role instruction in the current harmony');
    const performance = compileWholeSong(song);
    assert.ok(performance.notes.length > 0 && performance.notes.every(note => !note.percussion));
    assert.ok(compileSamplePlan(performance, songMixOptions(song)).events.some(event => event.type === 'on'));
  });
  withFusionPhrase('bongos', 'percussion', 'drums', 'percussion', events, song => {
    const attacks = compileNotatedScore(song).sections[0].cells[song.tracks[0].id].bars[0].attacks;
    const keys = attacks.map(attack => attack.pitch.kind === 'drum' ? attack.pitch.drum.midi : undefined);
    const contacts = new Set(INSTRUMENTS_BY_ID.bongos.kitComponents!.map(component => component.midi));
    assert.ok(keys.every(key => contacts.has(key!)), `the destination uses its own playable contacts: ${keys.join(', ')}`);
    assert.ok(new Set(keys).size > 1, 'low and accented source contacts retain their contrast');
    assert.ok(compileSamplePlan(compileWholeSong(song), songMixOptions(song)).events.some(event => event.type === 'on'));
  });
  withFusionPhrase('drums', 'percussion', 'piano', 'harmony', [
    { position: 0, duration: .4, pitch: { midi: [64, 67, 71] } },
    { position: 1.5, duration: .4, pitch: { midi: [65, 69, 72] } },
  ], song => {
    const attacks = compileNotatedScore(song).sections[0].cells[song.tracks[0].id].bars[0].attacks;
    assert.equal(attacks.length, 2, 'each chord gesture becomes a rhythmic contact');
    const keys = new Set(INSTRUMENTS_BY_ID.drums.kitComponents!.map(component => component.midi));
    assert.ok(attacks.every(attack => attack.pitch.kind === 'drum' && keys.has(attack.pitch.drum.midi)),
      'melodic MIDI numbers cannot choose unrelated kit voices');
    assert.ok(compileSamplePlan(compileWholeSong(song), songMixOptions(song)).events.some(event => event.type === 'on'));
  });
});

test('specific kit contacts retain rimshot, ghost, cross-stick and pedal identities through interpretation', () => {
  for (const [source, component, intent] of [
    ['snare-rimshot', 'snare-rimshot', 'slap'],
    ['snare-ghost', 'snare-ghost', 'ghost'],
    ['snare-cross-stick', 'snare-cross-stick', 'rim'],
    ['hihat-pedal', 'hihat-pedal', 'mute'],
    ['ride-bell', 'ride-bell', 'bell'],
  ] as const) {
    assert.equal(resolveNotatedDrum('drums', source, 'tone', 0).componentId, component);
    assert.equal(kitHitIntent(source, 'tone'), intent);
  }
  for (const instrument of INSTRUMENT_CATALOG) for (const contact of instrument.kitComponents ?? []) {
    const native = resolveNotatedDrum(instrument.id, contact.id, 'tone', 0);
    assert.equal(native.componentId, contact.id, `${instrument.id}/${contact.id} retains its exact contact identity`);
    assert.equal(native.midi, contact.midi);
    for (const receiver of ['drums', 'bongos', 'tabla', 'cajon']) {
      const transferred = resolveNotatedDrum(receiver, contact.id, 'tone', 0);
      assert.ok(INSTRUMENTS_BY_ID[receiver].kitComponents?.some(component => component.id === transferred.componentId),
        `${instrument.id}/${contact.id} transfers to a playable ${receiver} contact`);
    }
  }
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
