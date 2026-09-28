import type { InstrumentDef } from '../types';

export const guqin: InstrumentDef = {
  id: "guqin",
  name: "Guqin",
  family: "plucked",
  program: 24,
  voicing: "single",
  courses: 1,
  bodyConstruction: "board",
  excitationType: "fingerpad",
  elementaryModel: 0,
  makeupGain: 6.768,
  polyphony: 4,
  note: "Plucked Chinese zither",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 64,
    low: 45,
    high: 88,
    pan: -0.18,
    trim: -3,
    space: 0.42,
    ring: 3.5
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.45,
    tension: 0.55,
    bodyResonanceVolume: 8,
    decayTimeFactor: 3.5,
    harmonicRichness: 0.4,
    courses: 1,
    bodyConstruction: "board",
    excitationType: "fingerpad"
  },
  techniques: {
    articulations: ["accent", "legato", "harmonic", "vibrato"],
    techniqueMethods: ["plucked harmonics", "slide/press vibrato", "open-string resonance"],
    playingStyles: ["chinese-traditional"],
    genreTechniques: {
      "chinese-traditional": ["legato", "harmonic"]
    }
  }
};
