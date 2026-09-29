// Renders one instrument lane in isolation through the exact offline engine used
// by the application. Usage: npx tsx scripts/render-instrument.ts <instrumentId> [genre] [out.mp3]
import { writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { GENRE_NAMES } from '../src/data/genres';
import { makeSheet } from '../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';
import { renderPerformanceToMp3 } from '../src/engine/playback/mp3Export.ts';
import { INSTRUMENTS_BY_ID } from '../src/data/instruments';
import { spawnSync } from 'node:child_process';

const instrumentId = process.argv[2] || 'trumpet';
const requestedGenre = process.argv[3];
const outPath = process.argv[4] || `/tmp/mixgenres-${instrumentId}.mp3`;

if (!INSTRUMENTS_BY_ID[instrumentId]) throw new Error(`Unknown instrument: ${instrumentId}`);

function findGenre(): string {
  if (requestedGenre) return requestedGenre;
  for (const genre of Object.keys(GENRE_NAMES)) {
    const sheet = makeSheet(genre);
    if (sheet.tracks.some(t => t.instrumentId === instrumentId)) return genre;
  }
  throw new Error(`No default genre arrangement contains instrument ${instrumentId}`);
}

async function main() {
  const genre = findGenre();
  // Hard gate: emit the complete resolved instrument/runtime schema before any
  // audio render. This makes metadata narrowing or path substitution visible.
  const schema = spawnSync(process.execPath, ['--import', 'tsx', 'scripts/pre-render-schema.ts', instrumentId, genre], { encoding: 'utf8' });
  if (schema.status !== 0) throw new Error(`Pre-render schema failed: ${schema.stderr || schema.stdout}`);
  process.stdout.write(schema.stdout);
  const sheet = makeSheet(genre);
  const sourceTrack = sheet.tracks.find(t => t.instrumentId === instrumentId);
  if (!sourceTrack) throw new Error(`${genre}: no track for ${instrumentId}`);

  let performance = compileWholeSong(sheet);
  performance = {
    ...performance,
    notes: performance.notes.filter(n => n.trackId === sourceTrack.id),
    ccs: performance.ccs.filter(c => c.trackId === sourceTrack.id),
    duration: Math.min(8, performance.duration),
  };
  performance.notes = performance.notes.filter(n => n.time < performance.duration);

  const blob = await renderPerformanceToMp3(performance, {
    selectedTrackIds: [sourceTrack.id],
    trackInstruments: new Map([[sourceTrack.id, instrumentId]]),
    worldId: sheet.worldId,
    styleId: sheet.styleId,
    bypassWebAudioMaster: true,
  });
  const bytes = Buffer.from(await blob.arrayBuffer());
  writeFileSync(outPath, bytes);

  const probe = JSON.parse(execFileSync('ffprobe', [
    '-v', 'error', '-show_entries', 'stream=codec_name,sample_rate,channels,duration',
    '-of', 'json', outPath,
  ], { encoding: 'utf8' }));
  const stream = probe.streams?.[0];
  const report = {
    instrumentId,
    genre,
    trackId: sourceTrack.id,
    notes: performance.notes.length,
    duration: performance.duration,
    bytes: bytes.length,
    stream,
    evidenceLevel: 'unspecified',
  };
  console.log(JSON.stringify(report, null, 2));
}

main().catch(error => { console.error(error); process.exit(1); });
