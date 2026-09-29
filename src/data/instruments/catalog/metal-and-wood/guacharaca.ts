import type { InstrumentDef } from '../../schema/instrument-def';

export const guacharaca: InstrumentDef = {
  id: "guacharaca",
  name: "Guacharaca",
  family: "metal-and-wood",
  drum: {
    low: 73,
    mid: 74,
    high: 75
  },
  voicing: "unpitched",
  elementaryModel: 17,
  makeupGain: 23.683,
  polyphony: 8,
  note: "Cane or tin scraper rubbed with wire fork; provides the driving metallic scraping rhythm in vallenato and cumbia",
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
    category: "membrane_tension_2d",
    materialDensity: 0.7,
    tension: 0.8,
    bodyResonanceVolume: 1.2,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.9
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "roll", "open"],
    techniqueMethods: [
      "wire fork scraping strokes",
      "rapid up-down syncopated rasp",
      "triplet flourish roll",
      "muffled hand contact"
    ],
    playingStyles: ["vallenato", "cumbia", "colombian-folk"],
    genreTechniques: {
      vallenato: ["accent", "roll", "staccato", "ghost"],
      cumbia: ["accent", "ghost", "open"]
    }
  }
};
