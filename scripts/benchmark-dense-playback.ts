import assert from 'node:assert/strict';
import {writeFileSync} from 'node:fs';
import {densePlaybackFixture} from './lib/densePlaybackFixture';
import {arrangeBand} from '../src/engine/band/arrangeBand';
import {renderPreparedMix,songMixOptions} from '../src/engine/playback/renderSongMix';
import {clearPreparedAudio,preparedAudioStats,preparedMixStats} from '../src/engine/cache/preparedAudio';
import {clearStemCache} from '../src/engine/cache/stemCache';
import {compactInstrumentStats} from '../src/engine/playback/compactInstrument';

// CPU/PCM scaling, independent of browser module loading, native mastering and
// hardware audio deadlines. Use the browser audit for click-to-signal/underruns.
const reports=[];
for(const players of [12,15,30] as const) {
  clearPreparedAudio();clearStemCache();
  const song=densePlaybackFixture(players), began=performance.now(), perf=arrangeBand(song);
  const compileMs=performance.now()-began;
  const audibleTracks=new Set(perf.notes.filter(note=>note.time<4).map(note=>note.trackId)).size;
  assert.equal(audibleTracks,players,'every chair must contribute opening notes');
  const windows=[], signal=new AbortController().signal;
  for(const start of [0,4,8]) {
    const before=performance.now();
    const audio=await renderPreparedMix(perf,{...songMixOptions(song),yieldForUI:false,renderWindow:{start,end:start+4},boundedStems:true},signal);
    assert.ok(audio.left.every(Number.isFinite));assert.ok(audio.right.every(Number.isFinite));
    assert.ok(audio.left.some(sample=>Math.abs(sample)>1e-5),'audible ensemble');
    windows.push({start,renderMs:Math.round(performance.now()-before),frames:audio.left.length});
  }
  const report={players,audibleTracks,notes:perf.notes.length,compileMs:Math.round(compileMs),windows,
    realtimeFactor:windows.reduce((sum,w)=>sum+w.renderMs,0)/12000,
    partCacheBytes:preparedAudioStats().bytes,mixCacheBytes:preparedMixStats().bytes,synthesis:compactInstrumentStats()};
  reports.push(report);console.log(JSON.stringify(report));
}
writeFileSync(process.argv[2]??'/tmp/mixgenres-dense-playback.json',JSON.stringify(reports,null,2)+'\n');
