import OfflineRenderer from '@elemaudio/offline-renderer';
import { Renderer } from '@elemaudio/core';

/** Narrow adapter for offline-renderer 4.0.x's native bindings. Its public reset
 * retains the runtime allocation; initialize creates a new WASM module. Keep the module
 * and explicitly delete/recreate the processor for fresh, deterministic DSP. */
interface NativeProcessor {
  prepare(sampleRate: number, blockSize: number): void;
  postMessageBatch(batch: unknown): unknown;
  delete(): void;
}
interface NativeBindings {
  _module: { HEAPU8: Uint8Array; ElementaryAudioProcessor: new (inputs: number, outputs: number) => NativeProcessor };
  _native?: NativeProcessor;
  _renderer: Renderer;
}
let runtime: Promise<OfflineRenderer> | undefined;
let initializedRuntimes = 0;
let liveProcessors = 0;
let loadedBindings: NativeBindings | undefined;
export async function acquireOfflineRenderer(): Promise<OfflineRenderer> {
  // The render queue serializes access in each worker/thread.
  if (!runtime) {
    runtime = (async () => {
      const renderer = new OfflineRenderer();
      await renderer.initialize({ sampleRate: 44100, numInputChannels: 0, numOutputChannels: 2, blockSize: 64 });
      const bindings = renderer as unknown as NativeBindings;
      loadedBindings = bindings;
      if (typeof bindings._native?.delete !== 'function' || !bindings._module.ElementaryAudioProcessor) {
        throw new Error('Unsupported offline-renderer native lifecycle');
      }
      initializedRuntimes++; liveProcessors = 1;
      return renderer;
    })().catch(error => { runtime = undefined; throw error; });
  }
  const renderer = await runtime;
  const bindings = renderer as unknown as NativeBindings;
  if (!bindings._native) {
    bindings._native = new bindings._module.ElementaryAudioProcessor(0, 2);
    bindings._native.prepare(44100, 64);
    bindings._renderer = new Renderer((batch: unknown) => bindings._native!.postMessageBatch(batch));
    liveProcessors = 1;
  }
  return renderer;
}
export function releaseOfflineRenderer(renderer: OfflineRenderer) {
  const bindings = renderer as unknown as NativeBindings;
  bindings._native?.delete();
  bindings._native = undefined;
  // Drop JS graph references too. The next acquisition creates a fresh Renderer.
  bindings._renderer = undefined as unknown as Renderer;
  liveProcessors = 0;
}
export function offlineRendererStats() { return { initializedRuntimes, liveProcessors, heapBytes: loadedBindings?._module.HEAPU8.byteLength ?? 0 }; }
