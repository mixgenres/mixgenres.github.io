/** Audit the local reference library against the requested per-style minimum. */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, relative, resolve } from 'node:path';
import { songCatalog } from '../src/data/songs/catalog';

type Inventory = { entries: Array<{ file: string; name: string; matches: Array<{ genre: string; styleId: string }> }> };
const target = Number(process.argv.find(arg => arg.startsWith('--target='))?.slice('--target='.length) ?? 3);
if (!Number.isInteger(target) || target < 1) throw new Error(`Invalid reference target: ${target}`);
const inventory = JSON.parse(await readFile('audit/all-samples/inventory.json', 'utf8')) as Inventory;
const styles = new Map<string, { genre: string; styleId: string; references: Map<string, string> }>();
for (const song of songCatalog) styles.set(song.styleId, styles.get(song.styleId) ?? {
  genre: song.genreId, styleId: song.styleId, references: new Map(),
});
for (const entry of inventory.entries) for (const match of entry.matches) {
  const style = styles.get(match.styleId);
  if (!style) continue;
  style.references.set(resolve(entry.file), entry.name);
}
const rows = [...styles.values()].sort((a, b) => a.genre.localeCompare(b.genre) || a.styleId.localeCompare(b.styleId))
  .map(style => ({ genre: style.genre, styleId: style.styleId, referenceCount: style.references.size,
    target, missing: Math.max(0, target - style.references.size),
    referenceFiles: [...style.references.entries()].map(([file, name]) => ({ file: relative('.', file), name })) }));
const byGenre = new Map<string, { styles: number; references: number; atTarget: number; missingReferences: number }>();
for (const row of rows) {
  const summary = byGenre.get(row.genre) ?? { styles: 0, references: 0, atTarget: 0, missingReferences: 0 };
  summary.styles++;
  summary.references += row.referenceCount;
  if (!row.missing) summary.atTarget++;
  summary.missingReferences += row.missing;
  byGenre.set(row.genre, summary);
}
const summary = { targetPerStyle: target, genreCount: byGenre.size, styleCount: rows.length,
  mappedReferenceFiles: rows.reduce((sum, row) => sum + row.referenceCount, 0),
  stylesAtTarget: rows.filter(row => !row.missing).length,
  stylesBelowTarget: rows.filter(row => row.missing > 0).length,
  stylesWithoutReferences: rows.filter(row => row.referenceCount === 0).length,
  additionalReferencesNeeded: rows.reduce((sum, row) => sum + row.missing, 0) };
const report = { generatedAt: new Date().toISOString(), summary,
  byGenre: Object.fromEntries([...byGenre.entries()].sort(([a], [b]) => a.localeCompare(b))), styles: rows,
  limitations: 'Coverage counts distinct local audio files mapped to each style. It does not certify recording identity, idiomatic fit, or musical authenticity; those require source verification and listening.' };
await mkdir('audit', { recursive: true });
await writeFile('audit/reference-coverage.json', `${JSON.stringify(report, null, 2)}\n`);
const markdown = [
  '# Per-style reference coverage', '',
  `Generated ${report.generatedAt}. Target: **${target} distinct local recordings per style** across ${summary.styleCount} styles.`, '',
  `- Current mapped recordings: ${summary.mappedReferenceFiles}.`,
  `- Styles at target: ${summary.stylesAtTarget}/${summary.styleCount}.`,
  `- Additional recordings needed: ${summary.additionalReferencesNeeded}.`,
  `- Styles with no mapped local recording: ${summary.stylesWithoutReferences}.`, '',
  'This report counts files linked to a style through the sample-song catalog or a genre-local `references.json`. It does not certify recording identity, idiomatic fit, or musical authenticity; source checks and listening remain necessary.', '',
  '## Genre totals', '',
  '| Genre | Styles | At target | Mapped references | Additional needed |', '|---|---:|---:|---:|---:|',
  ...[...byGenre.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([genre, row]) => `| ${genre} | ${row.styles} | ${row.atTarget} | ${row.references} | ${row.missingReferences} |`), '',
  '## Style backlog', '',
  '| Genre | Style | Current | Needed | Local references |', '|---|---|---:|---:|---|',
  ...rows.filter(row => row.missing > 0).map(row => `| ${row.genre} | ${row.styleId} | ${row.referenceCount} | ${row.missing} | ${row.referenceFiles.map(reference => reference.name).join('; ') || '—'} |`), '',
  'The detailed machine-readable report is in ignored `audit/reference-coverage.json`.', '',
].join('\n');
const output = resolve('docs/genre-reference-coverage.md');
await mkdir(dirname(output), { recursive: true });
await writeFile(output, markdown);
console.log(JSON.stringify({ output, ...summary }, null, 2));
