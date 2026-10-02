import { arrangeBand } from '../band/arrangeBand';
import type { Sheet } from '../sheet/sheet';
self.onmessage = ({ data }: MessageEvent<Sheet>) => {
  try { self.postMessage({ performance: arrangeBand(data) }); }
  catch (error) { self.postMessage({ error: error instanceof Error ? error.message : String(error) }); }
};
