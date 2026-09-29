import type { InstrumentDef } from '../../schema/instrument-def';

export const slow_strings: InstrumentDef = {
  id: "slow-strings",
  name: "Slow string ensemble",
  family: "bowed",
  voicing: "chord",
  elementaryModel: 6,
  makeupGain: 0.37,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 64,
    low: 45,
    high: 86,
    pan: -0.22,
    trim: -5,
    space: 0.55,
    ring: 6,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.5,
    tension: 0.65,
    bodyResonanceVolume: 70,
    decayTimeFactor: 3,
    harmonicRichness: 0.6
  },
  bowedResonance: {
    bodyFreq: 350,
    bodyQ: 1.6,
    bodyGain: 0.45,
    bridgeHillFreq: 2200,
    bridgeHillQ: 1.8,
    bridgeHillGain: 0.3
  },
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["orchestral", "cinematic", "pop"]
  }
};
