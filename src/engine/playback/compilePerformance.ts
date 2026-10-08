import { arrangeBand } from '../band/arrangeBand';
import type { Performance } from '../band/performanceData';
import type { Sheet } from '../sheet/sheet';

/** Compute the score on demand; this does not render or cache audio. */
export async function compilePerformance(sheet: Sheet, signal: AbortSignal): Promise<Performance> {
  const cancelled = () => new DOMException('Score calculation superseded', 'AbortError');
  if (signal.aborted) throw cancelled();
  if (typeof Worker === 'undefined') return arrangeBand(sheet);
  return new Promise((resolve, reject) => {
    let worker: Worker;
    try { worker = new Worker(new URL('./compositionWorker.ts', import.meta.url), { type: 'module' }); }
    catch { resolve(arrangeBand(sheet)); return; }
    const cleanup = () => {
      signal.removeEventListener('abort', abort);
      worker.onmessage = null; worker.onerror = null; worker.onmessageerror = null;
      worker.terminate();
    };
    const abort = () => { cleanup(); reject(cancelled()); };
    signal.addEventListener('abort', abort, { once: true });
    worker.onmessage = ({ data }: MessageEvent<{ performance?: Performance; error?: string }>) => {
      cleanup();
      if (signal.aborted) reject(cancelled());
      else if (data.performance) resolve(data.performance);
      else reject(new Error(data.error ?? 'Compilation failed'));
    };
    worker.onerror = event => { event.preventDefault(); cleanup(); try { resolve(arrangeBand(sheet)); } catch(error) { reject(error); } };
    worker.onmessageerror = () => { cleanup(); try { resolve(arrangeBand(sheet)); } catch(error) { reject(error); } };
    try { worker.postMessage(sheet); }
    catch { cleanup(); try { resolve(arrangeBand(sheet)); } catch(error) { reject(error); } }
  });
}
