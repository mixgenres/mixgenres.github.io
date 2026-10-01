import type { InstrumentDef } from '../../schema/instrument-def';

export const brass: InstrumentDef = {
  id: "brass",
  name: "Brass section",
  family: "brass",
  voicing: "chord",
  elementaryModel: 15,
  makeupGain: 22.795,
  polyphony: 8,
  note: "Power brass ensemble (trumpets, trombones, French horns) with punchy stabs and soaring fanfare",
  acousticProfile: {
    sustain: "blown",
    role: "comp",
    centre: 67,
    low: 52,
    high: 88,
    pan: 0.3,
    trim: -1,
    space: 0.3,
    ring: 2.5
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.87,
    tension: 0.78,
    bodyResonanceVolume: 7,
    decayTimeFactor: 0.7,
    harmonicRichness: 0.82
  },
  formantProfile: {
    f1: {
      freq: 850,
      q: 1.6,
      gain: 0.8
    },
    f2: {
      freq: 1950,
      q: 1.9,
      gain: 0.5
    },
    f3: {
      freq: 3600,
      q: 1.7,
      gain: 0.25
    },
    tongueType: "lip-slap",
    tongueFreq: 2000
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "marcato",
      "legato",
      "fall",
      "doit",
      "tenuto",
      "sforzando"
    ],
    techniqueMethods: [
      "synchronized section lip attacks",
      "aggressive marcato punch",
      "jazz fall-offs and doits",
      "swelling crescendo fanfares"
    ],
    playingStyles: ["funk", "soul", "jazz", "salsa", "pop", "orchestral"],
    genreTechniques: {
      funk: ["staccato", "accent", "marcato", "fall"],
      salsa: ["marcato", "accent", "staccato", "fall"],
      jazz: ["accent", "legato", "fall", "doit"],
      pop: ["staccato", "accent", "fall"]
    }
  }
};
