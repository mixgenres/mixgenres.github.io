/** Node/offline timings, not device or hardware output latency. */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { densePlaybackFixture } from './lib/densePlaybackFixture';
import { arrangeBand } from '../src/engine/band/arrangeBand';
import { compileSamplePlan } from '../src/engine/playback/soundfont/plan';
import { setSoundfontBankReader, soundfontBankStats } from '../src/engine/playback/soundfont/banks';
import { SOUNDFONT_CONTENT_KEY } from '../src/engine/playback/soundfont/bankIdentity';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import { renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import { measureAudio } from '../src/engine/studio/audioMetrics';
import { encodeMp3 } from '../src/export/audioEncoding';
setSoundfontBankReader(async id=>{const f=readFileSync(`src/assets/soundfonts/${id}.sfpack`);return f.buffer.slice(f.byteOffset,f.byteOffset+f.byteLength);});
const results=[];
for(const count of [12,15,30] as const) {
  const song=densePlaybackFixture(count),start=performance.now(),perf=arrangeBand(song),compiledMs=performance.now()-start;
  const options={...songMixOptions(song),renderWindow:{start:0,end:8},yieldForUI:false};
  const planned=performance.now(),plan=compileSamplePlan(perf,options),plannedMs=performance.now()-planned;
  const at=performance.now(),pcm=await renderPerformanceToAudio(perf,options),renderMs=performance.now()-at;
  if(!pcm.left.every(Number.isFinite)||!pcm.right.every(Number.isFinite))throw new Error('Non-finite sample output');
  const encoded=performance.now(),blob=await encodeMp3(pcm.left,pcm.right,pcm.sampleRate),mp3Ms=performance.now()-encoded;
  mkdirSync('audit/soundfont-review',{recursive:true});
  if(count===30)writeFileSync('audit/soundfont-review/30-players.mp3',Buffer.from(await blob.arrayBuffer()));
  const result={count,notes:perf.notes.length,channels:plan.channels,banks:plan.banks,compiledMs,plannedMs,duration:pcm.left.length/44100,renderMs,mp3Ms,mp3Bytes:blob.size,metrics:measureAudio(pcm.left,pcm.right,44100)};
  results.push(result);console.log(JSON.stringify(result));
}
writeFileSync('audit/soundfont-review/benchmark.json',JSON.stringify({createdAt:new Date().toISOString(),engine:'soundfont',bankContentKey:SOUNDFONT_CONTENT_KEY,environment:'Node portable studio master; desktop CPU',banks:soundfontBankStats(),results},null,2)+'\n');
