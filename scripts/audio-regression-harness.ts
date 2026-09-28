import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { makeSheet } from '../src/engine/generators/arrange';
import { compileWholeSong } from '../src/engine/compiler/wholeSongCompiler';
import { renderPerformanceToMp3 } from '../src/engine/audio/offlineRender';

const cases = [
  ['tango', 'tango'],
  ['bachata', 'bachata'],
  ['flamenco', 'flamenco'],
] as const;

async function main() {
  const outDir = '/tmp/mixgenres-audio-regression';
  mkdirSync(outDir, { recursive: true });
  const results: any[] = [];
  for (const [genre, file] of cases) {
    const sheet = makeSheet(genre);
    // Default starter songs intentionally begin as five-piece arrangements.
    // This is a starter UX constraint, not an engine-wide instrument limit.
    if (sheet.tracks.length > 5) throw new Error(`${genre}: default starter has more than five tracks`);
    let perf = compileWholeSong(sheet);
    const excerptSeconds = Math.min(4, perf.duration);
    perf = { ...perf, notes: perf.notes.filter(n => n.time < excerptSeconds), duration: excerptSeconds };
    const blob = await renderPerformanceToMp3(perf, { trackInstruments: new Map(sheet.tracks.map(t => [t.id, t.instrumentId])), worldId: sheet.worldId, styleId: sheet.styleId });
    const target = `${outDir}/${file}.mp3`;
    writeFileSync(target, Buffer.from(await blob.arrayBuffer()));
    const probe = execFileSync('ffprobe', ['-v','error','-show_entries','stream=codec_name,sample_rate,channels,duration','-of','json',target], { encoding: 'utf8' });
    const parsed = JSON.parse(probe);
    const stream = parsed.streams?.[0];
    if (!stream || stream.codec_name !== 'mp3' || Number(stream.channels) !== 2 || Number(stream.sample_rate) !== 44100 || Number(stream.duration) <= 0) {
      throw new Error(`${genre}: invalid encoded MP3 metadata`);
    }
    const bytes = readFileSync(target).length;
    results.push({ genre, styleId: sheet.styleId, tracks: sheet.tracks.length, notes: perf.notes.length, duration: perf.duration, bytes, stream });
  }
  const report = { status: 'PASS', cases: results };
  writeFileSync('audit/audio-regression.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}

main().catch(err => { console.error(err); process.exit(1); });
