import { mkdirSync, writeFileSync } from 'node:fs';
import { ALL_STYLES } from '../src/data/styles';
import { makeSheet } from '../src/engine/generators/arrange';
import { compileWholeSong } from '../src/engine/compiler/wholeSongCompiler';
import { renderPerformanceToMp3 } from '../src/engine/audio/offlineRender';

const outDir = process.argv[2] || '/tmp/mixgenres-style-mp3';
mkdirSync(outDir, { recursive: true });

let ok = 0;
let failed = 0;
for (const style of ALL_STYLES) {
  const safe = style.id.replace(/[^a-z0-9_-]/gi, '-');
  try {
    const sheet = makeSheet({ genreId: style.primaryGenre, styleId: style.id });
    const performance = compileWholeSong(sheet);
    const blob = await renderPerformanceToMp3(performance, {
      trackInstruments: new Map(sheet.tracks.map(t => [t.id, t.instrumentId])),
      worldId: sheet.worldId,
      styleId: sheet.styleId,
    });
    const bytes = Buffer.from(await blob.arrayBuffer());
    writeFileSync(`${outDir}/${safe}.mp3`, bytes);
    ok++;
    console.log(`PASS ${style.id} ${bytes.length} bytes`);
  } catch (error) {
    failed++;
    console.error(`FAIL ${style.id}: ${String(error)}`);
  }
}
console.log(`rendered=${ok} failed=${failed} total=${ALL_STYLES.length} out=${outDir}`);
if (failed) process.exitCode = 1;
