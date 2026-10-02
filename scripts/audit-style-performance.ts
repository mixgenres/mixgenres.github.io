import { ALL_STYLES, resolveStyle } from '../src/engine/style';
import { makeSheet, getResolvedSectionStyle, getTrackRole } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { styleTechniqueExpectation } from '../src/engine/style/performance-expectations';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';
import { GESTURE_NAMES } from '../src/engine/band/gestures';
import { REFERENCE_EXPECTATIONS } from '../src/data/styles/performanceExpectations';
import { reportMetadata, writeReport, summarizeFindings, type Finding } from './lib/auditReport';

const findings: Finding[] = [], rows = [];
const add = (severity: Finding['severity'], code: string, scope: string, message: string) => findings.push({ severity, code, scope, message });
for (const styleDef of ALL_STYLES) {
  try {
    const style = resolveStyle({ genreId: styleDef.primaryGenre, styleId: styleDef.id });
    if (!style.rhythm?.meter || !style.harmony?.model || !style.melody?.scaleMode) add('error', 'missing-musical-schema', style.id, 'Meter, harmony model or scale missing');
    if (!style.patterns?.allowed?.length) add('error', 'missing-patterns', style.id, 'No allowed patterns');
    if (!REFERENCE_EXPECTATIONS[style.primaryGenre]) add('warning', 'generic-technique-reference', style.id, 'Technique expectations inherit the rock reference; this genre needs an authored reference');
    const sheet = makeSheet(style.primaryGenre, style.id), perf = compileWholeSong(sheet);
    const regions = sheet.regions.map(region => {
      const resolved = getResolvedSectionStyle(sheet, region);
      return { regionId: region.id, name: region.name, styleId: resolved.id,
        tracks: sheet.tracks.map(track => {
          const notes = perf.notes.filter(n => n.trackId === track.id && n.bar >= region.start && n.bar < region.end);
          const role = getTrackRole(sheet, track.id, region.id);
          const profile = getInstrumentPerformanceProfile(track.instrumentId!);
          const expectation = styleTechniqueExpectation(resolved, profile, role);
          const used = [...new Set(notes.map(n => GESTURE_NAMES[n.gestureCode]).filter(Boolean))];
          const invalidCodes = notes.filter(n => !GESTURE_NAMES[n.gestureCode]).length;
          const observed = expectation.required.filter(x => used.includes(x));
          const forbiddenUsed = expectation.forbidden.filter(x => used.includes(x));
          const scope = `${style.id}/${region.id}/${track.instrumentId}`;
          if (invalidCodes) add('error', 'invalid-gesture-code', scope, `${invalidCodes} unknown gesture codes`);
          if (notes.length >= 6 && expectation.required.length && !observed.length) add('error', 'missing-technique-use', scope, `Expected one of ${expectation.required.join(', ')}; observed ${used.join(', ')}`);
          if (forbiddenUsed.length) add('error', 'forbidden-technique', scope, forbiddenUsed.join(', '));
          return { trackId: track.id, instrumentId: track.instrumentId, role, notes: notes.length, used,
            expectedAnyOf: expectation.required, observed, forbiddenUsed, evidence: notes.length ? notes.length < 6 ? 'sparse' : 'observable' : 'resting' };
        }) };
    });
    rows.push({ styleId: style.id, genre: style.primaryGenre, regions });
  } catch (e) { add('error', 'runtime-exception', styleDef.id, String(e)); }
}
const counts = summarizeFindings(findings);
const report = { ...reportMetadata(), status: counts.errors ? 'FAIL' : 'PASS', coverage: { expectedStyles: ALL_STYLES.length, inspectedStyles: rows.length },
  methodology: 'Per-section assigned roles and resolved styles; available preferred gestures are alternatives, not a requirement to use every articulation.', counts, findings, rows };
writeReport('style-performance-audit', report);
console.log(JSON.stringify({ status: report.status, coverage: report.coverage, ...counts }));
if (counts.errors) process.exitCode = 1;
