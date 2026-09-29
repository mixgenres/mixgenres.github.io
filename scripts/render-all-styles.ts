import { mkdirSync, writeFileSync } from 'node:fs';
import { ALL_STYLES } from '../src/engine/style';
import { makeSheet } from '../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';
import { renderPerformanceToMp3 } from '../src/engine/playback/mp3Export.ts';

const outDir = process.argv[2] || '/tmp/mixgenres-style-mp3';
const maxSeconds = Math.max(0, Number(process.argv[3] || 0));
const concurrency = Math.max(1, Math.min(6, Number(process.argv[4] || 4)));
mkdirSync(outDir, { recursive: true });

let ok = 0;
let failed = 0;
let nextIndex = 0;
async function renderNext(): Promise<void> {
  const style = ALL_STYLES[nextIndex++];
  if (!style) return;
  const safe = style.id.replace(/[^a-z0-9_-]/gi, '-');
  try {
    const sheet = makeSheet({ genreId: style.primaryGenre, styleId: style.id });
    let performance = compileWholeSong(sheet);
    // Keep the exhaustive catalog pass practical while retaining several bars
    // of each style for execution and mix-balance review.
    if (maxSeconds > 0 && performance.duration > maxSeconds) {
      performance = {
        ...performance,
        notes: performance.notes.filter(note => note.time < maxSeconds),
        duration: maxSeconds,
      };
    }
    const blob = await renderPerformanceToMp3(performance, {
      trackInstruments: new Map(sheet.tracks.flatMap(t => t.instrumentId ? [[t.id, t.instrumentId] as const] : [])),
      worldId: sheet.worldId,
      styleId: sheet.styleId,
    });
    const bytes = Buffer.from(await blob.arrayBuffer());
    writeFileSync(`${outDir}/${safe}.mp3`, bytes);
    ok++;
    console.log(`PASS ${ok + failed}/${ALL_STYLES.length} ${style.id} ${bytes.length} bytes ${performance.duration.toFixed(1)}s`);
  } catch (error) {
    failed++;
    console.error(`FAIL ${style.id}: ${String(error)}`);
  }
  await renderNext();
}
await Promise.all(Array.from({ length: concurrency }, () => renderNext()));
console.log(`rendered=${ok} failed=${failed} total=${ALL_STYLES.length} out=${outDir}`);
if (failed) process.exitCode = 1;
