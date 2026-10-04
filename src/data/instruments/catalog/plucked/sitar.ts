import type { InstrumentDef } from '../../schema/instrument-def';

export const sitar: InstrumentDef = {
  id: "sitar",
  name: "Sitar",
  family: "plucked",
  voicing: "single",
  courses: 1,
  bodyConstruction: "gourd",
  excitationType: "plectrum",
  sympatheticStrings: true,
  elementaryModel: 0,
  makeupGain: 0.7975,
  polyphony: 4,
  note: "Standard concert sitar voicing",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 60,
    low: 40,
    high: 84,
    pan: 0.18,
    trim: 0,
    space: 0.4,
    ring: 3
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.6,
    tension: 0.75,
    bodyResonanceVolume: 22,
    decayTimeFactor: 4.5,
    harmonicRichness: 0.95,
    courses: 1,
    bodyConstruction: "gourd",
    excitationType: "plectrum",
    sympatheticStrings: true
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo", "bend"],
    techniqueMethods: ["mizrab stroke", "meend bend", "sympathetic resonance"],
    playingStyles: ["indian-classical"],
    genreTechniques: {
      "indian-classical": ["bend", "tremolo"]
    }
  }
};
