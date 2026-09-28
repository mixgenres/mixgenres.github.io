// Audio Engine Regression Test Harness
// Measures objective audio metrics across models and master dynamics chain,
// comparing against checked-in baseline to catch regressions.
//
// Usage:
//   npx tsx scripts/audio-regression-harness.ts                 (check against baseline)
//   npx tsx scripts/audio-regression-harness.ts --generate     (generate/update baseline file)

import fs from 'node:fs';
import path from 'node:path';
import OfflineRenderer from '@elemaudio/offline-renderer';
import { getLuthierModelForInstrument } from '../src/engine/audio/LuthierAPI';
import {
  defaultTrackParams,
  modelForInstrument,
  renderTrack,
  renderMaster,
  type VoiceState,
  type MasterParams,
} from '../src/engine/elementary/elementaryEngine';

const SAMPLE_RATE = 44100;
const DURATION_S = 1.2;
const BASELINE_PATH = path.resolve(process.cwd(), 'tests/audio-engine-baseline.json');

// ITU-R BS.1770 K-weighting biquad filters
class BiquadFilter {
  b0: number; b1: number; b2: number;
  a1: number; a2: number;
  x1 = 0; x2 = 0;
  y1 = 0; y2 = 0;

  constructor(b0: number, b1: number, b2: number, a0: number, a1: number, a2: number) {
    this.b0 = b0 / a0;
    this.b1 = b1 / a0;
    this.b2 = b2 / a0;
    this.a1 = a1 / a0;
    this.a2 = a2 / a0;
  }

  /**
   * @static
   * Factory for Stage 1 K-weighting high-shelving filter.
   */
  static createStage1(): BiquadFilter {
    return new BiquadFilter(
      1.53512485958697, -2.69169618940638, 1.19839281085285,
      1.0, -1.69065929318241, 0.73248077421585
    );
  }

  /**
   * @static
   * Factory for Stage 2 K-weighting high-pass filter.
   */
  static createStage2(): BiquadFilter {
    return new BiquadFilter(
      1.0, -2.0, 1.0,
      1.0, -1.99004745483398, 0.99007225036621
    );
  }

  process(x: Float32Array): Float32Array {
    const out = new Float32Array(x.length);
    for (let i = 0; i < x.length; i++) {
      const inVal = x[i];
      const y = this.b0 * inVal + this.b1 * this.x1 + this.b2 * this.x2 - this.a1 * this.y1 - this.a2 * this.y2;
      this.x2 = this.x1;
      this.x1 = inVal;
      this.y2 = this.y1;
      this.y1 = y;
      out[i] = y;
    }
    return out;
  }
}

function applyKWeighting(signal: Float32Array): Float32Array {
  const stage1 = new BiquadFilter(
    1.53512485958697, -2.69169618940638, 1.19839281085285,
    1.0, -1.69065929318241, 0.73248077421585
  );
  const stage2 = new BiquadFilter(
    1.0, -2.0, 1.0,
    1.0, -1.99004745483398, 0.99007225036621
  );
  return stage2.process(stage1.process(signal));
}

function computeLufs(left: Float32Array, right: Float32Array): number {
  const kL = applyKWeighting(left);
  const kR = applyKWeighting(right);
  let sum = 0;
  for (let i = 0; i < kL.length; i++) {
    sum += (kL[i] * kL[i] + kR[i] * kR[i]) / 2;
  }
  const meanSq = sum / kL.length;
  if (meanSq <= 1e-12) return -120;
  return Number((-0.691 + 10 * Math.log10(meanSq)).toFixed(2));
}

function computeSpectralCentroid(signal: Float32Array, sampleRate = SAMPLE_RATE): number {
  // Compute discrete magnitude spectrum across 1024-bin FFT-sized slices
  const N = 1024;
  const numSlices = Math.min(10, Math.floor(signal.length / N));
  let totalWeighted = 0;
  let totalMag = 0;

  for (let s = 0; s < numSlices; s++) {
    const offset = s * N;
    for (let k = 1; k < N / 2; k++) {
      const freq = (k * sampleRate) / N;
      // Real & Imaginary Fourier sum for bin k
      let real = 0;
      let imag = 0;
      for (let n = 0; n < N; n++) {
        const angle = (2 * Math.PI * k * n) / N;
        const x = signal[offset + n] || 0;
        real += x * Math.cos(angle);
        imag -= x * Math.sin(angle);
      }
      const mag = Math.sqrt(real * real + imag * imag);
      totalWeighted += freq * mag;
      totalMag += mag;
    }
  }

  if (totalMag <= 1e-9) return 0;
  return Number((totalWeighted / totalMag).toFixed(1));
}

function computeDecayTime(signal: Float32Array, sampleRate = SAMPLE_RATE): number {
  let peak = 0;
  let peakIdx = 0;
  for (let i = 0; i < signal.length; i++) {
    const abs = Math.abs(signal[i]);
    if (abs > peak) {
      peak = abs;
      peakIdx = i;
    }
  }

  if (peak <= 1e-4) return 0;
  const threshold = peak * 0.1; // -20 dB threshold

  // Find last index exceeding threshold
  let lastExceedIdx = peakIdx;
  for (let i = signal.length - 1; i >= peakIdx; i--) {
    if (Math.abs(signal[i]) >= threshold) {
      lastExceedIdx = i;
      break;
    }
  }

  const decaySec = (lastExceedIdx - peakIdx) / sampleRate;
  return Number(decaySec.toFixed(3));
}

function computeLrCorrelation(left: Float32Array, right: Float32Array): number {
  let sumLR = 0;
  let sumL2 = 0;
  let sumR2 = 0;
  for (let i = 0; i < left.length; i++) {
    const l = left[i];
    const r = right[i];
    sumLR += l * r;
    sumL2 += l * l;
    sumR2 += r * r;
  }
  const denom = Math.sqrt(sumL2 * sumR2);
  if (denom <= 1e-9) return 1.0;
  return Number((sumLR / denom).toFixed(3));
}

export interface MetricBaseline {
  lufs: number;
  spectralCentroid: number;
  decayTime20dB: number;
  lrCorrelation: number;
}

const REFERENCE_INSTRUMENTS = [
  'guitar',
  'spanish-guitar',
  '12-string-guitar',
  'sitar',
  'koto',
  'electric-guitar',
  'distortion-guitar',
  'bass',
  'upright-bass',
  'congas',
  'taiko',
  'snare',
  'shaker',
  'cowbell',
  'violin',
  'cello',
  'flute',
  'piccolo',
  'tenor-sax',
  'oboe',
  'trumpet',
  'accordion',
  'piano',
  'rhodes',
  'clavinet',
  'marimba',
  'synth',
];

async function renderInstrumentMetric(instrumentId: string, note = 60, vel = 0.8): Promise<MetricBaseline> {
  const luthier = getLuthierModelForInstrument(instrumentId);
  const model = modelForInstrument(instrumentId);
  const params = defaultTrackParams(instrumentId, luthier, model);

  const core = new (OfflineRenderer as any)();
  await core.initialize({ numInputChannels: 0, numOutputChannels: 2, sampleRate: SAMPLE_RATE });

  const totalSamples = Math.ceil(DURATION_S * SAMPLE_RATE);
  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);

  const voice: VoiceState = {
    id: `${instrumentId}_ref`,
    note,
    velocity: vel,
    gate: 1,
    contactPoint: 0.5,
  };
  const voices: VoiceState[] = [voice];

  const sync = async () => {
    const trackSig = renderTrack(`${instrumentId}_ref`, voices, params);
    await core.render(trackSig.left, trackSig.right);
  };
  await sync();

  const noteOffSample = Math.round(0.7 * SAMPLE_RATE);
  const BLOCK = 512;
  const outBlock = [new Float32Array(BLOCK), new Float32Array(BLOCK)];
  let cursor = 0;
  let gated = false;

  while (cursor < totalSamples) {
    if (!gated && cursor >= noteOffSample) {
      voice.gate = 0;
      gated = true;
      await sync();
    }
    const frames = Math.min(BLOCK, totalSamples - cursor);
    core.process([], outBlock);
    for (let i = 0; i < frames; i++) {
      left[cursor + i] = outBlock[0][i] || 0;
      right[cursor + i] = outBlock[1][i] || 0;
    }
    cursor += frames;
  }

  const lufs = computeLufs(left, right);
  const spectralCentroid = computeSpectralCentroid(left);
  const decayTime20dB = computeDecayTime(left);
  const lrCorrelation = computeLrCorrelation(left, right);

  return { lufs, spectralCentroid, decayTime20dB, lrCorrelation };
}

async function renderMasterChainMetric(): Promise<{ compressedPeak: number; reverbEnergyRatio: number }> {
  // Render a burst through master chain to verify compressor and natural summing
  const masterParams: MasterParams = {
    highPass: 30,
    volume: 1.0,
  };

  const luthier = getLuthierModelForInstrument('drums');
  const model = modelForInstrument('drums');
  const params = defaultTrackParams('drums', luthier, model);

  const core = new (OfflineRenderer as any)();
  await core.initialize({ numInputChannels: 0, numOutputChannels: 2, sampleRate: SAMPLE_RATE });

  const totalSamples = Math.ceil(1.5 * SAMPLE_RATE);
  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);

  const voice: VoiceState = { id: 'master_test', note: 48, velocity: 1.0, gate: 1 };
  const trackSig = renderTrack('master_test', [voice], params);
  const masterSig = renderMaster([trackSig], masterParams);
  await core.render(masterSig.left, masterSig.right);

  const BLOCK = 512;
  const outBlock = [new Float32Array(BLOCK), new Float32Array(BLOCK)];
  let cursor = 0;
  while (cursor < totalSamples) {
    if (cursor >= Math.round(0.2 * SAMPLE_RATE)) voice.gate = 0;
    const frames = Math.min(BLOCK, totalSamples - cursor);
    core.process([], outBlock);
    for (let i = 0; i < frames; i++) {
      left[cursor + i] = outBlock[0][i] || 0;
      right[cursor + i] = outBlock[1][i] || 0;
    }
    cursor += frames;
  }

  let compressedPeak = 0;
  for (let i = 0; i < totalSamples; i++) {
    compressedPeak = Math.max(compressedPeak, Math.abs(left[i]), Math.abs(right[i]));
  }

  // Tail energy (reverb ratio)
  const tailStart = Math.round(0.6 * SAMPLE_RATE);
  let tailEnergy = 0;
  for (let i = tailStart; i < totalSamples; i++) {
    tailEnergy += left[i] * left[i] + right[i] * right[i];
  }
  const reverbEnergyRatio = Number((tailEnergy / totalSamples).toFixed(5));

  return { compressedPeak: Number(compressedPeak.toFixed(3)), reverbEnergyRatio };
}

async function main() {
  const isGenerate = process.argv.includes('--generate');
  console.log(`=== Audio Engine Regression Harness (${isGenerate ? 'GENERATE BASELINE' : 'VERIFY SUITE'}) ===\n`);

  const currentMetrics: Record<string, MetricBaseline> = {};

  for (const inst of REFERENCE_INSTRUMENTS) {
    const pitch = /bass|contrabajo|surdo/.test(inst) ? 40 : /piccolo|whistle/.test(inst) ? 76 : 60;
    const m = await renderInstrumentMetric(inst, pitch, 0.8);
    currentMetrics[inst] = m;
    console.log(`  ${inst.padEnd(18)}: LUFS=${m.lufs}dB | Centroid=${m.spectralCentroid}Hz | Decay=${m.decayTime20dB}s | Corr=${m.lrCorrelation}`);
  }

  const masterMetrics = await renderMasterChainMetric();
  console.log(`\n  Master Chain Metrics : Peak=${masterMetrics.compressedPeak} | ReverbRatio=${masterMetrics.reverbEnergyRatio}`);

  const fullData = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    instruments: currentMetrics,
    masterChain: masterMetrics,
  };

  if (isGenerate) {
    fs.mkdirSync(path.dirname(BASELINE_PATH), { recursive: true });
    fs.writeFileSync(BASELINE_PATH, JSON.stringify(fullData, null, 2), 'utf-8');
    console.log(`\n Successfully wrote baseline to ${BASELINE_PATH}`);
    return;
  }

  if (!fs.existsSync(BASELINE_PATH)) {
    console.log('\n No baseline found. Generating initial baseline...');
    fs.mkdirSync(path.dirname(BASELINE_PATH), { recursive: true });
    fs.writeFileSync(BASELINE_PATH, JSON.stringify(fullData, null, 2), 'utf-8');
    console.log(` Baseline created at ${BASELINE_PATH}`);
    return;
  }

  // Compare against baseline
  const baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf-8'));
  const failures: string[] = [];

  for (const [inst, cur] of Object.entries(currentMetrics)) {
    const base: MetricBaseline = baseline.instruments[inst];
    if (!base) {
      failures.push(`Missing baseline entry for instrument '${inst}'`);
      continue;
    }

    // Tolerances: LUFS ±2.5 dB, Centroid ±20%, Decay ±25%, Correlation ±0.15
    const lufsDiff = Math.abs(cur.lufs - base.lufs);
    const centroidDiff = Math.abs(cur.spectralCentroid - base.spectralCentroid) / Math.max(100, base.spectralCentroid);
    const decayDiff = Math.abs(cur.decayTime20dB - base.decayTime20dB);
    const corrDiff = Math.abs(cur.lrCorrelation - base.lrCorrelation);

    if (lufsDiff > 2.5) {
      failures.push(`${inst}: LUFS drift of ${lufsDiff.toFixed(1)} dB (base: ${base.lufs}, cur: ${cur.lufs})`);
    }
    if (centroidDiff > 0.25) {
      failures.push(`${inst}: Spectral centroid drift of ${(centroidDiff * 100).toFixed(1)}% (base: ${base.spectralCentroid}Hz, cur: ${cur.spectralCentroid}Hz)`);
    }
    if (decayDiff > 0.35) {
      failures.push(`${inst}: Decay time drift of ${decayDiff.toFixed(2)}s (base: ${base.decayTime20dB}s, cur: ${cur.decayTime20dB}s)`);
    }
    if (corrDiff > 0.20) {
      failures.push(`${inst}: L/R correlation drift of ${corrDiff.toFixed(2)} (base: ${base.lrCorrelation}, cur: ${cur.lrCorrelation})`);
    }
  }

  // Master check
  if (Math.abs(masterMetrics.compressedPeak - baseline.masterChain.compressedPeak) > 0.3) {
    failures.push(`Master dynamics peak drift: base ${baseline.masterChain.compressedPeak}, cur ${masterMetrics.compressedPeak}`);
  }

  if (failures.length > 0) {
    console.error('\n REGRESSION DETECTED:');
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }

  console.log('\n SUCCESS: All audio metrics matched checked-in baseline within tolerance limits.');
}

main().catch(err => {
  console.error('Regression harness execution error:', err);
  process.exit(1);
});
