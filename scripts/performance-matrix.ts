import { makeSheet, type Sheet } from '../src/engine/generators/arrange.ts';
import { compileWholeSong } from '../src/engine/compiler/wholeSongCompiler.ts';
import { ALL_PATTERNS } from '../src/data/genres/index.ts';
import { INSTRUMENT_CATALOG } from '../src/data/instruments/index.ts';
import { getInstrumentPerformanceProfile } from '../src/data/performance/instrumentPerformanceProfiles.ts';
import { writeFileSync } from 'node:fs';

const rhythmIds = Array.from(new Set([
  ...ALL_PATTERNS.filter(p=>/marcato|sincopa|bordoneo|milonga|tumbao|montuno|moña|walking|ride|four-on|four on/i.test(`${p.name} ${p.id}`)).map(p=>p.id),
  ...ALL_PATTERNS.slice(0,10).map(p=>p.id),
])).slice(0,20);
const hosts=['tango','milonga','salsa','timba','jazz','blues','swing','funk','house'];
const rows:any[]=[];

function cloneSheet(base:Sheet, instrumentId:string, patternId:string, host:string):Sheet {
  const s=JSON.parse(JSON.stringify(base)) as Sheet;
  s.worldId=host;
  (s as any).styleId=undefined;
  for(const r of s.regions){r.genre=host; r.styleId=undefined; r.worldId=host;}
  s.tracks=s.tracks.slice(0,1).map((t:any)=>({...t,instrumentId,instrument:instrumentId,kind:'other',muted:false}));
  for(const m of s.measures){
    m.patternByTrack[s.tracks[0].id]=patternId;
    (m.patternDetailsByTrack??={})[s.tracks[0].id]={
      patternId,onsetGrid:ALL_PATTERNS.find(p=>p.id===patternId)?.onsetGrid??[],
      accentProfile:ALL_PATTERNS.find(p=>p.id===patternId)?.accentProfile,
      durationGrid:ALL_PATTERNS.find(p=>p.id===patternId)?.durationGrid,
      hitTypes:ALL_PATTERNS.find(p=>p.id===patternId)?.hitGrid as any,
    };
  }
  return s;
}

const base=makeSheet('tango');
for(const d of INSTRUMENT_CATALOG){
  const p=getInstrumentPerformanceProfile(d.id);
  for(const host of hosts){
    const patternId=rhythmIds[0];
    const s=cloneSheet(base,d.id,patternId,host);
    const a=compileWholeSong(s,0);
    const b=compileWholeSong(s,0);
    const sa=JSON.stringify(a), sb=JSON.stringify(b);
    if(sa!==sb) throw new Error(`nondeterministic compile ${d.id}/${host}`);
    const notes=a.notes.filter(n=>n.trackId===s.tracks[0].id);
    const maxPoly = notes.reduce((mx,n)=>Math.max(mx,notes.filter(x=>x.time<=n.time && x.time+x.dur>n.time).length),0);
    const minMidi=notes.reduce((m,n)=>Math.min(m,n.midi),127), maxMidi=notes.reduce((m,n)=>Math.max(m,n.midi),0);
    const gestures=new Set(notes.map(n=>n.gestureCode));
    const invalid=[...gestures].filter(code=>!Object.values(p.gestures).some(g=>g.id && code>0));
    rows.push({instrument:d.id,host,notes:notes.length,minMidi,maxMidi,maxPoly,capPoly:p.capabilities.polyphony,low:p.capabilities.lowMidi,high:p.capabilities.highMidi,gestureCount:gestures.size,invalidGestures:invalid.length});
  }
}
const failures=rows.filter(r=>r.minMidi<r.low||r.maxMidi>r.high||r.maxPoly>r.capPoly||r.notes===0||r.invalidGestures);
const report={instruments:INSTRUMENT_CATALOG.length,hosts:hosts.length,rhythmIdeas:rhythmIds.length,cells:rows.length,failures:failures.length,rows};
writeFileSync('performance-matrix.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({instruments:report.instruments,hosts:report.hosts,cells:report.cells,failures:report.failures},null,2));
if(failures.length){for(const f of failures.slice(0,30))console.error('FAIL',f);process.exit(1);}
