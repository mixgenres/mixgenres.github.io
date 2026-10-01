import type { InstrumentDef } from '../../schema/instrument-def';

export const maracas: InstrumentDef = {
  id: "maracas",
  name: "Maracas",
  family: "metal-and-wood",
  drum: {
    low: 70,
    mid: 70,
    high: 70
  },
  voicing: "unpitched",
  elementaryModel: 17,
  makeupGain: 1.200,
  polyphony: 8,
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.46,
    trim: -6,
    space: 0.12,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.5,
    tension: 0.7,
    bodyResonanceVolume: 0.6,
    decayTimeFactor: 0.3,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["forward-back shake", "reverse shake", "controlled ghost subdivision", "accented thrust"],
    playingStyles: ["salsa", "son-cubano", "merengue", "cumbia", "bomba", "latin"]
  }
};
