import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { GENRE_WORLDS, ALL_PATTERNS, PATTERNS_BY_ID, PATTERNS_BY_WORLD } from '../src/data/genres';
import { ALL_STYLES, getStyle } from '../src/engine/style/registry';
import { songCatalog } from '../src/data/songs/catalog';
import { STYLE_REFERENCES } from '../src/data/styles/styleReferences';
import { RECORDING_ARRANGEMENTS, parseRecordingForm } from '../src/data/songs/recordingArrangements';
import { assembleStylePatterns } from '../src/engine/style/catalog';
import { auditCatalogSongInstruments, catalogIdForStyle, createCatalogSong } from '../src/engine/sheet/songCatalog';
import { addVoice, canonicalPatternSection, createSheet, getResolvedSectionStyle, isVoiceSilentInAll, makeSheet, makeStarterSheet, patternAvailableInSection, setInstrument, switchSectionWorld, unsilenceVoiceInAll } from '../src/engine/sheet/sheet';
import { starterTitleForGenre, TITLES } from '../src/data/genreForms';
import { resolveSoloPlan, soloistAtBar, supportsSolo } from '../src/engine/sheet/solo';
import { styleCalibrationTarget } from '../src/engine/style/performance-schema';
import { resolveStyle, StyleRuntime } from '../src/engine/style';
import { compileNotatedScore } from '../src/engine/score/notatedScore';
import { arrangeBand, composeMusicianScore } from '../src/engine/band/arrangeBand';
import { compileMusicianScore } from '../src/engine/score/musicianScore';
import { compileSamplePlan } from '../src/engine/playback/soundfont/plan';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import { INSTRUMENT_CATALOG, capitalizeInstrumentName } from '../src/data/instruments';

const styleOwnsInstrumentPattern = (genreId: string, styleId: string, instrumentId: string) =>
  (PATTERNS_BY_WORLD[genreId] ?? []).some(pattern => pattern.sourceLevel === 'style-authored'
    && pattern.styleIds?.includes(styleId)
    && pattern.instruments?.includes(instrumentId));

test('instrument labels consistently capitalize the initial letter without changing IDs', () => {
  for (const instrument of INSTRUMENT_CATALOG) {
    assert.match(instrument.name, /^[^\p{L}]*\p{Lu}/u,
      `${instrument.id} stores a consistently capitalized catalog name`);
    assert.match(capitalizeInstrumentName(instrument.name), /^[^\p{L}]*\p{Lu}/u,
      `${instrument.id} has an uppercase initial in the display label`);
  }
  assert.equal(capitalizeInstrumentName('synth bass'), 'Synth bass');
  assert.equal(capitalizeInstrumentName('808 kit'), '808 Kit');
  assert.equal(capitalizeInstrumentName('FM EP'), 'FM EP');
  assert.equal(INSTRUMENT_CATALOG.find(instrument => instrument.id === 'synth-bass')?.id, 'synth-bass');
  assert.equal(INSTRUMENT_CATALOG.find(instrument => instrument.id === 'synth-bass')?.name, 'Synth bass');
});

test('the default tango starter keeps the neutral sketch title', () => {
  assert.equal(TITLES.tango, 'sketch');
  assert.equal(starterTitleForGenre(' Tango '), 'sketch');
  assert.equal(makeSheet('tango').title, 'sketch');
  assert.equal(makeStarterSheet('tango').title, 'sketch');
  assert.equal(makeSheet('amapiano').title, 'amapiano sketch');
});

test('every catalog style sample exposes at least eight distinct playable instruments', () => {
  for (const entry of songCatalog) {
    const song = createCatalogSong(entry.id);
    const instruments = new Set(song.tracks.map(track => track.instrumentId));
    assert.ok(instruments.size >= 8, `${entry.styleId} exposes ${instruments.size} instruments`);
    assert.ok(song.tracks.every(track => track.name && /^[^\p{L}]*\p{Lu}/u.test(track.name)),
      `${entry.styleId} keeps display instrument names capitalized`);
  }
});

test('every selectable style starter expands to at least eight distinct playable instruments', () => {
  for (const style of ALL_STYLES) {
    const starter = makeStarterSheet({ genreId: style.primaryGenre, styleId: style.id });
    const instruments = new Set(starter.tracks.map(track => track.instrumentId));
    assert.ok(instruments.size >= 8, `${style.id} starter exposes ${instruments.size} instruments`);
    assert.ok(starter.tracks.every(track => track.name && /^[^\p{L}]*\p{Lu}/u.test(track.name)),
      `${style.id} starter keeps display instrument names capitalized`);
  }
});

test('every catalog style uses its full teaching ensemble across the form', () => {
  for (const entry of songCatalog) {
    const song = createCatalogSong(entry.id);
    const active = new Set(song.regions.flatMap(region => region.activeInstrumentIds ?? []));
    const recording = RECORDING_ARRANGEMENTS[entry.referenceKey];
    const supports = new Set(auditCatalogSongInstruments(entry.id).supportInstruments);
    if (recording.activateTeachingSupport === false) {
      const written = new Set(recording.instruments ?? []);
      assert.ok(written.size > 0, `${entry.styleId} declares its exposed source ensemble`);
      assert.deepEqual(active, written, `${entry.styleId} keeps its written personnel while extra teaching players remain available`);
      continue;
    }
    for (const track of song.tracks) {
      const instrumentId = track.instrumentId ?? '';
      if (!instrumentId || !supports.has(instrumentId)) {
        assert.ok(active.has(instrumentId), `${entry.styleId}/${instrumentId} drops a named source player`);
        continue;
      }
      const shouldActivate = instrumentId !== 'drums' || styleOwnsInstrumentPattern(entry.genreId, entry.styleId, instrumentId);
      assert.equal(active.has(instrumentId), shouldActivate,
        `${entry.styleId}/${instrumentId} should ${shouldActivate ? '' : 'not '}enter without a style-authored part`);
    }
  }
});

test('catalog samples never auto-play a sibling style drum groove', () => {
  let kitlessStyles = 0;
  for (const entry of songCatalog) {
    const song = createCatalogSong(entry.id);
    const recording = RECORDING_ARRANGEMENTS[entry.referenceKey];
    const explicitDrums = recording.instruments?.includes('drums')
      || Object.values(recording.sectionInstruments ?? {}).some(instruments => instruments.includes('drums'));
    const localKit = styleOwnsInstrumentPattern(entry.genreId, entry.styleId, 'drums');
    const activeDrums = song.regions.filter(region => region.activeInstrumentIds?.includes('drums'));
    if (!explicitDrums && !localKit) {
      kitlessStyles++;
      assert.equal(activeDrums.length, 0, `${entry.styleId} must not inherit another style's kit phrase`);
    }
    if (activeDrums.length && !explicitDrums) {
      for (const region of activeDrums) {
        const track = song.tracks.find(candidate => candidate.instrumentId === 'drums')!;
        const pattern = PATTERNS_BY_ID[song.arrangement[region.id]?.[track.id] ?? ''];
        assert.ok(pattern?.styleIds?.includes(entry.styleId), `${entry.styleId} uses its own kit phrase`);
      }
    }
  }
  assert.ok(kitlessStyles >= 180, `expected broad catalog coverage, checked ${kitlessStyles} kitless styles`);

  const noWave = createCatalogSong('weird-no-wave_song');
  const zeuhl = createCatalogSong('weird-zeuhl_song');
  const drumPatternIds = (song: ReturnType<typeof createCatalogSong>) => new Set(song.regions
    .filter(region => region.activeInstrumentIds?.includes('drums'))
    .map(region => {
      const track = song.tracks.find(candidate => candidate.instrumentId === 'drums')!;
      return song.arrangement[region.id]?.[track.id];
    }));
  const noWavePatterns = drumPatternIds(noWave);
  const zeuhlPatterns = drumPatternIds(zeuhl);
  assert.ok(noWavePatterns.size > 0 && zeuhlPatterns.size > 0, 'both authored kit styles retain their kit parts');
  assert.ok([...noWavePatterns].every(id => id?.includes('no-wave')));
  assert.ok([...zeuhlPatterns].every(id => id?.includes('zeuhl')));
  assert.ok([...noWavePatterns].every(id => !zeuhlPatterns.has(id)), 'No Wave and Zeuhl keep distinct kit phrases');
});

test('added sample players adapt local role phrases before borrowing a sibling style', () => {
  for (const [styleId, instrumentId, role] of [
    ['weird-deconstructed', 'guitar', 'harmony'],
    ['ambient-dark-ambient', 'guitar', 'lead'],
    ['amapiano-classic', 'sampler', 'percussion'],
    ['bachata-traditional-bolero-bachata', 'maracas', 'percussion'],
  ]) {
    const song = createCatalogSong(`${styleId}_song`);
    const track = song.tracks.find(candidate => candidate.instrumentId === instrumentId)!;
    const regions = song.regions.filter(region => region.activeInstrumentIds?.includes(instrumentId));
    assert.ok(regions.length > 0, `${styleId}/${instrumentId} remains audible`);
    for (const region of regions) {
      const pattern = PATTERNS_BY_ID[song.arrangement[region.id]?.[track.id] ?? ''];
      assert.ok(pattern?.styleIds?.includes(styleId), `${styleId}/${instrumentId} keeps the selected style's phrase`);
      assert.ok(pattern?.roles.includes(role), `${styleId}/${instrumentId} preserves its ${role} job`);
    }
  }
});

test('expanded teaching rosters retain natural support roles', () => {
  for (const entry of songCatalog) {
    const song = createCatalogSong(entry.id);
    const roles = new Set(song.tracks.map(track => track.role));
    assert.ok(roles.size >= 2, `${entry.styleId} collapsed its expanded roster into one foreground role`);
  }
});

test('style resolution has no hidden hardcoded fallback decisions', () => {
  for (const style of ALL_STYLES) {
    const report = StyleRuntime.create(resolveStyle({ genreId: style.primaryGenre, styleId: style.id }))
      .getCoverageReport();
    assert.equal(report.hardcodedDecisions, 0, `${style.id} must not resolve an untraceable hardcoded decision`);
    assert.deepEqual(report.fallbackPaths, [], `${style.id} must not expose a hidden fallback path`);
  }
});

test('every catalog roster support track can be enabled with a style-authored playable part', () => {
  for (const entry of songCatalog) {
    const sheet = createCatalogSong(entry.id);
    const support = new Set(auditCatalogSongInstruments(entry.id).supportInstruments);
    for (const track of sheet.tracks) {
      if (sheet.regions.some(region => region.activeInstrumentIds?.includes(track.instrumentId ?? ''))) continue;
      const enabled = unsilenceVoiceInAll(sheet, track.id);
      for (const region of enabled.regions) {
        const patternId = enabled.arrangement[region.id]?.[track.id];
        assert.ok(patternId && patternId !== 'silent', `${entry.styleId}/${track.instrumentId} has an enableable cell in ${region.kind}`);
        const pattern = PATTERNS_BY_ID[patternId!];
        assert.ok(pattern, `${entry.styleId}/${track.instrumentId} resolves ${patternId}`);
        assert.equal(pattern.worldId, entry.genreId, `${entry.styleId}/${track.instrumentId} stays in its genre vocabulary`);
        const sameGenreAdaptation = pattern.worldId === entry.genreId && support.has(track.instrumentId ?? '');
        assert.ok(!pattern.styleIds?.length || pattern.styleIds.includes(entry.styleId) || pattern.canCrossRole || sameGenreAdaptation,
          `${entry.styleId}/${track.instrumentId} keeps a style-authored or same-genre support phrase after enabling`);
      }
    }
  }
});

test('catalog support adaptations preserve the receiving part role', () => {
  for (const entry of songCatalog) {
    const sheet = createCatalogSong(entry.id);
    const support = new Set(auditCatalogSongInstruments(entry.id).supportInstruments);
    for (const track of sheet.tracks) {
      const instrumentId = track.instrumentId;
      if (!instrumentId || !support.has(instrumentId)) continue;
      for (const region of sheet.regions) {
        if (!region.activeInstrumentIds?.includes(instrumentId)) continue;
        const patternId = sheet.arrangement[region.id]?.[track.id];
        const pattern = patternId && PATTERNS_BY_ID[patternId];
        assert.ok(pattern, `${entry.styleId}/${instrumentId} has a support cell in ${region.kind}`);
        if (pattern!.sourceLevel !== 'style-authored' || pattern!.canCrossRole) continue;
        assert.ok(pattern!.roles.includes(track.role),
          `${entry.styleId}/${instrumentId} receives ${pattern!.shortName} as ${track.role}, not ${pattern!.roles.join('/')}`);
      }
    }
  }
});

test('sample, turntable and support synth colors stay out of vocal lead cells', () => {
  for (const entry of songCatalog) {
    const sheet = createCatalogSong(entry.id);
    const support = new Set(auditCatalogSongInstruments(entry.id).supportInstruments);
    for (const track of sheet.tracks) {
      if (!support.has(track.instrumentId ?? '') || !['sampler', 'turntable', 'synth'].includes(track.instrumentId ?? '')) continue;
      const hasNonLeadSupportRole = sheet.tracks.some(candidate => ['percussion', 'texture', 'harmony'].includes(candidate.role));
      if (!hasNonLeadSupportRole) continue;
      assert.notEqual(track.role, 'lead', `${entry.styleId}/${track.instrumentId} should stay out of the foreground lead role`);
      assert.notEqual(track.role, 'voice', `${entry.styleId}/${track.instrumentId} should stay out of the vocal role`);
      for (const region of sheet.regions) {
        if (!region.activeInstrumentIds?.includes(track.instrumentId ?? '')) continue;
        const pattern = PATTERNS_BY_ID[sheet.arrangement[region.id]?.[track.id] ?? ''];
        assert.ok(!pattern?.instruments?.includes('voice'),
          `${entry.styleId}/${region.kind}/${track.instrumentId} must not inherit a vocal phrase`);
      }
    }
  }
});

test('support vocals keep a vocal-authored phrase when a crossover host uses synth lead cells', () => {
  const entry = songCatalog.find(candidate => candidate.styleId === 'amapiano-kwaito-crossover');
  assert.ok(entry, 'the Kwaito crossover sample is present');
  const sheet = createCatalogSong(entry!.id);
  const voice = sheet.tracks.find(track => track.instrumentId === 'voice');
  assert.ok(voice, 'the crossover sample exposes its chant voice');
  const activeVoicePatterns = sheet.regions
    .filter(region => region.activeInstrumentIds?.includes('voice'))
    .map(region => PATTERNS_BY_ID[sheet.arrangement[region.id]?.[voice!.id] ?? ''])
    .filter((pattern): pattern is NonNullable<typeof pattern> => !!pattern);
  assert.ok(activeVoicePatterns.length > 0, 'the chant voice has active cells');
  assert.ok(activeVoicePatterns.every(pattern => pattern.instruments?.includes('voice')),
    'the chant voice does not inherit the host synth lead contour');
});

test('Disco Bollywood gives its added Sitar a plucked answer instead of a vocal contour', () => {
  const sheet = createCatalogSong('bollywood-disco-bollywood_song');
  const sitar = sheet.tracks.find(track => track.instrumentId === 'sitar');
  assert.ok(sitar, 'the disco sample reaches its full roster with Sitar');
  const outro = sheet.regions.find(region => region.kind === 'outro');
  assert.ok(outro?.activeInstrumentIds?.includes('sitar'), 'Sitar enters the authored closing ensemble');
  const pattern = PATTERNS_BY_ID[sheet.arrangement[outro!.id]?.[sitar!.id] ?? ''];
  assert.ok(pattern?.styleIds?.includes('bollywood-disco-bollywood'), 'Sitar follows a phrase written for the disco style');
  assert.ok(pattern?.roles.includes('harmony'), 'Sitar retains its answering harmony job');
  assert.deepEqual(pattern?.instruments, ['sitar']);
  assert.ok(!pattern?.instruments?.includes('voice'), 'Sitar does not inherit the synthetic vocal guide');
});

test('sparse Ambient samples replace the genre drum kit with sustained colors', () => {
  for (const entry of songCatalog.filter(candidate => candidate.genreId === 'ambient' && candidate.styleId !== 'ambient-downtempo-ambient')) {
    const sheet = createCatalogSong(entry.id);
    const instruments = new Set(sheet.tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${entry.styleId} keeps the full eight-part roster`);
    assert.ok(!instruments.has('drums'), `${entry.styleId} does not inherit the downtempo drum kit`);
    assert.ok(['harp', 'cello', 'oboe'].some(instrument => instruments.has(instrument)),
      `${entry.styleId} receives a sustained ambient support color`);
  }
});

test('the Contemporary Fusion Qawwali study keeps its explicit drum-band omission', () => {
  const entry = songCatalog.find(candidate => candidate.styleId === 'qawwali-contemporary-fusion');
  assert.ok(entry, 'the Contemporary Fusion Qawwali sample is present');
  const sheet = createCatalogSong(entry!.id);
  const instruments = new Set(sheet.tracks.map(track => track.instrumentId));
  assert.equal(instruments.size, 8, 'the fusion study still has a complete teaching roster');
  assert.ok(!['dholak', 'hand-percussion', 'tabla', 'drums'].some(id => instruments.has(id)),
    'the fusion study does not reintroduce the omitted traditional drum ensemble');
  assert.ok(['tanpura', 'sarangi', 'sitar', 'bansuri'].some(id => instruments.has(id)),
    'the fusion study uses a quiet melodic or drone support color');
  const verse = sheet.regions.find(region => region.kind === 'verse'
    && region.activeInstrumentIds?.includes('tanpura'));
  assert.ok(verse, 'the fusion study contains its full support verse');
  for (const [instrumentId, expected] of [['tanpura', 'Tanpura drone'], ['sarangi', 'Sarangi answer'], ['sitar', 'Sitar answer']] as const) {
    const track = sheet.tracks.find(candidate => candidate.instrumentId === instrumentId);
    assert.ok(track && verse.activeInstrumentIds?.includes(instrumentId), `${instrumentId} enters the verse support roster`);
    const supportPatternId: string | undefined = track ? sheet.arrangement[verse!.id]?.[track.id] : undefined;
    const supportPattern: (typeof PATTERNS_BY_ID)[string] | undefined = supportPatternId ? PATTERNS_BY_ID[supportPatternId] : undefined;
    assert.equal(supportPattern?.shortName, expected, `${instrumentId} keeps its own support phrase`);
    assert.deepEqual(supportPattern?.instruments, [instrumentId], `${instrumentId} does not borrow the vocal cell`);
  }
});

test('acoustic Desert Blues styles keep their Tuareg support palette', () => {
  for (const styleId of ['desert-blues-tishoumaren', 'desert-blues-sahel-guitar', 'desert-blues-acoustic-tuareg']) {
    const entry = songCatalog.find(candidate => candidate.styleId === styleId);
    assert.ok(entry, `${styleId} is present`);
    const sheet = createCatalogSong(entry!.id);
    const instruments = new Set(sheet.tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${styleId} keeps the full teaching roster`);
    assert.ok(!['organ', 'sampler', 'piano'].some(id => instruments.has(id)),
      `${styleId} does not inherit generic electronic/keyboard support`);
    assert.ok(['kora', 'oud', 'harmonica'].every(id => instruments.has(id)),
      `${styleId} adds the authored Sahel/Tuareg colors`);
    if (styleId === 'desert-blues-acoustic-tuareg') {
      assert.ok(!['bass', 'drums'].some(id => instruments.has(id)),
        'Acoustic Tuareg does not inherit a generic bass-and-kit rhythm section');
      assert.ok(instruments.has('flute') && instruments.has('frame-drum'),
        'Acoustic Tuareg uses breath and frame-drum support colors');
    }
  }
});

test('traditional Indian Classical samples keep an Indian acoustic roster', () => {
  for (const entry of songCatalog.filter(candidate => candidate.genreId === 'indian-classical')) {
    const sheet = createCatalogSong(entry.id);
    const instruments = new Set(sheet.tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${entry.styleId} keeps the full teaching roster`);
    assert.ok(!['synth', 'piano', 'organ'].some(id => instruments.has(id)),
      `${entry.styleId} does not inherit generic keyboard or electronic support`);
    assert.ok(['bansuri', 'flute', 'veena', 'mridangam', 'rudra-veena', 'sitar', 'sarangi', 'pakhawaj']
      .filter(id => instruments.has(id)).length >= 2,
    `${entry.styleId} keeps at least two Indian melodic or tala support colors`);
  }
});

test('traditional Gamelan samples keep metallophone colors instead of synth support', () => {
  for (const entry of songCatalog.filter(candidate => candidate.genreId === 'gamelan')) {
    const sheet = createCatalogSong(entry.id);
    const instruments = new Set(sheet.tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${entry.styleId} keeps the full teaching roster`);
    assert.ok(!instruments.has('synth'), `${entry.styleId} does not inherit a generic synthesizer`);
    assert.ok(instruments.has('saron'), `${entry.styleId} keeps a keyed metallophone support color`);
  }
});

test('traditional Persian studies keep acoustic maqam colors instead of piano support', () => {
  for (const styleId of ['persian-radif', 'persian-instrumental-ensemble']) {
    const entry = songCatalog.find(candidate => candidate.styleId === styleId);
    assert.ok(entry, `${styleId} is present`);
    const sheet = createCatalogSong(entry!.id);
    const instruments = new Set(sheet.tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${styleId} keeps the full teaching roster`);
    assert.ok(!instruments.has('piano'), `${styleId} does not inherit generic piano support`);
    assert.ok(!instruments.has('string-ensemble'), `${styleId} does not inherit generic string-ensemble support`);
    assert.ok(['ney', 'oud', 'qanun'].some(id => instruments.has(id)),
      `${styleId} keeps a Persian/maqam melodic support color`);
  }
});

test('Arabic Instrumental Maqam keeps a takht roster instead of string-ensemble filler', () => {
  const entry = songCatalog.find(candidate => candidate.styleId === 'arabic-instrumental-maqam');
  assert.ok(entry, 'Arabic Instrumental Maqam sample is present');
  const instruments = new Set(createCatalogSong(entry!.id).tracks.map(track => track.instrumentId));
  assert.equal(instruments.size, 8, 'Arabic Instrumental Maqam keeps the full teaching roster');
  assert.ok(!instruments.has('string-ensemble'), 'Arabic Instrumental Maqam does not inherit string-ensemble filler');
  assert.ok(instruments.has('oud') && instruments.has('qanun') && instruments.has('ney'),
    'Arabic Instrumental Maqam keeps the core takht instruments');
});

test('traditional Sabar and Ottoman studies keep acoustic regional support parts', () => {
  const sabar = songCatalog.find(candidate => candidate.styleId === 'mbalax-sabar-heavy');
  assert.ok(sabar, 'the Sabar-heavy sample is present');
  const sabarInstruments = new Set(createCatalogSong(sabar!.id).tracks.map(track => track.instrumentId));
  assert.equal(sabarInstruments.size, 8, 'Sabar-heavy keeps the full teaching roster');
  assert.ok(!sabarInstruments.has('piano'), 'Sabar-heavy does not inherit a generic piano');
  assert.ok(sabarInstruments.has('balafon'), 'Sabar-heavy adds a West African mallet color');

  const ottoman = songCatalog.find(candidate => candidate.styleId === 'turkish-ottoman-classical');
  assert.ok(ottoman, 'the Ottoman Classical sample is present');
  const ottomanInstruments = new Set(createCatalogSong(ottoman!.id).tracks.map(track => track.instrumentId));
  assert.equal(ottomanInstruments.size, 8, 'Ottoman Classical keeps the full teaching roster');
  assert.ok(!['drums', 'guitar', 'bass'].some(id => ottomanInstruments.has(id)),
    'Ottoman Classical does not inherit generic kit or modern rhythm-section parts');
  assert.ok(ottomanInstruments.has('violin') && ottomanInstruments.has('tanbur')
    && ottomanInstruments.has('kemenche'),
  'Ottoman Classical keeps bowed and long-necked Turkish melodic colors');

  const folk = songCatalog.find(candidate => candidate.styleId === 'turkish-turkish-folk');
  assert.ok(folk, 'Turkish Folk sample is present');
  const folkInstruments = new Set(createCatalogSong(folk!.id).tracks.map(track => track.instrumentId));
  assert.equal(folkInstruments.size, 8, 'Turkish Folk keeps the full teaching roster');
  assert.ok(!['guitar', 'bass', 'drums', 'string-ensemble'].some(id => folkInstruments.has(id)),
    'Turkish Folk does not inherit generic rock or orchestral support');
  assert.ok(['baglama', 'frame-drum', 'clarinet', 'zurna', 'kemenche'].every(id => folkInstruments.has(id)),
    'Turkish Folk keeps its saz, drum, reed, and bowed colors');
});

test('throat-singing Steppe studies use khomus color instead of a kit drum', () => {
  for (const styleId of ['steppe-khoomei', 'steppe-sygyt', 'steppe-kargyraa']) {
    const entry = songCatalog.find(candidate => candidate.styleId === styleId);
    assert.ok(entry, `${styleId} is present`);
    const instruments = new Set(createCatalogSong(entry!.id).tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${styleId} keeps the full teaching roster`);
    assert.ok(!instruments.has('drums'), `${styleId} does not inherit a generic kit drum`);
    assert.ok(!['guitar', 'bass', 'piano'].some(id => instruments.has(id)),
      `${styleId} does not inherit a generic rock/keyboard support layer`);
    assert.ok(instruments.has('khomus'), `${styleId} keeps the native jaw-harp color`);
    assert.ok(instruments.has('tovshuur') && instruments.has('yatga'),
      `${styleId} keeps modeled Mongolian plucked and zither colors`);
  }
});

test('traditional Ethiopian studies keep native colors instead of Ethio-jazz fillers', () => {
  for (const styleId of ['ethiopian-tizita', 'ethiopian-traditional-modal']) {
    const entry = songCatalog.find(candidate => candidate.styleId === styleId);
    assert.ok(entry, `${styleId} is present`);
    const instruments = new Set(createCatalogSong(entry!.id).tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${styleId} keeps the full teaching roster`);
    assert.ok(!['tenor-sax', 'trumpet', 'organ', 'bass', 'drums'].some(id => instruments.has(id)),
      `${styleId} does not inherit modern Ethio-jazz filler parts`);
    assert.ok(['washint', 'begena', 'nagarit', 'sistrum'].every(id => instruments.has(id)),
      `${styleId} keeps its Ethiopian acoustic support colors`);
  }
});

test('traditional Bachata studies keep guitar-and-hand-percussion colors', () => {
  for (const styleId of ['bachata-dominican', 'bachata-amargue', 'bachata-traditional-bolero-bachata']) {
    const entry = songCatalog.find(candidate => candidate.styleId === styleId);
    assert.ok(entry, `${styleId} is present`);
    const instruments = new Set(createCatalogSong(entry!.id).tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${styleId} keeps the full teaching roster`);
    assert.ok(!['synth', 'drums'].some(id => instruments.has(id)),
      `${styleId} does not inherit electronic or kit filler parts`);
    assert.ok(instruments.has('maracas') && instruments.has('tambora'),
      `${styleId} adds distinct hand-percussion colors to its guitar band`);
  }
});

test('Palm-Wine keeps its acoustic guitar and West African percussion palette', () => {
  const entry = songCatalog.find(candidate => candidate.styleId === 'afrobeat-palm-wine');
  assert.ok(entry, 'Palm-Wine is present');
  const instruments = new Set(createCatalogSong(entry!.id).tracks.map(track => track.instrumentId));
  assert.equal(instruments.size, 8, 'Palm-Wine keeps the full teaching roster');
  assert.ok(!['trumpet', 'tenor-sax', 'organ', 'bass', 'drums'].some(id => instruments.has(id)),
    'Palm-Wine does not inherit the Afrobeat horn/keys filler palette');
  assert.ok(['talking-drum', 'shekere', 'djembe', 'congas', 'cowbell'].some(id => instruments.has(id)),
    'Palm-Wine keeps native hand-percussion support');
});

test('traditional Steppe string studies avoid kit and rock-guitar expansion parts', () => {
  for (const styleId of ['steppe-morin-khuur', 'steppe-dombra']) {
    const entry = songCatalog.find(candidate => candidate.styleId === styleId);
    assert.ok(entry, `${styleId} is present`);
    const instruments = new Set(createCatalogSong(entry!.id).tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${styleId} keeps the full teaching roster`);
    assert.ok(!['drums', 'guitar'].some(id => instruments.has(id)),
      `${styleId} does not inherit kit or generic rock-guitar parts`);
    assert.ok(instruments.has('tovshuur') && instruments.has('yatga'),
      `${styleId} adds Steppe plucked-string colors`);
  }
});

test('traditional Andean studies keep bombo-led percussion instead of a generic kit', () => {
  for (const styleId of ['andean-huayno', 'andean-sanjuanito', 'andean-saya', 'andean-tinku', 'andean-carnavalito', 'andean-nueva-cancion']) {
    const entry = songCatalog.find(candidate => candidate.styleId === styleId);
    assert.ok(entry, `${styleId} is present`);
    const instruments = new Set(createCatalogSong(entry!.id).tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${styleId} keeps the full teaching roster`);
    assert.ok(!instruments.has('drums'), `${styleId} does not inherit a generic Western drum kit`);
    assert.ok(instruments.has('bombo-andino'), `${styleId} keeps its native bombo pulse`);
    assert.ok(instruments.has('pan-flute') || instruments.has('mandolin'),
      `${styleId} uses an Andean melodic support color for the added part`);
  }
});

test('traditional Gnawa studies keep guembri and North African percussion colors', () => {
  for (const styleId of ['gnawa-traditional', 'gnawa-lila-trance']) {
    const entry = songCatalog.find(candidate => candidate.styleId === styleId);
    assert.ok(entry, `${styleId} is present`);
    const instruments = new Set(createCatalogSong(entry!.id).tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${styleId} keeps the full teaching roster`);
    assert.ok(!['tenor-sax', 'drums', 'guitar'].some(id => instruments.has(id)),
      `${styleId} does not inherit horn, kit, or rock-guitar filler parts`);
    assert.ok(instruments.has('guembri') && instruments.has('qraqeb')
      && instruments.has('bendir') && instruments.has('tbel'),
    `${styleId} keeps its guembri/qraqeb and native frame-drum colors`);
  }
});

test('Brazilian and Ethio-Jazz sections stay playable with added tenor sax and Kebero', () => {
  const brazilian = makeSheet('brazilian', 'brazilian-samba');
  const targetRegion = brazilian.regions.find(region => region.kind === 'verse')!;
  const mixed = switchSectionWorld(brazilian, targetRegion.id, 'ethiopian');
  assert.equal(mixed.regions.find(region => region.id === targetRegion.id)?.styleId, 'ethiopian-ethio-jazz');

  for (const [instrumentId, expectedRole] of [['tenor-sax', 'lead'], ['kebero', 'percussion']] as const) {
    const withPart = addVoice(mixed, instrumentId, targetRegion.id, 'song');
    const track = withPart.tracks.at(-1)!;
    assert.equal(track.role, expectedRole, `${instrumentId} is normalized into the arrangement role vocabulary`);
    const performance = arrangeBand(withPart);
    const plan = compileSamplePlan(performance, songMixOptions(withPart));
    const sampleTrack = plan.tracks.find(candidate => candidate.id === track.id);
    assert.ok(sampleTrack, `${instrumentId} has a sampled playback track`);
    assert.ok(plan.events.some(event => event.type === 'on' && sampleTrack.channels.includes(event.channel)),
      `${instrumentId} has playable sample events in the mixed Brazilian/Ethio-Jazz song`);
  }
});

test('every catalog sample song builds an audible shared playback plan', () => {
  for (const entry of songCatalog) {
    const song = createCatalogSong(entry.id);
    const roster = new Set(song.tracks.map(track => track.instrumentId).filter((id): id is string => !!id));
    const supports = new Set(auditCatalogSongInstruments(entry.id).supportInstruments);
    assert.ok(roster.size >= 8,
      `${entry.styleId} catalog sample exposes the complete eight-part teaching roster`);
    for (const instrumentId of roster) {
      if (RECORDING_ARRANGEMENTS[entry.referenceKey].activateTeachingSupport === false
        && supports.has(instrumentId)) continue;
      if (instrumentId === 'drums' && supports.has(instrumentId)
        && !styleOwnsInstrumentPattern(entry.genreId, entry.styleId, instrumentId)) continue;
      assert.ok(song.regions.some(region => region.activeInstrumentIds?.includes(instrumentId)),
        `${entry.styleId}/${instrumentId} enters at least one authored section`);
    }
    const performance = arrangeBand(song);
    const plan = compileSamplePlan(performance, songMixOptions(song));
    assert.ok(plan.events.some(event => event.type === 'on'), `${entry.id} must compile to audible sample events`);
    const bodyContacts = performance.notes.filter(note => note.bodyAttack && note.pitchIdentity !== 'unpitched').length;
    assert.equal(plan.events.filter(event => event.type === 'on').length, performance.notes.length + bodyContacts,
      `${entry.id}: every performed note and simultaneous body contact must reach the SoundFont plan`);
    const renderedNotes = new Set(plan.noteLifetimes.map(lifetime => lifetime.note));
    assert.ok(performance.notes.every(note => renderedNotes.has(note)), `${entry.id}: no performed note may be omitted`);
    const activeInstruments = new Set(song.regions.flatMap(region => region.activeInstrumentIds ?? []));
    const onChannels = new Set(plan.events.filter(event => event.type === 'on').map(event => event.channel));
    for (const track of song.tracks) {
      if (!track.instrumentId || !activeInstruments.has(track.instrumentId)) continue;
      const planned = plan.tracks.find(candidate => candidate.id === track.id);
      assert.ok(planned, `${entry.id}/${track.instrumentId} must have a planned SoundFont track`);
      assert.ok(planned!.channels.some(channel => onChannels.has(channel)),
        `${entry.id}/${track.instrumentId} is active in the form but produces no sample event`);
    }

    // An active roster entry must also produce notes in each section where it
    // is supposed to play. Lead parts intentionally rest during an explicit
    // solo policy; account for that policy here so a real data-to-performance
    // omission cannot hide behind a different section's notes.
    for (const region of song.regions) {
      const style = getResolvedSectionStyle(song, region);
      const activeTrackIds = (region.activeInstrumentIds ?? [])
        .map(instrumentId => song.tracks.find(track => track.instrumentId === instrumentId)?.id)
        .filter((id): id is string => !!id);
      const solo = resolveSoloPlan(region, song.tracks, style.contract, activeTrackIds);
      for (const instrumentId of region.activeInstrumentIds ?? []) {
        const track = song.tracks.find(candidate => candidate.instrumentId === instrumentId);
        assert.ok(track, `${entry.id}/${region.kind}/${instrumentId} has a track in the active roster`);
        if (!track) continue;
        if (solo && !supportsSolo(solo, track, soloistAtBar(solo, region, region.start, style.contract.cycleLength))) continue;
        const sectionNotes = performance.notes.filter(note => note.trackId === track.id
          && note.bar >= region.start && note.bar < region.end);
        assert.ok(sectionNotes.length > 0,
          `${entry.id}/${region.kind}/${instrumentId} is active but emits no notes in its section`);
      }
    }
  }
});

test('Ethiopian songs accept a foreign-style section and that style’s instrument', () => {
  const base = makeSheet('ethiopian');
  const baseInstruments = new Set(getStyle(base.styleId!)!.arrangement!.ensemble!.flatMap(part => part.instrumentIds));
  const region = base.regions.find(section => section.kind === 'verse') ?? base.regions[0];
  const checkedWorlds = new Set<string>();

  for (const world of GENRE_WORLDS.filter(candidate => candidate.id !== 'ethiopian')) {
    const targetStyle = world.styleDefinitions
      .map(definition => getStyle(definition.id)!)
      .find(style => style.arrangement?.ensemble?.some(part => part.instrumentIds.some(id => !baseInstruments.has(id))))
      ?? getStyle(world.styleDefinitions[0].id)!;
    const part = targetStyle.arrangement!.ensemble!.flatMap(item => item.instrumentIds)
      .find(id => !baseInstruments.has(id))
      ?? targetStyle.arrangement!.ensemble!.flatMap(item => item.instrumentIds)[0];
    assert.ok(part, `${world.id} has an instrument for the mixed-style playback check`);

    const mixed = switchSectionWorld(base, region.id, world.id, targetStyle.id);
    const withPart = addVoice(mixed, part, region.id, 'song');
    const performance = arrangeBand(withPart);
    const plan = compileSamplePlan(performance, songMixOptions(withPart));
    const track = plan.tracks.find(candidate => candidate.id === withPart.tracks.at(-1)!.id);
    assert.ok(track && plan.events.some(event => event.type === 'on' && track.channels.includes(event.channel)),
      `Ethiopian + ${world.id}/${targetStyle.id} with ${part} must have audible playback events`);
    checkedWorlds.add(world.id);
  }
  assert.equal(checkedWorlds.size, GENRE_WORLDS.length - 1, 'the fusion audit covers every non-Ethiopian genre');
});

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

test('streaming reference lists cover every catalog style with distinct linked candidates', () => {
  for (const world of GENRE_WORLDS) {
    const path = `docs/genres/${world.id}/references.json`;
    assert.ok(existsSync(path), `${world.id} needs a streaming reference list`);
    const document = JSON.parse(readFileSync(path, 'utf8')) as {
      genreId?: string;
      references?: Array<{ styleId: string; compare?: string[]; recordings?: Array<{ url: string }> }>;
    };
    assert.equal(document.genreId, world.id, `${world.id} reference list declares its genre`);
    assert.ok(Array.isArray(document.references), `${world.id} uses the canonical references array`);
    const rows = document.references;
    const catalogStyleIds = new Set(world.styleDefinitions.map(style => style.id));
    const coveredStyleIds = new Set<string>();
    for (const row of rows) {
      assert.ok(catalogStyleIds.has(row.styleId), `${world.id}/${row.styleId} must match the canonical style ID`);
      assert.ok(!coveredStyleIds.has(row.styleId), `${world.id}/${row.styleId} must have one reference row`);
      coveredStyleIds.add(row.styleId);
      const compareCues = row.compare ?? [];
      assert.ok(compareCues.length >= 3, `${world.id}/${row.styleId} needs at least three style-specific comparison cues`);
      assert.ok(compareCues.every(cue => cue.trim()), `${world.id}/${row.styleId} comparison cues must be readable`);
      assert.equal(new Set(compareCues.map(cue => cue.trim().toLocaleLowerCase())).size, compareCues.length,
        `${world.id}/${row.styleId} comparison cues must be distinct`);
      const urls = (row.recordings ?? []).map(recording => recording.url);
      assert.ok(urls.length >= 5 && urls.length <= 8, `${world.id}/${row.styleId} needs 5–8 linked recordings`);
      assert.ok(urls.every(url => /^https:\/\//.test(url)), `${world.id}/${row.styleId} links must be streaming URLs`);
      assert.equal(new Set(urls).size, urls.length, `${world.id}/${row.styleId} recordings must use distinct links`);
    }
    assert.deepEqual([...coveredStyleIds].sort(), [...catalogStyleIds].sort(),
      `${world.id} reference rows must cover every catalog style exactly once`);
  }
});

test('catalog cells without authored durations keep performer-derived gates',()=>{
  const pattern=PATTERNS_BY_ID['afrobeat-classic-afrobeat-pattern-8-interlocking-guitar-and-horn-vamp-kit'];
  assert(pattern,'the Afrobeat kit source cell remains in the pattern catalog');
  assert.equal(pattern.durationGrid,undefined,
    'an omitted duration is not converted into a synthetic one-step note-off');
  assert(pattern.events?.every(event=>event.duration===undefined),
    'pattern event metadata stays honest when no gate was authored');

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

test('every pattern keeps per-onset compatibility arrays aligned with its authored attacks', () => {
  const fields = ['hitGrid', 'durationGrid', 'accentProfile', 'velocityProfile'] as const;
  type OnsetArrayOwner = { id: string; onsetGrid: number[]; hitGrid?: unknown[]; durationGrid?: number[]; accentProfile?: number[]; velocityProfile?: number[] };
  const check = (pattern: OnsetArrayOwner, label: string) => {
    for (const field of fields) {
      const values = pattern[field];
      if (values) assert.equal(values.length, pattern.onsetGrid.length,
        `${label}/${pattern.id} ${field} must align with onsetGrid`);
      if (field === 'durationGrid' && values) assert.ok(values.every(value => typeof value === 'number' && Number.isFinite(value) && value > 0),
        `${label}/${pattern.id} must not manufacture a duration for an unspecified gate`);
      if (field === 'hitGrid' && values) assert.ok(values.some(Boolean),
        `${label}/${pattern.id} must not expose an empty hit grid`);
    }
  };
  for (const pattern of ALL_PATTERNS) {
    check(pattern, 'pattern');
    for (const variant of pattern.variants) check(variant, 'variant');
  }
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

test('Weird style samples keep their own form, pitch logic, and playable source cells', () => {
  const world = GENRE_WORLDS.find(candidate => candidate.id === 'weird')!;
  const styles = world.styleDefinitions;
  const forms = new Set(styles.map(style => JSON.stringify(style.arrangementSections?.map(section => [section.label, section.bars]))));
  assert.equal(forms.size, styles.length, 'experimental substyles should not inherit one generic five-part form');
  const progressions = new Set(styles.map(style => JSON.stringify(style.sectionProgressions)));
  assert.ok(progressions.size >= 14, 'pitch plans should match the individual experimental process');
  for (const style of styles) {
    const source = ALL_PATTERNS.filter(pattern => pattern.styleIds?.includes(style.id)
      && pattern.sourceLevel === 'style-authored');
    assert.ok(source.length >= 2, `${style.id} needs multiple authored playable cells`);
    const signatures = new Set(source.map(pattern => JSON.stringify(pattern.events?.map(event => [event.position, event.duration, event.hitType]))));
    assert.ok(signatures.size >= 2, `${style.id} needs at least two distinct cells`);
  }
  assert.doesNotMatch(styles.find(style => style.id === 'weird-glitch')!.description, /gated fragments/i);
  assert.match(styles.find(style => style.id === 'weird-piano')!.description, /sampled acoustic-piano bank/i,
    'prepared piano must disclose that the current bank does not model physical preparations');
  const microtonal = ALL_PATTERNS.find(pattern => pattern.styleIds?.includes('weird-microtonal')
    && pattern.shortName === 'Quarter-tone cell')!;
  assert.deepEqual(microtonal.events?.map(event => event.pitch?.cents), [undefined, -50, 50, undefined]);
  const generative = ALL_PATTERNS.find(pattern => pattern.styleIds?.includes('weird-process-generative')
    && pattern.shortName === 'Seed cell')!;
  assert.ok(generative.events?.some(event => event.probability !== undefined && event.probability < 1),
    'generative changes should come from authored conditional events, not an invented chord loop');
  const kit = ALL_PATTERNS.find(pattern => pattern.styleIds?.includes('weird-no-wave')
    && pattern.shortName === 'Uneven kit')!;
  assert.deepEqual(kit.events?.map(event => event.hitType), ['kick', 'hat', 'snare', 'hat', 'kick', 'snare']);
  assert.ok((styles.find(style => style.id === 'weird-drone')!.calibration?.mix?.character?.dryness ?? 1)
    < (styles.find(style => style.id === 'weird-piano')!.calibration?.mix?.character?.dryness ?? 0),
  'long drones need a spacious mix while the piano attacks remain dry');
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
      && candidate.sourceLevel === 'style-authored');
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
      && candidate.sourceLevel === 'style-authored' && !candidate.sectionUsage
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
  assert.equal(trumpet.shortName, 'Cool Trumpet');
  assert.ok(cool.calibration?.roles.lead?.preferredInstruments.includes('trumpet'));
  assert.equal(cool.instrumentDialects?.['drums:percussion']?.variantId, 'brush-kit');
});

test('country teaching patterns come from their own genre and style catalogs', () => {
  const country = GENRE_WORLDS.find(world => world.id === 'country')!;
  for (const instrument of ['violin', 'banjo', 'pedal-steel']) {
    const patterns = country.patterns.filter(pattern => pattern.instruments?.includes(instrument));
    assert.ok(patterns.length >= 2, `${instrument} needs multiple country-authored patterns`);
    assert.ok(patterns.every(pattern => pattern.worldId === 'country' && pattern.sourceLevel === 'style-authored'));
  }
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
      assert.ok(choices.length >= 1, `${entry.styleId}/${instrument} needs a complete authored part`);
      assert.equal(new Set(labels).size, labels.length, `${entry.styleId}/${instrument} needs distinct visible pattern labels`);
      checkedParts++;
    }
    assert.ok(checkedParts > 0, `${entry.styleId} has no audited song parts`);
  }
});

test('sample vocals are explicit and enter only in the sung sections', () => {
  const modernBlues = createCatalogSong('blues-modern-blues_song');
  assert.ok(!modernBlues.tracks.some(track => track.instrumentId === 'voice'),
    'a guitar-led blues arrangement does not inherit a sustained-vowel lead from the style palette');

  const bossa = createCatalogSong('brazilian-bossa-nova_song');
  assert.ok(!bossa.tracks.some(track => track.instrumentId === 'voice'),
    'the instrumental bossa score stays instrumental as its arrangement note specifies');

  const muwashshah = createCatalogSong('arabic-muwashshah_song');
  assert.ok(muwashshah.tracks.some(track => track.instrumentId === 'voice'));
  const activeVocalSections = muwashshah.regions
    .filter(region => region.activeInstrumentIds?.includes('voice'))
    .map(region => region.kind);
  assert.deepEqual(activeVocalSections, ['stanza', 'refrain', 'stanza', 'refrain'],
    'the sung lines stay in the poem stanzas and group refrain, leaving the prelude, taqsim and coda instrumental');
  assert.deepEqual(RECORDING_ARRANGEMENTS['arabic::muwashshah']?.vocalSections, ['stanza', 'refrain']);
});

test('cinematic sample scores stage distinct ensembles and section-specific cells', () => {
  const samples = Object.fromEntries(songCatalog.filter(entry => entry.genreId === 'cinematic')
    .map(entry => [entry.styleId, createCatalogSong(entry.id)]));
  const active = (styleId: string, kind: string, occurrence = 0) => {
    const regions = samples[styleId].regions.filter(region => region.kind === kind);
    assert.ok(regions[occurrence], `${styleId} needs a ${kind} section`);
    return regions[occurrence].activeInstrumentIds ?? [];
  };
  const roster = (styleId: string) => auditCatalogSongInstruments(`${styleId}_song`).instruments;

  for (const styleId of ['cinematic-golden-age', 'cinematic-hybrid', 'cinematic-epic']) {
    const ids = roster(styleId);
    assert.ok(ids.length >= 8, `${styleId} exposes the full orchestral teaching roster`);
    assert.ok(ids.includes('cello') && ids.includes('string-ensemble'), `${styleId} keeps its core strings`);
  }
  assert.ok(!roster('cinematic-minimal-tension').some(id => ['french-horn','timpani'].includes(id)));
  assert.ok(!roster('cinematic-ambient-score').some(id => ['french-horn','timpani'].includes(id)));

  assert.deepEqual(active('cinematic-modern-score', 'opening').sort(), ['piano','synth']);
  assert.equal(active('cinematic-modern-score', 'climax').length, 6);
  assert.ok(active('cinematic-golden-age', 'B').length < active('cinematic-golden-age', 'A').length);
  assert.deepEqual(active('cinematic-epic', 'break'), [], 'the epic stop is a full-band rest');
  assert.deepEqual(active('cinematic-ambient-score', 'opening').sort(), ['string-ensemble','synth']);

  for (const [styleId, song] of Object.entries(samples)) {
    const signatures = song.regions.map(region => Object.entries(song.arrangement[region.id] ?? {})
      .filter(([, patternId]) => patternId !== 'silent')
      .map(([trackId, patternId]) => `${song.tracks.find(track => track.id === trackId)?.instrumentId}:${PATTERNS_BY_ID[patternId]?.shortName ?? patternId}`).join('|'));
    assert.ok(new Set(signatures).size > 1, `${styleId} changes its authored ensemble cells across sections`);
  }
});

test('Modern Score gives its added Violin a bowed answer instead of a piano contour', () => {
  const sheet = createCatalogSong('cinematic-modern-score_song');
  const violin = sheet.tracks.find(track => track.instrumentId === 'violin');
  assert.ok(violin, 'the Modern Score sample reaches its full roster with Violin');
  const build = sheet.regions.find(region => region.kind === 'build'
    && region.activeInstrumentIds?.includes('violin'));
  assert.ok(build, 'Violin enters the authored build ensemble');
  const pattern = PATTERNS_BY_ID[sheet.arrangement[build!.id]?.[violin!.id] ?? ''];
  assert.equal(pattern?.shortName, 'Violin score answer');
  assert.deepEqual(pattern?.instruments, ['violin']);
  assert.ok(pattern?.events?.every(event => event.articulation === 'legato'),
    'the added Violin keeps a connected bowed articulation');
});

test('cinematic support colors keep instrument-owned cells in Minimal Tension and Ambient Score', () => {
  for (const styleId of ['cinematic-minimal-tension', 'cinematic-ambient-score']) {
    const sheet = createCatalogSong(`${styleId}_song`);
    for (const instrumentId of ['violin', 'harp', 'oboe', 'flute']) {
      const track = sheet.tracks.find(candidate => candidate.instrumentId === instrumentId);
      assert.ok(track, `${styleId} exposes ${instrumentId}`);
      const activeRegion = sheet.regions.find(region => region.activeInstrumentIds?.includes(instrumentId));
      assert.ok(activeRegion, `${styleId} stages ${instrumentId} in a full ensemble section`);
      const pattern = PATTERNS_BY_ID[sheet.arrangement[activeRegion!.id]?.[track!.id] ?? ''];
      assert.ok(pattern?.instruments?.includes(instrumentId), `${styleId}/${instrumentId} keeps its own phrase cell`);
    }
  }
});

test('Tango added colors keep their own bowed and bandoneon phrases', () => {
  const golden = createCatalogSong('tango-golden-age_song');
  const cello = golden.tracks.find(track => track.instrumentId === 'cello');
  assert.ok(cello);
  const celloRegion = golden.regions.find(region => region.activeInstrumentIds?.includes('cello'));
  const celloPattern = PATTERNS_BY_ID[golden.arrangement[celloRegion!.id]?.[cello!.id] ?? ''];
  assert.equal(celloPattern?.shortName, 'Cello counterline');
  assert.deepEqual(celloPattern?.instruments, ['cello']);

  const chacarera = createCatalogSong('tango-chacarera-crossover_song');
  const bandoneon = chacarera.tracks.find(track => track.instrumentId === 'bandoneon');
  assert.equal(bandoneon?.role, 'lead');
  const bandoneonRegion = chacarera.regions.find(region => region.activeInstrumentIds?.includes('bandoneon'));
  const bandoneonPattern = PATTERNS_BY_ID[chacarera.arrangement[bandoneonRegion!.id]?.[bandoneon!.id] ?? ''];
  assert.deepEqual(bandoneonPattern?.instruments, ['bandoneon']);
});

test('Bass and Electronic expansions keep added production players on their own cells', () => {
  for (const entry of songCatalog.filter(candidate => ['bass', 'electronic'].includes(candidate.genreId))) {
    const sheet = createCatalogSong(entry.id);
    for (const track of sheet.tracks) {
      if (!['bass', 'rhodes', 'turntable', 'piano', 'guitar', 'synth-bass', 'sampler'].includes(track.instrumentId ?? '')) continue;
      const activeRegion = sheet.regions.find(region => region.activeInstrumentIds?.includes(track.instrumentId ?? ''));
      if (!activeRegion) continue;
      const pattern = PATTERNS_BY_ID[sheet.arrangement[activeRegion.id]?.[track.id] ?? ''];
      assert.ok(pattern?.instruments?.includes(track.instrumentId ?? ''),
        `${entry.styleId}/${track.instrumentId} does not inherit a neighboring production cell`);
    }
  }
});

test('Celtic jig patterns honor 6/8 tune phrasing and keep the bodhrán under the melody', () => {
  const styleId = 'folk-celtic';
  const source = (shortName: string, instrumentId: string) => {
    const pattern = ALL_PATTERNS.find(candidate => candidate.shortName === shortName
      && candidate.styleIds?.includes(styleId) && candidate.instruments?.includes(instrumentId));
    assert.ok(pattern, `${instrumentId} needs the Celtic ${shortName} study`);
    assert.equal(pattern.meter, '6/8');
    assert.ok(pattern.events?.length, `${instrumentId}/${shortName} must retain its authored attacks`);
    return pattern;
  };

  const violin = source('Jig eighths', 'violin');
  const whistle = source('Whistle unison', 'tin-whistle');
  const jigGrid = [0, 2, 4, 6, 8, 10];
  assert.deepEqual(violin.onsetGrid, jigGrid, 'the fiddle plays all six eighth-note positions');
  assert.deepEqual(whistle.onsetGrid, jigGrid, 'the whistle can double the fiddle tune in unison');

  const guitar = source('Guitar pulse', 'guitar');
  assert.deepEqual(guitar.onsetGrid, [0, 6], 'guitar marks the two dotted-quarter pulses instead of a constant offbeat loop');
  const bouzouki = source('Bouzouki drone', 'bouzouki');
  assert.deepEqual(bouzouki.onsetGrid, [0], 'bouzouki holds a quiet open-string color without doubling every guitar stroke');

  const bodhran = source('Bodhrán pulse', 'bodhran');
  assert.deepEqual(bodhran.onsetGrid, jigGrid);
  assert.ok(bodhran.accentProfile, 'bodhrán dynamics need an authored two-pulse accent profile');
  assert.ok(bodhran.accentProfile[0] > 0.85 && bodhran.accentProfile[3] > 0.75);
  for (const index of [1, 2, 4, 5]) assert.ok(bodhran.accentProfile[index] < 0.6,
    'the four connecting strokes remain light so they do not obscure the tune');

  const turns = [
    ['Fiddle turn', 'violin', 'ending'], ['Whistle pickup', 'tin-whistle', 'ending'],
    ['Guitar pickup', 'guitar', 'transition'], ['Bouzouki answer', 'bouzouki', 'ending'],
    ['Bodhrán roll', 'bodhran', 'ending'],
  ] as const;
  for (const [name, instrument, usage] of turns) {
    const turn = source(name, instrument);
    assert.ok(turn.sectionUsage?.includes(usage),
      `${name} is a local strain or cadence gesture, not the same three-hit close on every part`);
    assert.ok(!turn.description?.includes('neutral '), `${name} keeps its style-specific teaching description`);
  }
});

test('localized song-form labels keep phrase variations playable in the arrangement', () => {
  for (const [source, canonical] of [
    ['call', 'verse'], ['response', 'chorus'], ['head', 'verse'], ['sax soli', 'solo'],
    ['estribillo', 'chorus'], ['copla', 'verse'],
  ] as const) assert.equal(canonicalPatternSection(source), canonical);

  const broadVariation = ALL_PATTERNS.find(pattern => pattern.styleIds?.includes('latin-cumbia')
    && pattern.instruments?.includes('bass') && pattern.roles?.includes('bass')
    && pattern.arrangementVariation && pattern.sectionUsage?.length === 4);
  assert.ok(broadVariation);
  assert.ok(patternAvailableInSection(broadVariation!, 'call'), 'generic source-derived variation can follow a local call section');
  const soloOnly = { ...broadVariation!, sectionUsage: ['solo'] as const };
  assert.ok(!patternAvailableInSection({ ...soloOnly, sectionUsage: ['solo'] }, 'call'), 'an explicitly solo-scoped study stays in the solo section');

  for (const styleId of ['latin-cumbia', 'jazz-big-band', 'mexican-norteno', 'salsa-salsa-calena']) {
    const entry = songCatalog.find(candidate => candidate.styleId === styleId)!;
    const song = createCatalogSong(entry.id);
    assert.ok(song.measures.some(measure => Object.values(measure.patternDetailsByTrack ?? {}).some(detail =>
      PATTERNS_BY_ID[detail.patternId]?.arrangementVariation)),
    `${styleId} should use its authored phrase changes instead of repeating only the section starter`);
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
      assert.ok(declared.size > 0 && [...declared].every(id => instruments.includes(id)), 'the drone song keeps every named reference player');
      assert.ok(new Set(instruments).size >= 8, 'catalog samples expose the full teaching ensemble');
    }
  }
});

test('traditional tango and flamenco samples expose a full teaching ensemble', () => {
  for (const styleId of ['tango-canaro', 'tango-di-sarli', 'flamenco-solea', 'flamenco-sevillanas']) {
    const entry = songCatalog.find(song => song.styleId === styleId)!;
    const audit = auditCatalogSongInstruments(entry.id);
    assert.ok(audit.instruments.length >= 8, `${styleId} should expose at least eight playable instruments`);
    assert.ok(audit.supportInstruments.length > 0, `${styleId} should use explicit world roster additions`);
  }
});

test('traditional tango roster additions stay acoustic rather than inheriting crossover patches', () => {
  for (const styleId of ['tango-golden-age', 'tango-canaro', 'tango-di-sarli', 'tango-troilo', 'tango-pugliese']) {
    const entry = songCatalog.find(song => song.styleId === styleId)!;
    const audit = auditCatalogSongInstruments(entry.id);
    assert.ok(!audit.supportInstruments.some(instrument => ['synth', 'sampler', 'drums'].includes(instrument)),
      `${styleId} should not use electronic or drum-kit support additions`);
    assert.ok(audit.instruments.length >= 8, `${styleId} keeps the complete teaching roster`);
  }
});

test('traditional flamenco roster additions stay inside compás colors rather than jazz or rock patches', () => {
  const traditional = ['flamenco-solea', 'flamenco-bulerias', 'flamenco-alegrias', 'flamenco-seguiriya',
    'flamenco-tientos', 'flamenco-tonas-martinetes', 'flamenco-granaina', 'flamenco-malaguena', 'flamenco-sevillanas'];
  for (const styleId of traditional) {
    const entry = songCatalog.find(song => song.styleId === styleId)!;
    const audit = auditCatalogSongInstruments(entry.id);
    assert.ok(!audit.supportInstruments.some(instrument => ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'].includes(instrument)),
      `${styleId} should not use unrelated jazz, rock, or electronic support additions`);
    assert.ok(audit.supportInstruments.some(instrument => ['castanets', 'zapateado', 'flute', 'shaker', 'hand-percussion'].includes(instrument)),
      `${styleId} should expose a compás-native support color`);
    assert.ok(audit.instruments.length >= 8, `${styleId} keeps the complete teaching roster`);
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
    assert.ok(selected.every(pattern => pattern?.sourceLevel === 'style-authored'
      && pattern.styleIds?.includes(song.styleId!)), 'every selected phrase belongs to its written style');
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
    const roster = new Set(song.tracks.map(track => track.instrumentId));
    assert.ok(roster.has('voice') && roster.has('guitar'));
    assert.ok(roster.size >= 8, `${styleId} exposes the full teaching roster while retaining cante and guitar`);
    assert.equal(recording.lead, 'voice');
    assert.equal(recording.instruments?.includes('cajon'), false);
    assert.ok(Object.values(recording.solos ?? {}).every(instrument => instrument === 'guitar'));
    assert.ok(song.regions.some(region => region.kind === 'cante'));
    const guitarTrack = song.tracks.find(track => track.instrumentId === 'guitar')!;
    assert.ok(song.regions.some(region => region.solo?.trackIds.includes(guitarTrack.id)), `${styleId} should expose its guitar feature`);
  }
});

test('Amapiano examples change section cells and let crossover synth roles play independently', () => {
  const amapianoExamples = songCatalog.filter(entry => entry.genreId === 'amapiano');
  assert.equal(amapianoExamples.length, 7);
  for (const entry of amapianoExamples) {
    const recording = RECORDING_ARRANGEMENTS[entry.referenceKey];
    assert.ok(Object.keys(recording.patternAssignments ?? {}).length >= 5, `${entry.referenceKey} needs developed section cells`);
    createCatalogSong(entry.id);
  }

  const entry = amapianoExamples.find(example => example.styleId === 'amapiano-gqom-crossover')!;
  const song = createCatalogSong(entry.id);
  const drop = song.regions.find(region => region.kind === 'drop')!;
  const lead = song.tracks.find(track => track.instrumentId === 'synth' && track.role === 'lead')!;
  const bass = song.tracks.find(track => track.instrumentId === 'synth' && track.role === 'bass')!;
  const leadPatternId = song.arrangement[drop.id][lead.id];
  const bassPatternId = song.arrangement[drop.id][bass.id];
  assert.equal(PATTERNS_BY_ID[bassPatternId].shortName, 'Low anchor');
  assert.notEqual(leadPatternId, bassPatternId);
});

test('Ambient examples develop their own sections and Dark Ambient keeps its sparse metallic part', () => {
  const ambientExamples = songCatalog.filter(entry => entry.genreId === 'ambient');
  assert.equal(ambientExamples.length, 9);
  for (const entry of ambientExamples) {
    const recording = RECORDING_ARRANGEMENTS[entry.referenceKey];
    assert.ok(Object.keys(recording.patternAssignments ?? {}).length >= 4, `${entry.referenceKey} needs section-specific parts`);
    createCatalogSong(entry.id);
  }

  const darkStyle = getStyle('ambient-dark-ambient')!;
  assert.deepEqual(darkStyle.instrumentDialects?.['sampler:percussion']?.samplePalette, [53, 52]);
  const dark = createCatalogSong('ambient-dark-ambient_song');
  const descent = dark.regions.find(region => region.kind === 'descent')!;
  const ritual = dark.regions.find(region => region.kind === 'ritual')!;
  const voidSection = dark.regions.find(region => region.kind === 'void')!;
  const sampler = dark.tracks.find(track => track.instrumentId === 'sampler')!;
  assert.ok(sampler);
  assert.equal(PATTERNS_BY_ID[dark.arrangement[descent.id][sampler.id]]?.shortName, 'Ride-bell toll');
  assert.equal(PATTERNS_BY_ID[dark.arrangement[ritual.id][sampler.id]]?.shortName, 'China-cymbal bloom');
  assert.equal(dark.arrangement[voidSection.id][sampler.id], 'silent', 'the metallic part leaves the void exposed');
});

test('every style has one complete example and removed examples cannot be loaded', () => {
  assert.equal(songCatalog.length, ALL_STYLES.length);
  assert.equal(new Set(songCatalog.map(entry => entry.styleId)).size, ALL_STYLES.length);
  for (const entry of songCatalog) {
    assert.equal(catalogIdForStyle(entry.styleId), entry.id);
    const song = createCatalogSong(entry.id);
    assert.ok(song, `${entry.styleId} example should build a playable catalog song`);
    for (const [regionId, parts] of Object.entries(song.arrangement)) for (const patternId of Object.values(parts)) {
      const pattern = PATTERNS_BY_ID[patternId];
      assert.ok(patternId === 'silent' || pattern?.sourceLevel === 'style-authored',
        `${entry.styleId}/${regionId}/${patternId}: examples use full authored parts`);
      assert.ok(!pattern?.provenance?.startsWith('Generic phrase-close'),
        `${entry.styleId}/${regionId}/${pattern?.shortName ?? patternId}: neutral timing drills must not become style cadences`);
      assert.ok(!pattern?.provenance?.startsWith('Recomposition of'),
        `${entry.styleId}/${regionId}/${pattern?.shortName ?? patternId}: private turnaround drills must not become complete sample sections`);
    }
  }
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

test('the catalog exposes authored parts without generated practice choices or legacy timing placeholders', () => {
  for (const pattern of ALL_PATTERNS) {
    assert.equal(pattern.sourceLevel, 'style-authored', `${pattern.id} has an authored musical source`);
    assert.doesNotMatch(pattern.id, /foundation-pulse-study|phrase-answer-study|opening-motif-development|anchor-re-entry-study|turnaround-study|technique-study/,
      `${pattern.id} is not a generated practice alias`);
    assert.ok(!('pedagogicalStudy' in pattern) && !('pedagogicalSourcePatternId' in pattern),
      `${pattern.id} does not carry removed practice classification`);
    assert.ok(!pattern.provenance?.startsWith('Generic phrase-close'), `${pattern.id} is not a neutral timing placeholder`);
  }
});
