import type { InstrumentDef } from '../types';

export const gongs: InstrumentDef = {
  id: "gongs",
  name: "Gongs / Tam-tam",
  family: "metal-and-wood",
  drum: {
    low: 49,
    mid: 55,
    high: 57
  },
  voicing: "unpitched",
  elementaryModel: 18,
  makeupGain: 0.285,
  polyphony: 8,
  note: "Suspended hammered bronze circular disks producing deep fundamental roars and shimmering overtone blooms",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.3,
    trim: -4,
    space: 0.24,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.95,
    tension: 0.6,
    bodyResonanceVolume: 50,
    decayTimeFactor: 4.5,
    harmonicRichness: 0.7
  },
  techniques: {
    articulations: ["accent", "tenuto", "crescendo", "diminuendo", "roll", "low-tone"],
    techniqueMethods: [
      "priming warm-up tap",
      "heavy padded mallet center strike",
      "rim scraping with triangle beater",
      "hand and body dampening"
    ],
    playingStyles: ["orchestral", "cinematic", "gamelan", "ceremonial", "ambient"],
    genreTechniques: {
      orchestral: ["accent", "tenuto", "crescendo", "diminuendo"],
      cinematic: ["crescendo", "low-tone", "tenuto"],
      gamelan: ["accent", "low-tone", "tenuto"]
    }
  }
};
