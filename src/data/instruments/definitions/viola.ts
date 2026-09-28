import type { InstrumentDef } from '../types';

export const viola: InstrumentDef = {
  id: "viola",
  name: "Viola",
  family: "bowed",
  voicing: "single",
  bodyConstruction: "wood-box",
  excitationType: "bow",
  elementaryModel: 6,
  makeupGain: 32.935,
  polyphony: 4,
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 62,
    low: 48,
    high: 81,
    pan: -0.28,
    trim: -2,
    space: 0.42,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.5,
    tension: 0.75,
    bodyResonanceVolume: 4,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.7
  },
  bowedResonance: {
    bodyFreq: 340,
    bodyQ: 2.2,
    bodyGain: 0.5,
    bridgeHillFreq: 2000,
    bridgeHillQ: 2.5,
    bridgeHillGain: 0.35
  },
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["folk", "orchestral", "world"]
  }
};
