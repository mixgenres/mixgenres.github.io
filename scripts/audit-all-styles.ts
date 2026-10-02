import { writeFileSync, mkdirSync } from 'node:fs';
import { reportMetadata } from './lib/auditReport';
import { ALL_STYLES } from '../src/engine/style';
import { makeSheet } from '../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';
import { resolveStyle } from '../src/engine/style/resolve.ts';
import { StyleRuntime } from '../src/engine/style/runtime.ts';

mkdirSync('audit',{recursive:true}); const rows: Array<Record<string, unknown>>=[]; const failures: Array<Record<string, unknown>>=[];
let hardcodedDecisions = 0; let missingProvenance = 0; let defaultDecisions = 0;
for(const style of ALL_STYLES){
  try{
    const resolved = resolveStyle({ genreId: style.primaryGenre, styleId: style.id });
    const coverage = StyleRuntime.create(resolved).getCoverageReport();
    hardcodedDecisions += coverage.hardcodedDecisions;
    defaultDecisions += coverage.defaultDecisions;
    const expectedProvenance = [
      'form.sectionVocab','form.templates','form.preferredMeters',
      'harmony.model','harmony.modePolicy','harmony.progressionTemplates','harmony.chordVocabulary',
      'rhythm.meter','rhythm.tempoRange','rhythm.defaultBpm','rhythm.feel','rhythm.swingPercentage',
      'rhythm.anticipationOffsetSteps','rhythm.microtimingFeel','rhythm.humanizeJitterMs','melody.scaleMode',
      'arrangement.ensemble','sound.instrumentPalette','sound.masterProfile.pocket','sound.masterProfile.lift',
    ];
    const missing = expectedProvenance.filter(path => !style.sourceProvenance?.[path]);
    missingProvenance += missing.length;
    if (missing.length) failures.push({ styleId: style.id, message: `missing source provenance: ${missing.join(', ')}` });
    const genre=style.primaryGenre; const sheet=makeSheet({genreId:genre,styleId:style.id}); const perf=compileWholeSong(sheet);
    rows.push({genre,styleId:style.id,styleName:style.name,durationSec:Number(perf.duration.toFixed(2)),notes:perf.notes.length,tracks:sheet.tracks.map(t =>({instrumentId:t.instrumentId,role:t.role,volume:t.volume})),phraseBars:Number(style.melody?.phraseLengthsBars?.[0]??1),coverage});
  }catch(e){failures.push({styleId:style.id,message:String(e)});}
}
writeFileSync('audit/all-styles-audit.json',JSON.stringify({...reportMetadata(),status: failures.length || missingProvenance || hardcodedDecisions ? 'FAIL' : 'PASS',styleCount:ALL_STYLES.length,defaultDecisions,hardcodedDecisions,missingProvenance,rows,failures},null,2));
console.log(`audited ${rows.length}/${ALL_STYLES.length} styles; failures ${failures.length}; catalog defaults ${defaultDecisions}; hardcoded decisions ${hardcodedDecisions}; missing provenance ${missingProvenance}`);
// This is a coverage gate as well as a render smoke check: known hardcoded
// defaults remain visible as failures until they are replaced with authored
// style/genre values.
process.exitCode = failures.length || missingProvenance || hardcodedDecisions ? 1 : 0;
