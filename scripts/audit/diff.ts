// Ratchet diff. Usage: npm run audit:diff -- baseline.json current.json [--tolerance=0.001]
// Numeric changes smaller than tolerance are ignored. Waivers are optional and live in audit/waivers.json.
import { readFileSync, existsSync } from 'node:fs';
import { flag } from '../lib/io.ts';
interface Row { styleId:string; metrics?:Record<string,unknown>; issues?:string[] }
interface Audit { rows?:Row[]; failures?:string[] }
const args=process.argv.slice(2).filter(x=>!x.startsWith('--')); const [aPath,bPath]=args;
if(!aPath||!bPath) throw new Error('Usage: npm run audit:diff -- baseline.json current.json [--tolerance=0.001]');
const tolerance=Math.max(0,Number(flag('tolerance')??0.001));
const a=JSON.parse(readFileSync(aPath,'utf8')) as Audit; const b=JSON.parse(readFileSync(bPath,'utf8')) as Audit;
const waiversPath='audit/waivers.json'; const waivers=existsSync(waiversPath)?JSON.parse(readFileSync(waiversPath,'utf8')) as {waivers?:Array<{id:string;reason:string;expires:string}>}:{waivers:[]};
const activeWaivers=new Set((waivers.waivers??[]).filter(w=>new Date(w.expires).getTime()>=Date.now()).map(w=>w.id));
const oldRows=new Map((a.rows??[]).map(r=>[r.styleId,r])); let changes=0;
function walk(prefix:string,x:unknown,y:unknown){
  if(typeof x==='number'&&typeof y==='number'){const delta=y-x;if(Math.abs(delta)>tolerance){const id=prefix.replace(/\..*$/,'');if(!activeWaivers.has(id)){console.log(`${prefix}: ${x} -> ${y} (${delta>0?'+':''}${delta})`);changes++;}}return;}
  if(x&&y&&typeof x==='object'&&typeof y==='object'){const keys=new Set([...Object.keys(x as object),...Object.keys(y as object)]);for(const k of keys)walk(`${prefix}.${k}`,(x as Record<string,unknown>)[k],(y as Record<string,unknown>)[k]);}
}
for(const row of b.rows??[]){const old=oldRows.get(row.styleId);if(!old){if(!activeWaivers.has(row.styleId)){console.log(`${row.styleId}: added`);changes++;}continue;}walk(row.styleId,old.metrics,row.metrics);const oldIssues=old.issues?.length??0,newIssues=row.issues?.length??0;if(newIssues>oldIssues&&!activeWaivers.has(row.styleId)){console.log(`${row.styleId}.issues: ${oldIssues} -> ${newIssues}`);changes++;}}
for(const old of a.rows??[]) if(!(b.rows??[]).some(r=>r.styleId===old.styleId)&&!activeWaivers.has(old.styleId)){console.log(`${old.styleId}: removed`);changes++;}
console.log(changes?`Ratchet changes beyond tolerance: ${changes}`:'No deltas beyond tolerance.');
process.exitCode=changes?1:0;
