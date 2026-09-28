import type { InstrumentDef } from '../types';

export const kane: InstrumentDef = {
  id: "kane",
  name: "Kane (Atarigane)",
  family: "metal-and-wood",
  drum: {
    low: 76,
    mid: 77,
    high: 77
  },
  voicing: "unpitched",
  elementaryModel: 18,
  makeupGain: 0.285,
  polyphony: 8,
  note: "Small handheld bronze gong of Japanese festival music struck inside the rim with deer-antler mallet (shumoku)",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.34,
    trim: -3,
    space: 0.22,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.95,
    tension: 0.9,
    bodyResonanceVolume: 1,
    decayTimeFactor: 3,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "staccato", "open", "ghost"],
    techniqueMethods: [
      "antler mallet inside-rim strike (chi)",
      "rim rimshot snap (ki)",
      "dead stroke hand muting",
      "matsuri festival groove syncopation"
    ],
    playingStyles: ["japanese-festival", "matsuri", "gagaku", "kabuki"],
    genreTechniques: {
      matsuri: ["accent", "staccato", "open"],
      "japanese-festival": ["accent", "staccato", "ghost"]
    }
  }
};
