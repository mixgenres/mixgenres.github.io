import { arrangeBand } from '../band/arrangeBand';
import type { Performance } from '../band/performanceData';
import type { Sheet } from '../sheet/sheet';

/** Worker support/CSP failures fall back to the same compiler, never another score. */
export async function compilePerformance(sheet: Sheet, signal: AbortSignal): Promise<Performance> {
  const cancelled = () => new DOMException('Compilation superseded', 'AbortError');
  const fallback = async () => {
    await new Promise<void>(resolve => setTimeout(resolve, 0));
    if (signal.aborted) throw cancelled();
    return arrangeBand(sheet);
  };
  if (signal.aborted) throw cancelled();
  if (typeof Worker === 'undefined') return fallback();
  let worker: Worker;
  try { worker = new Worker(new URL('./compositionWorker.ts', import.meta.url), { type: 'module' }); }
  catch { return fallback(); }
  return new Promise((resolve, reject) => {
    const cleanup = () => { signal.removeEventListener('abort', abort); worker.terminate(); };
    const abort = () => { cleanup(); reject(cancelled()); };
    signal.addEventListener('abort', abort, { once: true });
    worker.onmessage = ({ data }: MessageEvent<{ performance?: Performance; error?: string }>) => {
      cleanup();
      if (signal.aborted) reject(cancelled());
      else if (data.performance) resolve(data.performance);
      else reject(new Error(data.error ?? 'Compilation failed'));
    };
    worker.onerror = event => { event.preventDefault(); cleanup(); void fallback().then(resolve, reject); };
    worker.onmessageerror = () => { cleanup(); void fallback().then(resolve, reject); };
    try { worker.postMessage(sheet); }
    catch { cleanup(); void fallback().then(resolve, reject); }
  });
}
