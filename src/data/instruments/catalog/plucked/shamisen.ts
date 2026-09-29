import type { InstrumentDef } from '../../schema/instrument-def';

export const shamisen: InstrumentDef = {
  id: "shamisen",
  name: "Shamisen",
  family: "plucked",
  voicing: "single",
  courses: 1,
  bodyConstruction: "skin-faced",
  excitationType: "plectrum",
  elementaryModel: 0,
  makeupGain: 10.457,
  polyphony: 4,
  note: "Japanese three-string color",
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
    materialDensity: 0.8,
    tension: 0.8,
    bodyResonanceVolume: 5,
    decayTimeFactor: 1.2,
    harmonicRichness: 0.85,
    courses: 1,
    bodyConstruction: "skin-faced",
    excitationType: "plectrum"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo"],
    techniqueMethods: ["bachi attack", "sukui upstroke", "sawari buzz"],
    playingStyles: ["japanese-traditional"],
    genreTechniques: {
      "japanese-traditional": ["accent", "staccato"]
    }
  }
};
