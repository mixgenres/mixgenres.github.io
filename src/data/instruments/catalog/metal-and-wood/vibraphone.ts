import type { InstrumentDef } from '../../schema/instrument-def';

export const vibraphone: InstrumentDef = {
  id: "vibraphone",
  name: "Vibraphone",
  family: "metal-and-wood",
  voicing: "chord",
  elementaryModel: 8,
  makeupGain: 0.708,
  polyphony: 8,
  note: "Useful for jazz, city pop and soft color",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 67,
    low: 53,
    high: 89,
    pan: -0.24,
    trim: -2,
    space: 0.42,
    ring: 4
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.9,
    tension: 0.9,
    bodyResonanceVolume: 15,
    decayTimeFactor: 4,
    harmonicRichness: 0.5
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "roll"],
    techniqueMethods: ["hard and soft mallet attack", "pedal sustain control", "damped note release", "motor-driven tremolo"],
    playingStyles: ["jazz", "bebop", "ballad", "city-pop", "latin-jazz"]
  }
};
