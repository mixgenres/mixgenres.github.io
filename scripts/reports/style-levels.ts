// REPORT (static, no audio): per-style level audit across all styles.
import { writeFileSync, mkdirSync } from 'node:fs';
import { ALL_STYLES } from '../../src/engine/style/index.ts';
import { makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { describeMix } from '../lib/mixSchema.ts';
import type { PerfNote } from '../../src/engine/band/performanceData.ts';
mkdirSync('audit/song-levels',{recursive:true}); const only=process.argv[2];
interface SectionTrack { id:string; inst:string|undefined; role:string; n:number; vel:number; estDb:number|null }
const out:Array<Record<string,unknown>>=[]; const avg=(a:number[])=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
for(const s of ALL_STYLES){const genreId=s.primaryGenre??s.genres?.[0];if(!genreId||(only&&s.id!==only&&genreId!==only))continue;try{
  const sheet=makeSheet({genreId,styleId:s.id});const perf=compileWholeSong(sheet);const mix=describeMix(sheet,perf);const effDb:Record<string,number>=Object.fromEntries(mix.tracks.map(t=>[t.id,t.gain.effectiveGainDb]));const flags=[...mix.summary.flags];
  const secs=sheet.regions.map(r=>{const t0=perf.bars[r.start]?.start??0,t1=perf.bars[r.end-1]?.end??perf.duration;const tracks:SectionTrack[]=sheet.tracks.map(t=>{const ns:PerfNote[]=perf.notes.filter(n=>n.trackId===t.id&&n.time>=t0&&n.time<t1);const mv=avg(ns.map(n=>n.vel));const est=ns.length?+(effDb[t.id]+20*Math.log10(Math.max(1,mv)/127)).toFixed(1):null;return{id:t.id,inst:t.instrumentId,role:t.role,n:ns.length,vel:+mv.toFixed(0),estDb:est};});const act=tracks.filter(x=>x.n>0);return{id:r.id,kind:r.kind,bars:r.end-r.start,energy:r.energy,active:act.length,tracks,spreadDb:act.length?+(Math.max(...act.map(x=>x.estDb??-Infinity))-Math.min(...act.map(x=>x.estDb??Infinity))).toFixed(1):0};});
  const energies=secs.map(x=>x.energy);if(new Set(energies).size===1)flags.push(`flat-energy:${energies[0]}`);const secLoud=secs.map(x=>avg(x.tracks.filter(t=>t.n>0).map(t=>t.vel)));if(secLoud.length&&Math.max(...secLoud)-Math.min(...secLoud)<6)flags.push(`flat-velocity-across-sections:${(Math.max(...secLoud)-Math.min(...secLoud)).toFixed(1)}`);
  for(const x of secs){if(x.spreadDb>20)flags.push(`section-level-spread>${x.spreadDb}dB:${x.id}`);if(x.active<=2)flags.push(`thin-section:${x.id}:${x.active}-tracks`);}const allEst=secs.flatMap(x=>x.tracks.filter(t=>t.n>0&&t.estDb!==null).map(t=>t.estDb as number));const bass=secs.flatMap(x=>x.tracks.filter(t=>/bass/.test(t.role)&&t.n>0&&t.estDb!==null).map(t=>t.estDb as number));const lead=secs.flatMap(x=>x.tracks.filter(t=>/lead|melody/.test(t.role)&&t.n>0&&t.estDb!==null).map(t=>t.estDb as number));if(lead.length&&allEst.length&&avg(lead)<avg(allEst)-12)flags.push('lead-buried');if(bass.length&&allEst.length&&avg(bass)<avg(allEst)-10)flags.push('bass-buried');
  out.push({styleId:s.id,genreId,canonical:!!s.canonical,duration:+perf.duration.toFixed(0),flags,sections:secs,tracks:mix.tracks.map(t=>({id:t.id,inst:t.instrumentId,role:t.instrumentRole,effDb:t.gain.effectiveGainDb,makeup:t.gain.makeupGain,notes:t.performance.noteCount}))});
}catch(e:unknown){out.push({styleId:s.id,genreId,error:e instanceof Error?e.message.slice(0,160):String(e).slice(0,160)});}}
writeFileSync('audit/song-levels/style-levels.json',JSON.stringify(out,null,1));console.log('styles',out.length,'errors',out.filter(o=>o.error).length);
