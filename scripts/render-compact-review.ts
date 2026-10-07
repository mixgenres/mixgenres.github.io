import {mkdirSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {addVoice,makeSheet} from '../src/engine/sheet/sheet';
import {arrangeBand} from '../src/engine/band/arrangeBand';
import {renderPerformanceToMp3} from '../src/engine/playback/mp3Export';
import {songMixOptions} from '../src/engine/playback/renderSongMix';
import {densePlaybackFixture} from './lib/densePlaybackFixture';

const directory=path.resolve(process.argv[2]??'audit/playback-review');mkdirSync(directory,{recursive:true});
const rows=[];
for(const [instrument,genre] of [['bandoneon','tango'],['trumpet','jazz'],['congas','salsa'],['piano','tango'],['cello','classical'],
  ['guitar','flamenco'],['guitar','funk'],['guitar','rock'],['guitar','jazz']] as const) {
  let song=makeSheet(genre);
  if(!song.tracks.some(t=>t.instrumentId===instrument)) song=addVoice(song,instrument,undefined,'song');
  const track=song.tracks.find(t=>t.instrumentId===instrument)!;
  const perf=arrangeBand(song), start=perf.notes.find(n=>n.trackId===track.id)?.time??0;
  const name=`${instrument}-${genre}.mp3`;
  const blob=await renderPerformanceToMp3(perf,{...songMixOptions(song),rawStem:true,mixState:undefined,selectedTrackIds:[track.id],
    renderWindow:{start,end:start+5},maxDurationSeconds:5,format:'mp3',yieldForUI:false});
  writeFileSync(path.join(directory,name),Buffer.from(await blob.arrayBuffer()));
  rows.push({label:`${instrument} · ${genre}`,name,bytes:blob.size});
}
const song=densePlaybackFixture(30),name='30-players.mp3';
const blob=await renderPerformanceToMp3(arrangeBand(song),{...songMixOptions(song),renderWindow:{start:0,end:12},maxDurationSeconds:12,
  format:'mp3',yieldForUI:false,bypassWebAudioMaster:true});
writeFileSync(path.join(directory,name),Buffer.from(await blob.arrayBuffer()));rows.unshift({label:'30 players · ensemble',name,bytes:blob.size});
writeFileSync(path.join(directory,'index.html'),`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Shared instrument auditions</title><style>body{font:16px system-ui;background:#101622;color:#f0f4fc;max-width:960px;margin:40px auto;padding:24px}h1{font-size:30px}p{color:#afbed4;line-height:1.6}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}article{background:#1d293c;border-radius:12px;padding:20px}h2{font-size:18px;text-transform:capitalize;margin:0 0 18px}audio{width:100%}</style><h1>Shared instrument auditions</h1><p>The instrument cores used in live playback and MP3 export. Individual parts follow their authored genre arrangements; the 30-player mix is a stress arrangement. These clips use the portable export master; the browser applies its native studio chain. Recording realism still needs listening against the reference tracks.</p><main>${rows.map(row=>`<article><h2>${row.label}</h2><audio controls preload="none" src="${row.name}"></audio></article>`).join('')}</main></html>`);
console.log(JSON.stringify({directory,files:rows},null,2));
