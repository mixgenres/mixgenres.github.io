// RENDER (diagnostic): FULL mix + every stem solo as MP3 + sections.json (time ranges, per-track notes/velocity).
// Analyse with: python3 scripts/render/stems-analyze.py <outDir>   (per-section RMS of FULL and each stem)
// Offline engine only - omits the browser master chain, so treat dB values as relative hints, not final loudness.
// Usage: tsx scripts/render/stems.ts <genreId> [styleId|-] [outDir]
import { writeFileSync, mkdirSync } from 'node:fs';
import { makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { renderPerformanceToMp3 } from '../../src/engine/playback/mp3Export.ts';
const genre = process.argv[2] || 'kizomba';
const styleId = process.argv[3] && process.argv[3] !== '-' ? process.argv[3] : undefined;
const dir = process.argv[4] || `/tmp/sections/${styleId ?? genre}`; mkdirSync(dir, { recursive: true });
const sheet: any = styleId ? makeSheet({ genreId: genre, styleId } as any) : makeSheet(genre);
const perf: any = compileWholeSong(sheet);
const trackInstruments = new Map<string, string>(sheet.tracks.flatMap((t: any) => t.instrumentId ? [[t.id, t.instrumentId] as const] : []));
const opts = { trackInstruments, worldId: sheet.worldId, styleId: sheet.styleId } as any;
const secs = sheet.regions.map((r: any) => {
  const t0 = perf.bars[r.start]?.time ?? 0, t1 = r.end < perf.bars.length ? perf.bars[r.end].time : perf.duration;
  return { id: r.id, kind: r.kind, energy: r.energy, startBar: r.start, endBar: r.end, t0, t1,
    tracks: Object.fromEntries(sheet.tracks.map((t: any) => { const ns = perf.notes.filter((n: any) => n.trackId === t.id && n.time >= t0 && n.time < t1);
      return [t.id, { notes: ns.length, meanVel: ns.length ? ns.reduce((a: number, n: any) => a + n.vel, 0) / ns.length : 0, pattern: sheet.arrangement?.[r.id]?.[t.id] ?? null }]; })) };
});
writeFileSync(`${dir}/sections.json`, JSON.stringify({ genre, styleId: sheet.styleId, duration: perf.duration, tracks: sheet.tracks.map((t: any) => ({ id: t.id, inst: t.instrumentId, role: t.role, vol: t.volume })), secs }, null, 1));
async function render(name: string, ids?: string[]) {
  const p = ids ? { ...perf, notes: perf.notes.filter((n: any) => ids.includes(n.trackId)) } : perf;
  const blob = await renderPerformanceToMp3(p, { ...opts, selectedTrackIds: ids });
  writeFileSync(`${dir}/${name}.mp3`, Buffer.from(await blob.arrayBuffer()));
}
(async () => {
  await render('FULL');
  for (const t of sheet.tracks) if (perf.notes.some((n: any) => n.trackId === t.id)) await render(t.id, [t.id]);
  console.log('done', dir);
})().catch(e => { console.error(e); process.exit(1); });
