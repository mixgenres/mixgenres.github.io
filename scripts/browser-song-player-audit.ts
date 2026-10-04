import { SongPlayer } from '../src/engine/playback/songPlayer';
import { makeSheet, setSongBpm, type Sheet } from '../src/engine/sheet/sheet';
import { preparedAudioStats, preparedMixStats } from '../src/engine/cache/preparedAudio';
import { playbackResources } from '../src/engine/playback/playbackResources';
import { playbackWorkerStats } from '../src/engine/playback/renderPlaybackPart';

const report=document.querySelector<HTMLPreElement>('#report')!;
let song: Sheet | undefined, started=0, preparedMs: number | undefined, fourSecondsMs: number | undefined, compileMs: number | undefined;
let stress: {edits:number;peakRetainedPCMBytes:number;peakWorkerHeapBytes:number;error?:string} | undefined;
const player=new SongPlayer(()=>update(),()=>update(),true);
function update() {
  if(player.snapshot.performance && compileMs===undefined)compileMs=Math.round(performance.now()-started);
  if(player.preparedAheadSeconds>=4 && fourSecondsMs===undefined)fourSecondsMs=Math.round(performance.now()-started);
  if(player.preparedAheadSeconds && preparedMs===undefined)preparedMs=Math.round(performance.now()-started);
  const part=preparedAudioStats(),mix=preparedMixStats(),workers=playbackWorkerStats();
  const retainedPCMBytes=part.bytes+mix.bytes+player.bufferedBytes;
  if(stress) {
    stress.peakRetainedPCMBytes=Math.max(stress.peakRetainedPCMBytes,retainedPCMBytes);
    stress.peakWorkerHeapBytes=Math.max(stress.peakWorkerHeapBytes,workers.heapBytes);
  }
  report.textContent=JSON.stringify({status:player.snapshot.status,secondsAhead:player.preparedAheadSeconds,
    backgroundPreparationMs:preparedMs,fourSecondsPreparationMs:fourSecondsMs,compileMs,
    position:Number(player.position().toFixed(2)),clickToSound:player.snapshot.playbackTiming ?? null,
    outputLatencyEstimateMs:player.snapshot.outputLatencyMs ?? null,
    memory:{retainedPCMBytes,workers,limits:playbackResources()},stress,
    error:player.snapshot.error ?? null},null,2);
}
function changed(next:Sheet) {
  player.pause();player.locate(0);song=next;started=performance.now();
  preparedMs=undefined;fourSecondsMs=undefined;compileMs=undefined;player.configure(song);update();
}
function waitUntil(ready:()=>boolean,timeout=30_000) {
  return new Promise<void>((resolve,reject)=>{
    const began=performance.now();const timer=setInterval(()=>{
      if(player.snapshot.error || performance.now()-began>timeout) {clearInterval(timer);reject(new Error(player.snapshot.error ?? 'Preparation timed out'));}
      else if(ready()) {clearInterval(timer);resolve();}
    },50);
  });
}
document.querySelector<HTMLButtonElement>('#prepare')!.onclick=()=>changed(makeSheet('tango','tango-golden-age'));
document.querySelector<HTMLButtonElement>('#cold')!.onclick=event=>{
  changed(makeSheet('tango','tango-golden-age'));void player.play(event.timeStamp);
};
document.querySelector<HTMLButtonElement>('#play')!.onclick=event=>{void player.play(event.timeStamp);};
document.querySelector<HTMLButtonElement>('#pause')!.onclick=()=>player.pause();
document.querySelector<HTMLButtonElement>('#seek')!.onclick=()=>player.locate(20);
document.querySelector<HTMLButtonElement>('#rename')!.onclick=()=>{if(song){song={...song,title:'Renamed'};player.configure(song);update();}};
document.querySelector<HTMLButtonElement>('#edit')!.onclick=event=>{
  if(song){changed(setSongBpm(song,song.bpm===120?121:120));void player.play(event.timeStamp);}
};
document.querySelector<HTMLButtonElement>('#stress')!.onclick=async()=>{
  stress={edits:0,peakRetainedPCMBytes:0,peakWorkerHeapBytes:0};
  try {
    for(let i=0;i<20;i++) {
      changed(setSongBpm(song ?? makeSheet('tango','tango-golden-age'),120+i));
      await waitUntil(()=>player.preparedAheadSeconds>=4);
      player.locate(i%2 ? 30 : 20);await waitUntil(()=>player.preparedAheadSeconds>=4);
      stress.edits++;update();
    }
  } catch(error) {stress.error=String(error);update();}
};
const heartbeat=setInterval(update,250);
window.addEventListener('pagehide',()=>{clearInterval(heartbeat);player.dispose();},{once:true});
