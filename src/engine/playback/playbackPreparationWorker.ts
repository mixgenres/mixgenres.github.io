import { preparePlaybackGraph, type PreparationMixState } from './preparedPlayback';
import type { PlaybackConfiguration } from './bandWorklet';
self.onmessage = ({ data }: MessageEvent<{ config: PlaybackConfiguration; mix: PreparationMixState }>) => {
  try { self.postMessage({ result: preparePlaybackGraph(data.config, data.mix) }); }
  catch (error) { self.postMessage({ error: String(error) }); }
};
