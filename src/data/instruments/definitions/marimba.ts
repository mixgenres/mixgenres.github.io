import type { InstrumentDef } from '../types';

export const marimba: InstrumentDef = {
  id: "marimba",
  name: "Marimba",
  family: "metal-and-wood",
  voicing: "single",
  elementaryModel: 8,
  makeupGain: 1.000,
  polyphony: 4,
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 64,
    low: 45,
    high: 84,
    pan: -0.2,
    trim: -2,
    space: 0.3,
    ring: 2
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.5,
    tension: 0.6,
    bodyResonanceVolume: 25,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.5
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "roll"],
    techniqueMethods: ["soft mallet attack", "hard mallet attack", "damped release", "alternating or double-stroke roll"],
    playingStyles: ["classical", "contemporary", "latin", "jazz", "world"]
  }
};
