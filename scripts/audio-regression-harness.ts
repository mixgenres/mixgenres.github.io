import { mkdirSync, writeFileSync } from 'node:fs';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { renderPerformanceToMp3 } from '../src/engine/playback/mp3Export';
import type { RenderDiagnostic } from '../src/engine/studio/audioMetrics';
import { excerptPerformance, chooseAudioWindows } from './lib/audioExcerpt';
import { selectStyles, styleMechanisms } from './lib/audioSelection';
import { measureEncodedAudio } from './lib/encodedAudio';
import { reportMetadata, writeReport, summarizeFindings, printFindings, type Finding } from './lib/auditReport';

const styleId = process.argv.find(a => a.startsWith('--style='))?.slice(8);
const encoded = process.argv.includes('--encoded'), save = process.argv.includes('--save'), details = process.argv.includes('--details');
if (process.argv.includes('--all-styles')) throw new Error('Use --style=<id> for a focused render; catalog coverage is handled by npm run check.');
const selection = selectStyles(styleId);
const findings: Finding[] = [], cases: Array<Record<string, unknown>> = [];
const add = (severity: Finding['severity'], code: string, scope: string, message: string) => findings.push({ severity, code, scope, message });
for (const style of selection) {
  try {
    const sheet = makeSheet(style.primaryGenre, style.id), performance = compileWholeSong(sheet);
    const windows = [];
    for (const window of chooseAudioWindows(performance)) {
      const excerpt = excerptPerformance(performance, window.start, 2), diagnostics: RenderDiagnostic[] = [];
      if (!excerpt.notes.length) throw new Error(`Empty ${window.name} excerpt`);
      const blob = await renderPerformanceToMp3(excerpt, {
        trackInstruments: new Map(sheet.tracks.map(t => [t.id, t.instrumentId!])), trackRoles: new Map(sheet.tracks.map(t => [t.id, t.role])),
        mixState: { volume: Object.fromEntries(sheet.tracks.map(t => [t.id, t.volume])), pan: Object.fromEntries(sheet.tracks.filter(t => t.pan !== undefined).map(t => [t.id, t.pan!])),
          muted: Object.fromEntries(sheet.tracks.map(t => [t.id, !!t.muted])), solo: Object.fromEntries(sheet.tracks.map(t => [t.id, !!t.solo])) },
        worldId: sheet.worldId, styleId: sheet.styleId, bypassWebAudioMaster: true, format: encoded ? 'mp3' : 'wav',
        onDiagnostics: event => diagnostics.push(event),
      });
      for (const event of diagnostics) {
        const scope = `${style.id}/${window.name}/${event.instrumentId ?? event.id}`;
        if (event.metrics.nonFiniteSamples) add('error', 'non-finite-pcm', scope, `${event.metrics.nonFiniteSamples} invalid samples`);
        if (event.stage !== 'bus' && event.metrics.samplePeak < 1e-7) add('error', 'silent-pcm', scope, 'Audible part rendered silence');
        if (event.stage === 'output' && event.metrics.dcOffset > 0.01) add('warning', 'dc-offset', scope, `DC offset ${event.metrics.dcOffset.toFixed(4)}`);
      }
      const observed = new Set(diagnostics.filter(d => d.stage === 'stem').map(d => d.id));
      for (const id of new Set(excerpt.notes.map(n => n.trackId))) if (!observed.has(id)) add('error', 'missing-stem', `${style.id}/${window.name}/${id}`, 'Part missing from render');
      const bytes = new Uint8Array(await blob.arrayBuffer());
      const measurement = encoded ? measureEncodedAudio(bytes) : undefined;
      if (encoded) {
        const stream = measurement?.metadata.streams?.[0];
        if (stream?.codec_name !== 'mp3' || Number(stream.channels) !== 2 || Number(stream.sample_rate) !== 44100) throw new Error('Invalid MP3 stream');
      }
      if (save) {
        mkdirSync('/tmp/mixgenres-audio-regression', { recursive: true });
        writeFileSync(`/tmp/mixgenres-audio-regression/${style.id}-${window.name}.${encoded ? 'mp3' : 'wav'}`, bytes);
      }
      windows.push({ ...window, bytes: bytes.length, output: diagnostics.find(d => d.stage === 'output')?.metrics,
        ...(measurement ? { encoded: measurement } : {}), ...(details ? { diagnostics } : {}) });
    }
    cases.push({ styleId: style.id, mechanisms: styleMechanisms(style), windows });
  } catch (error) { add('error', 'render-failed', style.id, String(error)); }
}
const coverage = { styles: selection.length, rendered: cases.length, mechanisms: new Set(selection.flatMap(styleMechanisms)).size };
writeReport('audio-regression', { ...reportMetadata(), status: findings.some(f => f.severity === 'error') ? 'FAIL' : 'PASS',
  scope: 'Representative renderer mechanisms; Node portable mix. Native master is measured separately by audit:browser.',
  selection: selection.map(s => s.id), coverage, counts: summarizeFindings(findings), findings, cases });
printFindings('audio-regression', findings, coverage);
