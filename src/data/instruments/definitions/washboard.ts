import type { InstrumentDef } from '../types';

export const washboard: InstrumentDef = {
  id: "washboard",
  name: "Washboard",
  family: "metal-and-wood",
  drum: {
    low: 73,
    mid: 74,
    high: 75
  },
  voicing: "unpitched",
  elementaryModel: 0,
  makeupGain: 3.170,
  polyphony: 8,
  note: "corrugated metal scraper; dry brushed rhythmic subdivision",
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
    bodyResonanceVolume: 2,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "ghost", "brushed", "staccato"],
    techniqueMethods: ["thimble or brush scrape", "short up/down wash", "accented scrape catch", "continuous subdivision texture"],
    playingStyles: ["zydeco", "blues", "jug-band", "country", "roots", "genre-native performance"],
    genreTechniques: {}
  }
};
