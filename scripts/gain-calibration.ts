import { writeFileSync, mkdirSync } from 'node:fs';
import { GENRE_NAMES } from '../src/data/genres';
import { makeSheet } from '../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';
import { contractForGenre } from '../src/engine/style/contracts';

mkdirSync('audit', {recursive:true});
const rows: Array<Record<string, unknown>>=[];
for(const genre of Object.keys(GENRE_NAMES)){
  const sheet=makeSheet(genre); const perf=compileWholeSong(sheet); const c=contractForGenre(genre);
  for(const t of sheet.tracks){
    const ns=perf.notes.filter(n=>n.trackId===t.id); if(!ns.length) continue;
    rows.push({genre,instrumentId:t.instrumentId,role:t.role,trackVolume:t.volume,noteCount:ns.length,meanVelocity:ns.reduce((a,n)=>a+n.vel,0)/ns.length,bassForward:c.timbreSpace.mixCharacter?.bassForward??0.5});
  }
}
const payload={generatedAt:new Date().toISOString(),applied:Boolean(process.argv.includes('--apply')),rows};
writeFileSync('audit/gain-calibration.json',JSON.stringify(payload,null,2));
console.log(`calibrated ${rows.length} genre/instrument lanes`);
