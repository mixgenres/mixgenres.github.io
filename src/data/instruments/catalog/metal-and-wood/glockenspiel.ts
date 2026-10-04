import type { InstrumentDef } from '../../schema/instrument-def';

export const glockenspiel: InstrumentDef = {
  id: "glockenspiel",
  name: "Glockenspiel",
  family: "metal-and-wood",
  voicing: "single",
  elementaryModel: 8,
  makeupGain: 0.7623,
  polyphony: 4,
  note: "Tuned steel bar bells struck with hard mallets producing pure, bright, piercing high tones",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 84,
    low: 72,
    high: 103,
    pan: 0.3,
    trim: -6,
    space: 0.45,
    ring: 3
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.95,
    tension: 0.9,
    bodyResonanceVolume: 0.5,
    decayTimeFactor: 2.5,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "staccato", "tenuto", "roll", "tremolo"],
    techniqueMethods: [
      "brass mallet strike",
      "hard plastic mallet attack",
      "finger muting",
      "two-mallet rapid alternating roll"
    ],
    playingStyles: ["orchestral", "marching", "pop", "folk", "indie-rock"],
    genreTechniques: {
      orchestral: ["accent", "staccato", "tenuto", "roll"],
      "indie-rock": ["accent", "staccato", "tenuto"]
    }
  }
};
