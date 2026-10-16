import test from 'node:test';
import assert from 'node:assert/strict';
import { makeSheet, rebuild, patternAvailableInSection } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { compileNotatedScore } from '../src/engine/score/notatedScore';
import { createCatalogSong } from '../src/engine/sheet/songCatalog';
import { SONGS_BY_ID } from '../src/data/songs/catalog';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';
import { styleTheoryFor } from '../src/engine/lookup/theory';
import { createPhraseState, realizeMidi, type PhraseContext } from '../src/engine/band/phrasePerformance';
import { GESTURE_NAMES } from '../src/engine/band/gestures';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { sliceBarNative } from '../src/engine/sheet/grid';
import { codeForGesture } from '../src/engine/band/gestures';
import { resolveSampleGesture } from '../src/engine/playback/soundfont/gestures';
import { patchForInstrument, SYNTH_SAMPLE_PROGRAMS } from '../src/engine/playback/soundfont/presets';
import { compileSamplePlan } from '../src/engine/playback/soundfont/plan';
import { ALL_STYLES } from '../src/engine/style';
import { BANDONEON_142_BUTTONS } from '../src/engine/band/fingering/bandoneon';
import { grooveFor, grooveVelocityMultiplier } from '../src/engine/band/groove';

test('silent arrangement parts never acquire fallback attacks', () => {
  const sheet = makeSheet('tango');
  const track = sheet.tracks[0];
  const region = sheet.regions[1];
  sheet.arrangement[region.id][track.id] = 'silent';
  assert.ok(!compileWholeSong(sheet).notes.some(n => n.trackId === track.id && n.bar >= region.start && n.bar < region.end));
});

test('Classical Minimalist keeps its mallet pulse pitched and has no drum part', () => {
  const sheet = createCatalogSong('classical-minimalist_song');
  assert.ok(!sheet.tracks.some(track => track.role === 'percussion' || track.instrumentId === 'timpani' || track.instrumentId === 'drums'));
  const marimba = sheet.tracks.find(track => track.instrumentId === 'marimba');
  assert.ok(marimba);
  const patternFor = (kind: string) => {
    const section = sheet.regions.find(region => region.kind === kind);
    assert.ok(section, `Minimalist score contains ${kind}`);
    const id = sheet.arrangement[section.id]?.[marimba.id];
    assert.ok(id, `${kind} assigns the mallet part`);
    return PATTERNS_BY_ID[id];
  };
  const cell = patternFor('additive-entry');
  assert.equal(cell.shortName, 'Marimba chord-tone cell');
  assert.deepEqual(cell.events?.map(event => event.pitch?.degree), [1, 3, 5, 3]);
  assert.ok(cell.events?.every(event => event.pitch?.voicing === 'single'), 'each marimba attack is one pitched note, not a chord hit');
  const phase = patternFor('phase-overlap');
  assert.equal(phase.shortName, 'Marimba phase shift');
  assert.deepEqual(phase.events?.map(event => event.position), [0, 1, 2, 3, 4.5, 5.5, 6.5, 7.5]);
  assert.ok(phase.events?.every(event => event.pitch?.voicing === 'single'));
});

test('Modal Jazz develops the bass from a sparse motif into a solo answer', () => {
  const sheet = createCatalogSong('jazz-modal_song');
  const bass = sheet.tracks.find(track => track.instrumentId === 'upright-bass');
  assert.ok(bass);
  const patternFor = (kind: string, occurrence = 1) => {
    const section = sheet.regions.filter(region => region.kind === kind)[occurrence - 1];
    assert.ok(section, `Modal Jazz contains ${kind} ${occurrence}`);
    const id = sheet.arrangement[section.id]?.[bass.id];
    assert.ok(id, `${kind} ${occurrence} assigns the bass`);
    return PATTERNS_BY_ID[id];
  };
  assert.equal(patternFor('intro')?.shortName, 'Low anchor');
  assert.equal(patternFor('head')?.shortName, 'Dorian bass motif');
  assert.equal(patternFor('solo', 2)?.shortName, 'Modal bass answer');
  assert.equal(patternFor('head', 2)?.shortName, 'Modal bass answer');
  assert.equal(patternFor('tag')?.shortName, 'Low anchor');

  const performance = compileWholeSong(sheet);
  const head = sheet.regions.find(region => region.kind === 'head')!;
  const headNotes = performance.notes.filter(note => note.trackId === bass.id
    && note.bar >= head.start && note.bar < head.end);
  assert.ok(headNotes.length >= 40, 'the head uses a playable multi-note motif instead of a whole-note root each bar');
  assert.ok(new Set(headNotes.map(note => note.midi)).size >= 4,
    'the motif follows Dorian chord roots and adds modal color tones');
});

test('Soukous family samples keep distinct authored kit grooves and phrase turns', () => {
  const styles = [
    ['soukous', 'Soukous guitar pulse'],
    ['congolese-rumba', 'Rumba verse kit'],
    ['sebene', 'Sebene ride drive'],
    ['kwassa-kwassa', 'Kwassa bounce kit'],
    ['ndombolo', 'Ndombolo dance drive'],
  ] as const;
  const signatures: string[] = [];
  for (const [style, expectedName] of styles) {
    const song = createCatalogSong(`soukous-${style}_song`);
    const drums = song.tracks.find(track => track.instrumentId === 'drums');
    assert.ok(drums, `${style} sample includes its kit part`);
    const intro = song.regions.find(region => region.kind === 'intro');
    assert.ok(intro, `${style} sample includes an introduction`);
    const patternId = song.arrangement[intro.id]?.[drums.id];
    assert.ok(patternId, `${style} introduction assigns the kit`);
    const pattern = PATTERNS_BY_ID[patternId];
    assert.equal(pattern?.shortName, expectedName, `${style} shows its own student-facing kit name`);
    assert.ok(pattern?.events?.length, `${style} has an authored kit cell`);
    assert.ok(pattern.variants?.some(variant => variant.variationType === 'cadence'),
      `${style} kit cell has a phrase-end variation`);
    signatures.push(pattern.events!.map(event => `${event.position}:${event.hitType}`).join('|'));
  }
  assert.equal(new Set(signatures).size, styles.length,
    'the five related styles do not collapse to one shared backbeat');
});

test('Steppe Sygyt exposes a varied vocal guide above the morin-khuur drone', () => {
  const song = createCatalogSong('steppe-sygyt_song');
  const voice = song.tracks.find(track => track.instrumentId === 'voice');
  assert.ok(voice, 'Sygyt sample keeps its vocal lead when selecting the ensemble');
  assert.equal(song.tracks.some(track => track.role === 'percussion' || track.instrumentId === 'drums'), false,
    'the overtone study does not acquire a generic drum pulse');

  const expected = new Map([
    ['drone', 'silent'],
    ['whistle', 'Sygyt overtone phrase'],
    ['variation', 'Sygyt overtone variation'],
    ['whistle-return', 'Sygyt overtone phrase'],
    ['cadence', 'Sygyt release'],
  ]);
  for (const [kind, name] of expected) {
    const section = song.regions.find(region => region.kind === kind);
    assert.ok(section, `Sygyt form contains ${kind}`);
    const id: string | undefined = song.arrangement[section.id]?.[voice.id];
    assert.ok(id, `${kind} explicitly assigns the vocal guide`);
    if (name === 'silent') assert.equal(id, name);
    else assert.equal(PATTERNS_BY_ID[id]?.shortName, name);
  }

  const performance = compileWholeSong(song);
  const vocalNotes = performance.notes.filter(note => note.trackId === voice.id);
  assert.ok(vocalNotes.length > 40, 'the vocal guide sounds through the sung form sections');
  const vocalPitches = vocalNotes.map(note => note.midi);
  assert.ok(new Set(vocalPitches).size >= 4,
    'the overtone line has a contour rather than one repeated pitch');
  assert.ok(Math.min(...vocalPitches) >= 74 && Math.max(...vocalPitches) === 81,
    'the pentatonic fifth reaches A5 without octave-wrapping down into the drone register');
});

test('long-form samples assign their own melodic variations where the form develops', () => {
  const patternName = (songId: string, sectionKind: string, instrumentId: string) => {
    const song = createCatalogSong(songId);
    const section = song.regions.find(region => region.kind === sectionKind);
    assert.ok(section, `${songId} contains ${sectionKind}`);
    const track = song.tracks.find(item => item.instrumentId === instrumentId);
    assert.ok(track, `${songId} contains ${instrumentId}`);
    const id = song.arrangement[section.id]?.[track.id];
    assert.ok(id, `${songId}/${sectionKind} assigns ${instrumentId}`);
    return PATTERNS_BY_ID[id]?.shortName;
  };

  assert.equal(patternName('classical-impressionist_song', 'sea', 'violin'), 'Violin variation');
  assert.equal(patternName('classical-impressionist_song', 'dialogue', 'flute'), 'Concert Flute reply');
  assert.equal(patternName('japanese-gagaku_song', 'ha', 'hichiriki'), 'Hichiriki re-entry');
  assert.equal(patternName('japanese-gagaku_song', 'kyu', 'ryuteki'), 'Ryuteki re-entry');
  assert.equal(patternName('korean-sanjo_song', 'jungmori', 'gayageum'), 'Gayageum variation');
  assert.equal(patternName('korean-sanjo_song', 'jungjungmori', 'gayageum'), 'Gayageum reply');
  assert.equal(patternName('turkish-ottoman-classical_song', 'development', 'ney'), 'Ney reply');
  assert.equal(patternName('turkish-ottoman-classical_song', 'upper-register', 'oud'), 'Oud variation');
});

test('repeated form sections keep their authored occurrence-specific teaching cells', () => {
  const patternName = (songId: string, kind: string, occurrence: number, instrumentId: string) => {
    const song = createCatalogSong(songId);
    const section = song.regions.filter(region => region.kind === kind)[occurrence - 1];
    assert.ok(section, `${songId} contains ${kind} section ${occurrence}`);
    const track = song.tracks.find(item => item.instrumentId === instrumentId);
    assert.ok(track, `${songId} contains ${instrumentId}`);
    const id = song.arrangement[section.id]?.[track.id];
    assert.ok(id, `${songId}/${kind}#${occurrence} assigns ${instrumentId}`);
    return PATTERNS_BY_ID[id]?.shortName;
  };

  assert.equal(patternName('andean-sanjuanito_song', 'B', 1, 'siku'), 'Siku variation');
  assert.equal(patternName('andean-sanjuanito_song', 'B', 2, 'siku'), 'Siku reply');
  assert.equal(patternName('andean-saya_song', 'chorus', 1, 'siku'), 'Saya Siku');
  assert.equal(patternName('andean-saya_song', 'chorus', 2, 'siku'), 'Siku variation');
  assert.equal(patternName('andean-tinku_song', 'A', 2, 'quena'), 'Quena variation');
  assert.equal(patternName('andean-tinku_song', 'A', 3, 'quena'), 'Quena reply');
  assert.equal(patternName('andean-carnavalito_song', 'B', 2, 'siku'), 'Siku re-entry');
  assert.equal(patternName('andean-nueva-cancion_song', 'chorus', 3, 'quena'), 'Quena reply');
});

test('lead parts change with the song form across distinct style families', () => {
  const patternName = (songId: string, kind: string, instrumentId: string, occurrence = 1, role?: string) => {
    const song = createCatalogSong(songId);
    const section = song.regions.filter(region => region.kind === kind)[occurrence - 1];
    assert.ok(section, `${songId} contains ${kind} section ${occurrence}`);
    const track = song.tracks.find(item => item.instrumentId === instrumentId && (!role || item.role === role));
    assert.ok(track, `${songId} contains ${instrumentId}${role ? `:${role}` : ''}`);
    const id = song.arrangement[section.id]?.[track.id];
    assert.ok(id, `${songId}/${kind}#${occurrence} assigns ${instrumentId}`);
    return PATTERNS_BY_ID[id]?.shortName;
  };

  assert.equal(patternName('arabic-instrumental-maqam_song', 'exploration', 'oud'), 'Oud variation');
  assert.equal(patternName('flamenco-tonas-martinetes_song', 'martinete', 'voice'), 'Vocal variation');
  assert.equal(patternName('funk-funk_song', 'A', 'voice', 2), 'Vocal variation');
  assert.equal(patternName('funk-funk_song', 'A', 'trumpet', 3), 'Bb Trumpet reply');
  assert.equal(patternName('funk-boogie_song', 'chorus', 'synth', 2), 'Synthesizer reply');
  assert.equal(patternName('indian-classical-dhrupad_song', 'jor', 'rudra-veena'), 'Rudra veena variation');
  assert.equal(patternName('japanese-shakuhachi_song', 'development', 'shakuhachi'), 'Shakuhachi variation');
  assert.equal(patternName('jazz-big-band_song', 'shout', 'alto-sax'), 'Alto Saxophone variation');
  assert.equal(patternName('korean-pansori_song', 'jungmori', 'voice'), 'Vocal variation');
  assert.equal(patternName('korean-samulnori_song', 'climax', 'gongs'), 'Gongs variation');
  assert.equal(patternName('mexican-banda_song', 'chorus', 'voice', 3), 'Vocal reply');
  assert.equal(patternName('persian-avaz_song', 'response', 'voice'), 'Vocal reply');
  assert.equal(patternName('persian-modern-persian_song', 'climax', 'setar'), 'Setar reply');
  assert.equal(patternName('qawwali-contemporary-fusion_song', 'response', 'voice'), 'Vocal reply');
  assert.equal(patternName('salsa-son_song', 'verse', 'voice', 3), 'Vocal variation');
  assert.equal(patternName('weird-musique-concrete_song', 'recall', 'sampler', 1, 'texture'), 'Cut-and-recall montage');
});

test('Khöömei response changes its overtone guide while voice stays out of drone and cadence', () => {
  const song = createCatalogSong('steppe-khoomei_song');
  const voice = song.tracks.find(track => track.instrumentId === 'voice');
  assert.ok(voice);
  const patternName = (kind: string) => {
    const region = song.regions.find(item => item.kind === kind);
    assert.ok(region, `Khöömei form contains ${kind}`);
    const id = song.arrangement[region.id]?.[voice.id];
    assert.ok(id);
    return PATTERNS_BY_ID[id]?.shortName;
  };
  assert.equal(patternName('verse'), 'Khöömei Vocal');
  assert.equal(patternName('response'), 'Khoomei overtone answer');
  for (const kind of ['opening','drone','cadence']) {
    const region = song.regions.find(item => item.kind === kind)!;
    assert.ok(!region.activeInstrumentIds?.includes('voice'), `${kind} remains an instrumental drone/cadence`);
  }

  const performance = compileWholeSong(song);
  const voiceNotes = performance.notes.filter(note => note.trackId === voice.id);
  assert.ok(new Set(voiceNotes.map(note => note.midi)).size >= 4,
    'the response guide alternates home, second, third and fifth scale tones');
  for (const kind of ['opening','drone','cadence']) {
    const region = song.regions.find(item => item.kind === kind)!;
    assert.equal(voiceNotes.some(note => note.bar >= region.start && note.bar < region.end), false,
      `${kind} emits no synthetic vocal attacks`);
  }
});

test('Kargyraa keeps a low, breathing voice guide beside a bowed answer', () => {
  const song = createCatalogSong('steppe-kargyraa_song');
  const voice = song.tracks.find(track => track.instrumentId === 'voice');
  const morin = song.tracks.find(track => track.instrumentId === 'morin-khuur');
  assert.ok(voice && morin);

  const region = (kind: string) => {
    const item = song.regions.find(candidate => candidate.kind === kind);
    assert.ok(item, `Kargyraa form contains ${kind}`);
    return item;
  };
  const pattern = (kind: string, instrumentId: string) => {
    const id = song.arrangement[region(kind).id]?.[song.tracks.find(track => track.instrumentId === instrumentId)!.id];
    assert.ok(id, `${kind} assigns ${instrumentId}`);
    return PATTERNS_BY_ID[id]!;
  };

  assert.deepEqual(song.regions.filter(item => item.activeInstrumentIds?.includes('voice')).map(item => item.kind),
    ['phrase','return','cadence'], 'the vocal guide enters for two phrases and the close, with room for a bowed answer');
  assert.equal(pattern('drone','morin-khuur').shortName, 'Low morin drone');
  assert.equal(pattern('phrase','voice').shortName, 'Kargyraa low phrase');
  assert.equal(pattern('response','morin-khuur').shortName, 'Morin khuur answer');
  assert.equal(pattern('return','voice').shortName, 'Kargyraa low variation');
  assert.equal(pattern('return','morin-khuur').shortName, 'Morin khuur reply');
  assert.equal(pattern('cadence','voice').shortName, 'Kargyraa close');
  assert.deepEqual(pattern('phrase','voice').events?.map(event => event.position), [0,2.5,4.5,6.75]);
  assert.deepEqual(pattern('return','voice').events?.map(event => event.position), [0,1.75,3.5,5.25,7]);

  const performance = compileWholeSong(song);
  const voiceNotes = performance.notes.filter(note => note.trackId === voice.id);
  assert.ok(voiceNotes.length > 20, 'the low guide remains present through the authored phrases');
  assert.equal(Math.min(...voiceNotes.map(note => note.midi)), 38, 'the singer guide reaches the authored D2 root');
  assert.ok(Math.max(...voiceNotes.map(note => note.midi)) <= 47, 'the phrase stays in a low register instead of rising into sygyt-like whistle pitches');
  for (const item of song.regions.filter(candidate => !['phrase','return','cadence'].includes(candidate.kind))) {
    assert.equal(voiceNotes.some(note => note.bar >= item.start && note.bar < item.end), false,
      `${item.kind} remains free of the voice patch`);
  }
});

test('catalog samples move through their existing style-authored phrase cells', () => {
  const get = (songId: string, kind: string, instrumentId: string, occurrence = 1) => {
    const song = createCatalogSong(songId);
    const section = song.regions.filter(item => item.kind === kind)[occurrence - 1];
    assert.ok(section, `${songId} contains ${kind} section ${occurrence}`);
    const track = song.tracks.find(item => item.instrumentId === instrumentId);
    assert.ok(track, `${songId} contains ${instrumentId}`);
    const id = song.arrangement[section.id]?.[track.id];
    assert.ok(id, `${songId}/${kind} assigns ${instrumentId}`);
    return PATTERNS_BY_ID[id]?.shortName;
  };

  assert.equal(get('blues-piedmont_song','B','guitar'), 'Guitar variation');
  assert.equal(get('blues-piedmont_song','solo','guitar'), 'Guitar reply');

  assert.deepEqual(['opening','stream','rapids','falls','return','silence'].map(kind => get('chinese-guqin_song',kind,'guqin')),
    ['Guqin phrase','Left-hand pitch-shading response','Guqin variation','Guqin reply','Guqin phrase','Left-hand pitch-shading response']);
  assert.deepEqual(['opening','theme','variation','build','theme','cadence'].map((kind,index) =>
    get('chinese-guzheng_song',kind,'guzheng', index === 4 ? 2 : 1)),
  ['Guzheng phrase','Lyrical bend-and-release phrase','Guzheng variation','Guzheng phrase','Guzheng reply','Lyrical bend-and-release phrase']);
  assert.deepEqual(['muster','march','battle','aftermath','retreat','cadence'].map(kind => get('chinese-pipa_song',kind,'pipa')),
    ['Alternating tan-tiao motif','Alternating tan-tiao motif','Pipa answer','Pipa variation','Pipa reply','Alternating tan-tiao motif']);

  const taranta = createCatalogSong('flamenco-taranta_song');
  assert.equal(get('flamenco-taranta_song','upper-register','guitar'), 'Guitar reply');
  assert.equal(get('flamenco-taranta_song','return','guitar'), 'Guitar variation');
  assert.equal(taranta.tracks.some(track => track.instrumentId === 'voice'), false,
    'the guitar-led teaching score does not acquire an unrequested synthetic vowel part');

  assert.deepEqual([
    get('steppe-dombra_song','intro','dombra'), get('steppe-dombra_song','A','dombra',1),
    get('steppe-dombra_song','B','dombra'), get('steppe-dombra_song','A','dombra',2),
    get('steppe-dombra_song','C','dombra'), get('steppe-dombra_song','A','dombra',3),
    get('steppe-dombra_song','cadence','dombra'),
  ], ['Dombra Dombra','Dombra Dombra','Dombra variation','Dombra Dombra','Dombra reply','Dombra variation','Dombra Dombra']);

  const drone = createCatalogSong('weird-drone_song');
  assert.deepEqual(['opening','mass','resonance','feedback','release'].map(kind => get('weird-drone_song',kind,'sampler')),
    ['Upper resonance','Sampler pulse','Sampler reply','Sampler variation','Sampler pulse']);
  assert.deepEqual(drone.regions.find(item => item.kind === 'decay')?.activeInstrumentIds, ['synth'],
    'the drone keeps its anchor while the upper sampler layer withdraws for the final decay');

  const spectral = createCatalogSong('weird-spectral_song');
  assert.deepEqual(['attack','spectrum','transformation','noise','return'].map(kind => get('weird-spectral_song',kind,'sampler')),
    ['Upper entries','Sampler variation','Sampler reply','Sampler variation','Upper entries']);
  assert.deepEqual(spectral.regions.find(item => item.kind === 'decay')?.activeInstrumentIds, ['synth'],
    'the upper spectral layer withdraws before the final anchor decay');
});

test('authored tango phrases keep their articulations and fractional note lengths', () => {
  const sheet = makeSheet('tango', 'tango-golden-age');
  const perf = compileWholeSong(sheet);
  for (const track of sheet.tracks) {
    for (const bar of perf.bars) {
      const detail = sheet.measures[bar.index].patternDetailsByTrack?.[track.id];
      const native = detail?.perf as ReturnType<typeof sliceBarNative> | undefined;
      const notes = perf.notes.filter(n => n.trackId === track.id && n.bar === bar.index && n.originCode === 0);
      if (!native || !notes.length) continue;
      for (const note of notes) {
        const index = Number(note.attackId!.split(':').at(-1));
        if (note.authoredTechnique) assert.equal(GESTURE_NAMES[note.gestureCode], native.articulations[index]);
        else assert.ok(getInstrumentPerformanceProfile(track.instrumentId!).gestures[GESTURE_NAMES[note.gestureCode]],
          'style adaptation resolves to a technique supported by the player');
        const expected = native.durations[index] / native.stepsPerBar * bar.beatsPerBar * 60 / bar.bpm;
        assert.ok(Math.abs(note.dur - expected) < .002, `${track.instrumentId}/${bar.index}: ${note.dur} vs ${expected}`);
      }
    }
  }
});

test('multi-bar pitch, microtiming and fine duration data survive slicing', () => {
  const sliced = sliceBarNative([0, 16, 19], [1, .7, .8], undefined, [.4, .72, 1.4], [0, .02, -.01], undefined, 32, 2, 1,
    ['marcato','legato','staccato'], [0, 16, 19], [{ degree: 1 }, { degree: 3 }, { degree: 5 }]);
  assert.deepEqual(sliced.onsets, [0, 3]);
  assert.deepEqual(sliced.pitches, [{ degree: 3 }, { degree: 5 }]);
  assert.deepEqual(sliced.durations, [.72, 1.4]);
  assert.deepEqual(sliced.microtiming, [.02, -.01]);
});

test('functional harmony uses the chord quality, and keyboard phrasing has no bellows', () => {
  for (const [chord, pc] of [['C', 4], ['Cm', 3], ['C7', 4]] as const) {
    const ctx = { authoredPitch: { degree: 3, register: 65 }, profile: getInstrumentPerformanceProfile('bandoneon'),
      chord, hybridTheory: styleTheoryFor('tango-golden-age', 'tango') } as PhraseContext;
    assert.equal(realizeMidi(ctx, 0, 1, createPhraseState())[0] % 12, pc, chord);
  }
  assert.equal(getInstrumentPerformanceProfile('piano').family, 'keyboard');
  assert.equal(styleTheoryFor('tango-golden-age', 'tango').bass.style, 'rootFifth');
});

test('authored descending motifs resolve downward instead of wrapping upward', () => {
  const ctx = { profile: getInstrumentPerformanceProfile('bandoneon'), chord: 'Am', hybridTheory: styleTheoryFor('tango-golden-age', 'tango') } as PhraseContext;
  const line = [5, 3, 2, 1].map(degree => realizeMidi({ ...ctx, authoredPitch: { degree, register: 65 } }, 0, 1, createPhraseState())[0]);
  assert.ok(line.every((midi, i) => !i || midi < line[i - 1]), String(line));
});

test('generated weak melody attacks approach their target instead of inheriting an upward contour', () => {
  const theory = styleTheoryFor('latin-cumbia', 'latin');
  const ctx = { profile: getInstrumentPerformanceProfile('flute'), role: 'lead', chord: 'C',
    phrasePosition: .25, phraseIndex: 0, onsetIndex: 1, hit: 'tone', pattern: { roles: ['lead'] },
    hybridTheory: { ...theory, melody: { ...theory.melody, targetDegrees: [1], contour: ['pickup'] } } } as PhraseContext;
  const state = createPhraseState();
  state.previousMidi = 76; // E5; the authored C target lies below it.
  assert.equal(realizeMidi(ctx, 1, 4, state)[0], 74, 'the approach moves down to the next scale tone, D5');
});

test('generated melody target degrees continue through the full phrase across bar boundaries', () => {
  const theory = styleTheoryFor('latin-cumbia', 'latin');
  const ctx = { profile: getInstrumentPerformanceProfile('flute'), role: 'lead', chord: 'C', phraseIndex: 0,
    phrasePosition: .4, onsetIndex: 0, phraseAttackIndex: 2, hit: 'tone', pattern: { roles: ['lead'] },
    hybridTheory: { ...theory, melody: { ...theory.melody, targetDegrees: [1, 3, 5, 1] } } } as PhraseContext;
  const state = createPhraseState();
  state.previousMidi = 60;
  assert.equal(realizeMidi(ctx, 0, 4, state)[0] % 12, 7,
    'the third written attack in the phrase uses its authored fifth-degree target rather than bar-local tonic');
});

test('tango variants use their actual meters and accompaniment cells', () => {
  const cells = (style: string) => {
    const sheet = makeSheet('tango', `tango-${style}`);
    return Object.values(sheet.arrangement).flatMap(parts => Object.values(parts)).map(id => PATTERNS_BY_ID[id]).filter(Boolean);
  };
  assert.ok(cells('pugliese').some(p => p.name.includes('Yumba') && p.events?.filter(e => e.articulation === 'yumba').map(e => e.position).join(',') === '0,2'));
  assert.ok(cells('milonga').some(p => p.name.includes('Habanera') && p.events?.map(e => e.position).join(',') === '0,0.75,1,1.5'));
  assert.ok(cells('canaro').some(p => p.shortName === 'Four-beat marcato' && p.events?.length === 4));
  assert.ok(cells('di-sarli').some(p => p.shortName === 'Rolling piano'
    && p.events?.map(event => event.position).join(',') === '0,1,2,3'
    && p.events.every(event => event.articulation === 'tenuto')));
  assert.equal(cells('di-sarli').some(p => p.shortName === 'piano yumba'), false,
    'Pugliese yumba should not become a technique pattern in every tango style');
  const vals = makeSheet('tango', 'tango-vals');
  assert.equal(vals.timeSignature, '3/4');
  assert.ok(cells('piazzolla-nuevo-tango').some(p => p.name.includes('3+3+2')));
});

test('tango ensemble styles separate accompaniment jobs and shape their own pocket', () => {
  const samplePattern = (style: string, instrumentId: string, expectedName: string) => {
    const song = createCatalogSong(`tango-${style}_song`);
    const track = song.tracks.find(item => item.instrumentId === instrumentId);
    assert.ok(track, `${style} sample includes ${instrumentId}`);
    const patterns = song.regions.map(region => {
      const id = song.arrangement[region.id]?.[track.id];
      return id ? PATTERNS_BY_ID[id] : undefined;
    }).filter((pattern): pattern is NonNullable<typeof pattern> => !!pattern);
    const pattern = patterns.find(item => item.shortName === expectedName);
    assert.ok(pattern, `${style} arrangement uses ${expectedName}`);
    return pattern;
  };

  const canyengue = samplePattern('canyengue', 'piano', 'Canyengue mugre comp');
  assert.deepEqual(canyengue.events?.map(event => event.microtiming), [2, -5, 3, -3],
    'Canyengue keeps its habanera frame while the attacks lean and drag unevenly');

  const deCaro = samplePattern('guardia-nueva-de-caro', 'piano', 'De Caro sync');
  assert.deepEqual(deCaro.onsetGrid, [0, 3, 8, 11],
    'De Caro piano pushes short accents between the stable first and third beats');
  const troilo = samplePattern('troilo', 'piano', 'Troilo piano pocket');
  assert.notDeepEqual(troilo.onsetGrid, deCaro.onsetGrid,
    'Troilo holds a steadier cantando support pocket than De Caro’s syncopation');
  assert.ok(samplePattern('modern-orquesta', 'piano', 'Orquesta block chords').durationGrid?.[0]
    !== samplePattern('canaro', 'piano', 'Four-beat marcato').durationGrid?.[0],
  'modern-orquesta uses broader blocks while Canaro retains a clear dance marcato');

  const cancion = createCatalogSong('tango-tango-cancion_song');
  const cancionGuitar = samplePattern('tango-cancion', 'guitar', 'Tango guitar replies');
  const cancionPiano = samplePattern('tango-cancion', 'piano', 'Tango piano anchors');
  assert.notDeepEqual(cancionGuitar.onsetGrid, cancionPiano.onsetGrid,
    'the sung style keeps long piano anchors separate from guitar replies in lyric gaps');
  assert.ok(cancion.regions.some(region => region.kind === 'interlude'),
    'the separated accompaniment still leaves room for an instrumental answer section');

  const milongaGuitar = samplePattern('milonga', 'guitar', 'Milonga guitar habanera');
  const milongaPiano = samplePattern('milonga', 'piano', 'Milonga piano lift');
  assert.notDeepEqual(milongaGuitar.onsetGrid, milongaPiano.onsetGrid,
    'Milonga guitar keeps the habanera-derived walk while piano lifts between attacks');

  const gotanPiano = samplePattern('electrotango-gotan', 'piano', 'Gotan offbeat chords');
  const bajofondoPiano = samplePattern('electro-rock-bajofondo', 'piano', 'Bajofondo piano backbeat');
  const gotanSynth = samplePattern('electrotango-gotan', 'synth', 'Gotan synth answer');
  const bajofondoSynth = samplePattern('electro-rock-bajofondo', 'synth', 'Bajofondo synth answer');
  assert.notDeepEqual(gotanPiano.onsetGrid, bajofondoPiano.onsetGrid,
    'Gotan’s restrained offbeat chops stay separate from Bajofondo’s rock backbeat');
  assert.notDeepEqual(gotanSynth.onsetGrid, bajofondoSynth.onsetGrid,
    'the two electronic tango styles keep different synth answer phrases');
});

test('D’Arienzo parada punctuates its named break before the ensemble returns', () => {
  const sheet = createCatalogSong('tango-darienzo_song'), performance = compileWholeSong(sheet);
  const intro = sheet.regions.find(region => region.kind === 'intro')!;
  const introPatterns = Object.fromEntries(['bandoneon','violin','piano','upright-bass'].map(instrument => {
    const track = sheet.tracks.find(item => item.instrumentId === instrument)!;
    return [instrument, PATTERNS_BY_ID[sheet.arrangement[intro.id]?.[track.id] ?? '']?.shortName];
  }));
  assert.deepEqual(introPatterns, {
    bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Hard marcato', 'upright-bass': 'Root–fifth bass',
  }, 'the opening establishes D’Arienzo’s driving marcato instead of repeating the parada hit');
  const index = sheet.regions.findIndex(region => region.kind === 'parada');
  assert.ok(index > 0 && index < sheet.regions.length - 1, 'parada separates two sounding themes');
  const pause = sheet.regions[index];
  assert.equal(pause.bars, 1);
  assert.deepEqual(new Set(pause.activeInstrumentIds), new Set(['bandoneon','violin','piano','upright-bass']));
  const notes = performance.notes.filter(note => note.bar >= pause.start && note.bar < pause.end);
  const bar = performance.bars.find(item => item.index === pause.start)!;
  const instruments = new Set(notes.map(note => sheet.tracks.find(track => track.id === note.trackId)?.instrumentId));
  assert.deepEqual(instruments, new Set(['bandoneon','violin','piano','upright-bass']),
    'all four orchestral parts land on the parada together');
  assert.ok(notes.every(note => note.time < bar.start + .2), 'the clipped hit leaves the remainder of the bar empty');
  assert.ok(notes.every(note => note.dur < .2), 'the written staccato attack releases into the stop');
  assert.ok(performance.notes.some(note => note.bar < pause.start), 'the theme drives into the parada');
  assert.ok(performance.notes.some(note => note.bar >= pause.end), 'the ensemble re-enters after the stop');
  assert.equal(sheet.regions[index].formLabel, 'parada · hit then rest', 'the timeline distinguishes the clipped hit from the air that follows');
  for (const instrument of ['bandoneon','violin','piano','upright-bass']) {
    const track = sheet.tracks.find(item => item.instrumentId === instrument)!;
    const patternId = sheet.arrangement[pause.id]?.[track.id];
    assert.equal(PATTERNS_BY_ID[patternId ?? '']?.shortName, 'Parada hit', `${instrument} has the coordinated downbeat study`);
  }

  const syncopa = sheet.regions.find(region => region.kind === 'syncopa-burst')!;
  assert.equal(syncopa.bars, 1);
  assert.equal(syncopa.formLabel, 'síncopa burst · three offbeat attacks');
  const bandoneon = sheet.tracks.find(track => track.instrumentId === 'bandoneon')!;
  const syncopaPattern = PATTERNS_BY_ID[sheet.arrangement[syncopa.id]?.[bandoneon.id] ?? ''];
  assert.equal(syncopaPattern?.shortName, 'Síncopa burst');
  assert.deepEqual(syncopaPattern?.events?.map(event => event.position), [.75, 1.75, 2.75],
    'the named variation teaches three offbeat notes across one 4/4 bar');
  assert.equal(PATTERNS_BY_ID[sheet.arrangement[syncopa.id]?.[sheet.tracks.find(track => track.instrumentId === 'piano')!.id] ?? '']?.shortName,
    'Hard marcato', 'piano and bass keep the underlying pulse while the bandoneon syncopates');
  assert.ok(performance.notes.some(note => note.trackId === bandoneon.id && note.bar === syncopa.start),
    'the syncopa burst reaches the compiled song performance');
});

test('Big Band sample separates its rhythm-section features and brings the horns back for the shout', () => {
  const sheet = createCatalogSong('jazz-big-band_song'), performance = compileWholeSong(sheet);
  const part = (kind: string) => {
    const region = sheet.regions.find(item => item.kind === kind);
    assert.ok(region, `Big Band sample includes ${kind}`);
    return region;
  };
  const pattern = (kind: string, instrument: string) => {
    const region = part(kind), track = sheet.tracks.find(item => item.instrumentId === instrument);
    assert.ok(track, `${instrument} has a Big Band track`);
    return PATTERNS_BY_ID[sheet.arrangement[region.id]?.[track.id] ?? '']?.shortName;
  };
  const piano = part('piano');
  assert.equal(piano.formLabel, 'piano feature');
  assert.equal(piano.leadInstrumentId, 'piano');
  assert.deepEqual(piano.activeInstrumentIds, ['piano','guitar','upright-bass','drums']);
  const sax = part('sax');
  assert.equal(sax.formLabel, 'sax exchange · alto/tenor answers');
  assert.deepEqual(sax.activeInstrumentIds, ['alto-sax','tenor-sax','piano','guitar','upright-bass','drums']);
  assert.equal(pattern('sax', 'alto-sax'), 'Big Alto Sax');
  assert.equal(pattern('sax', 'tenor-sax'), 'Big Tenor Sax');
  assert.ok(!sax.activeInstrumentIds?.includes('trumpet') && !sax.activeInstrumentIds?.includes('trombone'),
    'the sax exchange has space away from brass parts');

  const trumpet = part('trumpet');
  assert.equal(trumpet.formLabel, 'trumpet feature');
  assert.equal(trumpet.leadInstrumentId, 'trumpet');
  assert.deepEqual(trumpet.activeInstrumentIds, ['trumpet','piano','guitar','upright-bass','drums']);
  const shout = part('shout');
  assert.equal(shout.formLabel, 'shout chorus · full band');
  assert.deepEqual(new Set(shout.activeInstrumentIds), new Set(sheet.tracks.map(track => track.instrumentId)));
  assert.equal(pattern('shout', 'trumpet'), 'Big Band Trumpet');
  assert.equal(pattern('shout', 'trombone'), 'Trombone answer');
  assert.equal(pattern('shout', 'piano'), 'Piano answer');
  assert.ok(performance.notes.some(note => note.bar >= shout.start && note.bar < shout.end),
    'the full-band shout produces notes in the shared performance');
});

test('Modern orquesta uses a full-bar corte and a coordinated tutti re-entry', () => {
  const sheet = createCatalogSong('tango-modern-orquesta_song'), performance = compileWholeSong(sheet);
  const corte = sheet.regions.find(region => region.kind === 'corte')!;
  const tutti = sheet.regions.find(region => region.kind === 'tutti-hit')!;
  const variation = sheet.regions.find(region => region.kind === 'variacion')!;
  assert.ok(corte && tutti && variation, 'the sample places a return sequence after the main strain');
  assert.equal(corte.bars, 1);
  assert.equal(corte.formLabel, 'corte · ensemble cut');
  assert.deepEqual(corte.activeInstrumentIds, []);
  assert.equal(performance.notes.filter(note => note.bar >= corte.start && note.bar < corte.end).length, 0,
    'no accompaniment continues under the named corte');
  assert.equal(tutti.formLabel, 'tutti hit · ensemble re-entry');
  assert.equal(tutti.bars, 1);

  const tuttiNotes = performance.notes.filter(note => note.bar >= tutti.start && note.bar < tutti.end);
  const bar = performance.bars.find(item => item.index === tutti.start)!;
  assert.deepEqual(new Set(tuttiNotes.map(note => sheet.tracks.find(track => track.id === note.trackId)?.instrumentId)),
    new Set(['bandoneon','violin','piano','upright-bass']));
  assert.ok(tuttiNotes.every(note => Math.abs(note.time - bar.start) < .02),
    'all four parts strike the re-entry together within the style’s small performance offsets');
  assert.ok(tuttiNotes.every(note => note.dur < .2), 'the re-entry releases into a clear pocket');
  for (const instrument of ['bandoneon','violin','piano','upright-bass']) {
    const track = sheet.tracks.find(item => item.instrumentId === instrument)!;
    assert.equal(PATTERNS_BY_ID[sheet.arrangement[tutti.id]?.[track.id] ?? '']?.shortName, 'Tutti hit');
  }
  assert.ok(performance.notes.some(note => note.bar >= variation.start && note.bar < variation.end),
    'the full phrase variation follows the short ensemble cue');
});

test('Pugliese silencio stays a full ensemble rest between sounding sections', () => {
  const sheet = createCatalogSong('tango-pugliese_song'), performance = compileWholeSong(sheet);
  const index = sheet.regions.findIndex(region => region.kind === 'silencio');
  assert.ok(index > 0 && index < sheet.regions.length - 1);
  const pause = sheet.regions[index];
  assert.equal(pause.bars, 1);
  assert.equal(pause.formLabel, 'silencio · ensemble rest',
    'the timeline distinguishes Pugliese’s full-band silence from a solo silencio');
  assert.deepEqual(pause.activeInstrumentIds, []);
  assert.equal(performance.notes.filter(note => note.bar >= pause.start && note.bar < pause.end).length, 0,
    'the Pugliese silence remains empty after pattern selection');
  assert.ok(performance.notes.some(note => note.bar < pause.start));
  assert.ok(performance.notes.some(note => note.bar >= pause.end));
});

test('Gong Kebyar sample teaches the buka flare, paired kotekan, angsel stop, and slowing suwuk', () => {
  const sheet = createCatalogSong('gamelan-balinese-gong-kebyar_song');
  const performance = compileWholeSong(sheet);
  const patternsIn = (section: string) => {
    const region = sheet.regions.find(item => item.kind === section);
    assert.ok(region, `Gong Kebyar sample contains ${section}`);
    return { region, patterns: Object.fromEntries(sheet.tracks.map(track => [
      `${track.instrumentId}:${track.role}`,
      PATTERNS_BY_ID[sheet.arrangement[region.id]?.[track.id] ?? '']?.shortName,
    ])) };
  };
  const buka = patternsIn('buka');
  assert.equal(buka.region.bars, 1);
  assert.deepEqual(buka.patterns, {
    'gamelan-metallophone:lead': 'Buka flare',
    'gamelan-metallophone:harmony': 'Buka support',
    'reyong:harmony': 'Reyong flare',
    'kendang:percussion': 'Kendang cue',
    'gongs:percussion': 'Gong flare',
  });
  const opening = performance.notes.filter(note => note.bar === buka.region.start);
  const openingBar = performance.bars.find(bar => bar.index === buka.region.start)!;
  assert.deepEqual(new Set(opening.map(note => note.trackId)), new Set(sheet.tracks.map(track => track.id)),
    'each ensemble part joins the opening flare');
  assert.ok(opening.every(note => Math.abs(note.time - openingBar.start) < 0.001),
    'the buka is one coordinated attack, with no loop filling the rest of the bar');
  assert.ok(sheet.tracks.some(track => track.instrumentId === 'reyong'));
  assert.ok(!sheet.tracks.some(track => track.instrumentId === 'bonang'),
    'the Balinese sample names its kettle-gong row reyong');

  const kotekan = patternsIn('kotekan');
  const polos = PATTERNS_BY_ID[sheet.arrangement[kotekan.region.id]?.[sheet.tracks.find(track => track.instrumentId === 'gamelan-metallophone' && track.role === 'lead')!.id] ?? '']!;
  const sangsih = PATTERNS_BY_ID[sheet.arrangement[kotekan.region.id]?.[sheet.tracks.find(track => track.instrumentId === 'gamelan-metallophone' && track.role === 'harmony')!.id] ?? '']!;
  assert.equal(polos.shortName, 'Kotekan polos');
  assert.deepEqual(polos.events?.map(event => event.position), [0, 1, 2, 3]);
  assert.equal(sangsih.shortName, 'Kotekan sangsih');
  assert.deepEqual(sangsih.events?.map(event => event.position), [0.5, 1.5, 2.5, 3.5]);
  const faster = patternsIn('kotekan-fast');
  const fastPolos = PATTERNS_BY_ID[sheet.arrangement[faster.region.id]?.[sheet.tracks.find(track => track.instrumentId === 'gamelan-metallophone' && track.role === 'lead')!.id] ?? '']!;
  const fastSangsih = PATTERNS_BY_ID[sheet.arrangement[faster.region.id]?.[sheet.tracks.find(track => track.instrumentId === 'gamelan-metallophone' && track.role === 'harmony')!.id] ?? '']!;
  assert.equal(fastPolos.shortName, 'Fast polos');
  assert.equal(fastSangsih.shortName, 'Fast sangsih');
  assert.equal(fastPolos.events?.length, 8);
  assert.equal(fastSangsih.events?.length, 8);

  const angsel = patternsIn('angsel');
  assert.equal(angsel.region.bars, 1);
  assert.equal(angsel.region.formLabel, 'angsel · syncopated ensemble stop');
  assert.deepEqual(new Set(angsel.region.activeInstrumentIds), new Set(['gamelan-metallophone','reyong','kendang','gongs']));
  const cue = performance.notes.filter(note => note.bar >= angsel.region.start && note.bar < angsel.region.end);
  const cueBar = performance.bars.find(bar => bar.index === angsel.region.start)!;
  const cueTime = cueBar.start + 2.5 * 60 / cueBar.bpm;
  assert.deepEqual(new Set(cue.map(note => note.trackId)), new Set(sheet.tracks.map(track => track.id)),
    'the whole group plays the shared cue');
  assert.ok(cue.every(note => Math.abs(note.time - cueTime) < 0.001),
    'all parts land together on the syncopated cue and stop for the rest of the bar');
  const returnSection = sheet.regions.find(region => region.start === angsel.region.end)!;
  assert.ok(performance.notes.some(note => note.bar === returnSection.start), 'the ensemble returns after angsel');

  const suwuk = patternsIn('suwuk');
  assert.equal(performance.bars.find(bar => bar.index === suwuk.region.start)?.bpm, 116,
    'the closing suwuk slows below the 132 BPM peak passages');
});

test('Javanese sample cues an irama shift, changes balungan and bonang density, and closes on suwuk', () => {
  const sheet = createCatalogSong('gamelan-javanese_song');
  const performance = compileWholeSong(sheet);
  const region = (kind: string) => {
    const found = sheet.regions.find(item => item.kind === kind);
    assert.ok(found, `Javanese sample contains ${kind}`);
    return found;
  };
  const pattern = (kind: string, instrument: string, role?: string) => {
    const section = region(kind);
    const track = sheet.tracks.find(item => item.instrumentId === instrument && (!role || item.role === role));
    assert.ok(track, `${instrument} track exists`);
    return PATTERNS_BY_ID[sheet.arrangement[section.id]?.[track.id] ?? ''];
  };
  const notePositions = (kind: string, instrument: string) => {
    const section = region(kind), bar = performance.bars.find(item => item.index === section.start)!;
    const track = sheet.tracks.find(item => item.instrumentId === instrument)!;
    const beatSeconds = 60 / bar.bpm;
    return [...new Set(performance.notes
      .filter(note => note.bar === bar.index && note.trackId === track.id)
      .map(note => Math.round((note.time - bar.start) / beatSeconds * 4) / 4))].sort((a, b) => a - b);
  };

  assert.equal(pattern('main-cycle','gamelan-metallophone','lead')?.shortName, 'Balungan pulse');
  assert.equal(pattern('main-cycle','bonang','harmony')?.shortName, 'Bonang double subdivision');
  assert.deepEqual(notePositions('main-cycle','gamelan-metallophone'), [0,1,2,3]);
  assert.deepEqual(notePositions('main-cycle','bonang'), [0,0.5,1,1.5,2,2.5,3,3.5]);

  const cue = region('irama-change');
  assert.equal(cue.bars, 1, 'the kendang cue is a short transition, not a long repeated pattern');
  assert.equal(cue.formLabel, 'kendang cue · irama shift');
  assert.deepEqual(new Set(cue.activeInstrumentIds), new Set(['kendang','gongs']));
  assert.equal(pattern('irama-change','kendang','percussion')?.shortName, 'Kendang irama cue');
  const nextSection = region('irama-II');
  assert.equal(nextSection.formLabel, 'irama II · dense bonang over slow balungan');
  const slowBar = performance.bars.find(item => item.index === nextSection.start)!;
  assert.equal(slowBar.bpm, 32, 'the kendang cue leads into a slower pulse');
  assert.equal(pattern('irama-II','gamelan-metallophone','lead')?.shortName, 'Balungan slow pulse');
  assert.equal(pattern('irama-II','bonang','harmony')?.shortName, 'Bonang deep subdivision');
  assert.deepEqual(notePositions('irama-II','gamelan-metallophone'), [0,1,2,3]);
  assert.deepEqual(notePositions('irama-II','bonang'), [0,0.25,0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,3.75]);
  const mainBonang = pattern('main-cycle','bonang','harmony')!, deepBonang = pattern('irama-II','bonang','harmony')!;
  const mainRate = mainBonang.events!.length / (4 * 60 / 64);
  const deepRate = deepBonang.events!.length / (4 * 60 / slowBar.bpm);
  assert.ok(Math.abs(mainRate - deepRate) < 0.001,
    'bonang keeps its event rate as the slower balungan opens more space around it');

  const closing = region('suwuk'), closingBar = performance.bars.find(item => item.index === closing.start)!;
  assert.equal(closing.bars, 1);
  assert.equal(closing.formLabel, 'suwuk · final gong');
  assert.equal(closingBar.bpm, 48, 'the final gong is given a slower closing bar');
  assert.deepEqual(new Set(closing.activeInstrumentIds), new Set(sheet.tracks.map(track => track.instrumentId)));
  const lastAttack = performance.notes.filter(note => note.bar === closing.start);
  assert.deepEqual(new Set(lastAttack.map(note => sheet.tracks.find(track => track.id === note.trackId)?.instrumentId)),
    new Set(['gamelan-metallophone','rebab','bonang','kendang','gongs']));
  assert.ok(lastAttack.every(note => Math.abs(note.time - closingBar.start) < 0.02),
    'all parts make one closing attack together, then the gong rings across the final bar');
});

test('Gnawa samples give each style a distinct cycle, handoff, and buildup', () => {
  const samples = Object.fromEntries(['traditional','lila-trance','gnawa-jazz','gnawa-rock']
    .map(style => [style, createCatalogSong(`gnawa-${style}_song`)])) as Record<string, ReturnType<typeof createCatalogSong>>;
  const region = (sheet: ReturnType<typeof createCatalogSong>, kind: string) => {
    const result = sheet.regions.find(item => item.kind === kind);
    assert.ok(result, `${sheet.catalogId} contains ${kind}`);
    return result;
  };
  const pattern = (sheet: ReturnType<typeof createCatalogSong>, kind: string, instrument: string) => {
    const section = region(sheet, kind), track = sheet.tracks.find(item => item.instrumentId === instrument);
    assert.ok(track, `${sheet.catalogId} includes ${instrument}`);
    const id = sheet.arrangement[section.id]?.[track.id];
    assert.ok(id && PATTERNS_BY_ID[id], `${sheet.catalogId}/${kind}/${instrument} has a visible playable pattern`);
    return PATTERNS_BY_ID[id].shortName;
  };

  const traditional = samples.traditional;
  assert.deepEqual(region(traditional, 'opening').activeInstrumentIds, ['guembri']);
  assert.equal(pattern(traditional, 'call', 'voice'), 'Traditional Vocal');
  assert.deepEqual(region(traditional, 'response').activeInstrumentIds, ['guembri','qraqeb'],
    'the guembri and qraqeb answer the call without a continuously doubled vocal track');
  assert.notEqual(pattern(traditional, 'cycle', 'guembri'), pattern(traditional, 'acceleration', 'guembri'));

  const lila = samples['lila-trance'];
  const lilaSections = ['invocation','call','cycle-a','response-a','cycle-b','acceleration','solo','final-response','cadence'];
  const lilaBpms = lilaSections.map(kind => compileWholeSong(lila).bars.find(bar => bar.index === region(lila, kind).start)!.bpm);
  assert.deepEqual(lilaBpms, [100,100,102,104,108,112,112,116,108]);
  assert.ok(!region(lila, 'cycle-a').activeInstrumentIds?.includes('voice'));
  assert.ok(!region(lila, 'cycle-b').activeInstrumentIds?.includes('voice'));
  assert.notEqual(pattern(lila, 'cycle-a', 'qraqeb'), pattern(lila, 'acceleration', 'qraqeb'));
  assert.equal(pattern(lila, 'cadence', 'guembri'), 'guembri close');

  const jazz = samples['gnawa-jazz'];
  assert.ok(!jazz.tracks.some(track => track.instrumentId === 'drums'),
    'the Gnawa jazz pulse stays with qraqeb instead of inheriting a rock backbeat');
  assert.ok(!region(jazz, 'call').activeInstrumentIds?.includes('tenor-sax'));
  assert.ok(!region(jazz, 'response').activeInstrumentIds?.includes('voice'));
  assert.equal(pattern(jazz, 'solo', 'tenor-sax'), 'Tenor Saxophone variation');
  assert.equal(region(jazz, 'solo').leadInstrumentId, 'tenor-sax');
  assert.deepEqual(region(jazz, 'breakdown').activeInstrumentIds, ['guembri','qraqeb']);

  const rock = samples['gnawa-rock'];
  assert.deepEqual(region(rock, 'intro').activeInstrumentIds, ['guembri']);
  assert.ok(region(rock, 'chorus').activeInstrumentIds?.includes('guitar')
    && region(rock, 'chorus').activeInstrumentIds?.includes('drums'));
  assert.ok(!region(rock, 'solo').activeInstrumentIds?.includes('voice'),
    'the guitar feature gets a vocal gap');
  assert.equal(pattern(rock, 'solo', 'guitar'), 'Guitar variation');
  assert.deepEqual(region(rock, 'breakdown').activeInstrumentIds, ['guembri']);
  const rockPerformance = compileWholeSong(rock);
  assert.deepEqual(['chorus','solo'].map(kind => rockPerformance.bars
    .find(bar => bar.index === region(rock, kind).start)!.bpm), [116,120]);
});

test('Troilo coda gives the bandoneon phrase a real breath before it repeats', () => {
  const sheet = createCatalogSong('tango-troilo_song'), performance = compileWholeSong(sheet);
  const theme = sheet.regions.find(region => region.kind === 'tema')!;
  const bandoneon = sheet.tracks.find(track => track.instrumentId === 'bandoneon')!;
  const singingId = sheet.arrangement[theme.id]?.[bandoneon.id] ?? '';
  const singing = PATTERNS_BY_ID[singingId];
  assert.equal(singing?.shortName, 'Singing bandoneon');
  assert.deepEqual(singing?.events?.map(event => event.microtiming ?? 0), [0, 24, -12, 32, -18, 22, -8, 10],
    'the cantando line has authored phrase push and pull');
  const themeBar = performance.bars.find(bar => bar.index === theme.start)!;
  const delayedPhraseNote = performance.notes.find(note => note.trackId === bandoneon.id
    && note.bar === theme.start && Math.abs(note.time - (themeBar.start + 1.5 * 60 / themeBar.bpm + .024)) < .01);
  assert.ok(delayedPhraseNote, 'the bandoneon timing offsets reach the shared playback event plan');

  const coda = sheet.regions.find(region => region.kind === 'coda')!;
  const pattern = PATTERNS_BY_ID[sheet.arrangement[coda.id]?.[bandoneon.id] ?? ''];
  assert.equal(pattern?.shortName, 'Bandoneon breath');
  const phraseEndBar = performance.bars.find(bar => bar.index === coda.start + 2)!;
  const phraseNotes = performance.notes.filter(note => note.trackId === bandoneon.id
    && note.bar >= coda.start && note.bar < coda.start + 2);
  assert.ok(phraseNotes.length > 0, 'the coda phrase reaches the playback event plan');
  const last = phraseNotes.reduce((latest, note) => note.time > latest.time ? note : latest);
  const beatSeconds = 60 / performance.bars.find(bar => bar.index === coda.start)!.bpm;
  assert.ok(phraseEndBar.start - (last.time + last.dur) >= beatSeconds * .9,
    'the two-bar sung-like line leaves about a beat of air at its end');
});

test('Pugliese sample gives its silencio a reduced return, growing yumba, and varied reprise', () => {
  const song = createCatalogSong('tango-pugliese_song');
  const part = (kind: string, instrument: string) => {
    const region = song.regions.find(item => item.kind === kind)!;
    const track = song.tracks.find(item => item.instrumentId === instrument)!;
    const id = song.arrangement[region.id]?.[track.id];
    return { region, track, id, name: PATTERNS_BY_ID[id ?? '']?.shortName };
  };
  const reprise = song.regions.find(region => region.kind === 'tema-reprise')!;
  const contrast = song.regions.find(region => region.kind === 'contraste')!;
  const crescendo = song.regions.find(region => region.kind === 'crescendo')!;
  assert.equal(reprise.formLabel, 'tema de regreso');
  assert.deepEqual(contrast.activeInstrumentIds, ['violin','piano','upright-bass'],
    'the bandoneon drops out after the written silence so the thinner passage can breathe');
  assert.deepEqual(crescendo.activeInstrumentIds, ['bandoneon','violin','piano','upright-bass']);
  assert.equal(part('yumba', 'piano').name, 'Yumba');
  assert.equal(part('yumba', 'upright-bass').name, 'Yumba bass');
  assert.equal(part('tema-reprise', 'bandoneon').name, 'Bandoneon variation');
  assert.equal(part('tema-reprise', 'violin').name, 'Violin variation');
  assert.ok(PATTERNS_BY_ID[part('tema-reprise', 'bandoneon').id ?? '']?.arrangementVariation,
    'the returning theme uses an instrument-specific phrase variation');
  const performance = compileWholeSong(song);
  assert.equal(performance.notes.filter(note => note.bar >= contrast.start && note.bar < contrast.end
    && note.trackId === song.tracks.find(track => track.instrumentId === 'bandoneon')!.id).length, 0,
  'the bandoneon stays out throughout the reduced contrast');
  assert.ok(performance.notes.some(note => note.bar >= crescendo.start && note.bar < crescendo.end),
    'the ensemble crescendo remains audible after the contrast');
});

test('Pugliese closes with a separated ensemble chan-chan and audible final space', () => {
  const song = createCatalogSong('tango-pugliese_song'), performance = compileWholeSong(song);
  const close = song.regions.find(region => region.kind === 'chan-chan')!;
  assert.ok(close, 'the final cadence is a named one-bar section');
  assert.equal(close.bars, 1);
  assert.equal(close.formLabel, 'chan-chan close', 'the arrangement timeline uses the student-facing name');
  assert.deepEqual(new Set(close.activeInstrumentIds), new Set(['bandoneon','violin','piano','upright-bass']));
  assert.equal(song.regions.at(-1)?.id, close.id, 'the two-hit close ends the sample');

  const closeTracks = song.tracks.filter(track => close.activeInstrumentIds?.includes(track.instrumentId!));
  const notes = performance.notes.filter(note => note.bar >= close.start && note.bar < close.end);
  const attackOffsets = [...new Set(notes.map(note => Math.round((note.time - performance.bars.find(bar => bar.index === close.start)!.start) * 118 / 60 * 10)))]
    .map(value => value / 10).sort((a, b) => a - b);
  assert.deepEqual(attackOffsets, [0, 2.5], 'the ensemble attacks only at the opening and late close beats');
  for (const track of closeTracks) {
    const trackNotes = notes.filter(note => note.trackId === track.id);
    assert.equal(PATTERNS_BY_ID[song.arrangement[close.id]?.[track.id] ?? '']?.shortName, 'Chan-chan close');
    assert.ok(trackNotes.length > 0, `${track.instrumentId} lands in the closing ensemble`);
  }
  const bar = performance.bars.find(item => item.index === close.start)!;
  assert.ok(Math.max(...notes.map(note => note.time + note.dur)) < bar.start + (60 / 118) * 3.1,
    'the last hit releases with the end of the bar still silent');
});

test('Dark Ambient bell and cymbal accents stay sparse in the shared SoundFont plan', () => {
  const song = createCatalogSong('ambient-dark-ambient_song');
  const performance = compileWholeSong(song);
  const sampler = song.tracks.find(track => track.instrumentId === 'sampler')!;
  assert.ok(sampler);
  const descent = song.regions.find(region => region.kind === 'descent')!;
  const ritual = song.regions.find(region => region.kind === 'ritual')!;
  const voidSection = song.regions.find(region => region.kind === 'void')!;
  const inSection = (region: typeof descent) => performance.notes.filter(note => note.trackId === sampler.id
    && note.bar >= region.start && note.bar < region.end);
  const toll = inSection(descent);
  const bloom = inSection(ritual);
  assert.ok(toll.length > 0 && toll.length < (descent.bars ?? descent.end - descent.start) / 4,
    'the ride-bell toll only appears as isolated phrase punctuation');
  assert.ok(bloom.length > 0 && bloom.length < (ritual.bars ?? ritual.end - ritual.start) / 4,
    'the china-cymbal bloom stays a single sparse accent');
  assert.equal(inSection(voidSection).length, 0, 'the void clears every metallic attack');
  const notes = [...toll, ...bloom];
  const plan = compileSamplePlan({ ...performance, notes }, {
    selectedTrackIds: [sampler.id],
    trackInstruments: new Map([[sampler.id, 'sampler']]),
    worldId: 'ambient',
    styleId: 'ambient-dark-ambient',
  });
  const sampleKeys = plan.events.filter(event => event.type === 'on').map(event => event.key);
  assert.ok(sampleKeys.includes(53), 'the bell event resolves to the ride-bell sample');
  assert.ok(sampleKeys.includes(52), 'the ritual event resolves to the Chinese cymbal sample');
});

test('Andean samples teach the fuga lift, flute handoffs, bombo break and electronic cumbia layer', () => {
  const huayno = createCatalogSong('andean-huayno_song');
  const fuga = huayno.regions.find(region => region.kind === 'fuga')!;
  assert.equal(fuga.bpm, 120, 'the named huayno fuga receives a real tempo lift from the 104 BPM body');
  const huaynoPerformance = compileWholeSong(huayno);
  assert.ok(huaynoPerformance.bars.filter(bar => bar.regionId === fuga.id).every(bar => bar.bpm === 120));
  const quena = huayno.tracks.find(track => track.instrumentId === 'quena')!;
  assert.equal(PATTERNS_BY_ID[huayno.arrangement[fuga.id][quena.id]]?.shortName, 'Quena variation');

  const sanjuanito = createCatalogSong('andean-sanjuanito_song');
  for (const [kind, instrument] of [['A','quena'], ['B','siku']] as const) {
    const section = sanjuanito.regions.find(region => region.kind === kind)!;
    assert.ok(section.activeInstrumentIds?.includes(instrument), `${kind} hands the melody to ${instrument}`);
  }

  const saya = createCatalogSong('andean-saya_song');
  assert.equal(saya.tracks.some(track => track.instrumentId === 'voice'), false,
    'the instrumental teaching adaptation leaves room for the bombo and flute exchange');
  const chorus = saya.regions.find(region => region.kind === 'chorus')!;
  assert.ok(chorus.activeInstrumentIds?.includes('siku'));
  assert.equal(chorus.activeInstrumentIds?.includes('quena'), false,
    'the siku answer replaces the quena call instead of stacking another lead line');

  const tinku = createCatalogSong('andean-tinku_song');
  const breakRegion = tinku.regions.find(region => region.kind === 'break')!;
  assert.deepEqual(breakRegion.activeInstrumentIds, ['bombo-andino']);
  const bombo = tinku.tracks.find(track => track.instrumentId === 'bombo-andino')!;
  assert.equal(PATTERNS_BY_ID[tinku.arrangement[breakRegion.id][bombo.id]]?.shortName, 'Bombo-andino pulse');
  const breakNotes = compileWholeSong(tinku).notes.filter(note => note.bar >= breakRegion.start && note.bar < breakRegion.end);
  assert.ok(breakNotes.length > 0 && breakNotes.every(note => note.trackId === bombo.id),
    'the four-bar stomp break keeps only the authored bombo part');

  const fusion = createCatalogSong('andean-andean-fusion_song');
  assert.equal(new Set(fusion.tracks.map(track => track.instrumentId)).size, 8,
    'Andean Fusion uses its full eight-part authored ensemble');
  for (const instrument of ['bass','drums','synth','guitar']) {
    assert.ok(fusion.tracks.some(track => track.instrumentId === instrument), `fusion sample includes ${instrument}`);
  }
  const groove = fusion.regions.find(region => region.kind === 'groove')!;
  const pattern = (instrument: string) => {
    const track = fusion.tracks.find(item => item.instrumentId === instrument)!;
    return PATTERNS_BY_ID[fusion.arrangement[groove.id][track.id]]!;
  };
  assert.equal(pattern('bass').shortName, 'Syncopated bass');
  assert.equal(pattern('drums').shortName, 'Kit backbeat');
  assert.deepEqual(pattern('drums').events?.map(event => event.hitType), ['kick','hat','hat','snare','kick','hat','hat','snare']);
  assert.equal(pattern('synth').shortName, 'Synth chord jab');
  assert.equal(pattern('guitar').shortName, 'Guitar variation',
    'the guitar support uses the Andean Fusion style cell in the groove');

  const dissolve = fusion.regions.find(region => region.kind === 'dissolve')!;
  const synth = fusion.tracks.find(track => track.instrumentId === 'synth')!;
  const coda = PATTERNS_BY_ID[fusion.arrangement[dissolve.id][synth.id]]!;
  assert.equal(coda.shortName, 'Synth coda tail');
  assert.equal(coda.cycleLength, dissolve.end - dissolve.start,
    'the long dissolve is authored as one developing phrase instead of a four-bar velocity loop');
  assert.deepEqual(coda.events?.map(event => event.position),
    Array.from({ length: dissolve.end - dissolve.start }, (_, index) => index * 4),
    'the dissolve rearticulates the held chord once per bar');
  assert.ok(coda.events?.every(event => event.pitch?.voicing === 'chord'),
    'the synth tail holds actual chord voicings, not a single-line pitch guide');
  assert.ok(coda.events?.every(event => event.duration === 3.75),
    'each coda chord holds nearly to the next bar line');
  assert.ok(coda.events?.every((event, index, events) => index === 0 || event.velocity! < events[index - 1].velocity!),
    'the electronic layer steps down through the dissolve instead of repeating the clipped jab');
  const tailVariation = Object.values(PATTERNS_BY_ID).find(candidate => candidate.styleIds?.includes('andean-andean-fusion')
    && candidate.instruments?.includes('synth') && candidate.shortName === 'Synthesizer variation'
    && candidate.cycleLength === dissolve.end - dissolve.start);
  assert.ok(tailVariation, 'the tail can still generate a local teaching variation');
  assert.equal(patternAvailableInSection(tailVariation, 'B'), false,
    'a dissolve-only 16-bar variation cannot leak into a four-bar B phrase');
  assert.equal(patternAvailableInSection(tailVariation, 'dissolve'), true,
    'the generated variation remains available where its source tail belongs');
  const score = compileNotatedScore(fusion);
  const secondB = fusion.regions.filter(region => region.kind === 'B')[1]!;
  const secondBCell = score.sections.find(section => section.id === secondB.id)!.cells[synth.id];
  assert.ok(secondBCell.bars.every(bar => bar.attacks.length > 0),
    'the synthesizer never drops out mid-phrase in the second B section');
  const fusionPerformance = compileWholeSong(fusion);
  const codaNotes = fusionPerformance.notes.filter(note => note.trackId === synth.id
    && note.bar >= dissolve.start && note.bar < dissolve.end);
  assert.ok(codaNotes.length > 0, 'the authored synth tail reaches the playback event plan');
  assert.deepEqual([...new Set(codaNotes.map(note => note.bar))],
    Array.from({ length: dissolve.end - dissolve.start }, (_, index) => dissolve.start + index),
    'the held synth chord carries across all sixteen coda bars');
  const barPeakVelocities = Array.from({ length: dissolve.end - dissolve.start }, (_, index) =>
    Math.max(...codaNotes.filter(note => note.bar === dissolve.start + index).map(note => note.vel)));
  assert.ok(barPeakVelocities.every((velocity, index) => index === 0 || velocity <= barPeakVelocities[index - 1])
    && barPeakVelocities.at(-1)! < barPeakVelocities[0],
  'the volume taper reaches the generated performance, rather than only the written pattern');
});

test('Japanese samples expose jo–ha–kyū pacing, shakuhachi ma, and taiko ensemble rests', () => {
  const gagaku = createCatalogSong('japanese-gagaku_song');
  const jo = gagaku.regions.find(region => region.kind === 'jo')!;
  const ha = gagaku.regions.find(region => region.kind === 'ha')!;
  const kyu = gagaku.regions.find(region => region.kind === 'kyu')!;
  assert.deepEqual([jo.bpm, ha.bpm, kyu.bpm], [56, 64, 72],
    'the grid-based teaching score makes the jo–ha–kyū acceleration audible');
  const gagakuPerformance = compileWholeSong(gagaku);
  for (const region of [jo, ha, kyu]) {
    assert.ok(gagakuPerformance.bars.filter(bar => bar.regionId === region.id).every(bar => bar.bpm === region.bpm));
  }
  assert.match(SONGS_BY_ID['japanese-gagaku_song'].description, /not contain all three movements/i);
  assert.match(SONGS_BY_ID['japanese-gagaku_song'].source ?? '', /ntj\.jac\.go\.jp/);

  const shakuhachi = createCatalogSong('japanese-shakuhachi_song');
  const ma = shakuhachi.regions.find(region => region.kind === 'ma')!;
  assert.equal(ma.formLabel, 'ma · breath space');
  assert.deepEqual(ma.activeInstrumentIds, []);
  assert.equal(compileWholeSong(shakuhachi).notes.filter(note => note.bar >= ma.start && note.bar < ma.end).length, 0);

  const taiko = createCatalogSong('japanese-taiko_song');
  assert.equal(taiko.bpm, 120, 'the taiko sample falls within the authored style tempo range');
  for (const [kind, label] of [['silence','opening silence · ensemble rest'], ['break','ensemble break · full rest']] as const) {
    const rest = taiko.regions.find(region => region.kind === kind)!;
    assert.equal(rest.formLabel, label);
    assert.deepEqual(rest.activeInstrumentIds, []);
    assert.equal(compileWholeSong(taiko).notes.filter(note => note.bar >= rest.start && note.bar < rest.end).length, 0,
      `${kind} remains silent in playback`);
  }
});

test('tango canción gives the sung cadence a real ensemble respiro before the refrain', () => {
  const song = createCatalogSong('tango-tango-cancion_song');
  const performance = compileWholeSong(song);
  const index = song.regions.findIndex(region => region.kind === 'respiro');
  assert.ok(index > 0 && index < song.regions.length - 1, 'the respiro separates a sung verse and the returning refrain');
  const pause = song.regions[index];
  assert.equal(pause.bars, 1);
  assert.equal(pause.formLabel, 'vocal respiro');
  assert.deepEqual(pause.activeInstrumentIds, []);
  assert.equal(performance.notes.filter(note => note.bar >= pause.start && note.bar < pause.end).length, 0,
    'the rest stays empty in the shared sample event plan');
  assert.ok(performance.notes.some(note => note.bar < pause.start), 'the vocal verse leads into the pause');
  assert.ok(performance.notes.some(note => note.bar >= pause.end), 'the refrain re-enters after the pause');
});

test('Bachata samples reserve vocals for sung sections and teach separate verse and refrain phrases', () => {
  const vocalStudies: Record<string, Record<string, string>> = {
    'bachata-dominican_song': { verse: 'Vocal verse phrase', chorus: 'Vocal refrain lift' },
    'bachata-amargue_song': { verse: 'Vocal verse phrase', chorus: 'Vocal refrain lift' },
    'bachata-traditional-bolero-bachata_song': { verse: 'Vocal verse phrase', bridge: 'Vocal refrain lift' },
    'bachata-moderna_song': { verse: 'Vocal verse phrase', prechorus: 'Vocal refrain lift', chorus: 'Vocal refrain lift', bridge: 'Vocal verse phrase' },
    'bachata-sensual_song': { verse: 'Vocal verse phrase', chorus: 'Vocal refrain lift', bridge: 'Vocal verse phrase' },
    'bachata-bachata-mambo_song': { verse: 'Vocal verse phrase', chorus: 'Vocal refrain lift' },
    'bachata-urban_song': { verse: 'Vocal verse phrase', chorus: 'Vocal refrain lift' },
    'bachata-fusion_song': { verse: 'Vocal verse phrase', prechorus: 'Vocal refrain lift', chorus: 'Vocal refrain lift' },
  };

  for (const [songId, sungKinds] of Object.entries(vocalStudies)) {
    const song = createCatalogSong(songId), performance = compileWholeSong(song);
    const voice = song.tracks.find(track => track.instrumentId === 'voice')!;
    assert.ok(voice, `${songId} has its student vocal guide`);
    for (const region of song.regions.filter(item => (item.bars ?? 0) > 0)) {
      const expected = sungKinds[region.kind];
      const shouldSing = expected !== undefined;
      assert.equal(region.activeInstrumentIds?.includes('voice'), shouldSing,
        `${songId}/${region.kind} ${shouldSing ? 'carries the lyric phrase' : 'leaves an instrumental pocket'}`);
      const voiceNotes = performance.notes.filter(note => note.trackId === voice.id
        && note.bar >= region.start && note.bar < region.end);
      if (shouldSing) {
        assert.ok(voiceNotes.length, `${songId}/${region.kind} renders the vocal phrase in the shared event plan`);
        const patternId = song.arrangement[region.id]?.[voice.id];
        assert.equal(PATTERNS_BY_ID[patternId ?? '']?.shortName, expected,
          `${songId}/${region.kind} uses its distinct playable vocal study`);
      } else {
        assert.equal(voiceNotes.length, 0, `${songId}/${region.kind} keeps the sustained guide out of playback`);
        assert.ok(performance.notes.some(note => note.trackId !== voice.id
          && note.bar >= region.start && note.bar < region.end),
        `${songId}/${region.kind} keeps its instrumental arrangement sounding`);
      }
    }
  }
});

test('Urban Bachata gives the dembow pocket a real bass part instead of doubling its synth patch', () => {
  const song = createCatalogSong('bachata-urban_song');
  const bass = song.tracks.find(track => track.instrumentId === 'bass' && track.role === 'bass');
  assert.ok(bass, 'the Urban Bachata sample includes its authored bass instrument');
  assert.ok(!song.tracks.some(track => track.instrumentId === 'synth' && track.role === 'bass'),
    'the synth remains a chord color while the bass instrument carries the low anchor');
  const verse = song.regions.find(region => region.kind === 'verse')!;
  const pattern = PATTERNS_BY_ID[song.arrangement[verse.id][bass.id]]!;
  assert.equal(pattern.shortName, 'Bass majao syncopation');
  assert.ok(pattern.instruments?.includes('bass') && pattern.roles.includes('bass'));
  assert.ok(pattern.events?.some(event => event.position === 1.5) && pattern.events?.some(event => event.position === 3.5),
    'the bass cell keeps its offbeat dembow pickups instead of a generic root pulse');
});

test('Tropical Latin stages its full eight-part ensemble into the chorus and mambo', () => {
  const song = createCatalogSong('latin-tropical_song');
  assert.equal(new Set(song.tracks.map(track => track.instrumentId)).size, 8);
  const trackFor = (instrument: string) => song.tracks.find(track => track.instrumentId === instrument)!;
  const active = (kind: string, occurrence = 1) => song.regions.filter(region => region.kind === kind)[occurrence - 1]!;
  const intro = active('intro');
  const verse = active('verse');
  const prechorus = active('prechorus');
  const chorus = active('chorus');
  const mambo = active('mambo');
  const coda = active('coda');
  assert.equal(intro.activeInstrumentIds?.includes('guitar'), false);
  assert.equal(verse.activeInstrumentIds?.includes('cumbia-drum'), false);
  assert.ok(prechorus.activeInstrumentIds?.includes('guitar') && prechorus.activeInstrumentIds?.includes('cumbia-drum'));
  for (const region of [chorus, mambo]) {
    assert.ok(region.activeInstrumentIds?.includes('guitar') && region.activeInstrumentIds?.includes('cumbia-drum'));
  }
  assert.equal(coda.activeInstrumentIds?.includes('cumbia-drum'), false,
    'the added dance layer leaves space for the coda');
  assert.equal(PATTERNS_BY_ID[song.arrangement[chorus.id][trackFor('guitar').id]]?.shortName, 'Guitar variation');
  assert.equal(PATTERNS_BY_ID[song.arrangement[mambo.id][trackFor('cumbia-drum').id]]?.shortName, 'Tambor llamador reply');
});

test('Bulerías gives the cante a one-compás llamada and ends on a distinct remate', () => {
  const song = createCatalogSong('flamenco-bulerias_song');
  const performance = compileWholeSong(song);
  const llamada = song.regions.find(region => region.kind === 'llamada')!;
  const remate = song.regions.find(region => region.kind === 'remate')!;
  assert.equal(llamada.bars, 1, 'the llamada is a compact cue rather than a repeated four-bar loop');
  assert.equal(remate.bars, 1, 'the closing remate is one 12-count compás');
  assert.deepEqual(llamada.activeInstrumentIds, ['guitar','palmas'],
    'the guitar and palmas cue the cante entrance without a voice guide covering it');
  assert.deepEqual(remate.activeInstrumentIds, ['guitar','palmas','cajon'],
    'the final call is carried by concise instrument accents, not a vocal loop');
  const patternNames = (region: typeof llamada) => Object.fromEntries(song.tracks.map(track => [
    track.instrumentId, PATTERNS_BY_ID[song.arrangement[region.id]?.[track.id] ?? '']?.shortName,
  ]));
  assert.deepEqual(patternNames(llamada), {
    voice: undefined, guitar: 'Guitar llamada', palmas: 'Palmas compás', cajon: undefined,
  });
  assert.deepEqual(patternNames(remate), {
    voice: undefined, guitar: 'Guitar remate', palmas: 'Palmas remate', cajon: 'Cajón remate',
  });
  const bar = performance.bars.find(item => item.index === remate.start)!;
  const closeNotes = performance.notes.filter(note => note.bar === remate.start);
  const closeAttacks = [...new Set(closeNotes.filter(note => note.trackId === song.tracks.find(track => track.instrumentId === 'guitar')!.id)
    .map(note => Math.round((note.time - bar.start) * bar.bpm / 60 * 2) / 2))].sort((a, b) => a - b);
  assert.deepEqual(closeAttacks, [4.5, 5, 5.5], 'the guitar reserves its gesture for the final three subdivisions');
  const finalRelease = Math.max(...closeNotes.map(note => (note.time - bar.start) * bar.bpm / 60 + note.dur * bar.bpm / 60));
  assert.ok(bar.beatsPerBar - finalRelease >= .2, 'the close leaves a clear release pocket after the last ensemble hit');
});

test('Alegrías silencio changes to minor harmony and develops a guitar falseta', () => {
  const song = createCatalogSong('flamenco-alegrias_song');
  const silencioParts = song.regions.filter(region => ['silencio','silencio-answer'].includes(region.kind));
  assert.equal(silencioParts.reduce((bars, region) => bars + (region.bars ?? region.end - region.start), 0), 8);
  assert.ok(silencioParts.every(region => region.activeInstrumentIds?.join(',') === 'guitar'),
    'the singer, palmas and cajón leave the slow guitar feature exposed');
  assert.ok(silencioParts.every(region => region.chords?.join(',') === 'Am,G,F,E'),
    'the feature turns from bright major coplas to the relative-minor Andalusian cadence');
  const guitar = song.tracks.find(track => track.instrumentId === 'guitar')!;
  const patternNames = ['Silencio falseta', 'Silencio answer'];
  assert.deepEqual(silencioParts.map(region => PATTERNS_BY_ID[song.arrangement[region.id]?.[guitar.id] ?? '']?.shortName), patternNames);
  const performance = compileWholeSong(song);
  const first = silencioParts[0], last = silencioParts.at(-1)!;
  const inSection = performance.notes.filter(note => note.bar >= first.start && note.bar < last.end);
  assert.ok(inSection.length);
  assert.ok(inSection.every(note => note.trackId === guitar.id), 'the slow passage stays guitar-led in playback');
  const playedPatterns = new Set(song.measures.slice(first.start, last.end).flatMap(measure =>
    Object.values(measure.patternDetailsByTrack ?? {}).map(detail => PATTERNS_BY_ID[detail.patternId]?.shortName)));
  for (const name of patternNames) assert.ok(playedPatterns.has(name), `${name} reaches the generated playback score`);
});

test('Chicago blues stop-time and bluegrass breaks expose distinct playable parts', () => {
  const chicago = createCatalogSong('blues-chicago_song');
  const stopTime = chicago.regions.find(region => region.kind === 'stop-time')!;
  assert.equal(stopTime.bars, 8);
  assert.equal(stopTime.formLabel, 'stop-time break');
  const stopPatterns: Record<string, string> = {
    voice: 'Stop-time vocal call', guitar: 'Stop-time guitar hit', harmonica: 'Stop-time harp answer',
    piano: 'Stop-time piano hit', bass: 'Stop-time bass hit', drums: 'Stop-time drum hit',
  };
  const chicagoPerformance = compileWholeSong(chicago);
  for (const [instrument, expected] of Object.entries(stopPatterns)) {
    const track = chicago.tracks.find(item => item.instrumentId === instrument)!;
    const patternId = chicago.arrangement[stopTime.id]?.[track.id];
    assert.equal(PATTERNS_BY_ID[patternId ?? '']?.shortName, expected, `${instrument} uses its Chicago stop-time cell`);
    assert.ok(chicagoPerformance.notes.some(note => note.trackId === track.id && note.bar >= stopTime.start && note.bar < stopTime.end),
      `${instrument} stop-time part reaches playback events`);
  }
  const harps = PATTERNS_BY_ID[chicago.arrangement[stopTime.id]?.[chicago.tracks.find(item => item.instrumentId === 'harmonica')!.id] ?? '']!;
  assert.deepEqual(harps.events?.map(event => event.position), [2], 'one short harp answer lands on beat three after the band hit');

  const bluegrass = createCatalogSong('country-bluegrass_song');
  for (const [section, lead, pattern, absent] of [
    ['banjo-break', 'banjo', 'Banjo melody roll', 'voice'],
    ['fiddle-break', 'violin', 'Fiddle shuffle', 'banjo'],
  ] as const) {
    const region = bluegrass.regions.find(item => item.kind === section)!;
    assert.equal(region.leadInstrumentId, lead, `${section} names its featured player`);
    assert.ok(!(region.activeInstrumentIds ?? []).includes(absent), `${section} leaves the other feature/vocal role out`);
    const track = bluegrass.tracks.find(item => item.instrumentId === lead)!;
    assert.equal(PATTERNS_BY_ID[bluegrass.arrangement[region.id]?.[track.id] ?? '']?.shortName, pattern);
  }
  const sectionPattern = (section: string, instrument: string) => {
    const region = bluegrass.regions.find(item => item.kind === section)!;
    const track = bluegrass.tracks.find(item => item.instrumentId === instrument)!;
    return PATTERNS_BY_ID[bluegrass.arrangement[region.id]?.[track.id] ?? '']?.shortName;
  };
  assert.equal(sectionPattern('intro', 'banjo'), 'Alternating-thumb roll');
  assert.equal(sectionPattern('verse', 'banjo'), 'Banjo forward roll');
  assert.equal(sectionPattern('chorus', 'banjo'), 'Forward-reverse roll');
  assert.equal(sectionPattern('chorus', 'voice'), 'Vocal refrain phrase');
  assert.equal(sectionPattern('banjo-break', 'guitar'), 'Alternating-bass guitar');
  const guitarRun = bluegrass.tracks.find(item => item.instrumentId === 'guitar')!;
  const guitarBase = PATTERNS_BY_ID[bluegrass.arrangement[bluegrass.regions.find(item => item.kind === 'banjo-break')!.id]?.[guitarRun.id] ?? '']!;
  const chordChange = guitarBase.variants?.find(variant => variant.variationType === 'cadence');
  assert.ok(chordChange?.events?.some(event => event.position === 2.5) && chordChange.events.some(event => event.position === 3.75),
    'the alternating-bass guitar cell has a four-pick chord-change run for phrase endings');
  const fingering = (section: string) => {
    const region = bluegrass.regions.find(item => item.kind === section)!;
    const banjo = bluegrass.tracks.find(item => item.instrumentId === 'banjo')!;
    return PATTERNS_BY_ID[bluegrass.arrangement[region.id]?.[banjo.id] ?? '']?.events?.map(event => event.notation?.fingering);
  };
  assert.deepEqual(fingering('intro'), ['T','I','T','M','T','I','T','M']);
  assert.deepEqual(fingering('verse'), ['T','I','M','T','I','M','T','I']);
  assert.deepEqual(fingering('chorus'), ['T','I','M','T','M','I','T','M']);
});

test('tango samples keep their own named groove and phrase vocabulary', () => {
  const partPattern = (songId: string, section: string, instrument: string) => {
    const sheet = createCatalogSong(songId);
    const region = sheet.regions.find(item => item.kind === section);
    assert.ok(region, `${songId} contains ${section}`);
    const track = sheet.tracks.find(item => item.instrumentId === instrument);
    assert.ok(track, `${songId} contains ${instrument}`);
    const patternId = sheet.arrangement[region.id]?.[track.id];
    assert.ok(patternId, `${songId}/${section} assigns ${instrument} a pattern`);
    return PATTERNS_BY_ID[patternId]?.shortName;
  };

  assert.equal(partPattern('tango-darienzo_song', 'tema', 'piano'), 'Hard marcato');
  assert.equal(partPattern('tango-troilo_song', 'tema', 'bandoneon'), 'Singing bandoneon');
  assert.equal(partPattern('tango-troilo_song', 'coda', 'bandoneon'), 'Bandoneon breath');
  assert.equal(partPattern('tango-pugliese_song', 'yumba', 'piano'), 'Yumba');
  assert.equal(partPattern('tango-pugliese_song', 'yumba', 'upright-bass'), 'Yumba bass');
  assert.equal(partPattern('tango-salgan_song', 'contrapunto', 'piano'), 'Piano reply');
  assert.equal(partPattern('tango-milonga_song', 'copla', 'upright-bass'), 'Habanera bass');
  assert.equal(partPattern('tango-vals_song', 'tema', 'upright-bass'), 'Three-beat bass');
  assert.equal(partPattern('tango-piazzolla-nuevo-tango_song', 'ostinato', 'piano'), '3+3+2 chords');
  assert.equal(partPattern('tango-piazzolla-nuevo-tango_song', 'arrastre', 'bandoneon'), 'Bandoneon drag');
  assert.equal(partPattern('tango-piazzolla-nuevo-tango_song', 'arrastre', 'upright-bass'), 'Bass drag');
  assert.equal(partPattern('tango-electrotango-gotan_song', 'hook', 'bandoneon'), 'Bandoneon hook');
  assert.equal(partPattern('tango-electro-rock-bajofondo_song', 'chorus', 'drums'), 'Drum kit variation');
  assert.equal(createCatalogSong('tango-darienzo_song').regions.find(region => region.kind === 'variacion')?.formLabel, 'variación');
  const nuevo = createCatalogSong('tango-piazzolla-nuevo-tango_song');
  const performance = compileWholeSong(nuevo);
  const arrastre = nuevo.regions.find(region => region.kind === 'arrastre')!;
  const corte = nuevo.regions.find(region => region.kind === 'corte')!;
  assert.ok(corte && corte.end === arrastre.start, 'the ensemble cut leads directly into the arrastre pickup');
  assert.equal(corte.bars, 1);
  assert.equal(corte.formLabel, 'corte · ensemble cut');
  assert.deepEqual(corte.activeInstrumentIds, [], 'the corte leaves the full ensemble out for one bar');
  assert.equal(performance.notes.filter(note => note.bar >= corte.start && note.bar < corte.end).length, 0,
    'the ensemble cut is silent in the shared playback event plan');
  assert.equal(arrastre.formLabel, 'arrastre pickup');
  assert.deepEqual(new Set(arrastre.activeInstrumentIds), new Set(['bandoneon', 'upright-bass']),
    'the one-bar drag clears the ostinato and leaves the two parts that pull the returning hook forward');
  const dragNotes = performance.notes.filter(note => note.bar >= arrastre.start && note.bar < arrastre.end);
  for (const instrument of ['bandoneon', 'upright-bass']) {
    const track = nuevo.tracks.find(item => item.instrumentId === instrument)!;
    const note = dragNotes.find(item => item.trackId === track.id);
    assert.ok(note, `${instrument} arrastre reaches the playback event plan`);
    assert.equal(GESTURE_NAMES[note.gestureCode], 'arrastre', `${instrument} keeps the authored transition gesture`);
    assert.ok(note.authoredTechnique, `${instrument} does not have the written gesture replaced by a generic accent`);
  }
  const selectedIds = nuevo.tracks.filter(track => ['bandoneon','upright-bass'].includes(track.instrumentId!)).map(track => track.id);
  const plan = compileSamplePlan({ ...performance, notes: dragNotes }, {
    selectedTrackIds: selectedIds,
    trackInstruments: new Map(nuevo.tracks.filter(track => selectedIds.includes(track.id)).map(track => [track.id, track.instrumentId!])),
    worldId: 'tango', styleId: 'tango-piazzolla-nuevo-tango',
  });
  for (const note of dragNotes) {
    const attack = plan.events.find(event => event.type === 'on'
      && Math.abs(event.time - note.time) < .001 && event.key === Math.round(note.midi));
    if (!attack || attack.type !== 'on') throw new Error('The arrastre attack did not reach the shared SoundFont playback/export plan.');
    assert.ok(plan.events.some(event => event.type === 'bend' && event.channel === attack.channel
      && event.key === attack.key && event.time > attack.time && event.time < attack.time + note.dur),
    'the playback plan turns the written arrastre into an audible upward drag');
  }
  const canyengue = createCatalogSong('tango-canyengue_song');
  const canyengueCopla = canyengue.regions.find(region => region.kind === 'copla')!;
  const canyengueArrastre = canyengue.regions.find(region => region.kind === 'arrastre')!;
  const canyengueClose = canyengue.regions.find(region => region.kind === 'cierre')!;
  assert.equal(partPattern('tango-canyengue_song', 'estribillo', 'bandoneon'), 'Canyengue phrase');
  assert.equal(partPattern('tango-canyengue_song', 'copla', 'bandoneon'), 'Clipped phrase',
    'the return varies the clipped bandoneon call instead of looping one figure');
  assert.equal(partPattern('tango-canyengue_song', 'copla', 'violin'), 'Violin variation');
  assert.equal(partPattern('tango-canyengue_song', 'trio', 'violin'), 'Violin reply');
  const canyengueViolin = canyengue.tracks.find(track => track.instrumentId === 'violin')!;
  const canyengueCoplaPattern = PATTERNS_BY_ID[canyengue.arrangement[canyengueCopla.id]?.[canyengueViolin.id] ?? ''];
  assert.match(canyengueCoplaPattern?.description ?? '', /Canyengue/i);
  assert.doesNotMatch(canyengueCoplaPattern?.description ?? '', /Milonga/i,
    'the generated Canyengue variation names its own source phrase');
  const canyengueBandoneon = canyengue.tracks.find(track => track.instrumentId === 'bandoneon')!;
  const canyengueBandoneonPattern = PATTERNS_BY_ID[canyengue.arrangement[canyengueCopla.id]?.[canyengueBandoneon.id] ?? ''];
  assert.doesNotMatch(canyengueBandoneonPattern?.description ?? '', /Milonga/i,
    'Canyengue bandoneon cells do not inherit Milonga wording');
  assert.equal(canyengueArrastre.bars, 1);
  assert.equal(canyengueArrastre.formLabel, 'arrastre pickup');
  assert.equal(canyengueArrastre.leadInstrumentId, 'upright-bass');
  assert.deepEqual(canyengueArrastre.activeInstrumentIds, ['upright-bass'],
    'the bass drag gets a clear pocket before the ensemble close');
  assert.deepEqual(canyengueArrastre.chords, ['E7']);
  assert.deepEqual(canyengueClose.chords, ['Am', 'Am'], 'the dominant drag resolves into the authored tonic close');
  const canyenguePerformance = compileWholeSong(canyengue);
  const canyengueNotes = canyenguePerformance.notes.filter(note => note.bar >= canyengueArrastre.start && note.bar < canyengueArrastre.end);
  assert.ok(canyengueNotes.length > 0);
  assert.ok(canyengueNotes.every(note => canyengue.tracks.find(track => track.id === note.trackId)?.instrumentId === 'upright-bass'));
  assert.ok(canyenguePerformance.notes.some(note => note.bar >= canyengueCopla.start && note.bar < canyengueCopla.end
    && canyengue.tracks.find(track => track.id === note.trackId)?.instrumentId === 'bandoneon'));
  const bassTrack = canyengue.tracks.find(track => track.instrumentId === 'upright-bass')!;
  const canyengueBassNotes = canyengueNotes.filter(note => note.trackId === bassTrack.id);
  assert.ok(canyengueBassNotes.length > 0);
  for (const note of canyengueBassNotes) {
    assert.equal(GESTURE_NAMES[note.gestureCode], 'arrastre');
    assert.ok(note.authoredTechnique);
  }
  const canyenguePlan = compileSamplePlan({ ...canyenguePerformance, notes: canyengueBassNotes }, {
    selectedTrackIds: [bassTrack.id],
    trackInstruments: new Map([[bassTrack.id, 'upright-bass']]),
    worldId: 'tango', styleId: 'tango-canyengue',
  });
  for (const note of canyengueBassNotes) {
    const attack = canyenguePlan.events.find(event => event.type === 'on'
      && Math.abs(event.time - note.time) < .001 && event.key === Math.round(note.midi));
    if (!attack || attack.type !== 'on') throw new Error('The Canyengue bass drag did not reach the shared SoundFont playback/export plan.');
    assert.ok(canyenguePlan.events.some(event => event.type === 'bend' && event.channel === attack.channel
      && event.key === attack.key && event.time > attack.time && event.time < attack.time + note.dur),
    'the Canyengue transition bends in playback instead of becoming an ordinary bass note');
  }
  const cancion = createCatalogSong('tango-tango-cancion_song');
  assert.ok(!(cancion.regions.find(region => region.kind === 'intro')?.activeInstrumentIds ?? []).includes('voice'),
    'the tango-canción introduction is instrumental, leaving the vocal phrase room to enter');
});

test('Milonga sample switches briefly from the habanera walk to a bandoneon traspié and back', () => {
  const sheet = createCatalogSong('tango-milonga_song');
  const performance = compileWholeSong(sheet);
  const turn = sheet.regions.find(region => region.kind === 'traspie');
  assert.ok(turn, 'the sample includes a named two-bar traspié turn');
  assert.equal(turn.bars, 2);
  assert.equal(turn.formLabel, 'milonga traspié · double-time turn');
  assert.deepEqual(turn.activeInstrumentIds, ['bandoneon','guitar','piano','upright-bass'],
    'the lead turn stays clear while the habanera chord and bass parts keep time');

  const patternName = (instrument: string) => {
    const track = sheet.tracks.find(item => item.instrumentId === instrument)!;
    return PATTERNS_BY_ID[sheet.arrangement[turn.id]?.[track.id] ?? '']?.shortName;
  };
  assert.equal(patternName('bandoneon'), 'Milonga traspié');
  assert.equal(patternName('guitar'), 'Milonga guitar habanera');
  assert.equal(patternName('piano'), 'Milonga piano lift');
  assert.equal(patternName('upright-bass'), 'Habanera bass');
  const guitarPattern = PATTERNS_BY_ID[sheet.arrangement[turn.id]?.[sheet.tracks.find(item => item.instrumentId === 'guitar')!.id] ?? ''];
  const pianoPattern = PATTERNS_BY_ID[sheet.arrangement[turn.id]?.[sheet.tracks.find(item => item.instrumentId === 'piano')!.id] ?? ''];
  assert.notDeepEqual(guitarPattern.onsetGrid, pianoPattern.onsetGrid,
    'the guitar teaches the habanera walk while piano fills separate slots');
  const firstCopla = sheet.regions.find(region => region.kind === 'copla')!;
  const violin = sheet.tracks.find(item => item.instrumentId === 'violin')!;
  assert.equal(PATTERNS_BY_ID[sheet.arrangement[firstCopla.id]?.[violin.id] ?? '']?.shortName, 'Violin variation');

  const bandoneon = sheet.tracks.find(item => item.instrumentId === 'bandoneon')!;
  const leadPattern = PATTERNS_BY_ID[sheet.arrangement[turn.id]?.[bandoneon.id] ?? ''];
  assert.ok(leadPattern.events?.some(event => event.position === 1.25)
    && leadPattern.events.some(event => event.position === 1.5),
  'the double-time pickup is visible in the authored lead cell');
  assert.ok(performance.notes.some(note => note.trackId === bandoneon.id && note.bar >= turn.start && note.bar < turn.end),
    'the traspié phrase reaches the shared playback plan');
  for (const instrument of ['guitar','piano','upright-bass']) {
    const track = sheet.tracks.find(item => item.instrumentId === instrument)!;
    assert.ok(performance.notes.some(note => note.trackId === track.id && note.bar >= turn.start && note.bar < turn.end),
      `${instrument} maintains the underlying milonga pulse during the lead variation`);
  }

  const refrain = sheet.regions.find(region => region.kind === 'estribillo' && region.start > turn.start)!;
  assert.ok(refrain.activeInstrumentIds?.includes('violin'),
    'the sample restores the violin answer when it returns to the regular refrain');
  assert.equal(PATTERNS_BY_ID[sheet.arrangement[refrain.id]?.[bandoneon.id] ?? '']?.shortName, 'Milonga phrase');
  const close = sheet.regions.find(region => region.kind === 'cierre')!;
  assert.equal(PATTERNS_BY_ID[sheet.arrangement[close.id]?.[violin.id] ?? '']?.shortName, 'Violin reply');
});

test('signature sample moments use distinct, style-authored parts and clear foreground space', () => {
  const activeIn = (songId: string, section: string) => {
    const sheet = createCatalogSong(songId);
    return sheet.regions.find(region => region.kind === section)?.activeInstrumentIds ?? [];
  };
  const patternIn = (songId: string, section: string, instrument: string, occurrence = 1) => {
    const sheet = createCatalogSong(songId);
    const region = sheet.regions.filter(item => item.kind === section)[occurrence - 1]!;
    const track = sheet.tracks.find(item => item.instrumentId === instrument)!;
    return PATTERNS_BY_ID[sheet.arrangement[region.id]?.[track.id] ?? '']?.shortName;
  };

  const phraseCellsIn = (songId: string, section: string, instrument: string, occurrence = 1) => {
    const sheet = createCatalogSong(songId);
    const region = sheet.regions.filter(item => item.kind === section)[occurrence - 1]!;
    const track = sheet.tracks.find(item => item.instrumentId === instrument)!;
    return new Set(sheet.measures.slice(region.start, region.end)
      .map(measure => measure.patternDetailsByTrack?.[track.id]?.patternId)
      .filter((id): id is string => !!id)
      .map(id => PATTERNS_BY_ID[id]?.shortName ?? id));
  };

  const funk = createCatalogSong('funk-james-brown-the-one_song');
  const funkPerformance = compileWholeSong(funk);
  const funkHit = funk.regions.find(region => region.kind === 'break-hit')!;
  const funkRest = funk.regions.find(region => region.kind === 'break-rest')!;
  assert.equal(funkHit.bars, 1);
  assert.equal(funkHit.formLabel, 'band hit · one-beat stop');
  assert.equal(funkRest.formLabel, 'break rest · full-band silence');
  assert.deepEqual(new Set(funkHit.activeInstrumentIds), new Set(['trumpet','guitar','clavinet','bass','drums']));
  for (const instrument of ['trumpet','guitar','clavinet','bass']) {
    assert.equal(patternIn('funk-james-brown-the-one_song', 'break-hit', instrument), 'Band hit');
  }
  assert.equal(patternIn('funk-james-brown-the-one_song', 'break-hit', 'drums'), 'Break hit');
  const hitNotes = funkPerformance.notes.filter(note => note.bar === funkHit.start);
  const hitStart = funkPerformance.bars.find(bar => bar.index === funkHit.start)!.start;
  assert.deepEqual(new Set(hitNotes.map(note => funk.tracks.find(track => track.id === note.trackId)?.instrumentId)),
    new Set(['trumpet','guitar','clavinet','bass','drums']), 'the whole funk band lands the cue together');
  assert.ok(hitNotes.every(note => Math.abs(note.time - hitStart) < .02 && note.dur < .2),
    'the band hit is short and releases into the stop');
  assert.deepEqual(funkRest.activeInstrumentIds, [], 'the arranged stop is an actual full-band rest');
  assert.equal(funkPerformance.notes.filter(note => note.bar >= funkRest.start && note.bar < funkRest.end).length, 0,
    'the stop survives pattern development and reaches playback as silence');
  for (const section of ['break-hit', 'break-rest', 'solo']) {
    const region = funk.regions.find(item => item.kind === section)!;
    const voice = funk.tracks.find(track => track.instrumentId === 'voice')!;
    assert.ok(!(region.activeInstrumentIds ?? []).includes('voice'), `the funk ${section} clears the vocal lead`);
    assert.ok(!compileWholeSong(funk).notes.some(note => note.trackId === voice.id && note.bar >= region.start && note.bar < region.end),
      `the funk ${section} stays instrumental in playback`);
  }

  const hardBop = createCatalogSong('jazz-hard-bop_song');
  for (const [section, lead, otherHorn, pattern] of [
    ['trumpet-trading', 'trumpet', 'tenor-sax', 'Bb Trumpet reply'],
    ['tenor-sax-trading', 'tenor-sax', 'trumpet', 'Tenor Saxophone reply'],
  ] as const) {
    const region = hardBop.regions.find(item => item.kind === section)!;
    assert.equal(region.leadInstrumentId, lead, `${section} identifies the correct lead for students`);
    assert.equal(region.solo?.mode, 'trading', `${section} is presented as a trading phrase`);
    assert.ok((region.activeInstrumentIds ?? []).includes(lead));
    assert.ok(!(region.activeInstrumentIds ?? []).includes(otherHorn), `${section} gives one horn the four-bar answer`);
    assert.equal(patternIn('jazz-hard-bop_song', section, lead), pattern);
  }

  assert.ok(!activeIn('afrobeat-classic-afrobeat_song', 'intro').includes('voice'));
  assert.ok(!activeIn('afrobeat-classic-afrobeat_song', 'solo').includes('voice'));
  assert.ok(!activeIn('afrobeat-classic-afrobeat_song', 'verse').includes('trumpet'));
  assert.ok(activeIn('afrobeat-classic-afrobeat_song', 'coro').includes('voice'));
  assert.ok(activeIn('afrobeat-classic-afrobeat_song', 'coro').includes('trumpet'));
  assert.equal(patternIn('afrobeat-classic-afrobeat_song', 'groove', 'guitar'), 'Guitar 16th-note interlock');
  assert.equal(patternIn('afrobeat-classic-afrobeat_song', 'groove', 'organ'), 'Organ offbeat stabs');
  assert.equal(patternIn('afrobeat-classic-afrobeat_song', 'groove', 'shekere'), 'Shekere eighth-note pulse');
  const afrobeat = createCatalogSong('afrobeat-classic-afrobeat_song');
  const groove = afrobeat.regions.find(region => region.kind === 'groove')!;
  const groovePattern = (instrument: string) => {
    const track = afrobeat.tracks.find(item => item.instrumentId === instrument)!;
    return PATTERNS_BY_ID[afrobeat.arrangement[groove.id]?.[track.id] ?? '']!;
  };
  assert.deepEqual(groovePattern('guitar').onsetGrid, [1, 5, 9, 13]);
  assert.deepEqual(groovePattern('organ').onsetGrid, [2, 6, 10, 14]);
  assert.deepEqual(groovePattern('shekere').onsetGrid, [1, 3, 5, 7, 9, 11, 13, 15]);
  assert.notDeepEqual(groovePattern('guitar').onsetGrid, groovePattern('organ').onsetGrid,
    'rhythm guitar and organ keep independent, playable rhythm jobs');
  assert.equal(patternIn('afrobeat-classic-afrobeat_song', 'solo', 'tenor-sax'), 'Tenor Saxophone variation');

  const pFunk = createCatalogSong('funk-p-funk_song'), pFunkPerformance = compileWholeSong(pFunk);
  for (const section of ['intro', 'breakdown', 'outro']) {
    const region = pFunk.regions.find(item => item.kind === section)!;
    const voice = pFunk.tracks.find(track => track.instrumentId === 'voice')!;
    assert.ok(!(region.activeInstrumentIds ?? []).includes('voice'), `the P-Funk ${section} gives the instrumental groove space`);
    assert.ok(!pFunkPerformance.notes.some(note => note.trackId === voice.id && note.bar >= region.start && note.bar < region.end));
  }
  const pFunkBreakdown = pFunk.regions.find(region => region.kind === 'breakdown')!;
  assert.equal(pFunkBreakdown.leadInstrumentId, 'bass');
  assert.ok(pFunkBreakdown.activeInstrumentIds?.includes('synth'));
  for (const instrument of ['bass', 'synth', 'drums']) {
    const track = pFunk.tracks.find(item => item.instrumentId === instrument)!;
    assert.ok(pFunkPerformance.notes.some(note => note.trackId === track.id
      && note.bar >= pFunkBreakdown.start && note.bar < pFunkBreakdown.end),
    `P-Funk breakdown sends ${instrument} events to playback`);
  }
  assert.equal(patternIn('funk-p-funk_song', 'chant', 'voice'), 'P-Funk Vocal');
  assert.equal(patternIn('funk-p-funk_song', 'breakdown', 'bass'), 'Bass bubble');
  assert.equal(patternIn('funk-p-funk_song', 'breakdown', 'synth'), 'Synthesizer variation');
  assert.equal(patternIn('funk-p-funk_song', 'vamp', 'bass'), 'Bass bubble');

  assert.equal(patternIn('funk-funk_song', 'A', 'guitar'), 'Muted guitar scratch');
  assert.equal(patternIn('funk-funk_song', 'A', 'guitar', 2), 'Guitar variation');
  assert.equal(patternIn('funk-funk_song', 'A', 'guitar', 3), 'Guitar reply');
  assert.ok(phraseCellsIn('funk-funk_song', 'A', 'guitar', 2).has('Guitar variation'),
    'the second long vamp carries its reduced guitar cell into the generated score');
  assert.ok(phraseCellsIn('funk-funk_song', 'A', 'guitar', 3).has('Guitar reply'),
    'the final vamp carries its phrase-edge guitar answer into the generated score');
  assert.equal(patternIn('funk-funk_song', 'A', 'bass'), 'Bass pocket');
  assert.equal(patternIn('funk-james-brown-the-one_song', 'chorus', 'trumpet'), 'Horn response');
  assert.equal(patternIn('funk-james-brown-the-one_song', 'groove', 'drums'), 'One and backbeat');

  const jazzFunk = createCatalogSong('funk-jazz-funk_song');
  assert.ok(jazzFunk.tracks.some(track => track.instrumentId === 'rhodes'),
    'Jazz-Funk must expose the Rhodes part named by the style');
  assert.equal(patternIn('funk-jazz-funk_song', 'A', 'rhodes'), 'Rhodes syncopation');
  assert.equal(patternIn('funk-jazz-funk_song', 'B', 'tenor-sax'), 'Horn exchange');

  assert.equal(patternIn('funk-minneapolis_song', 'verse', 'drums'), 'Machine backbeat');
  assert.equal(patternIn('funk-minneapolis_song', 'bridge', 'guitar'), 'Guitar variation');
  assert.ok(phraseCellsIn('funk-minneapolis_song', 'bridge', 'guitar').has('Guitar variation'),
    'the bridge thins the guitar while the machine backbeat remains fixed');
  assert.equal(patternIn('funk-minneapolis_song', 'chorus', 'synth'), 'Synth hook');
  assert.equal(patternIn('funk-disco_song', 'chorus', 'bass'), 'Octave bass');
  assert.equal(patternIn('funk-disco_song', 'chorus', 'string-ensemble'), 'String stabs');
  assert.equal(patternIn('funk-philly-disco_song', 'theme', 'string-ensemble'), 'String swell');
  assert.equal(patternIn('funk-philly-disco_song', 'theme', 'drums'), 'Dance backbeat');

  const boogie = createCatalogSong('funk-boogie_song');
  assert.ok(boogie.tracks.some(track => track.instrumentId === 'synth-bass'),
    'Boogie needs its named synthesizer-bass instrument, not only a generic electric bass');
  assert.equal(patternIn('funk-boogie_song', 'verse', 'synth-bass'), 'Synth-bass bounce');
  assert.equal(patternIn('funk-boogie_song', 'breakdown', 'synth-bass'), 'Synth bass variation');
  assert.ok(phraseCellsIn('funk-boogie_song', 'breakdown', 'synth-bass').has('Synth bass variation'));
  assert.equal(patternIn('funk-boogie_song', 'chorus', 'rhodes'), 'Rhodes stabs');
  assert.equal(patternIn('funk-boogie_song', 'chorus', 'drums'), 'Clap backbeat');

  assert.equal(patternIn('funk-hi-nrg_song', 'verse', 'synth-bass'), 'Octave synth bass');
  assert.equal(patternIn('funk-hi-nrg_song', 'breakdown', 'synth-bass'), 'Synth bass variation');
  assert.ok(phraseCellsIn('funk-hi-nrg_song', 'breakdown', 'synth-bass').has('Synth bass variation'));
  assert.equal(patternIn('funk-hi-nrg_song', 'chorus', 'synth'), 'Synth hook');
  assert.equal(patternIn('funk-hi-nrg_song', 'chorus', 'drums'), 'Hi-NRG drive');

  assert.equal(patternIn('flamenco-alegrias_song', 'silencio', 'guitar'), 'Silencio falseta',
    'the first exposed guitar phrase uses its slow, minor-mode silencio study');
  assert.equal(patternIn('flamenco-alegrias_song', 'silencio-answer', 'guitar'), 'Silencio answer',
    'the second exposed guitar phrase develops the melody before the compás returns');
});

test('salsa and Mexican samples use their signature instrument handoffs and ensemble rests', () => {
  const patternIn = (songId: string, section: string, instrument: string) => {
    const sheet = createCatalogSong(songId);
    const region = sheet.regions.find(item => item.kind === section)!;
    const track = sheet.tracks.find(item => item.instrumentId === instrument)!;
    return PATTERNS_BY_ID[sheet.arrangement[region.id]?.[track.id] ?? '']?.shortName;
  };
  const activeIn = (songId: string, section: string) => {
    const sheet = createCatalogSong(songId);
    return sheet.regions.find(item => item.kind === section)?.activeInstrumentIds ?? [];
  };

  assert.equal(patternIn('salsa-salsa-dura_song', 'verse', 'bongos'), 'Bongó martillo');
  assert.equal(patternIn('salsa-salsa-dura_song', 'montuno', 'cowbell'), 'Campana in montuno');
  const salsaDura = createCatalogSong('salsa-salsa-dura_song');
  const salsaStop = salsaDura.regions.find(item => item.kind === 'silencio')!;
  assert.equal(salsaStop.formLabel, 'silencio · full-band stop');
  assert.deepEqual(salsaStop.activeInstrumentIds, []);
  assert.ok(Object.values(salsaDura.arrangement[salsaStop.id] ?? {}).every(patternId => patternId === 'silent'));
  assert.ok(!activeIn('salsa-salsa-dura_song', 'mambo').includes('voice'),
    'the brass-led mambo remains instrumental instead of carrying the synthetic vocal guide');
  assert.ok(!activeIn('salsa-son_song', 'solo').includes('voice'),
    'the trumpet feature gets a clear instrumental foreground');
  assert.ok(!activeIn('mexican-banda_song', 'interlude').includes('voice'));
  assert.ok(activeIn('mexican-banda_song', 'interlude').includes('tuba'),
    'the tuba keeps the dance pulse under the brass interlude');
  assert.equal(patternIn('mexican-son-huasteco_song', 'violin', 'violin'), 'Violin variation');
  assert.ok(!activeIn('mexican-son-huasteco_song', 'violin').includes('voice'),
    'the violin falseta has its own space between sung coplas');

  assert.equal(patternIn('salsa-salsa-dura_song', 'montuno', 'voice'), 'Vocal reply',
    'the montuno voice answers in a short phrase instead of filling the whole section');
  assert.equal(patternIn('salsa-salsa-dura_song', 'coro', 'voice'), 'Vocal variation',
    'the later coro develops the vocal line');
  assert.ok(!activeIn('salsa-salsa-dura_song', 'mambo').includes('voice'));
  assert.ok(activeIn('salsa-salsa-dura_song', 'mambo').includes('cowbell'));
  assert.ok(!activeIn('salsa-salsa-dura_song', 'mambo').includes('bongos'));

  for (const [songId, bellSection, pattern] of [
    ['salsa-son-montuno_song', 'montuno', 'Son Montuno campana'],
    ['salsa-mambo_song', 'mambo', 'Mambo campana'],
  ] as const) {
    const sheet = createCatalogSong(songId);
    assert.ok(sheet.tracks.some(track => track.instrumentId === 'cowbell'), `${songId} exposes its authored campana part`);
    assert.equal(patternIn(songId, bellSection, 'cowbell'), pattern);
    assert.ok(activeIn(songId, bellSection).includes('cowbell'));
    assert.ok(!activeIn(songId, bellSection).includes('bongos'),
      `${songId}/${bellSection} hands time from bongó to campana instead of layering both pulses`);
    const performance = compileWholeSong(sheet), bellTrack = sheet.tracks.find(track => track.instrumentId === 'cowbell')!;
    assert.ok(performance.notes.some(note => note.trackId === bellTrack.id), `${songId} campana produces playback events`);
  }

  assert.ok(!activeIn('salsa-mambo_song', 'mambo').includes('voice'),
    'the mambo brass riff has an instrumental feature section rather than a synthetic vocal layer');
  assert.ok(!activeIn('salsa-mambo_song', 'solo').includes('voice'));
  assert.ok(!activeIn('salsa-mambo_song', 'break').includes('trumpet'),
    'the mambo break thins the brass while the rhythm anchors the handoff');
  assert.equal(patternIn('salsa-cha-cha-cha_song', 'flute', 'flute'), 'Concert Flute variation');
  assert.ok(!activeIn('salsa-cha-cha-cha_song', 'flute').includes('voice'),
    'the cha-cha-chá flute feature has its own space');

  assert.equal(createCatalogSong('salsa-charanga_song').tracks.find(track => track.instrumentId === 'voice')?.volume, 0.54,
    'the sustained vocal guide remains audible but sits behind the instrumental groove');
  assert.equal(patternIn('salsa-charanga_song', 'verse', 'flute'), 'Concert Flute reply');
  assert.ok(!activeIn('salsa-charanga_song', 'flute').includes('voice'),
    'the charanga flute solo is a genuine instrumental feature');
  assert.ok(!activeIn('salsa-charanga_song', 'cierre').includes('voice'));
  assert.equal(patternIn('salsa-pachanga_song', 'verse', 'violin'), 'Violin reply');
  assert.equal(patternIn('salsa-pachanga_song', 'solo', 'flute'), 'Concert Flute variation');
  assert.ok(!activeIn('salsa-pachanga_song', 'solo').includes('voice'),
    'pachanga gives the flute feature room without the vocal guide doubling it');

  const boogaloo = createCatalogSong('salsa-boogaloo_song');
  const boogalooDrums = boogaloo.tracks.find(track => track.instrumentId === 'drums');
  assert.ok(boogalooDrums, 'boogaloo has its Latin-soul backbeat kit');
  assert.equal(patternIn('salsa-boogaloo_song', 'hook', 'drums'), 'Boogaloo backbeat');
  assert.equal(patternIn('salsa-boogaloo_song', 'break', 'drums'), 'Boogaloo fill');
  assert.ok(!activeIn('salsa-boogaloo_song', 'break').includes('voice'));
  assert.ok(!activeIn('salsa-boogaloo_song', 'solo').includes('voice'));
  assert.ok(compileWholeSong(boogaloo).notes.some(note => note.trackId === boogalooDrums.id),
    'the backbeat pattern reaches the shared playback event plan');

  const descarga = createCatalogSong('salsa-descarga_song');
  assert.ok(!descarga.tracks.some(track => track.instrumentId === 'voice'),
    'the instrumental descarga does not carry a synthetic vocal patch');
  assert.equal(patternIn('salsa-descarga_song', 'bass-solo', 'bass'), 'Bass variation');
  assert.equal(patternIn('salsa-descarga_song', 'piano-solo', 'piano'), 'Piano variation');
  assert.equal(patternIn('salsa-descarga_song', 'percussion', 'timbales'), 'Timbales variation');
});

test('country samples retain the named Bakersfield attack and keep Outlaw verse steel out of the way', () => {
  const patternIn = (sheetId: string, section: string, instrument: string) => {
    const sheet = createCatalogSong(sheetId);
    const region = sheet.regions.find(item => item.kind === section)!;
    const track = sheet.tracks.find(item => item.instrumentId === instrument)!;
    return PATTERNS_BY_ID[sheet.arrangement[region.id]?.[track.id] ?? '']?.shortName;
  };
  const activeIn = (sheetId: string, section: string) => {
    const sheet = createCatalogSong(sheetId);
    return sheet.regions.find(item => item.kind === section)?.activeInstrumentIds ?? [];
  };

  const bakersfield = createCatalogSong('country-bakersfield_song');
  const verse = bakersfield.regions.find(region => region.kind === 'verse')!;
  assert.equal(patternIn('country-bakersfield_song', 'verse', 'guitar'), 'Telecaster backbeat');
  assert.equal(patternIn('country-bakersfield_song', 'verse', 'drums'), 'Crisp snare backbeat');
  assert.equal(patternIn('country-bakersfield_song', 'verse', 'pedal-steel'), 'Steel turnaround');
  const performance = compileWholeSong(bakersfield);
  for (const instrument of ['guitar', 'drums', 'pedal-steel']) {
    const track = bakersfield.tracks.find(item => item.instrumentId === instrument)!;
    assert.ok(performance.notes.some(note => note.trackId === track.id && note.bar >= verse.start && note.bar < verse.end),
      `the Bakersfield ${instrument} cell reaches playback during its vocal verse`);
  }

  const outlawVerse = activeIn('country-outlaw_song', 'verse');
  assert.ok(!outlawVerse.includes('pedal-steel'),
    'the Outlaw verse leaves room for the conversational line and saves steel for its named replies');
  assert.ok(activeIn('country-outlaw_song', 'chorus').includes('pedal-steel'));
  assert.equal(patternIn('country-outlaw_song', 'chorus', 'pedal-steel'), 'Long steel response');
});

test('Honky-Tonk teaches vocal-gap fiddle answers and hands breaks between fiddle and steel', () => {
  const song = createCatalogSong('country-honky-tonk_song');
  const regionFor = (section: string) => {
    const region = song.regions.find(item => item.kind === section);
    assert.ok(region, `Honky-Tonk sample contains its ${section} section`);
    return region;
  };
  const patternIn = (section: string, instrument: string) => {
    const region = regionFor(section);
    const track = song.tracks.find(item => item.instrumentId === instrument);
    assert.ok(track, `Honky-Tonk sample has a ${instrument} part`);
    return PATTERNS_BY_ID[song.arrangement[region.id]?.[track.id] ?? '']?.shortName;
  };
  const activeIn = (section: string) => regionFor(section).activeInstrumentIds ?? [];

  assert.equal(patternIn('intro', 'violin'), 'Fiddle pickup');
  assert.ok(!activeIn('intro').includes('voice'), 'the instrumental pickup leaves the lyric entrance exposed');
  assert.equal(patternIn('verse', 'voice'), 'Vocal breath phrase');
  assert.equal(patternIn('verse', 'violin'), 'Fiddle answer');
  assert.ok(!activeIn('verse').includes('pedal-steel'), 'fiddle owns the verse gaps while steel waits for its refrain answer');
  assert.equal(patternIn('chorus', 'pedal-steel'), 'Steel answer');
  assert.equal(patternIn('chorus', 'upright-bass'), 'Walking bass quarters');
  assert.equal(patternIn('chorus', 'drums'), 'Ray Price Beat');
  assert.ok(!activeIn('chorus').includes('violin'), 'the chorus hands the reply role from fiddle to steel');

  const performance = compileWholeSong(song);
  const firstBarOnsets = (section: string, instrument: string, subdivisions = 3) => {
    const region = regionFor(section), bar = performance.bars.find(item => item.index === region.start)!;
    const track = song.tracks.find(item => item.instrumentId === instrument)!;
    const beatSeconds = 60 / bar.bpm;
    return [...new Set(performance.notes
      .filter(note => note.bar === bar.index && note.trackId === track.id)
      .map(note => Math.round((note.time - bar.start) / beatSeconds * subdivisions) / subdivisions))].sort((a, b) => a - b);
  };
  const bassBeats = firstBarOnsets('chorus','upright-bass',12);
  assert.ok([0,1,2,3].every(beat => bassBeats.includes(beat)),
    'the walking bass lands on all four quarter-note beats in playback');
  assert.deepEqual(firstBarOnsets('chorus','drums'), [0,2/3,1,5/3,2,8/3,3,11/3],
    'the hat triplets reach playback around the kick and snare backbeat');
  for (const [section, instrument, expected, absent] of [
    ['fiddle-break', 'violin', 'Fiddle break phrase', 'voice'],
    ['fiddle-return', 'violin', 'Fiddle break turnaround', 'pedal-steel'],
    ['steel-break', 'pedal-steel', 'Steel break phrase', 'violin'],
  ] as const) {
    const region = regionFor(section);
    const track = song.tracks.find(item => item.instrumentId === instrument)!;
    assert.equal(patternIn(section, instrument), expected);
    assert.ok(!activeIn(section).includes(absent), `${section} clears space for its featured instrument`);
    assert.ok(performance.notes.some(note => note.trackId === track.id && note.bar >= region.start && note.bar < region.end),
      `${section} feature reaches the shared playback event plan`);
  }
  assert.deepEqual(
    ['intro', 'verse', 'fiddle-break', 'fiddle-return'].map(section => patternIn(section, 'violin')),
    ['Fiddle pickup', 'Fiddle answer', 'Fiddle break phrase', 'Fiddle break turnaround'],
    'the fiddle changes role and vocabulary instead of looping one cell across the arrangement',
  );
});

test('named musical silences preserve the style feature across the sample catalog', () => {
  const pauses = [
    ['flamenco-tonas-martinetes_song', 'pause'],
    ['japanese-taiko_song', 'silence'],
    ['japanese-taiko_song', 'break'],
    ['weird-musique-concrete_song', 'stop'],
    ['weird-free-improvisation_song', 'silence'],
    ['weird-free-improvisation_song', 'stop'],
  ] as const;
  for (const [songId, kind] of pauses) {
    const sheet = createCatalogSong(songId), performance = compileWholeSong(sheet);
    const region = sheet.regions.find(part => part.kind === kind);
    assert.ok(region, `${songId} has its authored ${kind}`);
    assert.deepEqual(region.activeInstrumentIds, [], `${songId}/${kind} gives the ensemble a real rest`);
    assert.equal(performance.notes.filter(note => note.bar >= region.start && note.bar < region.end).length, 0,
      `${songId}/${kind} stays silent through pattern development`);
  }

  const shakuhachi = createCatalogSong('japanese-shakuhachi_song');
  const shakuhachiPerformance = compileWholeSong(shakuhachi);
  const ma = shakuhachi.regions.find(part => part.kind === 'ma')!;
  assert.equal(ma.formLabel, 'ma · breath space', 'the timeline names the honkyoku phrase space clearly');
  assert.deepEqual(ma.activeInstrumentIds, [], 'the shakuhachi lets the previous resonance fade without a new attack');
  assert.equal(shakuhachiPerformance.notes.filter(note => note.bar >= ma.start && note.bar < ma.end).length, 0,
    'the named ma is an actual breath space in the shared playback event plan');
  assert.ok(shakuhachiPerformance.notes.some(note => note.bar < ma.start)
    && shakuhachiPerformance.notes.some(note => note.bar >= ma.end),
  'the breath space separates two sounding shakuhachi phrases');

  const alegrías = createCatalogSong('flamenco-alegrias_song'), alegrePerformance = compileWholeSong(alegrías);
  const silencio = alegrías.regions.find(part => part.kind === 'silencio')!;
  assert.deepEqual(silencio.activeInstrumentIds, ['guitar'], 'Alegrías silencio is the exposed guitar section');
  const silencioAnswer = alegrías.regions.find(part => part.kind === 'silencio-answer')!;
  assert.equal(silencio.formLabel, 'silencio · solo guitar');
  assert.equal(silencioAnswer.formLabel, 'silencio answer');
  assert.ok(alegrePerformance.notes.some(note => note.bar >= silencio.start && note.bar < silencioAnswer.end
    && alegrías.tracks.find(track => track.id === note.trackId)?.instrumentId === 'guitar'));
  assert.ok(!alegrePerformance.notes.some(note => note.bar >= silencio.start && note.bar < silencioAnswer.end
    && alegrías.tracks.find(track => track.id === note.trackId)?.instrumentId !== 'guitar'));

  const guqin = createCatalogSong('chinese-guqin_song'), guqinPerformance = compileWholeSong(guqin);
  const guqinSilence = guqin.regions.find(part => part.kind === 'silence')!;
  const guqinNotes = guqinPerformance.notes.filter(note => note.bar >= guqinSilence.start && note.bar < guqinSilence.end);
  const guqinBars = guqinSilence.bars ?? guqinSilence.end - guqinSilence.start;
  assert.equal(guqinSilence.formLabel, 'qin resonance · sparse phrase',
    'the visual label describes the fading, sparse guqin line instead of promising a hard mute');
  assert.ok(guqinNotes.length > 0 && guqinNotes.length <= guqinBars * 2,
    'the guqin resonance phrase remains sparse rather than becoming a continuous loop');
});

test('Afrobeat samples use distinct instrumental handoffs and phrase-level pattern changes', () => {
  const song = (id: string) => createCatalogSong(id);
  const region = (sheet: ReturnType<typeof createCatalogSong>, kind: string) => {
    const result = sheet.regions.find(part => part.kind === kind);
    assert.ok(result, `${sheet.catalogId} includes ${kind}`);
    return result;
  };
  const active = (sheet: ReturnType<typeof createCatalogSong>, kind: string, instrument: string) =>
    region(sheet, kind).activeInstrumentIds?.includes(instrument) ?? false;
  const pattern = (sheet: ReturnType<typeof createCatalogSong>, kind: string, instrument: string) => {
    const part = region(sheet, kind);
    const track = sheet.tracks.find(item => item.instrumentId === instrument);
    assert.ok(track, `${sheet.catalogId} includes a ${instrument} part`);
    return PATTERNS_BY_ID[sheet.arrangement[part.id]?.[track.id] ?? '']?.shortName;
  };
  const notes = (sheet: ReturnType<typeof createCatalogSong>, kind: string, instrument: string) => {
    const part = region(sheet, kind);
    const track = sheet.tracks.find(item => item.instrumentId === instrument)!;
    return compileWholeSong(sheet).notes.filter(note => note.trackId === track.id
      && note.bar >= part.start && note.bar < part.end);
  };

  const juju = song('afrobeat-juju_song');
  assert.equal(pattern(juju, 'response', 'talking-drum'), 'Talking Drum reply');
  assert.equal(pattern(juju, 'talking-drum', 'talking-drum'), 'Talking Drum variation');
  assert.equal(pattern(juju, 'verse', 'voice'), 'Juju Vocal');
  assert.equal(pattern(juju, 'verse-return', 'voice'), 'Vocal variation');
  assert.equal(pattern(juju, 'response-return', 'talking-drum'), 'Talking Drum variation');
  assert.ok(!active(juju, 'response', 'voice') && !active(juju, 'talking-drum', 'voice')
    && !active(juju, 'outro', 'voice'), 'the voice takes defined phrases, with room for drum replies and an instrumental close');
  assert.equal(region(juju, 'talking-drum').leadInstrumentId, 'talking-drum');
  assert.ok(notes(juju, 'talking-drum', 'talking-drum').length > 0, 'the talking-drum feature reaches playback');
  assert.equal(notes(juju, 'outro', 'voice').length, 0, 'the vocal guide does not extend across the outro');

  const funk = song('afrobeat-funk-heavy-afrobeat_song');
  assert.equal(pattern(funk, 'groove', 'guitar'), 'Guitar accompaniment');
  assert.equal(pattern(funk, 'verse-return', 'guitar'), 'Guitar variation');
  assert.equal(pattern(funk, 'verse', 'voice'), 'Funk-Heavy Afrobeat Vocal');
  assert.equal(pattern(funk, 'coro-last', 'voice'), 'Vocal variation');
  assert.equal(pattern(funk, 'coro-last', 'drums'), 'Drum kit variation');
  assert.ok(!active(funk, 'intro', 'voice') && !active(funk, 'intro', 'trumpet')
    && !active(funk, 'solo', 'voice') && !active(funk, 'solo', 'tenor-sax'),
  'the groove intro and trumpet feature stay free of doubled leads');
  assert.equal(region(funk, 'solo').leadInstrumentId, 'trumpet');
  assert.ok(notes(funk, 'coro-last', 'drums').length > 0 && notes(funk, 'coro-last', 'trumpet').length > 0,
    'the last chorus variation reaches the shared playback event plan');

  const jazz = song('afrobeat-jazz-heavy-afrobeat_song');
  assert.ok(jazz.tracks.some(track => track.instrumentId === 'rhodes'), 'jazz-heavy Afrobeat has its electric-piano color');
  assert.equal(pattern(jazz, 'intro', 'rhodes'), 'Rhodes comping');
  assert.equal(pattern(jazz, 'break', 'rhodes'), 'Rhodes phrase answer');
  assert.deepEqual(region(jazz, 'break').activeInstrumentIds, ['rhodes','guitar','bass','drums'],
    'the short keyboard break strips away the horns and hand percussion');
  for (const [kind, lead, other] of [
    ['sax-trading', 'tenor-sax', 'trumpet'], ['trumpet-trading', 'trumpet', 'tenor-sax'],
  ] as const) {
    assert.equal(region(jazz, kind).leadInstrumentId, lead);
    assert.equal(region(jazz, kind).solo?.mode, 'trading');
    assert.ok(!active(jazz, kind, other), `${kind} leaves the other horn out of the answer phrase`);
    assert.ok(notes(jazz, kind, lead).length > 0, `${kind} lead reaches playback`);
  }

  const revival = song('afrobeat-modern-revival_song');
  assert.deepEqual(region(revival, 'intro').activeInstrumentIds, ['bass','drums','shekere'],
    'the revival arrangement grows from its rhythm-section pocket');
  assert.equal(pattern(revival, 'verse', 'voice'), 'Modern Revival Vocal');
  assert.equal(pattern(revival, 'verse-return', 'voice'), 'Vocal reply');
  assert.equal(pattern(revival, 'chorus', 'guitar'), 'Guitar variation');
  assert.equal(pattern(revival, 'chorus-last', 'voice'), 'Vocal variation');
  assert.ok(!active(revival, 'verse', 'trumpet') && !active(revival, 'verse-return', 'tenor-sax')
    && !active(revival, 'outro', 'voice'), 'verse lines and outro leave clear space for instrumental roles');
  assert.equal(region(revival, 'solo').leadInstrumentId, 'tenor-sax');
  assert.ok(notes(revival, 'solo', 'tenor-sax').length > 0 && notes(revival, 'chorus-last', 'trumpet').length > 0,
    'the sax feature and final horn return both reach playback');

  const highlife = song('afrobeat-highlife_song');
  assert.equal(pattern(highlife, 'head', 'trumpet'), 'Highlife Trumpet');
  assert.equal(pattern(highlife, 'verse', 'guitar'), 'Guitar accompaniment');
  assert.equal(pattern(highlife, 'verse-return', 'guitar'), 'Guitar variation');
  assert.equal(pattern(highlife, 'chorus', 'trumpet'), 'Bb Trumpet reply');
  assert.equal(pattern(highlife, 'chorus-last', 'voice'), 'Vocal variation');
  assert.ok(!active(highlife, 'intro', 'voice') && !active(highlife, 'head', 'voice')
    && !active(highlife, 'chorus', 'voice') && !active(highlife, 'trumpet-feature', 'voice')
    && !active(highlife, 'outro', 'voice'), 'the guide vocal only marks the two verse phrases and final chorus');
  assert.equal(region(highlife, 'trumpet-feature').leadInstrumentId, 'trumpet');
  assert.ok(notes(highlife, 'trumpet-feature', 'trumpet').length > 0 && notes(highlife, 'chorus-last', 'voice').length > 0,
    'trumpet feature and limited final vocal guide both reach playback');

  const palmWine = song('afrobeat-palm-wine_song');
  assert.equal(pattern(palmWine, 'verse', 'guitar'), 'Guitar accompaniment');
  assert.equal(pattern(palmWine, 'response', 'guitar'), 'Guitar reply');
  assert.equal(pattern(palmWine, 'verse-return', 'guitar'), 'Guitar variation');
  assert.equal(pattern(palmWine, 'guitar-feature', 'guitar'), 'Guitar variation');
  assert.equal(pattern(palmWine, 'response-return', 'shaker'), 'Shaker variation');
  assert.equal(pattern(palmWine, 'outro', 'guitar'), 'Guitar close');
  assert.equal(region(palmWine, 'guitar-feature').leadInstrumentId, 'guitar');
  assert.ok(!active(palmWine, 'intro', 'voice') && !active(palmWine, 'response', 'voice')
    && !active(palmWine, 'guitar-feature', 'voice') && !active(palmWine, 'response-return', 'voice')
    && !active(palmWine, 'outro', 'voice'), 'guitar replies and the ending have clear vocal gaps');
  assert.ok(notes(palmWine, 'guitar-feature', 'guitar').length > 0, 'the fingerstyle feature reaches playback');
});

test('Timba samples build through distinct gears, a horn bloque, and a true band stop', () => {
  const catalogIds = ['timba-classic-timba_song', 'timba-charanga-habanera_song', 'timba-maykel-blanco_song'] as const;
  const samples = catalogIds.map(id => createCatalogSong(id));
  const patternIn = (sheet: ReturnType<typeof createCatalogSong>, kind: string, instrument: string) => {
    const region = sheet.regions.find(item => item.kind === kind);
    assert.ok(region, `${sheet.catalogId} contains ${kind}`);
    const track = sheet.tracks.find(item => item.instrumentId === instrument);
    assert.ok(track, `${sheet.catalogId} includes ${instrument}`);
    return PATTERNS_BY_ID[sheet.arrangement[region.id]?.[track.id] ?? '']?.shortName;
  };
  for (const sheet of samples) {
    const part = (kind: string) => {
      const region = sheet.regions.find(item => item.kind === kind);
      assert.ok(region, `${sheet.catalogId} contains ${kind}`);
      return region;
    };
    const active = (kind: string) => part(kind).activeInstrumentIds ?? [];
    const pattern = (kind: string, instrument: string) => patternIn(sheet, kind, instrument);
    const performance = compileWholeSong(sheet);
    const inSection = (kind: string) => performance.notes.filter(note => {
      const region = part(kind);
      return note.bar >= region.start && note.bar < region.end;
    });

    assert.ok(!active('intro').includes('voice'), 'instrumental opening leaves room for the later vocal phrase');
    assert.ok(!active('verse').includes('trumpet') && !active('verse').includes('trombone')
      && !active('verse').includes('cowbell'), 'the verse starts with a leaner groove and no montuno bell');
    assert.ok(active('coro').includes('cowbell') && active('coro').includes('trumpet'));
    assert.equal(pattern('verse', 'piano'), sheet.catalogId === 'timba-maykel-blanco_song' ? 'Piano reply'
      : 'Piano accompaniment');
    assert.equal(pattern('coro', 'piano'), 'Piano variation');

    const bassGear = sheet.catalogId === 'timba-charanga-habanera_song' ? 'gear' : 'bomba';
    assert.ok(!active(bassGear).includes('piano') && !active(bassGear).includes('voice')
      && !active(bassGear).includes('trumpet'), 'the bass gear pulls back to bass and percussion');
    assert.equal(part(bassGear).leadInstrumentId, 'bass');
    assert.equal(pattern(bassGear, 'bass'), 'Bass variation');
    assert.equal(part('bloque').formLabel, 'horn bloque');
    assert.equal(part('bloque').bars, 2);
    assert.ok(active('bloque').includes('trumpet') && active('bloque').includes('trombone'));
    assert.equal(pattern('bloque', 'trumpet'), 'Bb Trumpet variation');

    const stop = part('silencio');
    assert.equal(stop.formLabel, 'silencio · full-band stop');
    assert.deepEqual(stop.activeInstrumentIds, [], 'the ensemble cuts out cleanly after the bloque');
    assert.equal(inSection('silencio').length, 0, 'the stop stays silent through the shared playback plan');
    assert.ok(inSection('bloque').length > 0 && inSection('mambo').length > 0,
      'the ensemble hit and instrumental re-entry both produce notes');
    assert.ok(!active('mambo').includes('voice') && active('mambo').includes('trumpet'));
    assert.equal(pattern('mambo', 'piano'), 'Piano variation');
    assert.equal(pattern('coro-final', 'voice'), 'Vocal variation');
  }

  const charanga = samples[1];
  const synth = charanga.tracks.find(track => track.instrumentId === 'synth');
  assert.ok(synth, 'Charanga Habanera includes its separate synthesizer countertumbao');
  for (const kind of ['coro', 'mambo', 'coro-final']) {
    assert.ok(charanga.regions.find(region => region.kind === kind)?.activeInstrumentIds?.includes('synth'));
    assert.equal(patternIn(charanga, kind, 'synth'), 'Synth countertumbao');
  }
  assert.ok(!charanga.regions.find(region => region.kind === 'verse')?.activeInstrumentIds?.includes('synth'));
  assert.ok(!charanga.regions.find(region => region.kind === 'gear')?.activeInstrumentIds?.includes('synth'));
  const coro = charanga.regions.find(region => region.kind === 'coro')!;
  const synthNotes = compileWholeSong(charanga).notes.filter(note => note.trackId === synth.id
    && note.bar >= coro.start && note.bar < coro.end);
  assert.ok(synthNotes.length > 0, 'the style-owned countertumbao reaches instrument events');
  const synthPlan = compileSamplePlan({ ...compileWholeSong(charanga), notes: synthNotes }, {
    selectedTrackIds: [synth.id],
    trackInstruments: new Map([[synth.id, 'synth']]),
    worldId: 'timba', styleId: 'timba-charanga-habanera',
  });
  assert.ok(synthPlan.events.some(event => event.type === 'on' && event.patch.program === SYNTH_SAMPLE_PROGRAMS.polysynth),
    'SoundFont export uses the Charanga style’s configured polysynth even when no explicit trackRoles map is passed');
});

test('Irakere, NG La Banda, and Bamboleo samples teach different Timba roles and forms', () => {
  const irakere = createCatalogSong('timba-irakere-jazz-funk-precursor_song');
  const ng = createCatalogSong('timba-ng-la-banda-early-timba_song');
  const bamboleo = createCatalogSong('timba-bamboleo_song');
  const region = (sheet: ReturnType<typeof createCatalogSong>, kind: string) => {
    const result = sheet.regions.find(item => item.kind === kind);
    assert.ok(result, `${sheet.catalogId} contains ${kind}`);
    return result;
  };
  const pattern = (sheet: ReturnType<typeof createCatalogSong>, kind: string, instrument: string) => {
    const section = region(sheet, kind), track = sheet.tracks.find(item => item.instrumentId === instrument);
    assert.ok(track, `${sheet.catalogId} includes ${instrument}`);
    return PATTERNS_BY_ID[sheet.arrangement[section.id]?.[track.id] ?? '']?.shortName;
  };
  const partCount = (sheet: ReturnType<typeof createCatalogSong>) => sheet.regions.at(-1)!.end;

  assert.ok(partCount(irakere) < 110, 'Irakere uses a compact head/solo/mambo concert form');
  assert.deepEqual(region(irakere, 'intro').activeInstrumentIds, ['piano','bass','congas','timbales','drums']);
  assert.equal(region(irakere, 'solo').leadInstrumentId, 'trumpet');
  assert.equal(pattern(irakere, 'riff', 'bass'), 'Bass variation');
  assert.equal(pattern(irakere, 'mambo', 'cowbell'), 'Cowbell variation');
  assert.ok(!region(irakere, 'solo').activeInstrumentIds?.includes('voice'), 'jazz solo opens space away from the vocal guide');

  assert.ok(partCount(ng) < 110, 'NG La Banda has a short, clearly staged early-timba form');
  assert.equal(region(ng, 'bloque').formLabel, 'horn bloque');
  assert.equal(region(ng, 'bloque').bars, 2);
  assert.equal(pattern(ng, 'bloque', 'trumpet'), 'Bb Trumpet accent');
  assert.equal(region(ng, 'silencio').formLabel, 'silencio · full-band stop');
  assert.deepEqual(region(ng, 'silencio').activeInstrumentIds, []);
  const ngPerformance = compileWholeSong(ng);
  const ngSilence = region(ng, 'silencio');
  assert.equal(ngPerformance.notes.filter(note => note.bar >= ngSilence.start && note.bar < ngSilence.end).length, 0,
    'the NG La Banda stop-time cut reaches the shared event plan');
  assert.equal(pattern(ng, 'bomba', 'bass'), 'Bass variation');

  assert.ok(partCount(bamboleo) < 120, 'Bamboleo keeps a compact vocal-to-mambo arc');
  assert.equal(pattern(bamboleo, 'verse', 'voice'), 'Bamboleo Vocal');
  assert.equal(pattern(bamboleo, 'coro', 'voice'), 'Vocal variation');
  assert.equal(pattern(bamboleo, 'verse', 'bass'), 'Low anchor');
  assert.equal(pattern(bamboleo, 'mambo', 'bass'), 'Bass variation');
  assert.ok(!region(bamboleo, 'solo').activeInstrumentIds?.includes('voice'), 'the instrumental feature clears space around the vocal-like guide patch');
});

test('Brazilian samples assign playable, style-specific parts through their forms', () => {
  const songs = Object.fromEntries([
    'samba','bossa-nova','pagode','partido-alto','samba-de-roda','forro','baiao','xote','mpb','samba-reggae','samba-rock',
  ].map(style => [style, createCatalogSong(`brazilian-${style}_song`)])) as Record<string, ReturnType<typeof createCatalogSong>>;
  const region = (sheet: ReturnType<typeof createCatalogSong>, kind: string) => {
    const result = sheet.regions.find(item => item.kind === kind);
    assert.ok(result, `${sheet.catalogId} contains ${kind}`);
    return result;
  };
  const patternIn = (sheet: ReturnType<typeof createCatalogSong>, section: ReturnType<typeof region>, instrument: string) => {
    const track = sheet.tracks.find(item => item.instrumentId === instrument);
    assert.ok(track, `${sheet.catalogId} includes ${instrument}`);
    const id = sheet.arrangement[section.id]?.[track.id];
    assert.ok(id && PATTERNS_BY_ID[id], `${sheet.catalogId}/${section.kind}/${instrument} resolves to a playable pattern`);
    return PATTERNS_BY_ID[id].shortName;
  };
  const pattern = (sheet: ReturnType<typeof createCatalogSong>, kind: string, instrument: string) =>
    patternIn(sheet, region(sheet, kind), instrument);

  for (const sheet of Object.values(songs)) {
    for (const section of sheet.regions) {
      for (const instrument of section.activeInstrumentIds ?? []) {
        assert.ok(patternIn(sheet, section, instrument), `${sheet.catalogId}/${section.kind}/${instrument} has a visible teaching name`);
      }
    }
  }
  for (const style of ['samba','partido-alto','samba-de-roda','samba-reggae','samba-rock']) {
    const sheet = songs[style];
    assert.equal(sheet.tracks.length, 8, `${style} sample exposes its eight-part authored ensemble`);
    const agogo = sheet.tracks.find(track => track.instrumentId === 'agogo');
    assert.ok(agogo, `${style} includes an Agogo bells track`);
    const rendered = compileWholeSong(sheet).notes.filter(note => note.trackId === agogo.id);
    assert.ok(rendered.length > 0, `${style} agogô part reaches the shared playback event plan`);
  }
  assert.equal(pattern(songs.samba, 'tema', 'agogo'), 'Agogô low-high weave');
  assert.equal(pattern(songs.samba, 'refrain', 'agogo'), 'Agogô refrain answer');
  assert.equal(pattern(songs['partido-alto'], 'verse', 'agogo'), 'Agogô call answer');
  assert.equal(pattern(songs['partido-alto'], 'refrain', 'agogo'), 'Agogô refrain lift');
  assert.equal(pattern(songs['samba-de-roda'], 'call', 'agogo'), 'Agogô call pickup');
  assert.equal(pattern(songs['samba-de-roda'], 'response', 'agogo'), 'Agogô circle reply');
  assert.equal(pattern(songs['samba-reggae'], 'chant', 'agogo'), 'Agogô cross-rhythm');
  assert.equal(pattern(songs['samba-reggae'], 'chorus', 'agogo'), 'Agogô block lift');
  assert.equal(pattern(songs['samba-rock'], 'chorus', 'agogo'), 'Agogô backbeat accents');
  assert.equal(pattern(songs['samba-rock'], 'outro', 'agogo'), 'Agogô turnaround reply');
  assert.equal(pattern(songs.forro, 'intro', 'zabumba'), 'Zabumba pulse');
  assert.equal(pattern(songs.forro, 'solo', 'accordion'), 'Accordion variation');
  assert.ok(!region(songs.forro, 'solo').activeInstrumentIds?.includes('voice'), 'the forró instrumental break gives the accordion room');
  assert.equal(pattern(songs['bossa-nova'], 'A', 'drums'), 'Soft bossa brushes');
  assert.equal(pattern(songs['bossa-nova'], 'B', 'drums'), 'Drum kit variation',
    'the brush part adds a sparse bridge answer while retaining its quiet groove around the solo');
  assert.equal(pattern(songs['bossa-nova'], 'solo', 'drums'), 'Soft bossa brushes');
  assert.equal(pattern(songs.baiao, 'intro', 'zabumba'), 'Baião zabumba alternation');
  assert.equal(pattern(songs.xote, 'intro', 'zabumba'), 'Xote two-beat drum');
  assert.equal(songs.xote.tracks.some(track => track.instrumentId === 'voice'), false,
    'the instrumental xote score does not repeat a lyric-free vowel patch as its melody');
  assert.equal(region(songs.xote, 'chorus').leadInstrumentId, 'accordion',
    'the accordion is visibly identified as the lead through the refrain');
  assert.equal(pattern(songs.xote, 'chorus', 'accordion'), 'Accordion variation');
  assert.equal(pattern(songs['partido-alto'], 'verse', 'voice'), 'Vocal reply');
  assert.equal(pattern(songs['samba-de-roda'], 'response', 'voice'), 'Vocal reply');
  assert.ok(!region(songs.pagode, 'solo').activeInstrumentIds?.includes('voice'), 'the pagode break clears the guide vocal for cavaquinho');
  assert.ok(!region(songs.mpb, 'interlude').activeInstrumentIds?.includes('voice'), 'the MPB interlude leaves space for guitar');
  assert.equal(region(songs['samba-reggae'], 'break').formLabel, 'surdo-only break');
  assert.deepEqual(region(songs['samba-reggae'], 'break').activeInstrumentIds, ['surdo']);
  assert.ok(!region(songs['samba-reggae'], 'break').activeInstrumentIds?.includes('agogo'),
    'the agogô stays out of the deliberately stripped surdo break');
  assert.equal(pattern(songs['samba-rock'], 'intro', 'guitar'), 'Samba-rock backbeat');
  assert.equal(pattern(songs['samba-rock'], 'intro', 'pandeiro'), 'Samba-rock pandeiro backbeat');
  assert.ok(!region(songs.samba, 'instrumental').activeInstrumentIds?.includes('voice'), 'the samba instrumental block drops the synthetic vocal guide');
});

test('Bass samples develop their role cells and name each style-specific groove change', () => {
  const signatures = [
    ['bass-drum-and-bass_song','drop','break + sub drop 1','synth','bass','Synthesizer variation'],
    ['bass-jungle_song','drop','chopped-break return 1','synth','bass','Synthesizer variation'],
    ['bass-liquid_song','theme','liquid melody 1','synth','harmony','Synth accompaniment'],
    ['bass-neurofunk_song','drop','modulated-bass drop 1','synth','bass','Synthesizer variation'],
    ['bass-uk-garage_song','B','bassline exchange B 1','synth','lead','Synthesizer variation'],
    ['bass-2-step_song','chorus','lifted two-step chorus 1','synth','harmony','Synthesizer variation'],
    ['bass-dubstep_song','drop','half-time bass drop 1','synth','bass','Synthesizer variation'],
    ['bass-grime_song','hook','square-bass hook 1','synth','bass','Low anchor'],
    ['bass-future-garage_song','B','atmospheric phrase B 1','synth','lead','Future Garage Synthesizer'],
    ['bass-breakbeat_song','groove','looped-break groove 1','drums','percussion','Drum kit variation'],
  ] as const;

  for (const [songId, signatureSection, label, instrument, role, expectedPattern] of signatures) {
    const sheet = createCatalogSong(songId);
    const signature = sheet.regions.find(region => region.kind === signatureSection);
    assert.ok(signature, `${songId} has its named groove section`);
    assert.equal(signature.formLabel, label, `${songId} has a style-specific visible section name`);
    const signatureTrack = sheet.tracks.find(track => track.instrumentId === instrument && track.role === role);
    assert.ok(signatureTrack, `${songId} includes ${instrument}/${role}`);
    const signaturePattern = PATTERNS_BY_ID[sheet.arrangement[signature.id]?.[signatureTrack.id] ?? ''];
    assert.equal(signaturePattern?.shortName, expectedPattern, `${songId} assigns a full style-owned part`);

    for (const track of sheet.tracks) {
      assert.ok(track.instrumentId, `${songId} has a concrete instrument ID`);
      assert.ok(track.role, `${songId}/${track.instrumentId} has an explicit part role`);
      const trackInstrumentId = track.instrumentId!;
      const trackRole = track.role!;
      const patterns = new Set<string>();
      for (const region of sheet.regions.filter(item => item.activeInstrumentIds?.includes(trackInstrumentId))) {
        const patternId = sheet.arrangement[region.id]?.[track.id];
        const pattern = PATTERNS_BY_ID[patternId ?? ''];
        assert.ok(pattern, `${songId}/${region.kind}/${track.instrumentId}/${track.role} has a visible playable pattern`);
        assert.ok(pattern.roles.includes(trackRole), `${songId}/${region.kind} keeps the exercise in the ${trackRole} role`);
        assert.ok(pattern.shortName, `${songId}/${region.kind} has a visible pattern name`);
        patterns.add(pattern.shortName);
      }
      assert.ok(patterns.size >= 2, `${songId}/${trackInstrumentId}/${trackRole} develops through multiple cells`);
    }
  }
});

test('source-changing techniques do not alias a different excitation', () => {
  assert.equal(resolveSampleGesture('upright-bass', codeForGesture('arco'), 80).action, 'arco');
  assert.equal(resolveSampleGesture('upright-bass', codeForGesture('pizzicato'), 80).pitchIdentity, 'pitched');
  assert.deepEqual(patchForInstrument('celeste'), { bank: 0, program: 8, drum: false, pack: 'mallets' });
  assert.deepEqual(patchForInstrument('music-box'), { bank: 0, program: 10, drum: false, pack: 'mallets' });
});

test('every tango bandoneon button agrees with the sounding pitch and bellows direction', () => {
  for (const style of ALL_STYLES.filter(s => s.primaryGenre === 'tango')) {
    const sheet = makeSheet('tango', style.id), perf = compileWholeSong(sheet);
    const trackIds = new Set(sheet.tracks.filter(t => t.instrumentId === 'bandoneon').map(t => t.id));
    for (const note of perf.notes.filter(n => trackIds.has(n.trackId))) {
      const button = BANDONEON_142_BUTTONS[note.bandoneonButtonIndex!];
      assert.ok(button, `${style.id}/${note.midi}: no playable button`);
      assert.equal(note.midi, note.bellowsDirectionCode === 1 ? button.open : button.close, `${style.id}/${note.midi}/${button.id}`);
    }
  }
});

test('Hindustani gat sample plays a three-part tihai into a shared sam landing', () => {
  const sheet = createCatalogSong('indian-classical-instrumental-gat_song');
  const performance = compileWholeSong(sheet);
  const tihai = sheet.regions.find(region => region.kind === 'tihai');
  const sam = sheet.regions.find(region => region.kind === 'sam');
  assert.ok(tihai && sam, 'the sample names its tihai and sam sections');
  assert.equal(tihai.bars, 4, 'the phrase fills one 16-beat practice cycle');
  assert.equal(sam.formLabel, 'sam · shared landing');
  assert.deepEqual(new Set(tihai.activeInstrumentIds), new Set(['sitar','tabla','tanpura']));
  assert.deepEqual(new Set(sam.activeInstrumentIds), new Set(['sitar','tabla','tanpura']));

  const trackFor = (instrument: string) => {
    const track = sheet.tracks.find(item => item.instrumentId === instrument);
    assert.ok(track, `${instrument} has a dedicated part`);
    return track;
  };
  const patternFor = (region: typeof tihai, instrument: string) => {
    const track = trackFor(instrument);
    const pattern = PATTERNS_BY_ID[sheet.arrangement[region.id]?.[track.id] ?? ''];
    assert.ok(pattern, `${instrument} has a named part in ${region.kind}`);
    return pattern;
  };
  const sitar = patternFor(tihai, 'sitar');
  const tabla = patternFor(tihai, 'tabla');
  assert.equal(sitar.shortName, 'Sitar tihai phrase');
  assert.equal(tabla.shortName, 'Tabla tihai accents');
  assert.deepEqual(sitar.events?.map(event => event.position), [12.25,12.5,12.75,13,13.75,14,14.25,14.5,15.25,15.5,15.75]);
  assert.deepEqual(sitar.events?.map(event => event.pitch?.degree), [5,4,3,1,5,4,3,1,5,4,3]);
  assert.deepEqual(tabla.events?.slice(-11).map(event => event.position), [12.25,12.5,12.75,13,13.75,14,14.25,14.5,15.25,15.5,15.75]);
  assert.equal(patternFor(sam, 'sitar').shortName, 'Sam landing');
  assert.equal(patternFor(sam, 'tabla').shortName, 'Sam landing');

  const sitarTrack = trackFor('sitar'), tablaTrack = trackFor('tabla');
  const samBar = performance.bars.find(bar => bar.index === sam.start)!;
  const finalSitarNote = performance.notes.filter(note => note.trackId === sitarTrack.id && note.bar === tihai.start + 3)
    .sort((a, b) => a.time - b.time).at(-1)!;
  assert.ok(Math.abs(finalSitarNote.time + finalSitarNote.dur - samBar.start) < .03,
    'the third sitar phrase resolves into the sam boundary');
  const samNotes = performance.notes.filter(note => note.bar === sam.start
    && [sitarTrack.id, tablaTrack.id].includes(note.trackId));
  assert.deepEqual(new Set(samNotes.map(note => note.trackId)), new Set([sitarTrack.id, tablaTrack.id]),
    'sitar and tabla strike the sam together in the compiled performance');
});

test('authored groove accents are not overlaid with a shared one-and-three pulse', () => {
  const groove = { ...grooveFor('jazz'), humanizeVel: 0 };
  const base = { beatsPerBar: 4, role: 'bass' as const, accent: 0.7, seed: 17 };
  const authoredOne = grooveVelocityMultiplier(groove, { ...base, beatInBar: 0, patternAccentAuthored: true });
  const authoredThree = grooveVelocityMultiplier(groove, { ...base, beatInBar: 2, patternAccentAuthored: true });
  const fallbackOne = grooveVelocityMultiplier(groove, { ...base, beatInBar: 0 });
  const fallbackThree = grooveVelocityMultiplier(groove, { ...base, beatInBar: 2 });
  assert.equal(authoredOne, authoredThree,
    'the authored event accent controls the sound without a second global meter accent');
  assert.equal(fallbackOne, fallbackThree,
    'notes without event accents do not acquire a shared meter pulse in an authored groove');
});

test('missing harmony resolves from its own section style, never the old Am/Tango fallback', () => {
  const sheet = makeSheet('country', 'country-bluegrass');
  const target = sheet.regions[1];
  const authored = target.chords?.slice() ?? [];
  const bars = target.bars;
  assert.ok(authored.length, 'the selected Country style has authored harmony');
  assert.ok(Number.isInteger(bars), 'the section has an authored bar count');
  const withoutSectionHarmony = {
    ...sheet,
    regions: sheet.regions.map(region => region.id === target.id ? { ...region, chords: [] } : region),
  };
  const repaired = rebuild(withoutSectionHarmony);
  const actual = repaired.measures.slice(target.start, target.end).map(measure => measure.chord);
  assert.deepEqual(actual, Array.from({ length: bars! }, (_, index) => authored[index % authored.length]));
  assert.notEqual(actual[0], 'Am', 'a missing Country cell cannot silently become the generic minor fallback');
});
