import { prepareBankForLive, type BankAttack } from './prepareBank';
const worker=globalThis as unknown as {onmessage:((event:MessageEvent<{buffer:ArrayBuffer;attacks:BankAttack[]}>)=>void)|null;postMessage:(message:{buffer?:ArrayBuffer;error?:string},transfer?:Transferable[])=>void};
worker.onmessage=({data})=>{
  void prepareBankForLive(data.buffer,data.attacks).then(buffer=>worker.postMessage({buffer},[buffer]),
    error=>worker.postMessage({error:error instanceof Error?error.message:String(error)}));
};
