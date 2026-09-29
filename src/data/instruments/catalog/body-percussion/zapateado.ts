import type { InstrumentDef } from '../../schema/instrument-def';

export const zapateado: InstrumentDef = {
  id: "zapateado",
  name: "Zapateado (Flamenco Footwork)",
  family: "body-percussion",
  drum: {
    low: 36,
    mid: 38,
    high: 42
  },
  voicing: "unpitched",
  bodyConstruction: "wood-box",
  excitationType: "hammer",
  elementaryModel: 18,
  makeupGain: 7.299,
  polyphony: 8,
  note: "Authentic flamenco dance footwork percussion on a wooden tablao stage with nailed shoe strikes: Tacón heel drops, Planta ball-of-foot impacts, Punta toe taps, and rapid redoble heel-toe rolls",
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
    materialDensity: 0.75,
    tension: 0.82,
    bodyResonanceVolume: 1.2,
    decayTimeFactor: 0.18,
    harmonicRichness: 0.70,
    soundboardResonanceHz: 110,
    airResonanceHz: 2800,
    bodyConstruction: "wood-box",
    excitationType: "hammer"
  },
  kitComponents: [
    {
      id: "zapateado-tacon",
      name: "Tacon (Heel Drop)",
      midi: 36,
      physicalType: "wood",
      tuningHz: 110,
      decayTimeSec: 0.14,
      damping: 0.65,
      strikeZones: ["center"],
      defaultPan: -0.3,
      gainTrimDb: 1.0,
      synthesisNotes: "Solid heel strike with nailed heel block driving 110Hz wooden stage cavity resonance"
    },
    {
      id: "zapateado-planta",
      name: "Planta (Ball-of-Foot Impact)",
      midi: 38,
      physicalType: "wood",
      tuningHz: 280,
      decayTimeSec: 0.08,
      damping: 0.85,
      strikeZones: ["center"],
      defaultPan: -0.35,
      gainTrimDb: 0,
      synthesisNotes: "Flat strike of ball-of-foot on wooden floor producing sharp wooden slap"
    },
    {
      id: "zapateado-punta",
      name: "Punta (Toe Tap)",
      midi: 42,
      physicalType: "metal",
      tuningHz: 1400,
      decayTimeSec: 0.04,
      damping: 0.95,
      strikeZones: ["edge"],
      defaultPan: -0.4,
      gainTrimDb: -1.5,
      synthesisNotes: "Toe-tip click on floor with metal nail transient"
    }
  ],
  performanceArticulations: {
    golpe: {
      bodyTapPitchHz: 110,
      transientDecayMs: 40,
      gainDb: 2
    }
  },
  techniques: {
    articulations: ["accent", "ghost", "staccato", "golpe", "open", "tacon", "planta", "punta", "redoble"],
    techniqueMethods: [
      "tacón heavy heel drop on wooden tablao",
      "planta ball-of-foot sharp impact",
      "punta crisp toe-tip tap",
      "redoble rapid heel-and-toe alternating rolls",
      "flamenco bulería & alegría escobilla dance solos"
    ],
    playingStyles: ["flamenco", "alegrias", "solea", "bulerias", "tangos", "fandangos", "sevillanas"],
    genreTechniques: {
      flamenco: ["accent", "staccato", "golpe", "ghost"],
      alegrias: ["accent", "staccato", "golpe"],
      bulerias: ["accent", "staccato", "golpe"]
    }
  },
  physicalModel: {
    model: "noise-source",
    parameters: {
      bodyResonance: 0.82,
      airResonance: 0.70,
      transientSharpness: 0.96,
      damping: 0.75
    },
    signalChain: ["preamp", "eq", "reverb"],
    synthesisNotes: [
      "110Hz hollow wooden stage platform resonance activated by heavy heel strikes.",
      "High-frequency nail click transient at 2.8kHz modeling shoemaker nails in heels and toes."
    ]
  }
};
