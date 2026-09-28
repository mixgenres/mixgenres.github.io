import type { InstrumentDef } from '../types';

export const agogo: InstrumentDef = {
  id: "agogo",
  name: "Agogô bells",
  family: "metal-and-wood",
  drum: {
    low: 68,
    mid: 67,
    high: 67
  },
  voicing: "unpitched",
  elementaryModel: 18,
  makeupGain: 0.285,
  polyphony: 8,
  note: "Two pitched steel conical bells joined by a flexible handle struck with wooden stick in samba and capoeira",
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
    tension: 0.98,
    bodyResonanceVolume: 0.8,
    decayTimeFactor: 0.5,
    harmonicRichness: 0.92
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "open", "low-tone"],
    techniqueMethods: [
      "wooden stick striking low and high bell",
      "squeezing bells together for handle click",
      "interlocking syncopated ostinato",
      "rim shot accents"
    ],
    playingStyles: ["samba", "batucada", "capoeira", "afrobeats", "candomble"],
    genreTechniques: {
      samba: ["accent", "staccato", "open", "low-tone"],
      batucada: ["accent", "staccato", "open"],
      capoeira: ["accent", "low-tone", "open"]
    }
  }
};
