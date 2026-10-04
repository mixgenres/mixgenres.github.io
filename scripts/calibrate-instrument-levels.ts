/** Fit static source gain trims from isolated probes, preserving within-instrument dynamics.
 * Run audit-instrument-render.ts --all --details first. Preview by default; --apply edits metadata.
 * Electronic patches and voices require their own calibration and are deliberately excluded.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { INSTRUMENTS_BY_ID } from '../src/data/instruments';
interface Probe { name: string; attack: { rmsDbfs: number | null; samplePeak: number } }
interface Row { instrumentId: string; probes: Probe[] }
const report: { rows: Row[] } = JSON.parse(readFileSync('audit/all-samples/instrument-gain-before.json', 'utf8'));
function files(folder: string): string[] {
  return readdirSync(folder, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(join(folder, entry.name)) : [join(folder, entry.name)]);
}
const paths = files('src/data/instruments/catalog');
const excluded = new Set(['synth', 'synth-bass', 'sampler', 'turntable', 'voice', 'choir']);
const baseline: Record<string, number> = JSON.parse(readFileSync('audit/all-samples/instrument-gain-baseline.json', 'utf8'));
const proposals = [];
for (const row of report.rows) {
  const def = INSTRUMENTS_BY_ID[row.instrumentId];
  if (excluded.has(def.id) || !def.makeupGain || baseline[def.id] === undefined) continue;
  const kit = !!def.kitComponents?.length;
  const probes = row.probes.filter(probe => kit || ['middle-soft', 'low-strong'].includes(probe.name));
  const levels = probes.filter(p => p.attack.rmsDbfs !== null).map(p => p.attack.rmsDbfs! + (!kit && p.name === 'low-strong' ? 20 * Math.log10(.3 / .8) : 0));
  if (!levels.length) continue;
  // Use the louder normalized pitched probe: a deliberately quiet low-velocity
  // rattle must not over-amplify the strong strike. Kit component relationships stay intact.
  levels.sort((a, b) => a - b);
  const level = kit ? levels[Math.floor(levels.length / 2)] : Math.max(...levels);
  const target = kit ? -23 : -32;
  const peak = Math.max(...row.probes.map(p => p.attack.samplePeak));
  const correctionDb = Math.min(12, Math.max(-32, Math.min(target - level, 20 * Math.log10(.8 / Math.max(peak, 1e-12)))));
  if (Math.abs(correctionDb) < 2) continue;
  const oldGain = baseline[def.id], newGain = Number((oldGain * 10 ** (correctionDb / 20)).toFixed(4));
  const path = paths.find(path => new RegExp(`id:\\s*['"]${def.id}['"]`).test(readFileSync(path, 'utf8')));
  if (!path) throw new Error(`No metadata file for ${def.id}`);
  proposals.push({ instrumentId: def.id, oldGain, newGain, correctionDb, normalizedProbeRmsDbfs: level, targetRmsDbfs: target, path });
}
if (process.argv.includes('--apply')) for (const proposal of proposals) {
    const { path, newGain } = proposal;
    const text = readFileSync(path, 'utf8');
    if (!/makeupGain:\s*[\d.]+/.test(text)) throw new Error(`No gain field in ${path}`);
    writeFileSync(path, text.replace(/makeupGain:\s*[\d.]+/, `makeupGain: ${newGain}`));
}
writeFileSync('audit/all-samples/instrument-level-calibration.json', JSON.stringify({ method: 'Static gain only; 0.3 soft / 0.8 strong normalized probes, kit median, peak guard, +12/-32 dB bounds. Not an automatic song leveller.', proposals }, null, 2) + '\n');
console.log(JSON.stringify({ instrumentsAdjusted: proposals.length, applied: process.argv.includes('--apply') }));
