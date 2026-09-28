import type { InstrumentDef } from '../types';

export const strings: InstrumentDef = {
  id: "strings",
  name: "Fast string ensemble",
  family: "bowed",
  voicing: "chord",
  elementaryModel: 6,
  makeupGain: 0.531,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 64,
    low: 45,
    high: 86,
    pan: -0.2,
    trim: -4,
    space: 0.5,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.5,
    tension: 0.7,
    bodyResonanceVolume: 60,
    decayTimeFactor: 2.2,
    harmonicRichness: 0.7
  },
  bowedResonance: {
    bodyFreq: 380,
    bodyQ: 1.8,
    bodyGain: 0.45,
    bridgeHillFreq: 2400,
    bridgeHillQ: 2,
    bridgeHillGain: 0.35
  },
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["orchestral", "cinematic", "pop"]
  }
};
