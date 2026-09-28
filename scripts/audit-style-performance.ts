import { ALL_STYLES } from '../src/data/styles';
import { resolveStyle } from '../src/data/styles';
import { makeSheet, getResolvedSectionStyle } from '../src/engine/generators/arrange';
import { compileWholeSong } from '../src/engine/compiler/wholeSongCompiler';
import { styleTechniqueExpectation } from '../src/data/performance/stylePerformanceSchema';
import { getInstrumentPerformanceProfile } from '../src/data/performance/instrumentPerformanceProfiles';
import { GESTURE_NAMES } from '../src/engine/compiler/gestureCodes';

let schemaFailures = 0;
let runtimeFailures = 0;
let missingTechniqueUse = 0;
let emptyPatterns = 0;

for (const styleDef of ALL_STYLES) {
  try {
    const style = resolveStyle({ genreId: styleDef.primaryGenre, styleId: styleDef.id });
    if (!style.rhythm?.meter || !style.harmony?.model || !style.melody?.scaleMode) schemaFailures++;
    if (!style.patterns?.allowed?.length) emptyPatterns++;

    const sheet = makeSheet({ genreId: style.primaryGenre, styleId: style.id });
    const perf = compileWholeSong(sheet);
    const styleByRegion = new Map(sheet.regions.map(r => [r.id, getResolvedSectionStyle(sheet, r)]));

    for (const track of sheet.tracks) {
      const notes = perf.notes.filter(n => n.trackId === track.id);
      if (!notes.length) continue;
      const profile = getInstrumentPerformanceProfile(track.instrumentId);
      const regionStyle = styleByRegion.get(sheet.regions[0]?.id) ?? style;
      const expectation = styleTechniqueExpectation(regionStyle, profile, String(track.role ?? 'comp'));
      const used = new Set(notes.map(n => GESTURE_NAMES[n.gestureCode]).filter(Boolean));
      const observable = expectation.required.filter(x => used.has(x));
      if (expectation.required.length && !observable.length && notes.length >= 6) missingTechniqueUse++;
    }
  } catch (e) {
    schemaFailures++;
    console.error(`FAIL ${styleDef.id}: ${String(e)}`);
  }
}

console.log(`styles=${ALL_STYLES.length} schemaFailures=${schemaFailures} emptyPatterns=${emptyPatterns} runtimeFailures=${runtimeFailures} techniqueUseGaps=${missingTechniqueUse}`);
process.exitCode = schemaFailures || emptyPatterns || runtimeFailures || missingTechniqueUse ? 1 : 0;
