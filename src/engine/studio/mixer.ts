import { TANGO_PATTERN, SALSA_GENRE_PATTERN, ELECTRONIC_MIX_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { ELECTRONIC_MASTER_SIDECHAIN_DEPTH, SALSA_MASTER_ROOM_DEPTH, TANGO_MASTER_SIDECHAIN_DEPTH } from '../../data/sound/dsp/genrePlaybackProfiles';
/* --- Master Signal Chain & Ensemble Balance --- */

import type { MixCharacter } from '../../engine/style/contracts';
import { DEFAULT_ROLE_PROFILES, ROLE_DB_PROFILES } from '../../data/sound/mix/roleProfiles';
import { GENRE_MIX_OFFSETS } from '../../data/sound/mix/genreMixOffsets';
import type { MixRoleProfile } from '../../data/sound/schema/mix';
import { ELECTRONIC_MIX_GENRE_PATTERN, INSTRUMENT_MIX_TRIMS } from '../../data/sound/mix/instrumentTrims';

/** User-authored studio automation and routing for the existing instrument tracks. */
export interface StudioMixState {
  volume?: Record<string, number>;
  pan?: Record<string, number>;
  muted?: Record<string, boolean>;
  solo?: Record<string, boolean>;
  spotlight?: Record<string, string>;
}

// Genre-specific mixing rules to properly balance out-of-genre instruments.
// Ensures a synth dropped into Flamenco sits correctly in the acoustic space,
// or an orchestral string in Electronic EDM doesn't get buried.
export function getRoleGainLinear(role: string, genre: string = 'default', instrumentId?: string): number {
  const r = (role || '').toLowerCase();
  const baseDb = ROLE_DB_PROFILES[r] ?? -3.0;
  const genreOffsets = GENRE_MIX_OFFSETS[genre.toLowerCase()] || {};
  const offsetDb = genreOffsets[r] ?? 0.0;
  const id = (instrumentId ?? '').toLowerCase();
  let instrumentTrimDb = 0;
  const instrumentTrim = INSTRUMENT_MIX_TRIMS[id];
  if (instrumentTrim?.electronic !== undefined) instrumentTrimDb = ELECTRONIC_MIX_GENRE_PATTERN.test(genre.toLowerCase()) ? instrumentTrim.electronic : instrumentTrim.acoustic ?? 0;
  else if (instrumentTrim?.acoustic !== undefined) instrumentTrimDb = instrumentTrim.acoustic;
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
  setPlaybackEnabled(enabled: boolean): void;
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

/** Room settings derived from the genre's MixCharacter.  Drier genres get a shorter, quieter room. */
export interface MasterToneSettings {
  roomDepth: number;
  roomRt60: number;
  roomDampingHz: number;
  lowGainDb: number;
  presenceGainDb: number;
  airGainDb: number;
  widthGain: number;
}

/** Resolve the measurable master tone used by both live playback and exports. */
export function masterToneSettings(char?: MixCharacter, genreId?: string): MasterToneSettings {
  const dryness = char?.dryness ?? 0.6;
  const brightness = char?.brightness ?? 0.5;
  const isSalsa = SALSA_GENRE_PATTERN.test(genreId || '');
  return {
    // Keep the shared room restrained. The former 0.4 send and ~1.0s tails
    // made every close-miked part feed a conspicuous wash, especially on
    // acoustic tango, bachata, and flamenco ensembles.
    roomDepth: isSalsa ? SALSA_MASTER_ROOM_DEPTH : Math.max(0.015, Math.min(0.08, (1.0 - dryness) * 0.16)),
    roomRt60: 0.24 + (1.0 - dryness) * 0.55,    // seconds
    roomDampingHz: 2800 + brightness * 3200,
    lowGainDb: ((char?.bassForward ?? 0.5) - 0.5) * 4.0,
    presenceGainDb: (brightness - 0.5) * 2.0,
    airGainDb: (brightness - 0.5) * 4.0,
    widthGain: Math.max(0, Math.min(1.2, 0.2 + (char?.width ?? 0.5) * 1.2)),
  };
}

/**
 * Synthetic stereo room impulse response: decaying noise whose high end dies away
 * faster than its low end (like a real room).  Seeded so live playback and MP3
 * export render the identical room.  This replaces the old bank of short
 * feedback delays, which behaved like a comb filter ("metallic echo") rather than
 * a diffuse room.
 */
function buildRoomImpulse(ctx: BaseAudioContext, rt60: number, dampHz: number): AudioBuffer {
  const sr = ctx.sampleRate;
  const len = Math.max(1, Math.floor(sr * Math.max(0.2, rt60)));
  const buf = ctx.createBuffer(2, len, sr);
  for (let ch = 0; ch < 2; ch++) {
    const data = buf.getChannelData(ch);
    let seed = 0x9e3779b9 ^ (ch * 0x85ebca6b);
    let lp = 0;
    for (let i = 0; i < len; i++) {
      seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5;
      const white = ((seed >>> 0) / 4294967295) * 2 - 1;
      const t = i / sr;
      const env = Math.exp((-6.9078 * t) / rt60);           // -60 dB at rt60
      // One-pole low-pass that closes over time (HF decays faster).
      const cutoff = Math.max(900, dampHz * Math.exp(-2.2 * t / rt60));
      const a = 1 - Math.exp((-2 * Math.PI * cutoff) / sr);
      lp += a * (white - lp);
      // Soft fade-in over ~4 ms so there is no click at the start of the tail.
      const fade = Math.min(1, i / (0.004 * sr));
      data[i] = lp * env * fade;
    }
  }
  return buf;
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

  const isSalsa = SALSA_GENRE_PATTERN.test(genreId || '');

  // 2. Drum Bus Saturation ("Knock") with Saturation Type
  const drumShaper = ctx.createWaveShaper();
  const initialKnock = calculateDrumKnock(initialMixCharacter);
  const initialSatType = initialMixCharacter?.saturationType ?? 'tape';
  drumShaper.curve = saturationCurve(initialKnock, initialSatType);
  drumShaper.oversample = '2x';

  // 2b. Studio-style parallel drum bus compression. Real acoustic kits are
  // commonly captured through close mics + room mics and then glued on a drum
  // bus; a restrained parallel path preserves the individual transients while
  // bringing up shell/cymbal detail instead of flattening every hit.
  const drumParallelComp = ctx.createDynamicsCompressor();
  drumParallelComp.threshold.value = -20;
  drumParallelComp.knee.value = 12;
  drumParallelComp.ratio.value = 3.2;
  drumParallelComp.attack.value = 0.025;
  drumParallelComp.release.value = 0.16;
  const drumParallelWet = ctx.createGain();
  drumParallelWet.gain.value = 0.18;
  drumBus.connect(drumParallelComp);
  drumParallelComp.connect(drumParallelWet);

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
  const duckDepth = ELECTRONIC_MIX_PATTERN.test(genreId || '')
    ? ELECTRONIC_MASTER_SIDECHAIN_DEPTH
    : TANGO_PATTERN.test(genreId || '')
      ? TANGO_MASTER_SIDECHAIN_DEPTH
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

  // 5. Shared stereo room (one diffuse convolution room for the whole band).
  // Send is high-passed and low-passed so the tail adds space, not mud or fizz.
  const initialTone = masterToneSettings(initialMixCharacter, genreId);
  const initialRoomDepth = initialTone.roomDepth;
  const roomInput = ctx.createGain();
  const roomPreDelay = ctx.createDelay(0.25);
  roomPreDelay.delayTime.value = 0.015;
  const roomHP = ctx.createBiquadFilter();
  roomHP.type = 'highpass';
  roomHP.frequency.value = 250;
  roomHP.Q.value = 0.707;
  const roomConvolver = ctx.createConvolver();
  roomConvolver.normalize = true;
  roomConvolver.buffer = buildRoomImpulse(ctx, initialTone.roomRt60, initialTone.roomDampingHz);
  const roomLP = ctx.createBiquadFilter();
  roomLP.type = 'lowpass';
  roomLP.frequency.value = 4500;
  roomLP.Q.value = 0.707;
  roomInput.connect(roomPreDelay);
  roomPreDelay.connect(roomHP);
  roomHP.connect(roomConvolver);
  roomConvolver.connect(roomLP);

  const revMix = ctx.createGain();
  revMix.gain.value = initialRoomDepth;
  let roomDepth = initialRoomDepth;
  roomLP.connect(revMix);
  // 6. Master Summing
  const masterSum = ctx.createGain();
  masterSum.gain.value = 1.0;

  drumBus.connect(drumShaper);
  drumShaper.connect(masterSum);
  drumParallelWet.connect(masterSum);

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

  const lowGainInit = initialTone.lowGainDb;
  // Dryness controls room send only. It must not add presence: conflating the
  // two made dry acoustic styles brighter in the 3.2 kHz band by up to 1.5 dB.
  const presGainInit = initialTone.presenceGainDb;
  const airGainInit = initialTone.airGainDb;

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
  air.frequency.value = 6500;
  air.gain.value = airGainInit;

  // Gentle ceiling: removes the digital fizz above the audible "air" band.
  const ceiling = ctx.createBiquadFilter();
  ceiling.type = 'lowpass';
  ceiling.frequency.value = 15000;
  ceiling.Q.value = 0.5;

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
  limiter.threshold.value = -0.8;
  limiter.knee.value = 2.0;
  limiter.ratio.value = 8;
  limiter.attack.value = 0.001;
  limiter.release.value = 0.05;

  const makeup = ctx.createGain();
  makeup.gain.value = 1;

  const tap = ctx.createGain();
  tap.gain.value = 1;

  const output = ctx.createGain();
  output.gain.value = 0.95;
  const playbackGate = ctx.createGain();
  playbackGate.gain.value = 1;

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
  sideGain.gain.value = initialTone.widthGain;

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
  air.connect(ceiling);
  ceiling.connect(glue);
  glue.connect(makeup);
  makeup.connect(limiter);
  limiter.connect(tap);
  tap.connect(playbackGate);
  playbackGate.connect(output);

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
    setPlaybackEnabled(enabled: boolean) {
      const now = ctx.currentTime;
      playbackGate.gain.cancelScheduledValues(now);
      revMix.gain.cancelScheduledValues(now);
      roomInput.gain.cancelScheduledValues(now);
      if (!enabled) {
        playbackGate.gain.setValueAtTime(0, now);
        revMix.gain.setValueAtTime(0, now);
        roomInput.gain.setValueAtTime(0, now);
      } else {
        playbackGate.gain.setValueAtTime(1, now);
        roomInput.gain.setValueAtTime(1, now);
        revMix.gain.setValueAtTime(0, now);
        revMix.gain.setValueAtTime(roomDepth, now + 0.09);
      }
    },
    setMixCharacter(char: MixCharacter, genId?: string) {
      const gId = genId || genreId;
      const now = ctx.currentTime;
      const tone = masterToneSettings(char, gId);
      const lowTarget = tone.lowGainDb;
      const presTarget = tone.presenceGainDb;
      const airTarget = tone.airGainDb;

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

      // Room depth + tail length from the genre's dryness
      roomDepth = tone.roomDepth;
      revMix.gain.setTargetAtTime(tone.roomDepth, now, 0.05);
      roomConvolver.buffer = buildRoomImpulse(ctx, tone.roomRt60, tone.roomDampingHz);

      // Drum Bus Saturation & Saturation Type
      const knock = calculateDrumKnock(char);
      const satType = char.saturationType ?? 'tape';
      drumShaper.curve = saturationCurve(knock, satType);

      // Mid-Side Width
      sideGain.gain.setTargetAtTime(tone.widthGain, now, 0.05);
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
        playbackGate.disconnect();
        roomPreDelay.disconnect();
        roomHP.disconnect();
        roomConvolver.disconnect();
        roomLP.disconnect();
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
        ceiling.disconnect();
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
