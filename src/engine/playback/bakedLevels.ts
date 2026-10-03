import { bakedCalibrationGain, type BakedManifest, type BakedSample } from './bakedInstruments';

export interface BankLevelOptions {
  makeupGain: number;
  bass: boolean;
  centre: number;
  componentGains?: Map<number, number>;
}

export function measureBakedLevel(pcm: Float32Array, sample: BakedSample, sampleRate: number, percussive: boolean) {
  const from = Math.round((percussive ? .005 : .01) * sampleRate);
  const to = Math.min(sample.frames, Math.round((percussive ? .06 : .2) * sampleRate));
  let squares = 0, peak = 0;
  for (let i = 0; i < sample.frames; i++) {
    const value = pcm[sample.offset + i];
    if (!Number.isFinite(value)) throw new Error('Non-finite baked level');
    peak = Math.max(peak, Math.abs(value));
    if (i >= from && i < to) squares += value * value;
  }
  return { rms: Math.sqrt(squares / Math.max(1, to - from)), peak };
}

/** Calibrate each key/component against its normal velocity-100 attack.
 * Other layers retain their source dynamics and technique differences, with
 * bounded peaks and monotonically increasing normal-note dynamics. */
export function calibrateBakedLevels(manifest: BakedManifest, pcm: Float32Array, options: BankLevelOptions) {
  const measured = new Map(manifest.samples.map(sample => [sample, measureBakedLevel(pcm, sample, manifest.sampleRate, manifest.unpitched)]));
  const tones = manifest.samples.filter(sample => sample.action === 'tone' && sample.velocity === 100);
  if (!tones.length) throw new Error('No normal reference layer');
  const references = new Map(tones.map(sample => [sample.midi, measured.get(sample)!]));
  const wanted = options.bass ? options.centre : 60;
  const referenceMidi = tones.reduce((closest, sample) => Math.abs(sample.midi - wanted) < Math.abs(closest - wanted) ? sample.midi : closest, tones[0].midi);
  const rms = manifest.unpitched ? tones.map(sample => measured.get(sample)!.rms).sort((a, b) => a - b)[Math.floor(tones.length / 2)] : references.get(referenceMidi)!.rms;
  const target = options.bass ? .16 : .08;
  const peakLimit = options.bass ? .6 : .35;
  manifest.referenceMidi = referenceMidi;
  manifest.referenceRms = rms;
  manifest.calibrationTargetRms = target;
  manifest.calibrationPeakLimit = peakLimit;
  manifest.playbackGain = bakedCalibrationGain(rms, options.makeupGain, target);
  manifest.levelsVersion = 2;
  for (const sample of manifest.samples) {
    const reference = references.get(sample.midi);
    const current = measured.get(sample)!;
    if (!reference || reference.rms <= 1e-9 || current.peak <= 1e-9) throw new Error(`Missing/silent key reference: ${sample.midi}`);
    const componentGain = Math.min(2, options.componentGains?.get(sample.midi) ?? 1);
    const desired = target * componentGain;
    const baseGain = Math.min(desired / reference.rms, peakLimit / reference.peak);
    const velocity = sample.velocity / 100;
    const dynamicRmsLimit = reference.rms * baseGain * velocity * (sample.action === 'tone' ? 1 : 1.4);
    const gain = Math.min(baseGain, peakLimit * velocity / current.peak,
      dynamicRmsLimit / Math.max(1e-12, current.rms));
    sample.levelTrim = gain / (manifest.playbackGain * options.makeupGain);
    sample.nominalRms = current.rms * gain;
    sample.nominalPeak = current.peak * gain;
  }
}
