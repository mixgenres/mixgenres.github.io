import { PCMStemCache } from './stemCache';
import { registerCache } from './lru';
import { contentKey } from './contentKey';
import type { Performance } from '../band/performanceData';
import type { Mp3RenderOptions, RenderedPerformanceAudio } from '../playback/mp3Export';

/** Main-thread section PCM survives worker reassignment and mixer edits. */
const audio = new PCMStemCache(192 * 1024 * 1024, 'preparedPartAudio'); registerCache(audio);
const jobs = new Map<string, { promise: Promise<RenderedPerformanceAudio>; controller: AbortController; users: number }>();
export function preparedAudioKey(performance: Performance, options: Mp3RenderOptions) {
  const ids = new Set(options.selectedTrackIds ?? options.trackInstruments.keys());
  return contentKey(['part-audio-v1', [...ids].sort(), [...options.trackInstruments].filter(([id]) => ids.has(id)),
    [...options.trackRoles ?? []].filter(([id]) => ids.has(id)), options.worldId, options.styleId,
    performance.notes.filter(n => ids.has(n.trackId)), performance.ccs.filter(c => ids.has(c.trackId)),
    options.renderWindow ?? [performance.duration, performance.tail]]);
}
export function preparePartAudio(key: string, signal: AbortSignal | undefined,
  render: (signal: AbortSignal) => Promise<RenderedPerformanceAudio>, retain = true): Promise<RenderedPerformanceAudio> {
  const cancelled = () => new DOMException('Audio preparation superseded', 'AbortError');
  if (signal?.aborted) return Promise.reject(cancelled());
  const ready = retain ? audio.get(key) : undefined;
  if (ready) return Promise.resolve({ sampleRate: 44100, left: ready.left, right: ready.right });
  let job = jobs.get(key);
  if (!job || job.controller.signal.aborted) {
    const controller = new AbortController();
    const created = { controller, users: 0, promise: Promise.resolve().then(() => render(controller.signal)).then(result => {
      if (retain && !controller.signal.aborted) audio.set(key, { left: result.left, right: result.right, startSample: 0 });
      return result;
    }).finally(() => { if (jobs.get(key) === created) jobs.delete(key); }) };
    job = created; jobs.set(key, job);
  }
  const current = job; current.users++;
  return new Promise((resolve, reject) => {
    let done = false;
    const release = () => { if (done) return; done = true; signal?.removeEventListener('abort', abort); if (--current.users === 0) current.controller.abort(); };
    const abort = () => { release(); reject(cancelled()); };
    signal?.addEventListener('abort', abort, { once: true });
    current.promise.then(result => { if (!done) { release(); resolve(result); } }, error => { if (!done) { release(); reject(error); } });
  });
}
export function preparedAudioStats() { return { ...audio.getStats(), bytes: audio.byteLength, pending: jobs.size }; }
export function clearPreparedAudio() { for (const job of jobs.values()) job.controller.abort(); jobs.clear(); audio.clear(); }
