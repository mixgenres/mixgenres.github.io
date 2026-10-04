import { playbackResources } from '../playback/playbackResources';
import { PCMStemCache } from './stemCache';
import { registerCache } from './lru';
import { contentKey } from './contentKey';
import type { Performance } from '../band/performanceData';
import type { Mp3RenderOptions, RenderedPerformanceAudio } from '../playback/mp3Export';

/** Main-thread section PCM survives worker reassignment and mixer edits. */
const audio = new PCMStemCache(playbackResources().partCacheBytes, 'preparedPartAudio');
const mixes = new PCMStemCache(playbackResources().mixCacheBytes, 'preparedSongMix');
registerCache(audio);
registerCache(mixes);

interface PreparationJob {
  promise: Promise<RenderedPerformanceAudio>;
  controller: AbortController;
  users: number;
}
const jobs = new Map<string, PreparationJob>();

/** Mixer settings are deliberately absent from the physical audio identity. */
export function preparedAudioKey(performance: Performance, options: Mp3RenderOptions) {
  const ids = new Set(options.selectedTrackIds ?? options.trackInstruments.keys());
  return contentKey([
    'part-audio-v1', [...ids].sort(),
    [...options.trackInstruments].filter(([id]) => ids.has(id)),
    [...options.trackRoles ?? []].filter(([id]) => ids.has(id)),
    options.worldId, options.styleId,
    performance.notes.filter(note => ids.has(note.trackId)),
    performance.ccs.filter(cc => ids.has(cc.trackId)),
    options.renderWindow ?? [performance.duration, performance.tail],
    options.maxDurationSeconds,
    options.rawOutputStartSample,
  ]);
}

/** A completed section can satisfy a short playback request without new DSP. */
export function completedPartAudio(key: string): RenderedPerformanceAudio | undefined {
  if (!audio.has(key)) return undefined;
  const ready = audio.get(key)!;
  return { sampleRate: 44100, left: ready.left, right: ready.right };
}

/** A lookahead render can cover later windows of the same physical section.
 * Search only retained entries; the existing PCM budget owns their lifetime. */
export function completedPartAudioWindow(key: string, from: number, to: number) {
  const complete = completedPartAudio(key);
  if (complete) return { audio: complete, from: 0 };
  const prefix = `${key}:prefix:`;
  for (const candidate of audio.keys()) {
    if (!candidate.startsWith(prefix)) continue;
    const [end, start] = candidate.slice(prefix.length).split(':from:').map(Number);
    if (start > from || end < to) continue;
    const ready = audio.get(candidate)!;
    if (start + ready.left.length < to) continue;
    return { audio: { sampleRate: 44100, left: ready.left, right: ready.right }, from: start };
  }
}

/** Share work between consumers; only the final cancellation aborts synthesis. */
export function preparePartAudio(
  key: string,
  signal: AbortSignal | undefined,
  render: (signal: AbortSignal) => Promise<RenderedPerformanceAudio>,
  retain = true,
  cache = audio,
): Promise<RenderedPerformanceAudio> {
  const cancelled = () => new DOMException('Audio preparation superseded', 'AbortError');
  if (signal?.aborted) return Promise.reject(cancelled());
  const ready = retain ? cache.get(key) : undefined;
  if (ready) return Promise.resolve({ sampleRate: 44100, left: ready.left, right: ready.right, buffer: ready.buffer });
  let job = jobs.get(key);
  if (!job || job.controller.signal.aborted) {
    const controller = new AbortController();
    const created: PreparationJob = {
      controller, users: 0,
      promise: Promise.resolve().then(() => render(controller.signal)).then(result => {
        if (retain && !controller.signal.aborted) {
          cache.set(key, { left: result.left, right: result.right, startSample: 0, buffer: result.buffer });
        }
        return result;
      }).finally(() => {
        if (jobs.get(key) === created) jobs.delete(key);
      }),
    };
    job = created;
    jobs.set(key, job);
  }
  const current = job;
  current.users++;
  return new Promise((resolve, reject) => {
    let done = false;
    const release = () => {
      if (done) return;
      done = true;
      signal?.removeEventListener('abort', abort);
      if (--current.users === 0) current.controller.abort();
    };
    const abort = () => { release(); reject(cancelled()); };
    signal?.addEventListener('abort', abort, { once: true });
    current.promise.then(
      result => { if (!done) { release(); resolve(result); } },
      error => { if (!done) { release(); reject(error); } },
    );
  });
}

export function preparedAudioStats() { return { ...audio.getStats(), bytes: audio.byteLength, pending: jobs.size }; }
export function preparedMixStats() { return { ...mixes.getStats(), bytes: mixes.byteLength }; }

export function prepareSongMix(
  key: string,
  signal: AbortSignal | undefined,
  render: (signal: AbortSignal) => Promise<RenderedPerformanceAudio>,
) {
  return preparePartAudio(`mix:${key}`, signal, render, true, mixes);
}

export function clearPreparedAudio() {
  for (const job of jobs.values()) job.controller.abort();
  jobs.clear();
  audio.clear();
  mixes.clear();
}
