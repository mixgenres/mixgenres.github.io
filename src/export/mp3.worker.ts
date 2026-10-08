import { createMp3StreamEncoder, type Mp3WorkerRequest } from './audioEncoding';
let encoder:Awaited<ReturnType<typeof createMp3StreamEncoder>>|undefined;
self.onmessage = async ({ data }: MessageEvent<Mp3WorkerRequest>) => {
  try {
    if(data.type==='start'){encoder=await createMp3StreamEncoder(data.sampleRate,data.frames,data.peak);self.postMessage({ready:true});}
    else if(data.type==='block'){if(!encoder)throw new Error('MP3 stream is not initialized');encoder.block(data.left,data.right);self.postMessage({ack:true});}
    else {if(!encoder)throw new Error('MP3 stream is not initialized');self.postMessage({blob:encoder.finish()});}
  }
  catch (error) { self.postMessage({ error: error instanceof Error ? error.message : 'MP3 encoding failed' }); }
};
