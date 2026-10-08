import type { InstrumentDef } from '../../schema/instrument-def';

export const koto: InstrumentDef = {
  id: "koto",
  name: "Koto",
  family: "plucked",
  voicing: "single",
  courses: 1,
  bodyConstruction: "board",
  excitationType: "fingerpad",
  
  
  polyphony: 4,
  note: "Standard concert koto voicing",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 64,
    low: 40,
    high: 84,
    pan: 0.18,
    trim: 0,
    space: 0.35,
    ring: 2.5
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.55,
    tension: 0.7,
    bodyResonanceVolume: 30,
    decayTimeFactor: 3,
    harmonicRichness: 0.7,
    courses: 1,
    bodyConstruction: "board",
    excitationType: "fingerpad"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo", "bend"],
    techniqueMethods: ["plectrum/nail attack", "oshi-de bend", "sawari resonance"],
    playingStyles: ["japanese-traditional"],
    genreTechniques: {
      "japanese-traditional": ["accent", "bend"]
    }
  }
};
