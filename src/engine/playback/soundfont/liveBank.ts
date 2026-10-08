import type { BankId } from './presets';
import type { SamplePlan } from './plan';
import { loadSoundfontBank } from './banks';
import { checkAbort } from '../../../export/audioEncoding';
import type { BankAttack } from './prepareBank';
export async function loadLiveBank(id:BankId,plan:SamplePlan,signal:AbortSignal) {
  const buffer=await loadSoundfontBank(id,signal);checkAbort(signal);
  const {default:Worker}=await import('./prepareBank.worker?worker');checkAbort(signal);
  const worker=new Worker();
  const attacks:BankAttack[]=[],seen=new Set<string>();
  for(const event of plan.events)if(event.type==='on'&&event.patch.pack===id) {
    const key=`${event.patch.bank}:${event.patch.program}:${event.patch.drum}:${event.key}:${event.velocity}`;
    if(seen.has(key))continue;seen.add(key);attacks.push({patch:event.patch,key:event.key,velocity:event.velocity});
  }
  return new Promise<ArrayBuffer>((resolve,reject)=>{
    const cleanup=()=>{signal.removeEventListener('abort',abort);worker.terminate();};
    const abort=()=>{cleanup();reject(new DOMException('Sample preparation cancelled','AbortError'));};
    signal.addEventListener('abort',abort,{once:true});
    worker.onmessage=({data}:MessageEvent<{buffer?:ArrayBuffer;error?:string}>)=>{
      cleanup();if(data.buffer)resolve(data.buffer);else reject(new Error(data.error??'Sample preparation failed.'));
    };
    worker.onerror=event=>{cleanup();reject(new Error(event.message||'Sample preparation worker failed.'));};
    try{worker.postMessage({buffer,attacks},[buffer]);}catch(error){cleanup();reject(error);}
  });
}
