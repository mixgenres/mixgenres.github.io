import { makeSheet } from '../src/engine/generators/arrange.ts';
import { compileWholeSong, GESTURE_NAMES } from '../src/engine/compiler/wholeSongCompiler.ts';
import { INSTRUMENT_CATALOG } from '../src/data/instruments/index.ts';
import { writeFileSync } from 'node:fs';

const failures:string[]=[];
const base=makeSheet('tango');
const canonical=JSON.stringify(compileWholeSong(base,42));
const repeat=JSON.stringify(compileWholeSong(base,42));
if(canonical!==repeat) failures.push('same sheet/seed is not byte-identical');


for(const d of INSTRUMENT_CATALOG){
  const s=JSON.parse(JSON.stringify(base));
  s.tracks=s.tracks.slice(0,1).map((t:any)=>({...t,instrumentId:d.id,instrument:d.id,muted:false}));
  const a=compileWholeSong(s,0);
  const profile=(await import('../src/data/performance/instrumentPerformanceProfiles.ts')).getInstrumentPerformanceProfile(d.id);
  for(const n of a.notes){
    if(n.midi<profile.capabilities.lowMidi||n.midi>profile.capabilities.highMidi) failures.push(`${d.id}: range violation ${n.midi}`);
    if(n.gestureCode<=0 || !GESTURE_NAMES[n.gestureCode]) failures.push(`${d.id}: unresolved gesture code ${n.gestureCode}`);
    if(n.accent<0||n.accent>1) failures.push(`${d.id}: accent out of range`);
    if(n.vel<1||n.vel>127) failures.push(`${d.id}: velocity out of range`);
    if(n.dur<=0) failures.push(`${d.id}: non-positive duration`);
  }
}

// Cross-instrument fidelity: the same rhythm definition must preserve its onset
// skeleton while target instruments change only the physical realization.
const patternSheet=JSON.parse(JSON.stringify(base));
patternSheet.tracks=patternSheet.tracks.slice(0,1).map((t:any)=>({...t,instrumentId:'congas',instrument:'congas',muted:false}));
const patternId=patternSheet.measures[0].patternByTrack[patternSheet.tracks[0].id];
const ref=compileWholeSong(patternSheet,0);
const expectedBars=new Map<number,number[]>();
for(const n of ref.notes){
  const a=expectedBars.get(n.bar)??[];
  const b=ref.bars[n.bar];
  a.push(Number((((n.time-b.start)/Math.max(1e-6,b.end-b.start))).toFixed(3)));
  expectedBars.set(n.bar,a);
}
for(const instrument of ['upright-bass','bandoneon','cello','trumpet','piano','congas','guitar','tenor-sax','violin']){
  const s=JSON.parse(JSON.stringify(patternSheet));
  s.tracks[0].instrumentId=instrument; s.tracks[0].instrument=instrument;
  const out=compileWholeSong(s,0);
  for(const [bar, expected] of expectedBars){
    const actual=out.notes.filter((n:any)=>n.bar===bar).map((n:any)=>Number((((n.time-out.bars[bar].start)/Math.max(1e-6,out.bars[bar].end-out.bars[bar].start))).toFixed(3)));
    const missing=expected.filter((x:number)=>!actual.some((y:number)=>Math.abs(x-y)<0.035)).length;
    if(expected.length && missing/expected.length>0.25) failures.push(`${instrument}: rhythm onset fidelity below 75% in bar ${bar} (${patternId})`);
  }
}

// Genre-specific double-bass behavior must not collapse to one generic dialect.
const bassSignatures:string[]=[];
for(const host of ['tango','salsa','blues']){
  const s=JSON.parse(JSON.stringify(base));
  s.worldId=host; (s as any).styleId=undefined;
  for(const r of s.regions){r.genre=host;r.styleId=undefined;r.worldId=host;}
  s.tracks=s.tracks.slice(0,1).map((t:any)=>({...t,instrumentId:'upright-bass',instrument:'upright-bass',muted:false}));
  const out=compileWholeSong(s,0);
  bassSignatures.push(host+':'+out.notes.map((n:any)=>`${n.gestureCode}:${Math.round(n.vel/8)}`).join(','));
}
if(new Set(bassSignatures).size<2) failures.push('upright-bass tango/salsa/blues collapsed to one performance signature');

const report={instruments:INSTRUMENT_CATALOG.length,gestureCodes:Object.keys(GESTURE_NAMES).length,failures};
writeFileSync('performance-determinism.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({instruments:report.instruments,gestureCodes:report.gestureCodes,failures:failures.length},null,2));
if(failures.length){for(const f of failures.slice(0,50))console.error('FAIL',f);process.exit(1);}
