import type { InstrumentDef } from '../../schema/instrument-def';

export const berimbau: InstrumentDef = {
  id: "berimbau",
  name: "Berimbau",
  family: "plucked",
  voicing: "single",
  courses: 1,
  bodyConstruction: "gourd",
  excitationType: "hard-pick",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 4,
  note: "Afro-Brazilian musical bow of flexible biriba wood, single steel wire (arame), tuned gourd resonator (cabaça), baqueta stick strike, dobra coin, and caxixi rattle",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 57,
    low: 40,
    high: 84,
    pan: 0.18,
    trim: 0,
    space: 0.24,
    ring: 2.5
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.7,
    tension: 0.8,
    bodyResonanceVolume: 8,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.8,
    courses: 1,
    bodyConstruction: "gourd",
    excitationType: "hard-pick"
  },
  techniques: {
    articulations: ["accent", "staccato", "open", "ghost", "tremolo"],
    techniqueMethods: [
      "open string low fundamental strike",
      "dobra pressed high pitch strike with coin buzz",
      "cabaça stomach wah-wah cavity modulation",
      "caxixi basket rattle accentuation",
      "syncopated capoeira toque patterns (Angola, São Bento)"
    ],
    playingStyles: ["capoeira", "samba-de-roda", "afro-brazilian", "mpb", "world-percussion"],
    genreTechniques: {
      capoeira: ["accent", "open", "staccato"],
      "afro-brazilian": ["accent", "open", "ghost"],
      "world-percussion": ["open", "staccato", "accent"]
    }
  },
  physicalModel: {
    model: "plucked-string",
    parameters: {
      stiffness: 0.7,
      damping: 0.5,
      inharmonicity: 0.38,
      bodyResonance: 0.88,
      transientSharpness: 0.86
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Coin or smooth stone pressed against wire shifts pitch by a half or whole step with metallic buzz.",
      "Moving gourd against performer abdomen modulates open/closed acoustic cavity filtering (wah effect).",
      "Baqueta wooden stick strikes wire while simultaneously shaking the woven caxixi rattle."
    ]
  }
};
