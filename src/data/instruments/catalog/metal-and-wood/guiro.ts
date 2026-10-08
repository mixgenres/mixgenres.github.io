import type { InstrumentDef } from '../../schema/instrument-def';

export const guiro: InstrumentDef = {
  id: "guiro",
  name: "Guiro",
  family: "metal-and-wood",
  drum: {
    low: 73,
    mid: 74,
    high: 75
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Notched hollow gourd scraper played with wooden stick; defines the classic cha-cha and salsa groove",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.44,
    trim: -5,
    space: 0.14,
    ring: 0.5
  },
  luthierPhysics: {
    category: "scraped_friction",
    materialDensity: 0.7,
    tension: 0.8,
    bodyResonanceVolume: 1,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.9
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "roll", "open"],
    techniqueMethods: [
      "long down-scrape stroke",
      "short up-scrape return",
      "damped ghost taps",
      "thumbhole acoustic grip"
    ],
    playingStyles: ["salsa", "son-cubano", "cha-cha", "merengue", "cumbia"],
    genreTechniques: {
      salsa: ["accent", "staccato", "open", "ghost"],
      "cha-cha": ["accent", "open", "staccato"],
      cumbia: ["accent", "ghost", "open"]
    }
  }
};
