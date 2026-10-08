import type { InstrumentDef } from '../../schema/instrument-def';

export const cowbell: InstrumentDef = {
  id: "cowbell",
  name: "Cowbell",
  family: "metal-and-wood",
  drum: {
    low: 56,
    mid: 56,
    high: 56
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Clapperless steel bell struck with thick wooden stick; drives salsa bongo bell and rock downbeats",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.3,
    trim: -4,
    space: 0.12,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.95,
    tension: 0.95,
    bodyResonanceVolume: 1,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.9
  },
  techniques: {
    articulations: ["accent", "staccato", "open", "ghost", "low-tone"],
    techniqueMethods: [
      "open mouth heavy stick stroke",
      "closed edge dry high tap",
      "hand muting finger pressure",
      "bongo bell martillo pattern"
    ],
    playingStyles: ["salsa", "funk", "rock", "cumbia", "cha-cha"],
    genreTechniques: {
      salsa: ["accent", "open", "staccato", "low-tone"],
      funk: ["accent", "staccato", "ghost"],
      rock: ["accent", "staccato"]
    }
  }
};
