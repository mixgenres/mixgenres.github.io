import { isRecord } from './lib/unknownData';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { renderSampleMix } from '../src/engine/playback/renderSongMix';
import { renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import type { RenderDiagnostic } from '../src/engine/studio/audioMetrics';
import { measureAudio } from '../src/engine/studio/audioMetrics';
import { createMasterChain } from '../src/engine/studio/mixer';
import { ALL_STYLES } from '../src/engine/style';
import { selectStyles, styleMechanisms } from './lib/audioSelection';
import { excerptPerformance, chooseAudioWindows } from './lib/audioExcerpt';

const button = document.querySelector<HTMLButtonElement>('#run')!;
const status = document.querySelector<HTMLElement>('#status')!;
const selection = document.querySelector<HTMLSelectElement>('#scope')!;
const reportText = document.querySelector<HTMLElement>('#report')!;
selection.add(new Option('All Tango styles', 'genre:tango'));
for (const style of ALL_STYLES) selection.add(new Option(style.name, style.id));
button.onclick = async () => {
  button.disabled = true; reportText.textContent = '';
  try {
    const meta: unknown = await fetch('/__audit/meta').then(r => r.json());
    if (!isRecord(meta) || typeof meta.sourceFingerprint !== 'string') throw new Error('Invalid audit metadata');
    const styles = selection.value.startsWith('genre:') ? selectStyles(undefined, selection.value.slice(6)) : selectStyles(selection.value || undefined);
    const findings: { severity: string; code: string; scope: string; message: string }[] = [];
    const cases = [];
    const add = (code: string, scope: string, message: string) => findings.push({ severity: 'error', code, scope, message });
    const OfflineConstructor = window.OfflineAudioContext ?? window.webkitOfflineAudioContext;
    if (!OfflineConstructor) throw new Error('OfflineAudioContext is unavailable');
    for (const saturationType of ['tube', 'tape', 'hard-clip'] as const) {
      const context = new OfflineConstructor(2, 22050, 44100);
      const chain = createMasterChain(context, { dryness: .5, bassForward: .5, width: .5, brightness: .5, saturationType });
      try {
        const rendered = await context.startRendering();
        const metrics = measureAudio(rendered.getChannelData(0), rendered.getChannelData(1), 44100);
        if (metrics.samplePeak > 1e-8 || metrics.nonFiniteSamples) add('master-silence', saturationType, `Silence produces peak ${metrics.samplePeak}`);
      } finally { chain.dispose(); }
    }
    for (const [i, style] of styles.entries()) {
      status.textContent = `Rendering ${i + 1}/${styles.length}: ${style.name}`;
      try {
        const sheet = makeSheet(style.primaryGenre, style.id), performance = compileWholeSong(sheet), windows = [];
        for (const window of chooseAudioWindows(performance)) {
          const diagnostics: RenderDiagnostic[] = [];
          const audio = await renderPerformanceToAudio(excerptPerformance(performance, window.start, 2), {
            trackInstruments: new Map(sheet.tracks.map(t => [t.id, t.instrumentId!])), trackRoles: new Map(sheet.tracks.map(t => [t.id, t.role])),
            mixState: { volume: Object.fromEntries(sheet.tracks.map(t => [t.id, t.volume])),
              pan: Object.fromEntries(sheet.tracks.filter(t => t.pan !== undefined).map(t => [t.id, t.pan!])),
              muted: Object.fromEntries(sheet.tracks.map(t => [t.id, !!t.muted])), solo: Object.fromEntries(sheet.tracks.map(t => [t.id, !!t.solo])) },
            worldId: sheet.worldId, styleId: sheet.styleId, onDiagnostics: event => diagnostics.push(event),
          });
          const output = diagnostics.find(d => d.stage === 'output');
          if (!output?.browserMasterApplied) throw new Error('Native master was bypassed');
          if (output.metrics.samplePeak > .981) add('output-headroom', `${style.id}/${window.name}`, 'Mastered PCM exceeds its final headroom');
          for (const event of diagnostics) {
            const scope = `${style.id}/${window.name}/${event.instrumentId ?? event.id}`;
            if (event.metrics.nonFiniteSamples) add('non-finite-pcm', scope, `${event.metrics.nonFiniteSamples} invalid samples`);
            if (event.stage !== 'bus' && event.metrics.samplePeak < 1e-7) add('silent-pcm', scope, 'Audible part rendered silence');
          }
          if (!audio.buffer || audio.buffer.length !== audio.left.length) throw new Error('Native playback buffer is missing or truncated');
          const sampleMix = await renderSampleMix(excerptPerformance(performance, window.start, 2), sheet, new AbortController().signal);
          const sampleMetrics = measureAudio(sampleMix.left, sampleMix.right, sampleMix.sampleRate);
          const levelDifferenceDb = Math.abs((sampleMetrics.rmsDbfs ?? -120) - (output.metrics.rmsDbfs ?? -120));
          let sampleDifference = 0;
          if (sampleMix.left.length !== audio.left.length) add('playback-length', `${style.id}/${window.name}`, 'Sample mix has a different duration from export');
          for (let n = 0; n < Math.min(sampleMix.left.length, audio.left.length); n++) sampleDifference = Math.max(sampleDifference,
            Math.abs(sampleMix.left[n] - audio.left[n]), Math.abs(sampleMix.right[n] - audio.right[n]));
          if (sampleMetrics.nonFiniteSamples || sampleMetrics.samplePeak < 1e-7) add('playback-pcm', `${style.id}/${window.name}`, 'Sample mix is silent or invalid');
          if (levelDifferenceDb > .5) add('playback-level', `${style.id}/${window.name}`, `Sample mix differs from export by ${levelDifferenceDb.toFixed(2)} dB`);
          windows.push({ ...window, output: output.metrics, sampleMix: sampleMetrics, levelDifferenceDb, sampleDifference, frames: audio.left.length });
        }
        cases.push({ styleId: style.id, mechanisms: styleMechanisms(style), windows });
      } catch (error) { add('browser-render', style.id, String(error)); }
    }
    const report = { ...meta, status: findings.length ? 'FAIL' : 'PASS', scope: 'Native playback PCM and master mechanisms',
      coverage: { styles: styles.length, rendered: cases.length, mechanisms: new Set(styles.flatMap(styleMechanisms)).size, masterSilenceCases: 3 },
      findings, cases };
    const response = await fetch('/__audit/report', { method: 'POST', body: JSON.stringify(report) });
    const saved: unknown = await response.json();
    if (!isRecord(saved)) throw new Error('Invalid audit response');
    if (!response.ok) throw new Error(typeof saved.error === 'string' ? saved.error : 'Audit upload failed');
    status.textContent = `${report.status}: ${cases.length}/${styles.length} styles, ${findings.length} errors. ${saved.saved}`;
    reportText.textContent = findings.map(f => `${f.scope}: ${f.message}`).join('\n') || 'No findings.';
  } catch (error) { status.textContent = `FAIL: ${String(error)}`; }
  finally { button.disabled = false; }
};
