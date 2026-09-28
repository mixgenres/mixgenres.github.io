import type { InstrumentDef } from '../types';

export const hand_percussion: InstrumentDef = {
  id: "hand-percussion",
  name: "Hand percussion",
  family: "body-percussion",
  drum: {
    low: 39,
    mid: 54,
    high: 69
  },
  voicing: "unpitched",
  elementaryModel: 4,
  makeupGain: 2.914,
  polyphony: 8,
  note: "Auxiliary hand percussion ensemble including claps, snaps, shaker accents, and small acoustic idiophones",
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
    category: "body_impact",
    materialDensity: 0.75,
    tension: 0.8,
    bodyResonanceVolume: 4,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.75
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "flam", "roll", "open"],
    techniqueMethods: ["hand claps", "finger snaps", "egg shaker subdivision", "percussive body tap"],
    playingStyles: ["pop", "rock", "folk", "afrobeats", "latin", "r&b"],
    genreTechniques: {
      afrobeats: ["accent", "ghost", "roll"],
      folk: ["accent", "ghost", "staccato"],
      pop: ["accent", "staccato"]
    }
  }
};
