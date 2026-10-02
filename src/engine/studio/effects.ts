import type { SongStyle, StyleDSPProfile, TrackDSPProfile } from '../../data/sound/schema/style-dsp';

/**
 * Compute historically accurate distortion curves dynamically based on the requested circuit logic.
 * Translates analog tube, tape, fuzz, digital clipping, and console overdriving into wave-shaper transfer curves.
 *
 * @param amount Distortion drive intensity (0.0 to 1.0)
 * @param type Circuit wave-shaping topology ('tube' | 'tape' | 'fuzz' | 'digital' | 'analog_console' | 'clean')
 * @returns Float32Array transfer curve for Web Audio WaveShaperNode
 */
export function createDistortionCurve(amount: number, type: string = 'clean'): Float32Array {
  const k = amount * 100;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    switch (type) {
      case 'tube':
        // Soft asymmetric rounding (even-order harmonics)
        curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
        break;
      case 'tape':
        // Symmetric magnetic saturation (odd-order harmonics)
        curve[i] = Math.tanh(x * (1 + k / 10));
        break;
      case 'fuzz':
        // Extreme square rectifying, sluggish bias
        curve[i] = x < 0 ? -Math.pow(Math.abs(x), 0.1) : Math.pow(x, 0.1);
        break;
      case 'digital':
        // Hard clipping / foldback
        curve[i] = Math.max(-1, Math.min(1, x * (1 + k / 5)));
        break;
      case 'analog_console':
        // Overdriven mixing desk S-Curve
        curve[i] =
          (Math.exp(x * (1 + k / 20)) - Math.exp(-x * (1 + k / 20))) /
          (Math.exp(x * (1 + k / 20)) + Math.exp(-x * (1 + k / 20)));
        break;
      case 'clean':
      default:
        curve[i] = x;
    }
  }
  return curve;
}

export interface DSPNodeChain {
  input: GainNode;
  output: GainNode;
  dynamicsCompressor?: DynamicsCompressorNode;
  highPassFilter?: BiquadFilterNode;
  lowShelfFilter?: BiquadFilterNode;
  midPeakFilter?: BiquadFilterNode;
  highShelfFilter?: BiquadFilterNode;
  lowPassFilter?: BiquadFilterNode;
  driveNode?: WaveShaperNode;
  driveToneFilter?: BiquadFilterNode;
  reverbSend?: GainNode;
  reverbConvolver?: ConvolverNode;
  delaySend?: GainNode;
  delayNode?: DelayNode;
  updateProfile(profile: TrackDSPProfile | StyleDSPProfile): void;
  dispose(): void;
}

/**
 * Internal helper configuring dynamic processing chains per track or AudioNode.
 */
export function applyTrackDSP(profile: TrackDSPProfile, targetNode: AudioNode, context: BaseAudioContext): DSPNodeChain | undefined {
  if (!profile || !targetNode) return undefined;

  const input = context.createGain();
  const output = context.createGain();

  const compressor = context.createDynamicsCompressor();
  const hpFilter = context.createBiquadFilter();
  hpFilter.type = 'highpass';
  hpFilter.frequency.value = profile.eq?.highPassCutoff ?? 20;

  const lowShelf = context.createBiquadFilter();
  lowShelf.type = 'lowshelf';
  lowShelf.frequency.value = profile.eq?.lowShelf?.freq ?? 100;
  lowShelf.gain.value = profile.eq?.lowShelf?.gain ?? 0;

  const midPeak = context.createBiquadFilter();
  midPeak.type = 'peaking';
  midPeak.frequency.value = profile.eq?.midPeak?.freq ?? 1000;
  midPeak.gain.value = profile.eq?.midPeak?.gain ?? 0;
  midPeak.Q.value = profile.eq?.midPeak?.q ?? 1.0;

  const highShelf = context.createBiquadFilter();
  highShelf.type = 'highshelf';
  highShelf.frequency.value = profile.eq?.highShelf?.freq ?? 8000;
  highShelf.gain.value = profile.eq?.highShelf?.gain ?? 0;

  const lpFilter = context.createBiquadFilter();
  lpFilter.type = 'lowpass';
  lpFilter.frequency.value = profile.eq?.lowPassCutoff ?? 20000;

  const driveNode = context.createWaveShaper();
  driveNode.oversample = '4x';
  if (profile.distortion) {
    driveNode.curve = createDistortionCurve(profile.distortion.drive, profile.distortion.type);
    console.debug(`Applying Circuit: ${profile.distortion.circuitModel}`);
  }

  const driveToneFilter = context.createBiquadFilter();
  driveToneFilter.type = 'lowpass';
  driveToneFilter.frequency.value = profile.distortion?.tone ?? 20000;

  // Wet / Dry spatial routing
  const dryGain = context.createGain();
  const reverbSend = context.createGain();
  reverbSend.gain.value = profile.spatial?.reverbMix ?? 0;
  const delaySend = context.createGain();
  delaySend.gain.value = profile.spatial?.delayMix ?? 0;

  // Signal chain wiring:
  // input -> compressor -> hpFilter -> lowShelf -> midPeak -> highShelf -> lpFilter -> driveNode -> driveToneFilter -> (dry + sends) -> output
  input.connect(compressor);
  compressor.connect(hpFilter);
  hpFilter.connect(lowShelf);
  lowShelf.connect(midPeak);
  midPeak.connect(highShelf);
  highShelf.connect(lpFilter);
  lpFilter.connect(driveNode);
  driveNode.connect(driveToneFilter);

  driveToneFilter.connect(dryGain);
  dryGain.connect(output);
  driveToneFilter.connect(reverbSend);
  driveToneFilter.connect(delaySend);

  // Connect output to targetNode if provided
  try {
    output.connect(targetNode);
  } catch {
    // Already connected or virtual context
  }

  function updateProfile(trackProf: TrackDSPProfile | StyleDSPProfile) {
    const p: TrackDSPProfile = ('master' in trackProf && trackProf.master) ? trackProf.master : (trackProf as TrackDSPProfile);
    if (!p) return;

    if (p.dynamics) {
      compressor.ratio.setValueAtTime(p.dynamics.ratio ?? 4, context.currentTime);
      compressor.threshold.setValueAtTime(p.dynamics.threshold ?? -12, context.currentTime);
      compressor.attack.setValueAtTime((p.dynamics.attack ?? 10) / 1000, context.currentTime);
      compressor.release.setValueAtTime((p.dynamics.release ?? 100) / 1000, context.currentTime);
    }
    if (p.eq) {
      if (p.eq.highPassCutoff !== undefined) hpFilter.frequency.setValueAtTime(p.eq.highPassCutoff, context.currentTime);
      if (p.eq.lowShelf) {
        lowShelf.frequency.setValueAtTime(p.eq.lowShelf.freq, context.currentTime);
        lowShelf.gain.setValueAtTime(p.eq.lowShelf.gain, context.currentTime);
      }
      if (p.eq.midPeak) {
        midPeak.frequency.setValueAtTime(p.eq.midPeak.freq, context.currentTime);
        midPeak.gain.setValueAtTime(p.eq.midPeak.gain, context.currentTime);
        midPeak.Q.setValueAtTime(p.eq.midPeak.q ?? 1.0, context.currentTime);
      }
      if (p.eq.highShelf) {
        highShelf.frequency.setValueAtTime(p.eq.highShelf.freq, context.currentTime);
        highShelf.gain.setValueAtTime(p.eq.highShelf.gain, context.currentTime);
      }
      if (p.eq.lowPassCutoff !== undefined) lpFilter.frequency.setValueAtTime(p.eq.lowPassCutoff, context.currentTime);
    }
    if (p.distortion) {
      driveNode.curve = createDistortionCurve(p.distortion.drive, p.distortion.type);
      driveToneFilter.frequency.setValueAtTime(p.distortion.tone, context.currentTime);
    }
    if (p.spatial) {
      if (p.spatial.reverbMix !== undefined) reverbSend.gain.setValueAtTime(p.spatial.reverbMix, context.currentTime);
      if (p.spatial.delayMix !== undefined) delaySend.gain.setValueAtTime(p.spatial.delayMix, context.currentTime);
    }
  }

  return {
    input,
    output,
    dynamicsCompressor: compressor,
    highPassFilter: hpFilter,
    lowShelfFilter: lowShelf,
    midPeakFilter: midPeak,
    highShelfFilter: highShelf,
    lowPassFilter: lpFilter,
    driveNode,
    driveToneFilter,
    reverbSend,
    delaySend,
    updateProfile,
    dispose: () => {
      try {
        input.disconnect();
        compressor.disconnect();
        hpFilter.disconnect();
        lowShelf.disconnect();
        midPeak.disconnect();
        highShelf.disconnect();
        lpFilter.disconnect();
        driveNode.disconnect();
        driveToneFilter.disconnect();
        dryGain.disconnect();
        reverbSend.disconnect();
        delaySend.disconnect();
        output.disconnect();
      } catch {
        // Disconnected
      }
    },
  };
}

/**
 * Creates a real-time Web Audio DSP processing graph adhering to StyleDSPProfile or TrackDSPProfile.
 */
export function createStyleDSPGraph(context: BaseAudioContext, initialProfile?: StyleDSPProfile | TrackDSPProfile): DSPNodeChain {
  const dummyOutput = context.createGain();
  const prof: TrackDSPProfile = (initialProfile && 'master' in initialProfile && initialProfile.master)
    ? initialProfile.master
    : (initialProfile as TrackDSPProfile) || {};
  const chain = applyTrackDSP(prof, dummyOutput, context);
  if (chain) return chain;

  const input = context.createGain();
  const output = context.createGain();
  input.connect(output);
  return {
    input,
    output,
    updateProfile: () => {},
    dispose: () => {
      try {
        input.disconnect();
        output.disconnect();
      } catch {
        // Disconnected
      }
    },
  };
}

/**
 * Upgraded top-level function applying song style DSP processing across instrument track buses and master bus.
 */
export function applySongStyleProcessing(
  songStyle: SongStyle,
  context: BaseAudioContext,
  instrumentBuses?: Map<string, AudioNode>,
  masterBus?: AudioNode
) {
  const { dspProfile } = songStyle;
  if (!dspProfile) return;

  // 1. Instrument-Level DSP (The core of distinct genre timbres)
  if (dspProfile.instruments && instrumentBuses) {
    for (const [instrumentName, trackNode] of instrumentBuses.entries()) {
      const trackProfile = dspProfile.instruments[instrumentName];
      if (trackProfile) {
        applyTrackDSP(trackProfile, trackNode, context);
      }
    }
  }

  // 2. Master Bus DSP (Mix Glue & Final Limiting)
  if (dspProfile.master && masterBus) {
    applyTrackDSP(dspProfile.master, masterBus, context);
  } else if (masterBus) {
    const topLevelTrack: TrackDSPProfile = dspProfile;
    if (topLevelTrack.distortion || topLevelTrack.dynamics || topLevelTrack.eq) {
      applyTrackDSP(topLevelTrack, masterBus, context);
    }
  }
}

/**
 * Applies wave-shaper distortion and vintage saturation to audio buffers in offline MP3 export.
 */
export function processOfflineAudioDSP(
  left: Float32Array,
  right: Float32Array,
  dspProfile?: StyleDSPProfile
): void {
  if (!dspProfile) return;

  const trackProfile = dspProfile.master || (dspProfile.distortion ? (dspProfile as TrackDSPProfile) : undefined);
  if (!trackProfile?.distortion && !trackProfile?.vintage) return;

  const len = left.length;
  if (trackProfile.distortion && trackProfile.distortion.drive > 0) {
    const { drive, type } = trackProfile.distortion;
    const k = drive * 100;
    const deg = Math.PI / 180;

    for (let i = 0; i < len; i++) {
      const l = left[i];
      const r = right[i];

      switch (type) {
        case 'tube':
          left[i] = ((3 + k) * l * 20 * deg) / (Math.PI + k * Math.abs(l));
          right[i] = ((3 + k) * r * 20 * deg) / (Math.PI + k * Math.abs(r));
          break;
        case 'tape':
          left[i] = Math.tanh(l * (1 + k / 10));
          right[i] = Math.tanh(r * (1 + k / 10));
          break;
        case 'fuzz':
          left[i] = l < 0 ? -Math.pow(Math.abs(l), 0.1) : Math.pow(l, 0.1);
          right[i] = r < 0 ? -Math.pow(Math.abs(r), 0.1) : Math.pow(r, 0.1);
          break;
        case 'digital':
          left[i] = Math.max(-1, Math.min(1, l * (1 + k / 5)));
          right[i] = Math.max(-1, Math.min(1, r * (1 + k / 5)));
          break;
        case 'analog_console': {
          const factor = 1 + k / 20;
          left[i] = (Math.exp(l * factor) - Math.exp(-l * factor)) / (Math.exp(l * factor) + Math.exp(-l * factor));
          right[i] = (Math.exp(r * factor) - Math.exp(-r * factor)) / (Math.exp(r * factor) + Math.exp(-r * factor));
          break;
        }
        case 'clean':
        default:
          break;
      }
    }
  }

  // Vintage bitcrush or tape saturation
  if (trackProfile.vintage?.bitcrush && trackProfile.vintage.bitcrush < 16) {
    const bits = trackProfile.vintage.bitcrush;
    const step = Math.pow(2, bits - 1);
    for (let i = 0; i < len; i++) {
      left[i] = Math.round(left[i] * step) / step;
      right[i] = Math.round(right[i] * step) / step;
    }
  }
}

