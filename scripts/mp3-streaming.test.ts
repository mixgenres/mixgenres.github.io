import test from 'node:test';
import assert from 'node:assert/strict';
import {encodeMp3,encodeMp3PCM,createMp3StreamEncoder,yieldToUI,type Mp3WorkerReply,type Mp3WorkerRequest} from '../src/export/audioEncoding';
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

test('unreadable and invalid MP3 worker replies reject and release the encoder rather than hanging export',async()=>{
  const old=globalThis.Worker;
  for(const failure of ['unreadable','invalid','premature-audio'] as const) {
    let terminated=false;
    class BrokenWorker {
      onmessage?: (event:{data:unknown})=>void;
      onmessageerror?:()=>void;
      postMessage() {queueMicrotask(()=>{
        if(failure==='unreadable')this.onmessageerror?.();
        else this.onmessage?.({data:failure==='invalid'?null:{blob:new Blob(['incomplete'])}});
      });}
      terminate(){terminated=true;}
    }
    globalThis.Worker=BrokenWorker as unknown as typeof Worker;
    try {
      const pcm=new Float32Array(128);
      await assert.rejects(encodeMp3(pcm,pcm,44100),/MP3 worker/i);
      assert.ok(terminated,failure);assert.equal(pcm.length,128);
    } finally {globalThis.Worker=old;}
  }
});

test('browser export yields use queued message tasks rather than chained background timers',async()=>{
  const documentDescriptor=Object.getOwnPropertyDescriptor(globalThis,'document');
  const channelDescriptor=Object.getOwnPropertyDescriptor(globalThis,'MessageChannel');
  const timeout=globalThis.setTimeout;
  let messages=0,timers=0;
  class TaskChannel {
    port1:{onmessage?:(event:unknown)=>void}={};
    port2={postMessage:()=>{messages++;setImmediate(()=>this.port1.onmessage?.({data:0}));}};
  }
  Object.defineProperty(globalThis,'document',{value:{},configurable:true});
  Object.defineProperty(globalThis,'MessageChannel',{value:TaskChannel,configurable:true});
  globalThis.setTimeout=((...args:Parameters<typeof setTimeout>)=>{timers++;return timeout(...args);}) as typeof setTimeout;
  try {
    const order:number[]=[];
    await Promise.all([yieldToUI().then(()=>order.push(1)),yieldToUI().then(()=>order.push(2))]);
    assert.deepEqual(order,[1,2]);assert.equal(messages,2);assert.equal(timers,0);
  } finally {
    globalThis.setTimeout=timeout;
    if(documentDescriptor)Object.defineProperty(globalThis,'document',documentDescriptor);else Reflect.deleteProperty(globalThis,'document');
    if(channelDescriptor)Object.defineProperty(globalThis,'MessageChannel',channelDescriptor);
  }
});
