import { mkdirSync, writeFileSync } from 'node:fs';
import { GENRE_WORLDS } from '../src/data/genres/index.ts';
import { INSTRUMENTS_BY_ID } from '../src/data/instruments/index.ts';
import { getCanonicalStyle, resolveStyle, ALL_STYLES } from '../src/engine/style/index.ts';
import { STYLE_FORM_TEMPLATES } from '../src/data/styles/styleFormTemplates.ts';
import { ALL_PATTERNS } from '../src/data/genres/index.ts';
import { makeSheet } from '../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';

const root = 'audit/catalog-schemas';
const genresDir = `${root}/genres`;
const startersDir = `${root}/starters`;
const stylesDir = `${root}/styles`;
const styleInstancesDir = `${root}/style-instances`;
mkdirSync(genresDir, { recursive: true });
mkdirSync(startersDir, { recursive: true });
mkdirSync(stylesDir, { recursive: true });
mkdirSync(styleInstancesDir, { recursive: true });
const errors: string[] = [];
const styleIds = new Set(ALL_STYLES.map(s => s.id));
const starterCatalog: Array<Record<string, unknown>> = [];

for (const world of GENRE_WORLDS) {
  const styles = world.styleDefinitions ?? [];
  for (const style of styles) {
    if (!styleIds.has(style.id)) errors.push(`${world.id}: style ${style.id} is not registered`);
    if (style.worldId !== world.id) errors.push(`${world.id}: ${style.id} points at ${style.worldId}`);
    if (!STYLE_FORM_TEMPLATES[style.id]?.length) errors.push(`${style.id}: missing form template`);
    for (const instrumentId of style.characteristicInstruments ?? []) {
      if (typeof instrumentId !== 'string' || !INSTRUMENTS_BY_ID[instrumentId]) errors.push(`${style.id}: unknown instrument ${instrumentId}`);
    }
  }
  const styleNames = new Set(styles.map(style => style.name.toLocaleLowerCase()));
  for (const substyle of world.substyles ?? []) {
    if (!styleNames.has(substyle.toLocaleLowerCase()) && !styles.some(style => style.keySubstyles?.some(key => key.toLocaleLowerCase() === substyle.toLocaleLowerCase()))) {
      errors.push(`${world.id}: substyle ${substyle} has no style reference`);
    }
  }
  const canonical = getCanonicalStyle(world.id);
  const resolved = resolveStyle({ genreId: world.id, styleId: canonical.id });
  const sheet = makeSheet({ genreId: world.id, styleId: canonical.id });
  const performance = compileWholeSong(sheet);
  const trackSchemas = sheet.tracks.map(track => {
    const instrumentId = track.instrumentId ?? '';
    const instrument = INSTRUMENTS_BY_ID[instrumentId];
    const notes = performance.notes.filter(note => note.trackId === track.id);
    const patternIds = [...new Set(sheet.regions.map(region => sheet.arrangement[region.id]?.[track.id]).filter((id): id is string => Boolean(id)))];
    const gestureCounts = Object.fromEntries([...notes.reduce((counts, note) => {
      if (note.gestureCode !== undefined) counts.set(String(note.gestureCode), (counts.get(String(note.gestureCode)) ?? 0) + 1);
      return counts;
    }, new Map<string, number>())].sort(([a], [b]) => a.localeCompare(b)));
    return {
      id: track.id,
      instrumentId,
      instrumentName: instrument?.name ?? track.instrumentId,
      role: track.role,
      patternIds,
      noteCount: notes.length,
      techniqueIds: instrument?.techniques && typeof instrument.techniques === 'object' ? Object.keys(instrument.techniques) : [],
      articulationIds: instrument?.performanceArticulations && typeof instrument.performanceArticulations === 'object' ? Object.keys(instrument.performanceArticulations) : [],
      gestureCounts,
    };
  });
  const usedPatterns = [...new Set(trackSchemas.flatMap(track => track.patternIds))];
  const schema = {
    schemaVersion: 1,
    id: world.id,
    name: world.name,
    family: world.family,
    description: world.description,
    substyles: world.substyles ?? [],
    styleIds: styles.map(style => style.id),
    patternIds: (world.patterns ?? []).map(pattern => pattern.id),
    styleReferenceChecks: styles.map(style => ({
      id: style.id,
      name: style.name,
      keySubstyles: style.keySubstyles ?? [],
      characteristicInstruments: style.characteristicInstruments ?? [],
      hasFormTemplate: Boolean(STYLE_FORM_TEMPLATES[style.id]),
    })),
    defaultStarterId: `${world.id}-starter`,
  };
  const starter = {
    schemaVersion: 1,
    id: `${world.id}-starter`,
    genreId: world.id,
    genreName: world.name,
    styleId: canonical.id,
    styleName: canonical.name,
    styleDescription: resolved.summary,
    bpm: sheet.bpm,
    meter: sheet.timeSignature,
    regions: sheet.regions.map(region => ({
      id: region.id,
      name: region.name,
      type: region.kind,
      genreId: region.genre ?? world.id,
      styleId: region.styleId ?? canonical.id,
      chords: region.chords ?? [],
    })),
    tracks: trackSchemas,
    usedPatternIds: usedPatterns,
    performance: {
      durationSeconds: performance.duration,
      noteCount: performance.notes.length,
      trackCount: sheet.tracks.length,
      tracksWithNoNotes: trackSchemas.filter(track => track.noteCount === 0).map(track => track.instrumentId),
    },
  };
  starterCatalog.push({ id: `${world.id}-starter`, name: `${world.name}: ${canonical.name}`, genreId: world.id, styleId: canonical.id, bpm: sheet.bpm, instruments: sheet.tracks.map(track => track.instrumentId) });
  if (sheet.tracks.length !== 8) errors.push(`${world.id}: starter has ${sheet.tracks.length} tracks (expected exactly 8)`);
  if (trackSchemas.some(track => !INSTRUMENTS_BY_ID[track.instrumentId])) errors.push(`${world.id}: starter has unknown instrument`);
  if (trackSchemas.some(track => track.noteCount === 0)) errors.push(`${world.id}: starter includes silent track`);
  if (!usedPatterns.length) errors.push(`${world.id}: starter has no referenced patterns`);
  const patternIds = new Set(ALL_PATTERNS.map(pattern => pattern.id));
  for (const patternId of usedPatterns) if (!patternIds.has(patternId)) errors.push(`${world.id}: starter references unknown pattern ${patternId}`);
  writeFileSync(`${genresDir}/${world.id}.json`, `${JSON.stringify(schema, null, 2)}\n`);
  writeFileSync(`${startersDir}/${world.id}.json`, `${JSON.stringify(starter, null, 2)}\n`);
  console.log(`${world.id}: ${styles.length} styles; 8 tracks; ${usedPatterns.length} patterns; ${performance.notes.length} notes`);
}
for (const style of ALL_STYLES) {
  try {
    const sheet = makeSheet({ genreId: style.primaryGenre, styleId: style.id });
    const performance = compileWholeSong(sheet);
    const trackSchemas = sheet.tracks.map(track => {
      const notes = performance.notes.filter(note => note.trackId === track.id);
      const patternIds = [...new Set(sheet.regions.map(region => sheet.arrangement[region.id]?.[track.id]).filter((id): id is string => Boolean(id)))];
      return {
        trackId: track.id,
        instrumentId: track.instrumentId ?? '',
        role: track.role,
        patternIds,
        noteCount: notes.length,
      };
    });
    const usedPatternIds = [...new Set(trackSchemas.flatMap(track => track.patternIds))];
    const song = {
      schemaVersion: 2,
      genre: sheet.worldId,
      styleId: style.id,
      styleName: style.name,
      durationSec: performance.duration,
      tempoBpm: sheet.bpm,
      meter: sheet.timeSignature,
      sections: sheet.regions.map(region => ({
        id: region.id, key: region.formKey ?? region.id, kind: region.kind, label: region.name,
        bars: region.bars, intensity: region.intensity, chords: region.chords ?? [],
      })),
      tracks: trackSchemas,
      patterns: usedPatternIds.map(id => {
        const pattern = ALL_PATTERNS.find(candidate => candidate.id === id);
        return {
          id, name: pattern?.name ?? id, worldId: pattern?.worldId ?? sheet.worldId,
          meter: pattern?.meter, subdivisions: pattern?.subdivisions, onsetGrid: pattern?.onsetGrid ?? [],
          techniques: pattern?.techniques ?? [],
        };
      }),
      sonicFeatures: {
        characteristicInstruments: style.sound?.instrumentPalette?.map(item => item.value) ?? [],
        techniques: style.techniques ?? [],
        signatureCell: style.rhythm?.signatureCell ?? '',
        tempoRange: style.rhythm?.tempoRange ?? [],
        preferredMeters: style.form?.preferredMeters ?? [],
        microtimingFeel: style.rhythm?.microtimingFeel ?? 'straight',
        swingPercentage: style.rhythm?.swingPercentage ?? 0,
        anticipationOffsetSteps: style.rhythm?.anticipationOffsetSteps ?? 0,
      },
      references: { artists: style.referenceArtists ?? [], tracks: style.referenceTracks ?? [] },
      render: { status: 'compiled', renderer: 'MixGenres compileWholeSong', sourceStyleId: style.id },
      performance: { noteCount: performance.notes.length, trackCount: sheet.tracks.length, usedPatternIds },
    };
    const schema = {
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      $id: `https://mixgenres.local/schema/catalog-style/${style.id}.schema.json`,
      title: `MixGenres ${style.name} Song Schema`,
      type: 'object', additionalProperties: false,
      required: ['schemaVersion','genre','styleId','styleName','durationSec','tempoBpm','meter','sections','tracks','patterns','sonicFeatures','references','render','performance'],
      properties: {
        schemaVersion: { const: 2 }, genre: { const: sheet.worldId }, styleId: { const: style.id }, styleName: { const: style.name },
        durationSec: { type: 'number', exclusiveMinimum: 0 }, tempoBpm: { type: 'number', exclusiveMinimum: 0 }, meter: { type: 'string' },
        sections: { type: 'array', minItems: 1, items: { type: 'object', additionalProperties: false, required: ['id','key','kind','label','bars','intensity','chords'], properties: { id:{type:'string'}, key:{type:'string'}, kind:{type:'string'}, label:{type:'string'}, bars:{type:'integer',minimum:1}, intensity:{enum:['low','medium','high','peak']}, chords:{type:'array',items:{type:'string'}} } } },
        tracks: { type: 'array', minItems: 8, items: { type:'object', additionalProperties:false, required:['trackId','instrumentId','role','patternIds','noteCount'], properties:{ trackId:{type:'string'}, instrumentId:{type:'string'}, role:{type:'string'}, patternIds:{type:'array',items:{type:'string'}}, noteCount:{type:'integer',minimum:0} } } },
        patterns: { type:'array', items:{ type:'object', additionalProperties:false, required:['id','name','worldId','meter','subdivisions','onsetGrid','techniques'], properties:{ id:{type:'string'}, name:{type:'string'}, worldId:{type:'string'}, meter:{type:'string'}, subdivisions:{type:'integer',minimum:1}, onsetGrid:{type:'array',items:{type:'number',minimum:0}}, techniques:{type:'array',items:{type:'string'}} } } },
        sonicFeatures: { type:'object', additionalProperties:false, required:['characteristicInstruments','techniques','signatureCell','tempoRange','preferredMeters','microtimingFeel','swingPercentage','anticipationOffsetSteps'], properties:{ characteristicInstruments:{type:'array',items:{type:'string'}}, techniques:{type:'array',items:{type:'string'}}, signatureCell:{type:'string'}, tempoRange:{type:'array'}, preferredMeters:{type:'array',items:{type:'string'}}, microtimingFeel:{type:'string'}, swingPercentage:{type:'number'}, anticipationOffsetSteps:{type:'number'} } },
        references: { type:'object', additionalProperties:false, required:['artists','tracks'], properties:{ artists:{type:'array',items:{type:'string'}}, tracks:{type:'array',items:{type:'string'}} } },
        render: { type:'object', additionalProperties:false, required:['status','renderer','sourceStyleId'], properties:{ status:{type:'string'}, renderer:{type:'string'}, sourceStyleId:{const:style.id} } },
        performance: { type:'object', additionalProperties:false, required:['noteCount','trackCount','usedPatternIds'], properties:{ noteCount:{type:'integer',minimum:1}, trackCount:{const:8}, usedPatternIds:{type:'array',items:{type:'string'}} } },
      },
    };
    writeFileSync(`${stylesDir}/${style.id}.schema.json`, `${JSON.stringify(schema, null, 2)}\n`);
    writeFileSync(`${styleInstancesDir}/${style.id}.json`, `${JSON.stringify(song, null, 2)}\n`);
    if (sheet.tracks.length !== 8) errors.push(`${style.id}: runtime starter has ${sheet.tracks.length} tracks`);
    if (!performance.notes.length) errors.push(`${style.id}: compiled style produced zero notes`);
    for (const patternId of usedPatternIds) if (!ALL_PATTERNS.some(pattern => pattern.id === patternId)) errors.push(`${style.id}: unknown runtime pattern ${patternId}`);
  } catch (error) {
    errors.push(`${style.id}: failed to compile schema: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  const source = `/** Template for the canonical starter song catalog. */\nexport interface SongTemplate { id: string; name: string; genreId: string; styleId: string; bpm: number; instruments: string[]; }\n\n/** Canonical, generated starter catalog. Instrument lists are the exact eight-part palette compiled by makeSheet. */\nexport const starterSongs: SongTemplate[] = ${JSON.stringify(starterCatalog, null, 2)};\n`;
  writeFileSync('src/data/songs/starters.ts', source);
  console.log(`Generated ${GENRE_WORLDS.length} genre schemas and ${GENRE_WORLDS.length} starter schemas in ${root}; updated src/data/songs/starters.ts`);
}
