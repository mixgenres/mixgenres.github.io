import type { InstrumentDef } from '../types';

export const pipa: InstrumentDef = {
  id: "pipa",
  name: "Pipa",
  family: "plucked",
  voicing: "single",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "nail",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 4,
  note: "Chinese four-string pear-shaped vertical lute with 24-30 frets, capable of delicate lyrical poetry, lightning five-finger wheel tremolos, and explosive martial clatter",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 72,
    low: 52,
    high: 96,
    pan: 0.26,
    trim: -2,
    space: 0.28,
    ring: 1.4
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.7,
    tension: 0.85,
    bodyResonanceVolume: 6,
    decayTimeFactor: 1.5,
    harmonicRichness: 0.8,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "nail"
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tremolo",
      "slide",
      "vibrato",
      "harmonic",
      "marcato",
      "tenuto"
    ],
    techniqueMethods: [
      "lunzhi five-finger outward wheel tremolo",
      "tan-tiao alternating index and thumb flick picking",
      "sa-yin percussive multi-string chord sweeping",
      "jiao-xian twisting strings together for buzzing martial percussion",
      "da-yin heavy hammer-on without picking"
    ],
    playingStyles: [
      "chinese-classical",
      "silk-and-bamboo",
      "martial-style",
      "lyrical-style",
      "fusion"
    ],
    genreTechniques: {
      "chinese-classical": ["tremolo", "legato", "accent", "slide"],
      "martial-style": ["accent", "marcato", "staccato", "tremolo"],
      "lyrical-style": ["legato", "vibrato", "tenuto"]
    }
  },
  physicalModel: {
    model: "plucked-string",
    parameters: {
      stiffness: 0.56,
      damping: 0.42,
      inharmonicity: 0.26,
      bodyResonance: 0.78,
      transientSharpness: 0.86
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Bamboo frets on arched soundboard project bright, dry, percussive transients.",
      "Lunzhi wheel technique uses all five fingers sequentially to sustain continuous melodic lines.",
      "Snapping strings against frets produces gunshot-like martial drama."
    ]
  }
};
