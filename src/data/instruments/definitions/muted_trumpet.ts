import type { InstrumentDef } from '../types';

export const muted_trumpet: InstrumentDef = {
  id: "muted-trumpet",
  name: "Muted trumpet",
  family: "brass",
  program: 59,
  octave: 12,
  voicing: "single",
  elementaryModel: 15,
  makeupGain: 0.534,
  polyphony: 4,
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 70,
    low: 55,
    high: 88,
    pan: 0.38,
    trim: -2,
    space: 0.32,
    ring: 2.5
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.9,
    tension: 0.88,
    bodyResonanceVolume: 0.7,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.7
  },
  formantProfile: {
    f1: {
      freq: 1850,
      q: 4.5,
      gain: 0.85
    },
    f2: {
      freq: 3750,
      q: 3.8,
      gain: 0.6
    },
    f3: {
      freq: 6200,
      q: 3,
      gain: 0.35
    },
    tongueType: "lip-slap",
    tongueFreq: 3500
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "fall", "doit"],
    techniqueMethods: ["cup/harmon mute color", "tongue", "lip bend"],
    playingStyles: ["jazz"],
    genreTechniques: {
      jazz: ["fall", "doit"]
    }
  }
};
