import OfflineRenderer from '@elemaudio/offline-renderer';
import type { ElemNode } from '@elemaudio/core';

/** The package's declarations use loose parameters. Keep our calls within its
 * documented API without exposing those loose types to application code. */
export interface OfflineRendererOptions {
  sampleRate: number;
  numInputChannels: number;
  numOutputChannels: number;
  blockSize: number;
}

export interface OfflineRenderStats {
  nodesAdded: number;
  edgesAdded: number;
  propsWritten: number;
  elapsedTimeMs: number;
}

export class AudioRenderer {
  private readonly core = new OfflineRenderer();
  initialize(options: OfflineRendererOptions): Promise<void> {
    return this.core.initialize(options);
  }

  render(...signals: ElemNode[]): Promise<OfflineRenderStats> {
    return this.core.render(...signals);
  }

  process(inputs: Float32Array[], outputs: Float32Array[]): void {
    this.core.process(inputs, outputs);
  }

  reset(): void { this.core.reset(); }

  async gc(): Promise<number[]> {
    const result: unknown = await this.core.gc();
    if (!Array.isArray(result) || !result.every((id: unknown) => typeof id === 'number')) {
      throw new Error('Elementary returned invalid garbage collection IDs');
    }
    return result;
  }
}

let initializedRuntimes = 0;
let activeRenders = 0;

/** Each job gets a fresh renderer through the documented constructor and
 * initialize API. This isolates oscillator, noise and filter state without
 * relying on undocumented native destruction or reconstruction. */
export async function createOfflineRenderer(): Promise<AudioRenderer> {
  const renderer = new AudioRenderer();
  await renderer.initialize({ sampleRate: 44100, numInputChannels: 0, numOutputChannels: 2, blockSize: 64 });
  initializedRuntimes++;
  activeRenders++;
  return renderer;
}

export function finishOfflineRender(renderer: AudioRenderer): void {
  try { renderer.reset(); }
  finally { activeRenders--; }
  // No public dispose API exists in 4.0.3. The job drops its reference, and
  // worker termination releases the worker's runtime allocations.
}

/** Application counters only: no private heap or processor inspection. */
export function offlineRendererStats() { return { initializedRuntimes, activeRenders }; }
