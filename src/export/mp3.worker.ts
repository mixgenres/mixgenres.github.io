import { encodeMp3PCM } from './audioEncoding';
self.onmessage = async ({ data }: MessageEvent<{ left: Float32Array; right: Float32Array; sampleRate: number }>) => {
  try { const blob = await encodeMp3PCM(data.left, data.right, data.sampleRate, progress => self.postMessage({ progress })); self.postMessage({ blob }); }
  catch (error) { self.postMessage({ error: error instanceof Error ? error.message : 'MP3 encoding failed' }); }
};
