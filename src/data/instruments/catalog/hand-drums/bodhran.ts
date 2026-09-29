import type { InstrumentDef } from '../../schema/instrument-def';

export const bodhran: InstrumentDef = {
  id: "bodhran",
  name: "Bodhran",
  family: "hand-drums",
  drum: {
    low: 41,
    mid: 43,
    high: 45
  },
  voicing: "unpitched",
  elementaryModel: 4,
  makeupGain: 0.831,
  polyphony: 8,
  note: "Irish frame drum with goatskin head played with a double-ended tipper and inner-hand pitch modulation",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 42,
    low: 30,
    high: 70,
    pan: 0.08,
    trim: -1,
    space: 0.2,
    ring: 0.7
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.85,
    tension: 0.55,
    bodyResonanceVolume: 18,
    decayTimeFactor: 1.4,
    harmonicRichness: 0.4
  },
  techniques: {
    articulations: ["accent", "staccato", "roll", "ghost", "open", "low-tone"],
    techniqueMethods: [
      "double-ended tipper brush stroke",
      "inner hand skin pressure pitch modulation",
      "driving reel/jig rhythm",
      "tipper rim click"
    ],
    playingStyles: ["celtic", "irish-folk", "scottish-folk"],
    genreTechniques: {
      celtic: ["accent", "roll", "ghost", "low-tone"],
      "irish-folk": ["roll", "accent", "staccato", "open"]
    }
  }
};
