import OfflineRenderer from '@elemaudio/offline-renderer';
import { getInstrumentModule } from '../src/engine/playback/instrumentRegistry';
import { midiToFreq, renderTrack } from '../src/engine/playback/elementaryEngine';
import { resolveTrackSound, resolveTrackGain } from '../src/engine/playback/trackSound';
import { resolveRenderGesture } from '../src/engine/playback/renderGesture';
import { codeForGesture } from '../src/engine/band/gestures';
import { measureAudio } from '../src/engine/studio/audioMetrics';
import { selectInstruments, instrumentMechanisms } from './lib/audioSelection';
import { voiceTailSeconds } from '../src/engine/playback/voiceAllocation';
import { reportMetadata, writeReport, summarizeFindings, printFindings, type Finding } from './lib/auditReport';

const sampleRate = 44100, blockSize = 256;
const renderer = new OfflineRenderer();
await renderer.initialize({ sampleRate, numInputChannels: 0, numOutputChannels: 2, blockSize });
const findings: Finding[] = [], rows = [];
const add = (severity: Finding['severity'], code: string, scope: string, message: string) => findings.push({ severity, code, scope, message });
function capture(seconds: number) {
  const frames = Math.ceil(seconds * sampleRate), left = new Float32Array(frames), right = new Float32Array(frames);
  const outputs = [new Float32Array(blockSize), new Float32Array(blockSize)];
  for (let cursor = 0; cursor < frames; cursor += blockSize) {
    renderer.process([], outputs);
    const count = Math.min(blockSize, frames - cursor);
    left.set(outputs[0].subarray(0, count), cursor); right.set(outputs[1].subarray(0, count), cursor);
  }
  return { left, right, metrics: measureAudio(left, right, sampleRate) };
}
const selection = selectInstruments(process.argv.find(a => a.startsWith('--instrument='))?.slice(13));
const details = process.argv.includes('--details');
for (const def of selection) {
  const probes = [];
  const low = def.tuningAndMechanics?.keyRange?.lowMidi ?? 48, high = def.tuningAndMechanics?.keyRange?.highMidi ?? 84;
  const mid = Math.round((low + high) / 2);
  const gestures = def.techniques.articulations;
  const cases = def.kitComponents?.length
    ? def.kitComponents.map(c => ({ name: c.id, midi: c.midi, frequencyHz: c.tuningHz ?? midiToFreq(c.midi), velocity: 0.8, gesture: gestures[0] ?? 'tone' }))
    : [{ name: 'middle-soft', midi: mid, frequencyHz: midiToFreq(mid), velocity: 0.3, gesture: gestures[0] ?? 'tone' },
       { name: 'low-strong', midi: low, frequencyHz: midiToFreq(low), velocity: 0.8, gesture: gestures[0] ?? 'tone' },
       { name: 'high-technique', midi: high, frequencyHz: midiToFreq(high), velocity: 0.8, gesture: gestures.at(-1) ?? 'tone' }];
  for (const probe of cases) {
    const scope = `${def.id}/${probe.name}`;
    try {
      const params = resolveTrackSound(def.id);
      params.volume = resolveTrackGain(params);
      const gesture = resolveRenderGesture(def.id, codeForGesture(probe.gesture));
      const trackId = `audit-${scope}`;
      const voice = { id: `${trackId}-voice`, note: probe.midi, velocity: probe.velocity * gesture.gainMultiplier,
        gate: 1, frequencyHz: probe.frequencyHz, action: gesture.action,
        excitationType: gesture.excitationOverride ?? params.excitationType, articulation: gesture.articulationNorm };
      renderer.reset();
      const signal = renderTrack(trackId, [voice], params); await renderer.render(signal.left, signal.right);
      const attack = capture(0.35).metrics;
      if (attack.nonFiniteSamples) add('error', 'non-finite-attack', scope, `${attack.nonFiniteSamples} samples`);
      if (attack.samplePeak <= 1e-8) add('error', 'silent-attack', scope, 'Rendered note/kit component is silent');
      if (attack.samplePeak > 1) add('warning', 'isolated-overload', scope, `${attack.samplePeakDbfs?.toFixed(2)} dBFS before ensemble headroom and master`);
      voice.gate = 0;
      const releaseSignal = renderTrack(trackId, [voice], params); await renderer.render(releaseSignal.left, releaseSignal.right);
      const releaseSeconds = Math.max(1.5, voiceTailSeconds(params));
      const release = capture(releaseSeconds);
      const tail = measureAudio(release.left.subarray(-2048), release.right.subarray(-2048), sampleRate);
      if (release.metrics.nonFiniteSamples) add('error', 'non-finite-release', scope, `${release.metrics.nonFiniteSamples} samples`);
      if (['sustained', 'blown'].includes(def.acousticProfile?.sustain ?? '') && tail.samplePeak > 1e-4) add('error', 'stuck-sustain', scope, `Note-off tail ${tail.samplePeak} after ${releaseSeconds.toFixed(2)}s`);
      probes.push({ name: probe.name, ...(details ? { ...probe, resolvedGesture: gesture.name, attack, releaseTail: tail } : {}) });
    } catch (e) { add('error', 'render-exception', scope, String(e)); probes.push({ ...probe, error: String(e) }); }
  }
  rows.push({ instrumentId: def.id, family: def.family, moduleId: getInstrumentModule(def.id).id, probes });
}
renderer.reset();
const counts = summarizeFindings(findings);
const coverage = { instruments: rows.length, mechanisms: new Set(selection.flatMap(instrumentMechanisms)).size, probes: rows.reduce((sum, r) => sum + r.probes.length, 0) };
writeReport('instrument-render-audit', { ...reportMetadata(), status: counts.errors ? 'FAIL' : 'PASS', sampleRate, blockSize,
  scope: 'Shared modules, physical models, excitation and sustain mechanisms; low/soft/high attacks, kit components and authored note-off tails.',
  coverage, counts, findings, rows });
printFindings('instrument-render-audit', findings, coverage);
