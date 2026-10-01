// REPORT: "sonic model" of ONE song (default starter of a genre): per-track stats, sections, phrase plan, mix plan.
// Schema: docs/schemas/song-sonic-model.schema.json
// Usage: tsx scripts/reports/song-sonic-model.ts [genreId=tango] [out.json=audit/<genre>-sonic-model.json]
import { writeFileSync } from 'node:fs';
import { makeSheet, getResolvedSectionStyle } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { GENRE_NAMES } from '../../src/data/genres';
import { contractForGenre } from '../../src/engine/style/contracts';
import { positional } from '../lib/io.ts';
import { trackStats } from '../lib/trackStats.ts';

const [argGenre, argOut] = positional();
const genre = argGenre || 'tango';
if (!GENRE_NAMES[genre]) throw new Error(`Unknown genre ${genre}`);
const out = argOut || `audit/${genre}-sonic-model.json`;
const sheet = makeSheet(genre);
const perf = compileWholeSong(sheet);
const style = getResolvedSectionStyle(sheet, sheet.regions[0]);
const contract = contractForGenre(genre, style);
const tracks = sheet.tracks.map(t => {
  const s = trackStats(sheet, perf, t.id);
  return { trackId: t.id, instrumentId: t.instrumentId, role: t.role, noteCount: s.noteCount, meanVelocity: s.meanVelocity, gestureDiversity: s.gestures.length, articulations: s.gestures, rootRatio: s.rootRatio, lowRegisterRatio: s.lowRegisterRatio };
});
const phrasePlan: Array<{ startBar: number; endBar: number; energy?: number; cadence: boolean; development: string }> = []; const cycle=Math.max(1,Number(contract.cycleLength??1)); const phraseBars=Math.max(cycle,Number(style.melody?.phraseLengthsBars?.find((x:number)=>x%cycle===0)??cycle));
for(const r of sheet.regions){for(let b=r.start;b<r.end;b+=phraseBars)phrasePlan.push({startBar:b,endBar:Math.min(r.end,b+phraseBars),energy:r.energy, cadence:Math.min(r.end,b+phraseBars)>=r.end,development:'phrase-level'});}
const mixPlan: Record<string, { role: string; volume: number; pan: number }> = {}; for(const t of sheet.tracks)mixPlan[t.id]={role:t.role,volume:t.volume,pan:0};
const model={genre,styleId:sheet.styleId,durationSec:perf.duration,tempoBpm:perf.bars[0]?.bpm,tracks,sections:sheet.regions.map(r=>({id:r.id,kind:r.kind,startBar:r.start,endBar:r.end,chords:r.chords})),phrasePlan,mixPlan,diagnostics:[]};
writeFileSync(out,JSON.stringify(model,null,2)); console.log(`wrote ${out}`);
