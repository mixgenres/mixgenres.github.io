/** Screen every matched style against all measured windows of its local album reference.
 * This is a timbre/mix diagnostic, not a transcription or listening verdict.
 * Run index-all-reference-samples.ts and survey-all-reference-audio.py first.
 */
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, openSync, closeSync } from 'node:fs';
import { resolve } from 'node:path';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { audioRenderFingerprint } from './lib/audioRenderFingerprint';
const args = process.argv.slice(2);
const option = (flag: string) => args.find(arg => arg.startsWith(`${flag}=`))?.slice(flag.length + 1);
const jobs = Number(option('--jobs') ?? 2), seconds = Number(option('--seconds') ?? 8);
if (!Number.isInteger(jobs) || jobs < 1 || jobs > 4 || !Number.isFinite(seconds) || seconds <= 0) throw new Error('Invalid jobs or seconds');
const phase = option('--phase') ?? 'screened';
if (!/^[a-z0-9-]+$/.test(phase)) throw new Error('Invalid phase');
interface Match { genre: string; styleId: string; name: string }
interface Reference { file: string; matches: Match[] }
const inventory: { entries: Reference[]; missing: Match[] } = JSON.parse(readFileSync('audit/all-samples/inventory.json', 'utf8'));
const queue = inventory.entries.flatMap(reference => reference.matches.map(match => ({ ...match, file: reference.file })));
const folder = resolve('audit/all-samples', phase); mkdirSync(folder, { recursive: true });
const python = resolve('.demucs-mps-venv/bin/python');
const patterns = JSON.parse(readFileSync('audit/all-samples/patterns.json', 'utf8')) as { rows: Array<{ styleId: string; tracks: Array<{ instrumentId: string }> }> };
const results: Array<Record<string, unknown>> = [];
const save = () => writeFileSync(resolve(folder, 'summary.json'), JSON.stringify({ phase, seconds, results, missing: inventory.missing }, null, 2) + '\n');
async function run(command: string, commandArgs: string[], log: string) {
  const fd = openSync(log, 'a');
  try { return await new Promise<number | null>((res, rej) => {
    const child = spawn(command, commandArgs, { stdio: ['ignore', fd, fd] }); child.on('error', rej); child.on('exit', res);
  }); } finally { closeSync(fd); }
}
await Promise.all(Array.from({ length: jobs }, async () => {
  let entry;
  while ((entry = queue.shift())) {
    const { styleId, genre, name, file } = entry;
    const tracks = patterns.rows.find(row => row.styleId === styleId)?.tracks;
    if (tracks?.length && tracks.every(track => INSTRUMENTS_BY_ID[track.instrumentId]?.family === 'voice')) {
      results.push({ genre, styleId, name, file, status: 'voice-only', reason: 'Authentically unaccompanied; no instrumental mix to compare.' }); save(); continue;
    }
    const mp3 = resolve(folder, `${styleId}.mp3`), report = resolve(folder, `${styleId}-render.json`);
    const comparison = resolve(folder, `${styleId}-comparison.json`), log = resolve(folder, `${styleId}.log`);
    try {
      const prior = existsSync(report) ? JSON.parse(readFileSync(report, 'utf8')) : null;
      const reusable = args.includes('--resume') && existsSync(mp3) && prior?.audioFingerprint === audioRenderFingerprint()
        && !prior.audioSourcesChangedDuringRender && prior.windowSelection === 'ensemble' && prior.end - prior.start === seconds && prior.instrumental;
      if (!reusable && await run(process.execPath, ['--import', 'tsx', 'scripts/render-song.ts', genre, mp3, String(seconds),
        `--style=${styleId}`, '--instrumental', '--bounded', '--ensemble', `--report=${report}`], log) !== 0) throw new Error('Rendering failed');
      if (await run(python, ['scripts/compare-all-reference-windows.py', '--reference', file, '--generated', mp3,
        '--render-report', report, '--seconds', String(seconds), '--output', comparison], log) !== 0) throw new Error('Comparison failed');
      results.push({ genre, styleId, name, file, comparison, status: 'needs-musical-review' });
    } catch (error) { results.push({ genre, styleId, name, file, status: 'failed', reason: String(error), log }); }
    save();
    if (results.length % 10 === 0) console.log(`Screened ${results.length}/${inventory.entries.reduce((sum, e) => sum + e.matches.length, 0)}`);
  }
}));
save(); console.log(JSON.stringify({ styles: results.length, failed: results.filter(r => r.status === 'failed').length }));
if (results.some(r => r.status === 'failed')) process.exitCode = 1;
