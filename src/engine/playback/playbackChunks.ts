import type { Performance } from '../band/performanceData';

export interface PlaybackChunk {
  index: number;
  id: string;
  regionId: string;
  startBar: number;
  endBar: number;
  /** Exact transport interval owned by this chunk. */
  start: number;
  end: number;
  /** Wider master window used to settle dynamics/effects before trimming. */
  renderStart: number;
  renderEnd: number;
}

const DEFAULT_BARS_PER_CHUNK = 2;
const PRE_ROLL_SECONDS = 0.35;
const POST_ROLL_SECONDS = 0.20;
const SAMPLE_RATE = 44100;

/**
 * Playback is intentionally more granular than musical interpretation.
 * The first bar of every authored region is isolated for fast starts/seeks;
 * the remainder is grouped in small bar-aligned chunks without crossing a
 * region boundary. Phrase/section analysis remains untouched upstream.
 */
export function planPlaybackChunks(performance: Performance, barsPerChunk = DEFAULT_BARS_PER_CHUNK): PlaybackChunk[] {
  const total = Math.ceil(Math.max(0.1, performance.duration + (performance.tail ?? 0)) * SAMPLE_RATE) / SAMPLE_RATE;
  const chunkBars = Math.max(1, Math.floor(Number.isFinite(barsPerChunk) ? barsPerChunk : DEFAULT_BARS_PER_CHUNK));
  const bars = performance.bars;
  if (!bars.length) {
    return [{ index: 0, id: 'song:0', regionId: 'song', startBar: 0, endBar: -1,
      start: 0, end: total, renderStart: 0, renderEnd: total }];
  }

  const chunks: PlaybackChunk[] = [];
  let cursor = 0;
  while (cursor < bars.length) {
    const regionId = bars[cursor].regionId;
    let regionEnd = cursor + 1;
    while (regionEnd < bars.length && bars[regionEnd].regionId === regionId) regionEnd++;

    let local = cursor;
    let first = true;
    while (local < regionEnd) {
      const count = first ? 1 : Math.min(chunkBars, regionEnd - local);
      const firstBar = bars[local];
      const lastBar = bars[local + count - 1];
      // Quantize absolute boundaries once; rounding each chunk's duration would
      // insert or remove samples at every join and accumulate drift on loops.
      const start = Math.round(firstBar.start * SAMPLE_RATE) / SAMPLE_RATE;
      const end = Math.round(lastBar.end * SAMPLE_RATE) / SAMPLE_RATE;
      chunks.push({
        index: chunks.length,
        id: `${regionId}:${firstBar.index}-${lastBar.index}`,
        regionId,
        startBar: firstBar.index,
        endBar: lastBar.index,
        start,
        end,
        renderStart: Math.max(0, start - PRE_ROLL_SECONDS),
        renderEnd: Math.min(total, end + POST_ROLL_SECONDS),
      });
      local += count;
      first = false;
    }
    cursor = regionEnd;
  }

  const last = chunks.at(-1)!;
  if (total > last.end) {
    last.end = total;
    last.renderEnd = total;
  }
  return chunks;
}

export function playbackChunkAt(chunks: PlaybackChunk[], seconds: number): number {
  if (!chunks.length) return -1;
  const duration = chunks.at(-1)!.end;
  const position = duration > 0 ? ((seconds % duration) + duration) % duration : 0;
  const found = chunks.findIndex(chunk => position >= chunk.start && position < chunk.end);
  return found >= 0 ? found : chunks.length - 1;
}

/** Keep transport allocations bounded even in very slow meters/long releases.
 * DSP attack ownership still uses the original bar-aligned sections above. */
export function planTransportChunks(performance: Performance): PlaybackChunk[] {
  return planPlaybackChunks(performance).flatMap(chunk => {
    // Keep the opening prefix short; subsequent four-second chunks avoid
    // repeatedly synthesizing overlapping prefixes of the same DSP section.
    const first = Math.round(chunk.start * SAMPLE_RATE), last = Math.round(chunk.end * SAMPLE_RATE);
    const parts: PlaybackChunk[] = [];
    for (let frame = first; frame < last;) {
      const maxFrames = (frame === 0 ? 2 : 4) * SAMPLE_RATE;
      const endFrame = Math.min(frame + maxFrames, last);
      const start = frame / SAMPLE_RATE, end = endFrame / SAMPLE_RATE;
      parts.push({ ...chunk, id: `${chunk.id}:${frame}`, start, end,
        renderStart: Math.max(0, start - PRE_ROLL_SECONDS), renderEnd: Math.min(performance.duration + (performance.tail ?? 0), end + POST_ROLL_SECONDS) });
      frame = endFrame;
    }
    return parts;
  }).map((chunk, index) => ({ ...chunk, index }));
}
