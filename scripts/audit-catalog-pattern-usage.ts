import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { SONGS_BY_ID } from '../src/data/songs/catalog';
import { ALL_PATTERNS } from '../src/data/genres/index.ts';
import { createCatalogSong } from '../src/engine/sheet/songCatalog';

type LaneStats = {
  trackId: string; instrumentId: string; role: string; measures: number;
  selectedPatternCount: number; counts: Record<string, number>;
  dominantShare: number; selectedPatterns: Array<{ id: string; name: string; provenance: string }>;
};
const patternById = new Map(ALL_PATTERNS.map(pattern => [pattern.id, pattern]));
const songs: Array<{ id: string; genreId: string; styleId: string; lanes: LaneStats[]; measureCount: number; errors?: string }> = [];
for (const song of Object.values(SONGS_BY_ID)) {
  try {
    const sheet = createCatalogSong(song.id);
    const lanes = sheet.tracks.map(track => {
      const counts: Record<string, number> = {};
      for (const measure of sheet.measures) {
        const patternId = measure.patternDetailsByTrack?.[track.id]?.patternId;
        if (patternId) counts[patternId] = (counts[patternId] ?? 0) + 1;
      }
      const selectedPatterns = Object.keys(counts).map(id => {
        const pattern = patternById.get(id);
        return { id, name: pattern?.shortName ?? pattern?.name ?? id, provenance: pattern?.provenance ?? 'unknown' };
      });
      const dominantShare = sheet.measures.length ? Math.max(0, ...Object.values(counts)) / sheet.measures.length : 0;
      return { trackId: track.id, instrumentId: track.instrumentId ?? track.instrument ?? 'unknown', role: track.role,
        measures: sheet.measures.length, selectedPatternCount: selectedPatterns.length, counts, dominantShare, selectedPatterns };
    });
    songs.push({ id: song.id, genreId: song.genreId, styleId: song.styleId, lanes, measureCount: sheet.measures.length });
  } catch (error) {
    songs.push({ id: song.id, genreId: song.genreId, styleId: song.styleId, lanes: [], measureCount: 0, errors: error instanceof Error ? error.message : String(error) });
  }
}
const failures = songs.filter(song => song.errors);
const laneRows = songs.flatMap(song => song.lanes.map(lane => ({ ...lane, genreId: song.genreId, styleId: song.styleId })));
const onePattern = laneRows.filter(lane => lane.selectedPatternCount <= 1);
const dominant = laneRows.filter(lane => lane.dominantShare >= .8 && lane.measures >= 16);
const byGenre = new Map<string, { songs: number; lanes: number; onePatternLanes: number; dominantLanes: number; failures: number }>();
for (const song of songs) {
  const row = byGenre.get(song.genreId) ?? { songs: 0, lanes: 0, onePatternLanes: 0, dominantLanes: 0, failures: 0 };
  row.songs++;
  row.lanes += song.lanes.length;
  row.failures += song.errors ? 1 : 0;
  byGenre.set(song.genreId, row);
}
for (const lane of laneRows) {
  const row = byGenre.get(lane.genreId)!;
  if (lane.selectedPatternCount <= 1) row.onePatternLanes++;
  if (lane.dominantShare >= .8 && lane.measures >= 16) row.dominantLanes++;
}
const summary = { songCount: songs.length, compiledSongs: songs.length - failures.length, compileFailures: failures.length,
  trackLanes: laneRows.length, onePatternLanes: onePattern.length, lanesWithDominantPatternAtLeast80Percent: dominant.length,
  meanSelectedPatternsPerLane: laneRows.reduce((sum, lane) => sum + lane.selectedPatternCount, 0) / Math.max(1, laneRows.length),
  methods: 'Reads patternDetailsByTrack from created catalog sheets. Counts measures with a selected pattern ID. Does not prove musical correctness, audible variation, or authored provenance.' };
const rankedGenres = [...byGenre].map(([genre, row]) => ({ genre, ...row,
  dominantLaneRate: row.lanes ? row.dominantLanes / row.lanes : 0,
  singlePatternLaneRate: row.lanes ? row.onePatternLanes / row.lanes : 0,
})).sort((a, b) => b.dominantLaneRate - a.dominantLaneRate);
const report = { generatedAt: new Date().toISOString(), summary, byGenre: Object.fromEntries(byGenre), songs };
const jsonPath = resolve('audit/catalog-pattern-usage/report.json');
await mkdir(dirname(jsonPath), { recursive: true });
await writeFile(jsonPath, `${JSON.stringify(report, null, 2)}\n`);
const md = [
  '# Shipped sample-song pattern usage audit', '',
  `Generated ${report.generatedAt}. This audit inspected ${summary.songCount} catalog songs and ${summary.trackLanes} instrument lanes. It measures the selected pattern IDs in every score measure; it does not judge authenticity or audio quality.`, '',
  `- Compiled songs: ${summary.compiledSongs}/${summary.songCount}; errors: ${summary.compileFailures}.`,
  `- Lanes using one or zero selected pattern IDs: ${summary.onePatternLanes}/${summary.trackLanes}.`,
  `- Lanes with one pattern selected in at least 80% of measures (at least 16 measures): ${summary.lanesWithDominantPatternAtLeast80Percent}.`,
  `- Mean selected pattern IDs per lane: ${summary.meanSelectedPatternsPerLane.toFixed(2)}.`, '',
  'A pattern ID change is only a screening signal: it can be a cadence or generated study, and multiple IDs can still sound like the same pattern. Review this alongside authored-cell coverage in [`genre-pedagogy-audit.md`](genre-pedagogy-audit.md).', '',
  '## Highest rates of a dominant song pattern', '',
  '| Genre | Songs | Lanes | One-pattern lanes | ≥80% dominant | Dominant rate |',
  '|---|---:|---:|---:|---:|---:|',
  ...rankedGenres.slice(0, 15).map(row => `| ${row.genre} | ${row.songs} | ${row.lanes} | ${row.onePatternLanes} | ${row.dominantLanes} | ${(row.dominantLaneRate * 100).toFixed(0)}% |`), '',
  '## Per-genre song use', '',
  '| Genre | Songs | Lanes | One-pattern lanes | Dominant lanes | Compile failures |',
  '|---|---:|---:|---:|---:|---:|',
  ...[...byGenre].sort(([a], [b]) => a.localeCompare(b)).map(([genre, row]) => `| ${genre} | ${row.songs} | ${row.lanes} | ${row.onePatternLanes} | ${row.dominantLanes} | ${row.failures} |`), '',
  'Song-by-song lane counts and selected pattern IDs are in [`audit/catalog-pattern-usage/report.json`](../audit/catalog-pattern-usage/report.json).', '',
].join('\n');
const mdPath = resolve('docs/catalog-pattern-usage-audit.md');
await mkdir(dirname(mdPath), { recursive: true });
await writeFile(mdPath, md);
console.log(JSON.stringify({ jsonPath, mdPath, summary }, null, 2));
