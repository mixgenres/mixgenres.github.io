/** Compare every shipped reference-score roster to the genre verification docs. */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { GENRE_WORLDS } from '../src/data/genres';
import { songCatalog } from '../src/data/songs/catalog';
import { auditCatalogSongInstruments } from '../src/engine/sheet/songCatalog';
import { BANK_FILES } from '../src/engine/playback/soundfont/bankIdentity';

const min = 5, max = 8;
const inventory = JSON.parse(readFileSync('audit/all-samples/inventory.json', 'utf8')) as {
  entries: Array<{ file: string; matches: Array<{ genre: string; styleId: string }> }>;
  missing: Array<{ genre: string; styleId: string }>;
};
const featureRoot = resolve('audit/all-samples/features');
const referenceRows = inventory.entries.flatMap(entry => {
  const voicedPath = resolve('voiced', basename(entry.file));
  const featurePath = resolve(featureRoot, `${createHash('sha256').update(entry.file).digest('hex').slice(0, 16)}.json`);
  const feature = existsSync(featurePath) ? JSON.parse(readFileSync(featurePath, 'utf8')) as { accompanimentWindows?: Array<{ status: string }> } : {};
  return entry.matches.map(match => ({ ...match, referenceFile: entry.file, voiced: existsSync(voicedPath),
    measuredVoiced: !!feature.accompanimentWindows?.some(window => window.status === 'measured') }));
});
const referenceByStyle = new Map<string, typeof referenceRows>();
for (const row of referenceRows) referenceByStyle.set(row.styleId, [...(referenceByStyle.get(row.styleId) ?? []), row]);

const songs = songCatalog.map(song => {
  const roster = auditCatalogSongInstruments(song.id);
  return {
    ...roster,
    artist: song.artist,
    track: song.track,
    references: referenceByStyle.get(song.styleId) ?? [],
  };
});
const violations = songs.filter(song => song.instruments.length < min || song.instruments.length > max);
const tangoWithoutBandoneon = songs.filter(song => song.genreId === 'tango' && !song.instruments.includes('bandoneon'));
const genres = GENRE_WORLDS.map(world => {
  const rows = songs.filter(song => song.genreId === world.id);
  const counts = new Map<number, number>();
  for (const song of rows) counts.set(song.instruments.length, (counts.get(song.instruments.length) ?? 0) + 1);
  const matched = rows.flatMap(song => song.references);
  return {
    id: world.id,
    songs: rows.length,
    inRange: rows.filter(song => song.instruments.length >= min && song.instruments.length <= max).length,
    countDistribution: [...counts.entries()].sort((a, b) => a[0] - b[0]).map(([count, n]) => `${count}×${n}`).join(', '),
    supportSongs: rows.filter(song => song.supportInstruments.length).length,
    matchedReferences: matched.length,
    voicedLinks: matched.filter(row => row.voiced).length,
    measuredVoiced: matched.filter(row => row.measuredVoiced).length,
  };
});
const comparisonPath = resolve('audit/all-samples/soundfont-v3-all-genres/summary.json');
const comparison = existsSync(comparisonPath) ? JSON.parse(readFileSync(comparisonPath, 'utf8')) as {
  engine: string; seconds: number; results: Array<{ status: string; file: string; genre?: string; comparison?: string }>;
} : undefined;
type FeatureRow = { genre: string; source: string; differences: Record<string, number> };
const featureRows: FeatureRow[] = [];
for (const row of comparison?.results ?? []) {
  if (row.status !== 'needs-musical-review' || !row.comparison || !existsSync(row.comparison)) continue;
  const report = JSON.parse(readFileSync(row.comparison, 'utf8')) as {
    referenceSource?: string; windows?: Array<{ differences?: Record<string, number> }>;
  };
  for (const window of report.windows ?? []) if (window.differences) featureRows.push({
    genre: row.genre ?? 'unknown', source: report.referenceSource ?? 'unknown', differences: window.differences,
  });
}
const median = (values: number[]) => {
  const sorted = [...values].sort((a, b) => a - b);
  if (!sorted.length) return null;
  const center = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[center] : (sorted[center - 1] + sorted[center]) / 2;
};
const summarizeFeatures = (rows: FeatureRow[]) => ({
  windows: rows.length,
  voicedWindows: rows.filter(row => row.source === 'separated accompaniment').length,
  medianSpectralDistance: median(rows.map(row => row.differences.spectralDistance).filter(Number.isFinite)),
  medianCentroidRatio: median(rows.map(row => row.differences.centroidRatio).filter(Number.isFinite)),
  medianLowBodyEnergyRatio: median(rows.map(row => row.differences.lowBodyEnergyRatio).filter(Number.isFinite)),
  medianRmsLevelDifferenceDb: median(rows.map(row => row.differences.rmsLevelDifferenceDb).filter(Number.isFinite)),
  medianAttackDensityDifference: median(rows.map(row => row.differences.attackDensityDifference).filter(Number.isFinite)),
});
const featureSummaryByGenre = [...new Set(featureRows.map(row => row.genre))].sort().map(genre => ({
  genre, ...summarizeFeatures(featureRows.filter(row => row.genre === genre)),
}));
const benchmarkPath = resolve('audit/soundfont-review/benchmark.json');
const benchmark = existsSync(benchmarkPath) ? JSON.parse(readFileSync(benchmarkPath, 'utf8')) as {
  environment: string;
  results: Array<{ count: number; notes: number; renderMs: number; mp3Ms: number }>;
} : undefined;
const bankBytes = Object.values(BANK_FILES).reduce((sum, item) => sum + item.bytes, 0);
const output = {
  updated: new Date().toISOString(), songCount: songs.length, genreCount: genres.length,
  instrumentRange: [min, max], violations, tangoWithoutBandoneon,
  bankCount: Object.keys(BANK_FILES).length, packagedBankBytes: bankBytes,
  soundfontComparison: comparison ? {
    phase: 'soundfont-v3-all-genres', engine: comparison.engine, seconds: comparison.seconds,
    rows: comparison.results.length, completed: comparison.results.filter(row => row.status === 'needs-musical-review' || row.status === 'voice-only').length,
    failed: comparison.results.filter(row => row.status === 'failed').length,
    voicedComparisons: comparison.results.filter(row => referenceRows.some(reference => reference.referenceFile === row.file && reference.measuredVoiced)).length,
    features: summarizeFeatures(featureRows), byGenre: featureSummaryByGenre,
  } : null,
  soundfontBenchmark: benchmark ? { environment: benchmark.environment, results: benchmark.results } : null,
  genres, songs,
};
mkdirSync('audit/all-samples', { recursive: true });
writeFileSync('audit/all-samples/instrument-ensemble-audit.json', JSON.stringify(output, null, 2) + '\n');

const table = genres.map(row => `| ${row.id} | ${row.songs} | ${row.inRange}/${row.songs} | ${row.countDistribution} | ${row.supportSongs} | ${row.matchedReferences} | ${row.voicedLinks} | ${row.measuredVoiced} |`).join('\n');
const songRows = songs.map(song => `| ${song.genreId} | ${song.styleId} | ${song.instruments.length} | ${song.instruments.join(', ')} | ${song.supportInstruments.join(', ') || '—'} | ${song.references.length ? song.references.map(row => row.voiced ? 'voiced' : 'album mix').join(', ') : 'no exact local MP3'} |`).join('\n');
const soundfontStatus = output.soundfontComparison
  ? `SoundFont comparison phase \`${'soundfont-v3-all-genres'}\`: ${output.soundfontComparison.completed}/${output.soundfontComparison.rows} rows complete, ${output.soundfontComparison.failed} failed; ${output.soundfontComparison.voicedComparisons} rows draw on voiced-feature references.`
  : 'The all-genre SoundFont comparison phase has not finished yet.';
const benchmarkStatus = output.soundfontBenchmark?.results.length
  ? `A Node offline benchmark rendered an 8-second 30-player mix in ${ (output.soundfontBenchmark.results.find(row => row.count === 30)?.renderMs ?? 0) / 1000 } s and encoded MP3 in ${ (output.soundfontBenchmark.results.find(row => row.count === 30)?.mp3Ms ?? 0) / 1000 } s. This measures offline throughput, not browser audio-start latency.`
  : 'The SoundFont offline performance benchmark has not finished yet.';
const featureStatus = output.soundfontComparison?.features.windows
  ? `Across ${output.soundfontComparison.features.windows} measured windows (${output.soundfontComparison.features.voicedWindows} from separated accompaniment), median spectral distance was ${output.soundfontComparison.features.medianSpectralDistance?.toFixed(3)}, low-body energy ratio ${output.soundfontComparison.features.medianLowBodyEnergyRatio?.toFixed(2)}, generated/reference centroid ratio ${output.soundfontComparison.features.medianCentroidRatio?.toFixed(2)}, and RMS difference ${output.soundfontComparison.features.medianRmsLevelDifferenceDb?.toFixed(1)} dB. These aggregate screens diagnose timbre and balance; they are not a perceptual similarity score.`
  : 'Per-genre comparison medians will be available when the SoundFont reference sweep has comparison reports.';
const featureTable = (output.soundfontComparison?.byGenre ?? []).filter(row => row.windows)
  .map(row => `| ${row.genre} | ${row.windows} | ${row.voicedWindows} | ${row.medianSpectralDistance?.toFixed(3) ?? '—'} | ${row.medianLowBodyEnergyRatio?.toFixed(2) ?? '—'} | ${row.medianCentroidRatio?.toFixed(2) ?? '—'} | ${row.medianRmsLevelDifferenceDb?.toFixed(1) ?? '—'} |`).join('\n');
const markdown = `# Genre verification implementation audit\n\nUpdated ${output.updated.slice(0, 10)}. This is a catalog and implementation crosswalk for the 55 genre folders and all ${songs.length} shipped sample songs. The latest requirements are a distinct 5–8-instrument roster per song and SoundFont playback with tango bandoneon.\n\n## Results\n\n- Sample song rosters: **${songs.length - violations.length}/${songs.length}** within ${min}–${max} distinct instrument IDs; ${violations.length} violations.\n- Tango: **${songs.filter(song => song.genreId === 'tango' && song.instruments.includes('bandoneon')).length}/${songs.filter(song => song.genreId === 'tango').length}** songs include bandoneon.\n- SoundFont asset set: **${output.bankCount}** demand-loaded banks, ${(bankBytes / 1048576).toFixed(1)} MiB compressed.\n- ${soundfontStatus}\n- ${benchmarkStatus}\n- The reference screen renders an 8-second dense ensemble excerpt. It uses voiced accompaniment measurements where available and labels album-mix fallback. Spectral similarity is a mix/timbre screen; it does not prove note-for-note similarity or musical authenticity.\n\n## Genre crosswalk\n\n| Genre | Songs | In range | Instrument count distribution | Support added | Exact reference links | Voiced links | Measured voiced |\n|---|---:|---:|---|---:|---:|---:|---:|\n${table}\n\n## Song-by-song sample roster\n\n| Genre | Style/song ID | Distinct instruments | Instruments | Sample-only support | Reference evidence |\n|---|---|---:|---|---|---|\n${songRows}\n\n## Implementation and evidence notes\n\n- Sample-only support parts are added in the score builder when the authored recording roster has fewer than five instruments. They use sparse same-genre score grammar, run at reduced level, and enter from energy level 2 so the quietest introductions stay sparse. They do not modify the reusable genre style templates. Roster reductions above eight preserve melody, bass and percussion priorities first.\n- Live playback and export use the SoundFont event plan and shared mix. Sample audio is rendered when requested; the browser reuses only compressed bank assets.\n- Tango’s bandoneon uses the dedicated Jörg Bleymehl recording in both bellows directions. The two directions share one sparse 12-note source and use small preset differences; they are not separate recorded open/close samples. The bandoneon output is deliberately retained alongside piano, strings, and bass.\n- Reference inventory has ${inventory.entries.length} local MP3s, ${referenceRows.length} exact style/reference links, ${inventory.missing.length} styles without an exact local MP3, ${new Set(inventory.entries.filter(entry => existsSync(resolve('voiced', basename(entry.file)))).map(entry => basename(entry.file))).size} voiced files, and ${referenceRows.filter(row => row.measuredVoiced).length} style links with measured voiced features. A measured separated mix is still not an isolated instrument stem.\n- The current style/song dossier at [all-genres-fidelity-pass.md](./all-genres-fidelity-pass.md) should be read with this crosswalk. The detailed human-listening verdict remains open; this automated pass cannot certify “almost identical.”\n\nMachine-readable report: \`audit/all-samples/instrument-ensemble-audit.json\`. Rebuild with \`npm run audit:sample-ensembles\`.\n`;
const withFeatureStatus = markdown.replace(`- ${benchmarkStatus}\n`, `- ${benchmarkStatus}\n- ${featureStatus}\n`);
const withFeatureTable = withFeatureStatus.replace(`${table}\n\n## Song-by-song sample roster`, `${table}\n\n## SoundFont comparison medians by genre\n\n| Genre | Windows | Voiced accompaniment | Median spectral distance | Median low/body energy ratio | Median centroid ratio | Median RMS difference, dB |\n|---|---:|---:|---:|---:|---:|---:|\n${featureTable || '| Pending | — | — | — | — | — | — |'}\n\n## Song-by-song sample roster`);
writeFileSync('docs/genre-verification-implementation-audit.md', withFeatureTable);
console.log(JSON.stringify({ songs: songs.length, genres: genres.length, violations: violations.length,
  tango: songs.filter(song => song.genreId === 'tango' && song.instruments.includes('bandoneon')).length,
  bands: output.bankCount, bankBytes, comparison: output.soundfontComparison }, null, 2));
if (violations.length || tangoWithoutBandoneon.length) process.exitCode = 1;
