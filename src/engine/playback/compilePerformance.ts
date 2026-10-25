import type { Performance } from '../band/performanceData';
import type { Sheet } from '../sheet/sheet';
import { registerGestureNames } from '../band/gestures';

/** Compute the score on demand; this does not render or cache audio. */
export async function compilePerformance(sheet: Sheet, signal: AbortSignal): Promise<Performance> {
  const cancelled = () => new DOMException('Score calculation superseded', 'AbortError');
  if (signal.aborted) throw cancelled();
  if (typeof Worker === 'undefined') throw new Error('This browser cannot compile playback in a worker.');
  return new Promise((resolve, reject) => {
    let worker: Worker;
    try { worker = new Worker(new URL('./compositionWorker.ts', import.meta.url), { type: 'module' }); }
    catch (error) {
      reject(new Error(`Could not start playback compilation worker: ${error instanceof Error ? error.message : String(error)}`));
      return;
    }
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
      else if (data.performance) {
        try { registerGestureNames(data.performance.gestureNames); resolve(data.performance); }
        catch (error) { reject(error); }
      }
      else reject(new Error(data.error ?? 'Compilation failed'));
    };
    worker.onerror = event => {
      event.preventDefault(); cleanup();
      reject(new Error(event.message || 'Playback compilation worker failed'));
    };
    worker.onmessageerror = () => { cleanup(); reject(new Error('Playback compilation worker returned an unreadable result')); };
    try { worker.postMessage(sheet); }
    catch (error) {
      cleanup();
      reject(new Error(`Could not send song to playback compilation worker: ${error instanceof Error ? error.message : String(error)}`));
    }
  });
}
