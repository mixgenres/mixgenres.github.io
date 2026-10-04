import type { InstrumentDef } from '../../schema/instrument-def';

export const oud: InstrumentDef = {
  id: "oud",
  name: "Oud",
  family: "plucked",
  voicing: "single",
  courses: 2,
  bodyConstruction: "wood-box",
  excitationType: "plectrum",
  elementaryModel: 0,
  makeupGain: 4.1615,
  polyphony: 4,
  note: "Middle Eastern fretless lute with doubled courses",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
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
    materialDensity: 0.68,
    tension: 0.78,
    bodyResonanceVolume: 18,
    decayTimeFactor: 2.2,
    harmonicRichness: 0.85,
    courses: 2,
    bodyConstruction: "wood-box",
    excitationType: "plectrum"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "tremolo"],
    techniqueMethods: ["riša pick", "tremolo", "ornamental slide"],
    playingStyles: ["middle-eastern"],
    genreTechniques: {
      "middle-eastern": ["tremolo", "portamento", "vibrato"]
    }
  }
};
