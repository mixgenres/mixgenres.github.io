import test from 'node:test';
import assert from 'node:assert/strict';
import { GENRE_WORLDS, ALL_PATTERNS, PATTERNS_BY_ID } from '../src/data/genres';
import { ALL_STYLES, getStyle } from '../src/engine/style/registry';
import { songCatalog } from '../src/data/songs/catalog';
import { STYLE_REFERENCES } from '../src/data/styles/styleReferences';
import { RECORDING_ARRANGEMENTS, parseRecordingForm } from '../src/data/songs/recordingArrangements';
import { assembleStylePatterns } from '../src/engine/style/catalog';
import { auditCatalogSongInstruments, catalogIdForStyle, createCatalogSong } from '../src/engine/sheet/songCatalog';
import { addVoice, createSheet, isVoiceSilentInAll, makeSheet, setInstrument } from '../src/engine/sheet/sheet';
import { styleCalibrationTarget } from '../src/engine/style/performance-schema';
import { compileNotatedScore } from '../src/engine/score/notatedScore';
import { arrangeBand, composeMusicianScore } from '../src/engine/band/arrangeBand';
import { compileMusicianScore } from '../src/engine/score/musicianScore';

test('every full song has valid explicit metadata and retains the original reference label', () => {
  assert.equal(songCatalog.length, ALL_STYLES.length);
  for (const entry of songCatalog) {
    const recording = RECORDING_ARRANGEMENTS[entry.referenceKey];
    const sections = parseRecordingForm(recording.form);
    const ids = getStyle(entry.styleId)!.arrangement!.ensemble!.flatMap(part => part.instrumentIds);
    assert.deepEqual(entry.reference, { credit: STYLE_REFERENCES[entry.referenceKey as keyof typeof STYLE_REFERENCES].credit, recording: STYLE_REFERENCES[entry.referenceKey as keyof typeof STYLE_REFERENCES].recording });
    for (const id of [...recording.instruments ?? [], ...Object.values(recording.solos ?? {}), ...recording.lead ? [recording.lead] : []]) {
      assert.ok(ids.includes(id), `${entry.referenceKey}: absent ${id}`);
    }
    for (const section of sections) assert.ok((recording.chords?.[section.kind] ?? recording.chords?._)?.length, `${entry.referenceKey}: missing harmony ${section.kind}`);
  }
  assert.deepEqual(parseRecordingForm('intro:4:1,verse:4:2').map(section => section.energy), [1, 2]);
  for (const form of ['intro:4:NaN', 'intro:4:2.5', 'intro:4:3:extra']) assert.throws(() => parseRecordingForm(form));
});

test('registry preserves complete cues, traits, meters, ownership and pattern events', () => {
  const before = JSON.stringify(ALL_PATTERNS);
  assembleStylePatterns(ALL_STYLES, ALL_PATTERNS);
  assert.equal(JSON.stringify(ALL_PATTERNS), before);
  for (const world of GENRE_WORLDS) for (const seed of world.styleDefinitions) {
    const style = getStyle(seed.id)!;
    assert.deepEqual(style.signatureTraits, seed.coreConcepts ?? seed.rhythmicGrammar ?? [seed.name]);
    assert.deepEqual(style.form?.preferredMeters, seed.preferredMeters);
    assert.equal(styleCalibrationTarget(world.id, seed.id).referenceSong, `${style.reference!.credit}${style.reference!.recording ? ` — ${style.reference!.recording}` : ''}`);
    assert.deepEqual(style.patterns!.allowed, ALL_PATTERNS.filter(p => p.enabled !== false && p.styleIds?.includes(seed.id)).map(p => p.id));
  }
  const bad = { ...ALL_PATTERNS[0], styleIds: ['missing-owner'] };
  assert.throws(() => assembleStylePatterns(ALL_STYLES, [bad]), /invalid style owner/);
});

test('student-facing catalog labels stay concise and descriptions avoid shared filler', () => {
  for (const pattern of ALL_PATTERNS) {
    const label = pattern.shortName ?? pattern.name;
    assert.ok(label.trim().split(/\s+/).length <= 3, `${pattern.worldId}/${label}`);
  }
  for (const world of GENRE_WORLDS) for (const style of world.styleDefinitions) {
    assert.doesNotMatch(style.description, /The lead leaves space for instrumental replies/,
      `${world.id}/${style.id} should explain its own musical character`);
  }
});

test('practice studies stay selectable but do not replace authored song phrase cells', () => {
  const study = ALL_PATTERNS.find(pattern => pattern.styleIds?.includes('tango-canaro') && pattern.pedagogicalStudy);
  assert.ok(study, 'generated local practice material is tagged explicitly');
  const song = makeSheet('tango', 'tango-canaro');
  for (const region of song.regions) for (const patternId of Object.values(song.arrangement[region.id] ?? {})) {
    if (patternId === 'silent') continue;
    assert.equal(PATTERNS_BY_ID[patternId]?.pedagogicalStudy, undefined,
      `${region.kind}/${patternId}: a practice drill should not become an automatic song variation`);
  }
  const experiment = addVoice(song, study!.instruments?.[0] ?? 'piano', undefined, 'song', {
    role: study!.roles[0], patternId: study!.id,
  });
  const added = experiment.tracks.at(-1)!;
  assert.ok(experiment.regions.every(region => experiment.arrangement[region.id]?.[added.id] === study!.id),
    'a student can still deliberately use a practice pattern in every section');
  assert.ok(arrangeBand(experiment).notes.some(note => note.trackId === added.id),
    'the deliberate practice pattern still reaches playback');
});

test('repeated instrument roles remain separate tracks and survive score projection', () => {
  const style = ALL_STYLES.find(s => {
    const ids = s.arrangement!.ensemble!.flatMap(p => p.instrumentIds);
    return new Set(ids).size < ids.length;
  })!;
  assert.ok(style);
  const sheet = createSheet(style.primaryGenre, style.id);
  const parts = style.arrangement!.ensemble!.flatMap(p => p.instrumentIds.map(id => ({ instrumentId: id, role: p.role })));
  assert.deepEqual(sheet.tracks.map(t => ({ instrumentId: t.instrumentId, role: t.role })), parts);
  assert.equal(new Set(sheet.tracks.map(t => t.id)).size, parts.length);
  const score = composeMusicianScore(sheet);
  const projected = compileMusicianScore(score);
  assert.equal(projected.notes.length, score.notes.length);
  assert.deepEqual(Object.keys(projected.trackInfo!), sheet.tracks.map(t => t.id));
  for (const note of projected.notes) {
    const written = score.notes.find(n => n.trackId === note.trackId && n.midi === note.midi && n.sourceBar === note.bar && n.playback.attackId === note.attackId);
    assert.ok(written);
    assert.equal(note.frequencyHz, written.frequencyHz);
  }
});

test('full-song harmony preserves modal bridges and instruments are never substituted', () => {
  const modal = songCatalog.find(s => s.referenceKey === 'jazz::modal')!;
  const sheet = createCatalogSong(modal.id);
  for (const [index, region] of sheet.regions.entries()) {
    assert.deepEqual(region.chords, RECORDING_ARRANGEMENTS[modal.referenceKey].chords![region.kind] ?? RECORDING_ARRANGEMENTS[modal.referenceKey].chords!._);
    assert.equal(region.energy, parseRecordingForm(RECORDING_ARRANGEMENTS[modal.referenceKey].form)[index].energy);
  }
  for (const key of ['funk::jazz-funk', 'qawwali::contemporary-fusion', 'reggae::dub']) {
    const entry = songCatalog.find(s => s.referenceKey === key)!;
    const song = createCatalogSong(entry.id);
    for (const id of Object.values(RECORDING_ARRANGEMENTS[key].solos ?? {})) assert.ok(song.tracks.some(t => t.instrumentId === id));
    if (key.startsWith('qawwali')) {
      const instruments = song.tracks.map(track => track.instrumentId);
      assert.ok(instruments.includes('voice') && instruments.includes('synth'), 'the reference singer and drone remain present');
      const declared = new Set(RECORDING_ARRANGEMENTS[key].instruments ?? []);
      assert.deepEqual(new Set(instruments), declared, 'the drone song keeps its intentionally small lineup');
    }
  }
});

test('traditional tango and flamenco samples keep their authored ensemble size', () => {
  for (const styleId of ['tango-canaro', 'tango-di-sarli', 'flamenco-solea', 'flamenco-sevillanas']) {
    const entry = songCatalog.find(song => song.styleId === styleId)!;
    const audit = auditCatalogSongInstruments(entry.id);
    assert.deepEqual(audit.supportInstruments, [], `${styleId} should not receive a generic extra player`);
  }
});

test('Canaro and Di Sarli examples develop through their own instrumental roles', () => {
  const songFor = (styleId: string) => {
    const entry = songCatalog.find(song => song.styleId === styleId)!;
    return createCatalogSong(entry.id);
  };
  const namesIn = (song: ReturnType<typeof songFor>, kind: string) => {
    const region = song.regions.find(item => item.kind === kind)!;
    return Object.entries(song.arrangement[region.id] ?? {}).map(([trackId, patternId]) => ({
      instrument: song.tracks.find(track => track.id === trackId)?.instrumentId,
      pattern: PATTERNS_BY_ID[patternId],
    })).filter(item => item.pattern);
  };

  const canaro = songFor('tango-canaro');
  const canaroIntro = namesIn(canaro, 'intro');
  const canaroRefrain = namesIn(canaro, 'refrain');
  const canaroLink = namesIn(canaro, 'interlude');
  assert.ok(canaroIntro.some(item => item.instrument === 'bandoneon' && item.pattern?.shortName === 'Bandoneon phrase'));
  assert.ok(canaroRefrain.some(item => item.instrument === 'violin' && item.pattern?.shortName === 'Violin refrain'));
  assert.ok(!canaroRefrain.some(item => item.instrument === 'bandoneon' && item.pattern?.id !== 'silent'),
    'the refrain puts the violin forward after the bandoneon-led theme');
  assert.ok(canaroLink.some(item => item.instrument === 'piano' && item.pattern?.shortName === 'Piano pickup'));

  const diSarli = songFor('tango-di-sarli');
  const diSarliOpening = namesIn(diSarli, 'piano');
  const diSarliContrast = namesIn(diSarli, 'contraste');
  const diSarliFeature = namesIn(diSarli, 'violin');
  assert.ok(diSarliOpening.some(item => item.instrument === 'piano' && item.pattern?.shortName === 'Rolling piano'));
  assert.ok(diSarliContrast.some(item => item.instrument === 'piano' && item.pattern?.shortName === 'Piano pickup'));
  assert.ok(diSarliFeature.some(item => item.instrument === 'violin' && item.pattern?.shortName === 'Violin return'));
  for (const song of [canaro, diSarli]) {
    const selected = Object.values(song.arrangement).flatMap(parts => Object.values(parts))
      .filter(id => id !== 'silent').map(id => PATTERNS_BY_ID[id]);
    assert.ok(selected.every(pattern => !pattern?.pedagogicalStudy),
      'recording-score arrangements use core cells; practice drills remain user-selectable');
  }
});

test('new instruments receive an audible pattern and can be added with a chosen role and pattern', () => {
  const base = makeSheet({ genreId: 'rock', styleId: 'rock-alternative' });
  const added = addVoice(base, 'cello', undefined, 'song');
  const addedTrack = added.tracks.at(-1)!;
  assert.equal(isVoiceSilentInAll(added, addedTrack.id), false);
  assert.ok(added.regions.every(region => !!added.arrangement[region.id]?.[addedTrack.id]),
    'whole-song additions need an assigned pattern in every section');

  const selectedPattern = ALL_PATTERNS.find(pattern => pattern.worldId === 'flamenco' && pattern.enabled !== false)!;
  const selected = addVoice(base, 'cello', undefined, 'song', { role: 'texture', patternId: selectedPattern.id });
  const selectedTrack = selected.tracks.at(-1)!;
  assert.equal(selectedTrack.role, 'texture');
  assert.ok(selected.regions.every(region => selected.arrangement[region.id]?.[selectedTrack.id] === selectedPattern.id),
    'the chosen pattern should be assigned throughout the selected scope');
  assert.ok(arrangeBand(selected).notes.some(note => note.trackId === selectedTrack.id),
    'a cross-genre pattern should still produce playable notes on the chosen instrument');
  const swapped = setInstrument(selected, selectedTrack.id, 'oud');
  assert.ok(swapped.regions.every(region => swapped.arrangement[region.id]?.[selectedTrack.id] === selectedPattern.id),
    'changing the sound source should preserve the student’s pattern choice');
  assert.ok(arrangeBand(swapped).notes.some(note => note.trackId === selectedTrack.id),
    'the preserved pattern should remain playable after an instrument swap');
});

test('free-time Granaína and Malagueña samples retain cante, guitar answers and distinct features', () => {
  for (const styleId of ['flamenco-granaina', 'flamenco-malaguena']) {
    const entry = songCatalog.find(song => song.styleId === styleId)!;
    const recording = RECORDING_ARRANGEMENTS[entry.referenceKey];
    const song = createCatalogSong(entry.id);
    assert.deepEqual(new Set(song.tracks.map(track => track.instrumentId)), new Set(['voice', 'guitar']));
    assert.equal(recording.lead, 'voice');
    assert.equal(recording.instruments?.includes('cajon'), false);
    assert.ok(Object.values(recording.solos ?? {}).every(instrument => instrument === 'guitar'));
    assert.ok(song.regions.some(region => region.kind === 'cante'));
    const guitarTrack = song.tracks.find(track => track.instrumentId === 'guitar')!;
    assert.ok(song.regions.some(region => region.solo?.trackIds.includes(guitarTrack.id)), `${styleId} should expose its guitar feature`);
  }
});

test('every style has one complete example and removed examples cannot be loaded', () => {
  assert.equal(songCatalog.length, ALL_STYLES.length);
  assert.equal(new Set(songCatalog.map(entry => entry.styleId)).size, ALL_STYLES.length);
  for (const entry of songCatalog) assert.equal(catalogIdForStyle(entry.styleId), entry.id);
  assert.throws(() => createCatalogSong('tango-golden-age_starter'), /Unknown catalog song/);
});

test('style examples retain complete sections and recording tempo', () => {
  const entry = songCatalog.find(entry => entry.styleId === 'tango-golden-age')!;
  const song = createCatalogSong(catalogIdForStyle(entry.styleId));
  const recording = RECORDING_ARRANGEMENTS[entry.referenceKey];
  const sections = parseRecordingForm(recording.form);
  assert.equal(song.title, entry.styleName);
  assert.equal(song.bpm, recording.bpm);
  assert.equal(song.durationMeasures, sections.reduce((bars, section) => bars + section.bars, 0));
  assert.deepEqual(song.regions.map(region => [region.kind, region.bars]), sections.map(section => [section.kind, section.bars]));
});

test('simultaneous written drum components remain separate notation attacks', () => {
  const sheet = createSheet('rock');
  const drum = sheet.tracks.find(track => track.instrumentId === 'drums')!;
  assert.ok(drum);
  const first = sheet.measures[0];
  const detail = first.patternDetailsByTrack![drum.id];
  const score = compileNotatedScore({ ...sheet, regions: [{ ...sheet.regions[0], start: 0, end: 1 }], measures: [{ ...first,
    patternDetailsByTrack: { ...first.patternDetailsByTrack, [drum.id]: { ...detail,
      perf: { ...detail.perf!, onsets: [0], fractionalPositions: [0], pitches: [{ midi: [36, 38] }] } } } }] });
  const attacks = score.sections[0].cells[drum.id].bars[0].attacks;
  assert.equal(attacks.length, 2);
  assert.deepEqual(attacks.map(a => a.pitch.kind === 'drum' ? a.pitch.drum.midi : undefined), [36, 38]);
  assert.deepEqual(attacks[0].position, attacks[1].position);
  assert.deepEqual(attacks[0].duration, attacks[1].duration);
});

test('all catalog mixes and vocabulary reach calibration directly from metadata', () => {
  for (const world of GENRE_WORLDS) {
    for (const seed of world.styleDefinitions) {
      const style = getStyle(seed.id)!;
      assert.deepEqual(style.calibration!.mix, seed.calibration?.mix);
      assert.deepEqual(style.calibration!.patterns.families, seed.calibration?.patterns.families);
      assert.deepEqual(style.calibration!.harmony.chordQualities, seed.calibration?.harmony.chordQualities);
    }
  }
});
