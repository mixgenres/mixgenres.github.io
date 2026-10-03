import { renderPerformanceToAudio, type Mp3RenderOptions, type RenderedPerformanceAudio } from './mp3Export';
import type { Performance } from '../band/performanceData';
import { preparedAudioKey, preparePartAudio } from '../cache/preparedAudio';
import { planDSPSections, assembleDSPSections } from './dspSections';

interface Job {
  performance: Performance;
  options: Mp3RenderOptions;
  priority: () => number;
  resolve: (audio: RenderedPerformanceAudio) => void;
  reject: (error: unknown) => void;
  abort: () => void;
  worker?: Worker;
}
const pending: Job[] = [];
const idle: Worker[] = [];
let running = 0;
let unavailable = false;
const cancelled = () => new DOMException('Playback rendering superseded', 'AbortError');
const concurrency = () => Math.max(1, Math.min(3, (navigator.hardwareConcurrency || 2) - 1));
const createWorker = () => new Worker(new URL('./playbackRenderWorker.ts', import.meta.url), { type: 'module' });

/** Construct worker threads as soon as a compiled song is available. */
export function warmPlaybackWorkers() {
  if (typeof Worker === 'undefined' || unavailable) return;
  try {
    while (idle.length + running < concurrency()) idle.push(createWorker());
  } catch {
    unavailable = true;
    releasePlaybackWorkers();
  }
}

/** Independent parts can render concurrently without blocking transport/UI timers. */
export function renderPlaybackPart(performance: Performance, options: Mp3RenderOptions, onProgress?: (fraction: number) => void): Promise<RenderedPerformanceAudio> {
  if (options.rawStem) {
    // Raw instrument physics is independent of user mixer controls. Apply those
    // once when balancing the cached stems in the final mix.
    const rawOptions = { ...options, mixState: undefined, cacheDSPStem: false };
    const key = preparedAudioKey(performance, rawOptions);
    const sections = planDSPSections(performance, rawOptions);
    if (sections.length) {
      // Deduplicate assemblies while retaining only their expensive section
      // PCM, avoiding a second full-song copy in the same cache budget.
      return preparePartAudio(`${options.sectionStems ? 'sections' : 'assembly'}:${key}`, options.signal, async signal => {
        let completed = 0;
        const audio = await Promise.all(sections.map(async section => {
          const result = await preparePartAudio(section.key, signal, sectionSignal =>
            renderUncachedPart(section.performance, { ...rawOptions, renderWindow: undefined, signal: sectionSignal }));
          onProgress?.(++completed/sections.length); return result;
        }));
        if(options.sectionStems) return {sampleRate:44100,left:new Float32Array(0),right:new Float32Array(0),
          sections:sections.map((section,index) => ({...audio[index],startSample:section.startSample}))};
        return assembleDSPSections(performance, sections, audio);
      }, false);
    }
    return preparePartAudio(key, options.signal, signal => renderUncachedPart(performance, { ...rawOptions, signal }));
  }
  return renderUncachedPart(performance, options);
}

/** Explicit teardown for app/player disposal; normal mixes keep helpers warm. */
export function releasePlaybackWorkers() { for(const worker of idle.splice(0)) worker.terminate(); }

function renderUncachedPart(performance: Performance, options: Mp3RenderOptions): Promise<RenderedPerformanceAudio> {
  if (typeof Worker === 'undefined' || unavailable) return renderPerformanceToAudio(performance, options);
  if (options.signal?.aborted) return Promise.reject(cancelled());
  return new Promise((resolve, reject) => {
    const job: Job = { performance, options, priority: options.renderPriority ?? (() => 1), resolve, reject,
      abort: () => {
        const index = pending.indexOf(job);
        if (index >= 0) {
          pending.splice(index, 1);
          options.signal?.removeEventListener('abort', job.abort);
          reject(cancelled());
        } else if (job.worker) {
          finish(job, false);
          reject(cancelled());
        }
      } };
    options.signal?.addEventListener('abort', job.abort, { once: true });
    pending.push(job);
    queueMicrotask(dispatch);
  });
}

function finish(job: Job, reuse: boolean) {
  const worker = job.worker;
  if (!worker) return;
  job.worker = undefined;
  worker.onmessage = null; worker.onerror = null; worker.onmessageerror = null;
  if (reuse) idle.push(worker); else worker.terminate();
  job.options.signal?.removeEventListener('abort', job.abort);
  running--;
  queueMicrotask(dispatch);
}

function fallback(job: Job) {
  unavailable = true;
  finish(job, false);
  void renderPerformanceToAudio(job.performance, job.options).then(job.resolve, job.reject);
}

function dispatch() {
  // Every slot prepares UI-owned sections. Priorities reorder queued edits;
  // no worker is reserved for the removed playback-time clip renderer.
  while (pending.length && running < concurrency()) {
    let next = -1;
    for (let i = 0; i < pending.length; i++) {
      if (next < 0 || pending[i].priority() < pending[next].priority()) next = i;
    }
    if (next < 0) break;
    const job = pending.splice(next, 1)[0];
    if (job.options.signal?.aborted) { job.options.signal.removeEventListener('abort', job.abort); job.reject(cancelled()); continue; }
    if (unavailable) {
      job.options.signal?.removeEventListener('abort', job.abort);
      void renderPerformanceToAudio(job.performance, job.options).then(job.resolve, job.reject);
      continue;
    }
    try {
      job.worker = idle.pop() ?? createWorker();
      running++;
      job.worker.onmessage = ({ data }: MessageEvent<{ audio?: RenderedPerformanceAudio; error?: string }>) => {
        finish(job, true);
        if (job.options.signal?.aborted) job.reject(cancelled());
        else if (data.audio) job.resolve(data.audio);
        else job.reject(new Error(data.error ?? 'Playback part failed to render'));
      };
      job.worker.onerror = event => { event.preventDefault(); fallback(job); };
      job.worker.onmessageerror = () => fallback(job);
      // Signals/functions cannot be structured-cloned. Cancellation terminates
      // active work; queued priorities are evaluated in this main-thread pool.
      const { signal: _signal, renderPriority: _priority, onDiagnostics: _diagnostics, ...options } = job.options;
      job.worker.postMessage({ performance: job.performance, options });
    } catch {
      if (job.worker) fallback(job);
      else {
        unavailable = true;
        job.options.signal?.removeEventListener('abort', job.abort);
        void renderPerformanceToAudio(job.performance, job.options).then(job.resolve, job.reject);
      }
    }
  }
}
