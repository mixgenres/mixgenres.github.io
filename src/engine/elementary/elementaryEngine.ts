import { INSTRUMENTS_BY_ID } from '../../data/instruments';
import { el } from '@elemaudio/core';
import { getLuthierModelForInstrument, type LuthierPhysicalParameters } from '../audio/LuthierAPI';
import { seedOf, randNorm } from '../generators/groove';
import type { MixCharacter } from '../../data/styles/contracts';
import { calculateSidechainDepth, calculateDrumKnock } from '../audio/mixer';
import type { InstrumentDSPProfile } from '../../data/instruments/physicalDspProfile';
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
actionType?: 'strike' | 'pluck' | 'bow_drag' | 'abanico' | 'rasgueado' | 'tap' | 'golpe' | 'golpe-caja' | 'chicharra' | 'bellows-slap' | 'strappata' | 'tambor' | 'heel' | 'toe' | 'arrastre' | 'slap' | 'mute' | 'legato' | 'slur' | 'staccato' | 'tongue' | 'accent' | 'pizzicato' | 'fall' | 'doit' | 'shake' | 'growl' | string;
technique?: string;
hitType?: string;
articulation?: string;
excitationType?: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer' | 'stick' | 'mallet' | 'breath' | 'bow' | string;
contactPoint?: number;
mass?: number;
frequencyHz?: number;
bellowsDirection?: 'opening' | 'closing';
retriggerId?: number;
attack?: number;
decay?: number;
sustain?: number;
release?: number;
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
  const exact = WIND_BRASS_REED_FORMANTS[idLower];
  if (exact) return exact;

  // Mid-tier fallback keyed by instrument name patterns
  if (/pipe|reed|sax|oboe|clarinet|bassoon|harmonica|hichiriki|duduk|shenai|zurna|bagpipe/.test(idLower)) {
    if (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') {
      console.warn(`[ElementaryEngine] Mid-tier fallback (reed) for instrument "${instrumentId}" (model ${model})`);
    }
    return WIND_BRASS_REED_FORMANTS['alto-sax'];
  }
  if (/brass|trumpet|trombone|horn|tuba|cornet|euphonium|bugle/.test(idLower)) {
    if (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') {
      console.warn(`[ElementaryEngine] Mid-tier fallback (brass) for instrument "${instrumentId}" (model ${model})`);
    }
    return WIND_BRASS_REED_FORMANTS['brass'];
  }
  if (/flute|whistle|piccolo|quena|ocarina|shakuhachi|xiao|dizi|recorder/.test(idLower)) {
    if (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') {
      console.warn(`[ElementaryEngine] Mid-tier fallback (flute) for instrument "${instrumentId}" (model ${model})`);
    }
    return WIND_BRASS_REED_FORMANTS['flute'];
  }

  // Model-based fallback
  if (model === 7) return WIND_BRASS_REED_FORMANTS['flute'];
  if (model === 15) return WIND_BRASS_REED_FORMANTS['brass'];
  if (model === 16) return WIND_BRASS_REED_FORMANTS['alto-sax'];

  if (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') {
    console.warn(`[ElementaryEngine] Default formant fallback (flute) for unknown instrument "${instrumentId}" (model ${model})`);
  }
  return WIND_BRASS_REED_FORMANTS['flute'];
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
if (INSTRUMENTS_BY_ID['upright-bass']?.bowedResonance) {
  BOWED_RESONANCES['contrabajo'] = INSTRUMENTS_BY_ID['upright-bass'].bowedResonance;
  BOWED_RESONANCES['double-bass'] = INSTRUMENTS_BY_ID['upright-bass'].bowedResonance;
};
export function getBowedResonanceProfile(instrumentId: string, bodyParam: number): BowedResonanceProfile {
const idLower = instrumentId.toLowerCase();
const def = INSTRUMENTS_BY_ID[instrumentId] || INSTRUMENTS_BY_ID[idLower];
if (def?.bowedResonance) return def.bowedResonance;
const exact = BOWED_RESONANCES[idLower];
if (exact) return exact;
const bodyFreq = 100 + (1 - bodyParam) * 450;
const bridgeHillFreq = 900 + (1 - bodyParam) * 2200;
return {
bodyFreq,
bodyQ: 2.2,
bodyGain: 0.45,
bridgeHillFreq,
bridgeHillQ: 2.5,
bridgeHillGain: 0.35,
};
}
export function modelForInstrument(instrumentId: string, luthier?: LuthierPhysicalParameters): number {
const id = instrumentId.toLowerCase();
const def = INSTRUMENTS_BY_ID[instrumentId] || INSTRUMENTS_BY_ID[id];
if (def?.elementaryModel !== undefined) return def.elementaryModel;
if (luthier?.faustProfile) {
switch (luthier.faustProfile) {
case 'spanish-guitar': return 0;
case 'electric-bass': return 3;
case 'double-bass': return 3;
case 'tres': return 0;
case 'flamenco-cajon': return 4;
}
}
const EXACT_MODELS: Record<string, number> = {
clavinet: 19,
harpsichord: 20,
'electric-guitar': 21,
'jazz-guitar': 22,
'muted-guitar': 23,
'distortion-guitar': 24,
'overdrive-guitar': 25,
'guitar-harmonics': 26,
};
const exactModel = EXACT_MODELS[id];
if (exactModel !== undefined) return exactModel;
if (/guitar|tres|cuatro|requinto|charango|vihuela|sitar|oud|kora|berimbau|cavaquinho|harp|mandolin|banjo|shamisen|guqin|pipa|guzheng|jarana|koto|dulcimer|bouzouki|sarangi/.test(id)) {
return 0;
}
if (/bass|bajo|contrabajo|tuba/.test(id)) return 3;
if (/steel-drums|steelpan|steel-pan|marimba|vibes|vibraphone|xylophone|tubular-bells|balafon|glockenspiel|celeste|music-box|crystal/.test(id)) return 8;
if (/cajon|djembe|conga|bongo|timbal|tambor(?!ine)|drum|kick|snare|perc|tabla|bombo|pandeiro|bata|surdo|zabumba|bodhran|darbuka|taiko|paigu|brush-kit/.test(id)) return 4;
if (/shaker|maraca|guiro|cabasa|guacharaca|quijada/.test(id)) return 17;
if (/cowbell|agogo|claves|woodblock|triangle|tambourine|castanets|palmas|\bride\b|kane|zapateado|gongs|bones|\bhats\b/.test(id)) return 18;
if (/violin|cello|viola|fiddle|erhu|jinghu|string/.test(id)) return 6;
if (/trumpet|trombone|\bbrass\b|\bhorn\b|horn-section|cornet|flugelhorn|tuba/.test(id)) return 15;
if (/sax|clarinet|oboe|bagpipe|uilleann|shawm|dulzaina|bombarde/.test(id)) return 16;
if (/flute|quena|zampoña|tin-whistle|low-whistle|piccolo|shakuhachi|xiao|dizi|ryuteki|hichiriki|recorder|ocarina/.test(id)) return 7;
if (/accordion|bandoneon|harmonica|shō|sho|concertina|melodica/.test(id)) return 10;
if (/grand-piano|upright-piano|piano|player-piano/.test(id)) return 11;
if (/organ|hammond|church-organ|pipe-organ/.test(id)) return 13;
if (/voice|vocal|choir|soprano|alto|tenor|baritone|chorus/.test(id)) return 12;
if (/rhodes|wurlitzer|electric-piano|fm-ep|epiano/.test(id)) return 14;
if (/piano|keys|kalimba/.test(id)) return 8;
if (/synth|lead|pad|acid|808|909|noise-sweep|dub-echo|turntable/.test(id)) return 9;
return 0;
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
0: 4.282,
2: 0.551,
3: 1.000,
4: 1.988,
5: 1.988,
6: 6.557,
7: 18.558,
8: 1.041,
9: 0.390,
10: 0.544,
11: 3.540,
12: 0.375,
13: 0.219,
14: 0.330,
15: 0.550,
16: 0.669,
17: 20.309,
18: 6.402,
19: 9.706,
20: 1.997,
21: 0.551,
22: 1.813,
23: 7.116,
24: 0.270,
25: 0.395,
26: 0.478,
};
export const GAIN_BY_INSTRUMENT: Partial<Record<string, number>> = {};
for (const [id, def] of Object.entries(INSTRUMENTS_BY_ID)) {
  if (typeof def.makeupGain === 'number') {
    GAIN_BY_INSTRUMENT[id] = def.makeupGain;
  }
}
if (INSTRUMENTS_BY_ID['upright-bass']?.makeupGain !== undefined) {
  GAIN_BY_INSTRUMENT['double-bass'] = INSTRUMENTS_BY_ID['upright-bass'].makeupGain;
};
export function makeupGainFor(modelNum: number, instrumentId?: string): number {
if (instrumentId) {
const idLower = instrumentId.toLowerCase();
const def = INSTRUMENTS_BY_ID[instrumentId] || INSTRUMENTS_BY_ID[idLower];
if (typeof def?.makeupGain === 'number') {
return def.makeupGain;
}
const override = GAIN_BY_INSTRUMENT[idLower];
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
tension: Math.max(0, Math.min(1, l.tension)),
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
pan: 0.5,
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
// Static persistent key for this voice's parameters and internal buffers
const pk = `track_${trackId}_voice_${voiceIndex}`;
const rawFreq = (voice as VoiceState & { frequencyHz?: number }).frequencyHz ?? midiToFreq(voice.note || 60);
const freq = Math.max(20, isNaN(rawFreq) ? 440 : rawFreq);
const gateSignal = el.const({ key: `${pk}_gate`, value: voice.gate ?? 0 });
const velSignal = el.const({ key: `${pk}_vel`, value: (voice.velocity ?? 0) * (1 - 0.58 * params.mute) });
const glideSec = Math.max(0.005, Math.min(0.2, (params.bendGlideMs ?? 15) / 1000));
const freqSignal = el.smooth(el.tau2pole(glideSec), el.const({ key: `${pk}_freq`, value: freq }));
const safeFreqSignal = el.max(el.const({ value: 20 }), freqSignal);
const velBoost = 0.55 + 0.6 * Math.max(0, Math.min(1, voice.velocity ?? 0));
const b = Math.max(0, Math.min(1, params.brightness * velBoost));
const rawDecayTime = Math.max(0.05, params.decay);
const muteDamping = Math.max(0.08, 1 - 0.88 * params.mute);
const decayTime = rawDecayTime * muteDamping;
const model = params.performanceMode === 'programmed-electronic' ? 9 : Math.round(params.model);
const instrumentDef = params.instrumentId ? INSTRUMENTS_BY_ID[params.instrumentId] : undefined;
const dspProfile: InstrumentDSPProfile | undefined = instrumentDef?.dspProfile;
const action = voice.actionType ?? (params.bodyTap > 0.5 ? 'golpe' : 'pluck');
const isMuted = action === 'mute' || params.mute > 0.4;

// Decaying instruments (Karplus-Strong loops, bells, drums) must not be choked by ADSR
const isDecayingInstrument = model === 0 || model === 1 || model === 2 || model === 3 || model === 4 ||
  model === 5 || model === 8 || model === 11 || model === 17 || model === 18 || model === 19 ||
  model === 20 || (model >= 21 && model <= 26);

const attack = voice.attack !== undefined ? voice.attack : (isDecayingInstrument ? 0.0004 : (0.0008 + (1 - b) * 0.01));
const release = voice.release !== undefined ? voice.release : (isMuted ? 0.012 : (isDecayingInstrument ? 0.045 : 0.06 + decayTime * 0.15));
const sustain = voice.sustain !== undefined ? voice.sustain : (isDecayingInstrument ? 1.0 : (isMuted ? 0.05 : 0.75 + 0.15 * params.body));
const envDecay = voice.decay !== undefined ? voice.decay : (isDecayingInstrument ? 12.0 : (decayTime * (isMuted ? 0.1 : 0.4)));

const attackSignal = el.const({ key: `${pk}_attack`, value: attack });
const decaySignal = el.const({ key: `${pk}_decay`, value: envDecay });
const sustainSignal = el.const({ key: `${pk}_sustain`, value: sustain });
const releaseSignal = el.const({ key: `${pk}_release`, value: release });
let env = el.adsr(attackSignal, decaySignal, sustainSignal, releaseSignal, gateSignal);
if (dspProfile?.excitationDynamics.continuousReservoir?.articulationNeverSilences) {
  env = el.adsr(0.002, 0.018, 1.0, Math.max(0.018, release * 0.35), gateSignal);
}
let rawAudio: Node;
if (action === 'golpe' || action === 'tap' || action === 'golpe-caja') {
  const bodyPunch = el.mul(el.cycle(110), el.adsr(0.0005, 0.02, 0, 0.01, gateSignal));
  const woodClick = el.mul(el.highpass(1400, 1.2, el.noise()), el.adsr(0.0002, 0.008, 0, 0.004, gateSignal));
  rawAudio = el.add(el.mul(0.75, bodyPunch), el.mul(0.25, woodClick));
} else if (action === 'chicharra') {
  // Scratchy cricket noise behind the bridge (Tango violin)
  // Highly resonant bandpassed noise modulated by an aggressive 16Hz sawtooth LFO
  const scrapeNoise = el.svf({ mode: 'bandpass' }, 4200, 6.0, el.pinknoise());
  const scrapeLfo = el.add(el.const({ value: 0.6 }), el.mul(el.const({ value: 0.4 }), el.blepsaw(el.const({ value: 16 }))));
  const cricketMod = el.mul(scrapeLfo, scrapeNoise);
  const chicharraEnv = el.adsr(0.002, 0.15, 0.2, 0.04, gateSignal);
  // Add a piercing harmonic ring to simulate the short string segment
  const ring = el.mul(0.15, el.cycle(el.mul(safeFreqSignal, 4.5)));
  rawAudio = el.mul(chicharraEnv, el.add(cricketMod, ring));
} else if (action === 'bellows-slap') {
  // Bandoneón bellows slap: wideband noise filtered at 800Hz with fast 15ms decay
  const airBurst = el.lowpass(800, 0.9, el.noise());
  const snapEnv = el.adsr(0.0005, 0.015, 0, 0.005, gateSignal);
  rawAudio = el.mul(snapEnv, airBurst);
} else if (action === 'strappata') {
  // Upright bass strappata: metallic slap + deep 60Hz resonant body thump
  const metallicSlap = el.mul(
    el.adsr(0.0003, 0.025, 0, 0.01, gateSignal),
    el.svf({ mode: 'bandpass' }, 1800, 2.8, el.noise())
  );
  const deepThump = el.mul(
    el.cycle(60),
    el.adsr(0.0005, 0.08, 0, 0.03, gateSignal)
  );
  rawAudio = el.add(el.mul(0.65, metallicSlap), el.mul(0.85, deepThump));
} else switch (model) {
case 2: {
  const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));

  // Rich broadband pitch-relative impulse for solid fundamental
  const exciteFilter = el.lowpass(el.mul(safeFreqSignal, 4.0), 0.9, el.pinknoise());
  const impulse = el.mul(el.add(el.mul(0.65, exciteFilter), el.mul(0.35, el.noise())), el.adsr(0.0005, 0.008, 0, 0.003, gateSignal));
  const dampingCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1800 }), el.mul(safeFreqSignal, el.const({ value: 3.5 + b * 6.0 }))));
  const targetDecaySeconds = 0.4 + decayTime * (0.8 + b * 1.6);
  const fbGain = fbGainForDecay(safeFreqSignal, targetDecaySeconds);
  const stringLoop = createDampedStringLoop(`${pk}:eg`, delayTimeSignal, fbGain, dampingCutoff, impulse);

  // Pure fundamental preserved: stringLoop feeds directly into drive stage without phase-cancelling comb filter
  const driven = el.tanh(el.mul(el.const({ value: 1 + params.drive * 5 }), stringLoop));
  // Speaker cabinet simulation: 100Hz HPF, 2.5kHz cone bump, 4.8kHz steep LPF
  const cabHP = el.highpass(100, 0.8, driven);
  const conePresence = el.svf({ mode: 'bandpass' }, 2500, 1.8, cabHP);
  const cabOut = el.add(cabHP, el.mul(0.25, conePresence));
  rawAudio = el.lowpass(Math.min(19000, 4600 + b * 1800), 1.2, cabOut);
  break;
}
case 19: {
  const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
  const impulse = el.mul(el.noise(), el.adsr(0.00025, 0.004, 0, 0.002, gateSignal));
  const clavCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 2000 }), el.mul(safeFreqSignal, el.const({ value: 4.0 + b * 5.5 }))));
  const targetDecaySeconds = 0.25 + decayTime * (0.4 + b * 0.8);
  const fbGain = fbGainForDecay(safeFreqSignal, targetDecaySeconds);
  const stringLoop = createDampedStringLoop(`${pk}:clav`, delayTimeSignal, fbGain, clavCutoff, impulse);
  const pickup = el.svf({ mode: 'bandpass' }, Math.min(19000, 700 + b * 1800), 1.1, stringLoop);
  const click = el.mul(0.18, el.mul(el.highpass(Math.min(19000, 2200), 1.0, el.noise()), el.adsr(0.0001, 0.003, 0, 0.0015, gateSignal)));
  rawAudio = el.lowpass(Math.min(19000, 1200 + b * 4200), 1.0, el.add(pickup, click));
  break;
}
case 20: {
  const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
  const detunedFreqSignal = el.max(el.const({ value: 20 }), el.mul(safeFreqSignal, el.const({ value: 1.003 })));
  const detunedDelaySignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), detunedFreqSignal)));
  const pluck = el.mul(el.noise(), el.adsr(0.0001, 0.0025, 0, 0.0015, gateSignal));
  const harpsiCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 2200 }), el.mul(safeFreqSignal, el.const({ value: 4.5 + b * 6.5 }))));
  const targetDecaySeconds1 = 0.35 + decayTime * (0.6 + b * 1.2);
  const targetDecaySeconds2 = targetDecaySeconds1 * 0.92;
  const fbGain1 = fbGainForDecay(safeFreqSignal, targetDecaySeconds1);
  const fbGain2 = fbGainForDecay(detunedFreqSignal, targetDecaySeconds2);
  const string1 = createDampedStringLoop(`${pk}:h1`, delayTimeSignal, fbGain1, harpsiCutoff, pluck);
  const string2 = createDampedStringLoop(`${pk}:h2`, detunedDelaySignal, fbGain2, el.mul(harpsiCutoff, el.const({ value: 0.98 })), pluck);
  const upper = el.mul(0.18, el.cycle(el.mul(safeFreqSignal, 2.0)));
  const tone = el.add(string1, el.add(el.mul(0.75, string2), upper));
  rawAudio = el.lowpass(Math.min(19000, 1400 + b * 7600), 1.0, tone);
  break;
}
case 21:
case 22:
case 23:
case 24:
case 25:
case 26: {
  const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
  const isJazz = model === 22;
  const isMutedGuitar = model === 23;
  const isDistortion = model === 24;
  const isOverdrive = model === 25;
  const isHarmonics = model === 26;

  const targetDecaySeconds = isMutedGuitar
    ? (0.08 + decayTime * 0.25)
    : isJazz
    ? (0.35 + decayTime * 0.9)
    : (0.45 + decayTime * 1.8);
  const damping = fbGainForDecay(safeFreqSignal, targetDecaySeconds);
  const attackTime = isMutedGuitar ? 0.00035 : 0.0007;

  // Rich broadband pitch-relative impulse preserves fundamental bass energy
  const exciteFilter = el.lowpass(el.mul(safeFreqSignal, 4.0), 0.9, el.pinknoise());
  const impulse = el.mul(
    el.add(el.mul(0.65, exciteFilter), el.mul(0.35, el.noise())),
    el.adsr(attackTime, isMutedGuitar ? 0.004 : 0.008, 0, 0.003, gateSignal)
  );

  const mult = isJazz ? (2.5 + b * 3.5) : isMutedGuitar ? (2.0 + b * 2.5) : (3.5 + b * 6.5);
  const loopCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1200 }), el.mul(safeFreqSignal, el.const({ value: mult }))));
  
  const stringLoop = createDampedStringLoop(`${pk}:egf`, delayTimeSignal, damping, loopCutoff, impulse);

  const driveAmount = isDistortion ? 7.5 : isOverdrive ? 4.0 : isHarmonics ? 1.6 : 1.2 + params.drive * 2.0;
  // Route stringLoop directly to drive saturator to restore full fundamental punch
  const driven = el.tanh(el.mul(el.const({ value: driveAmount }), stringLoop));

  // Speaker Cabinet Simulation (Models 21-26):
  // 1. High-pass around 80Hz - 120Hz to eliminate sub-mud
  const cabHP = el.highpass(100, 0.8, driven);
  // 2. Resonant bandpass bump around 2200Hz to simulate speaker cone presence
  const conePresence = el.svf({ mode: 'bandpass' }, 2200, 1.4, cabHP);
  const cabWithCone = el.add(cabHP, el.mul(0.35, conePresence));
  // 3. Steep low-pass filter around 4500Hz - 5500Hz to remove harsh digital fizz
  const cabCutoff = Math.min(19000, isJazz ? 4200 : 4800 + b * 700);
  const cabOut = el.lowpass(cabCutoff, 1.2, cabWithCone);

  const harmonic = isHarmonics ? el.mul(0.65, el.cycle(el.mul(safeFreqSignal, 2.0))) : 0;
  const mutedBody = isMutedGuitar ? el.mul(0.5, el.highpass(500, 1.0, cabOut)) : cabOut;

  rawAudio = el.add(mutedBody, harmonic);
  break;
}
case 3: {
  const isChicharra = action === 'chicharra' || /chicharra/i.test(voice.articulation ?? '');
  const isArco = action === 'bow_drag' || action === 'arco' || isChicharra || params.bowPressure > 0.6;
  if (isChicharra) {
    // Tango Chicharra: Harsh cicada bow scrape near the bridge with high bow pressure
    const chicharraNoise = el.highpass(3000, 1.3, el.noise());
    const frictionGate = el.adsr(0.002, Math.max(0.08, decayTime * 0.7), 0.4, 0.03, gateSignal);
    const chicharraScratch = el.mul(
      el.mul(0.9, chicharraNoise),
      frictionGate
    );
    const bridgeScrape = el.svf({ mode: 'bandpass' }, 1900, 2.5, chicharraScratch);
    rawAudio = el.add(chicharraScratch, el.mul(0.6, bridgeScrape));
  } else if (isArco) {
    // Authentic Double Bass Arco: Helmholtz stick-slip friction with acoustic body and bridge resonance
    const bowJitter = el.mul(el.const({ value: 0.002 }), el.noise());
    const jitteredFreq = el.mul(freqSignal, el.add(1.0, bowJitter));
    const rawSaw = el.blepsaw(jitteredFreq);
    const subO = el.sin(el.mul(2 * Math.PI, el.syncphasor(jitteredFreq, gateSignal)));
    const osc = el.add(el.mul(0.55, rawSaw), el.mul(0.45, subO));

    const effectiveBowPressure = Math.max(0.15, params.bowPressure);
    const frictionAttackGate = el.adsr(0.002, 0.05, 0.35, 0.035, gateSignal);
    const frictionNoise = el.mul(
      el.mul(effectiveBowPressure * 0.32, frictionAttackGate),
      el.highpass(550, 1.0, el.pinknoise())
    );
    const rawExcited = el.add(osc, frictionNoise);

    // Asymmetric stick-slip non-linearity
    const asymmetry = el.mul(0.18, gateSignal);
    const stickSlip = el.tanh(el.add(asymmetry, el.mul(el.add(1.0, el.mul(effectiveBowPressure * 2.4, gateSignal)), rawExcited)));

    // Double bass body and bridge hill resonances
    const bowedProf = getBowedResonanceProfile(params.instrumentId ?? 'upright-bass', params.body);
    const bodyRes = el.svf({ mode: 'bandpass' }, Math.min(19000, bowedProf.bodyFreq || 75), bowedProf.bodyQ || 2.5, stickSlip);
    const bridgeHill = el.svf({ mode: 'bandpass' }, Math.min(19000, bowedProf.bridgeHillFreq || 1600), bowedProf.bridgeHillQ || 2.2, stickSlip);
    const shaped = el.add(stickSlip, el.add(el.mul(0.55, bodyRes), el.mul(0.35, bridgeHill)));

    const dynamicCutoff = el.min(
      el.const({ value: 19000 }),
      el.max(
        el.const({ value: 200 }),
        el.mul(el.const({ value: 380 + b * 2400 }), el.add(0.4, el.mul(effectiveBowPressure * 0.8, gateSignal)))
      )
    );
    rawAudio = el.lowpass(dynamicCutoff, 1.25, shaped);
  } else {
    const idLower = (params.instrumentId ?? '').toLowerCase();
    const isUpright = /upright|acoustic-bass|contrabajo|guitarron/.test(idLower);
    const isSlap = action === 'slap' || /slap/.test(idLower);
    const isPick = /pick/.test(idLower);
    const isFretless = /fretless/.test(idLower);

    const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));

    // Full-bodied broadband exciter preserves fundamental sub-energy
    const exciteFilter = el.lowpass(el.mul(safeFreqSignal, 3.5), 0.9, el.pinknoise());
    let impulse: Node;
    if (isUpright) {
      impulse = el.mul(
        el.add(el.mul(0.7, exciteFilter), el.mul(0.3, el.lowpass(Math.min(19000, 1200), 0.8, el.noise()))),
        el.adsr(0.0015, 0.020, 0, 0.008, gateSignal)
      );
    } else if (isPick) {
      impulse = el.mul(
        el.add(el.mul(0.6, exciteFilter), el.mul(0.4, el.svf({ mode: 'bandpass' }, Math.min(19000, 2400), 1.4, el.noise()))),
        el.adsr(0.0004, 0.008, 0, 0.003, gateSignal)
      );
    } else if (isSlap) {
      impulse = el.mul(
        el.add(el.mul(0.5, exciteFilter), el.mul(0.5, el.noise())),
        el.adsr(0.0003, 0.006, 0, 0.002, gateSignal)
      );
    } else {
      impulse = el.mul(
        el.add(el.mul(0.65, exciteFilter), el.mul(0.35, el.noise())),
        el.adsr(0.001, 0.015, 0, 0.005, gateSignal)
      );
    }

    const slapClick = isSlap ? el.mul(0.5, el.adsr(0.0002, 0.004, 0, 0.002, gateSignal)) : 0;
    const targetDecaySeconds = isUpright ? (0.5 + decayTime * 1.2) : (0.6 + decayTime * 1.8);
    const damping = fbGainForDecay(safeFreqSignal, targetDecaySeconds);
    const bassMult = isUpright ? (3.0 + b * 4.0) : (4.0 + b * 6.0);
    const bassCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 600 }), el.mul(safeFreqSignal, el.const({ value: bassMult }))));
    const stringLoop = createDampedStringLoop(`${pk}:bass`, delayTimeSignal, damping, bassCutoff, el.add(impulse, slapClick));

    if (isUpright) {
      const air = el.svf({ mode: 'bandpass' }, 60, 3.5, stringLoop);
      const wood = el.svf({ mode: 'bandpass' }, 110, 2.5, stringLoop);
      const acousticBody = el.add(stringLoop, el.add(el.mul(0.4, air), el.mul(0.3, wood)));
      rawAudio = el.svf({ mode: 'lowpass' }, Math.min(19000, 140 + b * 1800), 1.1, acousticBody);
    } else if (isFretless) {
      const subPhasor = el.syncphasor(freqSignal, gateSignal);
      const subSine = el.mul(0.35, el.sin(el.mul(2 * Math.PI, subPhasor)));
      const mixed = el.add(stringLoop, subSine);
      const mwah = el.svf({ mode: 'bandpass' }, 750, 2.2, mixed);
      const lp = el.svf({ mode: 'lowpass' }, Math.min(19000, 180 + b * 2000), 1.2, mixed);
      rawAudio = el.add(lp, el.mul(0.35, mwah));
    } else if (isSlap) {
      const subPhasor = el.syncphasor(freqSignal, gateSignal);
      const subSine = el.mul(0.45, el.sin(el.mul(2 * Math.PI, subPhasor)));
      const mixed = el.add(stringLoop, subSine);
      const snap = el.svf({ mode: 'bandpass' }, Math.min(19000, 3200), 1.8, mixed);
      const bottom = el.svf({ mode: 'lowpass' }, Math.min(19000, 160 + b * 2200), 1.3, mixed);
      rawAudio = el.add(bottom, el.mul(0.4, snap));
    } else {
      const subPhasor = el.syncphasor(freqSignal, gateSignal);
      const subSine = el.mul(0.4, el.sin(el.mul(2 * Math.PI, subPhasor)));
      const mixed = el.add(stringLoop, subSine);
      rawAudio = el.svf({ mode: 'lowpass' }, Math.min(19000, 120 + b * 2200), 1 + params.drive * 1.5, mixed);
    }
  }
  break;
}
case 4:
case 5: {
  const hitSeed = seedOf(trackId, voiceIndex, 1234);
  const detuneSemitones = (randNorm(hitSeed ^ 0x1234) * 3.5) / 100;
  const f0 = el.mul(freqSignal, Math.pow(2, detuneSemitones / 12));

  const instId = (params.instrumentId ?? '').toLowerCase();
  const construction = params.bodyConstruction ?? 'wood-box';
  const isMetalShell = construction === 'metal-shell' || /timbal|metal|steel|agogo|bell|snare-metal/.test(instId);
  const isWoodBox = construction === 'wood-box' || /cajon|cajón|box|slit-drum/.test(instId);
  const isHeelToe = action === 'heel' || action === 'toe' || /heel|toe/i.test(voice.hitType ?? '');

  const isLogDrum = instId.includes('log-drum');
  const isMeend = action === 'meend' || /meend/i.test(voice.hitType ?? '');
  const bodyMult = 0.5 + params.body * 2.5;

  // Overhaul Membrane Drums: Pitch-Swept Transient Model
  // Fast pitch envelope modulates downward for kick/tom punch, OR sweeps upward slowly for Indian Tabla Meend
  const pitchEnv = el.adsr(
    isMeend ? 0.15 : 0.001,
    isMeend ? 0.4 : (isHeelToe ? 0.02 : (0.045 + params.body * 0.02)),
    0,
    0.006,
    gateSignal
  );

  const sweepAmount = isMeend ? -0.4 : (isLogDrum ? 0.2 : (isHeelToe ? 0.8 : (isMetalShell ? 1.4 : (isWoodBox ? 2.0 : 2.6 + b * 1.0))));
  const dynamicF0 = el.mul(f0, el.add(1.0, el.mul(sweepAmount, pitchEnv)));

  // Drum body amplitude decay (heel/toe palm rocking heavily damps the head)
  const shellDecay = isHeelToe ? 0.05 : (decayTime * (0.35 + 0.5 * params.body) * (isWoodBox ? 0.75 : 1.0));
  const shellCavityDecay = isWoodBox ? shellDecay * 1.5 * bodyMult : shellDecay * 0.9 * bodyMult;
  const bodyAmpEnv = el.adsr(0.0005, shellDecay, 0, 0.03 + shellDecay * 0.1, gateSignal);
  const fundamentalCycle = el.mul(bodyAmpEnv, el.cycle(dynamicF0));

  // Transient noise burst (crack/snap on attack)
  const isRim = voice.contactPoint ? voice.contactPoint < 0.25 : false;
  const noiseTilt = 1800 + randNorm(hitSeed ^ 0x7777) * 250;
  const snapNoiseGain = isLogDrum ? 0.03 : (isHeelToe ? 0.08 : (isRim ? 0.65 : 0.25));
  const snapNoise = el.mul(
    snapNoiseGain,
    el.mul(el.highpass(noiseTilt, 1.2, el.noise()), el.adsr(0.0002, isHeelToe ? 0.005 : 0.012, 0, 0.004, gateSignal))
  );

  // Metal shell drums retain a touch of inharmonic ring
  let metalRing: Node = el.const({ value: 0 });
  if (isMetalShell && !isHeelToe) {
    const ringDecay = shellDecay * 0.7;
    metalRing = el.mul(
      0.18,
      el.mul(
        el.add(el.cycle(el.mul(f0, 2.76)), el.mul(0.7, el.cycle(el.mul(f0, 3.41)))),
        el.adsr(0.0003, ringDecay, 0, 0.015, gateSignal)
      )
    );
  }

  // Shell burst / body thump (lowered for heel/toe)
  const shellFreq = isWoodBox ? el.mul(f0, 0.42) : el.mul(f0, 0.58);
  const shellBurstGain = isLogDrum ? 1.4 : (isHeelToe ? 0.06 : (isWoodBox ? 0.65 * (0.3 + params.body) : 0.25));
  const shellBurst = el.mul(
    shellBurstGain,
    el.mul(
      el.svf({ mode: 'bandpass' }, shellFreq, isWoodBox ? 1.6 : 2.0, fundamentalCycle),
      el.adsr(0.001, shellCavityDecay, 0, 0.04, gateSignal)
    )
  );

  // Punchy sum: fundamental punch + snap transient + cavity resonance
  const drumSum = el.add(fundamentalCycle, el.add(snapNoise, el.add(metalRing, shellBurst)));
  rawAudio = el.tanh(el.mul(el.const({ value: 1.4 + params.drive * 1.5 }), drumSum));
  break;
}
case 17: {
  const hitSeed = seedOf(trackId, voiceIndex, 5678);
  const durDev = Math.max(0.8, Math.min(1.25, 1.0 + randNorm(hitSeed ^ 0x8888) * 0.12));
  const freqDev = randNorm(hitSeed ^ 0x9999) * 200;

  const baseBurst = el.mul(el.noise(), el.adsr(0.001, (0.02 + decayTime * 0.06) * durDev, 0, 0.03 + decayTime * 0.08, gateSignal));
  
  // Guiro / Scraper Ridge Articulation:
  // If instrument is a scraper (guiro, guacharaca, dikanza, cabasa), modulate amplitude with fast oscillator
  // where rate is inversely proportional to stroke duration (faster stroke = hits ridges faster)
  const instId = (params.instrumentId ?? '').toLowerCase();
  const isScraper = /guiro|guacharaca|dikanza|cabasa/.test(instId);
  let burst = baseBurst;
  if (isScraper) {
    const strokeDur = Math.max(0.03, Math.min(0.8, decayTime * 0.25));
    const scrapeRate = Math.max(14, Math.min(75, 1.6 / strokeDur));
    const ridgeOsc = el.cycle(scrapeRate);
    const ridgeMod = el.add(el.const({ value: 0.55 }), el.mul(el.const({ value: 0.45 }), ridgeOsc));
    const modulatedNoise = el.mul(ridgeMod, baseBurst);
    burst = el.add(el.mul(0.65, modulatedNoise), el.mul(0.35, baseBurst));
  }

  const bodyPeak = 1100 + params.body * 2800 + freqDev;
  const shell = el.svf({ mode: 'bandpass' }, bodyPeak, 2.0, burst);
  const brightNoise = el.mul(0.5 + b * 0.5, el.highpass(2400 + b * 4200 + freqDev, 0.9, burst));
  rawAudio = el.add(el.mul(0.55, shell), el.mul(0.65, brightNoise));
  break;
}
case 18: {
  // Dense Phase Modulation (FM) cluster for metal bells/percussion
  const carrierPhasor = el.syncphasor(safeFreqSignal, gateSignal);

  // 3 Inharmonic modulator ratios (1.414, 2.718, 4.236)
  const mod1 = el.sin(el.mul(2 * Math.PI * 1.414, carrierPhasor));
  const mod2 = el.sin(el.mul(2 * Math.PI * 2.718, carrierPhasor));
  const mod3 = el.sin(el.mul(2 * Math.PI * 4.236, carrierPhasor));

  // Short exponential decay envelopes for modulation depths
  const envMod1 = el.adsr(0.0002, 0.045 + decayTime * 0.07, 0, 0.02, gateSignal);
  const envMod2 = el.adsr(0.0002, 0.025 + decayTime * 0.04, 0, 0.015, gateSignal);
  const envMod3 = el.adsr(0.0001, 0.012 + decayTime * 0.02, 0, 0.01, gateSignal);

  const modIndex1 = el.mul(el.mul(el.const({ value: 3.4 + b * 2.8 }), velSignal), envMod1);
  const modIndex2 = el.mul(el.mul(el.const({ value: 2.6 + b * 2.2 }), velSignal), envMod2);
  const modIndex3 = el.mul(el.mul(el.const({ value: 1.8 + b * 1.6 }), velSignal), envMod3);

  const totalMod = el.add(el.mul(modIndex1, mod1), el.add(el.mul(modIndex2, mod2), el.mul(modIndex3, mod3)));
  const carrierPhase = el.add(el.mul(2 * Math.PI, carrierPhasor), totalMod);

  // Mix pure sine fundamental with FM bell to ensure hollow woodblocks/cowbells have a solid fundamental clack
  const bell = el.add(el.mul(0.65, el.sin(el.mul(2 * Math.PI, carrierPhasor))), el.mul(0.35, el.sin(carrierPhase)));

  // Initial strike transient
  const strikeNoise = el.mul(0.35, el.mul(el.highpass(3800, 1.2, el.noise()), el.adsr(0.0001, 0.006, 0, 0.003, gateSignal)));

  // Pure slightly detuned sine resonance tail
  const tailPhasor = el.syncphasor(el.mul(safeFreqSignal, 1.002), gateSignal);
  const tailSine = el.mul(0.38, el.sin(el.mul(2 * Math.PI, tailPhasor)));

  const bellSum = el.add(bell, el.add(strikeNoise, tailSine));
  const sizzleEnv = el.adsr(0.001, decayTime * 0.6, 0, 0.05, gateSignal);
  const sizzle = el.mul(el.highpass(6500, 1.0, el.noise()), sizzleEnv);
  const finalBellSum = el.add(bellSum, el.mul(0.25 + b * 0.25, sizzle));
  rawAudio = el.lowpass(Math.min(19000, 2400 + b * 8500), 1.0, finalBellSum);
  break;
}
case 6: {
  const isPizz = action === 'pluck' || action === 'pizzicato' || action === 'tambor';
  if (isPizz) {
    const isTambor = action === 'tambor';
    const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
    const impulse = el.mul(el.noise(), el.adsr(0.0005, isTambor ? 0.003 : 0.006, 0, 0.002, gateSignal));
    const pizzCutoff = isTambor
      ? el.min(el.const({ value: 1200 }), el.mul(safeFreqSignal, el.const({ value: 1.5 })))
      : el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1000 }), el.mul(safeFreqSignal, el.const({ value: 3.0 + b * 5.0 }))));
    const targetDecaySeconds = isTambor ? 0.08 : (0.2 + decayTime * (0.4 + b * 0.8));
    const fbGain = fbGainForDecay(safeFreqSignal, targetDecaySeconds);
    const stringLoop = createDampedStringLoop(`${pk}:pizz`, delayTimeSignal, fbGain, pizzCutoff, impulse);

    // Tango Tambor / Box Hit: Add a heavy woody acoustic body thump scaling with instrument size
    const bowedProf = getBowedResonanceProfile(params.instrumentId ?? '', params.body);
    const woodKnock = isTambor ? el.mul(
      el.svf({ mode: 'bandpass' }, bowedProf.bodyFreq, 1.5, el.pinknoise()),
      el.adsr(0.001, 0.04, 0, 0.01, gateSignal)
    ) : el.const({ value: 0 });

    const mutedSnapFilter = isTambor ? 650 : Math.min(19000, 800 + b * 4000);
    rawAudio = el.add(el.lowpass(mutedSnapFilter, 1.1, stringLoop), el.mul(isTambor ? 3.5 : 0, woodKnock));
  } else {
    const isShortStroke = params.articulation > 0.65;
    const noteSeed = seedOf(trackId, voiceIndex, 3456);
    const bowDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed ^ 0x5a5a) * 0.10));
    // Hard "bite" of rosin grabbing the string for short bow strokes (spiccato / chop)
    const rosinBiteMultiplier = isShortStroke ? 1.85 : 1.0;
    const effectiveBowPressure = Math.max(0.1, params.bowPressure * bowDev * rosinBiteMultiplier);

    // Helmholtz stick-slip oscillator with oscillator-level unison detuning for ensemble strings
    const bowJitter = el.mul(el.const({ value: 0.003 }), el.noise());
    const jitteredFreq = el.mul(freqSignal, el.add(1.0, bowJitter));
    const idLower = (params.instrumentId ?? '').toLowerCase();
    const isEnsemble = /string|orchestra|section|ensemble/.test(idLower);
    const isFiddle = idLower === 'fiddle';
    const isCelloBass = /cello|bass|contrabajo/.test(idLower);

    // Fiddle requires much more aggressive rosin scratch for bluegrass/folk "shuffle" bowing
    const rosinGrit = isFiddle ? 1.8 : 1.0;

    // Dynamic Ensemble Chorusing: Use subtle LFOs to create a true orchestral section spread
    const osc = isEnsemble
      ? (() => {
          const lfo1 = el.cycle(0.6);
          const lfo2 = el.cycle(0.83);
          const d1 = el.add(1.0, el.mul(0.002, lfo1));
          const d2 = el.add(1.0, el.mul(0.0025, lfo2));
          const s1 = el.blepsaw(el.mul(jitteredFreq, d1));
          const s2 = el.blepsaw(el.mul(jitteredFreq, d2));
          const s3 = el.blepsaw(jitteredFreq);
          const rawSaw = el.mul(0.33, el.add(s1, el.add(s2, s3)));
          const subO = el.sin(el.mul(2 * Math.PI, el.syncphasor(jitteredFreq, gateSignal)));
          return el.add(el.mul(0.6, rawSaw), el.mul(0.4, subO));
        })()
      : (() => {
          const rawSaw = el.blepsaw(jitteredFreq);
          const subO = el.sin(el.mul(2 * Math.PI, el.syncphasor(jitteredFreq, gateSignal)));
          return el.add(el.mul(0.55, rawSaw), el.mul(0.45, subO));
        })();

    // Attack envelope: drastically shortened for spiccato/chop, sharp decaying transient
    const frictionAttackGate = isShortStroke
      ? el.adsr(0.0003, 0.012, 0, 0.008, gateSignal)
      : el.adsr(0.001, 0.040, 0.12, 0.025, gateSignal);

    const frictionNoise = el.mul(
      el.mul(effectiveBowPressure * (isShortStroke ? 0.42 : 0.28) * rosinGrit, frictionAttackGate),
      el.highpass(isFiddle ? 2500 : 800, 1.0, el.pinknoise())
    );
    const rawExcited = el.add(osc, frictionNoise);

    // Non-linear stick-slip saturation
    // Cello and Bass get an asymmetric bias to simulate heavy, low-end rosin "growl"
    const asymmetry = isCelloBass ? el.mul(0.15, gateSignal) : el.const({ value: 0 });
    const stickSlip = el.tanh(el.add(asymmetry, el.mul(el.add(1.0, el.mul(effectiveBowPressure * 2.2, gateSignal)), rawExcited)));

    // Instrument body and bridge resonances
    const bowedProf = getBowedResonanceProfile(params.instrumentId ?? '', params.body);
    const bodyRes = el.svf({ mode: 'bandpass' }, Math.min(19000, bowedProf.bodyFreq), bowedProf.bodyQ, stickSlip);
    const bridgeHill = el.svf({ mode: 'bandpass' }, Math.min(19000, bowedProf.bridgeHillFreq), bowedProf.bridgeHillQ, stickSlip);
    const shaped = el.add(stickSlip, el.add(el.mul(bowedProf.bodyGain, bodyRes), el.mul(bowedProf.bridgeHillGain, bridgeHill)));

    // Lowpass cutoff dynamically scaled with bowPressure and gateSignal
    const baseCutoff = (450 + b * 4200) * (isShortStroke ? 1.25 : 1.0);
    const dynamicCutoff = el.min(
      el.const({ value: 19000 }),
      el.max(
        el.const({ value: 320 }),
        el.mul(
          el.const({ value: baseCutoff }),
          el.add(0.45, el.mul(effectiveBowPressure * 0.85, gateSignal))
        )
      )
    );

    rawAudio = el.lowpass(dynamicCutoff, 1.2, shaped);
  }
  break;
}
case 7: {
  const noteSeed = seedOf(trackId, voiceIndex, 7890);
  const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

  const scoopDepth = 0.04 * (0.5 + params.pressure * 0.5);
  const scoopEnv = el.adsr(0.0003, 0.024, 0, 0.006, gateSignal);
  const dynamicFreqSignal = el.mul(freqSignal, el.sub(1.0, el.mul(scoopDepth, scoopEnv)));
  const safeDynamicFreqSignal = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 20 }), dynamicFreqSignal));

  const breath = el.mul(0.12 * (1 - params.pressure) * breathDev, el.noise());
  const isReservoir = Boolean(dspProfile?.excitationDynamics.continuousReservoir?.articulationNeverSilences);
  const exciterEnv = isReservoir ? el.const({ value: 1 }) : el.adsr(0.015, 0.06, 0.70, 0.05, gateSignal);
  const phasor = el.syncphasor(safeDynamicFreqSignal, gateSignal);
  // Flute is closer to a sine/triangle, raw saw is too harsh
  const coreTone = el.add(
    el.mul(0.8, el.sin(el.mul(2 * Math.PI, phasor))),
    el.mul(0.2, el.blepsquare(safeDynamicFreqSignal))
  );
  const jetInput = el.add(el.mul(exciterEnv, coreTone), breath);

  const isSlur = action === 'legato' || action === 'slur' || action === 'bow_drag' || (params.articulation < 0.25 && action !== 'staccato');
  const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || params.articulation > 0.65;
  const tongueLevel = isSlur ? 0.03 : (isStaccato ? 0.55 : 0.25);

  const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 7);
  const chiffBurst = profile.tongueType === 'soft-puff'
    ? el.lowpass(Math.min(19000, profile.tongueFreq), 1.0, el.noise())
    : el.svf({ mode: 'bandpass' }, Math.min(19000, profile.tongueFreq), 2.2, el.noise());
  const chiff = el.mul(tongueLevel, el.mul(chiffBurst, el.adsr(0.0004, 0.009, 0, 0.003, gateSignal)));

  // Dynamic lowpass swept by envelope & velocity for warm, organic acoustic tube resonance
  const filterEnv = el.adsr(0.012, 0.08, 0.65, 0.06, gateSignal);
  const cutoff = el.min(
    el.const({ value: 18000 }),
    el.max(
      el.const({ value: 350 }),
      el.add(safeDynamicFreqSignal, el.mul(el.const({ value: 2200 + b * 4500 }), el.mul(filterEnv, velSignal)))
    )
  );
  const filtered = el.lowpass(cutoff, 1.1, el.add(jetInput, chiff));
  rawAudio = el.mul(0.9, el.tanh(el.mul(el.const({ value: 1.2 + params.drive * 1.5 }), filtered)));
  break;
}
case 15: {
  const noteSeed = seedOf(trackId, voiceIndex, 2345);
  const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

  const isFall = action === 'fall' || action === 'drop' || /fall|drop|caida|pitch-env-down/i.test(voice.articulation ?? '');
  const isDoit = action === 'doit' || action === 'rip' || action === 'rip-up' || /doit|rip|pitch-env-up/i.test(voice.articulation ?? '');
  const isGrowl = action === 'growl' || /growl|throat-growl/i.test(voice.articulation ?? '');
  const isShake = action === 'shake' || /shake|lip-trill/i.test(voice.articulation ?? '');

  // Dynamic Pitch Gestures: Scoop, Fall (downward glide on release), Doit (upward glide on release), Shake (lip-trill FM)
  const scoopDepth = (isFall || isDoit) ? 0 : 0.045 * (0.5 + params.pressure * 0.5);
  const scoopEnv = el.adsr(0.0003, 0.024, 0, 0.006, gateSignal);
  const scoopOffset = el.mul(scoopDepth, scoopEnv);

  const fallGlide = isFall ? el.mul(el.const({ value: -0.18 }), el.sub(1.0, gateSignal)) : el.const({ value: 0 });
  const doitGlide = isDoit ? el.mul(el.const({ value: 0.20 }), el.sub(1.0, gateSignal)) : el.const({ value: 0 });
  const shakeMod = isShake ? el.mul(el.cycle(7.8), el.mul(el.const({ value: 0.058 }), gateSignal)) : el.const({ value: 0 });

  const pitchMod = el.add(el.sub(1.0, scoopOffset), el.add(fallGlide, el.add(doitGlide, shakeMod)));
  const dynamicFreqSignal = el.mul(freqSignal, pitchMod);
  const safeDynamicFreqSignal = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 20 }), dynamicFreqSignal));

  // Brass buzz is an asymmetric mix of saw and square to eliminate 'car horn' hollowness
  let lipBuzz: Node = el.add(
    el.mul(0.65, el.blepsaw(safeDynamicFreqSignal)), 
    el.mul(0.35, el.blepsquare(safeDynamicFreqSignal))
  );

  // Growl: Mix a ~35–50Hz AM/FM layer roughened with noise into lip excitation
  if (isGrowl) {
    const growlNoise = el.mul(0.25, el.noise());
    const growlMod = el.mul(el.add(el.cycle(42), growlNoise), el.mul(el.const({ value: 0.45 }), gateSignal));
    lipBuzz = el.add(lipBuzz, el.mul(lipBuzz, growlMod));
  }

  const breathNoise = el.mul(0.04 * (1 - params.pressure) * breathDev, el.noise());
  const excited = el.add(lipBuzz, breathNoise);

  const isSlur = action === 'legato' || action === 'slur' || action === 'bow_drag' || (params.articulation < 0.25 && action !== 'staccato');
  const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || params.articulation > 0.65;
  const tongueLevel = isSlur ? 0.03 : (isStaccato ? 0.65 : 0.32);

  const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 15);
  const lipAttackBurst = el.svf({ mode: 'bandpass' }, Math.min(19000, profile.tongueFreq), 1.8, el.noise());
  const lipTransient = el.mul(tongueLevel, el.mul(lipAttackBurst, el.adsr(0.0003, 0.008, 0, 0.003, gateSignal)));

  // Dynamic Lowpass + Saturation with live continuous mute sweep
  const hornEnv = el.adsr(0.008, 0.06, 0.75, 0.08, gateSignal);
  const openHornCutoff = el.min(
    el.const({ value: 18000 }),
    el.max(
      el.const({ value: 250 }),
      el.add(safeDynamicFreqSignal, el.mul(el.const({ value: 3500 + b * 6500 }), el.mul(hornEnv, velSignal)))
    )
  );

  // Live continuous mute sweep (reading instrument cutoffFreqHz)
  const muteDef = instrumentDef?.performanceArticulations?.mute;
  const muteCutoffHz = muteDef?.cutoffFreqHz ?? 1600;
  const hornCutoff = el.add(
    el.mul(el.sub(1.0, params.mute), openHornCutoff),
    el.mul(params.mute, el.const({ value: Math.min(1800, muteCutoffHz) }))
  );

  // Add physical horn body resonances via formant profile (including f3)
  const f1 = el.mul(profile.f1.gain, el.svf({ mode: 'bandpass' }, profile.f1.freq, profile.f1.q, excited));
  const f2 = el.mul(profile.f2.gain, el.svf({ mode: 'bandpass' }, profile.f2.freq, profile.f2.q, excited));
  const f3Freq = profile.f3?.freq ?? Math.min(19000, profile.f2.freq * 1.55);
  const f3Gain = profile.f3?.gain ?? 0.25;
  const f3Q = profile.f3?.q ?? 2.8;
  const f3 = el.mul(f3Gain, el.svf({ mode: 'bandpass' }, Math.min(19000, f3Freq), f3Q, excited));
  const bodyResonance = el.mul(params.body, el.add(f1, el.add(f2, f3)));

  const filteredHorn = el.lowpass(hornCutoff, 1.2, el.add(excited, el.add(lipTransient, bodyResonance)));
  // Soft clipper accurately models acoustic wave-steepening in the brass flare
  const drive = el.add(el.const({ value: 0.9 + params.drive * 1.0 }), el.mul(el.const({ value: 2.2 }), velSignal));
  rawAudio = el.mul(0.85, el.tanh(el.mul(filteredHorn, drive)));
  break;
}
case 16: {
  const noteSeed = seedOf(trackId, voiceIndex, 6789);
  const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

  const isFall = action === 'fall' || action === 'drop' || /fall|drop|caida|pitch-env-down/i.test(voice.articulation ?? '');
  const isDoit = action === 'doit' || action === 'rip' || action === 'rip-up' || /doit|rip|pitch-env-up/i.test(voice.articulation ?? '');
  const isGrowl = action === 'growl' || /growl|throat-growl/i.test(voice.articulation ?? '');
  const isShake = action === 'shake' || /shake|lip-trill/i.test(voice.articulation ?? '');

  // Dynamic Pitch Gestures: Scoop, Fall, Doit, Shake
  const scoopDepth = (isFall || isDoit) ? 0 : 0.04 * (0.5 + params.pressure * 0.5);
  const scoopEnv = el.adsr(0.0003, 0.024, 0, 0.006, gateSignal);
  const scoopOffset = el.mul(scoopDepth, scoopEnv);

  const fallGlide = isFall ? el.mul(el.const({ value: -0.18 }), el.sub(1.0, gateSignal)) : el.const({ value: 0 });
  const doitGlide = isDoit ? el.mul(el.const({ value: 0.20 }), el.sub(1.0, gateSignal)) : el.const({ value: 0 });
  const shakeMod = isShake ? el.mul(el.cycle(7.8), el.mul(el.const({ value: 0.055 }), gateSignal)) : el.const({ value: 0 });

  const pitchMod = el.add(el.sub(1.0, scoopOffset), el.add(fallGlide, el.add(doitGlide, shakeMod)));
  const dynamicFreqSignal = el.mul(freqSignal, pitchMod);
  const safeDynamicFreqSignal = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 20 }), dynamicFreqSignal));

  // Sax/Reed is a rich saw with a slight hollow square characteristic
  let reedPulse: Node = el.add(
    el.mul(0.85, el.blepsaw(safeDynamicFreqSignal)),
    el.mul(0.15, el.blepsquare(safeDynamicFreqSignal))
  );

  // Growl: Mix a ~35–50Hz AM/FM layer roughened with noise into reed excitation
  if (isGrowl) {
    const growlNoise = el.mul(0.25, el.noise());
    const growlMod = el.mul(el.add(el.cycle(44), growlNoise), el.mul(el.const({ value: 0.45 }), gateSignal));
    reedPulse = el.add(reedPulse, el.mul(reedPulse, growlMod));
  }

  const breathNoise = el.mul(0.08 * (1 - params.pressure) * breathDev, el.noise());
  const excited = el.add(reedPulse, breathNoise);

  const isSlur = action === 'legato' || action === 'slur' || action === 'bow_drag' || (params.articulation < 0.25 && action !== 'staccato');
  const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || params.articulation > 0.65;
  const tongueLevel = isSlur ? 0.03 : (isStaccato ? 0.65 : 0.30);

  const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 16);
  const reedTongueBurst = el.highpass(Math.min(19000, profile.tongueFreq), 1.2, el.noise());
  const tongueTransient = el.mul(tongueLevel, el.mul(reedTongueBurst, el.adsr(0.0002, 0.006, 0, 0.002, gateSignal)));

  // Dynamic Lowpass + Saturation for warm, punchy reed tone
  const reedEnv = el.adsr(0.006, 0.055, 0.72, 0.06, gateSignal);
  const reedCutoff = el.min(
    el.const({ value: 18000 }),
    el.max(
      el.const({ value: 300 }),
      el.add(safeDynamicFreqSignal, el.mul(el.const({ value: 3000 + b * 5500 }), el.mul(reedEnv, velSignal)))
    )
  );

  // Add physical woody reed body resonances via formant profile (including f3)
  const f1 = el.mul(profile.f1.gain, el.svf({ mode: 'bandpass' }, profile.f1.freq, profile.f1.q, excited));
  const f2 = el.mul(profile.f2.gain, el.svf({ mode: 'bandpass' }, profile.f2.freq, profile.f2.q, excited));
  const f3Freq = profile.f3?.freq ?? Math.min(19000, profile.f2.freq * 1.55);
  const f3Gain = profile.f3?.gain ?? 0.22;
  const f3Q = profile.f3?.q ?? 2.8;
  const f3 = el.mul(f3Gain, el.svf({ mode: 'bandpass' }, Math.min(19000, f3Freq), f3Q, excited));
  const bodyResonance = el.mul(params.body, el.add(f1, el.add(f2, f3)));

  const filteredReed = el.lowpass(reedCutoff, 1.15, el.add(excited, el.add(tongueTransient, bodyResonance)));
  const drive = el.add(el.const({ value: 1.3 + params.drive * 1.8 }), el.mul(el.const({ value: 1.5 }), velSignal));
  rawAudio = el.mul(0.85, el.tanh(el.mul(filteredReed, drive)));
  break;
}
case 11: {
  // Velocity-dependent hammer lowpass filter: soft hits = dark thump, hard hits = bright crack
  const hammerCutoff = el.min(
    el.const({ value: 18000 }),
    el.max(
      el.const({ value: 380 }),
      el.mul(el.const({ value: 1100 + b * 5200 }), el.add(0.25, el.mul(0.85, velSignal)))
    )
  );
  const hammerFilteredNoise = el.lowpass(hammerCutoff, 0.9, el.noise());
  const hammer = el.mul(hammerFilteredNoise, el.adsr(0.00015, 0.0035 + (1 - b) * 0.004, 0, 0.002, gateSignal));

  // Piano dual-string unison with subtle natural acoustic chorus (detuning < 0.2%)
  const len1 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
  const freq2 = el.max(el.const({ value: 20 }), el.mul(safeFreqSignal, el.const({ value: 1.0018 })));
  const len2 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), freq2)));

  const pianoCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1600 }), el.mul(safeFreqSignal, el.const({ value: 3.5 + b * 6.5 }))));
  const targetDecaySeconds1 = 0.8 + decayTime * (1.2 + b * 2.0);
  const targetDecaySeconds2 = targetDecaySeconds1 * 0.92;

  const s1 = createDampedStringLoop(`${pk}:p1`, len1, fbGainForDecay(safeFreqSignal, targetDecaySeconds1), pianoCutoff, hammer);
  const s2 = createDampedStringLoop(`${pk}:p2`, len2, fbGainForDecay(freq2, targetDecaySeconds2), el.mul(pianoCutoff, el.const({ value: 0.96 })), hammer);

  // Clean soundboard coupling without discordant inharmonic detuning (s3 and sInharm stripped)
  const soundboard = el.add(el.mul(0.55, s1), el.mul(0.45, s2));
  const rimRes = el.svf({ mode: 'bandpass' }, 130, 2.2, soundboard);
  const tone = el.add(soundboard, el.mul(0.20, rimRes));

  rawAudio = el.lowpass(Math.min(19000, 1000 + b * 7500), 1.0, tone);
  break;
}
case 12: {
  // Subtle human vibrato (5.5 Hz, ~1.2% depth)
  const vibratoLfo = el.cycle(5.5);
  const vibratoFreq = el.mul(safeFreqSignal, el.add(1.0, el.mul(el.const({ value: 0.012 }), vibratoLfo)));

  const source = el.blepsaw(vibratoFreq);
  const breath = el.mul(0.06 + 0.12 * (1 - params.pressure), el.noise());
  const excited = el.add(source, breath);

  // 4 Parallel standard 'Ah' vowel formants: F1: 730, F2: 1090, F3: 2440, F4: 3400
  const f1 = el.mul(1.00, el.svf({ mode: 'bandpass' }, 730, 6.0, excited));
  const f2 = el.mul(0.75, el.svf({ mode: 'bandpass' }, 1090, 7.0, excited));
  const f3 = el.mul(0.45, el.svf({ mode: 'bandpass' }, 2440, 8.0, excited));
  const f4 = el.mul(0.30, el.svf({ mode: 'bandpass' }, 3400, 9.0, excited));

  const choirVowel = el.add(f1, el.add(f2, el.add(f3, f4)));
  rawAudio = el.lowpass(Math.min(19000, 8500), 1.0, choirVowel);
  break;
}
case 13: {
  // 6 Tonewheel drawbars
  const dSub = el.mul(0.65, el.cycle(el.mul(safeFreqSignal, 0.5)));   // 16' (Sub)
  const dQuint = el.mul(0.50, el.cycle(el.mul(safeFreqSignal, 1.5))); // 5 1/3' (Quint)
  const dFund = el.mul(0.85, el.cycle(safeFreqSignal));              // 8' (Fund)
  const d8th = el.mul(0.60, el.cycle(el.mul(safeFreqSignal, 2.0)));  // 4' (8th)
  const d12th = el.mul(0.40, el.cycle(el.mul(safeFreqSignal, 3.0))); // 2 2/3' (12th)
  const d15th = el.mul(0.30, el.cycle(el.mul(safeFreqSignal, 4.0))); // 2' (15th)
  const drawbars = el.add(dSub, el.add(dQuint, el.add(dFund, el.add(d8th, el.add(d12th, d15th)))));

  // Key click: 5ms high-passed noise burst on Note On
  const keyClick = el.mul(0.24, el.mul(el.highpass(3600, 1.2, el.noise()), el.adsr(0.0001, 0.005, 0, 0.002, gateSignal)));
  const organRaw = el.add(drawbars, keyClick);

  // Leslie Rotary effect: modulation of delay line (Doppler FM) and amplitude (AM)
  const rotarySpeed = params.styleFlavor > 0.65 ? 6.0 : 1.2;
  const rotaryLfo = el.cycle(rotarySpeed);
  const dopplerDelaySamples = el.add(el.const({ value: 100 }), el.mul(el.const({ value: 30 }), rotaryLfo));
  const dopplerDelay = el.delay({ key: `${pk}:leslie`, size: 44100 }, dopplerDelaySamples, el.const({ value: 0 }), organRaw);
  const amMod = el.add(el.const({ value: 0.82 }), el.mul(el.const({ value: 0.18 }), rotaryLfo));
  const leslieTone = el.mul(amMod, dopplerDelay);

  // Gated organ amp envelope
  const isBubble = action === 'bubble' || action === 'staccato' || params.articulation > 0.7;
  const organEnv = el.adsr(0.003, isBubble ? 0.08 : 0.02, isBubble ? 0.0 : 0.95, isBubble ? 0.06 : 0.04, gateSignal);
  rawAudio = el.mul(organEnv, el.lowpass(Math.min(19000, (isBubble ? 2800 : 4800) + b * 5500), 0.9, leslieTone));
  break;
}
case 14: {
  // 2-operator Phase Modulation (FM) Rhodes / EP model
  const phasor = el.syncphasor(safeFreqSignal, gateSignal);
  // Lower FM ratio for a realistic tine bark, plus a pure fundamental sine
  const mod = el.sin(el.mul(2 * Math.PI * 3.5, phasor));
  const fundamental = el.sin(el.mul(2 * Math.PI, phasor));

  // Exponential decay envelope for the metallic tine bark
  const barkEnv = el.adsr(0.0004, 0.06 + decayTime * 0.10, 0.02, 0.03, gateSignal);
  const modIndex = el.mul(
    el.mul(el.const({ value: 2.0 + b * 4.0 }), velSignal),
    barkEnv
  );

  const carrierPhase = el.add(el.mul(2 * Math.PI, phasor), el.mul(modIndex, mod));
  const fmBark = el.sin(carrierPhase);
  // Mix warm fundamental with the FM bark
  const carrier = el.add(el.mul(0.6, fundamental), el.mul(0.4, fmBark));

  // Subtle tine click on initial hammer contact
  const tineClick = el.mul(0.14, el.mul(el.highpass(2600, 1.2, el.noise()), el.adsr(0.0001, 0.005, 0, 0.002, gateSignal)));
  const tone = el.add(carrier, tineClick);

  rawAudio = el.lowpass(Math.min(19000, 1600 + b * 7500), 1.0, tone);
  break;
}
case 10: {
  const idLower = (params.instrumentId ?? '').toLowerCase();
  const isBandoneon = idLower === 'bandoneon';
  const isConcertina = idLower === 'concertina';
  const isAccordion = idLower === 'accordion';
  const noteSeed = seedOf(trackId, voiceIndex, 5150);

  // --- Weeping vibrato (bandoneon.ts: rateHz 5.2, depthCents 28, onsetDelayMs 250) ---
  // Real players ease vibrato into a held note rather than starting it at attack,
  // and only apply it on sustained/legato phrasing -- not on marcato chord stabs,
  // arrastre drags or the golpe/bellows-slap percussive hits, which stay dry.
  const shortHitArticulations = ['staccato', 'marcato', 'accent', 'bellows-slap', 'golpe-caja', 'tremolo', 'arrastre'];
  const wantsVibrato = isBandoneon && !shortHitArticulations.includes(action);
  const vibratoDepthRatio = Math.pow(2, 28 / 1200) - 1; // 28 cents -> ~1.63% frequency swing
  const vibratoOnsetEnv = el.adsr(0.25, 0.02, 1.0, 0.02, gateSignal); // 250ms ease-in, matches onsetDelayMs
  const vibLfo = el.cycle(5.2);
  const vibratoMod = wantsVibrato
    ? el.add(1, el.mul(vibratoDepthRatio, el.mul(vibLfo, vibratoOnsetEnv)))
    : el.const({ value: 1 });
  const reedFreq = el.mul(freqSignal, vibratoMod);

  // Free reeds are pressure-driven, not generic subtractive oscillators.
  // Bandoneón uses dry 8' + 4' banks -- but real reed pairs are two separate
  // physical reeds, never perfectly phase-locked at an exact 2:1 ratio.
  // A few cents of natural mistuning on the 4' voice (plus a touch of its own
  // rounding-off, since the smaller reed plate radiates a purer/quieter tone)
  // breaks static phase cancellation into an organic beating shimmer.
  const fourFootDetuneCents = isBandoneon ? 5 + randNorm(noteSeed) * 3 : 0;
  const fourFootFreq = el.mul(reedFreq, Math.pow(2, fourFootDetuneCents / 1200) * 2);
  const eightFoot = el.blepsaw(reedFreq);
  const fourFootRaw = el.blepsaw(fourFootFreq);
  const fourFoot = isBandoneon
    ? el.lowpass(el.mul(reedFreq, 6.4), 0.8, fourFootRaw)
    : fourFootRaw;
  const sixteenFoot = el.blepsaw(el.mul(reedFreq, 0.5));
  const registerText = `${voice.technique ?? ''} ${voice.hitType ?? ''} ${voice.articulation ?? ''}`.toLowerCase();
  const musetteRegister = isAccordion && registerText.includes('musette');
  const dryRegister = isAccordion && (registerText.includes('dry') || registerText.includes('master') || registerText.includes('clarinet'));
  const reedCore = isBandoneon
    ? el.add(el.mul(0.78, eightFoot), el.mul(0.22, fourFoot))
    : isConcertina
      ? el.add(el.mul(0.76, eightFoot), el.mul(0.24, fourFoot))
      : isAccordion && musetteRegister
        ? el.add(el.mul(0.31, el.blepsaw(el.mul(reedFreq, 0.986))), el.mul(0.38, eightFoot), el.mul(0.31, el.blepsaw(el.mul(reedFreq, 1.014))))
        : isAccordion && dryRegister
          ? el.add(el.mul(0.20, sixteenFoot), el.mul(0.58, eightFoot), el.mul(0.22, fourFoot))
          : isAccordion
            ? el.add(el.mul(0.34, sixteenFoot), el.mul(0.56, eightFoot), el.mul(0.10, fourFoot))
            : el.add(el.mul(0.72, eightFoot), el.mul(0.28, fourFoot));

  const reservoir = dspProfile?.excitationDynamics.continuousReservoir;
  const bellows = dspProfile?.excitationDynamics.bisonoricAsymmetry;
  const bellowsClosing = voice.bellowsDirection
    ? voice.bellowsDirection === 'closing'
    : /cerrar|closing|close|push|pushing/.test(`${action} ${(voice.hitType ?? '')}`.toLowerCase());
  const pressure = reservoir?.pressure ?? params.pressure;
  const directionBias = bellows
    ? (bellowsClosing ? bellows.closing.pressure : bellows.opening.pressure)
    : 1;
  const directionFormant = bellows ? (bellowsClosing ? 1 + bellows.closing.formantShift : 1 + bellows.opening.formantShift) : 1;

  const reedPressureRaw = el.mul(
    reedCore,
    el.add(el.const({ value: 0.70 + pressure * 0.42 }), el.mul(el.const({ value: 0.18 * directionBias }), velSignal))
  );
  // Reed-level nonlinearity: the tongue compresses/buzzes harder under
  // higher bellows pressure before entering the air chamber.
  const reedPressure = isBandoneon
    ? el.tanh(el.mul(el.add(1.0, el.mul(0.85, pressure)), reedPressureRaw))
    : reedPressureRaw;

  const chamberFreq = (isBandoneon ? 820 : isAccordion ? 860 : 1050) * directionFormant;
  const chamberQ = isBandoneon ? 2.8 : 1.7;
  const chamber = el.svf({ mode: 'bandpass' }, chamberFreq, chamberQ, reedPressure);
  const secondChamber = el.svf({ mode: 'bandpass' }, chamberFreq * 2.03, 2.0, reedPressure);

  const flowNoise = el.mul(
    el.lowpass(4200 + b * 2200, 0.8, el.pinknoise()),
    el.mul(0.045 + (dspProfile?.mechanicalArtifacts.bellowsNoise ?? 0) * 0.16, gateSignal)
  );

  let bellowsImpact: any = el.const({ value: 0 });
  if (isBandoneon) {
    const knee = dspProfile?.excitationDynamics.kneeDropImpact;
    const kneeEnv = el.adsr(0.0002, (knee?.decayMs ?? 18) / 1000, 0, 0.004, gateSignal);
    const kneeNoise = el.highpass(1800 + b * 2500, 0.8, el.noise());
    bellowsImpact = el.mul((knee?.gain ?? 0.8) * (0.35 + velBoost * 0.7), el.mul(kneeNoise, kneeEnv));
  }

  // Shift weight from the dry reed toward the chamber-shaped resonance so the
  // wood box does more of the work coloring the tone.
  rawAudio = el.lowpass(
    Math.min(19000, (isBandoneon ? 4400 : 4200) + b * (isBandoneon ? 4000 : 5200)),
    1.0,
    el.add(el.mul(isBandoneon ? 0.44 : 0.58, reedPressure), el.add(el.mul(isBandoneon ? 0.50 : 0.42, chamber), el.add(el.mul(0.12, secondChamber), el.add(flowNoise, bellowsImpact))))
  );
  break;
}
case 8: {
  const f0 = freqSignal;
  const bar0 = el.mul(el.cycle(f0), el.adsr(0.0003, decayTime * 0.4, 0, 0.01, gateSignal));
  const bar1 = el.mul(0.35, el.mul(el.cycle(el.mul(f0, 2.756)), el.adsr(0.0003, decayTime * 0.2, 0, 0.005, gateSignal)));
  const bar2 = el.mul(0.15, el.mul(el.cycle(el.mul(f0, 5.404)), el.adsr(0.0003, decayTime * 0.1, 0, 0.002, gateSignal)));

  const strike = el.mul(0.3, el.adsr(0.0002, 0.005, 0, 0.002, gateSignal));
  rawAudio = el.add(strike, el.add(bar0, el.add(bar1, bar2)));
  break;
}
case 9: {
  const p1 = el.syncphasor(freqSignal, gateSignal);
  const p2 = el.syncphasor(el.mul(freqSignal, 1.004), gateSignal);
  const sawResettable = el.sub(el.mul(2.0, p1), 1.0);
  const squareResettable = el.tanh(el.mul(8.0, el.sin(el.mul(2 * Math.PI, p2))));
  const subSine = el.sin(el.mul(2 * Math.PI, p1));
  const sig = el.add(el.mul(0.35, sawResettable), el.add(el.mul(0.35, squareResettable), el.mul(0.30, subSine)));
  const cut = 300 + b * 7500;
  const q = 1 + params.resonance * 4;
  rawAudio = el.svf({ mode: 'lowpass' }, cut, q, sig);
  break;
}
case 0:
case 1:
default: {
  const B = 0.00015;
  const isRasgueado = action === 'abanico' || action === 'rasgueado' || params.articulation > 0.6;
  const excitation = voice.excitationType ?? params.excitationType ?? 'fingerpad';
  const construction = params.bodyConstruction ?? 'wood-box';
  const numCourses = params.courses ?? 1;
  const hasSympathetic = Boolean(params.sympatheticStrings);

  // Broadband pink noise pitch-relative filter ensures robust fundamental bass energy
  const broadbandPluck = el.lowpass(el.mul(safeFreqSignal, 4.0), 0.9, el.pinknoise());

  let impulse: Node;
  if (isRasgueado) {
    const burstCount = 5;
    const bursts = Array.from({ length: burstCount }, (_, i) =>
      el.adsr(0.0003 + i * 0.003, 0.0055, 0, 0.0025, gateSignal)
    );
    const rasgNoise = el.add(el.mul(0.6, broadbandPluck), el.mul(0.4, el.noise()));
    impulse = el.mul(rasgNoise, bursts.reduce((acc, burst) => el.add(acc, burst), el.const({ value: 0 })));
  } else if (excitation === 'hard-pick') {
    const burstEnv = el.adsr(0.0002, 0.0035, 0, 0.002, gateSignal);
    const burstNoise = el.add(el.mul(0.65, broadbandPluck), el.mul(0.35, el.svf({ mode: 'bandpass' }, 2200, 1.2, el.noise())));
    impulse = el.mul(burstNoise, burstEnv);
  } else if (excitation === 'plectrum') {
    const burstEnv = el.adsr(0.0003, 0.0045, 0, 0.0025, gateSignal);
    const burstNoise = el.add(el.mul(0.60, broadbandPluck), el.mul(0.40, el.svf({ mode: 'bandpass' }, 1800, 1.3, el.noise())));
    impulse = el.mul(burstNoise, burstEnv);
  } else if (excitation === 'nail') {
    const burstEnv = el.adsr(0.0004, 0.0055, 0, 0.003, gateSignal);
    const burstNoise = el.add(el.mul(0.70, broadbandPluck), el.mul(0.30, el.svf({ mode: 'bandpass' }, 1600, 1.1, el.noise())));
    impulse = el.mul(burstNoise, burstEnv);
  } else if (excitation === 'hammer') {
    const burstEnv = el.adsr(0.0006, 0.007, 0, 0.004, gateSignal);
    const burstNoise = el.add(el.mul(0.75, broadbandPluck), el.mul(0.25, el.svf({ mode: 'bandpass' }, 850, 1.5, el.noise())));
    impulse = el.mul(burstNoise, burstEnv);
  } else {
    const burstEnv = el.adsr(0.0008, 0.009, 0, 0.005, gateSignal);
    const burstNoise = el.add(el.mul(0.80, broadbandPluck), el.mul(0.20, el.lowpass(1400, 0.8, el.noise())));
    impulse = el.mul(burstNoise, burstEnv);
  }

  const plectrumChoke = el.mul(-0.25, el.mul(el.svf({ mode: 'bandpass' }, 1200, 1.4, el.noise()), el.adsr(0.0001, 0.002, 0, 0.001, gateSignal)));
  impulse = el.add(impulse, plectrumChoke);

  let stringSignal: Node;
  const baseDelaySignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
  const cutoffMult = construction === 'board'
    ? (2.8 + b * 4.5)
    : construction === 'skin-faced'
    ? (3.8 + b * 6.5)
    : (3.2 + b * 6.0);
  const stringCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1200 }), el.mul(safeFreqSignal, el.const({ value: cutoffMult }))));

  const targetDecaySeconds = 0.35 + decayTime * (0.6 + b * 1.5);
  const d1 = fbGainForDecay(safeFreqSignal, targetDecaySeconds);

  if (numCourses > 1) {
    const loop1 = createDampedStringLoop(`${pk}:c1`, baseDelaySignal, d1, stringCutoff, impulse);

    const freqCourse2 = el.max(el.const({ value: 20 }), el.mul(safeFreqSignal, el.const({ value: 1.00277 })));
    const delayCourse2 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), freqCourse2)));
    const d2 = fbGainForDecay(freqCourse2, targetDecaySeconds * 0.94);
    const loop2 = createDampedStringLoop(`${pk}:c2`, delayCourse2, d2, el.mul(stringCutoff, el.const({ value: 0.96 })), impulse);

    if (numCourses >= 3) {
      const freqCourse3 = el.max(el.const({ value: 20 }), el.mul(safeFreqSignal, el.const({ value: 0.99757 })));
      const delayCourse3 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), freqCourse3)));
      const d3 = fbGainForDecay(freqCourse3, targetDecaySeconds * 0.88);
      const loop3 = createDampedStringLoop(`${pk}:c3`, delayCourse3, d3, el.mul(stringCutoff, el.const({ value: 0.93 })), impulse);
      stringSignal = el.mul(0.48, el.add(loop1, el.add(loop2, loop3)));
    } else {
      stringSignal = el.mul(0.62, el.add(loop1, loop2));
    }
  } else {
    const inharmonicFreq = el.max(el.const({ value: 20 }), el.mul(safeFreqSignal, el.const({ value: Math.sqrt(1 + B * 4) })));
    const inharmonicDelay = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), inharmonicFreq)));
    const loop1 = createDampedStringLoop(`${pk}:s1`, baseDelaySignal, d1, stringCutoff, impulse);
    const d2 = fbGainForDecay(inharmonicFreq, targetDecaySeconds * 0.85);
    const loop2 = createDampedStringLoop(`${pk}:s2`, inharmonicDelay, d2, el.mul(stringCutoff, el.const({ value: 0.9 })), impulse);
    stringSignal = el.add(loop1, el.mul(0.25, loop2));
  }

  // Sitar / Shamisen / Tambura "Jawari" Buzz Bridge:
  // Flat bridge causes string to buzz hard on attack and gradually settle into purer sustain
  const instId = (params.instrumentId ?? '').toLowerCase();
  const physical = dspProfile?.physicalDetails;
  const hasJawari = /sitar|shamisen|tambura/.test(instId);
  if (hasJawari) {
    // Sitar/Shamisen bridge buzz: highly non-linear, bright spectral multiplier
    const jawariEnv = el.adsr(0.001, 0.18 + decayTime * 0.30, 0.15, 0.08, gateSignal);
    const buzzAmount = el.add(el.const({ value: 1.0 }), el.mul(el.const({ value: 8.5 }), jawariEnv));
    // Asymmetric wave-folding to generate the bright "twang" harmonics
    const folded = el.sin(el.mul(stringSignal, buzzAmount));
    stringSignal = el.add(el.mul(0.5, stringSignal), el.mul(0.5, folded));
  }

  let bodyOut: Node;
  if (construction === 'gourd') {
    const highPassed = el.highpass(140, 0.9, stringSignal);
    const m1 = el.svf({ mode: 'bandpass' }, 280, 3.8, highPassed);
    const m2 = el.svf({ mode: 'bandpass' }, 640, 3.2, highPassed);
    const m3 = el.svf({ mode: 'bandpass' }, 1250, 2.8, highPassed);
    bodyOut = el.add(highPassed, el.add(el.mul(0.30, m1), el.add(el.mul(0.28, m2), el.mul(0.18, m3))));
  } else if (construction === 'skin-faced') {
    const m1 = el.svf({ mode: 'bandpass' }, 420, 4.8, stringSignal);
    const m2 = el.svf({ mode: 'bandpass' }, 890, 3.8, stringSignal);
    const m3 = el.svf({ mode: 'bandpass' }, 1650, 3.0, stringSignal);
    bodyOut = el.add(stringSignal, el.add(el.mul(0.35, m1), el.add(el.mul(0.25, m2), el.mul(0.20, m3))));
  } else if (construction === 'board') {
    const m1 = el.svf({ mode: 'bandpass' }, 135, 2.2, stringSignal);
    const m2 = el.svf({ mode: 'bandpass' }, 270, 2.4, stringSignal);
    const m3 = el.svf({ mode: 'bandpass' }, 520, 1.8, stringSignal);
    const smoothedString = el.lowpass(Math.min(19000, 5500), 0.8, stringSignal);
    bodyOut = el.add(smoothedString, el.add(el.mul(0.40, m1), el.add(el.mul(0.28, m2), el.mul(0.16, m3))));
  } else if (construction === 'solid-electric') {
    const m1 = el.svf({ mode: 'bandpass' }, 450, 1.8, stringSignal);
    const m2 = el.svf({ mode: 'bandpass' }, 2400, 1.5, stringSignal);
    bodyOut = el.add(stringSignal, el.add(el.mul(0.15, m1), el.mul(0.20, m2)));
  } else {
    const airRes = el.svf({ mode: 'bandpass' }, 100, 3.0, stringSignal);
    const woodRes = el.svf({ mode: 'bandpass' }, 220, 2.5, stringSignal);
    const topRes = el.svf({ mode: 'bandpass' }, 380, 2.0, stringSignal);
    bodyOut = el.add(stringSignal, el.add(el.mul(0.35, airRes), el.add(el.mul(0.25, woodRes), el.mul(0.15, topRes))));
  }

  // Instrument-specific resonator mechanisms. These are intentionally keyed to the physical
  // mechanism, not merely the instrument family, so obscure instruments do not collapse into
  // a generic guitar/zither/drum/wind preset.
  if (physical) {
    const sys = physical.system;
    const r = physical.response;
    const collisionEnv = el.adsr(0.0002, 0.006, 0, 0.002, gateSignal);
    if (sys === 'long-zither') {
      const ji = el.svf({ mode: 'bandpass' }, el.add(980, el.mul(safeFreqSignal, 0.55)), 5.2, stringSignal);
      const board = el.svf({ mode: 'bandpass' }, 165, 2.8, stringSignal);
      const tsume = el.mul(0.08 + r.contactHardness * 0.10, el.mul(el.highpass(3200, 1.1, el.noise()), collisionEnv));
      bodyOut = el.add(bodyOut, el.mul(r.bodyCoupling * 0.18, board), el.mul(0.10, ji), tsume);
    } else if (sys === 'bridge-less-long-zither') {
      const softBody = el.svf({ mode: 'bandpass' }, 120, 1.8, stringSignal);
      const floatingHarmonic = el.svf({ mode: 'bandpass' }, el.mul(safeFreqSignal, 2), 7.0, stringSignal);
      bodyOut = el.add(el.mul(0.82, bodyOut), el.mul(r.bodyCoupling * 0.16, softBody), el.mul(0.12, floatingHarmonic));
    } else if (sys === 'multi-string-bridge-zither') {
      const bridge = el.svf({ mode: 'bandpass' }, 1150, 3.8, stringSignal);
      const afterlength = el.svf({ mode: 'bandpass' }, el.mul(safeFreqSignal, 1.5), 18, stringSignal);
      bodyOut = el.add(bodyOut, el.mul(0.12 + r.bodyCoupling * 0.08, bridge), el.mul(0.10, afterlength));
    } else if (sys === 'fretted-lute') {
      const fretClick = el.mul(0.06 + r.contactHardness * 0.06, el.mul(el.highpass(2600, 1.2, el.noise()), collisionEnv));
      bodyOut = el.add(bodyOut, fretClick);
    } else if (sys === 'unfretted-skin-lute') {
      const skinRing = el.svf({ mode: 'bandpass' }, 520, 4.2, stringSignal);
      bodyOut = el.add(bodyOut, el.mul(0.18, skinRing));
    } else if (sys === 'fretted-lute-with-sympathetics') {
      const jawari = el.svf({ mode: 'bandpass' }, el.min(9000, el.mul(safeFreqSignal, 3.8)), 8.0, stringSignal);
      bodyOut = el.add(bodyOut, el.mul(r.nonlinearTransfer * 0.28, jawari));
    } else if (sys === 'five-string-plucked-membrane-resonator') {
      const head = el.svf({ mode: 'bandpass' }, 900, 5.5, stringSignal);
      const rim = el.svf({ mode: 'bandpass' }, 1850, 2.6, stringSignal);
      bodyOut = el.add(bodyOut, el.mul(0.22, head), el.mul(0.08, rim));
    } else if (sys === 'single-string-bowed-flexible-bow') {
      const gourdOpen = el.svf({ mode: 'bandpass' }, 420, 2.8, stringSignal);
      const stick = el.mul(0.08, el.mul(el.highpass(1800, 1.0, el.noise()), collisionEnv));
      bodyOut = el.add(bodyOut, el.mul(0.25 + params.mute * 0.15, gourdOpen), stick);
    }
  }

  let finalAcoustic = bodyOut;
  if (hasSympathetic) {
    const droneBase = 146.83; 
    const tarabRatios = [1.0, 1.125, 1.25, 1.333, 1.5, 1.667, 1.875, 2.0, 2.25, 2.5];
    const sympatheticTap = el.mul(0.14, stringSignal);
    const tarabNodes = tarabRatios.map(r => el.svf({ mode: 'bandpass' }, droneBase * r, 24.0, sympatheticTap));
    const sumTarab = tarabNodes.reduce((acc, curr) => el.add(acc, curr));
    finalAcoustic = el.add(bodyOut, el.mul(0.85, sumTarab));
  }

  const filterCutoff = Math.min(19000, construction === 'board'
    ? 700 + b * 4500
    : (construction === 'skin-faced' ? 1200 + b * 7500 : 900 + b * 6800));
  // Pure acoustic resonance preserved without comb-filter phase notch
  rawAudio = el.lowpass(filterCutoff, 1.0, finalAcoustic);
  break;
}}
// Instrument-specific physical coupling layer. This is deliberately applied after the family model:
// the model supplies the excitation, while the profile supplies material, body, mechanics and style behavior.
if (dspProfile) {
  const x = dspProfile.excitationDynamics;
  const c = dspProfile.coupledResonators;
  const a = dspProfile.mechanicalArtifacts;
  const ap = dspProfile.articulationPhysics;
  const dialect = params.dialect ? dspProfile.genreDialects[params.dialect.toLowerCase()] : undefined;
  const physical = dspProfile.physicalDetails;
  const dialectAttack = dialect?.attack ?? 1;
  const dialectBrightness = dialect?.brightness ?? 1;
  const dialectDamping = dialect?.damping ?? 0;
  const directionText = `${action} ${(voice.hitType ?? '')}`.toLowerCase();
  const bisonoric = dspProfile?.excitationDynamics.bisonoricAsymmetry;
  const directionPhysicalGain = bisonoric
    ? (/cerrar|closing|close|push|pushing|down/.test(directionText) ? bisonoric.closing.pressure : bisonoric.opening.pressure)
    : 1;
  const modeSignals: Node[] = [];
  for (let i = 0; i < Math.min(4, c.bodyModes.length); i++) {
    const m = c.bodyModes[i];
    modeSignals.push(el.mul(
      m.gain * (0.72 + (physical?.response.bodyCoupling ?? 0.5) * 0.48),
      el.svf({ mode: 'bandpass' }, Math.min(19000, Math.max(30, freq * m.ratio * (1 + (physical?.response.inharmonicity ?? 0) * i * 0.006))), Math.max(0.6, m.q * (0.72 + (physical?.response.resonatorQ ?? 0.5) * 0.42)), rawAudio)
    ));
  }
  if (c.soundboard) {
    const sb = c.soundboard;
    const thudEnv = el.adsr(0.0003, 0.018 + sb.coupling * 0.03, 0, 0.012, gateSignal);
    const thud = el.mul(sb.thudGain * (0.5 + params.body), el.mul(el.svf({ mode: 'bandpass' }, sb.thudHz, 1.7, el.pinknoise()), thudEnv));
    modeSignals.push(thud);
  }
  if (c.membrane2D) {
    const m = c.membrane2D;
    const center = ap.strikeZoneLocation === 'center' || action === 'heel' || action === 'toe';
    const edge = ap.strikeZoneLocation === 'edge' || ap.strikeZoneLocation === 'rim' || action === 'rim';
    const radialFreq = Math.max(45, freq * (1 + (center ? 0 : 0.045 * m.radial)));
    const circularFreq = Math.max(80, freq * (edge ? 1.65 : 1.25 + m.circular * 0.3));
    const radial = el.mul(m.tension * (center ? 0.34 : 0.20) * (1 - 0.18 * m.damping), el.svf({ mode: 'bandpass' }, Math.min(18000, radialFreq), 3.5, rawAudio));
    const circular = el.mul(m.strikeZoneSensitivity * (edge ? 0.34 : 0.12) * (1 - 0.12 * m.damping), el.svf({ mode: 'bandpass' }, Math.min(18000, circularFreq), 2.4, rawAudio));
    modeSignals.push(radial, circular);
  }
  if (c.sympathetic) {
    const s = c.sympathetic;
    const sympatheticNodes = s.ratios.slice(0, 6).map((ratio, i) =>
      el.mul(s.coupling * (1 - i * 0.10) * (s.decayScale ?? 1), el.svf({ mode: 'bandpass' }, Math.min(18000, Math.max(30, freq * ratio)), s.q, rawAudio))
    );
    modeSignals.push(...sympatheticNodes);
  }

  // Physical attack artifacts are velocity-coupled and therefore cannot be represented by a fixed ADSR attack alone.
  const collisionEnv = el.adsr(0.0001, Math.max(0.0015, 0.004 + (1 - x.hardness) * 0.008), 0, 0.002, gateSignal);
  if (x.attackCollision > 0.05) {
    const collision = el.mul(
      x.attackCollision * (0.70 + (physical?.response.contactHardness ?? 0.5) * 0.52) * dialectAttack * directionPhysicalGain * (0.08 + 0.16 * velBoost),
      el.mul(el.highpass(1200 + x.spectralSpread * 4200, 0.9, el.noise()), collisionEnv)
    );
    modeSignals.push(collision);
  }
  if (a.airHiss > 0.02) {
    const hiss = el.mul(a.airHiss * (0.03 + 0.10 * params.pressure), el.mul(el.highpass(3000, 0.8, el.noise()), el.mul(gateSignal, 0.65)));
    modeSignals.push(hiss);
  }
  if (a.pickZing > 0.02) {
    const zing = el.mul(a.pickZing * 0.10, el.mul(el.svf({ mode: 'bandpass' }, 4800 + b * 2600, 3.2, el.noise()), collisionEnv));
    modeSignals.push(zing);
  }
  if (a.stringSqueak > 0.02 && (action === 'slide' || action === 'legato' || action === 'slur')) {
    modeSignals.push(el.mul(a.stringSqueak * 0.12, el.mul(el.highpass(2500, 1.0, el.noise()), collisionEnv)));
  }
  if (a.keyThud > 0.02 || a.valveClick > 0.02 || (a.keyworkClick ?? 0) > 0.02 || (a.palletClick ?? 0) > 0.02) {
    const mechanical = el.mul((a.keyThud + a.valveClick + (a.keyworkClick ?? 0) + (a.palletClick ?? 0)) * 0.10, el.mul(el.svf({ mode: 'bandpass' }, 1100 + b * 900, 2.4, el.noise()), collisionEnv));
    modeSignals.push(mechanical);
  }
  if ((a.slideNoise ?? 0) > 0.02) {
    const slide = el.mul((a.slideNoise ?? 0) * 0.08, el.mul(el.highpass(1800, 1.0, el.pinknoise()), collisionEnv));
    modeSignals.push(slide);
  }
  if ((a.reedChatter ?? 0) > 0.02) {
    const reed = el.mul((a.reedChatter ?? 0) * 0.06, el.mul(el.highpass(2400, 1.0, el.noise()), collisionEnv));
    modeSignals.push(reed);
  }
  if ((a.bellowsFold ?? 0) > 0.02) {
    const fold = el.mul((a.bellowsFold ?? 0) * 0.05, el.mul(el.lowpass(1800, 0.9, el.pinknoise()), el.mul(gateSignal, 0.7)));
    modeSignals.push(fold);
  }
  if ((a.bowRosin ?? 0) > 0.02 && (action === 'bow_drag' || action === 'legato' || action === 'slur')) {
    const rosin = el.mul((a.bowRosin ?? 0) * 0.06, el.mul(el.highpass(1500, 1.1, el.pinknoise()), collisionEnv));
    modeSignals.push(rosin);
  }
  if ((a.hammerClick ?? 0) > 0.02) {
    const click = el.mul((a.hammerClick ?? 0) * 0.08, el.mul(el.highpass(2800, 1.0, el.noise()), collisionEnv));
    modeSignals.push(click);
  }
  if ((a.membraneFingerNoise ?? 0) > 0.02 && (action === 'tap' || action === 'slap' || action === 'strike' || action === 'staccato')) {
    const finger = el.mul((a.membraneFingerNoise ?? 0) * 0.07, el.mul(el.highpass(2200, 1.0, el.noise()), collisionEnv));
    modeSignals.push(finger);
  }
  if ((a.seedRattle ?? 0) > 0.02) {
    const rattle = el.mul((a.seedRattle ?? 0) * 0.06, el.mul(el.highpass(1800, 0.8, el.noise()), el.mul(gateSignal, 0.8)));
    modeSignals.push(rattle);
  }
  if ((a.fippleNoise ?? 0) > 0.02) {
    const fipple = el.mul((a.fippleNoise ?? 0) * 0.06, el.mul(el.highpass(2600, 0.9, el.noise()), collisionEnv));
    modeSignals.push(fipple);
  }
  if ((a.muteContact ?? 0) > 0.02) {
    const muteContact = el.mul((a.muteContact ?? 0) * 0.06, el.mul(el.lowpass(1400, 0.9, el.noise()), collisionEnv));
    modeSignals.push(muteContact);
  }
  if (a.bodyKnock > 0.02 || a.handContact > 0.02) {
    const knock = el.mul((a.bodyKnock + a.handContact) * 0.08, el.mul(el.svf({ mode: 'bandpass' }, c.soundboard?.thudHz ?? 120, 1.4, el.pinknoise()), collisionEnv));
    modeSignals.push(knock);
  }
  if (a.rimImpact > 0.02) {
    const rim = el.mul(a.rimImpact * (0.05 + 0.08 * velBoost), el.mul(el.highpass(1700 + x.spectralSpread * 1800, 1.2, el.noise()), collisionEnv));
    modeSignals.push(rim);
  }
  if (a.damperNoise > 0.02 && (action === 'mute' || action === 'staccato' || action === 'release')) {
    const damper = el.mul(a.damperNoise * 0.07, el.mul(el.lowpass(2200, 1.0, el.noise()), collisionEnv));
    modeSignals.push(damper);
  }
  if (c.bridge?.buzz > 0.25) {
    const bridgeEnv = el.adsr(0.001, Math.max(0.02, c.bridge.settlingMs / 1000), 0.10, 0.04, gateSignal);
    const buzz = el.mul(c.bridge.buzz * 0.12, el.mul(el.highpass(2600, 2.2, el.noise()), bridgeEnv));
    modeSignals.push(buzz);
  }
  if (modeSignals.length) {
    rawAudio = el.add(rawAudio, ...modeSignals);
  }
  const drive = 1 + (x.nonlinearDrive + (physical?.response.nonlinearTransfer ?? 0) * 0.18) * (0.4 + 1.2 * velBoost) + Math.max(0, (dialectAttack - 1) * 0.12);
  rawAudio = el.tanh(el.mul(drive, rawAudio));
  if (dialectBrightness !== 1) {
    const dialectCutoff = Math.min(19000, Math.max(900, (1800 + b * 9500) * dialectBrightness));
    rawAudio = el.lowpass(dialectCutoff, 1.0, rawAudio);
  }
  if (dialectDamping !== 0) {
    const dampingCutoff = Math.min(19000, Math.max(700, 12000 * (1 - dialectDamping)));
    rawAudio = el.lowpass(dampingCutoff, 1.0, rawAudio);
  }
}

const releaseGate = el.sub(1, gateSignal);
const damperThump = (model === 11 || model === 19 || model === 20)
? el.mul(0.14, el.mul(el.lowpass(400, 1.2, el.noise()), el.adsr(0.0002, 0.018, 0, 0.008, releaseGate)))
: 0;
// Remove the resonant squelch artifact on string releases
const roomBloom = el.const({ value: 0 });
const finalRawAudio = el.add(rawAudio, el.add(damperThump, roomBloom));
const gain = el.mul(velSignal, env);
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
const voiceNodes = voices.map((v, idx) => el.tanh(renderVoice(trackId, idx, v, params)));
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

  if (r === 'bass' || /bass|bajo|contrabajo|tuba|sousaphone|sub-bass|log-drum/i.test(inst)) {
    return 'sub';
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