// RENDER: batch-render the default starter of many styles to MP3 with the Node offline engine.
// Heads-up: Node offline engine only - no browser master chain, so use for smoke tests / A-B of the note
// content, never to judge loudness or tone (use reports/style-levels.ts for levels).
//
// Usage: tsx scripts/render/styles.ts [--set=all|expansion] [--seconds=12] [--concurrency=2] [--out=dir] [--style=id[,id]]
// Usage: tsx scripts/render/styles.ts [--seconds=12] [--concurrency=2] [--out=dir] [--style=id[,id]]
//   --seconds=0       full length (default: 0 for --set=all, 12 for --set=expansion)
import { mkdirSync, writeFileSync } from 'node:fs';
import { ALL_STYLES } from '../../src/engine/style/registry.ts';
import { flag } from '../lib/io.ts';
import { buildSong, pool, renderToMp3, trimPerformance } from '../lib/renderMp3.ts';

const seconds = Math.max(0, Number(flag('seconds') ?? 0));
const concurrency = Math.max(1, Math.min(6, Number(flag('concurrency') ?? 4)));
const out = String(flag('out') ?? '/tmp/mixgenres-style-mp3');
const only = typeof flag('style') === 'string' ? new Set(String(flag('style')).split(',')) : undefined;
mkdirSync(out, { recursive: true });

const styles = ALL_STYLES.filter(s => !only || only.has(s.id));
const failures: string[] = [];
let rendered = 0;

await pool(styles, concurrency, async style => {
  try {
    const { sheet, perf } = buildSong({ genreId: style.primaryGenre, styleId: style.id });
        if (!perf.notes.length) throw new Error('compiled performance contains zero notes');
    const trimmed = trimPerformance(perf, seconds);
    const bytes = await renderToMp3(sheet, trimmed);
        writeFileSync(`${out}/${style.id.replace(/[^a-z0-9_-]/gi, '-')}.mp3`, bytes);
    rendered++;
    console.log(`PASS ${rendered + failures.length}/${styles.length} ${style.id} ${bytes.length} bytes ${trimmed.duration.toFixed(1)}s`);
  } catch (error) {
    failures.push(`${style.id}: ${error instanceof Error ? error.message : String(error)}`);
    console.error(`FAIL ${failures.at(-1)}`);
  }
});

const report = { status: failures.length ? 'FAIL' : 'PASS', styles: styles.length, rendered, failed: failures.length, seconds, concurrency, failures };
writeFileSync(`${out}/manifest.json`, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
