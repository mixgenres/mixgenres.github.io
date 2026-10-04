import type { InstrumentDef } from '../../schema/instrument-def';

export const kora: InstrumentDef = {
  id: "kora",
  name: "Kora",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "gourd",
  excitationType: "fingerpad",
  elementaryModel: 0,
  makeupGain: 2.4721,
  polyphony: 8,
  note: "West African 21-string gourd harp-lute",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 57,
    low: 40,
    high: 84,
    pan: 0.18,
    trim: 0,
    space: 0.24,
    ring: 2.5
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.6,
    tension: 0.72,
    bodyResonanceVolume: 24,
    decayTimeFactor: 3.2,
    harmonicRichness: 0.75,
    courses: 1,
    bodyConstruction: "gourd",
    excitationType: "fingerpad"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo"],
    techniqueMethods: ["thumb-index ostinato", "interlocking ostinato"],
    playingStyles: ["west-african"],
    genreTechniques: {
      "west-african": ["legato", "accent"]
    }
  }
};
