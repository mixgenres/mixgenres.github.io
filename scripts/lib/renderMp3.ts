// Shared "sheet -> performance -> offline MP3" plumbing for everything under scripts/render/.
// NOTE: this is the Node offline engine only. It does NOT run the browser master chain
// (Web Audio bus/EQ/compressor/room), so never judge final loudness or tone from these files.
import { makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { renderPerformanceToMp3 } from '../../src/engine/playback/mp3Export.ts';

export interface StyleRef { genreId: string; styleId?: string }

export function buildSong(ref: StyleRef) {
  const sheet: any = ref.styleId ? makeSheet({ genreId: ref.genreId, styleId: ref.styleId } as any) : makeSheet(ref.genreId);
  return { sheet, perf: compileWholeSong(sheet) as any };
}

/** Keeps only the first `seconds` of a performance (0 = no trim). */
export function trimPerformance(perf: any, seconds: number) {
  if (!(seconds > 0) || perf.duration <= seconds) return perf;
  return { ...perf, notes: perf.notes.filter((n: any) => n.time < seconds), duration: seconds };
}

export async function renderToMp3(sheet: any, perf: any, extra: Record<string, unknown> = {}): Promise<Buffer> {
  const trackInstruments = new Map<string, string>(sheet.tracks.flatMap((t: any) => (t.instrumentId ? [[t.id, t.instrumentId] as const] : [])));
  const blob = await renderPerformanceToMp3(perf, { trackInstruments, worldId: sheet.worldId, styleId: sheet.styleId, ...extra } as any);
  return Buffer.from(await blob.arrayBuffer());
}

/** Runs `fn` over `items` with at most `concurrency` in flight. */
export async function pool<T>(items: T[], concurrency: number, fn: (item: T, index: number) => Promise<void>): Promise<void> {
  let next = 0;
  await Promise.all(Array.from({ length: Math.max(1, concurrency) }, async () => {
    while (next < items.length) { const i = next++; await fn(items[i], i); }
  }));
}
