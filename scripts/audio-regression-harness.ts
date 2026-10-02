import { measureEncodedAudio } from './lib/encodedAudio';
import { mkdirSync, writeFileSync } from 'node:fs';
import { makeSheet } from '../src/engine/sheet/sheet';
import { GENRE_NAMES } from '../src/data/genres';
import { ALL_STYLES, getCanonicalStyle } from '../src/engine/style';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { renderPerformanceToMp3 } from '../src/engine/playback/mp3Export';
import type { RenderDiagnostic } from '../src/engine/studio/audioMetrics';
import { excerptPerformance, chooseAudioWindows } from './lib/audioExcerpt';
import { reportMetadata, writeReport, summarizeFindings, type Finding } from './lib/auditReport';

const full = process.argv.includes('--all-styles');
const styleFlag = process.argv.find(a => a.startsWith('--style='))?.slice(8);
const allCases = full ? ALL_STYLES : [...new Map([
  ...Object.keys(GENRE_NAMES).map(g => getCanonicalStyle(g)),
  ...ALL_STYLES.filter(s => /tango.*(electronico|pugliese|troilo|cancion)|chacarera|guqin/.test(s.id)),
].map(s => [s.id, s])).values()];
const selected = styleFlag ? ALL_STYLES.filter(s => s.id === styleFlag) : allCases;
const start = Number(process.env.AUDIO_START ?? 0), end = Number(process.env.AUDIO_END ?? selected.length);
if (!selected.length || !Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end > selected.length || end <= start) throw new Error('Empty selection or invalid AUDIO_START/AUDIO_END bounds');
const cases = selected.slice(start, end);
const findings: Finding[] = [], results: Array<Record<string, unknown>> = [];
const outDir = '/tmp/mixgenres-audio-regression';
mkdirSync(outDir, { recursive: true });
const add = (severity: Finding['severity'], code: string, scope: string, message: string) => findings.push({ severity, code, scope, message });
for (const [index, style] of cases.entries()) {
  const scope = style.id;
  try {
    const sheet = makeSheet(style.primaryGenre, style.id);
    const fullPerformance = compileWholeSong(sheet);
    const windows = [];
    for (const window of chooseAudioWindows(fullPerformance)) {
      const perf = excerptPerformance(fullPerformance, window.start, 2);
      const diagnostics: RenderDiagnostic[] = [];
      if (!perf.notes.length) throw new Error(`Empty ${window.name} excerpt`);
      const blob = await renderPerformanceToMp3(perf, {
        trackInstruments: new Map(sheet.tracks.map(t => [t.id, t.instrumentId!])),
        trackRoles: new Map(sheet.tracks.map(t => [t.id, t.role])),
        mixState: { volume: Object.fromEntries(sheet.tracks.map(t => [t.id, t.volume])) },
        worldId: sheet.worldId, styleId: sheet.styleId, bypassWebAudioMaster: true,
        onDiagnostics: event => diagnostics.push(event),
      });
      const target = `${outDir}/${scope}-${window.name}.mp3`;
      const bytes = Buffer.from(await blob.arrayBuffer()); writeFileSync(target, bytes);
      const encoded = measureEncodedAudio(bytes);
      const stream = encoded.metadata.streams?.[0];
      if (!stream || stream.codec_name !== 'mp3' || Number(stream.channels) !== 2 || Number(stream.sample_rate) !== 44100) throw new Error(`Invalid encoded ${window.name} MP3 metadata`);
      for (const event of diagnostics) {
        const id = `${scope}/${window.name}/${event.stage}/${event.instrumentId ?? event.id}`;
        if (event.metrics.nonFiniteSamples) add('error', 'non-finite-pcm', id, `${event.metrics.nonFiniteSamples} invalid samples`);
        if ((event.stage === 'stem' || event.stage === 'output') && event.metrics.samplePeak < 1e-7) add('error', 'silent-pcm', id, 'Notes were compiled but the render is silent');
        if (event.metrics.dcOffset > 0.01) add('warning', 'dc-offset', id, `DC offset ${event.metrics.dcOffset.toFixed(4)}`);
        if (event.stage === 'output' && event.metrics.samplePeak > 1) add('warning', 'pre-encoding-overload', id, `Sample peak ${event.metrics.samplePeakDbfs?.toFixed(2)} dBFS before encoder peak trim; browser master not measured`);
        if (event.stage === 'output' && (event.encodingPeakTrim ?? 1) < 0.5) add('warning', 'large-encoding-trim', id, 'Encoder attenuates this excerpt by more than 6 dB');
      }
      const expectedTracks = new Set(perf.notes.map(n => n.trackId));
      const observed = new Set(diagnostics.filter(d => d.stage === 'stem').map(d => d.id));
      for (const id of expectedTracks) if (!observed.has(id)) add('error', 'missing-stem-measurement', `${scope}/${window.name}/${id}`, 'Audible track was not observed');
      windows.push({ ...window, notes: perf.notes.length, expectedAudibleTracks: expectedTracks.size, bytes: bytes.length, stream, encoded, diagnostics });
    }
    results.push({ genre: style.primaryGenre, styleId: scope, tracks: sheet.tracks.length, fullSongNotes: fullPerformance.notes.length, windows });
  } catch (error) { add('error', 'render-failed', scope, String(error)); results.push({ styleId: scope, error: String(error) }); }
  console.log(`audio-regression ${index + 1}/${cases.length} ${scope}`);
}
const counts = summarizeFindings(findings);
const report = { ...reportMetadata(), status: counts.errors ? 'FAIL' : 'PASS', renderMode: 'Elementary stems + style DSP; Web Audio master NOT executed',
  coverage: { catalogStyles: ALL_STYLES.length, selectedStyles: cases.length, renderedStyles: results.filter(r => !r.error).length,
    fullCatalog: full && !styleFlag && start === 0 && end === selected.length, selection: styleFlag ?? (full ? 'all styles' : 'default genres + contrasting styles'), shard: [start, end] },
  measurements: 'Float PCM before encoder peak trim; sample peak, RMS/active RMS, crest, DC, clipping fraction, stereo correlation, mono RMS. RMS is not LUFS; sample peak is not true peak.',
  gaps: ['Browser master graph is excluded from this Node render; run browser-mix-audit for mastered PCM.', 'Two excerpts per style do not validate every note or transition in the full song.', 'Decoded excerpt LUFS/true peak include encoder trim; no whole-song loudness or reference-recording comparison.'],
  counts, findings, cases: results };
writeReport(`audio-regression-${start}-${end}`, report);
if (start === 0 && end === selected.length && !styleFlag) writeReport('audio-regression', report);
console.log(JSON.stringify({ status: report.status, coverage: report.coverage, ...counts }));
if (counts.errors) process.exitCode = 1;
