import type { InstrumentDef } from '../types';

export const tremolo_strings: InstrumentDef = {
  id: "tremolo-strings",
  name: "Tremolo strings",
  family: "bowed",
  voicing: "chord",
  elementaryModel: 6,
  makeupGain: 0.682,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 66,
    low: 48,
    high: 88,
    pan: -0.26,
    trim: -5,
    space: 0.5,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.5,
    tension: 0.75,
    bodyResonanceVolume: 55,
    decayTimeFactor: 1.6,
    harmonicRichness: 0.75
  },
  bowedResonance: {
    bodyFreq: 400,
    bodyQ: 1.8,
    bodyGain: 0.45,
    bridgeHillFreq: 2500,
    bridgeHillQ: 2,
    bridgeHillGain: 0.35
  },
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["orchestral", "cinematic", "pop"]
  }
};
