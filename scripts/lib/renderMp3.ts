// Shared "sheet -> performance -> offline MP3" plumbing for scripts/render/.
// NOTE: this is the Node offline engine only. It does NOT run the browser master chain.
import { makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { renderPerformanceToMp3, type Mp3RenderOptions } from '../../src/engine/playback/mp3Export.ts';
import type { Sheet } from '../../src/engine/sheet/sheet.ts';
import type { Performance } from '../../src/engine/band/performanceData.ts';

export interface StyleRef { genreId: string; styleId?: string }
export function buildSong(ref: StyleRef): { sheet: Sheet; perf: Performance } {
  const sheet = ref.styleId ? makeSheet({ genreId: ref.genreId, styleId: ref.styleId }) : makeSheet(ref.genreId);
  return { sheet, perf: compileWholeSong(sheet) };
}
export function trimPerformance(perf: Performance, seconds: number): Performance {
  if (!(seconds > 0) || perf.duration <= seconds) return perf;
  return { ...perf, notes: perf.notes.filter(n => n.time < seconds), duration: seconds };
}
export async function renderToMp3(sheet: Sheet, perf: Performance, extra: Partial<Mp3RenderOptions> = {}): Promise<Buffer> {
  const trackInstruments = new Map<string, string>(sheet.tracks.flatMap(t => t.instrumentId ? [[t.id, t.instrumentId] as const] : []));
  const options: Mp3RenderOptions = { trackInstruments, worldId: sheet.worldId, styleId: sheet.styleId, ...extra };
  const blob = await renderPerformanceToMp3(perf, options);
  return Buffer.from(await blob.arrayBuffer());
}
export async function pool<T>(items: T[], concurrency: number, fn: (item: T, index: number) => Promise<void>): Promise<void> {
  let next = 0;
  await Promise.all(Array.from({ length: Math.max(1, concurrency) }, async () => {
    while (next < items.length) { const i = next++; await fn(items[i], i); }
  }));
}
