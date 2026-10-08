export type Mp3WorkerReply = { ready: true } | { ack: true } | { error: string } | { blob: Blob };
export type Mp3WorkerRequest = {type:'start';sampleRate:number;frames:number;peak:number} | {type:'block';left:Float32Array;right:Float32Array} | {type:'finish'};
const MP3_BLOCK=1152*16;
export function checkAbort(signal?: AbortSignal) { if (signal?.aborted) throw new DOMException('Export cancelled', 'AbortError'); }
export const yieldToUI = () => new Promise<void>(resolve => setTimeout(resolve, 0));
/** The same bounded streaming encoder is used by Node and the browser worker. */
export async function createMp3StreamEncoder(sampleRate:number,frames:number,peak:number) {
  if(!Number.isInteger(frames)||frames<=0||!Number.isFinite(peak))throw new Error('Invalid or empty MP3 PCM');
  const { Mp3Encoder } = await import('@breezystack/lamejs');
  const encoder = new Mp3Encoder(2, sampleRate, 192);
  const gain = peak > 0.965 ? 0.965 / peak : 1;
  const fade = Math.min(frames, Math.round(sampleRate * 0.008));
  const l = new Int16Array(MP3_BLOCK), r = new Int16Array(MP3_BLOCK);
  const chunks: Uint8Array[] = [];
  let offset=0;
  return {
    block(left:Float32Array,right:Float32Array) {
      if(left.length!==right.length||left.length>MP3_BLOCK||offset+left.length>frames)throw new Error('Invalid MP3 PCM block');
      for(let j=0;j<left.length;j++) {
        const i=offset+j;
        const edge=(i<fade?i/Math.max(1,fade):1)*(i>=frames-fade?(frames-i)/Math.max(1,fade):1);
        l[j]=Math.max(-32768,Math.min(32767,Math.round(left[j]*gain*edge*32767)));
        r[j]=Math.max(-32768,Math.min(32767,Math.round(right[j]*gain*edge*32767)));
      }
      const chunk=encoder.encodeBuffer(l.subarray(0,left.length),r.subarray(0,right.length));
      if(chunk?.length)chunks.push(new Uint8Array(chunk));offset+=left.length;
    },
    finish() {
      if(offset!==frames)throw new Error('MP3 PCM stream ended early');
      const flush=encoder.flush();if(flush?.length)chunks.push(new Uint8Array(flush));
      if(!chunks.length)throw new Error('MP3 encoder returned no audio frames');
      return new Blob(chunks,{type:'audio/mpeg'});
    },
  };
}
/** Reuse one small PCM window instead of allocating two full-length Int16 buffers. */
export async function encodeMp3PCM(left: Float32Array, right: Float32Array, sampleRate: number, onProgress?: (fraction: number) => void, signal?: AbortSignal): Promise<Blob> {
  checkAbort(signal);if(left.length!==right.length)throw new Error('MP3 stereo lengths differ');
  let peak=0;
  for(let i=0;i<left.length;i++)peak=Math.max(peak,Math.abs(left[i]),Math.abs(right[i]));
  const encoder=await createMp3StreamEncoder(sampleRate,left.length,peak);
  let lastYield = performance.now();
  for (let offset = 0; offset < left.length; offset += MP3_BLOCK) {
    checkAbort(signal);
    const frames = Math.min(MP3_BLOCK, left.length - offset);
    encoder.block(left.subarray(offset,offset+frames),right.subarray(offset,offset+frames));
    if (performance.now() - lastYield > 32) { onProgress?.((offset + frames) / left.length); await yieldToUI(); lastYield = performance.now(); }
  }
  onProgress?.(1);
  return encoder.finish();
}
/** Transfer disposable blocks, never caller/cache buffers. One block in flight
 * bounds memory and keeps large exports from destroying reusable PCM. */
export async function encodeMp3(left: Float32Array, right: Float32Array, sampleRate: number, onProgress?: (fraction: number) => void, signal?: AbortSignal): Promise<Blob> {
  checkAbort(signal);
  if(left.length!==right.length||!left.length)throw new Error('Invalid or empty MP3 PCM');
  if (typeof Worker === 'undefined') return encodeMp3PCM(left, right, sampleRate, onProgress, signal);
  let worker: Worker;
  try { worker = new Worker(new URL('./mp3.worker.ts', import.meta.url), { type: 'module' }); }
  catch { return encodeMp3PCM(left, right, sampleRate, onProgress, signal); }
  let peak=0,lastYield=performance.now();
  try {
    for(let i=0;i<left.length;i++) {
      peak=Math.max(peak,Math.abs(left[i]),Math.abs(right[i]));
      if(i%65536===0&&performance.now()-lastYield>16){checkAbort(signal);await yieldToUI();lastYield=performance.now();}
    }
    checkAbort(signal);
  } catch(error){worker.terminate();throw error;}
  return new Promise((resolve, reject) => {
    let offset=0;
    const clean = () => { worker.terminate(); signal?.removeEventListener('abort', abort); };
    const abort = () => { clean(); reject(new DOMException('Export cancelled', 'AbortError')); };
    signal?.addEventListener('abort', abort, { once: true });
    worker.onerror = event => { clean(); reject(new Error(event.message || 'MP3 worker failed')); };
    worker.onmessage = ({ data }: MessageEvent<Mp3WorkerReply>) => {
      if ('error' in data) { clean(); reject(new Error(data.error)); }
      else if ('blob' in data) { clean(); resolve(data.blob); }
      else {
        try {
          onProgress?.(offset/left.length);
          if(offset>=left.length){worker.postMessage({type:'finish'} satisfies Mp3WorkerRequest);return;}
          const end=Math.min(left.length,offset+MP3_BLOCK),l=left.slice(offset,end),r=right.slice(offset,end);offset=end;
          worker.postMessage({type:'block',left:l,right:r} satisfies Mp3WorkerRequest,[l.buffer,r.buffer]);
        } catch(error){clean();reject(error);}
      }
    };
    try { worker.postMessage({type:'start',sampleRate,frames:left.length,peak} satisfies Mp3WorkerRequest); }
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
