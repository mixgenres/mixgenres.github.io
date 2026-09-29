import { writeFileSync } from 'node:fs';
import { makeSheet, getResolvedSectionStyle } from '../src/engine/generators/arrange';
import { compileWholeSong } from '../src/engine/compiler/wholeSongCompiler';
import { GENRE_NAMES } from '../src/data/genres';
import { GESTURE_NAMES } from '../src/engine/compiler/gestureCodes';
import { contractForGenre } from '../src/data/styles/contracts';
import { parseChord } from '../src/engine/theory/theory';

const genre=process.argv[2]||'tango';
if(!GENRE_NAMES[genre]) throw new Error(`Unknown genre ${genre}`);
const out=process.argv[3]||`audit/${genre}-sonic-model.json`;
const sheet=makeSheet(genre); const perf=compileWholeSong(sheet); const style=getResolvedSectionStyle(sheet,sheet.regions[0]); const contract=contractForGenre(genre,style);
const tracks: Record<string, Record<string, unknown>> = {};
for(const t of sheet.tracks){
 const ns=perf.notes.filter(n=>n.trackId===t.id); const gs=Array.from(new Set(ns.map(n=>GESTURE_NAMES[n.gestureCode]||String(n.gestureCode))));
 let roots=0,low=0; for(const n of ns){const c=sheet.measures[n.bar]?.chord;if(c&&n.midi%12===(parseChord(c).rootPc??0))roots++;if(n.midi<43)low++;}
 tracks[t.id]={trackId:t.id,instrumentId:t.instrumentId,role:t.role,noteCount:ns.length,meanVelocity:ns.length?ns.reduce((a,n)=>a+n.vel,0)/ns.length:0,gestureDiversity:gs.length,articulations:gs,rootRatio:ns.length?roots/ns.length:0,lowRegisterRatio:ns.length?low/ns.length:0};
}
const phrasePlan: Array<{ startBar: number; endBar: number; energy?: number; cadence: boolean; development: string }> = []; const cycle=Math.max(1,Number(contract.cycleLength??1)); const phraseBars=Math.max(cycle,Number(style.melody?.phraseLengthsBars?.find((x:number)=>x%cycle===0)??cycle));
for(const r of sheet.regions){for(let b=r.start;b<r.end;b+=phraseBars)phrasePlan.push({startBar:b,endBar:Math.min(r.end,b+phraseBars),energy:r.energy, cadence:Math.min(r.end,b+phraseBars)>=r.end,development:'phrase-level'});}
const mixPlan: Record<string, { role: string; volume: number; pan: number }> = {}; for(const t of sheet.tracks)mixPlan[t.id]={role:t.role,volume:t.volume,pan:0};
const model={genre,styleId:sheet.styleId,durationSec:perf.duration,tempoBpm:perf.bars[0]?.bpm,tracks:Object.values(tracks),sections:sheet.regions.map(r=>({id:r.id,kind:r.kind,startBar:r.start,endBar:r.end,chords:r.chords})),phrasePlan,mixPlan,diagnostics:[]};
writeFileSync(out,JSON.stringify(model,null,2)); console.log(`wrote ${out}`);
