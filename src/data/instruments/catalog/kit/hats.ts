import type { InstrumentDef } from '../../schema/instrument-def';

export const hats: InstrumentDef = {
  id: "hats",
  name: "Hi-hats",
  family: "kit",
  drum: {
    low: 42,
    mid: 44,
    high: 46
  },
  voicing: "unpitched",
  elementaryModel: 18,
  makeupGain: 1.000,
  polyphony: 12,
  note: "Pair of matched cymbals mounted on foot pedal stand; controls rhythmic timekeeping from closed clicks to open sizzles",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.3,
    trim: -3,
    space: 0.1,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.95,
    tension: 0.9,
    bodyResonanceVolume: 0.4,
    decayTimeFactor: 0.15,
    harmonicRichness: 0.9
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "open", "roll"],
    techniqueMethods: [
      "tip on top cymbal closed click",
      "shoulder of stick on edge splash",
      "foot pedal chick tap",
      "foot pedal splash",
      "half-open sizzle wash"
    ],
    playingStyles: ["funk", "jazz", "rock", "hip-hop", "disco", "house"],
    genreTechniques: {
      funk: ["accent", "staccato", "ghost", "open"],
      jazz: ["staccato", "accent", "ghost"],
      disco: ["open", "accent", "staccato"],
      "hip-hop": ["accent", "ghost", "roll"]
    }
  }
};
