import { playbackResources } from './playbackResources';
import type { Mp3RenderOptions, RenderedPerformanceAudio } from './mp3Export';
import type { Sheet } from '../sheet/sheet';
import type { Performance } from '../band/performanceData';
import { preparedAudioKey, preparePartAudio, completedPartAudioWindow } from '../cache/preparedAudio';
import { planDSPSectionsWithTail, assembleDSPSections } from './dspSectionPlan';
import { preparedNoteLifetimes } from './preparedNoteLifetimes';

async function renderPerformanceToAudio(performance: Performance, options: Mp3RenderOptions) {
  const renderer = await import('./mp3Export');
  return renderer.renderPerformanceToAudio(performance, options);
}

export type PlaybackWorkerRequest =
  | { kind: 'render'; performance: Performance; options: Mp3RenderOptions }
  | { kind: 'compile'; sheet: Sheet };
interface WorkerResult {
  audio?: RenderedPerformanceAudio;
  performance?: Performance;
  error?: string;
  runtime?: { initializedRuntimes: number; liveProcessors: number; heapBytes: number };
}
interface Job {
  payload: PlaybackWorkerRequest;
  signal?: AbortSignal;
  priority: () => number;
  resolve: (result: WorkerResult) => void;
  reject: (error: unknown) => void;
  fallback: () => void;
  abort: () => void;
  worker?: Worker;
}
const pending: Job[] = [];
const idle: Worker[] = [];
const runtimes = new Map<Worker, { initializedRuntimes: number; liveProcessors: number; heapBytes: number }>();
let running = 0;
let unavailable = false;
const cancelled = () => new DOMException('Playback rendering superseded', 'AbortError');
const concurrency = () => playbackResources().workers;
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
export async function renderPlaybackPart(performance: Performance, options: Mp3RenderOptions, onProgress?: (fraction: number) => void): Promise<RenderedPerformanceAudio> {
  if (options.rawStem) {
    // Raw instrument physics is independent of user mixer controls. Apply those
    // once when balancing the cached stems in the final mix.
    const rawOptions = { ...options, mixState: undefined, cacheDSPStem: false };
    const key = preparedAudioKey(performance, rawOptions);
    const sections = planDSPSectionsWithTail(performance, rawOptions, await preparedNoteLifetimes(performance, rawOptions));
    if (sections.length) {
      // Deduplicate assemblies while retaining only their expensive section
      // PCM, avoiding a second full-song copy in the same cache budget.
      return preparePartAudio(`${options.sectionStems ? 'sections' : 'assembly'}:${key}:${!!options.boundedStems}`, options.signal, async signal => {
        let completed = 0;
        const audio = await Promise.all(sections.map(async section => {
          // The first bar must not wait for the following bars and every long
          // release to finish. Render its exact physical prefix, preserving the
          // original note durations. Complete exports keep their separate key.
          const requestedFrames = options.boundedStems && options.renderWindow
            ? Math.ceil(options.renderWindow.end * 44100) - section.startSample : undefined;
          const from = options.boundedStems && options.sectionStems && options.renderWindow
            ? Math.max(0,Math.floor(options.renderWindow.start*44100)-section.startSample) : 0;
          const complete = requestedFrames === undefined ? undefined
            : completedPartAudioWindow(section.key, from, Math.min(requestedFrames, Math.ceil(section.performance.duration * 44100)));
          // Current audio stays minimal for fast starts. Once transport has a
          // reserve, complete nearby tails so later windows reuse their physics
          // rather than repeatedly synthesizing from the original attack.
          const frames = requestedFrames !== undefined && options.stemLookaheadSeconds
            ? Math.min(Math.ceil(section.performance.duration * 44100), requestedFrames + options.stemLookaheadSeconds * 44100) : requestedFrames;
          const seconds = frames === undefined ? undefined : frames / 44100;
          const bounded = seconds !== undefined && seconds < section.performance.duration;
          const cropped = bounded || from > 0;
          const sectionKey = cropped ? `${section.key}:prefix:${frames}:from:${from}` : section.key;
          const result = complete?.audio ??
            await preparePartAudio(sectionKey, signal, sectionSignal =>
              renderUncachedPart(section.performance, { ...rawOptions, renderWindow: undefined,
                maxDurationSeconds: bounded ? seconds : undefined, rawOutputStartSample:from, signal: sectionSignal }));
          onProgress?.(++completed/sections.length);
          return {audio:result,startSample:section.startSample+(complete ? complete.from : from)};
        }));
        if(options.sectionStems) return {sampleRate:44100,left:new Float32Array(0),right:new Float32Array(0),
          sections:audio.map(section => ({...section.audio,startSample:section.startSample}))};
        return assembleDSPSections(performance, sections, audio.map(section=>section.audio));
      }, false);
    }
    return preparePartAudio(key, options.signal, signal => renderUncachedPart(performance, { ...rawOptions, signal }));
  }
  return renderUncachedPart(performance, options);
}

/** Explicit teardown for app/player disposal; normal mixes keep helpers warm. */
export function releasePlaybackWorkers() {
  for (const worker of idle.splice(0)) { worker.terminate(); runtimes.delete(worker); }
}

function renderUncachedPart(performance: Performance, options: Mp3RenderOptions): Promise<RenderedPerformanceAudio> {
  const { signal, renderPriority, onDiagnostics: _diagnostics, ...transferable } = options;
  return enqueueWorker({kind:'render',performance,options:transferable}, signal, renderPriority ?? (()=>1),
    result => { if (!result.audio) throw new Error(result.error ?? 'Playback part failed to render'); return result.audio; },
    () => renderPerformanceToAudio(performance,options));
}

/** Mobile shares its loaded engine/catalog between composition and synthesis. */
export function compileInPlaybackWorker(sheet: Sheet, signal: AbortSignal, fallback: () => Promise<Performance>) {
  return enqueueWorker({kind:'compile',sheet},signal,()=>0,
    result => { if (!result.performance) throw new Error(result.error ?? 'Compilation failed'); return result.performance; }, fallback);
}

function enqueueWorker<T>(payload: PlaybackWorkerRequest, signal: AbortSignal | undefined, priority: () => number,
  read: (result: WorkerResult) => T, fallback: () => Promise<T>): Promise<T> {
  if (signal?.aborted) return Promise.reject(cancelled());
  if (typeof Worker === 'undefined' || unavailable) return fallback();
  return new Promise((resolve,reject) => {
    const job: Job = {payload,signal,priority,reject,
      resolve: result => { try {resolve(read(result));} catch(error) {reject(error);} },
      fallback: () => {void fallback().then(resolve,reject);},
      abort: () => {
        const index=pending.indexOf(job);
        if(index>=0) {pending.splice(index,1);signal?.removeEventListener('abort',job.abort);reject(cancelled());}
        else if(job.worker) {finish(job,false);reject(cancelled());}
      }};
    signal?.addEventListener('abort',job.abort,{once:true});
    pending.push(job);queueMicrotask(dispatch);
  });
}

function finish(job: Job, reuse: boolean) {
  const worker = job.worker;
  if (!worker) return;
  job.worker = undefined;
  worker.onmessage = null; worker.onerror = null; worker.onmessageerror = null;
  if (reuse && !unavailable) idle.push(worker); else { worker.terminate(); runtimes.delete(worker); }
  job.signal?.removeEventListener('abort', job.abort);
  running--;
  queueMicrotask(dispatch);
}

function fallback(job: Job) {
  unavailable = true;
  finish(job, false);
  releasePlaybackWorkers();
  job.fallback();
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
    if (job.signal?.aborted) { job.signal.removeEventListener('abort', job.abort); job.reject(cancelled()); continue; }
    if (unavailable) {
      job.signal?.removeEventListener('abort', job.abort);
      job.fallback();
      continue;
    }
    try {
      job.worker = idle.pop() ?? createWorker();
      running++;
      job.worker.onmessage = ({ data }: MessageEvent<WorkerResult>) => {
        if (data.runtime && job.worker) runtimes.set(job.worker, data.runtime);
        finish(job, true);
        if (job.signal?.aborted) job.reject(cancelled());
        else job.resolve(data);
      };
      job.worker.onerror = event => { event.preventDefault(); fallback(job); };
      job.worker.onmessageerror = () => fallback(job);
      // Signals/functions cannot be structured-cloned. Cancellation terminates
      // active work; queued priorities are evaluated in this main-thread pool.
      job.worker.postMessage(job.payload);
    } catch {
      if (job.worker) fallback(job);
      else {
        unavailable = true;
        job.signal?.removeEventListener('abort', job.abort);
        job.fallback();
      }
    }
  }
}

export function playbackWorkerStats() {
  return { limit: concurrency(), running, idle: idle.length, queued: pending.length,
    runtimes: [...runtimes.values()].reduce((sum, runtime) => sum + runtime.initializedRuntimes, 0),
    heapBytes: [...runtimes.values()].reduce((sum, runtime) => sum + runtime.heapBytes, 0) };
}
