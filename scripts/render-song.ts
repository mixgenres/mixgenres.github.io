// Renders a complete song exactly the way the app does (createCatalogSong -> compile
// -> renderPerformanceToMp3), so it can be sanity-checked/listened to outside
// the browser. Usage: npm run render-song -- tango /tmp/tango.mp3 20
// Options: --style=ID --instrumental --start=SECONDS
//          --duration=SECONDS --format=mp3|wav --report=FILE
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { getCanonicalStyle } from '../src/engine/style';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';
import { renderPerformanceToMp3 } from '../src/engine/playback/mp3Export.ts';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import { catalogIdForStyle, createCatalogSong } from '../src/engine/sheet/songCatalog';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import type { RenderDiagnostic } from '../src/engine/studio/audioMetrics';
import { reportMetadata } from './lib/auditReport';
import { audioRenderFingerprint } from './lib/audioRenderFingerprint';
import { chooseAudioWindows } from './lib/audioExcerpt';
import { setSoundfontBankReader } from '../src/engine/playback/soundfont/banks';

async function main() {
  const metadata = reportMetadata();
  const audioFingerprint = audioRenderFingerprint();
  const args = process.argv.slice(2), positional = args.filter(arg => !arg.startsWith('--'));
  const value = (flag: string) => args.find(arg => arg.startsWith(`${flag}=`))?.slice(flag.length + 1);
  const genreId = positional[0] || 'salsa';
  const format = value('--format') ?? 'mp3';
  setSoundfontBankReader(async id=>{
    const data=readFileSync(`src/assets/soundfonts/${id}.sfpack`);return data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength);
  });
  if (format !== 'mp3' && format !== 'wav') throw new Error('Format must be mp3 or wav');
  const outPath = positional[1] || `/tmp/${genreId}.${format}`;
  const maxSeconds = Number(value('--duration') ?? positional[2] ?? 0);
  let start = Number(value('--start') ?? 0);
  if (!Number.isFinite(maxSeconds) || maxSeconds < 0 || !Number.isFinite(start) || start < 0) throw new Error('Invalid render window');

  const sheet = createCatalogSong(catalogIdForStyle(value('--style') ?? getCanonicalStyle(genreId).id));
  console.error(`[${genreId}] tracks:`, sheet.tracks.map(t => `${t.id}:${t.instrumentId}`).join(', '));
  console.error(`[${genreId}] sections:`, sheet.regions.map(r => `${r.kind}(e${r.energy})`).join(' -> '));

  const perf = compileWholeSong(sheet);
  console.error(`[${genreId}] notes: ${perf.notes.length}, duration: ${perf.duration.toFixed(1)}s${maxSeconds ? ' (excerpt)' : ''}`);

  const options = songMixOptions(sheet), diagnostics: RenderDiagnostic[] = [];
  const selectedTrackIds = args.includes('--instrumental') ? sheet.tracks.filter(t => INSTRUMENTS_BY_ID[t.instrumentId ?? t.instrument]?.family !== 'voice').map(t => t.id) : undefined;
  if (args.includes('--ensemble') && maxSeconds > 0) {
    const eligible = selectedTrackIds ? new Set(selectedTrackIds) : null;
    const ensemble = eligible ? { ...perf, notes: perf.notes.filter(note => eligible.has(note.trackId)) } : perf;
    start = chooseAudioWindows(ensemble, maxSeconds).find(window => window.name === 'ensemble')?.start ?? 0;
    if (!ensemble.notes.some(note => note.time < start + maxSeconds && note.time + note.dur > start)) {
      start = Math.min(...ensemble.notes.map(note => note.time));
      if (!Number.isFinite(start)) throw new Error('Selected tracks have no sounding ensemble window');
    }
  }
  const end = maxSeconds > 0 ? Math.min(perf.duration, start + maxSeconds) : perf.duration + (perf.tail ?? 0);
  if (start >= end) throw new Error('Render window starts after the end of the song');

  const blob = await renderPerformanceToMp3(
    perf,
    {
      ...options, selectedTrackIds, format,
      ...(args.includes('--bounded') && maxSeconds > 0 ? { maxDurationSeconds: end - start } : {}),
      ...(maxSeconds > 0 || start > 0 ? { renderWindow: { start, end } } : {}),
      onDiagnostics: event => diagnostics.push(event),
    },
  );

  const buf = Buffer.from(await blob.arrayBuffer());
  mkdirSync(dirname(outPath), { recursive: true }); writeFileSync(outPath, buf);
  const report = value('--report');
  if (report) {
    mkdirSync(dirname(report), { recursive: true });
    writeFileSync(report, JSON.stringify({ ...metadata, audioFingerprint, audioSourcesChangedDuringRender: audioFingerprint !== audioRenderFingerprint(),
      sourcesChangedDuringRender: metadata.sourceFingerprint !== reportMetadata().sourceFingerprint,
      genreId, playbackEngine: 'soundfont', styleId: sheet.styleId, catalogId: sheet.catalogId,
      windowSelection: args.includes('--ensemble') ? 'ensemble' : 'specified',
      bpm: sheet.bpm, meter: sheet.timeSignature, instrumental: args.includes('--instrumental'), start, end,
      tracks: sheet.tracks.map(t => ({ id: t.id, instrumentId: t.instrumentId, role: t.role, selected: !selectedTrackIds || selectedTrackIds.includes(t.id) })),
      sections: sheet.regions.map(r => ({ kind: r.kind, start: r.start, end: r.end })), diagnostics }, null, 2) + '\n');
  }
  console.error(`[${genreId}] wrote ${outPath} (${(buf.length / 1024).toFixed(0)} KB)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
