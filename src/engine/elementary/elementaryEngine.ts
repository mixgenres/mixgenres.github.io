import { INSTRUMENTS_BY_ID } from '../../data/instruments';
import { el } from '@elemaudio/core';
import { getLuthierModelForInstrument, type LuthierPhysicalParameters } from '../audio/LuthierAPI';
import type { MixCharacter } from '../../data/styles/contracts';
import { calculateSidechainDepth, calculateDrumKnock } from '../audio/mixer';
import { buildVoiceContext, getInstrumentModule } from '../instruments/registry';
import { isCollisionAllowedForAction } from '../theory/excitationGates';
import { applyInstrumentEffectsChain } from '../audio/instrumentEffectsChain';
import { StereoFieldManager } from '../audio/panning';
import { applyGenreInstrumentTreatment } from '../instruments/genreInstrumentTreatment';

type Node = any;
/**
Physical Karplus-Strong waveguide string loop.
Uses sample-accurate internal delay feedback to ensure perfect pitch mapping,
replacing block-delayed tapIn/tapOuts. Pre/post filtering simulates frequency-dependent
loss without requiring an unsupported 1-sample in-loop filter.
*/
export function createDampedStringLoop(
persistentKey: string,
delaySamples: number | Node,
feedbackGain: number | Node,
dampingCutoffHz: number | Node,
excitation: Node,
dampingQ: number | Node = 0.707
): Node {
const pKey = persistentKey || 'damped_string_loop';
const fbGainNode = typeof feedbackGain === 'number'
  ? el.const({ key: `${pKey}:fb`, value: feedbackGain })
  : feedbackGain;

// Ensure delayTime can be safely updated at runtime via el.const or dynamic signal nodes.
// Clamp delay to [1, 44000] and apply a gentle 3ms pole smoother to eliminate click
// artifacts when delayTime is modulated or updated via el.const without graph recompilation.
const rawDelay = typeof delaySamples === 'number'
  ? el.const({ key: `${pKey}:dt`, value: delaySamples })
  : delaySamples;
const clampedDelay = el.min(el.const({ value: 44000 }), el.max(el.const({ value: 1 }), rawDelay));
const safeDelay = el.smooth(el.tau2pole(0.003), clampedDelay);

// Soften the initial burst to prevent raw metallic comb-filtering
const dampedExcite = el.lowpass(dampingCutoffHz, dampingQ, excitation);

// Sample-accurate internal feedback guarantees perfect tuning with persistent key
const loop = el.delay(
  { key: pKey, size: 44100 },
  safeDelay,
  fbGainNode,
  dampedExcite
);
// Post-filter shapes the body resonance and dampens the tail
return el.lowpass(dampingCutoffHz, dampingQ, loop);
}
/**
 * Frequency-compensated feedback gain for a Karplus-Strong style delay loop.
 * Formulated as signal-math nodes rather than static JS calculations executed once
 * at render time, so that feedback gain automatically updates whenever the frequency
 * signal/const changes dynamically at runtime.
 *
 * Guarantees the loop's T60 decay time (in seconds) is governed by
 * `decaySeconds` regardless of the note's pitch (i.e. regardless of how
 * short the delay line is). Without this, higher notes — which loop far
 * more times per second — decay dramatically faster than low notes purely
 * as an artifact of delay-line length, not string physics.
 */
export function fbGainForDecay(
  freqHz: number | Node,
  decaySeconds: number | Node,
): Node {
  const freqNode = typeof freqHz === 'number'
    ? el.const({ value: Math.max(1, freqHz) })
    : el.max(el.const({ value: 1 }), freqHz);
  const decayNode = typeof decaySeconds === 'number'
    ? el.const({ value: Math.max(0.05, decaySeconds) })
    : el.max(el.const({ value: 0.05 }), decaySeconds);

  const exponent = el.div(
    el.const({ value: -3 * Math.LN10 }),
    el.mul(decayNode, freqNode)
  );
  const g = el.exp(exponent);
  return el.min(el.const({ value: 0.9995 }), el.max(el.const({ value: 0.5 }), g));
}

export function compensatedFeedbackGain(
  delaySamples: number | Node,
  decaySeconds: number | Node,
  sr: number | Node = el.sr(),
): Node {
  const srNode = typeof sr === 'number' ? el.const({ value: sr }) : sr;
  const delayNode = typeof delaySamples === 'number' ? el.const({ value: delaySamples }) : delaySamples;
  const decayNode = typeof decaySeconds === 'number'
    ? el.const({ value: Math.max(0.05, decaySeconds) })
    : el.max(el.const({ value: 0.05 }), decaySeconds);

  const loopsPerSecond = el.div(srNode, el.max(el.const({ value: 1 }), delayNode));
  const exponent = el.div(
    el.const({ value: -3 * Math.LN10 }),
    el.mul(decayNode, loopsPerSecond)
  );
  const g = el.exp(exponent);
  return el.min(el.const({ value: 0.9995 }), el.max(el.const({ value: 0.5 }), g));
}

export function midiToFreq(note: number): number {
return 440 * Math.pow(2, (note - 69) / 12);
}
export function styleFlavorForGenre(worldId = '', styleId = ''): number {
const token = `${worldId}:${styleId}`.toLowerCase();
if (token.includes('flamenco')) return 0.82;
if (token.includes('afrobeat')) return 0.74;
if (token.includes('reggae') || token.includes('dub')) return 0.68;
if (token.includes('cumbia')) return 0.60;
if (token.includes('jazz')) return 0.55;
if (token.includes('samba') || token.includes('bossa')) return 0.50;
return 0.35;
}
export type PerformanceMode = 'acoustic-ensemble' | 'programmed-electronic' | 'hybrid';
export interface VoiceState {
note: number;
velocity: number;
gate: number;
id: string;
action?: string;
excitationType?: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer' | 'stick' | 'mallet' | 'breath' | 'bow' | string;
contactPoint?: number;
mass?: number;
frequencyHz?: number;
bellowsDirectionCode?: 1 | 2;
bandoneonButtonId?: string;
bandoneonButtonIndex?: number;
bandoneonSideCode?: 1 | 2;
retriggerId?: number;
attack?: number;
decay?: number;
sustain?: number;
release?: number;
articulation?: number;
}
export interface TrackParams {
brightness: number;
decay: number;
drive: number;
body: number;
tension: number;
styleFlavor: number;
articulation: number;
contact: number;
mute: number;
bowPressure: number;
bowVelocity: number;
bodyTap: number;
pluckPosition: number;
pressure: number;
resonance: number;
model: number;
volume: number;
pan: number;
dialect?: string;
genreId?: string;
performanceMode?: PerformanceMode;
bendGlideMs?: number;
instrumentId?: string;
courses?: number;
bodyConstruction?: 'wood-box' | 'gourd' | 'skin-faced' | 'board' | 'solid-electric' | 'metal-shell' | 'brass-tube';
excitationType?: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer' | 'stick' | 'mallet' | 'breath' | 'bow';
sympatheticStrings?: boolean;
roleGain?: number;
}
export interface PluckedPreset {
courses: number;
bodyConstruction: 'wood-box' | 'gourd' | 'skin-faced' | 'board' | 'solid-electric' | 'metal-shell' | 'brass-tube';
excitationType: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer' | 'stick' | 'mallet' | 'breath' | 'bow';
sympatheticStrings?: boolean;
}
export const EXACT_PLUCKED_PRESETS: Record<string, PluckedPreset> = {};
for (const [id, def] of Object.entries(INSTRUMENTS_BY_ID)) {
  if (def.family === 'plucked' || def.courses || def.bodyConstruction || def.excitationType) {
    EXACT_PLUCKED_PRESETS[id] = {
      courses: def.courses ?? def.luthierPhysics?.courses ?? 1,
      bodyConstruction: def.bodyConstruction ?? def.luthierPhysics?.bodyConstruction ?? 'wood-box',
      excitationType: def.excitationType ?? def.luthierPhysics?.excitationType ?? 'fingerpad',
      sympatheticStrings: def.sympatheticStrings ?? def.luthierPhysics?.sympatheticStrings ?? false,
    };
  }
}
if (EXACT_PLUCKED_PRESETS['12-string-guitar']) {
  EXACT_PLUCKED_PRESETS['12-string'] = EXACT_PLUCKED_PRESETS['12-string-guitar'];
};
export interface FormantBand {
freq: number;
q: number;
gain: number;
}
export interface AcousticFormantProfile {
f1: FormantBand;
f2: FormantBand;
f3?: FormantBand;
tongueType: 'chiff' | 'reed-tongue' | 'lip-slap' | 'soft-puff';
tongueFreq: number;
}
export const WIND_BRASS_REED_FORMANTS: Record<string, AcousticFormantProfile> = {};
for (const [id, def] of Object.entries(INSTRUMENTS_BY_ID)) {
  if (def.formantProfile) {
    WIND_BRASS_REED_FORMANTS[id] = def.formantProfile;
  }
};
export function getFormantProfileForInstrument(instrumentId: string, model: number): AcousticFormantProfile {
  const idLower = instrumentId.toLowerCase().replace(/_/g, '-');
  const def = INSTRUMENTS_BY_ID[instrumentId] || INSTRUMENTS_BY_ID[idLower];
  if (def?.formantProfile) return def.formantProfile;
  throw new Error(
    `UNRESOLVED_MUSICAL_IDENTITY_ERROR: instrument "${instrumentId}" has no authored acoustic formant profile (model ${model}).`
  );
}
export interface BowedResonanceProfile {
bodyFreq: number;
bodyQ: number;
bodyGain: number;
bridgeHillFreq: number;
bridgeHillQ: number;
bridgeHillGain: number;
}
export const BOWED_RESONANCES: Record<string, BowedResonanceProfile> = {};
for (const [id, def] of Object.entries(INSTRUMENTS_BY_ID)) {
  if (def.bowedResonance) {
    BOWED_RESONANCES[id] = def.bowedResonance;
  }
}
export function getBowedResonanceProfile(instrumentId: string, _bodyParam: number): BowedResonanceProfile {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (def?.bowedResonance) return def.bowedResonance;
  throw new Error(`UNRESOLVED_MUSICAL_IDENTITY_ERROR: bowed instrument "${instrumentId}" has no authored resonance profile.`);
}
export function modelForInstrument(instrumentId: string): number {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (def?.elementaryModel !== undefined) return def.elementaryModel;
  throw new Error(`UNRESOLVED_MUSICAL_IDENTITY_ERROR: instrument "${instrumentId}" has no elementary model.`);
}
export function normalizedParams(instrumentId: string, luthier: LuthierPhysicalParameters, modelNum: number) {
const electric = /electric|distortion|synth|acid|clavinet|sub-bass|rhodes|fm-ep/.test(instrumentId.toLowerCase());
const b = Math.max(0, Math.min(1, 0.42 + luthier.harmonicRichness * 0.48 + (electric ? 0.1 : 0)));
const d = Math.max(0.1, Math.min(8, luthier.decayTimeSec ?? luthier.decayTimeFactor));
const dr = Math.max(0, Math.min(1, electric ? 0.15 + luthier.harmonicRichness * 0.55 : luthier.harmonicRichness * 0.08));
const bodyDivisor = modelNum === 1 ? 60 : modelNum === 3 ? 120 : modelNum === 17 ? 2 : 30;
const bo = Math.max(0, Math.min(1, luthier.bodyResonanceVolume / bodyDivisor));
return {
brightness: b,
decay: d,
drive: dr,
body: bo,
model: modelNum,
};
}
export const GAIN_BY_MODEL: Record<number, number> = {
  0: 30.000,
  2: 13.580,
  3: 0.685,
  4: 1.540,
  6: 5.477,
  7: 0.466,
  8: 1.000,
  9: 0.548,
  10: 0.457,
  11: 6.626,
  12: 0.455,
  13: 0.417,
  14: 0.322,
  15: 0.399,
  16: 0.411,
  17: 9.031,
  18: 0.285,
  19: 30.000,
  20: 0.949,
  21: 13.580,
  22: 30.000,
  23: 30.000,
  24: 2.994,
  25: 6.443,
  26: 0.378,
};
export const GAIN_BY_INSTRUMENT: Partial<Record<string, number>> = {};
for (const [id, def] of Object.entries(INSTRUMENTS_BY_ID)) {
  if (typeof def.makeupGain === 'number') {
    GAIN_BY_INSTRUMENT[id] = def.makeupGain;
  }
}
export function makeupGainFor(modelNum: number, instrumentId?: string): number {
  if (instrumentId) {
    const def = INSTRUMENTS_BY_ID[instrumentId];
    if (typeof def?.makeupGain === 'number') {
      return def.makeupGain;
    }
    const override = GAIN_BY_INSTRUMENT[instrumentId];
    if (typeof override === 'number') {
      return override;
    }
  }
  return GAIN_BY_MODEL[Math.round(modelNum)] ?? 1;
}
export function defaultTrackParams(instrumentId = '', luthier?: LuthierPhysicalParameters, modelNum = 0): TrackParams {
const l = luthier ?? getLuthierModelForInstrument(instrumentId);
const norm = normalizedParams(instrumentId, l, modelNum);
const isElectronic = /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/.test(instrumentId.toLowerCase());
const effectiveModelForGain = isElectronic ? 9 : modelNum;
// Volume un-clamped from upper boundaries to support massive hybrid textures
const volume = Math.max(0.01, 0.8 * makeupGainFor(effectiveModelForGain, instrumentId));
const idLower = instrumentId.toLowerCase();
const preset = EXACT_PLUCKED_PRESETS[idLower];
const courses = l?.courses ?? preset?.courses ?? 1;
const bodyConstruction = l?.bodyConstruction ?? preset?.bodyConstruction ?? 'wood-box';
const excitationType = l?.excitationType ?? preset?.excitationType ?? 'fingerpad';
const sympatheticStrings = l?.sympatheticStrings ?? preset?.sympatheticStrings ?? false;
return {
brightness: norm.brightness,
decay: norm.decay,
drive: norm.drive,
body: norm.body,
tension: Math.max(0, Math.min(1, l.stringTension ?? l.tension)),
styleFlavor: 0.5,
articulation: 0,
contact: 0.5,
mute: 0,
bowPressure: 0.45,
bowVelocity: 0.35,
bodyTap: 0,
pluckPosition: 0.28,
pressure: 0.55,
resonance: 0.5,
model: modelNum,
volume,
pan: new StereoFieldManager().resolveInstrumentPanNormalized(instrumentId),
performanceMode: isElectronic ? 'programmed-electronic' : 'acoustic-ensemble',
bendGlideMs: 15,
instrumentId,
courses,
bodyConstruction,
excitationType,
sympatheticStrings,
};
}
export function renderVoice(
  trackId: string,
  voiceIndex: number,
  voice: VoiceState,
  params: TrackParams
): Node {
  const ctx = buildVoiceContext(trackId, voiceIndex, voice, params);
  const mod = getInstrumentModule(params.instrumentId);
  let rawAudio: Node = mod.renderVoice(ctx);
  rawAudio = applyGenreInstrumentTreatment(rawAudio, ctx, INSTRUMENTS_BY_ID[params.instrumentId ?? '']?.family);

  const instId = params.instrumentId || '';
  const instDef = INSTRUMENTS_BY_ID[instId] || INSTRUMENTS_BY_ID[instId.toLowerCase()];
  const ownedSections = mod.ownedDspSections ?? [];

  const dspProfile = ctx.dspProfile;
  if (dspProfile) {
    const x = dspProfile.excitationDynamics;
    const c = dspProfile.coupledResonators;
    const a = dspProfile.mechanicalArtifacts;
    const ap = dspProfile.articulationPhysics;
    const genreKey = (params.genreId ?? params.dialect ?? '').toLowerCase();
    const authoredDialect = genreKey ? dspProfile.genreDialects[genreKey] : undefined;
    const dialect = authoredDialect ?? {
      brightness: ctx.genreDialect.brightness,
      damping: Math.max(0, 0.055 * (1 - ctx.genreDialect.decay)),
      attack: ctx.genreDialect.attack,
      body: ctx.genreDialect.body,
      articulation: [],
    };
    const physical = dspProfile.physicalDetails;
    const family = instDef?.family;
    const dialectAttack = dialect.attack ?? 1;
    // Mechanical/air noise is detail, not the instrument's primary tone.
    // notes were active. Keep the authored artifacts, but put them behind a
    // family-dependent acoustic-detail ceiling.
    const familyNoiseScale = /hand-drums|kit|metal-and-wood/.test(String(family)) ? 0.62
      : /bowed|strings/.test(String(family)) ? 0.30
      : /plucked/.test(String(family)) ? 0.34
      : /winds|brass/.test(String(family)) ? 0.28
      : /bellows/.test(String(family)) ? 0.26
      : /key/.test(String(family)) ? 0.24
      : 0.30;
    const dialectBrightness = dialect.brightness ?? ctx.genreDialect.brightness;
    const dialectDamping = dialect.damping ?? 0;
    const directionText = ctx.action.toLowerCase();
    const bisonoric = dspProfile?.excitationDynamics.bisonoricAsymmetry;
    const directionPhysicalGain = bisonoric
      ? (/cerrar|closing|close|push|pushing|down/.test(directionText) ? bisonoric.closing.pressure : bisonoric.opening.pressure)
      : 1;
    const modeSignals: Node[] = [];

    // Apply coupled resonators if not owned by bespoke module
    if (!ownedSections.includes('coupledResonators')) {
      for (let i = 0; i < Math.min(4, c.bodyModes.length); i++) {
        const m = c.bodyModes[i];
        modeSignals.push(el.mul(
          m.gain * (0.72 + (physical?.response.bodyCoupling ?? 0.5) * 0.48) * (dialect.body ?? ctx.genreDialect.body),
          el.svf({ mode: "bandpass" }, Math.min(19000, Math.max(30, ctx.freq * m.ratio * (1 + (physical?.response.inharmonicity ?? 0) * i * 0.006))), Math.max(0.6, m.q * (0.72 + (physical?.response.resonatorQ ?? 0.5) * 0.42)), rawAudio)
        ));
      }
      if (c.soundboard) {
        const sb = c.soundboard;
        const thudEnv = el.adsr(0.0003, 0.018 + sb.coupling * 0.03, 0, 0.012, ctx.gateSignal);
        const thud = el.mul(sb.thudGain * (0.5 + params.body), el.mul(el.svf({ mode: "bandpass" }, sb.thudHz, 1.7, el.pinknoise()), thudEnv));
        modeSignals.push(thud);
      }
      if (c.airModes?.length) {
        for (let i = 0; i < Math.min(3, c.airModes.length); i++) {
          const m = c.airModes[i];
          const resonanceHz = m.frequencyHz ?? (ctx.freq * m.ratio);
          modeSignals.push(
            el.mul(
              m.gain * (0.55 + params.body * 0.65),
              el.svf({ mode: "bandpass" }, Math.min(19000, Math.max(30, resonanceHz)), Math.max(0.6, m.q), rawAudio)
            )
          );
        }
      }
      if (c.membrane2D) {
        const m = c.membrane2D;
        const center = ap.strikeZoneLocation === "center" || ctx.action === "heel" || ctx.action === "toe";
        const edge = ap.strikeZoneLocation === "edge" || ap.strikeZoneLocation === "rim" || ctx.action === "rim";
        const radialFreq = Math.max(45, ctx.freq * (1 + (center ? 0 : 0.045 * m.radial)));
        const circularFreq = Math.max(80, ctx.freq * (edge ? 1.65 : 1.25 + m.circular * 0.3));
        const radial = el.mul(m.tension * (center ? 0.34 : 0.20) * (1 - 0.18 * m.damping), el.svf({ mode: "bandpass" }, Math.min(18000, radialFreq), 3.5, rawAudio));
        const circular = el.mul(m.strikeZoneSensitivity * (edge ? 0.34 : 0.12) * (1 - 0.12 * m.damping), el.svf({ mode: "bandpass" }, Math.min(18000, circularFreq), 2.4, rawAudio));
        modeSignals.push(radial, circular);
      }
      if (c.sympathetic) {
        const s = c.sympathetic;
        const sympatheticNodes = s.ratios.slice(0, 6).map((ratio, i) =>
          el.mul(s.coupling * (1 - i * 0.10) * (s.decayScale ?? 1), el.svf({ mode: "bandpass" }, Math.min(18000, Math.max(30, ctx.freq * ratio)), s.q, rawAudio))
        );
        modeSignals.push(...sympatheticNodes);
      }
    }

    // Gate collision transient by excitation type & action
    const exType = params.excitationType ?? instDef?.luthierPhysics?.excitationType ?? instDef?.excitationType;
    const pmSharpness = instDef?.physicalModel?.parameters?.transientSharpness ?? 1;
    const collisionEnv = el.adsr(0.0001, Math.max(0.0015, (0.004 + (1 - x.hardness) * 0.008) * pmSharpness), 0, 0.002, ctx.gateSignal);

    if (x.attackCollision > 0.05 && isCollisionAllowedForAction(exType, family, ctx.action, ctx.action)) {
      const collision = el.mul(
        familyNoiseScale * x.attackCollision * (0.70 + (physical?.response.contactHardness ?? 0.5) * 0.52) * dialectAttack * directionPhysicalGain * (0.08 + 0.16 * ctx.velBoost),
        el.mul(el.highpass(1200 + x.spectralSpread * 4200, 0.9, el.noise()), collisionEnv)
      );
      modeSignals.push(collision);
    }

    // Apply mechanical artifacts if not owned by bespoke module
    if (!ownedSections.includes('mechanicalArtifacts')) {
      const pmNoise = instDef?.physicalModel?.parameters?.breathNoise ?? 0;
      if (a.airHiss > 0.02 || pmNoise > 0.02) {
        const hissLevel = Math.max(a.airHiss, pmNoise * 0.15);
        const hiss = el.mul(familyNoiseScale * hissLevel * (0.03 + 0.10 * params.pressure), el.mul(el.highpass(3000, 0.8, el.noise()), el.mul(ctx.gateSignal, 0.65)));
        modeSignals.push(hiss);
      }
      if (a.pickZing > 0.02) {
        const zing = el.mul(familyNoiseScale * a.pickZing * 0.10, el.mul(el.svf({ mode: "bandpass" }, 4800 + ctx.b * 2600, 3.2, el.noise()), collisionEnv));
        modeSignals.push(zing);
      }
      if (a.stringSqueak > 0.02 && (ctx.action === "slide" || ctx.action === "legato" || ctx.action === "slur")) {
        modeSignals.push(el.mul(familyNoiseScale * a.stringSqueak * 0.12, el.mul(el.highpass(2500, 1.0, el.noise()), collisionEnv)));
      }
      if (a.keyThud > 0.02 || a.valveClick > 0.02 || (a.keyworkClick ?? 0) > 0.02 || (a.palletClick ?? 0) > 0.02) {
        const mechanical = el.mul(familyNoiseScale * (a.keyThud + a.valveClick + (a.keyworkClick ?? 0) + (a.palletClick ?? 0)) * 0.10, el.mul(el.svf({ mode: "bandpass" }, 1100 + ctx.b * 900, 2.4, el.noise()), collisionEnv));
        modeSignals.push(mechanical);
      }
      if ((a.slideNoise ?? 0) > 0.02) {
        const slide = el.mul(familyNoiseScale * (a.slideNoise ?? 0) * 0.08, el.mul(el.highpass(1800, 1.0, el.pinknoise()), collisionEnv));
        modeSignals.push(slide);
      }
      if ((a.reedChatter ?? 0) > 0.02) {
        const reed = el.mul(familyNoiseScale * (a.reedChatter ?? 0) * 0.06, el.mul(el.highpass(2400, 1.0, el.noise()), collisionEnv));
        modeSignals.push(reed);
      }
      if ((a.bellowsFold ?? 0) > 0.02) {
        const fold = el.mul(familyNoiseScale * (a.bellowsFold ?? 0) * 0.05, el.mul(el.lowpass(1800, 0.9, el.pinknoise()), el.mul(ctx.gateSignal, 0.7)));
        modeSignals.push(fold);
      }
      if ((a.bowRosin ?? 0) > 0.02 && (ctx.action === "bow_drag" || ctx.action === "legato" || ctx.action === "slur")) {
        const rosin = el.mul(familyNoiseScale * (a.bowRosin ?? 0) * 0.06, el.mul(el.highpass(1500, 1.1, el.pinknoise()), collisionEnv));
        modeSignals.push(rosin);
      }
      if ((a.hammerClick ?? 0) > 0.02) {
        const click = el.mul(familyNoiseScale * (a.hammerClick ?? 0) * 0.08, el.mul(el.highpass(2800, 1.0, el.noise()), collisionEnv));
        modeSignals.push(click);
      }
      if ((a.membraneFingerNoise ?? 0) > 0.02 && (ctx.action === "tap" || ctx.action === "slap" || ctx.action === "strike" || ctx.action === "staccato")) {
        const finger = el.mul(familyNoiseScale * (a.membraneFingerNoise ?? 0) * 0.07, el.mul(el.highpass(2200, 1.0, el.noise()), collisionEnv));
        modeSignals.push(finger);
      }
      if ((a.seedRattle ?? 0) > 0.02) {
        const rattle = el.mul(familyNoiseScale * (a.seedRattle ?? 0) * 0.06, el.mul(el.highpass(1800, 0.8, el.noise()), el.mul(ctx.gateSignal, 0.8)));
        modeSignals.push(rattle);
      }
      if ((a.fippleNoise ?? 0) > 0.02) {
        const fipple = el.mul(familyNoiseScale * (a.fippleNoise ?? 0) * 0.06, el.mul(el.highpass(2600, 0.9, el.noise()), collisionEnv));
        modeSignals.push(fipple);
      }
      if ((a.muteContact ?? 0) > 0.02) {
        const muteContact = el.mul(familyNoiseScale * (a.muteContact ?? 0) * 0.06, el.mul(el.lowpass(1400, 0.9, el.noise()), collisionEnv));
        modeSignals.push(muteContact);
      }
      if (a.bodyKnock > 0.02 || a.handContact > 0.02) {
        const knock = el.mul(familyNoiseScale * (a.bodyKnock + a.handContact) * 0.08, el.mul(el.svf({ mode: "bandpass" }, c.soundboard?.thudHz ?? 120, 1.4, el.pinknoise()), collisionEnv));
        modeSignals.push(knock);
      }
      if (a.rimImpact > 0.02) {
        const rim = el.mul(familyNoiseScale * a.rimImpact * (0.05 + 0.08 * ctx.velBoost), el.mul(el.highpass(1700 + x.spectralSpread * 1800, 1.2, el.noise()), collisionEnv));
        modeSignals.push(rim);
      }
      if (a.damperNoise > 0.02 && (ctx.action === "mute" || ctx.action === "staccato" || ctx.action === "release")) {
        const damper = el.mul(familyNoiseScale * a.damperNoise * 0.07, el.mul(el.lowpass(2200, 1.0, el.noise()), collisionEnv));
        modeSignals.push(damper);
      }
      if (c.bridge?.buzz > 0.25) {
        const bridgeEnv = el.adsr(0.001, Math.max(0.02, c.bridge.settlingMs / 1000), 0.10, 0.04, ctx.gateSignal);
        const buzz = el.mul(familyNoiseScale * c.bridge.buzz * 0.12, el.mul(el.highpass(2600, 2.2, el.noise()), bridgeEnv));
        modeSignals.push(buzz);
      }
    }

    if (modeSignals.length) {
      rawAudio = el.add(rawAudio, ...modeSignals);
    }

    // Single declared saturation stage: only apply generic drive tanh if excitationSaturation !== 'self-owned'
    const excitationSaturation = instDef?.luthierPhysics?.excitationSaturation ?? 'generic';
    if (excitationSaturation === 'generic') {
      const pmDrive = instDef?.physicalModel?.parameters?.nonlinearDrive ?? instDef?.physicalModel?.parameters?.stiffness ?? 0;
      const drive = 1 + (x.nonlinearDrive + pmDrive * 0.25 + (physical?.response.nonlinearTransfer ?? 0) * 0.18) * (0.4 + 1.2 * ctx.velBoost) + Math.max(0, (dialectAttack - 1) * 0.12);
      rawAudio = el.tanh(el.mul(drive, rawAudio));
    }

    if (dialectBrightness !== 1) {
      const dialectCutoff = Math.min(19000, Math.max(900, (1800 + ctx.b * 9500) * dialectBrightness));
      rawAudio = el.lowpass(dialectCutoff, 1.0, rawAudio);
    }
    if (dialectDamping !== 0) {
      const dampingCutoff = Math.min(19000, Math.max(700, 12000 * (1 - dialectDamping)));
      rawAudio = el.lowpass(dampingCutoff, 1.0, rawAudio);
    }

    // Fallback genre dialect for instruments whose physical profile has not yet
    // authored a dedicated genre entry. This keeps the existing DSP model but
    // prevents every un-authored genre from sounding like the neutral patch.
    if (!authoredDialect) {
      const transient = Math.max(0.75, Math.min(1.30, ctx.genreDialect.transient));
      const dialectDrive = Math.max(0.92, Math.min(1.22, ctx.genreDialect.drive));
      rawAudio = el.tanh(el.mul(dialectDrive, rawAudio));
      if (ctx.genreDialect.electronic) {
        const snap = el.mul((transient - 0.8) * 0.035, el.mul(el.highpass(2600, 0.9, el.noise()), el.adsr(0.00015, 0.004, 0, 0.0015, ctx.gateSignal)));
        rawAudio = el.add(rawAudio, snap);
      }
    }
  }

  // Apply declared per-instrument physicalModel insert effects chain if authored
  if (instDef?.physicalModel?.signalChain) {
    rawAudio = applyInstrumentEffectsChain(rawAudio, instDef.physicalModel.signalChain, ctx);
  }

  const releaseGate = el.sub(1, ctx.gateSignal);
  const damperThump = (ctx.model === 11 || ctx.model === 19 || ctx.model === 20)
    ? el.mul(0.14, el.mul(el.lowpass(400, 1.2, el.noise()), el.adsr(0.0002, 0.018, 0, 0.008, releaseGate)))
    : 0;
  const roomBloom = el.const({ value: 0 });
  const finalRawAudio = el.add(rawAudio, el.add(damperThump, roomBloom));
  // Decaying physical instruments own their release in the resonator. A short
  // global ADSR release here would choke plucked/struck tails at note-off.
  const gain = ctx.isDecayingInstrument
    ? ctx.velSignal
    : el.mul(ctx.velSignal, ctx.env);
  return el.mul(gain, finalRawAudio);
}

export function renderTrack(
trackId: string,
voices: VoiceState[],
params: TrackParams
): { left: Node; right: Node } {
if (voices.length === 0) {
const zero = el.const({ value: 0 });
return { left: zero, right: zero };
}
const voiceNodes = voices.map((v, idx) => {
  const vNode = renderVoice(trackId, idx, v, params);
  return el.min(0.99, el.max(-0.99, vNode));
});
const sum = voiceNodes.length === 1 ? voiceNodes[0] : el.add(...voiceNodes);
const trackVol = el.mul(el.const({ key: `track_${trackId}_vol`, value: params.volume }), sum);
const pan = Math.max(0, Math.min(1, params.pan));
const leftGain = Math.cos(pan * Math.PI * 0.5);
const rightGain = Math.sin(pan * Math.PI * 0.5);
const left = el.mul(el.const({ key: `track_${trackId}_panL`, value: leftGain }), trackVol);
const right = el.mul(el.const({ key: `track_${trackId}_panR`, value: rightGain }), trackVol);
return {
left,
right,
};
}
export interface CategorizedTrackSignal {
  left: Node;
  right: Node;
  role?: string;
  instrumentId?: string;
  trackId?: string;
  category?: 'drums' | 'sub' | 'inst';
}

export interface CategorizedTrackSignals {
  drums?: { left: Node; right: Node }[];
  sub?: { left: Node; right: Node }[];
  inst?: { left: Node; right: Node }[];
}

export function determineBusCategory(
  role?: string,
  instrumentId?: string
): 'drums' | 'sub' | 'inst' {
  const r = (role || '').toLowerCase();
  const inst = (instrumentId || '').toLowerCase();

  // Acoustic/electric bass instruments need their full harmonic body in the mix.
  // Reserve the sub bus for genuinely sub-oriented instruments; the master chain
  // may add a controlled low-end enhancement without throwing away upper harmonics.
  if (/sub-bass|808|909|log-drum|subwoofer/i.test(inst)) {
    return 'sub';
  }
  if (r === 'bass' || /bass|tuba|guitarron|bassoon/i.test(inst)) {
    return 'inst';
  }
  if (
    r === 'drums' ||
    r === 'percussion' ||
    /drum|kick|snare|hats|cajon|conga|bongo|timbal|pandeiro|shaker|guiro|cabasa|maracas|surdo|bodhran|taiko|paigu|tam-tam|percussion|perc/i.test(
      inst
    )
  ) {
    return 'drums';
  }
  return 'inst';
}

export interface MasterParams {
  highPass?: number;
  volume?: number;
  performanceMode?: PerformanceMode;
  mixCharacter?: MixCharacter;
  sidechainDepth?: number;
  drumKnock?: number;
  acousticCrosstalk?: number;
  genreId?: string;
  bpm?: number;
}

export function defaultMasterParams(): MasterParams {
  return {
    highPass: 20,
    volume: 1.0,
    performanceMode: 'acoustic-ensemble',
  };
}

export function renderMaster(
  trackSignals: CategorizedTrackSignal[] | CategorizedTrackSignals,
  params: MasterParams = defaultMasterParams()
): { left: Node; right: Node } {
  let drumSignals: { left: Node; right: Node }[] = [];
  let subSignals: { left: Node; right: Node }[] = [];
  let instSignals: { left: Node; right: Node }[] = [];

  if (Array.isArray(trackSignals)) {
    for (const sig of trackSignals) {
      const cat = sig.category ?? determineBusCategory(sig.role, sig.instrumentId);
      if (cat === 'drums') drumSignals.push(sig);
      else if (cat === 'sub') subSignals.push(sig);
      else instSignals.push(sig);
    }
  } else {
    drumSignals = trackSignals.drums ?? [];
    subSignals = trackSignals.sub ?? [];
    instSignals = trackSignals.inst ?? [];
  }

  const zero = el.const({ value: 0 });

  // 1. Drum Bus Summing & Saturation ("Knock")
  const drumLeftRaw = drumSignals.length > 0 ? (drumSignals.length === 1 ? drumSignals[0].left : el.add(...drumSignals.map(s => s.left))) : zero;
  const drumRightRaw = drumSignals.length > 0 ? (drumSignals.length === 1 ? drumSignals[0].right : el.add(...drumSignals.map(s => s.right))) : zero;

  const char = params.mixCharacter;
  const sidechainDepth = params.sidechainDepth ?? calculateSidechainDepth(char);
  const drumKnock = params.drumKnock ?? calculateDrumKnock(char);

  const drumDrive = 1.0 + drumKnock * 1.5;
  const saturatedDrumL = el.tanh(el.mul(el.const({ value: drumDrive }), drumLeftRaw));
  const saturatedDrumR = el.tanh(el.mul(el.const({ value: drumDrive }), drumRightRaw));

  // 2. Sub / Bass Bus Summing & Sidechain Ducking
  const subLeftRaw = subSignals.length > 0 ? (subSignals.length === 1 ? subSignals[0].left : el.add(...subSignals.map(s => s.left))) : zero;
  const subRightRaw = subSignals.length > 0 ? (subSignals.length === 1 ? subSignals[0].right : el.add(...subSignals.map(s => s.right))) : zero;

  // Envelope follower on drum kick frequency range (30Hz - 110Hz) with tempo-scaled release
  const bpm = params.bpm ?? 120;
  const releaseSec = (60 / bpm) * 0.25; // 16th note sync
  const kickMono = el.lowpass(110, 1.0, el.add(drumLeftRaw, drumRightRaw));
  const kickEnv = el.env(0.005, releaseSec, kickMono);

  const genreId = params.genreId ?? '';
  const isElectronic = /house|techno|dnb|bass|dubstep|garage|edm|electro|afrobeats|club/i.test(genreId);

  // Clean, phase-coherent sub ducking: avoids destructive biquad phase splitting
  const effectiveDuckDepth = isElectronic ? sidechainDepth * 0.95 : 0.22;
  const subDuckingMultiplier = el.sub(1.0, el.mul(el.const({ value: effectiveDuckDepth }), kickEnv));
  const duckedSubL = el.mul(subLeftRaw, subDuckingMultiplier);
  const duckedSubR = el.mul(subRightRaw, subDuckingMultiplier);

  // 3. Instrumental Bus Summing
  const instLeftRaw = instSignals.length > 0 ? (instSignals.length === 1 ? instSignals[0].left : el.add(...instSignals.map(s => s.left))) : zero;
  const instRightRaw = instSignals.length > 0 ? (instSignals.length === 1 ? instSignals[0].right : el.add(...instSignals.map(s => s.right))) : zero;

  // 4. Master Summing (Acoustic crosstalk Haas delays stripped for 100% phase coherence & mono compatibility)
  const masterLeftSum = el.add(saturatedDrumL, el.add(duckedSubL, instLeftRaw));
  const masterRightSum = el.add(saturatedDrumR, el.add(duckedSubR, instRightRaw));

  const totalTrackCount = Math.max(1, drumSignals.length + subSignals.length + instSignals.length);
  const headroomTrim = Math.min(1.0, 1.8 / Math.sqrt(totalTrackCount));
  const hpFreq = Math.max(15, params.highPass ?? 20);

  const hpLeft = el.highpass(hpFreq, 0.707, el.mul(el.const({ value: headroomTrim }), masterLeftSum));
  const hpRight = el.highpass(hpFreq, 0.707, el.mul(el.const({ value: headroomTrim }), masterRightSum));

  const satLeft = el.tanh(hpLeft);
  const satRight = el.tanh(hpRight);

  const vol = Math.max(0, Math.min(2.0, params.volume ?? 1.0));
  const finalLeft = el.mul(el.const({ value: vol }), satLeft);
  const finalRight = el.mul(el.const({ value: vol }), satRight);

  return { left: finalLeft, right: finalRight };
}