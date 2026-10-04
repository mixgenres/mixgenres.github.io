import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, writeFileSync, openSync, closeSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { GENRE_WORLDS } from '../src/data/genres';
import { songCatalog } from '../src/data/songs/catalog';
import { getCanonicalStyle } from '../src/engine/style/registry';

const args = process.argv.slice(2);
const value = (flag: string) => args.find(arg => arg.startsWith(`${flag}=`))?.slice(flag.length + 1);
const genres = value('--genres')?.split(',');
const device = value('--device') ?? 'auto';
if (!['auto', 'mps', 'cpu'].includes(device)) throw new Error(`Unknown device: ${device}`);
if (genres?.some(id => !GENRE_WORLDS.some(world => world.id === id))) throw new Error('Unknown genre selection');
const root = resolve('.'), files = readdirSync(resolve(root, 'samples'));
const clean = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const priorities = ['tango', 'flamenco', 'salsa', 'ambient'];
const worlds = GENRE_WORLDS.filter(world => !genres || genres.includes(world.id)).sort((a, b) =>
  (priorities.indexOf(a.id) < 0 ? 99 : priorities.indexOf(a.id)) - (priorities.indexOf(b.id) < 0 ? 99 : priorities.indexOf(b.id)));
const manifest = worlds.map(world => {
  const style = getCanonicalStyle(world.id);
  const song = songCatalog.find(song => song.genreId === world.id && song.styleId === style.id)!;
  const candidates = files.filter(file => clean(file.replace(/\.[^.]+$/, '')) === clean(`${song.artist} - ${song.track}`));
  const sample = candidates.length === 1 ? resolve(root, 'samples', candidates[0]) : null;
  const output = sample ? resolve(root, 'voiced', basename(sample)) : null;
  return { genre: world.id, styleId: style.id, songId: song.id, name: song.name, artist: song.artist, track: song.track,
    sample, output, status: sample ? 'pending' : candidates.length > 1 ? 'ambiguous' : 'missing', candidates };
});
mkdirSync('audit/reference-separation', { recursive: true });
const report = resolve('audit/default-reference-manifest.json');
const save = () => writeFileSync(report, JSON.stringify({ generatedAt: new Date().toISOString(), entries: manifest }, null, 2) + '\n');
save();
for (const entry of manifest) {
  if (!entry.sample) { console.log(`${entry.status.toUpperCase()} ${entry.genre}: ${entry.name}`); continue; }
  if (!args.includes('--separate')) {
    entry.status = existsSync(entry.output!) ? 'available' : 'pending';
    console.log(`${entry.status.toUpperCase()} ${entry.genre}: ${entry.name}`); continue;
  }
  const log = resolve('audit/reference-separation', `${entry.genre}.log`), fd = openSync(log, 'w');
  console.log(`PREPARE ${entry.genre}: ${entry.name}`);
  try {
    const code = await new Promise<number | null>((resolveCode, reject) => {
      const child = spawn('bash', [resolve(root, 'remove.sh'), entry.sample!, '--device', device], { stdio: ['ignore', fd, fd] });
      child.on('error', reject); child.on('exit', resolveCode);
    });
    entry.status = code === 0 && existsSync(entry.output!) ? 'available' : 'failed';
  } catch (error) { entry.status = 'failed'; console.error(String(error)); }
  finally { closeSync(fd); }
  console.log(`${entry.status.toUpperCase()} ${entry.genre}: ${entry.name} (${log})`);
  save();
}
save();
const counts = Object.fromEntries([...new Set(manifest.map(entry => entry.status))].map(status => [status, manifest.filter(entry => entry.status === status).length]));
console.log(JSON.stringify({ genres: manifest.length, ...counts, report }));
if (manifest.some(entry => entry.status === 'failed' || entry.status === 'ambiguous')) process.exitCode = 1;
