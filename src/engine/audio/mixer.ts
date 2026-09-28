/* --- Master Signal Chain & Ensemble Balance --- */

import type { MixCharacter } from '../../data/styles/contracts';
import { StereoFieldManager } from './panning';
import type { AcousticSpace } from '../../data/types';
import type { Track } from '../../types';

export class Compressor {
  public threshold: number;
  public ratio: number;
  public release: number;
  public sidechain: any;

  constructor(options: { threshold?: number; ratio?: number; release?: number } = {}) {
    this.threshold = options.threshold ?? -14;
    this.ratio = options.ratio ?? 2.5;
    this.release = options.release ?? 0.3;
  }

  public connect(node: any) {
    return node;
  }

  public setSidechain(params: { ratio: number; attack: number; release: number }) {
    this.ratio = params.ratio;
  }
}

export class MasterMixer {
  public masterBus: GainNode;
  public instrumentBus: GainNode;
  public drumBus: GainNode;
  public bassBus: GainNode;
  private compressor: any;
  private limiter: any;
  private ctx: AudioContext;
  private stereoField: StereoFieldManager;
  private sidechainAmount: number = 0;

  constructor(context: AudioContext) {
    this.ctx = context;
    this.stereoField = new StereoFieldManager();

    this.masterBus = context.createGain();
    this.instrumentBus = context.createGain();
    this.drumBus = context.createGain();
    this.bassBus = context.createGain();

    // Restored full dynamic range
    this.masterBus.gain.value = 0.85;
    this.instrumentBus.gain.value = 0.9;
    this.drumBus.gain.value = 1.0;

    // Transparent bus glue
    this.compressor = new Compressor({ threshold: -14, ratio: 2.5, release: 0.3 });

    // Mastering Limiter
    this.limiter = context.createDynamicsCompressor();
    this.limiter.threshold.value = -0.5;
    this.limiter.ratio.value = 20.0;
    this.limiter.attack.value = 0.001;

    this.instrumentBus.connect(this.compressor as any);
    this.drumBus.connect(this.compressor as any);
    this.bassBus.connect(this.compressor as any);

    this.compressor.connect(this.limiter);
    this.limiter.connect(this.masterBus);
  }

  public activateHarmonicExciter(_drive: number) {
    // Optional harmonic saturation
  }

  public configureGenreMix(space: AcousticSpace) {
    const tapeSaturation = space.analogWarmth || 0.0;
    if (tapeSaturation > 0) this.activateHarmonicExciter(tapeSaturation);

    this.sidechainAmount = space.sidechainDucking || 0.0;
    if (this.sidechainAmount > 0) {
      if (this.compressor.sidechain) {
        this.bassBus.connect(this.compressor.sidechain);
      }
      this.compressor.setSidechain({
        ratio: 4 + this.sidechainAmount * 6,
        attack: 0.005,
        release: 0.1,
      });
    }
  }

  public assignTrackToBus(track: Track | { instrument: string }): GainNode {
    const trackGain = this.ctx.createGain();
    const panner = this.ctx.createStereoPanner();

    panner.pan.value = this.stereoField.resolveInstrumentPan(track.instrument);
    trackGain.connect(panner);

    if (track.instrument.includes('drum') || track.instrument.includes('perc')) {
      panner.connect(this.drumBus);
    } else if (track.instrument.includes('bass')) {
      panner.connect(this.bassBus);
    } else {
      panner.connect(this.instrumentBus);
    }

    return trackGain;
  }
}

export interface MixRoleProfile {
  level: number;
  pan: number;
  width: number;
  densityLimit: number;
}

export const DEFAULT_ROLE_PROFILES: Record<string, MixRoleProfile> = {
  bass: { level: 0.85, pan: 0.0, width: 0.0, densityLimit: 8 },
  drums: { level: 0.88, pan: 0.0, width: 0.3, densityLimit: 16 },
  comp: { level: 0.72, pan: -0.2, width: 0.4, densityLimit: 8 },
  harmony: { level: 0.70, pan: 0.2, width: 0.4, densityLimit: 8 },
  lead: { level: 0.90, pan: 0.0, width: 0.2, densityLimit: 12 },
  melody: { level: 0.90, pan: 0.0, width: 0.2, densityLimit: 12 },
  pad: { level: 0.65, pan: 0.1, width: 0.6, densityLimit: 4 },
  percussion: { level: 0.75, pan: 0.25, width: 0.4, densityLimit: 16 },
};

export const ROLE_DB_PROFILES: Record<string, number> = {
  bass: -3.0,
  lead: -1.5,
  melody: -1.5,
  pad: -4.0,
  comp: -3.5,
  harmony: -3.5,
  drums: -2.0,
  percussion: -2.5,
};

// Genre-specific mixing rules to properly balance out-of-genre instruments.
// Ensures a synth dropped into Flamenco sits correctly in the acoustic space,
// or an orchestral string in Electronic EDM doesn't get buried.
export const GENRE_MIX_OFFSETS: Record<string, Record<string, number>> = {
  flamenco: { lead: 1.5, comp: 2.0, bass: -2.5, pad: -4.0 },
  electronic: { bass: 3.0, lead: 0.0, comp: -1.5, pad: 1.0 },
  jazz: { lead: 1.0, bass: 1.0, comp: -0.5, pad: -3.0 },
  rock: { comp: 2.0, bass: 1.5, lead: 1.0, pad: -2.0 },
  orchestral: { pad: 2.0, lead: 0.0, comp: 0.0, bass: 0.0 },
};

export function getRoleGainLinear(role: string, genre: string = 'default', instrumentId?: string): number {
  const r = (role || '').toLowerCase();
  const baseDb = ROLE_DB_PROFILES[r] ?? -3.0;
  const genreOffsets = GENRE_MIX_OFFSETS[genre.toLowerCase()] || {};
  const offsetDb = genreOffsets[r] ?? 0.0;
  const id = (instrumentId ?? '').toLowerCase();
  let instrumentTrimDb = 0;
  if (id === 'upright-bass') instrumentTrimDb = /electronic|house|disco|drum-and-bass|uk-bass|reggaeton/.test(genre.toLowerCase()) ? 0 : -2.5;
  else if (id === 'bass') instrumentTrimDb = /electronic|house|disco|drum-and-bass|uk-bass|reggaeton/.test(genre.toLowerCase()) ? 0 : -1.5;
  else if (id === 'slap-bass') instrumentTrimDb = -1.0;
  else if (id === 'piano') instrumentTrimDb = -0.8;
  else if (id === 'bandoneon') instrumentTrimDb = -0.5;
  // Combine structural role, genre mix, and instrument-specific gain staging.
  return Math.pow(10, (baseDb + offsetDb + instrumentTrimDb) / 20);
}

export function roleProfileForGenre(role: string, mixCharacter?: MixCharacter): MixRoleProfile {
  const base = DEFAULT_ROLE_PROFILES[role] || { level: 0.8, pan: 0, width: 0.3, densityLimit: 8 };
  if (!mixCharacter) return base;

  let levelAdj = 0;
  if (role === 'bass' || role === 'drums' || role === 'percussion') {
    levelAdj = (mixCharacter.bassForward - 0.5) * 0.15;
  } else {
    levelAdj = (0.5 - mixCharacter.bassForward) * 0.08;
  }

  const widthFactor = 0.5 + mixCharacter.width * 0.8;
  return {
    ...base,
    level: Math.max(0.2, Math.min(1.0, base.level + levelAdj)),
    width: Math.max(0.0, Math.min(1.0, base.width * widthFactor)),
  };
}

export interface MasterChain {
  input: GainNode;
  drumBus: GainNode;
  instBus: GainNode;
  subBus: GainNode;
  output: GainNode;
  tap: GainNode;
  setVolume(v: number): void;
  setMixCharacter(char: MixCharacter, genreId?: string): void;
  dispose(): void;
}

/** Saturation curve generator: Tape (smooth), Tube (asymmetric 2nd harmonic), Hard-Clip (aggressive) */
function saturationCurve(drive: number, type: 'tape' | 'tube' | 'hard-clip' = 'tape'): Float32Array {
  const n = 2048;
  const curve = new Float32Array(n);
  const amount = Math.max(0, Math.min(1, drive));

  for (let i = 0; i < n; i++) {
    const x = (i * 2) / (n - 1) - 1;
    if (type === 'hard-clip') {
      const thresh = 1.0 - amount * 0.4;
      curve[i] = Math.max(-thresh, Math.min(thresh, x * (1 + amount * 1.5)));
    } else if (type === 'tube') {
      // Asymmetric saturation adding warm 2nd harmonics
      const asym = x + 0.2 * amount * (x * x - 1);
      curve[i] = Math.tanh(asym * (1 + amount * 1.5));
    } else {
      // Tape saturation: smooth polynomial compression
      const gain = 1 + amount * 0.6;
      const soft = x * gain;
      curve[i] = soft / Math.sqrt(1 + soft * soft);
    }
  }
  return curve;
}

export function calculateSidechainDepth(char?: MixCharacter): number {
  if (!char) return 0.5;
  if (char.bassForward >= 0.75) return 1.0;
  if (char.bassForward <= 0.45) return 0.0;
  return Math.max(0, Math.min(1, (char.bassForward - 0.45) / 0.3));
}

export function calculateDrumKnock(char?: MixCharacter): number {
  if (!char) return 0.2;
  return Math.max(0.05, Math.min(0.85, (char.bassForward - 0.3) * 1.2));
}

export function calculateAcousticCrosstalk(char?: MixCharacter): number {
  if (!char) return 0.02;
  if (char.dryness < 0.6 && char.bassForward < 0.6) {
    return Math.max(0.02, Math.min(0.08, (0.6 - char.dryness) * 0.15));
  }
  return 0.005;
}

export function createMasterChain(ctx: BaseAudioContext, initialMixCharacter?: MixCharacter, genreId?: string): MasterChain {
  // 1. Bus inputs
  const drumBus = ctx.createGain();
  drumBus.gain.value = 1.0;

  const instBus = ctx.createGain();
  instBus.gain.value = 1.0;

  const subBus = ctx.createGain();
  subBus.gain.value = 1.0;

  const input = ctx.createGain();
  input.gain.value = 1.0;
  input.connect(instBus);

  const isSalsa = /salsa/i.test(genreId || '');

  // 2. Drum Bus Saturation ("Knock") with Saturation Type
  const drumShaper = ctx.createWaveShaper();
  const initialKnock = calculateDrumKnock(initialMixCharacter);
  const initialSatType = initialMixCharacter?.saturationType ?? 'tape';
  drumShaper.curve = saturationCurve(initialKnock, initialSatType);
  drumShaper.oversample = '2x';

  // 3. Low-end handling: keep the sub bus full-range so acoustic bass instruments
  // retain pluck, body and harmonics. A small parallel sub enhancement is used only
  // for genuinely sub-oriented tracks.
  const subFilter = ctx.createBiquadFilter();
  subFilter.type = 'lowpass';
  subFilter.frequency.value = 90;
  subFilter.Q.value = 0.7;

  const subEnhanceGain = ctx.createGain();
  subEnhanceGain.gain.value = 0.16;

  // 4. Real kick -> low-end ducking.  Web Audio has no sidechain input on
  // DynamicsCompressorNode, so build a small audio-rate envelope detector:
  // kick low-pass -> absolute-value waveshaper -> smoothing -> inverse depth
  // curve -> AudioParam.  This is a true control signal, not an audio-route
  // concrete signal route, and therefore works identically in live and OfflineAudioContext.
  const kickFilter = ctx.createBiquadFilter();
  kickFilter.type = 'lowpass';
  kickFilter.frequency.value = 105;
  kickFilter.Q.value = 0.9;

  const kickAbs = ctx.createWaveShaper();
  const absCurve = new Float32Array(1025);
  for (let i = 0; i < absCurve.length; i++) {
    const x = (i / (absCurve.length - 1)) * 2 - 1;
    absCurve[i] = Math.abs(x);
  }
  kickAbs.curve = absCurve;
  kickAbs.oversample = '2x';

  const kickEnvelope = ctx.createBiquadFilter();
  kickEnvelope.type = 'lowpass';
  kickEnvelope.frequency.value = 42;
  kickEnvelope.Q.value = 0.5;

  const kickDuckCurve = ctx.createWaveShaper();
  const duckDepth = /electronic|electrotango|tango-electronico|house|techno|edm/i.test(genreId || '')
    ? 0.34
    : /tango|milonga|vals/i.test(genreId || '')
      ? 0.16
      : Math.max(0.08, (initialMixCharacter?.sidechainDucking ?? 0.12) * 0.45);
  const duckCurve = new Float32Array(1025);
  for (let i = 0; i < duckCurve.length; i++) {
    const x = (i / (duckCurve.length - 1)) * 2 - 1;
    const level = Math.max(0, Math.min(1, x));
    // Never duck below 55% of the low-end signal.  The curve is deliberately
    // gentle for acoustic tango, stronger for electrotango/electronic styles.
    duckCurve[i] = 1 - duckDepth * level;
  }
  kickDuckCurve.curve = duckCurve;
  kickDuckCurve.oversample = '2x';

  drumBus.connect(kickFilter);
  kickFilter.connect(kickAbs);
  kickAbs.connect(kickEnvelope);
  kickEnvelope.connect(kickDuckCurve);

  // The low band of the instrument/sub mix is ducked; the mid/high band is
  // untouched.  This keeps kick clarity without pumping piano/bandoneon
  // transients or removing an acoustic bass's harmonic identity.
  const instLow = ctx.createBiquadFilter();
  instLow.type = 'lowpass';
  instLow.frequency.value = 145;
  instLow.Q.value = 0.65;
  const instHigh = ctx.createBiquadFilter();
  instHigh.type = 'highpass';
  instHigh.frequency.value = 115;
  instHigh.Q.value = 0.65;
  const lowDuckGain = ctx.createGain();
  lowDuckGain.gain.value = 1.0;
  const lowDuckWet = ctx.createGain();
  lowDuckWet.gain.value = 1.0;
  kickDuckCurve.connect(lowDuckGain.gain);
  instBus.connect(instLow);
  instBus.connect(instHigh);
  instLow.connect(lowDuckGain);
  lowDuckGain.connect(lowDuckWet);

  const subDuckingGain = ctx.createGain();
  subDuckingGain.gain.value = 1.0;
  kickDuckCurve.connect(subDuckingGain.gain);
  subBus.connect(subDuckingGain);

  subBus.connect(subEnhanceGain);
  subBus.connect(subFilter);
  subFilter.connect(subEnhanceGain);

  // 5. Stereo room: several short, decorrelated feedback lines replace the old
  // four-delay series ring. This remains a small Web Audio graph but produces a
  // substantially denser late field with asymmetric stereo reflections.
  const initialRoomDepth = isSalsa ? 0.07 : (initialMixCharacter ? (1.0 - initialMixCharacter.dryness) * 0.55 : 0.30);
  const roomInput = ctx.createGain();
  const roomPreDelay = ctx.createDelay(0.25);
  roomPreDelay.delayTime.value = 0.012;
  roomInput.connect(roomPreDelay);

  const roomSum = ctx.createGain();
  const roomDelays = [0.013, 0.019, 0.029, 0.037, 0.053, 0.071].map((time, i) => {
    const delay = ctx.createDelay(0.5);
    delay.delayTime.value = time;
    const feedback = ctx.createGain();
    feedback.gain.value = [0.34, 0.31, 0.36, 0.29, 0.33, 0.27][i];
    const damping = ctx.createBiquadFilter();
    damping.type = 'lowpass';
    damping.frequency.value = 3200 - i * 180;
    const wet = ctx.createGain();
    wet.gain.value = 0.55;
    const panner = ctx.createStereoPanner();
    panner.pan.value = [-0.78, 0.62, -0.46, 0.74, -0.24, 0.36][i];

    roomPreDelay.connect(delay);
    delay.connect(damping);
    damping.connect(feedback);
    feedback.connect(delay);
    damping.connect(wet);
    wet.connect(panner);
    panner.connect(roomSum);
    return { delay, feedback, damping, wet, panner };
  });

  const revMix = ctx.createGain();
  revMix.gain.value = initialRoomDepth;
  roomSum.connect(revMix);
  // 6. Master Summing
  const masterSum = ctx.createGain();
  masterSum.gain.value = 1.0;

  drumBus.connect(drumShaper);
  drumShaper.connect(masterSum);

  // Preserve the full-range sub bus and add only a small controlled low-end enhancement.
  // The direct sub bus is ducked by the kick envelope; the enhancement is also
  // derived from the same signal so both live and export share the same behavior.
  subDuckingGain.connect(masterSum);
  subEnhanceGain.connect(masterSum);
  lowDuckWet.connect(masterSum);
  instHigh.connect(masterSum);

  // Feed the shared stereo room from instruments and drums.
  instBus.connect(roomInput);
  drumBus.connect(roomInput);
  revMix.connect(masterSum);

  // 7. Subsonic Filter & Master EQ
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 28;
  hp.Q.value = 0.6;

  const lowGainInit = initialMixCharacter ? (initialMixCharacter.bassForward - 0.5) * 4.0 : 0.5;
  const presGainInit = initialMixCharacter ? (initialMixCharacter.dryness - 0.5) * 3.0 : 0.8;
  const airGainInit = initialMixCharacter ? (initialMixCharacter.brightness - 0.5) * 5.0 : 1.0;

  const low = ctx.createBiquadFilter();
  low.type = 'lowshelf';
  low.frequency.value = 100;
  low.gain.value = lowGainInit;

  const pres = ctx.createBiquadFilter();
  pres.type = 'peaking';
  pres.frequency.value = 3200;
  pres.Q.value = 0.8;
  pres.gain.value = presGainInit;

  const air = ctx.createBiquadFilter();
  air.type = 'highshelf';
  air.frequency.value = 11000;
  air.gain.value = airGainInit;

  // 8. Dynamic Compressor Profiles (Glue Compressor)
  const glue = ctx.createDynamicsCompressor();
  const ratioInit = initialMixCharacter?.compressionRatio ?? 1.8;
  const snapInit = initialMixCharacter?.transientSnap ?? 0.3;

  if (isSalsa) {
    // Salsa requires a very dry, punchy mix. Set glue compressor attack to 0.01 to catch sharp timbale hits.
    glue.threshold.value = -12;
    glue.knee.value = 12;
    glue.ratio.value = 3.0;
    glue.attack.value = 0.01;
    glue.release.value = 0.15;
  } else if (ratioInit <= 2.0) {
    // Slow, transparent compressor (Folk, Jazz)
    glue.threshold.value = -8;
    glue.knee.value = 18;
    glue.ratio.value = Math.max(1.1, ratioInit);
    glue.attack.value = 0.08;
    glue.release.value = 0.35;
  } else {
    // Fast, punchy, or aggressive compressor (Metal, Trap, House)
    glue.threshold.value = -16;
    glue.knee.value = 8;
    glue.ratio.value = ratioInit;
    glue.attack.value = Math.max(0.003, 0.03 * (1 - snapInit));
    glue.release.value = 0.12;
  }

  // 9. Transparent Limiter & Output
  const limiter = ctx.createDynamicsCompressor();
  limiter.threshold.value = -0.2;
  limiter.knee.value = 0.5;
  limiter.ratio.value = 20;
  limiter.attack.value = 0.001;
  limiter.release.value = 0.05;

  const makeup = ctx.createGain();
  makeup.gain.value = 1;

  const tap = ctx.createGain();
  tap.gain.value = 1;

  const output = ctx.createGain();
  output.gain.value = 0.95;

  // Signal routing (clean, linear, phase-coherent chain)
  // Apply the width control in an actual mid/side reconstruction.
  const msSplitter = ctx.createChannelSplitter(2);
  const midL = ctx.createGain();
  const midR = ctx.createGain();
  const sideL = ctx.createGain();
  const sideR = ctx.createGain();
  const midSum = ctx.createGain();
  const sideSum = ctx.createGain();
  const sideHighPass = ctx.createBiquadFilter();
  const sideGain = ctx.createGain();
  const leftFromMid = ctx.createGain();
  const rightFromMid = ctx.createGain();
  const leftFromSide = ctx.createGain();
  const rightFromSide = ctx.createGain();
  const widthMerger = ctx.createChannelMerger(2);
  const sqrtHalf = Math.SQRT1_2;

  midL.gain.value = sqrtHalf;
  midR.gain.value = sqrtHalf;
  sideL.gain.value = sqrtHalf;
  sideR.gain.value = -sqrtHalf;
  leftFromMid.gain.value = sqrtHalf;
  rightFromMid.gain.value = sqrtHalf;
  leftFromSide.gain.value = sqrtHalf;
  rightFromSide.gain.value = -sqrtHalf;
  sideHighPass.type = 'highpass';
  sideHighPass.frequency.value = 300;
  sideHighPass.Q.value = 0.707;
  const initWidth = initialMixCharacter?.width ?? 0.5;
  sideGain.gain.value = Math.max(0.0, Math.min(1.8, 0.2 + initWidth * 1.6));

  masterSum.connect(msSplitter);
  msSplitter.connect(midL, 0);
  msSplitter.connect(midR, 1);
  msSplitter.connect(sideL, 0);
  msSplitter.connect(sideR, 1);
  midL.connect(midSum);
  midR.connect(midSum);
  sideL.connect(sideSum);
  sideR.connect(sideSum);
  sideSum.connect(sideHighPass);
  sideHighPass.connect(sideGain);

  midSum.connect(leftFromMid);
  midSum.connect(rightFromMid);
  sideGain.connect(leftFromSide);
  sideGain.connect(rightFromSide);
  leftFromMid.connect(widthMerger, 0, 0);
  leftFromSide.connect(widthMerger, 0, 0);
  rightFromMid.connect(widthMerger, 0, 1);
  rightFromSide.connect(widthMerger, 0, 1);
  widthMerger.connect(hp);
  hp.connect(low);
  low.connect(pres);
  pres.connect(air);
  air.connect(glue);
  glue.connect(makeup);
  makeup.connect(limiter);
  limiter.connect(tap);
  tap.connect(output);

  if (ctx.destination) {
    try {
      output.connect(ctx.destination);
    } catch {
      /* Offline Audio Context handle */
    }
  }

  return {
    input,
    drumBus,
    instBus,
    subBus,
    output,
    tap,
    setVolume(v: number) {
      output.gain.setTargetAtTime(Math.max(0, Math.min(1.5, v * 0.95)), ctx.currentTime, 0.02);
    },
    setMixCharacter(char: MixCharacter, genId?: string) {
      const gId = genId || genreId;
      const now = ctx.currentTime;
      const lowTarget = (char.bassForward - 0.5) * 4.0;
      const presTarget = (char.dryness - 0.5) * 3.0;
      const airTarget = (char.brightness - 0.5) * 5.0;

      low.gain.setTargetAtTime(lowTarget, now, 0.05);
      pres.gain.setTargetAtTime(presTarget, now, 0.05);
      air.gain.setTargetAtTime(airTarget, now, 0.05);

      // Dynamic Compressor Update
      const ratio = char.compressionRatio ?? 1.8;
      const snap = char.transientSnap ?? 0.3;
      const isSalsaActive = /salsa/i.test(gId || '');

      if (isSalsaActive) {
        glue.threshold.setTargetAtTime(-12, now, 0.05);
        glue.ratio.setTargetAtTime(3.0, now, 0.05);
        glue.attack.setTargetAtTime(0.01, now, 0.05);
        glue.release.setTargetAtTime(0.15, now, 0.05);
      } else if (ratio <= 2.0) {
        glue.threshold.setTargetAtTime(-10, now, 0.05);
        glue.ratio.setTargetAtTime(Math.max(1.2, ratio), now, 0.05);
        glue.attack.setTargetAtTime(0.06, now, 0.05);
      } else {
        glue.threshold.setTargetAtTime(-16, now, 0.05);
        glue.ratio.setTargetAtTime(ratio, now, 0.05);
        glue.attack.setTargetAtTime(Math.max(0.003, 0.03 * (1 - snap)), now, 0.05);
      }

      // Room Depth (Reverb)
      const rDepth = isSalsaActive ? 0.05 : (1.0 - char.dryness) * 0.45;
      revMix.gain.setTargetAtTime(rDepth, now, 0.05);

      // Drum Bus Saturation & Saturation Type
      const knock = calculateDrumKnock(char);
      const satType = char.saturationType ?? 'tape';
      drumShaper.curve = saturationCurve(knock, satType);

      // Mid-Side Width
      sideGain.gain.setTargetAtTime(Math.max(0.0, Math.min(1.8, 0.2 + char.width * 1.6)), now, 0.05);
    },
    dispose() {
      try {
        input.disconnect();
        drumBus.disconnect();
        instBus.disconnect();
        subBus.disconnect();
        drumShaper.disconnect();
        subFilter.disconnect();
        kickFilter.disconnect();
        kickAbs.disconnect();
        kickEnvelope.disconnect();
        kickDuckCurve.disconnect();
        instLow.disconnect();
        instHigh.disconnect();
        lowDuckGain.disconnect();
        lowDuckWet.disconnect();
        subDuckingGain.disconnect();
        masterSum.disconnect();
        roomInput.disconnect();
        roomPreDelay.disconnect();
        roomSum.disconnect();
        for (const r of roomDelays) {
          r.delay.disconnect();
          r.feedback.disconnect();
          r.damping.disconnect();
          r.wet.disconnect();
          r.panner.disconnect();
        }
        revMix.disconnect();
        msSplitter.disconnect();
        midSum.disconnect();
        sideHighPass.disconnect();
        sideGain.disconnect();
        leftFromMid.disconnect();
        rightFromMid.disconnect();
        leftFromSide.disconnect();
        rightFromSide.disconnect();
        widthMerger.disconnect();
        hp.disconnect();
        low.disconnect();
        pres.disconnect();
        air.disconnect();
        glue.disconnect();
        makeup.disconnect();
        limiter.disconnect();
        tap.disconnect();
        output.disconnect();
      } catch {
        /* ignore disconnect errors */
      }
    },
  };
}
