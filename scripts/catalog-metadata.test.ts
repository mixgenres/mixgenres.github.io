import test from 'node:test';
import assert from 'node:assert/strict';
import { GENRE_WORLDS, ALL_PATTERNS, PATTERNS_BY_ID } from '../src/data/genres';
import { ALL_STYLES, getStyle } from '../src/engine/style/registry';
import { songCatalog } from '../src/data/songs/catalog';
import { STYLE_REFERENCES } from '../src/data/styles/styleReferences';
import { RECORDING_ARRANGEMENTS, parseRecordingForm } from '../src/data/songs/recordingArrangements';
import { assembleStylePatterns } from '../src/engine/style/catalog';
import { auditCatalogSongInstruments, catalogIdForStyle, createCatalogSong } from '../src/engine/sheet/songCatalog';
import { addVoice, canonicalPatternSection, createSheet, isVoiceSilentInAll, makeSheet, patternAvailableInSection, setInstrument } from '../src/engine/sheet/sheet';
import { styleCalibrationTarget } from '../src/engine/style/performance-schema';
import { compileNotatedScore } from '../src/engine/score/notatedScore';
import { arrangeBand, composeMusicianScore } from '../src/engine/band/arrangeBand';
import { compileMusicianScore } from '../src/engine/score/musicianScore';
import { CANONICAL_GENRE_PATTERNS } from '../src/data/genres/_shared/safety-net-patterns';

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
    assert.doesNotMatch(label.trim(), /^[\W_]/, `${pattern.worldId}/${pattern.id} should start with a readable name`);
  }
  for (const world of GENRE_WORLDS) for (const style of world.styleDefinitions) {
    assert.doesNotMatch(style.description, /The lead leaves space for instrumental replies/,
      `${world.id}/${style.id} should explain its own musical character`);
    const sourceStub = `${style.name}: ${style.rhythmicGrammar?.[0] ?? style.coreConcepts?.[0] ?? ''}`.replace(/[.!?]+$/, '').toLocaleLowerCase();
    if (style.description.replace(/[.!?]+$/, '').toLocaleLowerCase() === sourceStub) {
      assert.match(style.description, /\bcenters\b.*\bBPM\b/i, `${world.id}/${style.id} needs a usable style identity description`);
    }
  }
});

test('country pedal-steel studies expose each playable gesture with readable labels', () => {
  const styles = ['honky-tonk', 'bakersfield', 'outlaw', 'western-swing', 'country-pop'];
  const gestures = ['pedal-bend', 'knee-lever-bend', 'chordal-glissando', 'volume-swell'];
  for (const styleId of styles) {
    const studies = ALL_PATTERNS.filter(pattern => pattern.id.startsWith(`country-${styleId}-`)
      && pattern.instruments?.includes('pedal-steel') && pattern.pedagogicalStudy
      && pattern.events?.some(event => gestures.includes(event.articulation ?? '')));
    for (const gesture of gestures) {
      const study = studies.find(pattern => pattern.events?.some(event => event.articulation === gesture));
      assert.ok(study, `${styleId} needs a selectable ${gesture} study`);
      const label = study.shortName ?? study.name;
      assert.ok(label.trim().split(/\s+/).length <= 3, `${styleId}/${label} should stay concise`);
      assert.doesNotMatch(label, /knee-lever-bend|chordal-glissando|volume-swell|pedal-bend/,
        `${styleId}/${label} should use a student-facing name`);
    }
  }
});

test('country style groove contracts match their authored pocket language', () => {
  const honkyTonk = getStyle('country-honky-tonk')!.rhythm!;
  assert.equal(honkyTonk.swingPercentage, 58, 'honky-tonk two-step/shuffle eighths need a light swing');
  assert.equal(honkyTonk.microtimingFeel, 'swung');
  assert.equal(getStyle('country-bluegrass')!.rhythm!.microtimingFeel, 'straight', 'bluegrass drive keeps even eighths');
  assert.equal(getStyle('country-western-swing')!.rhythm!.microtimingFeel, 'swung');
  assert.equal(getStyle('country-outlaw')!.rhythm!.microtimingFeel, 'laid-back');
  assert.equal(getStyle('country-americana')!.rhythm!.microtimingFeel, 'laid-back');
  assert.equal(getStyle('country-bakersfield')!.rhythm!.microtimingFeel, 'straight');
  assert.equal(getStyle('country-country-pop')!.rhythm!.microtimingFeel, 'straight');
});

test('bluegrass teaching cells put the alternating guitar, chop and bass on their named beats', () => {
  const bluegrass = getStyle('country-bluegrass')!;
  const sourceEvents = (shortName: string, instrumentId: string) => {
    const pattern = ALL_PATTERNS.find(candidate => candidate.shortName === shortName
      && candidate.styleIds?.includes(bluegrass.id) && candidate.instruments?.includes(instrumentId));
    assert.ok(pattern, `${instrumentId} needs its named ${shortName} source cell`);
    assert.ok(pattern.events?.length, `${instrumentId}/${shortName} needs a playable event list`);
    return pattern.events!;
  };
  const guitar = sourceEvents('Alternating-bass guitar', 'guitar');
  const mandolin = sourceEvents('Mandolin chop', 'mandolin');
  const bass = sourceEvents('Upright two-beat', 'upright-bass');
  assert.deepEqual(guitar.map(event => event.position), [0, 1, 2, 3]);
  assert.deepEqual(mandolin.map(event => event.position), [1, 3]);
  assert.deepEqual(mandolin.map(event => event.duration), [0.16, 0.16]);
  assert.deepEqual(bass.map(event => event.position), [0, 2]);

  const song = createCatalogSong('country-bluegrass_song');
  const verse = song.regions.find(region => region.kind === 'verse')!;
  for (const [instrumentId, expected] of [
    ['guitar', 'Alternating-bass guitar'], ['mandolin', 'Mandolin chop'], ['upright-bass', 'Upright two-beat'],
  ]) {
    const track = song.tracks.find(part => part.instrumentId === instrumentId)!;
    const pattern = PATTERNS_BY_ID[song.arrangement[verse.id]?.[track.id] ?? ''];
    assert.equal(pattern?.shortName, expected, `${instrumentId} should display the correct Bluegrass part name`);
  }
});

test('Salsa Dura has a clave-locked montuno, playable tumbao and changing percussion/vocal roster', () => {
  const styleId = 'salsa-salsa-dura';
  const source = (shortName: string, instrumentId: string) => {
    const pattern = ALL_PATTERNS.find(candidate => candidate.shortName === shortName
      && candidate.styleIds?.includes(styleId) && candidate.instruments?.includes(instrumentId)
      && candidate.sourceLevel === 'style-authored' && !candidate.pedagogicalStudy);
    assert.ok(pattern, `${instrumentId} needs its named Salsa Dura cell`);
    return pattern;
  };
  const conga = source('Conga tumbao', 'congas');
  assert.deepEqual(conga.events?.map(event => event.position), [1, 3, 5, 7]);
  assert.deepEqual(conga.events?.map(event => event.articulation), ['slap', 'open', 'slap', 'open']);
  const clave = source('Son clave 3–2', 'claves');
  assert.deepEqual(clave.events?.map(event => event.position), [0, 1.5, 3, 5, 6]);
  const piano = source('Piano montuno', 'piano');
  assert.ok(piano.events?.every(event => event.pitch?.voicing === 'chord'), 'the montuno plays chord voicings, not isolated single notes');
  const bass = source('Bass tumbao', 'bass');
  assert.deepEqual(bass.events?.map(event => event.position), [1.5, 3.5, 5.5, 7.5]);
  const pianoTechniques = getStyle(styleId)!.instrumentDialects?.['piano:harmony']?.allowedTechniques as string[] | undefined;
  const bassTechniques = getStyle(styleId)!.instrumentDialects?.['bass:bass']?.allowedTechniques as string[] | undefined;
  assert.ok(!pianoTechniques?.includes('campana'));
  assert.ok(!bassTechniques?.includes('slap'));

  const song = createCatalogSong('salsa-salsa-dura_song');
  const active = (kind: string) => song.regions.find(region => region.kind === kind)!.activeInstrumentIds!;
  assert.ok(!active('intro').includes('voice') && !active('intro').includes('cowbell'));
  assert.ok(active('verse').includes('voice') && active('verse').includes('bongos') && !active('verse').includes('cowbell'));
  assert.ok(active('montuno').includes('cowbell') && !active('montuno').includes('bongos'));
  assert.ok(!active('mambo').includes('voice') && active('mambo').includes('cowbell') && !active('mambo').includes('bongos'));
  assert.ok(!active('cierre').includes('voice') && !active('cierre').includes('cowbell'));
  assert.ok(!song.tracks.some(track => track.instrumentId === 'tres'), 'Salsa Dura keeps the piano as its comping voice');
});

test('Jazz core cells make each rhythm section teach its own pocket', () => {
  const core = (styleId: string, instrumentId: string) => {
    const pattern = ALL_PATTERNS.find(candidate => candidate.styleIds?.includes(styleId)
      && candidate.sourceLevel === 'style-authored' && !candidate.pedagogicalStudy && !candidate.sectionUsage
      && candidate.instruments?.includes(instrumentId));
    assert.ok(pattern, `${styleId} needs a core ${instrumentId} cell`);
    assert.ok(pattern.events?.length, `${styleId}/${instrumentId} needs playable events`);
    return pattern;
  };
  const styles = ['jazz-hard-bop', 'jazz-bebop', 'jazz-cool', 'jazz-modal', 'jazz-post-bop', 'jazz-big-band'];
  for (const instrumentId of ['drums', 'piano']) {
    const signatures = styles.map(styleId => core(styleId, instrumentId).events!
      .map(event => `${event.position}:${event.hitType ?? event.articulation ?? 'note'}`).join('|'));
    assert.equal(new Set(signatures).size, styles.length, `${instrumentId} cells should distinguish the six straight-ahead styles`);
  }
  const modalBass = core('jazz-modal', 'upright-bass');
  assert.deepEqual(modalBass.events!.map(event => event.position), [0]);
  assert.equal(modalBass.events![0].duration, 3.8);
  assert.equal(modalBass.events![0].articulation, 'tenuto');

  const hardBop = core('jazz-hard-bop', 'drums');
  assert.deepEqual(hardBop.events!.filter(event => event.hitType === 'hat').map(event => event.position), [1, 3]);
  assert.deepEqual(hardBop.events!.filter(event => event.hitType === 'ride').slice(0, 4).map(event => event.position), [0, 0.6666666666666666, 1, 1.6666666666666665]);
  const freeJazz = core('jazz-free-jazz', 'drums');
  assert.deepEqual(freeJazz.events!.map(event => event.hitType), ['ride', 'snare', 'tom', 'kick', 'ride']);

  const cool = getStyle('jazz-cool')!;
  const trumpet = core('jazz-cool', 'trumpet');
  assert.equal(cool.form?.templates?.[0]?.value.find(section => section.soloInstrumentId)?.soloInstrumentId, 'trumpet');
  assert.equal(trumpet.shortName, 'Trumpet statement');
  assert.ok(cool.calibration?.roles.lead?.preferredInstruments.includes('trumpet'));
  assert.equal(cool.instrumentDialects?.['drums:percussion']?.variantId, 'brush-kit');
});

test('country safety patterns only offer the instrument and styles they name', () => {
  const patterns = new Map(CANONICAL_GENRE_PATTERNS.filter(pattern => pattern.worldId === 'country').map(pattern => [pattern.id, pattern]));
  assert.deepEqual(patterns.get('country-fiddle-answer')?.instruments, ['violin']);
  assert.deepEqual(patterns.get('country-fiddle-answer')?.styleIds, ['country-bluegrass', 'country-western-swing', 'country-americana']);
  assert.deepEqual(patterns.get('country-banjo-roll')?.styleIds, ['country-bluegrass']);
  assert.deepEqual(patterns.get('country-steel-answer')?.instruments, ['pedal-steel']);
  assert.deepEqual(patterns.get('country-steel-answer')?.styleIds,
    ['country-honky-tonk', 'country-bakersfield', 'country-outlaw', 'country-western-swing', 'country-country-pop']);
});

test('every sample song part has distinct style-local teaching patterns', () => {
  for (const entry of songCatalog) {
    const audit = auditCatalogSongInstruments(entry.id);
    const style = getStyle(entry.styleId)!;
    const allowed = (style.patterns?.allowed ?? []).map(id => PATTERNS_BY_ID[id]).filter(Boolean);
    let checkedParts = 0;
    for (const part of style.arrangement?.ensemble ?? []) for (const instrument of part.instrumentIds) {
      if (!audit.instruments.includes(instrument)) continue;
      const choices = allowed.filter(pattern => pattern.instruments?.includes(instrument) && pattern.roles?.includes(part.role));
      const labels = choices.map(pattern => (pattern.shortName ?? pattern.name).toLocaleLowerCase());
      assert.ok(choices.length >= 2, `${entry.styleId}/${instrument} needs multiple playable patterns`);
      assert.ok(choices.some(pattern => pattern.pedagogicalStudy), `${entry.styleId}/${instrument} needs a local practice study`);
      assert.equal(new Set(labels).size, labels.length, `${entry.styleId}/${instrument} needs distinct visible pattern labels`);
      checkedParts++;
    }
    assert.ok(checkedParts > 0, `${entry.styleId} has no audited song parts`);
  }
});

test('phrase variations can develop arrangements while isolated drills remain teaching-only', () => {
  const variation = ALL_PATTERNS.find(pattern => pattern.styleIds?.includes('tango-canaro')
    && pattern.pedagogicalStudy === 'variation' && pattern.arrangementVariation);
  const drill = ALL_PATTERNS.find(pattern => pattern.styleIds?.includes('tango-canaro')
    && pattern.pedagogicalStudy === 'technique' && !pattern.arrangementVariation);
  assert.ok(variation, 'source-derived phrase development is marked for arrangement use');
  assert.ok(drill, 'isolated technique drills remain separately identified');
  const sample = createCatalogSong('tango-canaro_song');
  assert.ok(sample.measures.some(measure => Object.values(measure.patternDetailsByTrack ?? {}).some(detail =>
    PATTERNS_BY_ID[detail.patternId]?.arrangementVariation)), 'phrase development reaches the generated score');
  const song = makeSheet('tango', 'tango-canaro');
  for (const region of song.regions) for (const patternId of Object.values(song.arrangement[region.id] ?? {})) {
    if (patternId === 'silent') continue;
    const pattern = PATTERNS_BY_ID[patternId];
    assert.ok(!pattern?.pedagogicalStudy || pattern.arrangementVariation,
      `${region.kind}/${patternId}: an isolated drill should not become an automatic song variation`);
  }
  const experiment = addVoice(song, drill!.instruments?.[0] ?? 'piano', undefined, 'song', {
    role: drill!.roles[0], patternId: drill!.id,
  });
  const added = experiment.tracks.at(-1)!;
  assert.ok(experiment.regions.every(region => experiment.arrangement[region.id]?.[added.id] === drill!.id),
    'a student can still deliberately use a practice pattern in every section');
  assert.ok(arrangeBand(experiment).notes.some(note => note.trackId === added.id),
    'the deliberate practice pattern still reaches playback');

  const turnarounds = ALL_PATTERNS.filter(pattern => pattern.id.endsWith('-turnaround-study'));
  assert.ok(turnarounds.length, 'local two-bar phrase studies remain available');
  assert.ok(turnarounds.every(pattern => pattern.pedagogicalStudy === 'variation' && !pattern.arrangementVariation),
    'turnaround lessons are identified as practice material so automatic arrangement cannot mistake them for core phrases');
  const genericClosers = ALL_PATTERNS.filter(pattern => pattern.description?.includes('this is not a style-specific fill'));
  assert.ok(genericClosers.length, 'neutral phrase-close timing exercises remain available to students');
  assert.ok(genericClosers.every(pattern => pattern.pedagogicalStudy === 'technique' && !pattern.variants?.some(variant => variant.variationType === 'cadence')),
    'generic timing placeholders stay selectable but do not drive automatic phrase cadences');
  assert.ok(genericClosers.some(pattern => JSON.stringify(pattern.hitGrid) === JSON.stringify(['tom', 'snare', 'snare'])),
    'the shared drum placeholder is also retained only as a clearly labeled timing study');
});

test('short source anchors gain phrase re-entry variations while sustained beds stay intact', () => {
  const expectsReentry = [
    ['andean-huayno', 'siku', 'lead'],
    ['brazilian-xote', 'bass', 'bass'],
    ['industrial-early-industrial', 'synth', 'bass'],
    ['mexican-mariachi', 'guitarron', 'bass'],
    ['mexican-norteno', 'accordion', 'lead'],
    ['mexican-banda', 'tuba', 'bass'],
    ['taarab-zanzibar', 'upright-bass', 'bass'],
  ] as const;
  for (const [styleId, instrument, role] of expectsReentry) {
    const pattern = ALL_PATTERNS.find(candidate => candidate.styleIds?.includes(styleId)
      && candidate.instruments?.includes(instrument) && candidate.roles?.includes(role)
      && candidate.pedagogicalStudy === 'variation' && candidate.arrangementVariation
      && candidate.shortName?.endsWith('re-entry'));
    assert.ok(pattern, `${styleId}/${instrument} needs a local re-entry variation`);
    assert.equal(pattern.events?.length, 2, `${styleId}/${instrument} should reuse one source anchor twice`);
    assert.ok(pattern.events![1].position > pattern.events![0].position,
      `${styleId}/${instrument} should place the lighter answer after the anchor`);
    assert.ok(pattern.events![1].accent! < pattern.events![0].accent!,
      `${styleId}/${instrument} should keep the later re-entry secondary`);
  }

  for (const [styleId, instrument, role] of [
    ['ambient-organic-ambient', 'string-ensemble', 'texture'],
    ['indian-classical-dhrupad', 'tanpura', 'harmony'],
    ['japanese-gagaku', 'taiko', 'percussion'],
  ] as const) {
    assert.ok(!ALL_PATTERNS.some(pattern => pattern.styleIds?.includes(styleId)
      && pattern.instruments?.includes(instrument) && pattern.roles?.includes(role)
      && pattern.shortName?.endsWith('re-entry')),
    `${styleId}/${instrument} should retain its authored held bed or cycle-marker role`);
  }
});

test('localized song-form labels keep phrase variations playable in the arrangement', () => {
  for (const [source, canonical] of [
    ['call', 'verse'], ['response', 'chorus'], ['head', 'verse'], ['sax soli', 'solo'],
    ['estribillo', 'chorus'], ['copla', 'verse'],
  ] as const) assert.equal(canonicalPatternSection(source), canonical);

  const broadVariation = ALL_PATTERNS.find(pattern => pattern.styleIds?.includes('latin-cumbia')
    && pattern.instruments?.includes('bass') && pattern.roles?.includes('bass')
    && pattern.arrangementVariation && pattern.pedagogicalStudy === 'variation'
    && pattern.sectionUsage?.length === 4);
  assert.ok(broadVariation);
  assert.ok(patternAvailableInSection(broadVariation!, 'call'), 'generic source-derived variation can follow a local call section');
  const soloOnly = ALL_PATTERNS.find(pattern => pattern.styleIds?.includes('latin-cumbia')
    && pattern.instruments?.includes('bass') && pattern.roles?.includes('bass')
    && pattern.sectionUsage?.length === 1 && pattern.sectionUsage[0] === 'solo');
  assert.ok(soloOnly);
  assert.ok(!patternAvailableInSection(soloOnly!, 'call'), 'an explicitly solo-scoped study stays in the solo section');

  for (const styleId of ['latin-cumbia', 'jazz-big-band', 'mexican-norteno', 'salsa-salsa-calena']) {
    const entry = songCatalog.find(candidate => candidate.styleId === styleId)!;
    const song = createCatalogSong(entry.id);
    assert.ok(song.measures.some(measure => Object.values(measure.patternDetailsByTrack ?? {}).some(detail =>
      PATTERNS_BY_ID[detail.patternId]?.arrangementVariation)),
    `${styleId} should use its authored phrase changes instead of repeating only the section starter`);
  }
});

test('source-derived variation cells reach their matching accompaniment tracks', () => {
  for (const [styleId, instrumentId] of [
    ['salsa-salsa-calena', 'piano'], ['salsa-salsa-calena', 'tres'],
    ['timba-manolin', 'piano'], ['mexican-corrido', 'bajo-sexto'],
  ] as const) {
    const song = createCatalogSong(`${styleId}_song`);
    const track = song.tracks.find(candidate => candidate.instrumentId === instrumentId);
    assert.ok(track, `${styleId} should include its ${instrumentId} part`);
    assert.ok(song.measures.some(measure => {
      const patternId = measure.patternDetailsByTrack?.[track!.id]?.patternId;
      return !!patternId && PATTERNS_BY_ID[patternId]?.arrangementVariation;
    }), `${styleId}/${instrumentId} should reach the authored phrase variation in its generated score`);
  }
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

  const fragmentedTracks = base.tracks.slice(0, 4).map((track, index) => ({ ...track, id: ['v0', 'v3', 'v4', 'v5'][index] }));
  const fragmented = { ...base, tracks: fragmentedTracks, arrangement: Object.fromEntries(base.regions.map(region => [region.id, {}])) };
  const recovered = addVoice(fragmented, 'flute', undefined, 'song');
  assert.equal(recovered.tracks.at(-1)?.id, 'v6', 'adding after track deletions must find the next free ID instead of looping on one collision');
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
