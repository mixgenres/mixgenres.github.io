import fs from 'node:fs';
import { reportMetadata } from './lib/auditReport';
import path from 'node:path';
import { INSTRUMENTS_BY_ID } from '../src/data/instruments';
import { getInstrumentModule } from '../src/engine/playback/instrumentRegistry.ts';
import { ALL_STYLES, ALL_STYLES_BY_ID } from '../src/engine/style/registry';
import { makeSheet } from '../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';
import { styleCalibrationTarget } from '../src/engine/style/performance-schema';
import { starterSongs } from '../src/data/songs/starters';
import { GENRE_WORLDS_BY_ID } from '../src/data/genres';

const root = process.cwd();
const sourceFiles: string[] = [];
function walk(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'old') continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(ts|tsx|mjs|js)$/.test(entry.name)) sourceFiles.push(p);
  }
}
walk(path.join(root, 'src'));

const findings: string[] = [];
const forbidden = /(?:TODO|FIXME|not implemented|unimplemented|legacyResolveDialect|legacy fallback)/i;
for (const file of sourceFiles) {
  const text = fs.readFileSync(file, 'utf8');
  if (forbidden.test(text)) findings.push(`legacy/mock marker: ${path.relative(root, file)}`);
}

const missingModules: string[] = [];
for (const id of Object.keys(INSTRUMENTS_BY_ID)) {
  try { getInstrumentModule(id); } catch { missingModules.push(id); }
}

const styleFailures: string[] = [];
for (const starter of starterSongs) {
  if (!starter.genreId || !GENRE_WORLDS_BY_ID[starter.genreId]) styleFailures.push(`${starter.id}: unknown genre ${starter.genreId ?? '(missing)'}`);
  if (starter.styleId && (!ALL_STYLES_BY_ID[starter.styleId] || ALL_STYLES_BY_ID[starter.styleId].primaryGenre !== starter.genreId)) styleFailures.push(`${starter.id}: invalid style ${starter.styleId}`);
  if (starter.instruments.length < 6 || starter.instruments.length > 8) styleFailures.push(`${starter.id}: expected 6–8 instruments, got ${starter.instruments.length}`);
  for (const id of starter.instruments) if (!INSTRUMENTS_BY_ID[id]) styleFailures.push(`${starter.id}: unknown instrument ${id}`);
}
const styleReports: Array<Record<string, unknown>> = [];
for (const style of ALL_STYLES) {
  try {
    const target = styleCalibrationTarget(style.primaryGenre, style.id, style);
    const sheet = makeSheet(style.primaryGenre, style.id);
    // makeSheet() is the default-song constructor, so its 6–8 part ensemble
    // check belongs here only as a catalog regression test. It must never be used
    // as an engine-wide ceiling: users can add unlimited tracks afterward.
    if (sheet.tracks.length < 6 || sheet.tracks.length > 8) styleFailures.push(`${style.id}: expected 6–8 tracks, got ${sheet.tracks.length}`);
    for (const t of sheet.tracks) { if (t.instrumentId) getInstrumentModule(t.instrumentId); }
    const perf = compileWholeSong(sheet, 0);
    if (!perf.notes.length) styleFailures.push(`${style.id}: zero notes`);
    styleReports.push({
      styleId: style.id,
      genre: style.primaryGenre,
      referenceSong: target.referenceSong,
      referenceTone: target.referenceTone,
      instruments: sheet.tracks.map(t => t.instrumentId),
      notes: perf.notes.length,
      duration: perf.duration,
      progression: target.preferredProgression,
    });
  } catch (err) {
    styleFailures.push(`${style.id}: ${err instanceof Error ? err.message : String(err)}`);
  }
}

const report = {
  ...reportMetadata(),
  styles: ALL_STYLES.length,
  styleFailures,
  instruments: Object.keys(INSTRUMENTS_BY_ID).length,
  missingInstrumentModules: missingModules,
  staticLegacyMarkers: findings,
  markerScope: 'Informational text scan only; musical and runtime failures are independent gates',
  styleReports,
  status: styleFailures.length || missingModules.length ? 'FAIL' : 'PASS',
};
fs.mkdirSync(path.join(root, 'audit'), { recursive: true });
fs.writeFileSync(path.join(root, 'audit', 'engine-integrity-audit.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ status: report.status, styles: report.styles, styleFailures: styleFailures.length, instruments: report.instruments, missingInstrumentModules: missingModules.length, staticLegacyMarkers: findings.length }, null, 2));
if (report.status === 'FAIL') process.exit(1);
