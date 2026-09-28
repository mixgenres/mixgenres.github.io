import type { InstrumentDef } from '../types';

export const trombone: InstrumentDef = {
  id: "trombone",
  name: "Trombone",
  family: "brass",
  program: 57,
  voicing: "single",
  elementaryModel: 15,
  makeupGain: 0.494,
  polyphony: 4,
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 57,
    low: 40,
    high: 77,
    pan: -0.32,
    trim: -1,
    space: 0.3,
    ring: 2.5
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.9,
    tension: 0.75,
    bodyResonanceVolume: 4.5,
    decayTimeFactor: 0.8,
    harmonicRichness: 0.85,
    transientSharpness: 0.95
  },
  formantProfile: {
    f1: {
      freq: 620,
      q: 1.8,
      gain: 0.8
    },
    f2: {
      freq: 1480,
      q: 2.2,
      gain: 0.5
    },
    f3: {
      freq: 2750,
      q: 1.8,
      gain: 0.25
    },
    tongueType: "lip-slap",
    tongueFreq: 1700
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "sforzando", "fall", "doit", "portamento"],
    techniqueMethods: ["tongue", "lip slur", "slide position gliss"],
    playingStyles: ["jazz"],
    genreTechniques: {
      jazz: ["fall", "doit", "portamento"]
    }
  }
};
