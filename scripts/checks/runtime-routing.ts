import { starterSongs } from '../../src/data/songs/starters.ts';
import { INSTRUMENTS_BY_ID } from '../../src/engine/lookup/instruments.ts';
import { instrumentEngineKeys } from '../../src/engine/lookup/instrumentKeys.ts';
import { getInstrumentModule } from '../../src/engine/playback/instrumentRegistry.ts';
import { determineBusCategory } from '../../src/engine/playback/elementaryEngine.ts';
import { resolveDialect } from '../../src/engine/band/genreDialect.ts';

const failures: string[] = [];
const rows: Record<string, unknown>[] = [];
for (const starter of starterSongs) {
  for (const instrumentId of starter.instruments) {
    const def = INSTRUMENTS_BY_ID[instrumentId];
    if (!def) { failures.push(`${starter.genreId}/${instrumentId}: missing catalog definition`); continue; }
    let moduleId = '';
    try { moduleId = getInstrumentModule(instrumentId).id; } catch (e) { failures.push(`${starter.genreId}/${instrumentId}: ${String(e)}`); }
    const dialect = resolveDialect(instrumentId, starter.genreId, starter.styleId);
    if (!dialect) failures.push(`${starter.genreId}/${instrumentId}: dialect resolved null`);
    if ((starter.genreId === 'tango' || starter.genreId === 'flamenco') && dialect?.id.endsWith(':generic')) failures.push(`${starter.genreId}/${instrumentId}: silently fell into generic dialect`);
    if (!instrumentEngineKeys(instrumentId).length) failures.push(`${starter.genreId}/${instrumentId}: no semantic engine key`);
    const category = determineBusCategory(def.acousticProfile?.role, instrumentId);
    rows.push({ genre: starter.genreId, styleId: starter.styleId, instrumentId, moduleId, family: def.family, engineKeys: instrumentEngineKeys(instrumentId), busCategory: category, dialectId: dialect?.id ?? null, dialectTechnique: dialect?.defaultTechnique ?? null });
  }
}
console.log(JSON.stringify({ status: failures.length ? 'FAIL' : 'PASS', starters: starterSongs.length, routes: rows.length, failures, rows }, null, 2));
if (failures.length) process.exit(1);
