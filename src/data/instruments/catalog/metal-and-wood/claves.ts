import type { InstrumentDef } from '../../schema/instrument-def';

export const claves: InstrumentDef = {
  id: "claves",
  name: "Claves",
  family: "metal-and-wood",
  drum: {
    low: 75,
    mid: 75,
    high: 75
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Pair of resonant rosewood or grenadilla wooden pegs providing the structural timeline of Afro-Cuban music",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.42,
    trim: -4,
    space: 0.16,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.85,
    tension: 0.9,
    bodyResonanceVolume: 0.2,
    decayTimeFactor: 0.15,
    harmonicRichness: 0.3
  },
  techniques: {
    articulations: ["accent", "staccato", "open", "tenuto"],
    techniqueMethods: [
      "cupped palm sound chamber resonance",
      "striking peg center sweet-spot",
      "un-damped ringing projection",
      "son and rumba clave cycles"
    ],
    playingStyles: ["salsa", "son-cubano", "afro-cuban", "mambo", "latin-jazz"],
    genreTechniques: {
      salsa: ["accent", "open", "staccato"],
      "son-cubano": ["accent", "open"],
      "afro-cuban": ["accent", "open", "tenuto"]
    }
  }
};
