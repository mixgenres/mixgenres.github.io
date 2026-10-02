import { resolveMasterSettings } from './masterSettings';
import { MASTER_MIX_DEFAULTS } from '../../data/sound/mix/masterProfiles';
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
}

// Genre-specific mixing rules to properly balance out-of-genre instruments.
// Ensures a synth dropped into Flamenco sits correctly in the acoustic space,
// or an orchestral string in Electronic EDM doesn't get buried.
export function getRoleGainLinear(role: string, genre: string = 'default', instrumentId?: string, styleId = ''): number {
  const r = (role || '').toLowerCase();
  const baseDb = ROLE_DB_PROFILES[r] ?? -3.0;
  const genreOffsets = GENRE_MIX_OFFSETS[genre.toLowerCase()] || {};
  const offsetDb = genreOffsets[r] ?? 0.0;
  const id = (instrumentId ?? '').toLowerCase();
  let instrumentTrimDb = 0;
  const instrumentTrim = INSTRUMENT_MIX_TRIMS[id];
  if (instrumentTrim?.electronic !== undefined) instrumentTrimDb = ELECTRONIC_MIX_GENRE_PATTERN.test(`${genre} ${styleId}`.toLowerCase()) ? instrumentTrim.electronic : instrumentTrim.acoustic ?? 0;
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
  roomInput: GainNode;
  delayInput: AudioNode;
  roomSize: AudioParam;
  roomPreDelay: AudioParam;
  roomDelayTimes: AudioParam[];
  dynamicParameters: {
    low: AudioParam; presence: AudioParam; air: AudioParam; width: AudioParam; roomReturn: AudioParam;
    legacyAmbience: AudioParam; delayTime: AudioParam; delayFeedback: AudioParam; delayTone: AudioParam;
    glueThreshold: AudioParam; glueRatio: AudioParam;
  };
  setTrackSendsEnabled(enabled: boolean): void;
  tap: GainNode;
  setVolume(v: number): void;
  setPlaybackEnabled(enabled: boolean): void;
  setMixCharacter(char: MixCharacter, genreId?: string): void;
  dispose(): void;
}

/** Saturation curve generator: Tape (smooth), Tube (asymmetric 2nd harmonic), Hard-Clip (aggressive) */
function saturationCurve(drive: number, type: 'tape' | 'tube' | 'hard-clip' = 'tape'): Float32Array {
  const n = 2049;
  const curve = new Float32Array(n);
  const amount = Math.max(0, Math.min(1, drive));

  for (let i = 0; i < n; i++) {
    const x = (i * 2) / (n - 1) - 1;
    if (type === 'hard-clip') {
      const thresh = 1.0 - amount * 0.4;
      curve[i] = Math.max(-thresh, Math.min(thresh, x * (1 + amount * 1.5)));
    } else if (type === 'tube') {
      // Asymmetric saturation adding warm 2nd harmonics
      const asym = x + 0.2 * amount * x * x;
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

export function createMasterChain(ctx: BaseAudioContext, initialMixCharacter?: MixCharacter, genreId?: string): MasterChain {
  const settings = resolveMasterSettings(initialMixCharacter, genreId);
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


  // 2. Drum Bus Saturation ("Knock") with Saturation Type
  const drumShaper = ctx.createWaveShaper();
  const initialKnock = settings.drumKnock;
  const initialSatType = settings.saturationType;
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
  subEnhanceGain.gain.value = MASTER_MIX_DEFAULTS.subEnhancement;

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
  const duckDepth = settings.duckDepth;
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
  lowDuckGain.gain.value = 0; // AudioParam inputs add to this intrinsic value.
  const lowDuckWet = ctx.createGain();
  lowDuckWet.gain.value = 1.0;
  kickDuckCurve.connect(lowDuckGain.gain);
  instBus.connect(instLow);
  instBus.connect(instHigh);
  instLow.connect(lowDuckGain);
  lowDuckGain.connect(lowDuckWet);

  const subDuckingGain = ctx.createGain();
  subDuckingGain.gain.value = 0; // The control curve already supplies unity at rest.
  kickDuckCurve.connect(subDuckingGain.gain);
  subBus.connect(subDuckingGain);

  subDuckingGain.connect(subFilter);
  subFilter.connect(subEnhanceGain);

  // 5. Stereo room: several short, decorrelated feedback lines replace the old
  // four-delay series ring. This remains a small Web Audio graph but produces a
  // substantially denser late field with asymmetric stereo reflections.
  const initialRoomDepth = settings.roomDepth;
  const roomInput = ctx.createGain();
  const roomPreDelay = ctx.createDelay(0.25);
  roomPreDelay.delayTime.value = 0.012;
  roomInput.connect(roomPreDelay);

  const roomSum = ctx.createGain();
  const roomSizeGain = ctx.createGain();
  roomSizeGain.gain.value = 1;
  roomSum.connect(roomSizeGain);
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
  let roomDepth = initialRoomDepth;
  roomSizeGain.connect(revMix);
  const springTone = ctx.createBiquadFilter();
  springTone.type = 'bandpass';
  springTone.frequency.value = 2400;
  springTone.Q.value = 2.8;
  const springWet = ctx.createGain();
  springWet.gain.value = settings.springReverbMix;
  roomSizeGain.connect(springTone);
  springTone.connect(springWet);
  // Echo is a production send, not an instrument occupying an arrangement slot.
  const delaySend = ctx.createGain();
  delaySend.gain.value = settings.delaySend;
  const delay = ctx.createDelay(1.6);
  delay.delayTime.value = settings.delayTimeSeconds;
  const delayTone = ctx.createBiquadFilter();
  delayTone.type = 'lowpass';
  delayTone.frequency.value = settings.delayToneHz;
  const delayFeedback = ctx.createGain();
  delayFeedback.gain.value = settings.delayFeedback;
  const delayReturn = ctx.createGain();
  delayReturn.gain.value = 0.42;
  delaySend.connect(delay);
  delay.connect(delayTone);
  delayTone.connect(delayReturn);
  delayTone.connect(delayFeedback);
  delayFeedback.connect(delay);
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
  const legacyAmbienceFeed = ctx.createGain();
  instBus.connect(legacyAmbienceFeed);
  drumBus.connect(legacyAmbienceFeed);
  legacyAmbienceFeed.connect(roomInput);
  legacyAmbienceFeed.connect(delaySend);
  revMix.connect(masterSum);
  springWet.connect(masterSum);
  delayReturn.connect(masterSum);

  // 7. Subsonic Filter & Master EQ
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 28;
  hp.Q.value = 0.6;

  const low = ctx.createBiquadFilter();
  low.type = 'lowshelf';
  low.frequency.value = 100;
  low.gain.value = settings.lowDb;

  const pres = ctx.createBiquadFilter();
  pres.type = 'peaking';
  pres.frequency.value = 3200;
  pres.Q.value = 0.8;
  pres.gain.value = settings.presenceDb;

  const air = ctx.createBiquadFilter();
  air.type = 'highshelf';
  air.frequency.value = 11000;
  air.gain.value = settings.airDb;

  // 8. Dynamic Compressor Profiles (Glue Compressor)
  const glue = ctx.createDynamicsCompressor();
  glue.threshold.value = settings.glue.threshold;
  glue.knee.value = settings.glue.knee;
  glue.ratio.value = settings.glue.ratio;
  glue.attack.value = settings.glue.attack;
  glue.release.value = settings.glue.release;

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
  output.gain.value = MASTER_MIX_DEFAULTS.outputGain;
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
  sideGain.gain.value = settings.widthGain;

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
    roomInput,
    delayInput: delay,
    roomSize: roomSizeGain.gain,
    roomPreDelay: roomPreDelay.delayTime,
    roomDelayTimes: roomDelays.map(room => room.delay.delayTime),
    dynamicParameters: { low: low.gain, presence: pres.gain, air: air.gain, width: sideGain.gain, roomReturn: revMix.gain,
      legacyAmbience: legacyAmbienceFeed.gain, delayTime: delay.delayTime, delayFeedback: delayFeedback.gain,
      delayTone: delayTone.frequency, glueThreshold: glue.threshold, glueRatio: glue.ratio },
    setTrackSendsEnabled(enabled: boolean) { legacyAmbienceFeed.gain.value = enabled ? 0 : 1; },
    tap,
    setVolume(v: number) {
      output.gain.setTargetAtTime(Math.max(0, Math.min(1.5, v * MASTER_MIX_DEFAULTS.outputGain)), ctx.currentTime, 0.02);
    },
    setPlaybackEnabled(enabled: boolean) {
      const now = ctx.currentTime;
      playbackGate.gain.cancelScheduledValues(now);
      revMix.gain.cancelScheduledValues(now);
      roomInput.gain.cancelScheduledValues(now);
      for (const r of roomDelays) r.feedback.gain.cancelScheduledValues(now);
      delaySend.gain.cancelScheduledValues(now);
      if (!enabled) {
        playbackGate.gain.setValueAtTime(0, now);
        revMix.gain.setValueAtTime(0, now);
        roomInput.gain.setValueAtTime(0, now);
        delaySend.gain.setValueAtTime(0, now);
        for (const r of roomDelays) r.feedback.gain.setValueAtTime(0, now);
      } else {
        playbackGate.gain.setValueAtTime(1, now);
        roomInput.gain.setValueAtTime(1, now);
        roomDelays.forEach((r, i) => {
          r.feedback.gain.setValueAtTime(0, now);
          r.feedback.gain.setValueAtTime([0.34, 0.31, 0.36, 0.29, 0.33, 0.27][i], now + 0.09);
        });
        revMix.gain.setValueAtTime(0, now);
        revMix.gain.setValueAtTime(roomDepth, now + 0.09);
        delaySend.gain.setValueAtTime(settings.delaySend, now + 0.09);
      }
    },
    setMixCharacter(char: MixCharacter, genId?: string) {
      const gId = genId || genreId;
      const now = ctx.currentTime;
      const next = resolveMasterSettings(char, gId);
      low.gain.setTargetAtTime(next.lowDb, now, 0.05);
      pres.gain.setTargetAtTime(next.presenceDb, now, 0.05);
      air.gain.setTargetAtTime(next.airDb, now, 0.05);
      const duckDepth = next.duckDepth;
      const nextDuckCurve = new Float32Array(1025);
      for (let i = 0; i < nextDuckCurve.length; i++) {
        const x = (i / (nextDuckCurve.length - 1)) * 2 - 1;
        nextDuckCurve[i] = 1 - duckDepth * Math.max(0, Math.min(1, x));
      }
      kickDuckCurve.curve = nextDuckCurve;

      glue.threshold.setTargetAtTime(next.glue.threshold, now, 0.05);
      glue.knee.setTargetAtTime(next.glue.knee, now, 0.05);
      glue.ratio.setTargetAtTime(next.glue.ratio, now, 0.05);
      glue.attack.setTargetAtTime(next.glue.attack, now, 0.05);
      glue.release.setTargetAtTime(next.glue.release, now, 0.05);
      roomPreDelay.delayTime.setTargetAtTime(.012, now, .05);
      roomSizeGain.gain.setTargetAtTime(1, now, .05);
      roomDelays.forEach((room, index) => room.delay.delayTime.setTargetAtTime([.013, .019, .029, .037, .053, .071][index], now, .05));
      roomDepth = next.roomDepth;
      revMix.gain.setTargetAtTime(roomDepth, now, 0.05);
      springWet.gain.setTargetAtTime(next.springReverbMix, now, 0.05);
      delaySend.gain.setTargetAtTime(next.delaySend, now, 0.05);
      delay.delayTime.setTargetAtTime(next.delayTimeSeconds, now, 0.05);
      delayFeedback.gain.setTargetAtTime(next.delayFeedback, now, 0.05);
      delayTone.frequency.setTargetAtTime(next.delayToneHz, now, 0.05);
      drumShaper.curve = saturationCurve(next.drumKnock, next.saturationType);
      sideGain.gain.setTargetAtTime(next.widthGain, now, 0.05);
    },
    dispose() {
      try {
        input.disconnect();
        drumBus.disconnect();
        instBus.disconnect();
        subBus.disconnect();
        drumShaper.disconnect();
        subFilter.disconnect();
        subEnhanceGain.disconnect();
        drumParallelComp.disconnect();
        drumParallelWet.disconnect();
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
        legacyAmbienceFeed.disconnect();
        roomSizeGain.disconnect();
        playbackGate.disconnect();
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
        springTone.disconnect();
        springWet.disconnect();
        delaySend.disconnect();
        delay.disconnect();
        delayTone.disconnect();
        delayFeedback.disconnect();
        delayReturn.disconnect();
        msSplitter.disconnect();
        midSum.disconnect();
        midL.disconnect();
        midR.disconnect();
        sideL.disconnect();
        sideR.disconnect();
        sideSum.disconnect();
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
