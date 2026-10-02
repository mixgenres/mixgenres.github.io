import { ALL_STYLES, getCanonicalStyle } from '../src/engine/style';
import { GENRE_NAMES } from '../src/data/genres';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { renderPerformanceToMp3 } from '../src/engine/playback/mp3Export';
import { createMasterChain } from '../src/engine/studio/mixer';
import { resolvePlaybackMix } from '../src/engine/studio/masterSettings';
import { measureAudio, type RenderDiagnostic } from '../src/engine/studio/audioMetrics';
import { chooseAudioWindows, excerptPerformance } from './lib/audioExcerpt';

const button = document.querySelector<HTMLButtonElement>('#run')!;
const status = document.querySelector<HTMLElement>('#status')!;
const progress = document.querySelector<HTMLElement>('#progress')!;
const text = document.querySelector<HTMLTextAreaElement>('#report')!;
async function post(path: string, body: BodyInit) {
  const response = await fetch(`/__audit/${path}`, { method: 'POST', body });
  const result = await response.json(); if (!response.ok) throw new Error(result.error); return result;
}
button.onclick = async () => {
  button.disabled = true; progress.textContent = ''; text.value = '';
  const mode = document.querySelector<HTMLSelectElement>('#scope')!.value;
  const meta = await fetch('/__audit/meta').then(r => r.json());
  const findings: { severity: string; code: string; scope: string; message: string }[] = [];
  const add = (severity: string, code: string, scope: string, message: string) => findings.push({ severity, code, scope, message });
  const log = (value: string) => { status.textContent = value; progress.textContent += value + '\n'; };
  const cases = [];
  try {
    for (const saturationType of ['tube', 'tape', 'hard-clip'] as const) {
      const ctx = new OfflineAudioContext(2, 22050, 44100);
      const mix = resolvePlaybackMix('tango', 'tango-tango-electronico');
      const chain = createMasterChain(ctx, { ...mix.mixCharacter!, saturationType }, mix.context);
      const rendered = await ctx.startRendering(); chain.dispose();
      const measured = measureAudio(rendered.getChannelData(0), rendered.getChannelData(1), 44100);
      if (measured.samplePeak > 1e-8 || measured.nonFiniteSamples) add('error', 'master-silence', saturationType, `Silence produced peak ${measured.samplePeak}`);
    }
    const representative = [...new Map([...Object.keys(GENRE_NAMES).map(g => getCanonicalStyle(g)),
      ...ALL_STYLES.filter(s => /tango.*(electronico|pugliese|troilo|cancion)|chacarera|guqin/.test(s.id))].map(s => [s.id, s])).values()];
    const selection = mode === 'all' ? ALL_STYLES : mode === 'smoke' ? representative.filter(s => ['tango-tango-tradicional', 'tango-tango-electronico', 'kpop-dance-pop', 'chinese-traditional-guqin-meditative'].includes(s.id) || /guqin/.test(s.id)) : representative;
    if (!selection.length) throw new Error('Empty style selection');
    for (const [i, style] of selection.entries()) {
      log(`Rendering ${i + 1}/${selection.length}: ${style.id}`);
      try {
        const sheet = makeSheet(style.primaryGenre, style.id), perf = compileWholeSong(sheet);
        const windows = [];
        for (const window of chooseAudioWindows(perf)) {
          const diagnostics: RenderDiagnostic[] = [];
          const blob = await renderPerformanceToMp3(excerptPerformance(perf, window.start, 2), {
            trackInstruments: new Map(sheet.tracks.map(t => [t.id, t.instrumentId!])),
            trackRoles: new Map(sheet.tracks.map(t => [t.id, t.role])), worldId: sheet.worldId, styleId: sheet.styleId,
            mixState: { volume: Object.fromEntries(sheet.tracks.map(t => [t.id, t.volume])) }, onDiagnostics: event => diagnostics.push(event),
          });
          const output = diagnostics.find(d => d.stage === 'output');
          if (!output?.browserMasterApplied) throw new Error('Native master was bypassed');
          for (const event of diagnostics) {
            const scope = `${style.id}/${window.name}/${event.instrumentId ?? event.id}`;
            if (event.metrics.nonFiniteSamples) add('error', 'non-finite-pcm', scope, String(event.metrics.nonFiniteSamples));
            if (event.stage !== 'bus' && event.metrics.samplePeak < 1e-7) add('error', 'silent-pcm', scope, 'Compiled notes rendered silence');
            if (event.stage === 'output' && event.metrics.samplePeak > 1) add('warning', 'master-overload', scope, `${event.metrics.samplePeakDbfs?.toFixed(2)} dBFS before encoding`);
            if (event.metrics.dcOffset > 0.01) add('warning', 'dc-offset', scope, String(event.metrics.dcOffset));
          }
          const encoded = await post(`measure?scope=${style.id}-${window.name}`, await blob.arrayBuffer());
          if ((encoded.decodedTruePeakDbfs ?? -100) > 0) add('warning', 'decoded-intersample-overload', `${style.id}/${window.name}`, `${encoded.decodedTruePeakDbfs} dBFS decoded true peak`);
          windows.push({ ...window, bytes: blob.size, diagnostics, encoded });
        }
        cases.push({ styleId: style.id, genre: style.primaryGenre, windows });
      } catch (e) { add('error', 'browser-render-failed', style.id, String(e)); cases.push({ styleId: style.id, error: String(e) }); }
    }
    const report = { ...meta, status: findings.some(f => f.severity === 'error') ? 'FAIL' : 'PASS',
      renderMode: 'Native OfflineAudioContext master + Elementary stems + style DSP + MP3 encode',
      coverage: { catalogStyles: ALL_STYLES.length, selectedStyles: selection.length, renderedStyles: cases.filter(c => !('error' in c)).length, fullCatalog: mode === 'all', masterSilenceCases: 3 },
      counts: { errors: findings.filter(f => f.severity === 'error').length, warnings: findings.filter(f => f.severity === 'warning').length },
      findings, cases, gaps: ['Excerpt measurements do not establish whole-song loudness or perceptual balance.', 'Live scheduling and long-running playback are not measured by this offline audit.'] };
    text.value = JSON.stringify(report, null, 2);
    const saved = await post('report', JSON.stringify(report));
    log(`${report.status}: ${report.coverage.renderedStyles}/${selection.length} styles, ${report.counts.errors} errors, ${report.counts.warnings} warnings; ${saved.saved}`);
  } catch (e) { status.className = 'error'; log(`FAIL: ${String(e)}`); }
  finally { button.disabled = false; }
};
