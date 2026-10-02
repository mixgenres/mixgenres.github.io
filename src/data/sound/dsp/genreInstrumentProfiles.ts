/** Genre and instrument keyed acoustic response coefficients. */
export const TANGO_INSTRUMENT_RESPONSE = {
  strings: {
    vibratoOnset: 0.48, vibratoOnsetDefault: 0.35,
    vibratoIncrement: 0.08, vibratoIncrementDefault: 0.1,
    vibratoDepth: 0.0048, vibratoDepthDefault: 0.007,
    attack: 0.055, attackDefault: 0.04,
    voiceGain: [-1.2, 1.0, -1.1], voiceGainDefault: [-3.2, 11.8, -12.5],
    voicePan: [0, -1.0, 1.0], voicePanDefault: [0, 0, 0],
    vibratoSpeed: [5.2, 5.9, 4.6], vibratoSpeedDefault: [5.2, 5.9, 4.6],
    delayMs: [0, 7, 11], delayMsDefault: [0, 18, 26],
  },
  violin: {
    vibratoOnset: 0.38, vibratoOnsetDefault: 0.28,
    bowCatchGain: 0.16, bowCatchDefaultMultiplier: 1.12,
    tangoBiteGain: 0.075, obligatoWarmthGain: 0.16,
  },
  cello: {
    arrastreSemitones: 0.17, arrastreDefault: 0.14,
    vibratoOnset: 0.40, vibratoOnsetDefault: 0.32,
    bowCatchGain: 0.20, bowCatchDefaultMultiplier: 1.14,
    tangoWeightGain: 0.10, yumbaPulseGain: 0.18,
  },
  uprightBass: {
    decayBase: 0.34, decayTimeMultiplier: 0.72, brightnessMultiplier: 0.95,
    airGain: 0.52, airGainDefault: 0.45,
    woodGain: 0.42, woodGainDefault: 0.35,
    backGain: 0.24, backGainDefault: 0.20,
    subGain: 0.13, subGainDefault: 0.22,
    marcatoThudGain: 0.16, cutoffBase: 4200, cutoffBrightness: 3600,
  },
  piano: {
    harmonicStiffness: 0.42, harmonicBrightnessMultiplier: 0.52,
    marcatoDecay: 0.48, marcatoDecayDefault: 0.65,
    soundboardMainGain: 0.38, soundboardMainDefault: 0.32,
    soundboardCrossGain: 0.28, soundboardCrossDefault: 0.24,
    duplexGain: 0.15, duplexGainDefault: 0.12,
  },
  spanishGuitar: {
    decayBase: 0.24, decayTimeBase: 0.48, decayBrightness: 0.9,
    decayBaseDefault: 0.32, decayTimeBaseDefault: 0.55, decayBrightnessDefault: 1.3,
    cutoffBase: 5200, cutoffBrightness: 5200,
  },
  electricGuitar: {
    driveBase: 1.05, driveParamMultiplier: 1.25,
    arrastrePitchDrop: 0.095, arrastrePitchDropDefault: 0.06,
    highPass: 82, highPassUrban: 90, highPassDefault: 100,
    presence: 1850, presenceDefault: 2200,
    cutoffBase: 5200, cutoffBrightness: 900,
    kizombaCutoffBase: 5600, kizombaCutoffBrightness: 1100,
    reggaetonCutoffBase: 5000, reggaetonCutoffBrightness: 900,
    jazzCutoff: 4200, defaultCutoffBase: 4800, defaultCutoffBrightness: 700,
    kizombaNoiseGain: 0.09, noiseGainDefault: 0.13,
    reggaetonNoiseCutoff: 2500, noiseCutoffDefault: 1900,
  },
};
export const URBAN_LATIN_INSTRUMENT_RESPONSE = {
  synth: {
    kizomba: { detune: 1.003, drive: 2.4, attack: 0.10, sustain: 0.62, cutoffBase: 1100, cutoffBrightness: 5200, sine: 0.56, saw: 0.25, sub: 0.19, air: 0.025, airHighpass: 4200 },
    reggaeton: { detune: 1.0015, drive: 3.2, attack: 0.065, sustain: 0.48, cutoffBase: 700, cutoffBrightness: 4300, sine: 0.45, saw: 0.34, sub: 0.21, air: 0.045, airHighpass: 5200 },
  },
  shaker: {
    kizomba: { peakBase: 1200, peakBody: 2200, noiseGain: 0.36, bodyNoiseGain: 0.34, highpass: 3000 },
    reggaeton: { peakBase: 1900, peakBody: 3000, noiseGain: 0.58, bodyNoiseGain: 0.5, highpass: 3600 },
    default: { peakBase: 1100, peakBody: 2800, noiseGain: 0.5, bodyNoiseGain: 0.5, highpass: 2400 },
  },
};
export const URBAN_LATIN_DRUM_RESPONSE = {
  kick: { reggaeton: { fast: 0.028, tail: 0.115, pitchFall: -0.58, click: 0.18, clickCutoff: 2200 }, kizomba: { fast: 0.045, tail: 0.16, pitchFall: -0.38, click: 0.10, clickCutoff: 1500 }, thumpKizomba: 0.22, thumpDefault: 0.16 },
  snare: { reggaeton: { bodyFrequency: 185, decay: 0.065, crack: 0.55, crackDecay: 0.022 }, kizomba: { bodyFrequency: 210, decay: 0.09, crack: 0.38, crackDecay: 0.03 }, ringKizomba: 0.12, ringDefault: 0.08 },
};
export const URBAN_ACOUSTIC_GUITAR_RESPONSE = {
  kizomba: { decayBase: 0.012, pickNoise: 0.12, noiseCutoff: 1750, bodyGain: 0.10, bodyFrequency: 105 },
  default: { decayBase: 0.008, pickNoise: 0.20, noiseCutoff: 2350, bodyGain: 0.06, bodyFrequency: 120 },
  kizombaDecayBase: 0.28, kizombaDecayTime: 0.55, reggaetonDecayBase: 0.20, reggaetonDecayTime: 0.45,
};
export const SYNTH_GENRE_RESPONSE = {
  industrialDrive: 4.8, defaultDrive: 3.0,
  drumAndBassAttack: 0.05, defaultAttack: 0.08,
  houseDiscoSustain: 0.60, defaultSustain: 0.48,
  lowCutoff: 950, defaultCutoff: 1250, brightnessScale: 5000,
};
export const RHODES_GENRE_RESPONSE = {
  funkDiscoHouseTransient: 0.13, defaultTransient: 0.08,
  jazzSoulGospelSustain: 0.58, defaultSustain: 0.44,
};
export const GUITAR_GENRE_RESPONSE: Record<string, { short: boolean; decay: number; noiseFrequency: number; pluckGain: number; bodyFrequency: number; bodyGain: number; targetDecayBase: number; targetDecayTime: number }> = {
  bachata: { short: true, decay: 0.009, noiseFrequency: 2050, pluckGain: 0.64, bodyFrequency: 135, bodyGain: 0.10, targetDecayBase: 0.16, targetDecayTime: 0.42 },
  brazilian: { short: false, decay: 0.015, noiseFrequency: 1450, pluckGain: 0.64, bodyFrequency: 115, bodyGain: 0.16, targetDecayBase: 0.32, targetDecayTime: 0.60 },
  reggae: { short: true, decay: 0.009, noiseFrequency: 1450, pluckGain: 0.64, bodyFrequency: 105, bodyGain: 0.10, targetDecayBase: 0.16, targetDecayTime: 0.42 },
  ska: { short: true, decay: 0.009, noiseFrequency: 2500, pluckGain: 0.64, bodyFrequency: 105, bodyGain: 0.10, targetDecayBase: 0.16, targetDecayTime: 0.42 },
  funk: { short: true, decay: 0.009, noiseFrequency: 1800, pluckGain: 0.64, bodyFrequency: 105, bodyGain: 0.10, targetDecayBase: 0.16, targetDecayTime: 0.42 },
  country: { short: false, decay: 0.015, noiseFrequency: 2900, pluckGain: 0.70, bodyFrequency: 155, bodyGain: 0.10, targetDecayBase: 0.42, targetDecayTime: 0.85 },
};
export const TANGO_ACOUSTIC_GUITAR_RESPONSE = { targetDecayBase: 0.22, targetDecayTime: 0.45, targetDecayBrightness: 0.85 };
export const TANGO_ELECTRONIC_DRUM_RESPONSE = { pitchAttack: 0.055, pitchFall: -0.46, bodyGain: 0.90, bodyDecay: 0.14, clickGain: 0.13, clickFrequency: 1800, drive: 1.25, driveMultiplier: 0.8 };
