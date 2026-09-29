import type { InstrumentDef } from '../../schema/instrument-def';

export const guzheng: InstrumentDef = {
  id: "guzheng",
  name: "Guzheng",
  family: "plucked",
  voicing: "single",
  courses: 1,
  bodyConstruction: "board",
  excitationType: "nail",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 4,
  note: "Chinese long zither",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 69,
    low: 48,
    high: 96,
    pan: -0.18,
    trim: -3,
    space: 0.42,
    ring: 2.8
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.55,
    tension: 0.72,
    bodyResonanceVolume: 28,
    decayTimeFactor: 2.8,
    harmonicRichness: 0.7,
    courses: 1,
    bodyConstruction: "board",
    excitationType: "nail"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo", "bend"],
    techniqueMethods: ["right-hand pluck", "left-hand bend", "yaozhi tremolo"],
    playingStyles: ["chinese-traditional"],
    genreTechniques: {
      "chinese-traditional": ["tremolo", "bend"]
    }
  }
};
