import type { InstrumentDef } from '../types';

export const bombo_andino: InstrumentDef = {
  id: "bombo-andino",
  name: "Bombo andino",
  family: "hand-drums",
  drum: {
    low: 35,
    mid: 36,
    high: 38
  },
  voicing: "unpitched",
  elementaryModel: 4,
  makeupGain: 0.671,
  polyphony: 8,
  note: "Andean ceremonial fur-headed bass drum with deep, thundering mountain pulse and wooden rim clack",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.3,
    trim: -1,
    space: 0.18,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.9,
    tension: 0.5,
    bodyResonanceVolume: 35,
    decayTimeFactor: 1.6,
    harmonicRichness: 0.45
  },
  techniques: {
    articulations: ["accent", "low-tone", "ghost", "roll", "open"],
    techniqueMethods: [
      "soft mallet head strike",
      "cane aro rim stroke",
      "sustained fur damping resonance",
      "marching syncopated pulse"
    ],
    playingStyles: ["andean-folk", "sikuri", "carnavalito", "huayno"],
    genreTechniques: {
      "andean-folk": ["low-tone", "accent", "open", "roll"],
      huayno: ["accent", "low-tone", "ghost"]
    }
  }
};
