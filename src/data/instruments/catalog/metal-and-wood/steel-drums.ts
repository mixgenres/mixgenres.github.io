import type { InstrumentDef } from '../../schema/instrument-def';

export const steel_drums: InstrumentDef = {
  id: "steel-drums",
  name: "Steel pan",
  family: "metal-and-wood",
  voicing: "single",
  elementaryModel: 8,
  makeupGain: 1.000,
  polyphony: 4,
  note: "tuned steel pan; struck convex notes with bright partials",
  acousticProfile: {
    sustain: "percussive",
    role: "lead",
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
    materialDensity: 0.85,
    tension: 0.7,
    bodyResonanceVolume: 15,
    decayTimeFactor: 2,
    harmonicRichness: 0.7
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "roll"],
    techniqueMethods: ["rubber-tipped mallet attack", "controlled roll reiteration", "damped note release", "register-aware voicing"],
    playingStyles: ["soca", "calypso", "steelband", "reggae", "genre-native performance"],
    genreTechniques: {}
  }
};
