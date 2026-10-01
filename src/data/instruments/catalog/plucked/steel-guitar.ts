import type { InstrumentDef } from '../../schema/instrument-def';

export const steel_guitar: InstrumentDef = {
  id: "steel-guitar",
  name: "Resonator Steel Guitar",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "hard-pick",
  elementaryModel: 0,
  makeupGain: 14.000,
  polyphony: 8,
  note: "Spun metal cone resonator acoustic guitar played with a steel slide bar, producing piercing metallic bite, singing sustain, and crying glissandi",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 55,
    low: 40,
    high: 78,
    pan: 0.28,
    trim: 0,
    space: 0.24,
    ring: 2.4
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.85,
    tension: 0.8,
    bodyResonanceVolume: 15,
    decayTimeFactor: 3.5,
    harmonicRichness: 0.8,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "hard-pick"
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "slide",
      "vibrato",
      "palm-mute",
      "ghost",
      "tenuto"
    ],
    techniqueMethods: [
      "steel slide glissando across open tunings",
      "finger behind slide damping to eliminate ghost tones",
      "palm-damped alternating thumb bass",
      "wide wrist slide vibrato",
      "rapid double-stop slide shifts"
    ],
    playingStyles: ["delta-blues", "country", "bluegrass", "hawaiian", "americana", "folk"],
    genreTechniques: {
      "delta-blues": ["slide", "accent", "vibrato", "palm-mute"],
      country: ["slide", "accent", "legato"],
      hawaiian: ["slide", "vibrato", "tenuto"]
    }
  },
  physicalModel: {
    model: "plucked-string",
    parameters: {
      stiffness: 0.62,
      damping: 0.28,
      inharmonicity: 0.28,
      bodyResonance: 0.88,
      transientSharpness: 0.78
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Spun aluminum cone mechanically amplifies higher metallic partials.",
      "Solid steel bar gliding over strings generates seamless continuous microtonal pitch bends.",
      "Thumbpick downstrokes deliver thumping, driving percussive bass lines."
    ]
  }
};
