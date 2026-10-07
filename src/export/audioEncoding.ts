export type Mp3WorkerReply = { progress: number } | { error: string } | { blob: Blob };
export function checkAbort(signal?: AbortSignal) { if (signal?.aborted) throw new DOMException('Export cancelled', 'AbortError'); }
export const yieldToUI = () => new Promise<void>(resolve => setTimeout(resolve, 0));
/** Reuse one small PCM window instead of allocating two full-length Int16 buffers. */
export async function encodeMp3PCM(left: Float32Array, right: Float32Array, sampleRate: number, onProgress?: (fraction: number) => void, signal?: AbortSignal): Promise<Blob> {
  const { Mp3Encoder } = await import('@breezystack/lamejs');
  const encoder = new Mp3Encoder(2, sampleRate, 192);
  let peak = 0;
  for (let i = 0; i < left.length; i++) peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
  const gain = peak > 0.965 ? 0.965 / peak : 1;
  const fade = Math.min(left.length, Math.round(sampleRate * 0.008));
  const block = 1152 * 16, l = new Int16Array(block), r = new Int16Array(block);
  const chunks: Uint8Array[] = [];
  let lastYield = performance.now();
  for (let offset = 0; offset < left.length; offset += block) {
    checkAbort(signal);
    const frames = Math.min(block, left.length - offset);
    for (let j = 0; j < frames; j++) {
      const i = offset + j;
      const edge = (i < fade ? i / Math.max(1, fade) : 1) * (i >= left.length - fade ? (left.length - i) / Math.max(1, fade) : 1);
      l[j] = Math.max(-32768, Math.min(32767, Math.round(left[i] * gain * edge * 32767)));
      r[j] = Math.max(-32768, Math.min(32767, Math.round(right[i] * gain * edge * 32767)));
    }
    const chunk = encoder.encodeBuffer(l.subarray(0, frames), r.subarray(0, frames));
    if (chunk?.length) chunks.push(new Uint8Array(chunk));
    if (performance.now() - lastYield > 32) { onProgress?.((offset + frames) / left.length); await yieldToUI(); lastYield = performance.now(); }
  }
  const flush = encoder.flush();
  if (flush?.length) chunks.push(new Uint8Array(flush));
  if (!chunks.length) throw new Error('MP3 encoder returned no audio frames');
  onProgress?.(1);
  return new Blob(chunks, { type: 'audio/mpeg' });
}
/** Audio is transferred, not cloned. Worker is terminated on success, failure or cancellation. */
export async function encodeMp3(left: Float32Array, right: Float32Array, sampleRate: number, onProgress?: (fraction: number) => void, signal?: AbortSignal): Promise<Blob> {
  checkAbort(signal);
  if (typeof Worker === 'undefined') return encodeMp3PCM(left, right, sampleRate, onProgress, signal);
  let worker: Worker;
  try { worker = new Worker(new URL('./mp3.worker.ts', import.meta.url), { type: 'module' }); }
  catch { return encodeMp3PCM(left, right, sampleRate, onProgress, signal); }
  return new Promise((resolve, reject) => {
    const clean = () => { worker.terminate(); signal?.removeEventListener('abort', abort); };
    const abort = () => { clean(); reject(new DOMException('Export cancelled', 'AbortError')); };
    signal?.addEventListener('abort', abort, { once: true });
    worker.onerror = event => { clean(); reject(new Error(event.message || 'MP3 worker failed')); };
    worker.onmessage = ({ data }: MessageEvent<Mp3WorkerReply>) => {
      if ('progress' in data) onProgress?.(data.progress);
      else if ('error' in data) { clean(); reject(new Error(data.error)); }
      else if ('blob' in data) { clean(); resolve(data.blob); }
    };
    try { worker.postMessage({ left, right, sampleRate }, left.buffer === right.buffer ? [left.buffer] : [left.buffer, right.buffer]); }
    catch (error) { clean(); reject(error); }
  });
}
export function wavBlob(left: Float32Array, right: Float32Array, sampleRate: number, floatingPoint = false): Blob {
  const headerSize = floatingPoint ? 56 : 44;
  const out = new Uint8Array(headerSize + left.length * (floatingPoint ? 8 : 4)), v = new DataView(out.buffer);
  const str = (offset: number, value: string) => { for (let i = 0; i < value.length; i++) out[offset + i] = value.charCodeAt(i); };
  str(0, 'RIFF'); v.setUint32(4, out.length - 8, true); str(8, 'WAVE'); str(12, 'fmt '); v.setUint32(16, 16, true);
  v.setUint16(20, floatingPoint ? 3 : 1, true); v.setUint16(22, 2, true); v.setUint32(24, sampleRate, true); v.setUint32(28, sampleRate * (floatingPoint ? 8 : 4), true); v.setUint16(32, floatingPoint ? 8 : 4, true); v.setUint16(34, floatingPoint ? 32 : 16, true);
  if (floatingPoint) { str(36, 'fact'); v.setUint32(40, 4, true); v.setUint32(44, left.length, true); }
  str(headerSize - 8, 'data'); v.setUint32(headerSize - 4, out.length - headerSize, true);
  let peak = 0;
  if (!floatingPoint) for (let i = 0; i < left.length; i++) peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
  const gain = peak > 0.965 ? 0.965 / peak : 1;
  const fade = Math.min(left.length, Math.round(sampleRate * 0.008));
  for (let i = 0; i < left.length; i++) {
    if (floatingPoint) { v.setFloat32(headerSize + i * 8, left[i], true); v.setFloat32(headerSize + 4 + i * 8, right[i], true); }
    else {
      const edge = (i < fade ? i / Math.max(1, fade) : 1) * (i >= left.length - fade ? (left.length - i) / Math.max(1, fade) : 1);
      v.setInt16(headerSize + i * 4, Math.round(Math.max(-1, Math.min(1, left[i] * gain * edge)) * 32767), true);
      v.setInt16(headerSize + 2 + i * 4, Math.round(Math.max(-1, Math.min(1, right[i] * gain * edge)) * 32767), true);
    }
  }
  return new Blob([out], { type: 'audio/wav' });
}
