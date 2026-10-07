import test from 'node:test';
import assert from 'node:assert/strict';
import { GENRE_WORLDS, ALL_PATTERNS } from '../src/data/genres';
import { ALL_STYLES, getStyle } from '../src/engine/style/registry';
import { songCatalog } from '../src/data/songs/catalog';
import { STYLE_REFERENCES } from '../src/data/styles/styleReferences';
import { RECORDING_ARRANGEMENTS, parseRecordingForm } from '../src/data/songs/recordingArrangements';
import { assembleStylePatterns } from '../src/engine/style/catalog';
import { catalogIdForStyle, createCatalogSong } from '../src/engine/sheet/songCatalog';
import { createSheet } from '../src/engine/sheet/sheet';
import { styleCalibrationTarget } from '../src/engine/style/performance-schema';
import { compileNotatedScore } from '../src/engine/score/notatedScore';
import { composeMusicianScore } from '../src/engine/band/arrangeBand';
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
    if (key.startsWith('qawwali')) assert.deepEqual(song.tracks.map(t => t.instrumentId), ['voice', 'synth']);
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
      assert.deepEqual(style.calibration!.referenceAudio, seed.calibration?.referenceAudio);
      assert.deepEqual(style.calibration!.patterns.families, seed.calibration?.patterns.families);
      assert.deepEqual(style.calibration!.harmony.chordQualities, seed.calibration?.harmony.chordQualities);
    }
  }
});
