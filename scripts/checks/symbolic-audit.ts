// Fast T1 symbolic audit: every runtime style, deterministic invariants, pitch/playability/rhythm/form/harmony metrics.
import { ALL_STYLES } from '../../src/engine/style/registry.ts';
import { makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { analyzePerformance } from '../lib/auditMetrics.ts';
import { flag, writeReport } from '../lib/io.ts';

const start = Math.max(0, Number(flag('start') ?? process.env.AUDIT_START ?? 0));
const end = Math.min(ALL_STYLES.length, Math.max(start, Number(flag('end') ?? process.env.AUDIT_END ?? ALL_STYLES.length)));
const rows: Array<Record<string, unknown>> = []; const failures: string[] = [];
for (const style of ALL_STYLES.slice(start, end)) {
  try {
    const sheet = makeSheet({ genreId: style.primaryGenre, styleId: style.id });
    const perf = compileWholeSong(sheet, 0);
    const metrics = analyzePerformance(sheet, perf);
    const issues: string[] = [];
    if (!metrics.invariants.finite) issues.push('non-finite performance value');
    if (!metrics.invariants.monotonic) issues.push('note times are not monotonic');
    if (metrics.invariants.negativeDurations) issues.push(`${metrics.invariants.negativeDurations} negative durations`);
    if (metrics.invariants.boundaryErrors) issues.push(`${metrics.invariants.boundaryErrors} bar boundary errors`);
    if (metrics.playability.monophonicOverlapCount) issues.push(`${metrics.playability.monophonicOverlapCount} monophonic overlaps`);
    if (metrics.form.boundaryCount && metrics.form.boundariesWithActivity < metrics.form.boundaryCount) issues.push('inactive section boundary');
    rows.push({ styleId: style.id, genre: style.primaryGenre, metrics, issues });
    for (const issue of issues) failures.push(`${style.id}: ${issue}`);
  } catch (error) { failures.push(`${style.id}: ${error instanceof Error ? error.message : String(error)}`); }
}
const report = { schemaVersion: 2, status: failures.length ? 'FAIL' : 'PASS', shard: [start, end], styles: rows.length, totalStyles: ALL_STYLES.length, failures, rows };
const name = start === 0 && end === ALL_STYLES.length ? 'symbolic-audit.json' : `symbolic-audit-${start}-${end}.json`;
writeReport(name, report);
console.log(JSON.stringify({ status: report.status, styles: rows.length, failures: failures.length }, null, 2));
if (failures.length) process.exit(1);
