import type { InstrumentDef } from '../types';

export const tubular_bells: InstrumentDef = {
  id: "tubular-bells",
  name: "Tubular bells",
  family: "metal-and-wood",
  program: 14,
  voicing: "single",
  elementaryModel: 8,
  makeupGain: 0.702,
  polyphony: 4,
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 72,
    low: 0,
    high: 127,
    pan: -0.3,
    trim: -5,
    space: 0.55,
    ring: 8
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.95,
    tension: 0.8,
    bodyResonanceVolume: 20,
    decayTimeFactor: 4,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "staccato", "legato"],
    techniqueMethods: ["felt mallet strike", "controlled damping", "ringing decay management"],
    playingStyles: ["orchestral", "cinematic", "ceremonial", "ambient"]
  }
};
