// Renders a complete song exactly the way the app does (makeSheet -> compile
// -> renderPerformanceToMp3), so it can be sanity-checked/listened to outside
// the browser. Usage: npx tsx scripts/render-song.ts [genreId] [out.mp3]
import { writeFileSync } from 'fs';
import { makeSheet } from '../src/engine/generators/arrange';
import { compileWholeSong } from '../src/engine/compiler/wholeSongCompiler';
import { renderPerformanceToMp3 } from '../src/engine/audio/offlineRender';

async function main() {
  const genreId = process.argv[2] || 'salsa';
  const outPath = process.argv[3] || `/tmp/${genreId}.mp3`;

  const sheet = makeSheet(genreId);
  console.error(`[${genreId}] tracks:`, sheet.tracks.map(t => `${t.id}:${t.instrumentId}`).join(', '));
  console.error(`[${genreId}] sections:`, sheet.regions.map(r => `${r.kind}(e${r.energy})`).join(' -> '));

  const perf = compileWholeSong(sheet);
  console.error(`[${genreId}] notes: ${perf.notes.length}, duration: ${perf.duration.toFixed(1)}s`);

  const trackInstruments = new Map(sheet.tracks.map(t => [t.id, t.instrumentId]));

  const blob = await renderPerformanceToMp3(
    perf,
    {
      trackInstruments,
      worldId: sheet.worldId,
      styleId: sheet.styleId,
    },
  );

  const buf = Buffer.from(await blob.arrayBuffer());
  writeFileSync(outPath, buf);
  console.error(`[${genreId}] wrote ${outPath} (${(buf.length / 1024).toFixed(0)} KB)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
