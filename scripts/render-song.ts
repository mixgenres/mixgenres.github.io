// Renders a complete song exactly the way the app does (makeSheet -> compile
// -> renderPerformanceToMp3), so it can be sanity-checked/listened to outside
// the browser. Usage: npx tsx scripts/render-song.ts [genreId] [out.mp3]
import { writeFileSync } from 'fs';
import { makeSheet } from '../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';
import { renderPerformanceToMp3 } from '../src/engine/playback/mp3Export.ts';

async function main() {
  const genreId = process.argv[2] || 'salsa';
  const outPath = process.argv[3] || `/tmp/${genreId}.mp3`;
  const maxSeconds = Math.max(0, Number(process.argv[4] || 0));

  const sheet = makeSheet(genreId);
  console.error(`[${genreId}] tracks:`, sheet.tracks.map(t => `${t.id}:${t.instrumentId}`).join(', '));
  console.error(`[${genreId}] sections:`, sheet.regions.map(r => `${r.kind}(e${r.energy})`).join(' -> '));

  let perf = compileWholeSong(sheet);
  if (maxSeconds > 0 && perf.duration > maxSeconds) {
    perf = { ...perf, notes: perf.notes.filter(n => n.time < maxSeconds), duration: maxSeconds };
  }
  console.error(`[${genreId}] notes: ${perf.notes.length}, duration: ${perf.duration.toFixed(1)}s${maxSeconds ? ' (excerpt)' : ''}`);

  const trackInstruments = new Map(sheet.tracks.flatMap(t => t.instrumentId ? [[t.id, t.instrumentId] as const] : []));

  const blob = await renderPerformanceToMp3(
    perf,
    {
      trackInstruments,
      mixState: { volume: Object.fromEntries(sheet.tracks.map(t => [t.id, t.volume])) },
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
