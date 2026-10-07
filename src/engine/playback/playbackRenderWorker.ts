import { offlineRendererStats } from './offlineRenderer';
import { renderPerformanceToAudio } from './mp3Export';
import type { PlaybackWorkerRequest } from './renderPlaybackPart';

self.onmessage = async ({ data }: MessageEvent<PlaybackWorkerRequest>) => {
  try {
    if(data.kind==='catalog') {
      const [{createCatalogSong},{arrangeBand}] = await Promise.all([
        import('../sheet/songCatalog'),import('../band/arrangeBand')]);
      const sheet=createCatalogSong(data.id);
      self.postMessage({ sheet, performance:arrangeBand(sheet), runtime:offlineRendererStats() });
      return;
    }
    if(data.kind==='compile') {
      const { arrangeBand } = await import('../band/arrangeBand');
      self.postMessage({ performance:arrangeBand(data.sheet), runtime:offlineRendererStats() });
      return;
    }
    const audio = await renderPerformanceToAudio(data.performance, { ...data.options, yieldForUI: false });
    self.postMessage({ audio, runtime: offlineRendererStats() }, { transfer: [audio.left.buffer, audio.right.buffer] });
  } catch (error) {
    self.postMessage({ error: error instanceof Error ? error.message : String(error), runtime: offlineRendererStats() });
  }
};
