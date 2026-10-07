import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
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
    const instrumentPatterns = patterns.filter(pattern => pattern.instruments?.includes(instrumentId));
    const bodyPatterns = instrumentPatterns.filter(pattern => !['fill', 'cadence', 'transition', 'break'].includes(pattern.category));
    const patternGestures = [...new Set(instrumentPatterns
      .flatMap(pattern => [...(pattern.articulations ?? []), ...(pattern.events ?? []).map(event => event.articulation ?? '')])
      .filter(Boolean))];
    const missingCueDetails = cues.flatMap(cue => {
      const scopes = style.calibration?.techniqueScopes?.[cue] ?? ['note'];
      const gestures = calibratedTechniqueGestures({ calibration: {
        instrumentTechniques: { [instrumentId]: [cue] }, techniqueMappings: style.calibration?.techniqueMappings,
        techniqueScopes: style.calibration?.techniqueScopes,
      } }, profile, role);
      return gestures.length || scopes.some(scope => scope === 'section' || scope === 'song')
        ? [] : [{ cue, scopes }];
    });
    const missingCueMappings = missingCueDetails.map(({ cue }) => cue);
    const behavior = pattern => JSON.stringify((pattern.events ?? []).map(event => [
      event.position, event.duration, event.pitch?.degree ?? null, event.pitch?.semitoneOffset ?? null,
      event.articulation ?? null, event.hitType ?? null,
    ]));
    instruments.push({ id: instrumentId, role,
      cues, mappedGestures, missingCueMappings, patternGestures,
      missingCueDetails,
      patternCoverage: {
        total: instrumentPatterns.length,
        body: bodyPatterns.length,
        distinctBodyBehaviors: new Set(bodyPatterns.map(behavior)).size,
        patternNames: instrumentPatterns.map(pattern => ({
          name: pattern.shortName ?? pattern.name, category: pattern.category,
          difficulty: pattern.difficulty ?? null, supportedEnergy: pattern.supportedEnergy ?? [],
          sectionUsage: pattern.sectionUsage ?? [], eventCount: pattern.events?.length ?? 0,
        })),
      },
      calibratedGesturesAbsentFromPattern: mappedGestures.filter(gesture => !patternGestures.some(cue => gestureMatchesCue(gesture, cue))) });
  }
  const reference = style.calibration?.referenceAudio;
  const mix = style.calibration?.mix;
  styles.push({ id, genre: world.id, instruments,
    referenceAudio: reference ? {
      recording: reference.recording, source: reference.source, audio: reference.audio,
      rmsDbfs: reference.targets.rmsDbfs, crestDb: reference.targets.crestDb,
      lowEnergyShare: reference.targets.lowEnergyShare, highEnergyShare: reference.targets.highEnergyShare,
      sideMidRmsRatio: reference.targets.sideMidRmsRatio,
    } : null,
    mixProfile: mix ? {
      width: mix.character?.width ?? null, bassForward: mix.character?.bassForward ?? null,
      brightness: mix.character?.brightness ?? null, compressionRatio: mix.character?.compressionRatio ?? null,
      transientSnap: mix.character?.transientSnap ?? null,
      roleGainDb: Object.fromEntries(Object.entries(mix.roles ?? {}).map(([role, values]) => [role, values.gainDb ?? null])),
    } : null,
  });
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
const inventoryPath = resolve('audit/all-samples/inventory.json');
let inventory = { entries: [] };
try { inventory = JSON.parse(await readFile(inventoryPath, 'utf8')); } catch { /* report the missing inventory below */ }
const matchedStyleIds = new Set((inventory.entries ?? []).flatMap(entry => (entry.matches ?? []).map(match => match.styleId)));
const selected = new Set(sampleRefs.map(reference => reference.styleId));
const cueRows = styles.flatMap(style => style.instruments.map(instrument => ({ style, instrument })));
const bodyCounts = cueRows.map(row => row.instrument.patternCoverage.body);
const summary = {
  styleCount: styles.length,
  styleInstrumentPairs: cueRows.length,
  authoredCueCount: cueRows.reduce((sum, row) => sum + row.instrument.cues.length, 0),
  mappedCueCount: cueRows.reduce((sum, row) => sum + row.instrument.cues.length - row.instrument.missingCueMappings.length, 0),
  cuesWithoutPlayableGesture: cueRows.reduce((sum, row) => sum + row.instrument.missingCueMappings.length, 0),
  stylesWithNoMappedInstrumentTechnique: styles.filter(style => !style.instruments.some(item => item.mappedGestures.length)).length,
  mappedGesturesNotAuthoredInPatterns: cueRows.reduce((sum, row) => sum + row.instrument.calibratedGesturesAbsentFromPattern.length, 0),
  unmappedPatternVocabularyCues: cueRows.reduce((sum, row) => sum + row.instrument.missingCueDetails.filter(item => item.scopes.includes('motif') || item.scopes.includes('phrase')).length, 0),
  unmappedNoteTechniqueCues: cueRows.reduce((sum, row) => sum + row.instrument.missingCueDetails.filter(item => item.scopes.includes('note')).length, 0),
  patternCoverage: {
    instrumentStylePairs: bodyCounts.length,
    pairsWithoutBodyPatterns: bodyCounts.filter(count => count === 0).length,
    pairsWithOneBodyPattern: bodyCounts.filter(count => count === 1).length,
    pairsWithTwoBodyPatterns: bodyCounts.filter(count => count === 2).length,
    pairsWithThreeOrMoreBodyPatterns: bodyCounts.filter(count => count >= 3).length,
    bodyPatternInstances: bodyCounts.reduce((sum, count) => sum + count, 0),
    distinctBodyBehaviors: cueRows.reduce((sum, row) => sum + row.instrument.patternCoverage.distinctBodyBehaviors, 0),
  },
  referenceCoverage: {
    localRecordingFiles: inventory.entries?.length ?? 0,
    stylesWithExactLocalMatch: matchedStyleIds.size,
    stylesWithoutExactLocalMatch: Math.max(0, styles.length - matchedStyleIds.size),
    separatedAccompanimentProfiles: styles.filter(style => style.referenceAudio?.source === 'separated-accompaniment').length,
    stylesWithoutSeparatedAccompanimentProfile: styles.filter(style => style.referenceAudio?.source !== 'separated-accompaniment').length,
    mixInterpretation: 'Reference RMS is descriptive only; vocal removal changes gain, so it is not used as a master loudness target. Separated accompaniment informs bounded width, low-end weight and brightness calibration.',
  },
  mp3References,
  focusedStyles: styles.filter(style => selected.has(style.id)),
};

const outputPath = resolve('audit/technique-coverage/report.json');
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify({ summary, styles }, null, 2)}\n`);
const shortfallRows = cueRows.filter(row => row.instrument.patternCoverage.body < 3
  || row.instrument.calibratedGesturesAbsentFromPattern.length || row.instrument.missingCueMappings.length);
const byGenre = new Map();
for (const style of styles) {
  const group = byGenre.get(style.genre) ?? { styles: 0, exactReferences: 0, separated: 0 };
  group.styles++;
  if (matchedStyleIds.has(style.id)) group.exactReferences++;
  if (style.referenceAudio?.source === 'separated-accompaniment') group.separated++;
  byGenre.set(style.genre, group);
}
const markdown = [
  '# Genre pedagogy and instrument-data audit',
  '',
  `Generated ${new Date().toISOString()}. Scope: ${styles.length} styles across ${byGenre.size} genre folders and ${cueRows.length} instrument/style pairs.`,
  '',
  '## Findings',
  '',
  `- ${summary.patternCoverage.pairsWithoutBodyPatterns} instrument/style pairs have no local body pattern; ${summary.patternCoverage.pairsWithOneBodyPattern} have one; ${summary.patternCoverage.pairsWithTwoBodyPatterns} have two; ${summary.patternCoverage.pairsWithThreeOrMoreBodyPatterns} have at least three. Cadences and turnarounds are excluded from this count.`,
  `- ${summary.patternCoverage.bodyPatternInstances} local body studies have ${summary.patternCoverage.distinctBodyBehaviors} distinct event shapes, with technique, energy, difficulty and section information listed per pattern in the JSON report.`,
  `- ${summary.mappedGesturesNotAuthoredInPatterns} mapped playable gestures have no explicit local pattern example; this should be zero. ${summary.cuesWithoutPlayableGesture} non-section cues have no named renderer gesture: ${summary.unmappedNoteTechniqueCues} note-level technique cues and ${summary.unmappedPatternVocabularyCues} motif/phrase vocabulary cues.`,
  `- ${summary.referenceCoverage.localRecordingFiles} local recordings map to ${summary.referenceCoverage.stylesWithExactLocalMatch} styles; ${summary.referenceCoverage.separatedAccompanimentProfiles} styles have separated-accompaniment calibration profiles and ${summary.referenceCoverage.stylesWithoutExactLocalMatch} have no exact local reference.`,
  '',
  'A pattern counts as local only when its world and style IDs match and its instrument list names the instrument. Repetition is valid musical form; this audit counts the authored vocabulary available to teach the part, not how frequently an arrangement repeats a cell. Similarity is an audit prompt, not an authenticity score.',
  '',
  'Reference RMS and crest factor are recorded for comparison, but separated audio gain is not an album loudness target. The runtime uses the separated accompaniment to make bounded width, low-end and brightness corrections. Instrument role gain remains authored per style because a stereo mix cannot reveal each instrument stem level.',
  '',
  '## Remaining instrument and technique gaps',
  '',
  '| Genre / style | Instrument | Local body patterns | Missing playable gesture examples | Cues without renderer mapping |',
  '|---|---:|---:|---|---|',
  ...shortfallRows.map(({ style, instrument }) => `| ${style.genre} / ${style.id} | ${instrument.id} | ${instrument.patternCoverage.body} | ${instrument.calibratedGesturesAbsentFromPattern.join(', ') || '—'} | ${instrument.missingCueMappings.join(', ') || '—'} |`),
  '',
  '## Reference coverage by genre',
  '',
  '| Genre | Styles | Exact local reference | Separated accompaniment profile |',
  '|---|---:|---:|---:|',
  ...[...byGenre].sort(([a], [b]) => a.localeCompare(b)).map(([genre, values]) => `| ${genre} | ${values.styles} | ${values.exactReferences} | ${values.separated} |`),
  '',
  'The full pattern names, articulation gestures, sections, energy bands, instrument pairs, raw technique cues and per-style mix evidence are in [`audit/technique-coverage/report.json`](../audit/technique-coverage/report.json).',
  '',
].join('\n');
const markdownPath = resolve('docs/genre-pedagogy-audit.md');
await mkdir(dirname(markdownPath), { recursive: true });
await writeFile(markdownPath, markdown);
console.log(JSON.stringify({ outputPath, summary: {
  styles: summary.styleCount,
  styleInstrumentPairs: summary.styleInstrumentPairs,
  authoredCues: summary.authoredCueCount,
  mappedCues: summary.mappedCueCount,
  cuesWithoutPlayableGesture: summary.cuesWithoutPlayableGesture,
  stylesWithNoMappedInstrumentTechnique: summary.stylesWithNoMappedInstrumentTechnique,
  mappedGesturesNotAuthoredInPatterns: summary.mappedGesturesNotAuthoredInPatterns,
  patternCoverage: summary.patternCoverage,
  referenceCoverage: summary.referenceCoverage,
  referenceMp3s: mp3References.filter(reference => reference.exists).length,
} }, null, 2));
