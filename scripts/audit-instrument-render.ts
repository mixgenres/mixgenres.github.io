import { mkdirSync, writeFileSync } from 'node:fs';
import OfflineRenderer from '@elemaudio/offline-renderer';
import { INSTRUMENTS_BY_ID } from '../src/data/instruments';
import { getInstrumentModule } from '../src/engine/playback/instrumentRegistry.ts';
import { defaultTrackParams, midiToFreq, modelForInstrument, renderTrack } from '../src/engine/playback/elementaryEngine.ts';
import { getLuthierModelForInstrument } from '../src/engine/playback/luthier.ts';
import { resolveRenderGesture } from '../src/engine/playback/renderGesture.ts';
import { codeForGesture } from '../src/engine/band/gestures.ts';

const sampleRate = 44100;
const blockSize = 256;
const renderer = new OfflineRenderer();
const outputs = [new Float32Array(blockSize), new Float32Array(blockSize)];

async function main(): Promise<void> {
  await renderer.initialize({
    sampleRate,
    numInputChannels: 0,
    numOutputChannels: 2,
    blockSize,
  });

  const rows: Array<Record<string, unknown>> = [];
  const failures: string[] = [];

  for (const def of Object.values(INSTRUMENTS_BY_ID)) {
    try {
      const instrumentId = def.id;
      const module = getInstrumentModule(instrumentId);
      const luthier = def.luthierPhysics ?? getLuthierModelForInstrument(instrumentId);
      const model = modelForInstrument(instrumentId);
      const params = defaultTrackParams(instrumentId, luthier, model);
      const gestureName = def.techniques.articulations[0] ?? 'tone';
      const gesture = resolveRenderGesture(instrumentId, codeForGesture(gestureName));
      const midi = def.kitComponents?.[0]?.midi ?? def.tuningAndMechanics?.keyRange?.lowMidi ?? 60;
      const frequencyHz = def.kitComponents?.[0]?.tuningHz ?? midiToFreq(midi);
      const trackId = `instrument-audit-${instrumentId}`;
      const voice = {
        id: `${trackId}-voice`,
        note: midi,
        velocity: 0.8,
        gate: 1,
        frequencyHz,
        action: gesture.action,
        excitationType: gesture.excitationType,
        articulation: gesture.articulationNorm,
      };

      renderer.reset();
      const signal = renderTrack(trackId, [voice], params);
      await renderer.render(signal.left, signal.right);
      renderer.process([], outputs);

      let peak = 0;
      let finite = true;
      for (let i = 0; i < blockSize; i++) {
        finite &&= Number.isFinite(outputs[0][i]) && Number.isFinite(outputs[1][i]);
        peak = Math.max(peak, Math.abs(outputs[0][i]), Math.abs(outputs[1][i]));
      }
      const row = {
        instrumentId,
        moduleId: module.id,
        family: def.family,
        gesture: gesture.name,
        frequencyHz,
        finite,
        peak,
        rendered: finite && peak > 1e-8,
        noteOffTailPeak: 0,
      };

      voice.gate = 0;
      const idleSignal = renderTrack(trackId, [voice], params);
      await renderer.render(idleSignal.left, idleSignal.right);
      const sustained = def.acousticProfile?.sustain === 'sustained' || def.acousticProfile?.sustain === 'blown';
      const releaseBlocks = Math.ceil(sampleRate * 1.5 / blockSize);
      for (let block = 0; block < releaseBlocks; block++) {
        renderer.process([], outputs);
        if (block >= releaseBlocks - 8) {
          for (let i = 0; i < blockSize; i++) {
            row.noteOffTailPeak = Math.max(row.noteOffTailPeak, Math.abs(outputs[0][i]), Math.abs(outputs[1][i]));
          }
        }
      }
      rows.push(row);
      if (!row.rendered) failures.push(`${instrumentId}: ${finite ? 'silent render' : 'non-finite audio'}`);
      if (sustained && row.noteOffTailPeak > 1e-4) failures.push(`${instrumentId}: sustained voice did not fade after note-off (peak ${row.noteOffTailPeak})`);
    } catch (error) {
      failures.push(`${def.id}: ${error instanceof Error ? error.message : String(error)}`);
      rows.push({ instrumentId: def.id, rendered: false, error: String(error) });
    }
  }

  const report = {
    schemaVersion: 2,
    instruments: rows.length,
    sampleRate,
    blockSize,
    noteOffCheck: { releaseSeconds: 1.5, measuredTailSeconds: (8 * blockSize) / sampleRate, sustainedPeakLimit: 1e-4 },
    failures,
    status: failures.length ? 'FAIL' : 'PASS',
    rows,
  };
  mkdirSync('audit', { recursive: true });
  writeFileSync('audit/instrument-render-audit.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ status: report.status, instruments: rows.length, failures: failures.length }, null, 2));
  if (failures.length) process.exitCode = 1;
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
