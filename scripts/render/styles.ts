// RENDER: batch-render the default starter of many styles to MP3 with the Node offline engine.
// Replaces render-all-styles.ts and render-catalog-expansion.ts (identical loop, different filter).
// Heads-up: Node offline engine only - no browser master chain, so use for smoke tests / A-B of the note
// content, never to judge loudness or tone (use reports/style-levels.ts for levels).
//
// Usage: tsx scripts/render/styles.ts [--set=all|expansion] [--seconds=12] [--concurrency=2] [--out=dir] [--style=id[,id]]
//   --set=expansion   only the 145 catalog-expansion styles (writes manifest.json, requires 8 tracks + >1KB mp3)
//   --seconds=0       full length (default: 0 for --set=all, 12 for --set=expansion)
import { mkdirSync, writeFileSync } from 'node:fs';
import { ALL_STYLES } from '../../src/engine/style/registry.ts';
import { CATALOG_EXPANSION_STYLE_IDS } from '../../src/data/styles/styleFormTemplates.ts';
import { flag } from '../lib/io.ts';
import { buildSong, pool, renderToMp3, trimPerformance } from '../lib/renderMp3.ts';

const set = String(flag('set') ?? 'all');
const expansion = set === 'expansion';
const seconds = Math.max(0, Number(flag('seconds') ?? (expansion ? 12 : 0)));
const concurrency = Math.max(1, Math.min(6, Number(flag('concurrency') ?? (expansion ? 2 : 4))));
const out = String(flag('out') ?? (expansion ? 'audit/catalog-renders' : '/tmp/mixgenres-style-mp3'));
const only = typeof flag('style') === 'string' ? new Set(String(flag('style')).split(',')) : undefined;
mkdirSync(out, { recursive: true });

const expansionIds = new Set<string>(CATALOG_EXPANSION_STYLE_IDS);
const styles = (ALL_STYLES as any[]).filter(s => (!expansion || expansionIds.has(s.id)) && (!only || only.has(s.id)));
const failures: string[] = [];
let rendered = 0;

await pool(styles, concurrency, async style => {
  try {
    const { sheet, perf } = buildSong({ genreId: style.primaryGenre, styleId: style.id });
    if (expansion && sheet.tracks.length !== 8) throw new Error(`starter has ${sheet.tracks.length} tracks; expected 8`);
    if (!perf.notes.length) throw new Error('compiled performance contains zero notes');
    const trimmed = trimPerformance(perf, seconds);
    const bytes = await renderToMp3(sheet, trimmed);
    if (expansion && bytes.length < 1024) throw new Error(`rendered MP3 is suspiciously small (${bytes.length} bytes)`);
    writeFileSync(`${out}/${style.id.replace(/[^a-z0-9_-]/gi, '-')}.mp3`, bytes);
    rendered++;
    console.log(`PASS ${rendered + failures.length}/${styles.length} ${style.id} ${bytes.length} bytes ${trimmed.duration.toFixed(1)}s`);
  } catch (error) {
    failures.push(`${style.id}: ${error instanceof Error ? error.message : String(error)}`);
    console.error(`FAIL ${failures.at(-1)}`);
  }
});

const report = { status: failures.length ? 'FAIL' : 'PASS', set, styles: styles.length, rendered, failed: failures.length, seconds, concurrency, failures };
writeFileSync(`${out}/manifest.json`, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
