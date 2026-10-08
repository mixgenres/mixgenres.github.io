import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { GENRE_WORLDS, PATTERNS_BY_ID } from '../src/data/genres/index.ts';
import type { MusicalPattern, PatternEvent } from '../src/data/schema.ts';
import { catalogIdForStyle, createCatalogSong } from '../src/engine/sheet/songCatalog.ts';
import { resolveStyle } from '../src/engine/style/resolve.ts';

/** All-style structural audit of sample-score construction. It does not render audio. */
const outputPath = resolve(process.argv.find(arg => arg.startsWith('--out='))?.slice('--out='.length)
  ?? 'audit/song-pattern-diversity.json');
const ENDING = /^(ending|outro|coda|tag|finale|cadence|cierre|remate|ritardando|stop-time|final-stop)$/i;
const normalized = (value: string) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, ' ').trim();
const q = (value: number | undefined) => value == null ? null : Math.round(value * 64) / 64;
type TrackAuditSummary = {
  likelyLowVariation: boolean; isSampleSupport: boolean; bodyMeasures: number; uniqueBodyEventShapes: number;
  foreignGenreSelections: string[]; patternsOutsideStyle: string[];
  assignedPatternDetails: Array<{ sourceLevel: string | null }>;
};
function eventSignature(event: PatternEvent) {
  return [q(event.position), q(event.duration), event.kind ?? 'attack',
    event.pitch?.degree ?? null, event.pitch?.semitoneOffset ?? null, event.pitch?.cents ?? null,
    event.pitch?.voicing ?? null, event.articulation ?? null, event.hitType ?? null,
    event.notation?.string ?? null, event.notation?.fret ?? null, event.notation?.stroke ?? null,
    event.notation?.bowing ?? null, event.notation?.bodyTechnique ?? null,
    event.notation?.ornament ?? null, event.tuplet?.actual ?? null, event.tuplet?.normal ?? null];
}
function shapeFor(detail: NonNullable<import('../src/types/song.ts').Measure['patternDetailsByTrack']>[string], pattern?: MusicalPattern) {
  const variant = pattern?.variants.find(candidate => candidate.id === detail.variantId);
  const events = variant?.events?.length ? variant.events : pattern?.events ?? [];
  // Resolved measure onsets include the selected variant and transformations. Rich source events
  // add pitch, articulation, ornament and instrument-technique distinctions not carried by the grid.
  return JSON.stringify({ meter: pattern?.meter ?? '', cycle: pattern?.cycleLength ?? 1,
    onsets: detail.onsetGrid.map(q), durations: detail.durationGrid?.map(q) ?? [],
    hits: detail.hitTypes ?? [], articulations: detail.articulations ?? (detail.articulation ? [detail.articulation] : []),
    events: events.map(eventSignature), variantType: variant?.variationType ?? null });
}
function isEnding(kind: string) { return ENDING.test(kind); }
const styles = [];
const allTracks: TrackAuditSummary[] = [];
const styleTechniqueFindings = [];

for (const world of GENRE_WORLDS) for (const definition of world.styleDefinitions ?? []) {
  const song = createCatalogSong(catalogIdForStyle(definition.id));
  const resolved = resolveStyle({ genreId: world.id, styleId: definition.id, userOverrides: song.styleOverrides });
  const regions = song.regions.map(region => ({ ...region, isEnding: isEnding(region.kind) }));
  const bodyRegions = regions.filter(region => !region.isEnding);
  const styleTracks = song.tracks.map(track => {
    const rows = song.measures.flatMap(measure => {
      const detail = measure.patternDetailsByTrack?.[track.id];
      if (!detail?.patternId || detail.patternId === 'silent') return [];
      const regionIndex = song.regions.findIndex(region => region.id === measure.regionId);
      const region = regions[regionIndex];
      const pattern = PATTERNS_BY_ID[detail.patternId];
      return [{ measure: measure.index, regionId: measure.regionId, section: region?.kind ?? 'unknown',
        ending: region?.isEnding ?? false, patternId: detail.patternId, variantId: detail.variantId ?? null,
        shape: shapeFor(detail, pattern), patternName: pattern?.shortName ?? pattern?.name ?? detail.patternId,
        patternWorldId: pattern?.worldId ?? null, patternStyleIds: pattern?.styleIds ?? [],
        sourceLevel: pattern?.sourceLevel ?? null, category: pattern?.category ?? null,
        eventCount: pattern?.events?.length ?? 0, articulations: pattern?.articulations ?? [],
        detailArticulations: detail.articulations ?? (detail.articulation ? [detail.articulation] : []),
      }];
    });
    const body = rows.filter(row => !row.ending);
    const sectionSummaries = bodyRegions.map(region => {
      const sectionRows = body.filter(row => row.regionId === region.id);
      const shapes = [...new Set(sectionRows.map(row => row.shape))];
      const ids = [...new Set(sectionRows.map(row => row.patternId))];
      return { kind: region.kind, regionId: region.id, bars: region.end - region.start,
        assignedMeasures: sectionRows.length, uniqueShapes: shapes.length, patternIds: ids,
        patternNames: [...new Set(sectionRows.map(row => row.patternName))] };
    }).filter(section => section.assignedMeasures > 0);
    const shapeCounts = new Map<string, number>();
    for (const row of body) shapeCounts.set(row.shape, (shapeCounts.get(row.shape) ?? 0) + 1);
    const dominant = [...shapeCounts.entries()].sort((a, b) => b[1] - a[1])[0];
    const bodyShapes = [...shapeCounts.keys()];
    const distinctSectionShapes = new Set(sectionSummaries.map(section => section.uniqueShapes === 1
      ? body.find(row => row.regionId === section.regionId)?.shape : `multi:${section.regionId}`));
    const dominantShare = body.length ? (dominant?.[1] ?? 0) / body.length : 0;
    const hasLowVariation = bodyRegions.length >= 3 && body.length > 0
      && (bodyShapes.length === 1 || (dominantShare >= .85 && distinctSectionShapes.size <= 2));
    const assignedPatterns = [...new Set(body.map(row => row.patternId))];
    const foreignSelections = body.filter(row => row.patternWorldId && row.patternWorldId !== world.id);
    const styleLeakage = body.filter(row => row.patternStyleIds.length && !row.patternStyleIds.includes(definition.id));
    const row = { genreId: world.id, styleId: definition.id, instrumentId: track.instrumentId,
      instrument: track.name, role: track.role, bodyMeasures: body.length, bodySectionCount: sectionSummaries.length,
      endingMeasures: rows.length - body.length, uniqueBodyPatternIds: assignedPatterns.length,
      uniqueBodyEventShapes: bodyShapes.length, dominantShapeShare: Number(dominantShare.toFixed(3)),
      shapeShareByPattern: [...shapeCounts.entries()].map(([shape, measures]) => ({ shapeHash: shape,
        measures, share: Number((measures / Math.max(body.length, 1)).toFixed(3)),
        patternNames: [...new Set(body.filter(candidate => candidate.shape === shape).map(candidate => candidate.patternName))] }))
        .sort((a, b) => b.measures - a.measures),
      sections: sectionSummaries,
      likelyLowVariation: hasLowVariation,
      classificationReview: hasLowVariation ? 'review: potentially fixed texture/ostinato or insufficient phrase development' : null,
      foreignGenreSelections: [...new Set(foreignSelections.map(item => item.patternId))],
      patternsOutsideStyle: [...new Set(styleLeakage.map(item => item.patternId))],
      isSampleSupport: body.some(item => item.sourceLevel === 'sample-support'),
      assignedPatternDetails: [...new Map(body.map(item => [item.patternId, item])).values()].map(item => ({
        id: item.patternId, name: item.patternName, sourceLevel: item.sourceLevel, category: item.category,
        eventCount: item.eventCount, articulations: item.articulations, detailArticulations: item.detailArticulations,
      })),
    };
    allTracks.push(row);
    return row;
  });

  // Review calibration cues against style-owned, instrument-specific body vocabulary.
  // A match is literal/normalized and deliberately conservative; unmatched cues are prompts, not errors.
  for (const [instrumentId, cues] of Object.entries(resolved.calibration?.instrumentTechniques ?? {})) {
    const patterns = (resolved.patterns?.allowed ?? []).map((id: string) => PATTERNS_BY_ID[id])
      .filter((pattern: MusicalPattern | undefined): pattern is MusicalPattern => !!pattern
        && pattern.instruments?.includes(instrumentId) === true
        && !['fill', 'cadence', 'transition', 'break'].includes(pattern.category));
    const vocabulary = patterns.flatMap((pattern: MusicalPattern) => [pattern.name, pattern.shortName ?? '',
      pattern.description, ...(pattern.articulations ?? []), ...(pattern.events ?? []).map(event => [
        event.articulation ?? '', event.notation?.ornament ?? '', event.notation?.bodyTechnique ?? '',
      ].join(' '))]).map(normalized).filter(Boolean);
    const missing = cues.filter(cue => {
      const cueTokens = normalized(cue);
      return cueTokens.length >= 4 && !vocabulary.some(value => value.includes(cueTokens) || cueTokens.includes(value));
    });
    if (missing.length) styleTechniqueFindings.push({ genreId: world.id, styleId: definition.id,
      instrumentId, cues: missing, instrumentPatternCount: patterns.length,
      note: 'Review whether these stated techniques are represented in this style/instrument body patterns; literal vocabulary matching can miss synonymous notation.' });
  }
  styles.push({ genreId: world.id, styleId: definition.id, genreName: world.name,
    songSections: song.regions.map(region => region.kind), bodySectionKinds: bodyRegions.map(region => region.kind),
    tracks: styleTracks });
}

const allLowVariationPrompts = allTracks.filter(track => track.likelyLowVariation);
const lowVariation = allLowVariationPrompts.filter(track => !track.isSampleSupport);
const repeatedSampleSupport = allLowVariationPrompts.filter(track => track.isSampleSupport);
const noBodyAssignments = allTracks.filter(track => track.bodyMeasures === 0);
const foreignAssignments = allTracks.filter(track => track.foreignGenreSelections.length || track.patternsOutsideStyle.length);
const report = {
  scope: 'All default sample scores; structural notation and metadata only. No playback, audio, mix, loudness or reference listening checks.',
  method: {
    eventShape: 'Resolved measure onsets/durations/hit types/articulations plus source event pitch, ornament, technique and tuplet shape. Labels, IDs, accent and velocity do not create a distinct shape.',
    bodySections: 'All regions except explicit ending/coda/outro/tag/finale/cadence/cierre/final-stop labels. A final region remains body material unless its form label marks it as a terminal section.',
    lowVariationPrompt: 'Review when a track has at least three body sections and one event shape throughout, or at least 85% dominant event-shape share with at most two section-level shapes. Legitimate drones, ostinati and cycle punctuation need contextual human review.',
    techniqueMatching: 'Conservative normalized literal matching of stated instrument technique cues to style-allowed, instrument-specific body pattern names, descriptions, articulations and notation cues. Unmatched cues require review; they are not automatic errors.',
    sampleSupport: 'Sample-only support added to reach the current 5–8 instrument roster is reported separately through sourceLevel=sample-support. Its paired cells create section contrast but are not counted as style-authored pedagogical vocabulary.',
  },
  summary: { genreCount: GENRE_WORLDS.length, styleCount: styles.length, trackCount: allTracks.length,
    tracksWithOneOrZeroBodyShapes: allTracks.filter(track => track.uniqueBodyEventShapes <= 1).length,
    likelyLowVariationTracks: lowVariation.length, repeatedSampleSupportTracks: repeatedSampleSupport.length,
    totalLowVariationReviewPrompts: allLowVariationPrompts.length, tracksWithoutBodyAssignments: noBodyAssignments.length,
    foreignOrOutOfStyleTracks: foreignAssignments.length, techniqueCueReviewRows: styleTechniqueFindings.length,
    unmatchedTechniqueCueCount: styleTechniqueFindings.reduce((sum, row) => sum + row.cues.length, 0),
    sampleSupportTracks: allTracks.filter(track => track.assignedPatternDetails.some(pattern => pattern.sourceLevel === 'sample-support')).length,
    sampleSupportTracksWithTwoOrMoreBodyShapes: allTracks.filter(track => track.assignedPatternDetails.some(pattern => pattern.sourceLevel === 'sample-support')
      && track.uniqueBodyEventShapes >= 2).length },
  reviewQueues: { likelyLowVariation: lowVariation, repeatedSampleSupport, noBodyAssignments, foreignAssignments, techniqueCueFindings: styleTechniqueFindings },
  styles,
};
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ outputPath, ...report.summary }, null, 2));
