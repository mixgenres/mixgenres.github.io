import test from 'node:test';
import assert from 'node:assert/strict';
import { progressionForSection } from '../src/engine/sheet/arrangementContext';
import { makeSheet, toBar } from '../src/engine/sheet/sheet';
import { VoiceLeadingResolver } from '../src/engine/band/voiceLeading';
import { createPhraseState, realizeMidi, type PhraseContext } from '../src/engine/band/phrasePerformance';
import { arrangeBand } from '../src/engine/band/arrangeBand';
import type { PerfNote, Performance } from '../src/engine/band/performanceData';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';
import { blendGenreTheory, getGenreTheory, styleTheoryFor } from '../src/engine/lookup/theory';
import { GENRE_WORLDS, GENRE_WORLDS_BY_ID } from '../src/data/genres';
import { CATALOG_INFERRED_THEORY_GENRES } from '../src/data/musicTheory/genreTheory';
import { compileSamplePlan } from '../src/engine/playback/soundfont/plan';
import { resolveTuningSystem } from '../src/engine/sheet/tuning';
import { parseChord, scalePcsForMode } from '../src/engine/sheet/musicTheory';
import { INSTRUMENT_CATALOG } from '../src/engine/lookup/instruments';
import { createCatalogSong } from '../src/engine/sheet/songCatalog';

const note = (time = 0, midi = 60): PerfNote => ({ time, dur: 0.1, midi, vel: 80, trackId: 'keys', bar: 0,
  gestureCode: 0, hitFunctionCode: 0, accent: 0.8 });
const samplePerformance = (instrumentId: string, notes: PerfNote[]): Performance => ({ notes, ccs: [], bars: [],
  duration: 1, tail: .5, blends: {}, trackInfo: { keys: { instrumentId, role: 'harmony' } }, worldId: 'folk' });

test('tonic-relative phrases keep their melody through chord changes while chord-relative parts follow harmony', () => {
  const context = { profile: getInstrumentPerformanceProfile('piano'), pattern: { roles: ['lead'] }, role: 'lead',
    hybridTheory: styleTheoryFor('tango-golden-age', 'tango'), tonicPc: 9,
    authoredPitch: { degree: 3, register: 60, reference: 'tonic' } } as PhraseContext;
  const pitches = ['Am', 'Dm', 'E7', 'F'].map(chord => realizeMidi({ ...context, chord }, 0, 1, createPhraseState())[0]);
  assert.ok(pitches.every(midi => midi === pitches[0]), 'the same written melody note is not transposed with every root');
  assert.equal(pitches[0] % 12, 0, 'A harmonic-minor third remains C even over E7');
  const relative = ['Am', 'Dm', 'E7'].map(chord => realizeMidi({ ...context, chord,
    authoredPitch: { ...context.authoredPitch, reference: 'chord' } }, 0, 1, createPhraseState())[0] % 12);
  assert.deepEqual(relative, [0, 5, 8], 'chord-relative accompaniment still honors written chord quality');
});

test('relative melody range fitting moves the whole contour instead of folding its last note down', () => {
  const events = [0, 4, 7, 12].map((semitoneOffset, position) => ({ position,
    pitch: { semitoneOffset, reference: 'tonic' as const, register: 80 } }));
  const context = { profile: getInstrumentPerformanceProfile('voice'), pattern: { roles: ['lead'], events }, role: 'lead',
    hybridTheory: styleTheoryFor('pop-contemporary', 'pop'), chord: 'C', tonicPc: 0 } as PhraseContext;
  const notes = events.map((event, index) => realizeMidi({ ...context, authoredPitch: event.pitch }, index, 4, createPhraseState())[0]);
  assert.deepEqual(notes.map(midi => midi - notes[0]), [0, 4, 7, 12]);
  assert.ok(notes.every(midi => midi >= context.profile.capabilities.lowMidi && midi <= context.profile.capabilities.highMidi));
});

test('bass settings cannot prescribe a melody cadence or replace a fused bass motion', () => {
  const theory = styleTheoryFor('jazz-hard-bop', 'jazz');
  const context = { profile: getInstrumentPerformanceProfile('violin'), pattern: { roles: ['lead'] }, role: 'lead',
    chord: 'C', nextChord: 'Dm', phrasePosition: .95, phraseIndex: 0, onsetIndex: 0, hit: 'tone',
    hybridTheory: { ...theory, melody: { ...theory.melody, targetDegrees: [3], pitchSequence: undefined } },
    hostProfile: { register: { highBias: .5 } }, hostGenre: 'jazz' } as PhraseContext;
  const state = { ...createPhraseState(), previousMidi: 60 };
  assert.equal(realizeMidi(context, 0, 1, state)[0] % 12, 4, 'walking bass approaches cannot force a lead onto the next D root');
  const bass = { ...context, profile: getInstrumentPerformanceProfile('bass'), role: 'bass', hostGenre: 'salsa',
    pattern: { roles: ['bass'], meter: '4/4' }, bassStyle: 'rootFifth', onsetPosition: .875,
    hybridTheory: { ...theory, bass: { ...theory.bass, anticipationBeats: [3.5] } } } as PhraseContext;
  assert.equal(realizeMidi(bass, 0, 2, createPhraseState())[0] % 12, 0,
    'a selected root-fifth part is not converted to tumbao merely because the host is salsa');
});

test('rhythm-to-melody fusion uses the selected style phrase with repeated notes intact', () => {
  const theory = styleTheoryFor('metal-thrash', 'metal');
  const context = { profile: getInstrumentPerformanceProfile('piano'), pattern: { roles: ['lead'] }, role: 'lead',
    hybridTheory: theory, chord: 'C5', tonicPc: 0, hostGenre: 'tango', phraseIndex: 0 } as PhraseContext;
  const played = Array.from({ length: 8 }, (_, index) => realizeMidi({ ...context, phraseAttackIndex: index }, index, 8, createPhraseState())[0] % 12);
  assert.deepEqual(played, [0, 0, 0, 1, 0, 7, 0, 0],
    'the thrash pedal and semitone attack are not converted into a shared triadic climb');
});

test('rhythm-to-bass fusion retains written interval contours and chord anticipations', () => {
  const theory = styleTheoryFor('gnawa-gnawa-rock', 'gnawa');
  const context = { profile: getInstrumentPerformanceProfile('bass'), pattern: { roles: ['percussion'] }, role: 'bass',
    hybridTheory: theory, chord: 'C5', tonicPc: 0, hostGenre: 'tango', bassStyle: theory.bass.style } as PhraseContext;
  const sequence = theory.bass.pitchSequence!;
  assert.ok(sequence.length > 4);
  const played = sequence.map((_, index) => realizeMidi({ ...context, phraseAttackIndex: index }, index, sequence.length, createPhraseState())[0] % 12);
  assert.deepEqual(played, [0,7,0,3,0,7,0,7,3,0,0],
    'the repeated guembri phrase is not replaced by a root/fifth generator');
  assert.equal(realizeMidi({ ...context, profile: getInstrumentPerformanceProfile('piano'), phraseAttackIndex: 0 },0,sequence.length,createPhraseState())[0],36,
    'a piano assigned the bass job keeps the written low register instead of moving the line to middle C');
  const anticipated = { ...context, chord: 'C', nextChord: 'F', hybridTheory: { ...theory,
    bass: { ...theory.bass, pitchSequence: [{ degree: 1, reference: 'next-chord' as const }] } } };
  assert.equal(realizeMidi(anticipated,0,1,createPhraseState())[0] % 12,5);
});

test('a bass instrument assigned to lead follows the lead phrase rather than its default bass job', () => {
  const theory = styleTheoryFor('pop-contemporary', 'pop');
  const context = { profile: getInstrumentPerformanceProfile('bass'), pattern: { roles: ['percussion'] }, role: 'lead',
    chord: 'C', tonicPc: 0, hybridTheory: { ...theory, melody: { ...theory.melody,
      pitchSequence: [0,4,7].map(semitoneOffset => ({ semitoneOffset, reference: 'tonic' as const })) } } } as PhraseContext;
  assert.deepEqual([0,1,2].map(index => realizeMidi({ ...context, phraseAttackIndex: index },index,3,createPhraseState())[0] % 12),[0,4,7]);
});

test('partial fusion preserves repeated, ordered pitch anchors', () => {
  const base = getGenreTheory('jazz');
  const host = { ...base, melody: { ...base.melody, targetDegrees: [1, 3, 1, 5] }, bass: { ...base.bass, targetDegrees: [1, 1, 5, 1] } };
  const guest = { ...base, melody: { ...base.melody, targetDegrees: [5, 2, 5, 1] }, bass: { ...base.bass, targetDegrees: [1, 5, 1, 3] } };
  for (const [weight, expected] of [[.4, host], [.72, guest]] as const) {
    const blended = blendGenreTheory(host, guest, weight);
    assert.deepEqual(blended.melody.targetDegrees, expected.melody.targetDegrees);
    assert.deepEqual(blended.bass.targetDegrees, expected.bass.targetDegrees);
  }
});

test('written bass anticipations follow the next chord without changing other attacks', () => {
  const context = { profile: getInstrumentPerformanceProfile('bass'), pattern: { roles: ['bass'] }, role: 'bass',
    hybridTheory: styleTheoryFor('timba-songo', 'timba'), chord: 'Am7', nextChord: 'D7',
    authoredPitch: { degree: 1, register: 36, reference: 'next-chord' } } as PhraseContext;
  assert.equal(realizeMidi(context, 0, 1, createPhraseState())[0] % 12, 2);
  assert.equal(realizeMidi({ ...context, authoredPitch: { ...context.authoredPitch, reference: 'chord' } }, 0, 1, createPhraseState())[0] % 12, 9);
});

test('pedal bass does not acquire a shared leading tone at the end of a bar', () => {
  const context = { profile: getInstrumentPerformanceProfile('bass'), pattern: { roles: ['bass'], meter: '4/4' }, role: 'bass',
    hybridTheory: styleTheoryFor('ambient-drone', 'ambient'), chord: 'D5', nextChord: 'D5', bassStyle: 'pedal', hostGenre: 'ambient' } as PhraseContext;
  assert.deepEqual([0,1,2,3].map(index => realizeMidi(context,index,4,createPhraseState())[0] % 12), [2,2,2,2]);
});

test('riff bass retains ninths and its own late-phrase tones', () => {
  const base = styleTheoryFor('funk-funk', 'funk');
  const context = { profile: getInstrumentPerformanceProfile('bass'), pattern: { roles: ['bass'], meter: '4/4' }, role: 'bass',
    hybridTheory: { ...base, bass: { ...base.bass, targetDegrees: [1,9], chromaticApproach: false } },
    chord: 'C7', nextChord: 'D7', bassStyle: 'riff', hostGenre: 'funk', phrasePosition: .95, barIndex: 0, phraseEnd: 1 } as PhraseContext;
  assert.deepEqual([0,1].map(index => realizeMidi(context,index,2,createPhraseState())[0] % 12), [0,2],
    'a ninth is not clamped to the seventh, and late notes do not all turn into the next root approach');
});

test('modal funk and blues-form big-band phrases retain the written center instead of an inferred dominant resolution', () => {
  for (const style of ['funk-funk', 'jazz-big-band']) {
    const song = createCatalogSong(`${style}_song`), performance = arrangeBand(song);
    const openingRoot = parseChord(song.regions[0].chords![0]).rootPc;
    const melodyRoots = new Set(performance.notes.map(note => note.tuningRootPc).filter(root => root !== undefined));
    assert.deepEqual(melodyRoots, new Set([openingRoot]), `${style} keeps its authored modal/blues center`);
  }
});

test('guide-tone and shell policies retain different harmonic jobs without reducing literal score voicings', () => {
  const theory=getGenreTheory('jazz');
  const play=(voicing:'guide-tone'|'shell',chord:string,authoredPitch?:PhraseContext['authoredPitch'])=>realizeMidi({
    profile:getInstrumentPerformanceProfile('piano'),pattern:{roles:['harmony']},role:'harmony',chord,phrasePosition:.2,
    hybridTheory:{...theory,harmony:{...theory.harmony,voicing}},authoredPitch,
  } as PhraseContext,0,1,createPhraseState());
  const pcs=(notes:number[])=>[...new Set(notes.map(midi=>midi%12))].sort((a,b)=>a-b);
  assert.deepEqual(pcs(play('shell','Cmaj13')),[0,4,11],'shell: root, third, seventh');
  assert.deepEqual(pcs(play('guide-tone','Cmaj13')),[2,4,9,11],'guide-tone: third, seventh and written extensions');
  assert.deepEqual(pcs(play('guide-tone','C')),[4,7],'triads keep an audible rootless third and fifth');
  assert.deepEqual(pcs(play('shell','Cm7')),[0,3,10]);
  for(const policy of ['shell','guide-tone'] as const) {
    assert.deepEqual(pcs(play(policy,'C5')),[0,7],'a power chord cannot lose its fifth');
    assert.deepEqual(play(policy,'Cmaj13',{midi:[48,52,55,59,62,69]}),[48,52,55,59,62,69]);
  }
});

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
  assert.deepEqual(styleTheoryFor(homeStyle('amapiano').id, 'amapiano').bass.targetDegrees, [1, 5, 8, 3],
    'Amapiano bass targets retain its written root, fifth, octave and third instead of importing an unplayed seventh');
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

test('authored chord registers survive voicing and a preceding lower chord', () => {
  const theory = getGenreTheory('jazz');
  const context = { profile: getInstrumentPerformanceProfile('piano'),
    pattern: { roles: ['harmony'] }, role: 'harmony', chord: 'Cmaj7', phrasePosition: .2,
    hybridTheory: { ...theory, harmony: { ...theory.harmony, voicing: 'close' } },
    authoredPitch: { voicing: 'chord', register: 48 },
  } as PhraseContext;
  const state = createPhraseState();
  const low = realizeMidi(context, 0, 2, state);
  const high = realizeMidi({ ...context, authoredPitch: { voicing: 'chord', register: 72 } }, 1, 2, state);
  assert.ok(Math.min(...low) < 60);
  assert.ok(Math.min(...high) >= 72, 'a written upper chord cannot inherit the preceding lower voicing');
  assert.deepEqual(new Set(high.map(midi => midi % 12)), new Set(low.map(midi => midi % 12)),
    'the register change preserves the written chord quality');
});

test('power voicings retain their root-fifth-octave shape through range fitting and voice leading', () => {
  const theory = styleTheoryFor('metal-heavy-metal', 'metal');
  for (const instrument of ['guitar', 'piano', 'marimba', 'flute']) {
    const profile = getInstrumentPerformanceProfile(instrument), state = createPhraseState();
    const context = { profile, role: 'harmony', pattern: { roles: ['harmony'] },
      hybridTheory: theory, authoredPitch: { voicing: 'chord' }, chord: 'C5' } as PhraseContext;
    const count = instrument === 'flute' ? 1 : 3;
    for (const chord of ['C5', 'D5', 'F#5', 'Bb5', 'C5']) {
      const voiced = realizeMidi({ ...context, chord }, 0, 1, state);
      assert.equal(voiced.length, count, `${instrument}/${chord}: retain the complete playable power shape`);
      assert.deepEqual(voiced.map(note => note - voiced[0]), [0, 7, 12].slice(0, count));
      assert.equal(voiced[0] % 12, parseChord(chord).rootPc);
      assert(voiced.every(note => note >= profile.capabilities.lowMidi && note <= profile.capabilities.highMidi));
      assert.deepEqual(realizeMidi({ ...context, chord }, 0, 1, state), voiced, 'a repeated chord retains its register');
    }
  }
});

test('drop-two lowers the second-highest close voice and keeps all chord material', () => {
  const theory = styleTheoryFor('r-and-b-neo-soul', 'r-and-b');
  const context = { profile: getInstrumentPerformanceProfile('piano'), role: 'harmony', pattern: { roles: ['harmony'] },
    chord: 'Cmaj7', hybridTheory: theory, authoredPitch: { voicing: 'chord', register: 60 } } as PhraseContext;
  const state = createPhraseState();
  assert.deepEqual(realizeMidi(context, 0, 1, state), [55, 60, 64, 71]);
  const next = { ...context, chord: 'Dm7', authoredPitch: { voicing: 'chord' as const } };
  assert.deepEqual(realizeMidi(next, 0, 1, state), [57, 62, 65, 72],
    'a chord change follows the whole shape rather than re-spacing each pitch independently');
  assert.deepEqual(realizeMidi(next, 0, 1, state), [57, 62, 65, 72]);
  assert.deepEqual(realizeMidi({ ...context, authoredPitch: { voicing: 'chord', register: 72 } }, 0, 1, state), [67, 72, 76, 83],
    'a written register change takes precedence over the preceding voicing');
  const extended = realizeMidi({ ...context, chord: 'Cmaj13' }, 0, 1, createPhraseState());
  assert.equal(extended.length, parseChord('Cmaj13').intervals.length);
  assert.deepEqual(new Set(extended.map(note => note % 12)), new Set(parseChord('Cmaj13').intervals.map(iv => iv % 12)),
    'extensions are not discarded to force every chord into four voices');
  const literal = [60, 64, 67, 71];
  assert.deepEqual(realizeMidi({ ...context, authoredPitch: { midi: literal } }, 0, 1, state), literal,
    'literal written notes retain their authored voicing');
});

test('fusion retains the selected style vocabulary across genres and within one genre', () => {
  const host = styleTheoryFor('afrobeat-classic-afrobeat', 'afrobeat');
  for (const guest of [styleTheoryFor('metal-heavy-metal', 'metal'), styleTheoryFor('afrobeat-jazz-heavy-afrobeat', 'afrobeat')]) {
    assert.notDeepEqual(guest.harmony,host.harmony,'the fixture assigns a distinct voicing policy');
    const before = structuredClone({host,guest});
    const full = blendGenreTheory(host,guest,1);
    for (const field of ['harmony','bass','melody','rhythm','techniques','mixFocus'] as const) {
      assert.deepEqual(full[field],guest[field],`${guest.genreId}: a full assignment retains its complete ${field} vocabulary`);
    }
    assert.deepEqual(full.progressions,host.progressions,'the part assignment preserves the written song progression');
    assert.deepEqual(blendGenreTheory(host,guest,0),host);
    assert.deepEqual(blendGenreTheory(host,guest,.8).harmony,guest.harmony,
      'a guest-led blend uses the guest voicing policy rather than always inheriting the host');
    assert.deepEqual({host,guest},before,'resolving a part must not change either source definition');
  }
});

test('power and drop-two harmony adapt to every pitched instrument without range errors or changed chord tones', () => {
  const roots=['C','Db','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
  for(const def of INSTRUMENT_CATALOG){
    if(def.voicing==='unpitched'||def.kit||def.drum)continue;
    const profile=getInstrumentPerformanceProfile(def.id);
    const voices=def.voicing==='single'&&['wind','brass','voice'].includes(profile.family)?1:profile.capabilities.polyphony;
    for(const [genre,style,suffix] of [['metal','metal-heavy-metal','5'],['r-and-b','r-and-b-neo-soul','maj13']]){
      const theory=styleTheoryFor(style,genre);
      for(const root of roots){
        const chord=root+suffix,parsed=parseChord(chord);
        const context={profile,role:'harmony',pattern:{roles:['harmony']},hybridTheory:theory,chord,
          authoredPitch:{voicing:'chord'}} as PhraseContext;
        const written=(suffix==='5'?[0,7,12]:parsed.intervals).slice(0,voices);
        const played=realizeMidi(context,0,1,createPhraseState());
        assert(played.every(note=>Number.isInteger(note)&&note>=profile.capabilities.lowMidi&&note<=profile.capabilities.highMidi),
          `${def.id}/${chord}: all voices fit the receiving instrument`);
        assert.deepEqual(new Set(played.map(note=>note%12)),new Set(written.map(iv=>(parsed.rootPc+iv)%12)),
          `${def.id}/${chord}: octave revoicing retains the authored harmonic material`);
      }
    }
  }
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

test('grid filtering keeps each surviving onset attached to its authored accent and gate', () => {
  const bar = toBar([-1, 3, 15], [.1, .82, .2], [2, 5, 7], 16, 0);
  assert.deepEqual(bar.onsets, [3, 15]);
  assert.deepEqual(bar.accents, [.82, .2]);
  assert.deepEqual(bar.durations, [5, 7]);
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
  assert.equal(attack(withContext)?.type === 'on' ? attack(withContext)?.gain : undefined,
    attack(explicitContext)?.type === 'on' ? attack(explicitContext)?.gain : undefined,
    'a section or role change uses its own source gain as well as its patch');
  assert.ok(withContext.events.some(event => event.type === 'bend' && event.cents > 0), 'the part keeps its authored bend trajectory');
});

test('sample-key selection preserves fractional MIDI pitches and tuning offsets', () => {
  for (const frequency of [false, true]) {
    const authored = { ...note(0, 60.5), tuningCents: 23,
      ...(frequency ? { frequencyHz: 440 * 2 ** ((60.5 - 69) / 12 + 23 / 1200) } : {}) };
    const plan = compileSamplePlan(samplePerformance('piano', [authored]),
      { trackInstruments: new Map([['keys', 'piano']]), worldId: 'folk' });
    const attack = plan.events.find(event => event.type === 'on');
    assert.ok(attack?.type === 'on');
    assert.equal(attack.key, 61);
    assert.ok(Math.abs(attack.cents - -27) < 1e-8,
      'the sampled key retains the written half-semitone and additional tuning');
  }
});

test('late phrase interpretation preserves playing intensity independently of ensemble velocity', async () => {
  const { optimizePerformanceByPhraseAndSong } = await import('../src/engine/band/songPhrasing');
  const sheet = makeSheet('tango', 'tango-golden-age');
  const region = sheet.regions[0];
  const bass = sheet.tracks.find(track => track.role === 'bass')!;
  const piano = sheet.tracks.find(track => track.instrumentId === 'piano')!;
  const bassNotes = Array.from({length:16}, (_,i) => ({...note(i*.15,36), trackId:bass.id,
    bar:region.start+Math.floor(i/4), vel:[54,81,106,127][i%4], harmonicChord:'C', authoredTechnique:true,
    attackId:`bass-${i}`}));
  const make = (accompanimentVelocity: number): Performance => ({
    ...samplePerformance('piano', []), notes:[...bassNotes, ...bassNotes.map((n,i)=>({...n,
      trackId:piano.id, midi:60, vel:accompanimentVelocity, attackId:`piano-${i}`}))],
    trackInfo:Object.fromEntries(sheet.tracks.map(track=>[track.id,{instrumentId:track.instrumentId ?? track.instrument,role:track.role}])) });
  for (const velocity of [30,70,120]) {
    const result=optimizePerformanceByPhraseAndSong(sheet,make(velocity)).performance;
    assert.deepEqual(result.notes.filter(n=>n.trackId===bass.id).map(n=>n.vel),bassNotes.map(n=>n.vel),
      'a mixer correction cannot change the bass sample layers, ghost notes or fortissimo');
    assert.ok(result.notes.filter(n=>n.trackId===piano.id).every(n=>n.vel===velocity),
      'dense accompaniment keeps its written touch');
  }
});
