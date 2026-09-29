import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { makeSheet } from '../src/engine/sheet/sheet.ts';
import { GENRE_NAMES } from '../src/data/genres';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';
import { renderPerformanceToMp3 } from '../src/engine/playback/mp3Export.ts';
import { getInstrumentModule } from '../src/engine/playback/instrumentRegistry.ts';
import { INSTRUMENTS_BY_ID } from '../src/data/instruments';

const allCases = Object.keys(GENRE_NAMES).map(genre => [genre, genre] as const);
const start = Number(process.env.AUDIO_START ?? 0);
const end = Number(process.env.AUDIO_END ?? allCases.length);
const cases = allCases.slice(start, end);
const CONCURRENCY = 1;

async function renderCase(genre: string, file: string) {
  const outDir = '/tmp/mixgenres-audio-regression';
  const sheet = makeSheet(genre);
  if (sheet.tracks.length > 5) throw new Error(`${genre}: default starter has more than five tracks`);
  let perf = compileWholeSong(sheet);
  mkdirSync('audit/pre-render-schemas/genres', { recursive: true });
  writeFileSync(`audit/pre-render-schemas/genres/${genre}.json`, JSON.stringify({
    schemaVersion: 2, preRender: true, genre, styleId: sheet.styleId, worldId: sheet.worldId,
    tracks: sheet.tracks.map(t => {
      const instrumentId = t.instrumentId ?? t.id;
      const def = INSTRUMENTS_BY_ID[instrumentId];
      return { id: t.id, role: t.role, instrumentId, moduleId: getInstrumentModule(instrumentId).id,
        family: def?.family, articulations: def?.techniques?.articulations ?? [],
        kitComponents: def?.kitComponents?.map(c => ({ id: c.id, midi: c.midi })) ?? [] };
    }),
    compiledNoteCount: perf.notes.length,
  }, null, 2));
  const excerptSeconds = Math.min(1.5, perf.duration);
  perf = { ...perf, notes: perf.notes.filter(n => n.time < excerptSeconds), duration: excerptSeconds };
  const blob = await renderPerformanceToMp3(perf, {
    trackInstruments: new Map(sheet.tracks.flatMap(t => t.instrumentId ? [[t.id, t.instrumentId] as const] : [])),
    worldId: sheet.worldId, styleId: sheet.styleId, bypassWebAudioMaster: true,
  });
  const target = `${outDir}/${file}.mp3`;
  writeFileSync(target, Buffer.from(await blob.arrayBuffer()));
  const parsed = JSON.parse(execFileSync('ffprobe', ['-v','error','-show_entries','stream=codec_name,sample_rate,channels,duration','-of','json',target], { encoding: 'utf8' }));
  const stream = parsed.streams?.[0];
  if (!stream || stream.codec_name !== 'mp3' || Number(stream.channels) !== 2 || Number(stream.sample_rate) !== 44100 || Number(stream.duration) <= 0) {
    throw new Error(`${genre}: invalid encoded MP3 metadata`);
  }
  return { genre, styleId: sheet.styleId, tracks: sheet.tracks.length, notes: perf.notes.length, duration: perf.duration, bytes: readFileSync(target).length, stream };
}

async function main() {
  const outDir = '/tmp/mixgenres-audio-regression';
  mkdirSync(outDir, { recursive: true });
  const results: Array<Record<string, unknown>> = [];
  for (let i = 0; i < cases.length; i += CONCURRENCY) {
    const batch = cases.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(batch.map(([genre, file]) => renderCase(genre, file)));
    results.push(...batchResults);
    console.log(`audio-regression ${Math.min(i + CONCURRENCY, cases.length)}/${cases.length}`);
  }
  results.sort((a,b) => String(a.genre).localeCompare(String(b.genre)));
  const report = { status: 'PASS', renderMode: 'elementary-core-plus-style-dsp; browser master chain not executed in Node', genreCount: Object.keys(GENRE_NAMES).length, cases: results };
  if (results.length !== cases.length) throw new Error(`Audio regression covered ${results.length}/${cases.length} genres in this shard`);
  writeFileSync(`audit/audio-regression-${start}-${end}.json`, JSON.stringify(report, null, 2));
  if (start === 0 && end === allCases.length) writeFileSync('audit/audio-regression.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}

main().catch(err => { console.error(err); process.exit(1); });
