import { readFileSync } from 'node:fs';
import { songCatalog } from '../src/data/songs/catalog';
import { createCatalogSong } from '../src/engine/sheet/songCatalog';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import { compileSamplePlan } from '../src/engine/playback/soundfont/plan';
import { renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import { setSoundfontBankReader } from '../src/engine/playback/soundfont/banks';
import { measureAudio } from '../src/engine/studio/audioMetrics';
import { chooseAudioWindows } from './lib/audioExcerpt';

setSoundfontBankReader(async id => {
  const bytes = readFileSync(`src/assets/soundfonts/${id}.sfpack`);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
});

const failures: Array<{id:string; issue:string}> = [];
const quiet: Array<{id:string; rms:number|null; active:number}> = [];
const lowReferenceCoverage: Array<{id:string; count:number}> = [];
const bankUse = new Set<string>();
let notes = 0, eventCount = 0, rendered = 0;

for (let i=0; i<songCatalog.length; i++) {
  const entry = songCatalog[i];
  try {
    const sheet = createCatalogSong(entry.id);
    if (sheet.styleId !== entry.styleId || sheet.worldId !== entry.genreId) throw new Error('sheet identity differs from catalog');
    const perf = compileWholeSong(sheet);
    if (!perf.notes.length) throw new Error('compiled performance has no notes');
    const options = songMixOptions(sheet);
    const plan = compileSamplePlan(perf, {...options, selectedTrackIds: sheet.tracks.map(track => track.id)});
    if (!plan.events.length || !plan.banks.length) throw new Error('empty sample plan');
    notes += perf.notes.length; eventCount += plan.events.length; plan.banks.forEach(bank=>bankUse.add(bank));
    const outside = perf.notes.filter(n=>n.time < 0 || n.time > perf.duration + (perf.tail ?? 0) + 0.002);
    if (outside.length) throw new Error(`${outside.length} note attacks outside duration plus authored tail`);

    const refsPath = `docs/genres/${entry.genreId}/references.json`;
    let doc: any;
    try { doc=JSON.parse(readFileSync(refsPath,'utf8')); } catch { doc={}; }
    const rows=doc.styles ?? doc.references ?? [];
    const row=rows.find((r:any)=>r.styleId===entry.styleId);
    const recordings=row?.recordings ?? row?.references ?? [];
    const urls=new Set(recordings.map((r:any)=>r.url ?? r.youtube ?? r.appleMusic ?? r.spotify).filter(Boolean));
    if (urls.size < 5) lowReferenceCoverage.push({id:entry.id,count:urls.size});

    const win=chooseAudioWindows(perf,3).find(w=>w.name==='ensemble') ?? chooseAudioWindows(perf,3)[0];
    const start=win?.start ?? 0;
    const end=Math.min(perf.duration,start+3);
    if (!(end>start)) throw new Error('no playable excerpt window');
    const audio=await renderPerformanceToAudio(perf,{...options,renderWindow:{start,end},maxDurationSeconds:3,yieldForUI:false});
    const m=measureAudio(audio.left,audio.right,audio.sampleRate);
    rendered++;
    if (m.nonFiniteSamples || m.clippedSampleFraction>0 || Math.abs(m.dcOffset)>.02) throw new Error(`PCM invalid: nonFinite=${m.nonFiniteSamples}, clip=${m.clippedSampleFraction}, DC=${m.dcOffset}`);
    if ((m.samplePeak??0) === 0 || (m.activeRmsDbfs??-120)<-55 || m.activeWindowFraction<.35) quiet.push({id:entry.id,rms:m.activeRmsDbfs,active:m.activeWindowFraction});
  } catch (error) {
    failures.push({id:entry.id,issue:String(error)});
  }
  if ((i+1)%25===0 || i===songCatalog.length-1) {
    console.log(JSON.stringify({progress:`${i+1}/${songCatalog.length}`,rendered,notes,eventCount,banks:bankUse.size,failures:failures.length,quiet:quiet.length,referenceCoverageBelow5:lowReferenceCoverage.length}));
  }
}
console.log('FINAL '+JSON.stringify({songs:songCatalog.length,rendered,notes,eventCount,banks:[...bankUse].sort(),failures,quiet,referenceCoverageBelow5:lowReferenceCoverage},null,2));
