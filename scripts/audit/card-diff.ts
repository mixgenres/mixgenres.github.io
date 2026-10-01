// Semantic song-card diff. Usage: npm run card:diff -- old.json new.json [--tolerance=0.001]
import { readFileSync } from 'node:fs';
import { flag } from '../lib/io.ts';

type TrackCard = { grid:string; register:string; notes:number; gestures?:string[] };
interface BarCard { bar:number; chord:string; tracks:Record<string,TrackCard> }
interface Card { bars?:BarCard[]; wholeSong?: { energyCurve?:number[]; roleActivityPerBar?:Record<string,number[]>; symbolic?:Record<string,unknown> } }
const [aPath,bPath]=process.argv.slice(2).filter(x=>!x.startsWith('--'));
if(!aPath||!bPath) throw new Error('Usage: npm run card:diff -- old.json new.json [--tolerance=0.001]');
const tolerance=Math.max(0,Number(flag('tolerance')??0.001));
const a=JSON.parse(readFileSync(aPath,'utf8')) as Card; const b=JSON.parse(readFileSync(bPath,'utf8')) as Card; const deltas:string[]=[];
const oldBars=new Map((a.bars??[]).map(x=>[x.bar,x])); const newBars=new Map((b.bars??[]).map(x=>[x.bar,x]));
for(const [bar] of oldBars) if(!newBars.has(bar)) deltas.push(`bar ${bar}: removed`);
for(const [bar,nb] of newBars){const ob=oldBars.get(bar);if(!ob){deltas.push(`bar ${bar}: added`);continue;}if(ob.chord!==nb.chord)deltas.push(`bar ${bar}: chord ${ob.chord} -> ${nb.chord}`);const ids=new Set([...Object.keys(ob.tracks),...Object.keys(nb.tracks)]);for(const id of ids){const o=ob.tracks[id],n=nb.tracks[id];if(!o){deltas.push(`bar ${bar} ${id}: track added`);continue;}if(!n){deltas.push(`bar ${bar} ${id}: track removed`);continue;}if(o.grid!==n.grid)deltas.push(`bar ${bar} ${id}: grid ${o.grid} -> ${n.grid}`);if(o.register!==n.register)deltas.push(`bar ${bar} ${id}: register ${o.register} -> ${n.register}`);if(o.notes!==n.notes)deltas.push(`bar ${bar} ${id}: notes ${o.notes} -> ${n.notes}`);if(JSON.stringify(o.gestures??[])!==JSON.stringify(n.gestures??[]))deltas.push(`bar ${bar} ${id}: gestures ${JSON.stringify(o.gestures??[])} -> ${JSON.stringify(n.gestures??[])}`);}}
function numericDiff(prefix:string,x:unknown,y:unknown){if(typeof x==='number'&&typeof y==='number'&&Math.abs(x-y)>tolerance)deltas.push(`${prefix}: ${x} -> ${y}`);else if(x&&y&&typeof x==='object'&&typeof y==='object'){const keys=new Set([...Object.keys(x as object),...Object.keys(y as object)]);for(const k of keys)numericDiff(`${prefix}.${k}`,(x as Record<string,unknown>)[k],(y as Record<string,unknown>)[k]);}}
numericDiff('wholeSong',a.wholeSong,b.wholeSong);
console.log(deltas.length?deltas.join('\n'):'No semantic card deltas beyond tolerance.');
process.exitCode=deltas.length?1:0;
