import { compactInstrumentStats } from './compactInstrument';
const runtimeStats = () => ({ initializedRuntimes: 0, activeRenders: 0, synthesis: compactInstrumentStats() });
import { renderPerformanceToAudio } from './mp3Export';
import type { PlaybackWorkerRequest } from './renderPlaybackPart';

self.onmessage = async ({ data }: MessageEvent<PlaybackWorkerRequest>) => {
  try {
    if(data.kind==='catalog') {
      const [{createCatalogSong},{arrangeBand}] = await Promise.all([
        import('../sheet/songCatalog'),import('../band/arrangeBand')]);
      const sheet=createCatalogSong(data.id);
      self.postMessage({ sheet, performance:arrangeBand(sheet), runtime:runtimeStats() });
      return;
    }
    if(data.kind==='compile') {
      const { arrangeBand } = await import('../band/arrangeBand');
      self.postMessage({ performance:arrangeBand(data.sheet), runtime:runtimeStats() });
      return;
    }
    const audio = await renderPerformanceToAudio(data.performance, { ...data.options, yieldForUI: false });
    self.postMessage({ audio, runtime: runtimeStats() }, { transfer: [audio.left.buffer, audio.right.buffer] });
  } catch (error) {
    self.postMessage({ error: error instanceof Error ? error.message : String(error), runtime: runtimeStats() });
  }
};
