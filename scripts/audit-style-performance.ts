import { ALL_STYLES } from '../src/engine/style';
import { resolveStyle } from '../src/engine/style';
import { makeSheet, getResolvedSectionStyle } from '../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';
import { styleTechniqueExpectation } from '../src/engine/style/performance-expectations';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';
import { GESTURE_NAMES } from '../src/engine/band/gestures.ts';

let schemaFailures = 0;
let runtimeFailures = 0;
let missingTechniqueUse = 0;
let emptyPatterns = 0;
const emptyPatternStyleIds: string[] = [];

for (const styleDef of ALL_STYLES) {
  try {
    const style = resolveStyle({ genreId: styleDef.primaryGenre, styleId: styleDef.id });
    if (!style.rhythm?.meter || !style.harmony?.model || !style.melody?.scaleMode) schemaFailures++;
    if (!style.patterns?.allowed?.length) {
      emptyPatterns++;
      emptyPatternStyleIds.push(style.id);
    }

    const sheet = makeSheet({ genreId: style.primaryGenre, styleId: style.id });
    const perf = compileWholeSong(sheet);
    const styleByRegion = new Map(sheet.regions.map(r => [r.id, getResolvedSectionStyle(sheet, r)]));

    for (const track of sheet.tracks) {
      const notes = perf.notes.filter(n => n.trackId === track.id);
      if (!notes.length) continue;
      if (!track.instrumentId) continue;
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

console.log(JSON.stringify({ styles: ALL_STYLES.length, schemaFailures, emptyPatterns, emptyPatternStyleIds, runtimeFailures, techniqueUseGaps: missingTechniqueUse }, null, 2));
process.exitCode = schemaFailures || emptyPatterns || runtimeFailures || missingTechniqueUse ? 1 : 0;
