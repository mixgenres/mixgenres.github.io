// T2 audio audit. Full-length section-aware fingerprints with optional per-stem checks.
// Shard by AUDIO_START/AUDIO_END (genre indices). No npm install is required; ffmpeg/ffprobe are external runtime deps.
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { GENRE_NAMES } from '../../src/data/genres';
import { makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { renderPerformanceToMp3 } from '../../src/engine/playback/mp3Export.ts';
import type { Performance, PerfNote } from '../../src/engine/band/performanceData.ts';
import { analyzePcm, interOnsetCv, scheduledEnergyBySecond } from '../lib/audioMetrics.ts';
import { flag, mean, writeReport } from '../lib/io.ts';

const genres = Object.keys(GENRE_NAMES);
const start = Math.max(0, Number(flag('start') ?? process.env.AUDIO_START ?? 0));
const end = Math.min(genres.length, Math.max(start, Number(flag('end') ?? process.env.AUDIO_END ?? genres.length)));
const selected = genres.slice(start, end);
const out = String(flag('out') ?? '/tmp/mixgenres-audit-audio');
const cacheDir = `${out}/cache`; mkdirSync(cacheDir, { recursive: true });
const stems = process.env.AUDIO_STEMS === '1';
const failures: string[] = [];
const rows: Array<Record<string, unknown>> = [];

function cacheKey(perf: Performance, genre: string): string {
  const canonical = JSON.stringify({ engine: 'audio-audit-v3', genre, notes: perf.notes, bars: perf.bars, duration: perf.duration });
  return createHash('sha256').update(canonical).digest('hex');
}
function pcmFromMp3(mp3: string): { pcm: Float32Array; sampleRate: number; channels: number } {
  const sampleRate = 22050, channels = 2;
  const bytes = execFileSync('ffmpeg', ['-loglevel','error','-i',mp3,'-f','f32le','-ac',String(channels),'-ar',String(sampleRate),'pipe:1']);
  return { pcm: new Float32Array(bytes.buffer, bytes.byteOffset, Math.floor(bytes.byteLength / 4)), sampleRate, channels };
}
function sectionFeatures(pcm: Float32Array, sampleRate: number, channels: number, startSec: number, endSec: number) {
  const a = Math.max(0, Math.floor(startSec * sampleRate * channels));
  const b = Math.min(pcm.length, Math.floor(endSec * sampleRate * channels));
  return analyzePcm(pcm.slice(a, b), sampleRate, channels);
}
function scheduledOnsets(notes: PerfNote[], startSec: number, endSec: number): PerfNote[] {
  return notes.filter(n => n.time >= startSec && n.time < endSec);
}

for (const genre of selected) {
  try {
    const sheet = makeSheet(genre);
    const perf = compileWholeSong(sheet, 0);
    const key = cacheKey(perf, genre);
    const cacheFile = `${cacheDir}/${key}.json`;
    if (existsSync(cacheFile)) {
      const cached = JSON.parse(readFileSync(cacheFile, 'utf8')) as Record<string, unknown>;
      rows.push({ ...cached, cached: true });
      console.log(`CACHE ${genre} ${key.slice(0,12)}`);
      continue;
    }
    const blob = await renderPerformanceToMp3(perf, {
      trackInstruments: new Map(sheet.tracks.flatMap(t => t.instrumentId ? [[t.id, t.instrumentId] as const] : [])),
      worldId: sheet.worldId,
      styleId: sheet.styleId,
    });
    const mp3 = `${out}/${genre}.mp3`; mkdirSync(out, { recursive: true });
    writeFileSync(mp3, Buffer.from(await blob.arrayBuffer()));
    const { pcm, sampleRate, channels } = pcmFromMp3(mp3);
    const overall = analyzePcm(pcm, sampleRate, channels);
    const sections = sheet.regions.map(region => {
      const startSec = perf.bars[region.start]?.start ?? 0;
      const endSec = region.end < perf.bars.length ? perf.bars[region.end]?.start ?? perf.duration : perf.duration;
      const notes = scheduledOnsets(perf.notes, startSec, endSec);
      const audio = sectionFeatures(pcm, sampleRate, channels, startSec, endSec);
      const scheduled = scheduledEnergyBySecond(notes, Math.max(1, endSec - startSec));
      return { id: region.id, kind: region.kind, energy: region.energy, startBar: region.start, endBar: region.end, startSec, endSec, audio, scheduledEnergyMean: mean(scheduled), scheduledOnsetCv: interOnsetCv(notes) };
    });
    const row = { genre, styleId: sheet.styleId, durationSec: perf.duration, noteCount: perf.notes.length, performanceHash: key, overall, sections };
    rows.push(row);
    writeFileSync(cacheFile, JSON.stringify(row));
    if (stems) {
      const stemDir = `${out}/stems/${genre}`; mkdirSync(stemDir, { recursive: true });
      for (const track of sheet.tracks) {
        if (!perf.notes.some(n => n.trackId === track.id)) continue;
        const stem = await renderPerformanceToMp3(perf, { trackInstruments: new Map([[track.id, track.instrumentId ?? track.id]]), worldId: sheet.worldId, styleId: sheet.styleId, selectedTrackIds: [track.id] });
        const path = `${stemDir}/${track.id}.mp3`; writeFileSync(path, Buffer.from(await stem.arrayBuffer()));
        const stemPcm = pcmFromMp3(path);
        const features = analyzePcm(stemPcm.pcm, stemPcm.sampleRate, stemPcm.channels);
        const scheduled = perf.notes.filter(n => n.trackId === track.id);
        writeFileSync(`${stemDir}/${track.id}.json`, JSON.stringify({ trackId: track.id, instrumentId: track.instrumentId, scheduledNotes: scheduled.length, onsetCv: interOnsetCv(scheduled), audio: features }, null, 2));
      }
    }
  } catch (error) {
    failures.push(`${genre}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

const report = { schemaVersion: 3, status: failures.length ? 'FAIL' : 'PASS', shard: [start, end], genres: selected.length, stems, failures, rows, generatedAt: new Date().toISOString() };
writeReport(`audio-audit-${start}-${end}.json`, report);
console.log(JSON.stringify({ status: report.status, shard: report.shard, genres: selected.length, failures: failures.length, stems }, null, 2));
if (failures.length) process.exit(1);
