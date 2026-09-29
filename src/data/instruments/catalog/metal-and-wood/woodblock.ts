import type { InstrumentDef } from '../../schema/instrument-def';

export const woodblock: InstrumentDef = {
  id: "woodblock",
  name: "Wood block",
  family: "metal-and-wood",
  drum: {
    low: 77,
    mid: 76,
    high: 76
  },
  voicing: "unpitched",
  elementaryModel: 18,
  makeupGain: 0.285,
  polyphony: 8,
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.4,
    trim: -5,
    space: 0.12,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.55,
    tension: 0.8,
    bodyResonanceVolume: 0.3,
    decayTimeFactor: 0.15,
    harmonicRichness: 0.35
  },
  techniques: {
    articulations: ["accent", "staccato"],
    techniqueMethods: ["hard center strike", "damped edge touch", "alternating pitch-block ostinato"],
    playingStyles: ["folk", "ensemble-percussion", "orchestral", "latin"]
  }
};
