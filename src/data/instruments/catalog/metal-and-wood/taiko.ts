import type { InstrumentDef } from '../../schema/instrument-def';

export const taiko: InstrumentDef = {
  id: "taiko",
  name: "Taiko drum",
  family: "metal-and-wood",
  drum: {
    low: 41,
    mid: 43,
    high: 45
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0,
    trim: 0,
    space: 0.24,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.98,
    tension: 0.85,
    bodyResonanceVolume: 120,
    decayTimeFactor: 2.5,
    harmonicRichness: 0.5
  },
  techniques: {
    articulations: ["accent", "sforzando", "roll"],
    techniqueMethods: ["bachi strike", "don", "tsukui", "ji-uchi"],
    playingStyles: ["japanese"],
    genreTechniques: {
      japanese: ["accent", "roll"]
    }
  }
};
