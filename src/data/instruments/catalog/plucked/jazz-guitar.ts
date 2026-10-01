import type { InstrumentDef } from '../../schema/instrument-def';

export const jazz_guitar: InstrumentDef = {
  id: "jazz-guitar",
  name: "Jazz guitar",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  elementaryModel: 22,
  makeupGain: 2.925,
  polyphony: 8,
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 55,
    low: 40,
    high: 76,
    pan: 0.3,
    trim: 0,
    space: 0.22,
    ring: 2
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.8,
    tension: 0.72,
    bodyResonanceVolume: 16,
    decayTimeFactor: 3.2,
    harmonicRichness: 0.6,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "fingerpad"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "ghost", "harmonic"],
    techniqueMethods: ["fingerstyle comping", "pick comping", "drop voicing"],
    playingStyles: ["jazz"],
    genreTechniques: {
      jazz: ["legato", "ghost", "accent"]
    }
  }
};
