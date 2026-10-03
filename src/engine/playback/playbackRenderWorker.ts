import { renderPerformanceToAudio, type Mp3RenderOptions } from './mp3Export';
import type { Performance } from '../band/performanceData';

self.onmessage = async ({ data }: MessageEvent<{ performance: Performance; options: Mp3RenderOptions }>) => {
  try {
    // Workers use the engine's portable mix, including authored automation,
    // ambience and master DSP, with the same physical instrument renderer.
    const audio = await renderPerformanceToAudio(data.performance, data.options);
    self.postMessage({ audio }, { transfer: [audio.left.buffer, audio.right.buffer] });
  } catch (error) {
    self.postMessage({ error: error instanceof Error ? error.message : String(error) });
  }
};
