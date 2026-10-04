/** Compare app-default instrumental MP3s with locally separated default references.
 * Run prepare-reference-samples.ts first. Missing recordings are reported, never substituted.
 * --genres=tango,flamenco,salsa,ambient --seconds=20 --phase=after --python=PATH
 */
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, openSync, closeSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { audioRenderFingerprint } from './lib/audioRenderFingerprint';
const args = process.argv.slice(2);
const option = (name: string) => args.find(a => a.startsWith(`${name}=`))?.slice(name.length + 1);
const genres = option('--genres')?.split(',');
const jobs = Number(option('--jobs') ?? 1);
if (!Number.isInteger(jobs) || jobs < 1 || jobs > 4) throw new Error('Jobs must be 1–4');
const seconds = Number(option('--seconds') ?? 20);
if (!Number.isFinite(seconds) || seconds <= 0) throw new Error('Invalid seconds');
const phase = option('--phase') ?? 'after';
if (!/^[a-z0-9-]+$/i.test(phase)) throw new Error('Invalid phase');
const python = option('--python') ?? (existsSync('.demucs-mps-venv/bin/python') ? resolve('.demucs-mps-venv/bin/python') : 'python3');
const folder = resolve('audit/reference-comparison', phase);
mkdirSync(folder, { recursive: true });
interface Reference { genre: string; name: string; output: string | null; sample: string | null; status: string }
const entries: Reference[] = JSON.parse(readFileSync('audit/default-reference-manifest.json', 'utf8')).entries;
if (genres?.some(g => !entries.some(e => e.genre === g))) throw new Error('Unknown genre');
const results: Array<{genre: string; name: string; status: string; comparison?: string; log?: string; reason?: string}> = [];
const summary = resolve(folder, genres ? `summary-${createHash('sha256').update(genres.slice().sort().join(',')).digest('hex').slice(0, 8)}.json` : 'summary.json');
const fingerprint = audioRenderFingerprint();
const save = () => writeFileSync(summary, JSON.stringify({seconds, phase, sourceFingerprint: fingerprint, results}, null, 2) + '\n');
async function run(command: string, commandArgs: string[], log: string) {
  const fd = openSync(log, 'a');
  try {
    return await new Promise<number | null>((res, rej) => {
      const child = spawn(command, commandArgs, { stdio: ['ignore', fd, fd] });
      child.on('error', rej); child.on('exit', res);
    });
  } finally { closeSync(fd); }
}
async function processReference(entry: Reference) {
  if (!entry.sample) {
    console.log(`MISSING ${entry.genre}: ${entry.name}`);
    results.push({genre: entry.genre, name: entry.name, status: 'missing'}); save(); return;
  }
  const deadline = Date.now() + 2 * 60 * 60 * 1000;
  while (args.includes('--wait-for-references') && entry.output && !existsSync(entry.output) && Date.now() < deadline) {
    const latest: Reference[] = JSON.parse(readFileSync('audit/default-reference-manifest.json', 'utf8')).entries;
    if (latest.find(e => e.genre === entry.genre)?.status === 'failed') break;
    await new Promise(res => setTimeout(res, 10000));
  }
  if (!entry.output || !existsSync(entry.output)) {
    console.log(`UNPREPARED ${entry.genre}: ${entry.name}`);
    results.push({genre: entry.genre, name: entry.name, status: 'unprepared'}); save(); return;
  }
  const mp3 = resolve(folder, `${entry.genre}.mp3`), report = resolve(folder, `${entry.genre}-render.json`);
  const comparison = resolve(folder, `${entry.genre}-comparison.json`), log = resolve(folder, `${entry.genre}.log`);
  console.log(`COMPARE ${entry.genre}: ${entry.name}`);
  try {
    const prior = existsSync(report) ? JSON.parse(readFileSync(report, 'utf8')) : null;
    const reusable = args.includes('--resume') && existsSync(mp3) && prior?.audioFingerprint === fingerprint && prior.start === 0 && prior.end === seconds && prior.instrumental && !prior.audioSourcesChangedDuringRender;
    if (!reusable && await run(process.execPath, ['--import', 'tsx', 'scripts/render-song.ts', entry.genre, mp3, String(seconds), '--instrumental', '--bounded', `--report=${report}`], log) !== 0) throw new Error('Rendering failed');
    if (await run(python, ['scripts/compare-reference-audio.py', '--reference', entry.output, '--generated', mp3, '--seconds', String(seconds), '--output', comparison], log) !== 0) throw new Error('Comparison failed');
    results.push({genre: entry.genre, name: entry.name, status: 'needs-musical-review', comparison, log});
  } catch (error) {
    results.push({genre: entry.genre, name: entry.name, status: 'failed', reason: String(error), log});
    console.error(`FAILED ${entry.genre}: ${error}`);
  }
  save();
}
const queue = entries.filter(e => !genres || genres.includes(e.genre));
await Promise.all(Array.from({length: jobs}, async () => { let entry; while ((entry = queue.shift())) await processReference(entry); }));
save();
console.log(JSON.stringify(Object.fromEntries([...new Set(results.map(r => r.status))].map(s => [s, results.filter(r => r.status === s).length]))));
if (results.some(r => r.status === 'failed' || r.status === 'unprepared')) process.exitCode = 1;
