import type { InstrumentDef } from '../../schema/instrument-def';

export const cuatro: InstrumentDef = {
  id: "cuatro",
  name: "Cuatro",
  family: "plucked",
  octave: 12,
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "nail",
  
  
  polyphony: 8,
  note: "Venezuelan/Puerto Rican folk strum",
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
    materialDensity: 0.65,
    tension: 0.75,
    bodyResonanceVolume: 6,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.75,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "nail"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "rasgueado"],
    techniqueMethods: ["rasgueo", "alternating strum"],
    playingStyles: ["folk"],
    genreTechniques: {
      folk: ["rasgueado", "accent"]
    }
  }
};
