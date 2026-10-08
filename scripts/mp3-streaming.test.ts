import test from 'node:test';
import assert from 'node:assert/strict';
import {encodeMp3,encodeMp3PCM,createMp3StreamEncoder,type Mp3WorkerReply,type Mp3WorkerRequest} from '../src/export/audioEncoding';
test('worker MP3 blocks preserve render input PCM and produce byte-identical repeat exports',async()=>{
  const left=Float32Array.from({length:44100},(_,i)=>Math.sin(i*2*Math.PI*440/44100)*.45),right=left.map(v=>v*.6);
  const originalLeft=left.slice(),originalRight=right.slice(),reference=await encodeMp3PCM(left,right,44100);
  const old=globalThis.Worker,workers:FakeWorker[]=[];
  class FakeWorker {
    onmessage?: (event:{data:Mp3WorkerReply})=>void;onerror?:()=>void;
    encoder?:Awaited<ReturnType<typeof createMp3StreamEncoder>>;terminated=false;maxBytes=0;blocks=0;
    constructor(){workers.push(this);}
    postMessage(data:Mp3WorkerRequest,transfer:Transferable[]=[]) {
      const cloned=structuredClone(data,{transfer});
      void(async()=>{
        if(cloned.type==='start'){this.encoder=await createMp3StreamEncoder(cloned.sampleRate,cloned.frames,cloned.peak);this.onmessage?.({data:{ready:true}});}
        else if(cloned.type==='block'){this.maxBytes=Math.max(this.maxBytes,cloned.left.byteLength+cloned.right.byteLength);this.blocks++;this.encoder!.block(cloned.left,cloned.right);queueMicrotask(()=>this.onmessage?.({data:{ack:true}}));}
        else this.onmessage?.({data:{blob:this.encoder!.finish()}});
      })();
    }
    terminate(){this.terminated=true;}
  }
  globalThis.Worker=FakeWorker as unknown as typeof Worker;
  try {
    for(let i=0;i<2;i++) {
      const result=await encodeMp3(left,right,44100);
      assert.deepEqual(new Uint8Array(await result.arrayBuffer()),new Uint8Array(await reference.arrayBuffer()));
      assert.deepEqual(left,originalLeft);assert.deepEqual(right,originalRight);
      assert(workers[i].terminated);assert.equal(workers[i].blocks,3);assert(workers[i].maxBytes<=147456);
    }
  } finally{globalThis.Worker=old;}
});
test('MP3 worker cancellation terminates a pending stream',async()=>{
  const old=globalThis.Worker;let terminated=false;
  class WaitingWorker{postMessage(){}terminate(){terminated=true;}}
  globalThis.Worker=WaitingWorker as unknown as typeof Worker;
  try {
    const abort=new AbortController(),data=new Float32Array(128),pending=encodeMp3(data,data,44100,undefined,abort.signal);
    const rejected=assert.rejects(pending,{name:'AbortError'});abort.abort();await rejected;
    assert(terminated);assert.equal(data.length,128);
  } finally{globalThis.Worker=old;}
});
