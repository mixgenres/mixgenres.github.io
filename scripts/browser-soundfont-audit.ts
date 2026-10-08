import {SoundfontSongPlayer} from '../src/engine/playback/soundfont/player';
import {soundfontBankStats} from '../src/engine/playback/soundfont/banks';
import {densePlaybackFixture} from './lib/densePlaybackFixture';
import {createCatalogSong,catalogIdForStyle} from '../src/engine/sheet/songCatalog';
import {setSongBpm,type Sheet} from '../src/engine/sheet/sheet';
import {renderSampleMix} from '../src/engine/playback/renderSongMix';
import {encodeMp3} from '../src/export/audioEncoding';
import {getCanonicalStyle} from '../src/engine/style';
const report=document.querySelector<HTMLPreElement>('#report')!,controls=document.querySelector<HTMLDivElement>('#controls')!;
let song:Sheet|undefined;let started=0;let action='ready',actionAt=performance.now(),previousStatus='';
const transitions:Array<{action:string;status:string;elapsedMs:number;position:number}>=[];
let exportResult:unknown;
let awaitingComposition=false,commitMs:number|undefined;
const player=new SoundfontSongPlayer(update,update,true);
function update(){const status=player.snapshot.status;if(awaitingComposition&&player.composition===song){commitMs=performance.now()-actionAt;awaitingComposition=false;}if(status!==previousStatus){transitions.push({action,status,elapsedMs:performance.now()-actionAt,position:player.position()});previousStatus=status;}report.textContent=JSON.stringify({engine:'soundfont',status,elapsedMs:performance.now()-started,position:player.position(),compositionCurrent:player.composition===song,action,commitMs,tracks:song?.tracks.length,notes:player.snapshot.performance?.notes.length,diagnostics:player.sampleDiagnostics,banks:soundfontBankStats(),error:player.snapshot.error,transitions:transitions.slice(-12),exportResult},null,2);}
function button(name:string,run:(event:MouseEvent)=>void){const button=document.createElement('button');button.textContent=name;button.onclick=event=>{action=name;actionAt=performance.now();run(event);};controls.append(button);}
function start(next:Sheet,event:MouseEvent){player.stop();song=next;started=performance.now();player.configure(next);void player.play(event.timeStamp);}
button('Tango',e=>start(createCatalogSong(catalogIdForStyle('tango-golden-age')),e));
button('Flamenco',e=>start(createCatalogSong(catalogIdForStyle('flamenco-solea')),e));
button('Pop',e=>start(createCatalogSong(catalogIdForStyle(getCanonicalStyle('pop').id)),e));
button('Rock',e=>start(createCatalogSong(catalogIdForStyle(getCanonicalStyle('rock').id)),e));
for(const count of [12,15,30] as const)button(`${count} players`,e=>start(densePlaybackFixture(count),e));
button('Volume edit',()=>{if(song){song={...song,tracks:song.tracks.map((t,i)=>i? t:{...t,volume:(t.volume??1)*.5})};awaitingComposition=true;player.configure(song);update();}});
button('Tempo edit',()=>{if(song){song=setSongBpm(song,song.bpm===110?125:110);awaitingComposition=true;player.configure(song);update();}});
button('Seek 10s',()=>player.locate(10));button('Play',e=>void player.play(e.timeStamp));button('Pause',()=>player.pause());button('Stop',()=>player.stop());
button('Export 8s MP3',()=>{
  const perf=player.snapshot.performance,current=song;if(!perf||!current)return;
  player.pause();const at=performance.now();
  void renderSampleMix(perf,current,new AbortController().signal,{start:0,end:8}).then(async pcm=>{
    const renderedMs=performance.now()-at;const blob=await encodeMp3(pcm.left,pcm.right,pcm.sampleRate);
    const audio=document.createElement('audio');audio.controls=true;audio.src=URL.createObjectURL(blob);document.body.append(audio);
    exportResult={renderedMs,totalMs:performance.now()-at,bytes:blob.size,duration:pcm.left.length/pcm.sampleRate};update();
  }).catch(error=>{exportResult={error:String(error)};update();});
});
window.addEventListener('pagehide',()=>player.dispose());update();
