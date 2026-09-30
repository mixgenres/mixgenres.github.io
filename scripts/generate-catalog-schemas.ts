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
mkdirSync(genresDir, { recursive: true });
mkdirSync(startersDir, { recursive: true });
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
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  const source = `/** Template for the canonical starter song catalog. */\nexport interface SongTemplate { id: string; name: string; genreId: string; styleId: string; bpm: number; instruments: string[]; }\n\n/** Canonical, generated starter catalog. Instrument lists are the exact eight-part palette compiled by makeSheet. */\nexport const starterSongs: SongTemplate[] = ${JSON.stringify(starterCatalog, null, 2)};\n`;
  writeFileSync('src/data/songs/starters.ts', source);
  console.log(`Generated ${GENRE_WORLDS.length} genre schemas and ${GENRE_WORLDS.length} starter schemas in ${root}; updated src/data/songs/starters.ts`);
}
