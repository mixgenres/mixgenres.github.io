import { spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { reportMetadata } from './lib/auditReport';
import { buildSystemView, type CheckResult } from './lib/systemView';

const full = process.argv.includes('--full'), audio = full || process.argv.includes('--audio'), view = process.argv.includes('--report-only');
const steps: Array<{ id: string; args: string[]; report?: string; enabled: boolean }> = [
  { id: 'types', args: ['node_modules/typescript/bin/tsc', '--noEmit'], enabled: true },
  { id: 'data-boundary', args: ['scripts/audit-data-boundary.mjs'], enabled: true },
  ...[
    ['integrity', 'engine-integrity-audit.ts', 'engine-integrity-audit.json'],
    ['style-provenance', 'audit-all-styles.ts', 'all-styles-audit.json'],
    ['performance', 'audit-style-performance.ts', 'style-performance-audit.json'],
    ['instrument-paths', 'audit-instrument-paths.ts', 'instrument-path-audit.json'],
    ['solos', 'solo-performance.test.ts'], ['sound-metadata', 'sound-metadata.test.ts'],
    ['mix-regression', 'mix-regression.test.ts'], ['mix-settings', 'audit-mix.ts', 'mix-audit.json'],
  ].map(([id, file, report]) => ({ id, args: ['--import', 'tsx', ...(file.endsWith('mix-regression.test.ts') ? ['--test'] : []), `scripts/${file}`], report, enabled: true })),
  { id: 'instrument-pcm', args: ['--import', 'tsx', 'scripts/audit-instrument-render.ts'], report: 'instrument-render-audit.json', enabled: audio },
  { id: 'audio-pcm', args: ['--import', 'tsx', 'scripts/audio-regression-harness.ts', ...(full ? ['--all-styles'] : [])], report: 'audio-regression.json', enabled: audio },
];
const results: CheckResult[] = [];
mkdirSync('audit', { recursive: true });
if (!view) for (const step of steps) {
  if (!step.enabled) { results.push({ id: step.id, status: 'NOT_RUN', seconds: 0, command: '', sourceFingerprint: reportMetadata().sourceFingerprint, output: 'Run npm run check:audio or check:full for PCM coverage.', report: step.report }); continue; }
  console.log(`Checking ${step.id}…`);
  const source = reportMetadata().sourceFingerprint;
  const started = performance.now();
  const result = spawnSync(process.execPath, step.args, { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024, timeout: 30 * 60 * 1000 });
  const output = [result.stdout, result.stderr, result.error?.message].filter(Boolean).join('\n');
  const row: CheckResult = { id: step.id, status: result.status === 0 && !result.error ? 'PASS' : 'FAIL', seconds: (performance.now() - started) / 1000, sourceFingerprint: source, command: `node ${step.args.join(' ')}`, output, report: step.report };
  results.push(row); console.log(`${row.status} ${row.id} (${row.seconds.toFixed(1)}s)${row.status === 'FAIL' ? '\n' + output : ''}`);
  buildSystemView(reportMetadata(), results);
}
// Refreshing a view must preserve the last run's gate outcomes.
if (view) {
  const { readFileSync } = await import('node:fs');
  try { results.push(...JSON.parse(readFileSync('audit/system-report.json', 'utf8')).checks); }
  catch { throw new Error('No previous system run. Run npm run check first.'); }
}
const report = buildSystemView(reportMetadata(), results);
console.log(`${report.status}: audit/system-report.html and audit/system-report.md`);
if (results.some(r => r.status === 'FAIL') || report.findings.some(f => f.severity === 'error')) process.exitCode = 1;
