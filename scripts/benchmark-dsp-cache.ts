import { writeFileSync } from 'node:fs';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileSongPipeline } from '../src/engine/pipeline/compileSong';
import { renderSongMix } from '../src/engine/playback/renderSongMix';
import { clearPreparedAudio, preparedAudioStats } from '../src/engine/cache/preparedAudio';
import { measureAudio } from '../src/engine/studio/audioMetrics';
import { wavBlob } from '../src/export/audioEncoding';
import { reportMetadata, writeReport } from './lib/auditReport';

const song = makeSheet('tango','tango-golden-age');
clearPreparedAudio();
const pipeline = compileSongPipeline(song);
const musicalSnapshot = JSON.stringify(pipeline.performance.notes);
const runs = [];
let audio;
for (const [name, composition] of [
  ['cold',song], ['replay',song],
  ['mixer-edit',{...song,tracks:song.tracks.map(t => ({...t,volume:t.volume*.9}))}],
] as const) {
  const before = preparedAudioStats(), started = performance.now();
  audio = await renderSongMix(pipeline.performance,composition,new AbortController().signal);
  const after = preparedAudioStats();
  runs.push({name,milliseconds:Number((performance.now()-started).toFixed(1)),
    hits:after.hits-before.hits,misses:after.misses-before.misses,bytes:after.bytes});
  if (JSON.stringify(pipeline.performance.notes)!==musicalSnapshot) throw new Error('Rendering mutated the musical performance');
  if (name==='replay') writeFileSync('audit/tango-cached-sections.wav',new Uint8Array(await wavBlob(audio.left,audio.right,audio.sampleRate,true).arrayBuffer()));
  console.log(JSON.stringify(runs.at(-1)));
}
const edited = structuredClone(song), region=edited.regions[1], track=edited.tracks[0];
edited.measures[region.start+2].patternDetailsByTrack![track.id].perf!.accents[0]*=.81;
const before=preparedAudioStats(), started=performance.now();
await renderSongMix(compileSongPipeline(edited).performance,edited,new AbortController().signal);
const after=preparedAudioStats();
runs.push({name:'one-bar-edit',milliseconds:Number((performance.now()-started).toFixed(1)),
  hits:after.hits-before.hits,misses:after.misses-before.misses,bytes:after.bytes});
const report={...reportMetadata(),scope:'Complete 40-bar default Golden Age tango, portable PCM and section cache',
  status:runs.slice(1,3).some(run => run.misses!==0) ? 'FAIL' : 'PASS',runs,
  notes:pipeline.performance.notes.length,phrases:pipeline.performance.phrases?.length,
  sections:song.regions.length,metrics:measureAudio(audio!.left,audio!.right,audio!.sampleRate),
  limitation:'Node portable mix; browser click-to-output signal is measured separately. Cache passes do not certify acoustic or historical fidelity.'};
writeReport('dsp-cache-benchmark',report);
if(report.status==='FAIL') process.exitCode=1;
