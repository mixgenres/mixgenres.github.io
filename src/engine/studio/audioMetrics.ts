export interface AudioMetrics {
  frames: number;
  durationSeconds: number;
  nonFiniteSamples: number;
  samplePeak: number;
  samplePeakDbfs: number | null;
  rmsDbfs: number | null;
  activeRmsDbfs: number | null;
  crestDb: number | null;
  dcOffset: number;
  clippedSampleFraction: number;
  activeWindowFraction: number;
  stereoCorrelation: number | null;
  monoRmsDbfs: number | null;
}

/** Sample-domain diagnostics before encoding. RMS is not LUFS; peak is not true peak. */
export function measureAudio(left: Float32Array, right: Float32Array, sampleRate: number): AudioMetrics {
  if (left.length !== right.length || !Number.isFinite(sampleRate) || sampleRate <= 0) throw new Error('Invalid PCM dimensions or sample rate');
  let peak = 0, squares = 0, sumL = 0, sumR = 0, squareL = 0, squareR = 0, cross = 0, mono = 0;
  let nonFiniteSamples = 0, clipped = 0, activeSquares = 0, activeFrames = 0, activeWindows = 0, windows = 0;
  const windowFrames = Math.max(1, Math.round(sampleRate * 0.1));
  for (let offset = 0; offset < left.length; offset += windowFrames) {
    const end = Math.min(left.length, offset + windowFrames);
    let energy = 0;
    for (let i = offset; i < end; i++) {
      const l = left[i], r = right[i];
      if (!Number.isFinite(l) || !Number.isFinite(r)) { nonFiniteSamples += Number(!Number.isFinite(l)) + Number(!Number.isFinite(r)); continue; }
      peak = Math.max(peak, Math.abs(l), Math.abs(r));
      clipped += Number(Math.abs(l) >= 1) + Number(Math.abs(r) >= 1);
      energy += l * l + r * r;
      sumL += l; sumR += r; squareL += l * l; squareR += r * r; cross += l * r;
      mono += ((l + r) / 2) ** 2;
    }
    squares += energy;
    windows++;
    if (energy / Math.max(1, 2 * (end - offset)) > 1e-10) {
      activeWindows++; activeSquares += energy; activeFrames += end - offset;
    }
  }
  const db = (amplitude: number) => amplitude > 0 ? 20 * Math.log10(amplitude) : null;
  const rms = Math.sqrt(squares / Math.max(1, 2 * left.length));
  const centeredCross = cross - sumL * sumR / Math.max(1, left.length);
  const denominator = Math.sqrt(Math.max(0, squareL - sumL * sumL / Math.max(1, left.length)) * Math.max(0, squareR - sumR * sumR / Math.max(1, left.length)));
  return {
    frames: left.length, durationSeconds: left.length / sampleRate, nonFiniteSamples,
    samplePeak: peak, samplePeakDbfs: db(peak), rmsDbfs: db(rms),
    activeRmsDbfs: db(Math.sqrt(activeSquares / Math.max(1, 2 * activeFrames))),
    crestDb: peak > 0 && rms > 0 ? 20 * Math.log10(peak / rms) : null,
    dcOffset: Math.max(Math.abs(sumL), Math.abs(sumR)) / Math.max(1, left.length),
    clippedSampleFraction: clipped / Math.max(1, 2 * left.length),
    activeWindowFraction: activeWindows / Math.max(1, windows),
    stereoCorrelation: denominator > 1e-20 ? Math.max(-1, Math.min(1, centeredCross / denominator)) : null,
    monoRmsDbfs: db(Math.sqrt(mono / Math.max(1, left.length))),
  };
}

export interface RenderDiagnostic {
  stage: 'stem' | 'bus' | 'output';
  id: string;
  instrumentId?: string;
  bus?: 'drums' | 'sub' | 'inst';
  metrics: AudioMetrics;
  trackLevel?: number;
  resolvedGain?: number;
  headroomTrim?: number;
  browserMasterApplied?: boolean;
  rawStem?: boolean;
  encodingPeakTrim?: number;
}
