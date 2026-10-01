// Combined T1 per-style audit: one real compile per style feeds data-reach/provenance and symbolic metrics.
// This avoids running the expensive 363-style compiler twice.
import { ALL_PATTERNS, GENRE_WORLDS, GENRE_WORLDS_BY_ID, PATTERNS_BY_ID } from '../../src/data/genres';
import { INSTRUMENT_CATALOG, INSTRUMENTS_BY_ID } from '../../src/data/instruments';
import { ALL_STYLES, ALL_STYLES_BY_ID } from '../../src/engine/style/registry.ts';
import { resolveStyle } from '../../src/engine/style/resolve.ts';
import { makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { STYLE_PATCHES } from '../../src/data/styles/contracts.ts';
import { GESTURE_NAMES } from '../../src/engine/band/gestures.ts';
import { analyzePerformance } from '../lib/auditMetrics.ts';
import { flag, writeReport } from '../lib/io.ts';

interface ReadState { reads: Map<string, number>; root: string }
const states = new Map<string, ReadState>();
function recorder<T extends object>(value:T,root:string,path=root,seen=new WeakMap<object,unknown>()):T {
  const existing=seen.get(value); if(existing)return existing as T;
  let state=states.get(root); if(!state){state={reads:new Map(),root};states.set(root,state);}
  const proxy=new Proxy(value,{get(target,prop,receiver){if(typeof prop==='string'){const p=`${path}.${prop}`;state!.reads.set(p,(state!.reads.get(p)??0)+1);}const result=Reflect.get(target,prop,receiver);return result&&typeof result==='object'?recorder(result as object,root,`${path}.${String(prop)}`,seen):result;}});
  seen.set(value,proxy); return proxy;
}
for(const [id,value] of Object.entries(ALL_STYLES_BY_ID))ALL_STYLES_BY_ID[id]=recorder(value,`style:${id}`);
for(const [id,value] of Object.entries(PATTERNS_BY_ID))PATTERNS_BY_ID[id]=recorder(value,`pattern:${id}`);
for(const [id,value] of Object.entries(INSTRUMENTS_BY_ID))INSTRUMENTS_BY_ID[id]=recorder(value,`instrument:${id}`);
const start=Math.max(0,Number(flag('start')??process.env.AUDIT_START??0));
const end=Math.min(ALL_STYLES.length,Math.max(start,Number(flag('end')??process.env.AUDIT_END??ALL_STYLES.length)));
const selected=ALL_STYLES.slice(start,end); const failures:string[]=[]; const rows:Array<Record<string,unknown>>=[]; const usedPatterns=new Set<string>(),usedInstruments=new Set<string>(),usedGestures=new Set<string>();
for(const style of selected){try{
  const resolved=resolveStyle({genreId:style.primaryGenre,styleId:style.id}); const sheet=makeSheet({genreId:style.primaryGenre,styleId:style.id}); const perf=compileWholeSong(sheet,0); const metrics=analyzePerformance(sheet,perf);
  for(const m of sheet.measures){for(const id of Object.values(m.patternByTrack??{}))if(id)usedPatterns.add(id);for(const d of Object.values(m.patternDetailsByTrack??{}))if(d?.patternId)usedPatterns.add(d.patternId);}
  for(const t of sheet.tracks)if(t.instrumentId)usedInstruments.add(t.instrumentId); for(const n of perf.notes)usedGestures.add(GESTURE_NAMES[n.gestureCode]??`code:${n.gestureCode}`);
  const issues:string[]=[]; if(!metrics.invariants.finite)issues.push('non-finite performance value');if(!metrics.invariants.monotonic)issues.push('note times are not monotonic');if(metrics.invariants.negativeDurations)issues.push(`${metrics.invariants.negativeDurations} negative durations`);if(metrics.invariants.boundaryErrors)issues.push(`${metrics.invariants.boundaryErrors} bar boundary errors`);if(metrics.playability.monophonicOverlapCount)issues.push(`${metrics.playability.monophonicOverlapCount} monophonic overlaps`);
  const hardcoded=resolved.trace.filter(t=>t.source==='hardcoded').map(t=>t.path); const patch=STYLE_PATCHES[style.id];
  rows.push({styleId:style.id,genre:style.primaryGenre,notes:perf.notes.length,hardcodedFallbackPaths:hardcoded,patchOverride:patch?Object.keys(patch):[],metrics,issues}); for(const issue of issues)failures.push(`${style.id}: ${issue}`);
}catch(error){failures.push(`${style.id}: ${error instanceof Error?error.message:String(error)}`);}}
const readPaths=(prefix:string)=>new Set([...states.values()].filter(s=>s.root.startsWith(prefix)).flatMap(s=>[...s.reads.keys()]));
const report={schemaVersion:3,status:failures.length?'FAIL':'PASS',shard:[start,end],counts:{genres:GENRE_WORLDS.length,styles:selected.length,totalStyles:ALL_STYLES.length,patterns:ALL_PATTERNS.length,instruments:INSTRUMENT_CATALOG.length},reads:{stylePaths:readPaths('style:').size,patternPaths:readPaths('pattern:').size,instrumentPaths:readPaths('instrument:').size},coverage:{patterns:[...usedPatterns],instruments:[...usedInstruments],gestures:[...usedGestures]},lookup:{genresMissing:GENRE_WORLDS.filter(g=>!GENRE_WORLDS_BY_ID[g.id]).map(g=>g.id),stylesMissing:selected.filter(s=>!ALL_STYLES_BY_ID[s.id]).map(s=>s.id)},failures,rows};
writeReport(`style-audit-${start}-${end}.json`,report); console.log(JSON.stringify({status:report.status,shard:report.shard,styles:selected.length,failures:failures.length,coverage:{patterns:usedPatterns.size,instruments:usedInstruments.size,gestures:usedGestures.size}},null,2)); if(failures.length||(process.env.STRICT==='1'&&rows.some(r=>(r.hardcodedFallbackPaths as string[]).length)))process.exit(1);
