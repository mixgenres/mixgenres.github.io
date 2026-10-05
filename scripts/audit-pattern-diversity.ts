/**
 * Describe authored pattern coverage, behavioral duplication, generated usage,
 * and available reference-MP3 evidence. Similarity and audio metrics are review
 * cues only; they are not musical-authenticity scores.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { ALL_PATTERNS } from '../src/data/genres';
import { createCatalogSong, catalogIdForStyle } from '../src/engine/sheet/songCatalog';
import { ALL_STYLES, resolveStyle } from '../src/engine/style';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { songCatalog } from '../src/data/songs/catalog';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import type { MusicalPattern, PatternEvent } from '../src/data/schema';

const args = process.argv.slice(2);
const option = (flag: string) => args.find(value => value.startsWith(`${flag}=`))?.slice(flag.length + 1);
const requestedStyles = option('--styles')?.split(',').map(value => value.trim()).filter(Boolean);
const includePerformance = args.includes('--compile');
const selectedStyles = requestedStyles
  ? requestedStyles.map(id => {
    const style = ALL_STYLES.find(value => value.id === id);
    if (!style) throw new Error(`Unknown style ${id}`);
    return style;
  })
  : ALL_STYLES;
const outputPath = resolve(option('--output') ?? 'audit/pattern-diversity/report.json');
const comparisonRoot = resolve(option('--comparisons') ?? 'audit/all-samples/ensemble');
const inventoryPath = resolve(option('--inventory') ?? 'audit/all-samples/inventory.json');
/** The filename uses the Chinese title 欢乐歌 while the catalog uses Huanle Ge. */
const reviewedReferenceAliases: Record<string, { file: string; note: string }> = {
  'chinese-jiangnan-sizhu': {
    file: 'samples/上海音乐学院教授丝竹研究组 - 欢乐歌.mp3',
    note: 'Local filename title translates the catalog title Huanle Ge; recording credit is not asserted to match the catalog credit.',
  },
};

const quantize = (value: number | undefined, scale = 16) => Math.round((value ?? 0) * scale) / scale;
const eventShape = (event: PatternEvent) => [
  quantize(event.position), quantize(event.duration), event.kind ?? 'attack',
  event.pitch?.degree ?? null, event.pitch?.semitoneOffset ?? null, event.pitch?.voicing ?? null,
  event.articulation ?? null, event.hitType ?? null, event.tuplet?.actual ?? null, event.tuplet?.normal ?? null,
];
/** Excludes labels, IDs, instruments, accent and velocity so cosmetic edits don't count as new material. */
function behaviorSignature(pattern: MusicalPattern): string {
  return JSON.stringify({
    meter: pattern.meter,
    cycle: pattern.cycleLength,
    roles: [...pattern.roles].sort(),
    events: (pattern.events ?? []).map(eventShape).sort((a, b) => Number(a[0]) - Number(b[0])),
    variants: pattern.variants.map(variant => ({
      events: (variant.events ?? []).map(eventShape).sort((a, b) => Number(a[0]) - Number(b[0])),
      onsets: variant.events?.length ? undefined : variant.onsetGrid.map(position => quantize(position / 4)),
    })),
  });
}
function onsetSet(pattern: MusicalPattern): Set<number> {
  return new Set((pattern.events?.length ? pattern.events.map(event => event.position) : pattern.onsetGrid.map(step => step / 4))
    .map(value => quantize(value)));
}
function onsetSimilarity(left: MusicalPattern, right: MusicalPattern): number {
  if (left.meter !== right.meter || left.cycleLength !== right.cycleLength || [...left.roles].sort().join(',') !== [...right.roles].sort().join(',')) return 0;
  const a = onsetSet(left), b = onsetSet(right);
  const union = new Set([...a, ...b]).size;
  return union ? [...a].filter(position => b.has(position)).length / union : 1;
}
function patternsFor(styleId: string): MusicalPattern[] {
  return ALL_PATTERNS.filter(pattern => pattern.enabled !== false && pattern.styleIds?.includes(styleId));
}
function referenceEvidence(styleId: string) {
  const comparisonPath = resolve(comparisonRoot, `${styleId}-comparison.json`);
  let comparison: any;
  if (existsSync(comparisonPath)) {
    try { comparison = JSON.parse(readFileSync(comparisonPath, 'utf8')); } catch { /* report unavailable evidence below */ }
  }
  const inventory = existsSync(inventoryPath) ? JSON.parse(readFileSync(inventoryPath, 'utf8')) as { entries?: Array<{ file: string; matches?: Array<{ styleId: string; name: string }> }> } : {};
  const reference = inventory.entries?.find(entry => entry.matches?.some(match => match.styleId === styleId));
  const alias = reviewedReferenceAliases[styleId];
  const sourceFile = reference?.file ?? (alias && existsSync(resolve(alias.file)) ? resolve(alias.file) : null);
  let sourceFeatures: any = null;
  if (sourceFile) {
    const featurePath = resolve('audit/all-samples/features', `${createHash('sha256').update(sourceFile).digest('hex').slice(0, 16)}.json`);
    if (existsSync(featurePath)) {
      try { sourceFeatures = JSON.parse(readFileSync(featurePath, 'utf8')); } catch { /* report unavailable evidence below */ }
    }
  }
  const song = songCatalog.find(value => value.styleId === styleId);
  return {
    sourceFile,
    sourceTitle: reference?.matches?.find(match => match.styleId === styleId)?.name ?? song?.name ?? null,
    sourceMatchNote: alias?.note ?? (sourceFile ? 'Matched by the existing exact normalized artist/title inventory.' : null),
    sourceAudioFeatures: sourceFeatures ? {
      durationSeconds: sourceFeatures.durationSeconds,
      analysisSource: sourceFeatures.analysisSource,
      windows: (sourceFeatures.accompanimentWindows ?? sourceFeatures.windows ?? []).map((window: any) => ({
        startSeconds: window.start, status: window.status,
        estimatedAttacksPerSecond: window.estimatedAttacksPerSecond,
        centroidHz: window.centroidHz, bandEnergy: window.bandEnergy,
      })),
    } : null,
    comparisonFile: comparison ? comparisonPath : null,
    comparisonSource: comparison?.referenceSource ?? (comparison ? 'original album mix; may include vocals' : null),
    windows: (comparison?.windows ?? []).map((window: any) => ({
      startSeconds: window.start,
      differences: window.differences,
      findings: window.findings,
    })),
    singleWindow: comparison?.differences ? {
      startSeconds: comparison.referenceStart ?? 0,
      differences: comparison.differences,
      findings: comparison.findings,
      referenceFeatures: comparison.reference,
      generatedFeatures: comparison.generated,
    } : null,
    limitation: comparison
      ? `Acoustic screening only${comparison.generated?.durationSeconds ? ` (${comparison.generated.durationSeconds.toFixed(1)}s render window)` : ''}; this comparison does not verify rhythm transcription, part relationships, or authenticity.`
      : 'No prepared reference comparison was found for this style.',
  };
}
function generatedUsage(styleId: string) {
  const sheet = createCatalogSong(catalogIdForStyle(styleId));
  const resolved = resolveStyle({ genreId: sheet.worldId, styleId, userOverrides: sheet.styleOverrides });
  const tracks = sheet.tracks;
  const usage = new Map<string, number>();
  const byTrack = new Map<string, Set<string>>();
  const arrangementSignatures = new Set<string>();
  const byRegion = sheet.regions.map(region => {
    const counts = new Map<string, number>();
    const regionBars = region.end - region.start;
    const assignments = sheet.arrangement[region.id] ?? {};
    arrangementSignatures.add(JSON.stringify(Object.entries(assignments).filter(([, patternId]) => patternId !== 'silent').sort(([a], [b]) => a.localeCompare(b))));
    for (const [trackId, patternId] of Object.entries(assignments)) {
      if (!patternId || patternId === 'silent') continue;
      usage.set(patternId, (usage.get(patternId) ?? 0) + regionBars);
      counts.set(patternId, (counts.get(patternId) ?? 0) + 1);
      const trackSet = byTrack.get(trackId) ?? new Set<string>();
      trackSet.add(patternId);
      byTrack.set(trackId, trackSet);
    }
    return {
      id: region.id, kind: region.kind, bars: regionBars,
      uniquePatterns: counts.size,
      selectedPatterns: Object.entries(assignments).filter(([, patternId]) => patternId !== 'silent').map(([trackId, patternId]) => ({
        trackId, role: tracks.find(track => track.id === trackId)?.role,
        patternId, name: PATTERNS_BY_ID[patternId]?.shortName ?? PATTERNS_BY_ID[patternId]?.name ?? patternId,
        bars: regionBars,
      })),
    };
  });
  const trackUsage = tracks.map(track => ({
    trackId: track.id, role: track.role, instrumentId: track.instrumentId,
    uniquePatternsUsed: byTrack.get(track.id)?.size ?? 0,
  }));
  let realizedPerformance: unknown;
  if (includePerformance) {
    const performance = compileWholeSong(sheet);
    const notesByPhrase = new Map<string, typeof performance.notes>();
    for (const note of performance.notes) if (note.phraseId) notesByPhrase.set(note.phraseId, [...(notesByPhrase.get(note.phraseId) ?? []), note]);
    const trackById = new Map(tracks.map(track => [track.id, track]));
    const phrases = (performance.phrases ?? []).map(phrase => {
      const notes = [...(notesByPhrase.get(phrase.id) ?? [])].sort((a, b) => a.time - b.time || a.midi - b.midi);
      const span = Math.max(1e-6, phrase.end - phrase.start);
      const rhythm = JSON.stringify(notes.map(note => Math.round((note.time - phrase.start) / span * 64)));
      const basePitch = notes[0]?.midi ?? 0;
      const contour = JSON.stringify(notes.map(note => note.midi - basePitch));
      const track = trackById.get(phrase.trackId);
      return { regionId: phrase.regionId, trackId: phrase.trackId, role: track?.role, instrumentId: track?.instrumentId,
        noteCount: notes.length, rhythm, contour };
    });
    realizedPerformance = {
      totalNotes: performance.notes.length,
      regions: sheet.regions.map(region => {
        const regionPhrases = phrases.filter(phrase => phrase.regionId === region.id && phrase.noteCount > 0);
        const laneGroups = new Map<string, typeof regionPhrases>();
        for (const phrase of regionPhrases) {
          const key = `${phrase.role ?? ''}/${phrase.instrumentId ?? ''}`;
          laneGroups.set(key, [...(laneGroups.get(key) ?? []), phrase]);
        }
        return { regionId: region.id, kind: region.kind,
          noteCount: regionPhrases.reduce((sum, phrase) => sum + phrase.noteCount, 0),
          lanes: [...laneGroups.entries()].map(([lane, lanePhrases]) => ({
            lane, phrases: lanePhrases.length,
            distinctRhythms: new Set(lanePhrases.map(phrase => phrase.rhythm)).size,
            distinctContours: new Set(lanePhrases.map(phrase => phrase.contour)).size,
          })) };
      }),
    };
  }
  return {
    bpm: sheet.bpm, meter: sheet.timeSignature, bars: sheet.measures.length,
    distinctSectionPatternMaps: arrangementSignatures.size,
    sectionPatternMapCount: byRegion.length,
    sections: byRegion,
    selectedPatternBars: [...usage.entries()].map(([patternId, bars]) => ({ patternId, name: PATTERNS_BY_ID[patternId]?.shortName ?? PATTERNS_BY_ID[patternId]?.name ?? patternId, bars })),
    tracks: trackUsage,
    expectedRoles: [...new Set(resolved.arrangement.ensemble.map(part => part.role))],
    ...(realizedPerformance ? { realizedPerformance } : {}),
  };
}

const styles = selectedStyles.map(style => {
  const patterns = patternsFor(style.id);
  const signatures = new Map<string, string[]>();
  for (const pattern of patterns) {
    const signature = behaviorSignature(pattern);
    signatures.set(signature, [...(signatures.get(signature) ?? []), pattern.id]);
  }
  const exactDuplicates = [...signatures.values()].filter(ids => ids.length > 1).map(patternIds => ({
    patternIds,
    names: patternIds.map(id => patterns.find(pattern => pattern.id === id)?.shortName ?? id),
  }));
  const nearDuplicates: Array<{ patternIds: string[]; similarity: number; names: string[] }> = [];
  for (let i = 0; i < patterns.length; i++) for (let j = i + 1; j < patterns.length; j++) {
    const similarity = onsetSimilarity(patterns[i], patterns[j]);
    if (similarity >= .85 && behaviorSignature(patterns[i]) !== behaviorSignature(patterns[j])) {
      nearDuplicates.push({ patternIds: [patterns[i].id, patterns[j].id], similarity,
        names: [patterns[i].shortName ?? patterns[i].name, patterns[j].shortName ?? patterns[j].name] });
    }
  }
  const resolved = resolveStyle({ genreId: style.primaryGenre, styleId: style.id });
  const patternRoles = [...new Set(patterns.flatMap(pattern => pattern.roles))].sort();
  const expectedRoles = [...new Set(resolved.arrangement.ensemble.map(part => part.role))].sort();
  let generation: ReturnType<typeof generatedUsage> | null = null;
  let generationError: string | null = null;
  try { generation = generatedUsage(style.id); } catch (error) { generationError = String(error); }
  return {
    id: style.id, name: style.name, genreId: style.primaryGenre,
    catalog: {
      patternCount: patterns.length,
      distinctBehaviorCount: signatures.size,
      patternRoles, expectedRoles,
      expectedRolesWithoutPatterns: expectedRoles.filter(role => !patternRoles.includes(role)),
      patternCategories: Object.fromEntries([...new Set(patterns.map(pattern => pattern.category))].map(category => [category, patterns.filter(pattern => pattern.category === category).length])),
      instrumentSplit: patterns.map(pattern => ({ id: pattern.id, name: pattern.shortName ?? pattern.name, roles: pattern.roles, instruments: pattern.instruments ?? [], cycleBars: pattern.cycleLength, events: pattern.events?.length ?? 0 })),
      authoredPitchPatterns: patterns.filter(pattern => pattern.events?.some(event => event.pitch)).length,
      multiBarPatterns: patterns.filter(pattern => pattern.cycleLength > 1).length,
      exactBehaviorDuplicates: exactDuplicates,
      nearOnsetClones: nearDuplicates,
      interpretation: 'Counts describe source records. Similarity findings are review prompts; they do not prescribe a minimum pattern count or require variation where repetition is idiomatic.',
    },
    generated: generation ? { ...generation, error: generationError } : { error: generationError },
    reference: referenceEvidence(style.id),
  };
});

const report = {
  generatedAt: new Date().toISOString(),
  scope: { styles: styles.length, totalStyles: ALL_STYLES.length, genres: [...new Set(styles.map(style => style.genreId))] },
  method: {
    behaviorSignature: 'Meter, cycle length, role, event and variant position/duration, pitch relation, articulation and hit type; ignores labels, IDs, instrument identity, accent and velocity.',
    nearCloneHeuristic: 'Jaccard overlap of onset positions at or above 0.85, within the same meter, cycle length and role. Heuristic only.',
    references: 'Uses existing local MP3 inventory and comparison reports where available. Acoustic fingerprints support targeted review but cannot certify musical correctness.',
    ...(includePerformance ? { realization: 'The optional --compile pass summarizes phrase-level rhythmic and pitch-contour diversity from compiled note events, separate from selected pattern IDs.' } : {}),
  },
  styles,
};
mkdirSync(resolve(outputPath, '..'), { recursive: true });
writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ output: outputPath, styles: styles.length, referenceComparisons: styles.filter(style => style.reference.comparisonFile).length,
  sourceMp3s: styles.filter(style => style.reference.sourceFile).length,
  exactBehaviorDuplicateStyles: styles.filter(style => style.catalog.exactBehaviorDuplicates.length).length,
  missingExpectedRoles: styles.filter(style => style.catalog.expectedRolesWithoutPatterns.length).length,
  generationFailures: styles.filter(style => style.generated.error).length }, null, 2));
