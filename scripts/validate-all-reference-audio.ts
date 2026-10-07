/** Screen every matched style against all measured windows of its local album reference.
 * This is a timbre/mix diagnostic, not a transcription or listening verdict.
 * Run index-all-reference-samples.ts and survey-all-reference-audio.py first.
 */
import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, writeFileSync, openSync, closeSync } from 'node:fs';
import { basename, extname } from 'node:path';
import { readObject } from './lib/jsonData';
import { readReferenceInventory, readReferencePatterns } from './lib/referenceData';
import { resolve } from 'node:path';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { audioRenderFingerprint } from './lib/audioRenderFingerprint';
const args = process.argv.slice(2);
const option = (flag: string) => args.find(arg => arg.startsWith(`${flag}=`))?.slice(flag.length + 1);
const genres = option('--genres')?.split(',');
const selectedStyles = option('--styles')?.split(',');
const jobs = Number(option('--jobs') ?? 2), seconds = Number(option('--seconds') ?? 8);
if (!Number.isInteger(jobs) || jobs < 1 || jobs > 4 || !Number.isFinite(seconds) || seconds <= 0) throw new Error('Invalid jobs or seconds');
const phase = option('--phase') ?? 'screened';
if (!/^[a-z0-9-]+$/.test(phase)) throw new Error('Invalid phase');
const inventory = readReferenceInventory();
if (genres?.some(genre => !inventory.entries.some(reference => reference.matches.some(match => match.genre === genre)))) throw new Error('Unknown genre');
if (selectedStyles?.some(style => !inventory.entries.some(reference => reference.matches.some(match => match.styleId === style)))) throw new Error('Unknown style');
const grouped = new Map<string, { genre: string; styleId: string; tracks?: { instrumentId: string }[]; references: Array<{ name: string; file: string }> }>();
for (const reference of inventory.entries) for (const match of reference.matches) {
  if ((genres && !genres.includes(match.genre)) || (selectedStyles && !selectedStyles.includes(match.styleId))) continue;
  const key = `${match.genre}/${match.styleId}`;
  const group = grouped.get(key) ?? { genre: match.genre, styleId: match.styleId, references: [] };
  group.references.push({ name: basename(reference.file).slice(0, -extname(reference.file).length), file: reference.file });
  grouped.set(key, group);
}
const queue = [...grouped.values()];
const folder = resolve('audit/all-samples', phase); mkdirSync(folder, { recursive: true });
const python = resolve('.demucs-mps-venv/bin/python');
const patterns = readReferencePatterns();
const results: Array<Record<string, unknown>> = [];
let screenedReferences = 0;
const save = () => writeFileSync(resolve(folder, 'summary.json'), JSON.stringify({ phase, seconds, genres, results, missing: inventory.missing.filter(match => !genres || genres.includes(match.genre)) }, null, 2) + '\n');
async function run(command: string, commandArgs: string[], log: string) {
  const fd = openSync(log, 'a');
  try { return await new Promise<number | null>((res, rej) => {
    const child = spawn(command, commandArgs, { stdio: ['ignore', fd, fd] }); child.on('error', rej); child.on('exit', res);
  }); } finally { closeSync(fd); }
}
await Promise.all(Array.from({ length: jobs }, async () => {
  let entry;
  while ((entry = queue.shift())) {
    const { styleId, genre, references } = entry;
    const tracks = patterns.find(row => row.styleId === styleId)?.tracks;
    if (tracks?.length && tracks.every(track => INSTRUMENTS_BY_ID[track.instrumentId]?.family === 'voice')) {
      for (const reference of references) results.push({ genre, styleId, name: reference.name, file: reference.file, status: 'voice-only', reason: 'Authentically unaccompanied; no instrumental mix to compare.' });
      screenedReferences += references.length; save(); continue;
    }
    const mp3 = resolve(folder, `${styleId}.mp3`), report = resolve(folder, `${styleId}-render.json`);
    const log = resolve(folder, `${styleId}.log`);
    try {
      const prior = existsSync(report) ? readObject(report) : null;
      const reusable = args.includes('--resume') && existsSync(mp3) && prior?.audioFingerprint === audioRenderFingerprint()
        && !prior.audioSourcesChangedDuringRender && prior.windowSelection === 'ensemble'
        && typeof prior.end === 'number' && typeof prior.start === 'number' && prior.end - prior.start === seconds && prior.instrumental === true;
      if (!reusable && await run(process.execPath, ['--import', 'tsx', 'scripts/render-song.ts', genre, mp3, String(seconds),
        `--style=${styleId}`, '--instrumental', '--bounded', '--ensemble', `--report=${report}`], log) !== 0) throw new Error('Rendering failed');
      for (const reference of references) {
        const referenceKey = createHash('sha1').update(reference.file).digest('hex').slice(0, 10);
        const comparison = resolve(folder, `${styleId}-${referenceKey}-comparison.json`);
        try {
          if (await run(python, ['scripts/compare-all-reference-windows.py', '--reference', reference.file, '--generated', mp3,
            '--render-report', report, '--seconds', String(seconds), '--output', comparison], log) !== 0) throw new Error('Comparison failed');
          results.push({ genre, styleId, name: reference.name, file: reference.file, comparison, status: 'needs-musical-review' });
        } catch (error) { results.push({ genre, styleId, name: reference.name, file: reference.file, status: 'failed', reason: String(error), log }); }
        screenedReferences += 1; save();
        if (screenedReferences % 10 === 0) console.log(`Screened ${screenedReferences}/${inventory.entries.reduce((sum, e) => sum + e.matches.length, 0)} references`);
      }
    } catch (error) {
      for (const reference of references) results.push({ genre, styleId, name: reference.name, file: reference.file, status: 'failed', reason: String(error), log });
      screenedReferences += references.length; save();
    }
  }
}));
save(); console.log(JSON.stringify({ styles: grouped.size, references: results.length, failed: results.filter(r => r.status === 'failed').length }));
if (results.some(r => r.status === 'failed')) process.exitCode = 1;
