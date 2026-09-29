import type { InstrumentDef } from '../../schema/instrument-def';

export const erhu: InstrumentDef = {
  id: "erhu",
  name: "Erhu",
  family: "bowed",
  octave: 12,
  voicing: "single",
  bodyConstruction: "skin-faced",
  excitationType: "bow",
  elementaryModel: 6,
  makeupGain: 0.27,
  polyphony: 4,
  note: "Chinese two-string fiddle",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 64,
    low: 48,
    high: 88,
    pan: -0.24,
    trim: -2,
    space: 0.42,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.7,
    tension: 0.8,
    bodyResonanceVolume: 1.5,
    decayTimeFactor: 1.2,
    harmonicRichness: 0.85
  },
  bowedResonance: {
    bodyFreq: 520,
    bodyQ: 3.2,
    bodyGain: 0.4,
    bridgeHillFreq: 2700,
    bridgeHillQ: 3,
    bridgeHillGain: 0.5
  },
  techniques: {
    articulations: ["accent", "legato", "portamento", "vibrato", "tremolo"],
    techniqueMethods: ["continuous bow", "slide", "finger vibrato"],
    playingStyles: ["chinese-traditional"],
    genreTechniques: {
      "chinese-traditional": ["portamento", "vibrato"]
    }
  }
};
