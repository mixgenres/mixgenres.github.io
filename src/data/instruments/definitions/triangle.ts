import type { InstrumentDef } from '../types';

export const triangle: InstrumentDef = {
  id: "triangle",
  name: "Triangle",
  family: "metal-and-wood",
  drum: {
    low: 80,
    mid: 81,
    high: 81
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
    pan: -0.34,
    trim: -3,
    space: 0.22,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.98,
    tension: 0.95,
    bodyResonanceVolume: 0.2,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.95
  },
  techniques: {
    articulations: ["accent", "staccato", "choke"],
    techniqueMethods: ["beater strike", "edge damping", "hand choke", "tremolo articulation"],
    playingStyles: ["orchestral", "march", "folk", "ambient"]
  }
};
