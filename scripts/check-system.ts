import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { reportMetadata, writeReport } from './lib/auditReport';

type CheckResult = { id: string; status: 'PASS' | 'FAIL'; seconds: number; output?: string; reused?: boolean };
const audio = process.argv.includes('--audio') || process.argv.includes('--full');
const metadata = reportMetadata();
if (process.argv.includes('--report-only')) {
  if (!existsSync('audit/system-report.json')) {
    console.log('No saved audit report. Run npm run check to create one.');
  } else {
    const report = JSON.parse(readFileSync('audit/system-report.json', 'utf8'));
    const stale = report.sourceFingerprint !== metadata.sourceFingerprint;
    console.log(`${stale ? 'STALE' : report.status} ${report.scope}: ${report.checks.length} checks; ${report.generatedAt}`);
    for (const check of report.checks.filter((x: CheckResult) => x.status === 'FAIL')) console.log(`FAIL ${check.id}\n${check.output}`);
    if (stale || report.status === 'FAIL') process.exitCode = 1;
  }
} else {
  const script = (file: string, args: string[] = []) => ['--import', 'tsx', `scripts/${file}`, ...args];
  const fastSteps = [
    { id: 'data-boundary', args: ['scripts/audit-data-boundary.mjs'] },
    { id: 'catalog', args: script('audit-catalog.ts') },
    { id: 'example-generation', args: script('audit-examples.ts', ['--quick']) },
    { id: 'sound-resolution', args: script('sound-metadata.test.ts') },
    { id: 'solo-behavior', args: script('solo-performance.test.ts') },
    { id: 'regressions', args: ['--import', 'tsx', '--test', 'scripts/technique-mechanics.test.ts', 'scripts/musical-fidelity.test.ts', 'scripts/musician-score.test.ts', 'scripts/engine-pipeline.test.ts', 'scripts/song-accuracy.test.ts', 'scripts/mix-regression.test.ts', 'scripts/dynamic-mix.test.ts', 'scripts/playback-regression.test.ts', 'scripts/song-player-regression.test.ts', 'scripts/audio-cache-regression.test.ts', 'scripts/instrument-catalog-migration.test.ts', 'scripts/catalog-metadata.test.ts'] },
  ];
  const audioSteps = [
      { id: 'render-regressions', args: ['--import', 'tsx', '--test', 'scripts/reference-calibration.test.ts', 'scripts/instrument-balance.test.ts', 'scripts/technique-audio.test.ts', 'scripts/render-regression.test.ts', 'scripts/song-sound-accuracy.test.ts'] },
      { id: 'instrument-renderers', args: script('audit-instrument-render.ts') },
      { id: 'ensemble-export', args: script('audio-regression-harness.ts') },
  ];
  const checks: CheckResult[] = [];
  if (audio) {
    try {
      const previous = JSON.parse(readFileSync('audit/system-report.json', 'utf8'));
      if (previous.status === 'PASS' && previous.sourceFingerprint === metadata.sourceFingerprint &&
        fastSteps.every(step => previous.checks.some((check: CheckResult) => check.id === step.id && check.status === 'PASS'))) {
        checks.push(...previous.checks.filter((check: CheckResult) => fastSteps.some(step => step.id === check.id)).map((check: CheckResult) => ({ ...check, reused: true })));
        console.log('PASS structural + behavior (unchanged sources; reused)');
      }
    } catch { /* No current baseline: run fast gates first. */ }
  }
  const steps = [...(checks.length ? [] : fastSteps), ...(audio ? audioSteps : [])];
  for (const step of steps) {
    const started = performance.now();
    const result = spawnSync(process.execPath, step.args, { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024, timeout: audio || step.id === 'example-generation' ? 10 * 60_000 : 60_000 });
    const status = result.status === 0 && !result.error ? 'PASS' : 'FAIL';
    const row: CheckResult = { id: step.id, status, seconds: Number(((performance.now() - started) / 1000).toFixed(1)) };
    if (status === 'FAIL') row.output = [result.stdout, result.stderr, result.error?.message].filter(Boolean).join('\n').trim();
    checks.push(row);
    console.log(`${status} ${row.id} (${row.seconds}s)`);
    if (row.output) console.log(row.output);
    // Audio probes are useful only after structural and behavioral gates pass.
    if (status === 'FAIL') break;
  }
  const changed = metadata.sourceFingerprint !== reportMetadata().sourceFingerprint;
  const report = { ...metadata, status: checks.some(x => x.status === 'FAIL') || changed ? 'FAIL' : 'PASS', scope: audio ? 'structural + targeted PCM' : 'structural + behavior', checks,
    ...(changed ? { error: 'Sources changed during the run; rerun checks.' } : {}) };
  writeReport('system-report', report);
  console.log(`${report.status} ${report.scope}; audit/system-report.json`);
  if (report.status === 'FAIL') process.exitCode = 1;
}
