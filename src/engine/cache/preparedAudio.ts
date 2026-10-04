import { playbackResources } from '../playback/playbackResources';
import { PCMStemCache } from './stemCache';
import { registerCache } from './lru';
import { contentKey } from './contentKey';
import type { Performance } from '../band/performanceData';
import type { Mp3RenderOptions, RenderedPerformanceAudio } from '../playback/mp3Export';
import { getPersistentPreparedAudio, putPersistentPreparedAudio, persistentPreparedAudioStats } from './persistentPreparedAudio';

/** Main-thread section PCM survives worker reassignment and mixer edits. */
const audio = new PCMStemCache(playbackResources().partCacheBytes, 'preparedPartAudio');
const mixes = new PCMStemCache(playbackResources().mixCacheBytes, 'preparedSongMix');
registerCache(audio);
registerCache(mixes);

interface PreparationJob {
  promise: Promise<RenderedPerformanceAudio>;
  controller: AbortController;
  users: number;
  retain: boolean;
  persist: boolean;
  cache: PCMStemCache;
}
const jobs = new Map<string, PreparationJob>();

/** Mixer settings are deliberately absent from the physical audio identity. */
export function preparedAudioKey(performance: Performance, options: Mp3RenderOptions) {
  const ids = new Set(options.selectedTrackIds ?? options.trackInstruments.keys());
  return contentKey([
    // This version is part of the physical-render contract. Bump it whenever
    // synthesis changes in a way not already represented by the inputs below.
    'part-audio-v2', [...ids].sort(),
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
 * Search RAM first; a complete persistent section can then hydrate RAM and
 * satisfy a short playback window without running DSP again. */
export async function completedPartAudioWindow(key: string, from: number, to: number, signal?: AbortSignal) {
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
  const persisted = await getPersistentPreparedAudio(key);
  if (signal?.aborted) throw new DOMException('Audio preparation superseded', 'AbortError');
  if (!persisted || persisted.left.length < to) return undefined;
  audio.set(key, persisted);
  return { audio: { sampleRate: 44100, left: persisted.left, right: persisted.right }, from: 0 };
}

/** Share work between consumers; only the final cancellation aborts synthesis. */
export function preparePartAudio(
  key: string,
  signal: AbortSignal | undefined,
  render: (signal: AbortSignal) => Promise<RenderedPerformanceAudio>,
  retain = true,
  cache = audio,
  persist = false,
): Promise<RenderedPerformanceAudio> {
  const cancelled = () => new DOMException('Audio preparation superseded', 'AbortError');
  if (signal?.aborted) return Promise.reject(cancelled());
  const ready = retain ? cache.get(key) : undefined;
  if (ready) return Promise.resolve({ sampleRate: 44100, left: ready.left, right: ready.right, buffer: ready.buffer });
  let job = jobs.get(key);
  if (!job || job.controller.signal.aborted) {
    const controller = new AbortController();
    let loadedFromPersistent = false;
    const created = { controller, users: 0, retain, persist, cache } as PreparationJob;
    created.promise = Promise.resolve().then(async () => {
      if (created.persist) {
        const stored = await getPersistentPreparedAudio(key);
        if (controller.signal.aborted) throw cancelled();
        if (stored) {
          loadedFromPersistent = true;
          return { sampleRate: 44100, left: stored.left, right: stored.right } satisfies RenderedPerformanceAudio;
        }
      }
      return render(controller.signal);
    }).then(result => {
      if (!controller.signal.aborted) {
        const entry = { left: result.left, right: result.right, startSample: 0, buffer: result.buffer };
        if (created.retain) created.cache.set(key, entry);
        if (created.persist && !loadedFromPersistent) void putPersistentPreparedAudio(key, entry);
      }
      return result;
    }).finally(() => {
      if (jobs.get(key) === created) jobs.delete(key);
    });
    job = created;
    jobs.set(key, job);
  } else {
    job.retain ||= retain;
    job.persist ||= persist;
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

/** Complete physical DSP artifacts use RAM first and IndexedDB across reloads. */
export function preparePersistentPartAudio(
  key: string,
  signal: AbortSignal | undefined,
  render: (signal: AbortSignal) => Promise<RenderedPerformanceAudio>,
  retain = true,
) {
  return preparePartAudio(key, signal, render, retain, audio, true);
}

export function preparedAudioStats() { return { ...audio.getStats(), bytes: audio.byteLength, pending: jobs.size, persistent: persistentPreparedAudioStats() }; }
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
