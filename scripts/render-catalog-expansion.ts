import { mkdirSync, writeFileSync } from 'node:fs';
import { CATALOG_EXPANSION_STYLE_IDS } from '../src/data/styles/styleFormTemplates.ts';
import { ALL_STYLES } from '../src/engine/style/registry.ts';
import { makeSheet } from '../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';
import { renderPerformanceToMp3 } from '../src/engine/playback/mp3Export.ts';

const outDir = process.argv[2] || 'audit/catalog-renders';
const maxSeconds = Math.max(0, Number(process.argv[3] || 12));
const concurrency = Math.max(1, Math.min(4, Number(process.argv[4] || 2)));
mkdirSync(outDir, { recursive: true });

const expansionIds = new Set<string>(CATALOG_EXPANSION_STYLE_IDS);
const styles = ALL_STYLES.filter(style => expansionIds.has(style.id));
const failures: string[] = [];
let nextIndex = 0;
let rendered = 0;

async function renderNext(): Promise<void> {
  const style = styles[nextIndex++];
  if (!style) return;
  const safe = style.id.replace(/[^a-z0-9_-]/gi, '-');
  try {
    const sheet = makeSheet({ genreId: style.primaryGenre, styleId: style.id });
    if (sheet.tracks.length !== 8) throw new Error(`starter has ${sheet.tracks.length} tracks; expected 8`);
    let performance = compileWholeSong(sheet);
    if (!performance.notes.length) throw new Error('compiled performance contains zero notes');
    if (maxSeconds > 0 && performance.duration > maxSeconds) {
      performance = { ...performance, notes: performance.notes.filter(note => note.time < maxSeconds), duration: maxSeconds };
    }
    const blob = await renderPerformanceToMp3(performance, {
      trackInstruments: new Map(sheet.tracks.flatMap(track => track.instrumentId ? [[track.id, track.instrumentId] as const] : [])),
      worldId: sheet.worldId,
      styleId: sheet.styleId,
    });
    const bytes = Buffer.from(await blob.arrayBuffer());
    if (bytes.length < 1024) throw new Error(`rendered MP3 is suspiciously small (${bytes.length} bytes)`);
    writeFileSync(`${outDir}/${safe}.mp3`, bytes);
    rendered++;
    console.log(`PASS ${rendered}/${styles.length} ${style.id} ${bytes.length} bytes ${performance.duration.toFixed(1)}s`);
  } catch (error) {
    failures.push(`${style.id}: ${error instanceof Error ? error.message : String(error)}`);
    console.error(`FAIL ${style.id}: ${failures.at(-1)}`);
  }
  await renderNext();
}

await Promise.all(Array.from({ length: concurrency }, () => renderNext()));
const report = { status: failures.length ? 'FAIL' : 'PASS', styles: styles.length, rendered, failed: failures.length, maxSeconds, concurrency, failures };
writeFileSync(`${outDir}/manifest.json`, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
