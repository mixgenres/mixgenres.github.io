import { SongPlayer } from '../src/engine/playback/songPlayer';
import { makeSheet, setSongBpm, type Sheet } from '../src/engine/sheet/sheet';
import { clearPreparedAudio, preparedAudioStats, preparedMixStats } from '../src/engine/cache/preparedAudio';
import { clearPersistentPreparedAudio } from '../src/engine/cache/persistentPreparedAudio';
import { playbackResources } from '../src/engine/playback/playbackResources';
import { playbackWorkerStats } from '../src/engine/playback/renderPlaybackPart';
import { createCatalogSong, catalogIdForStyle } from '../src/engine/sheet/songCatalog';

const report=document.querySelector<HTMLPreElement>('#report')!;
let song: Sheet | undefined, started=0, preparedMs: number | undefined, fourSecondsMs: number | undefined, compileMs: number | undefined;
let stress: {edits:number;peakRetainedPCMBytes:number;peakActiveRenders:number;error?:string} | undefined;
let player=new SongPlayer(()=>update(),()=>update(),true);
let previewRequest=0,previewTimer:ReturnType<typeof setTimeout> | undefined;
function cancelPreview() {previewRequest++;clearTimeout(previewTimer);}
function playOnce(inputTime:number) {
  cancelPreview();const request=previewRequest;
  void player.play(inputTime).then(()=>{
    if(request===previewRequest)previewTimer=setTimeout(()=>player.stop(),500);
  });
}
function update() {
  if(player.snapshot.performance && compileMs===undefined)compileMs=Math.round(performance.now()-started);
  if(player.preparedAheadSeconds>=4 && fourSecondsMs===undefined)fourSecondsMs=Math.round(performance.now()-started);
  if(player.preparedAheadSeconds && preparedMs===undefined)preparedMs=Math.round(performance.now()-started);
  const part=preparedAudioStats(),mix=preparedMixStats(),workers=playbackWorkerStats();
  const retainedPCMBytes=part.bytes+mix.bytes+player.bufferedBytes;
  if(stress) {
    stress.peakRetainedPCMBytes=Math.max(stress.peakRetainedPCMBytes,retainedPCMBytes);
    stress.peakActiveRenders=Math.max(stress.peakActiveRenders,workers.activeRenders);
  }
  report.textContent=JSON.stringify({status:player.snapshot.status,secondsAhead:player.preparedAheadSeconds,
    backgroundPreparationMs:preparedMs,fourSecondsPreparationMs:fourSecondsMs,compileMs,
    position:Number(player.position().toFixed(2)),clickToSound:player.snapshot.playbackTiming ?? null,
    outputLatencyEstimateMs:player.snapshot.outputLatencyMs ?? null,
    audio:player.playbackActivity,health:player.playbackHealth,persistent:part.persistent,cacheWarmup:player.cacheWarmup,memory:{retainedPCMBytes,workers,limits:playbackResources()},stress,
    error:player.snapshot.error ?? null},null,2);
}
function changed(next:Sheet) {
  cancelPreview();player.stop();player.locate(0);song=next;started=performance.now();
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
const tango=()=>createCatalogSong(catalogIdForStyle('tango-golden-age'));
document.querySelector<HTMLButtonElement>('#prepare')!.onclick=()=>changed(tango());
document.querySelector<HTMLButtonElement>('#cold')!.onclick=event=>{
  changed(tango());playOnce(event.timeStamp);
};
document.querySelector<HTMLButtonElement>('#cold-continuous')!.onclick=event=>{changed(tango());void player.play(event.timeStamp);};
document.querySelector<HTMLButtonElement>('#clear-cache')!.onclick=async()=>{
  cancelPreview();player.dispose();await clearPersistentPreparedAudio();clearPreparedAudio();song=undefined;
  preparedMs=undefined;fourSecondsMs=undefined;compileMs=undefined;
  player=new SongPlayer(()=>update(),()=>update(),true);update();
};
document.querySelector<HTMLButtonElement>('#play')!.onclick=event=>{playOnce(event.timeStamp);};
document.querySelector<HTMLButtonElement>('#continuous')!.onclick=event=>{cancelPreview();void player.play(event.timeStamp);};
document.querySelector<HTMLButtonElement>('#pause')!.onclick=()=>{cancelPreview();player.stop();};
document.querySelector<HTMLButtonElement>('#seek')!.onclick=()=>player.locate(20);
document.querySelector<HTMLButtonElement>('#rename')!.onclick=()=>{if(song){song={...song,title:'Renamed'};player.configure(song);update();}};
document.querySelector<HTMLButtonElement>('#edit')!.onclick=event=>{
  if(song){changed(setSongBpm(song,song.bpm===120?121:120));playOnce(event.timeStamp);}
};
document.querySelector<HTMLButtonElement>('#stress')!.onclick=async()=>{
  stress={edits:0,peakRetainedPCMBytes:0,peakActiveRenders:0};
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
window.addEventListener('pagehide',()=>{cancelPreview();clearInterval(heartbeat);player.dispose();},{once:true});
