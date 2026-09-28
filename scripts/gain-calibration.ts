// ITU-R BS.1770 Integrated Loudness Calibration Script
// Measures multi-pitch, multi-velocity matrices per instrument and model
// to generate balanced perceptual loudness weights.
//
// Usage: npx tsx scripts/gain-calibration.ts [--verify]

import OfflineRenderer from '@elemaudio/offline-renderer';
import { getLuthierModelForInstrument, LUTHIER_INSTRUMENT_MAP } from '../src/engine/audio/LuthierAPI';
import {
  defaultTrackParams,
  modelForInstrument,
  renderTrack,
  type VoiceState,
} from '../src/engine/elementary/elementaryEngine';

const SAMPLE_RATE = 44100;
const NOTE_ON_S = 1.0;
const TAIL_S = 0.8;
const TOTAL_S = NOTE_ON_S + TAIL_S;

// ITU-R BS.1770-4 standard K-weighting biquad coefficients for 44.1 kHz
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
  // Stage 1: High shelf filter (1681.97 Hz, +3.99 dB)
  const stage1 = new BiquadFilter(
    1.53512485958697, -2.69169618940638, 1.19839281085285,
    1.0, -1.69065929318241, 0.73248077421585
  );
  // Stage 2: Highpass filter (38.13 Hz, Q=0.5)
  const stage2 = new BiquadFilter(
    1.0, -2.0, 1.0,
    1.0, -1.99004745483398, 0.99007225036621
  );
  return stage2.process(stage1.process(signal));
}

function measureLufs(left: Float32Array, right: Float32Array, activeSamples: number): { lufs: number; linearEnergy: number } {
  const lSub = left.subarray(0, activeSamples);
  const rSub = right.subarray(0, activeSamples);
  const kL = applyKWeighting(lSub);
  const kR = applyKWeighting(rSub);

  let sumL = 0;
  let sumR = 0;
  for (let i = 0; i < kL.length; i++) {
    sumL += kL[i] * kL[i];
    sumR += kR[i] * kR[i];
  }
  const meanSq = (sumL + sumR) / (kL.length * 2);
  const linearEnergy = Math.sqrt(Math.max(1e-12, meanSq));
  const lufs = linearEnergy <= 1e-6 ? -120 : -0.691 + 10 * Math.log10(meanSq);
  return { lufs, linearEnergy };
}

async function renderNote(
  instrumentId: string,
  note: number,
  velocity: number,
  forceVolume?: number
): Promise<{ lufs: number; linearEnergy: number; peak: number }> {
  const luthier = getLuthierModelForInstrument(instrumentId);
  const model = modelForInstrument(instrumentId);
  const params = defaultTrackParams(instrumentId, luthier, model);
  if (forceVolume !== undefined) {
    params.volume = forceVolume;
  }

  const voice: VoiceState = {
    id: `${instrumentId}_calib`,
    note,
    velocity,
    gate: 1,
    contactPoint: 0.5,
  };
  const voices: VoiceState[] = [voice];

  const core = new (OfflineRenderer as any)();
  await core.initialize({ numInputChannels: 0, numOutputChannels: 2, sampleRate: SAMPLE_RATE });

  const totalSamples = Math.ceil(TOTAL_S * SAMPLE_RATE);
  const noteOffSample = Math.round(NOTE_ON_S * SAMPLE_RATE);
  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);

  const sync = async () => {
    const sig = renderTrack(`${instrumentId}_calib`, voices, params);
    await core.render(sig.left, sig.right);
  };
  await sync();

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

  let peak = 0;
  for (let i = 0; i < totalSamples; i++) {
    peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
  }

  const measurement = measureLufs(left, right, Math.round((NOTE_ON_S + 0.3) * SAMPLE_RATE));
  return { ...measurement, peak };
}

// Representative pitch matrix per instrument category
function getPitchesForInstrument(instId: string, _model: number): number[] {
  if (/bass|tuba|surdo|kick|contrabajo/.test(instId)) {
    return [36, 43, 48];
  }
  if (/piccolo|tin-whistle|glockenspiel|recorder/.test(instId)) {
    return [72, 79, 84];
  }
  if (/drum|conga|bongo|cajon|shaker|cowbell|hats|ride|palmas|tambourine|triangle|clave|woodblock/.test(instId)) {
    return [60];
  }
  return [48, 60, 72];
}

const REPRESENTATIVES: Record<number, string> = {
  0: 'guitar',
  2: 'electric-guitar',
  19: 'clavinet',
  20: 'harpsichord',
  21: 'electric-guitar',
  22: 'jazz-guitar',
  23: 'muted-guitar',
  24: 'distortion-guitar',
  25: 'overdrive-guitar',
  26: 'guitar-harmonics',
  3: 'bass',
  4: 'congas',
  6: 'violin',
  7: 'flute',
  8: 'marimba',
  9: 'synth',
  10: 'accordion',
  11: 'piano',
  12: 'voice',
  13: 'organ',
  14: 'rhodes',
  15: 'trumpet',
  16: 'tenor-sax',
  17: 'shaker',
  18: 'cowbell',
};

async function main() {
  const verify = process.argv.includes('--verify');
  console.log('=== ITU-R BS.1770 Integrated Loudness Calibration Matrix ===\n');

  const modelResults: Record<number, { id: string; meanEnergy: number; meanLufs: number }> = {};
  const instrumentOverrides: Record<string, { model: number; gainMultiplier: number; lufsDiff: number }> = {};

  // 1. Measure model representatives
  console.log('--- Measuring Model Representatives ---');
  for (const [mStr, repId] of Object.entries(REPRESENTATIVES)) {
    const model = Number(mStr);
    const pitches = getPitchesForInstrument(repId, model);
    const vels = [0.55, 0.82];
    let totalEnergy = 0;
    let count = 0;

    for (const p of pitches) {
      for (const v of vels) {
        const res = await renderNote(repId, p, v, verify ? undefined : 0.8);
        totalEnergy += res.linearEnergy;
        count++;
      }
    }
    const meanEnergy = totalEnergy / count;
    const meanLufs = -0.691 + 20 * Math.log10(meanEnergy);
    modelResults[model] = { id: repId, meanEnergy, meanLufs };
    console.log(`  Model ${String(model).padStart(2)} (${repId.padEnd(16)}): LUFS = ${meanLufs.toFixed(1)} dB`);
  }

  // Calculate target energy (median across model representatives)
  const allEnergies = Object.values(modelResults).map(r => r.meanEnergy).sort((a, b) => a - b);
  const targetEnergy = allEnergies[Math.floor(allEnergies.length / 2)];
  const targetLufs = -0.691 + 20 * Math.log10(targetEnergy);
  console.log(`\nTarget LUFS: ${targetLufs.toFixed(1)} dB (Linear Energy = ${targetEnergy.toFixed(5)})\n`);

  // Generate GAIN_BY_MODEL
  const gainByModel: Record<number, number> = {};
  for (const [mStr, r] of Object.entries(modelResults)) {
    const model = Number(mStr);
    const gain = Math.max(0.15, Math.min(30, targetEnergy / Math.max(1e-6, r.meanEnergy)));
    gainByModel[model] = Number(gain.toFixed(3));
  }

  // 2. Measure all individual instruments to discover per-instrument outliers/overrides
  console.log('--- Measuring Full Catalog for Per-Instrument Calibration ---');
  const allInstruments = Object.keys(LUTHIER_INSTRUMENT_MAP);

  for (const instId of allInstruments) {
    const model = modelForInstrument(instId);
    const baseModelGain = gainByModel[model] ?? 1.0;
    const pitches = getPitchesForInstrument(instId, model);
    const vels = [0.55, 0.82];

    let totalEnergy = 0;
    let count = 0;
    for (const p of pitches) {
      for (const v of vels) {
        // Render with the base model gain applied
        const res = await renderNote(instId, p, v, 0.8 * baseModelGain);
        totalEnergy += res.linearEnergy;
        count++;
      }
    }
    const instEnergy = totalEnergy / count;
    const instLufs = -0.691 + 20 * Math.log10(instEnergy);
    const lufsDiff = instLufs - targetLufs;

    // If an instrument deviates by more than ±1.8 dB from target even after model gain, create an override
    if (Math.abs(lufsDiff) > 1.8) {
      const correction = Math.pow(10, -lufsDiff / 20);
      const instrumentFinalGain = Number((baseModelGain * correction).toFixed(3));
      if (instrumentFinalGain >= 0.1 && instrumentFinalGain <= 35) {
        instrumentOverrides[instId.toLowerCase()] = {
          model,
          gainMultiplier: instrumentFinalGain,
          lufsDiff,
        };
      }
    }
  }

  console.log(`\nFound ${Object.keys(instrumentOverrides).length} instrument overrides needing trim.`);

  console.log('\n// ==========================================');
  console.log('// COPY INTO elementaryEngine.ts');
  console.log('// ==========================================\n');

  console.log('export const GAIN_BY_MODEL: Record<number, number> = {');
  for (const [mStr, g] of Object.entries(gainByModel)) {
    const rep = modelResults[Number(mStr)]?.id || '';
    console.log(`  ${mStr}: ${g.toFixed(3)}, // ${rep}`);
  }
  console.log('};\n');

  console.log('export const GAIN_BY_INSTRUMENT: Partial<Record<string, number>> = {');
  for (const [instId, ov] of Object.entries(instrumentOverrides)) {
    console.log(`  '${instId}': ${ov.gainMultiplier.toFixed(3)}, // ${ov.lufsDiff > 0 ? '+' : ''}${ov.lufsDiff.toFixed(1)} dB deviation from model ${ov.model}`);
  }
  console.log('};');

  if (process.argv.includes('--apply')) {
    console.log('\n--- Applying Calibration to Instrument Definitions ---');
    const fs = await import('fs');
    const path = await import('path');
    const defsDir = path.resolve(process.cwd(), 'src/data/instruments/definitions');
    if (fs.existsSync(defsDir)) {
      const files = fs.readdirSync(defsDir);
      let updatedCount = 0;
      for (const file of files) {
        if (!file.endsWith('.ts')) continue;
        const filePath = path.join(defsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Extract instrument ID
        const idMatch = content.match(/id:\s*["']([^"']+)["']/);
        if (idMatch) {
          const id = idMatch[1].toLowerCase();
          const model = modelForInstrument(id);
          const override = instrumentOverrides[id];
          const gain = override ? override.gainMultiplier : (gainByModel[model] ?? 1.0);

          if (/makeupGain:\s*[\d.]+/.test(content)) {
            content = content.replace(/makeupGain:\s*[\d.]+/, `makeupGain: ${gain.toFixed(3)}`);
          } else {
            content = content.replace(/(elementaryModel:\s*\d+,)/, `$1\n  makeupGain: ${gain.toFixed(3)},`);
          }
          fs.writeFileSync(filePath, content, 'utf8');
          updatedCount++;
        }
      }
      console.log(`Updated ${updatedCount} instrument definition files with ITU-R BS.1770 calibrated makeupGain.`);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
