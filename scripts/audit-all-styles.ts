import { writeFileSync, mkdirSync } from 'node:fs';
import { ALL_STYLES } from '../src/engine/style';
import { makeSheet } from '../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';

mkdirSync('audit',{recursive:true}); const rows: Array<Record<string, unknown>>=[]; const failures: Array<Record<string, unknown>>=[];
for(const style of ALL_STYLES){
  try{
    const genre=style.primaryGenre; const sheet=makeSheet({genreId:genre,styleId:style.id}); const perf=compileWholeSong(sheet);
    rows.push({genre,styleId:style.id,styleName:style.name,durationSec:Number(perf.duration.toFixed(2)),notes:perf.notes.length,tracks:sheet.tracks.map(t =>({instrumentId:t.instrumentId,role:t.role,volume:t.volume})),phraseBars:Number(style.melody?.phraseLengthsBars?.[0]??1)});
  }catch(e){failures.push({styleId:style.id,message:String(e)});}
}
writeFileSync('audit/all-styles-audit.json',JSON.stringify({generatedAt:new Date().toISOString(),styleCount:ALL_STYLES.length,rows,failures},null,2));
console.log(`audited ${rows.length}/${ALL_STYLES.length} styles; failures ${failures.length}`);
