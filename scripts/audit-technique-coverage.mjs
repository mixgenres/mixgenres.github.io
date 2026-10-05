import { access, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { GENRE_WORLDS, ALL_PATTERNS } from '../src/data/genres/index.ts';
import { INSTRUMENT_PERFORMANCE_PROFILES } from '../src/data/performance/instrumentPerformanceProfiles.ts';
import { calibratedTechniqueGestures } from '../src/engine/style/performance-expectations.ts';
import { resolveStyle } from '../src/engine/style/resolve.ts';
import { GESTURE_HINT_ALIASES } from '../src/data/performance/gestureHintAliases.ts';

const norm = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '');
const gestureMatchesCue = (gesture, cue) => {
  const a = norm(gesture), b = norm(cue);
  return a === b || (a.length >= 4 && b.length >= 4 && (a.includes(b) || b.includes(a)))
    || GESTURE_HINT_ALIASES[gesture.replace(/[^a-z0-9]+/gi, '_').toLowerCase()]?.test(cue);
};
const styles = [];
for (const world of GENRE_WORLDS) for (const definition of world.styleDefinitions ?? []) {
  const id = definition.id;
  const style = resolveStyle({ genreId: world.id, styleId: id });
  const patterns = ALL_PATTERNS.filter(pattern => pattern.worldId === world.id && pattern.styleIds?.includes(id));
  const instruments = [];
  for (const [instrumentId, cues] of Object.entries(style.calibration?.instrumentTechniques ?? {})) {
    const profile = INSTRUMENT_PERFORMANCE_PROFILES[instrumentId];
    if (!profile) {
      instruments.push({ id: instrumentId, cues, mappedGestures: [], missingCueMappings: cues, patternGestures: [], calibratedGesturesAbsentFromPattern: [] });
      continue;
    }
    const role = Object.entries(style.calibration?.roles ?? {})
      .find(([, value]) => value.preferredInstruments.includes(instrumentId))?.[0] ?? 'ensemble';
    const mappedGestures = calibratedTechniqueGestures(style, profile, role);
    const patternGestures = [...new Set(patterns.filter(pattern => !pattern.instruments?.length || pattern.instruments.includes(instrumentId))
      .flatMap(pattern => [...(pattern.articulations ?? []), ...(pattern.events ?? []).map(event => event.articulation ?? '')])
      .filter(Boolean))];
    const missingCueMappings = cues.filter(cue => !calibratedTechniqueGestures({ calibration: {
      instrumentTechniques: { [instrumentId]: [cue] }, techniqueMappings: style.calibration?.techniqueMappings,
    } }, profile, role).length);
    instruments.push({ id: instrumentId, cues, mappedGestures, missingCueMappings, patternGestures,
      calibratedGesturesAbsentFromPattern: mappedGestures.filter(gesture => !patternGestures.some(cue => gestureMatchesCue(gesture, cue))) });
  }
  styles.push({ id, genre: world.id, instruments });
}

const sampleRefs = [
  ['chinese-jiangnan-sizhu', 'samples/上海音乐学院教授丝竹研究组 - 欢乐歌.mp3'],
  ['chinese-guqin', 'samples/Guan Pinghu - Liu Shui.mp3'],
  ['salsa-salsa-dura', 'samples/Willie Colón & Héctor Lavoe - Che Che Colé.mp3'],
  ['tango-golden-age', 'samples/Aníbal Troilo - Quejas de Bandoneón.mp3'],
  ['flamenco-solea', 'samples/Camarón de la Isla - De tus ojos soy cautivo.mp3'],
  ['reggaeton-classic', 'samples/Daddy Yankee - Gasolina.mp3'],
].map(([styleId, file]) => ({ styleId, file }));
const mp3References = await Promise.all(sampleRefs.map(async reference => {
  try { await access(resolve(reference.file)); return { ...reference, exists: true }; }
  catch { return { ...reference, exists: false }; }
}));
const selected = new Set(sampleRefs.map(reference => reference.styleId));
const cueRows = styles.flatMap(style => style.instruments.map(instrument => ({ style, instrument })));
const summary = {
  styleCount: styles.length,
  styleInstrumentPairs: cueRows.length,
  authoredCueCount: cueRows.reduce((sum, row) => sum + row.instrument.cues.length, 0),
  mappedCueCount: cueRows.reduce((sum, row) => sum + row.instrument.cues.length - row.instrument.missingCueMappings.length, 0),
  cuesWithoutPlayableGesture: cueRows.reduce((sum, row) => sum + row.instrument.missingCueMappings.length, 0),
  stylesWithNoMappedInstrumentTechnique: styles.filter(style => !style.instruments.some(item => item.mappedGestures.length)).length,
  mappedGesturesNotAuthoredInPatterns: cueRows.reduce((sum, row) => sum + row.instrument.calibratedGesturesAbsentFromPattern.length, 0),
  mp3References,
  focusedStyles: styles.filter(style => selected.has(style.id)),
};

const outputPath = resolve('audit/technique-coverage/report.json');
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify({ summary, styles }, null, 2)}\n`);
console.log(JSON.stringify({ outputPath, summary: {
  styles: summary.styleCount,
  styleInstrumentPairs: summary.styleInstrumentPairs,
  authoredCues: summary.authoredCueCount,
  mappedCues: summary.mappedCueCount,
  cuesWithoutPlayableGesture: summary.cuesWithoutPlayableGesture,
  stylesWithNoMappedInstrumentTechnique: summary.stylesWithNoMappedInstrumentTechnique,
  mappedGesturesNotAuthoredInPatterns: summary.mappedGesturesNotAuthoredInPatterns,
  referenceMp3s: mp3References.filter(reference => reference.exists).length,
} }, null, 2));
