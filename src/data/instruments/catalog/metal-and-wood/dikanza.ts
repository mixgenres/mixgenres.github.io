import type { InstrumentDef } from '../../schema/instrument-def';

export const dikanza: InstrumentDef = {
  id: "dikanza",
  name: "Dikanza",
  family: "metal-and-wood",
  drum: {
    low: 73,
    mid: 74,
    high: 75
  },
  voicing: "unpitched",
  elementaryModel: 0,
  makeupGain: 12.1723,
  polyphony: 8,
  note: "Long Angolan notched bamboo scraper providing the continuous syncopated rasp in semba and kizomba",
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
    category: "scraped_friction",
    materialDensity: 0.8,
    tension: 0.8,
    bodyResonanceVolume: 3,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "roll", "open"],
    techniqueMethods: [
      "up-and-down stick scraping",
      "accented downward rasp",
      "syncopated sixteenth ghost scrape",
      "damped scrape dead stroke"
    ],
    playingStyles: ["kizomba", "semba", "kuduro", "angolan-folk"],
    genreTechniques: {
      kizomba: ["accent", "ghost", "staccato"],
      semba: ["accent", "roll", "open"]
    }
  }
};
