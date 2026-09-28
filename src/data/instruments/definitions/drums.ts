import type { InstrumentDef } from '../types';

export const drums: InstrumentDef = {
  id: "drums",
  name: "Standard Drum Kit",
  family: "kit",
  drum: {
    low: 36,
    mid: 38,
    high: 42
  },
  kit: true,
  voicing: "unpitched",
  bodyConstruction: "wood-box",
  excitationType: "stick",
  elementaryModel: 4,
  makeupGain: 0.898,
  polyphony: 16,
  note: "Studio acoustic drum kit featuring punchy 22-inch maple kick, crisp 14-inch maple snare with 20-strand snare wires, rack/floor toms, and hammered B20 bronze cymbals",
  acousticProfile: {
    sustain: "percussive",
    role: "percussion",
    centre: 38,
    low: 35,
    high: 81,
    pan: 0,
    trim: 1,
    space: 0.12,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.85,
    tension: 0.75,
    bodyResonanceVolume: 25,
    decayTimeFactor: 0.9,
    harmonicRichness: 0.7,
    bodyConstruction: "wood-box",
    excitationType: "stick"
  },
  kitComponents: [
    {
      id: "kick",
      name: "22-inch Maple Bass Drum",
      midi: 36,
      physicalType: "membrane",
      tuningHz: 55,
      decayTimeSec: 0.45,
      damping: 0.35,
      shellResonance: 0.8,
      strikeZones: ["center"],
      defaultPan: 0,
      gainTrimDb: 2,
      synthesisNotes: "Deep sub thump (55 Hz fundamental) with punchy beater click at 3.2 kHz"
    },
    {
      id: "snare-center",
      name: "14-inch Maple Snare Center",
      midi: 38,
      physicalType: "membrane",
      tuningHz: 185,
      decayTimeSec: 0.35,
      damping: 0.4,
      shellResonance: 0.7,
      strikeZones: ["center"],
      defaultPan: -0.05,
      gainTrimDb: 1,
      synthesisNotes: "Solid acoustic snare crack with bottom wire sizzle buzz"
    },
    {
      id: "snare-rimshot",
      name: "14-inch Snare Rimshot",
      midi: 40,
      physicalType: "membrane",
      tuningHz: 220,
      decayTimeSec: 0.25,
      damping: 0.25,
      shellResonance: 0.9,
      strikeZones: ["rim", "center"],
      defaultPan: -0.05,
      gainTrimDb: 2.5,
      synthesisNotes: "High-velocity simultaneous head and metal counterhoop strike"
    },
    {
      id: "snare-cross-stick",
      name: "Snare Cross-Stick (Rimclick)",
      midi: 37,
      physicalType: "wood",
      tuningHz: 450,
      decayTimeSec: 0.12,
      damping: 0.85,
      shellResonance: 0.3,
      strikeZones: ["rim"],
      defaultPan: -0.05,
      gainTrimDb: -1,
      synthesisNotes: "Dry, woody rim tap with stick resting on drumhead"
    },
    {
      id: "snare-ghost",
      name: "Snare Ghost Note",
      midi: 38,
      physicalType: "membrane",
      tuningHz: 180,
      decayTimeSec: 0.18,
      damping: 0.6,
      shellResonance: 0.4,
      strikeZones: ["center"],
      defaultPan: -0.05,
      gainTrimDb: -8,
      synthesisNotes: "Low-velocity syncopated inner groove tap"
    },
    {
      id: "hihat-closed",
      name: "14-inch Closed Hi-Hat",
      midi: 42,
      physicalType: "metal",
      tuningHz: 820,
      decayTimeSec: 0.08,
      damping: 0.88,
      strikeZones: ["bow", "closed"],
      defaultPan: 0.3,
      gainTrimDb: -3,
      synthesisNotes: "Tight metallic stick tick with heavy foot pedal pressure"
    },
    {
      id: "hihat-open",
      name: "14-inch Open Hi-Hat",
      midi: 46,
      physicalType: "metal",
      tuningHz: 780,
      decayTimeSec: 1.1,
      damping: 0.15,
      strikeZones: ["edge", "open"],
      defaultPan: 0.3,
      gainTrimDb: -2,
      synthesisNotes: "Sizzling bronze wash with open top cymbal vibration"
    },
    {
      id: "hihat-pedal",
      name: "Hi-Hat Foot Pedal Chick",
      midi: 44,
      physicalType: "metal",
      tuningHz: 860,
      decayTimeSec: 0.1,
      damping: 0.9,
      strikeZones: ["closed"],
      defaultPan: 0.3,
      gainTrimDb: -4,
      synthesisNotes: "Snappy foot pedal closure without stick strike"
    },
    {
      id: "tom-high",
      name: "10-inch High Rack Tom",
      midi: 50,
      physicalType: "membrane",
      tuningHz: 165,
      decayTimeSec: 0.6,
      damping: 0.3,
      shellResonance: 0.85,
      defaultPan: -0.2,
      gainTrimDb: 0
    },
    {
      id: "tom-mid",
      name: "12-inch Mid Rack Tom",
      midi: 47,
      physicalType: "membrane",
      tuningHz: 130,
      decayTimeSec: 0.7,
      damping: 0.3,
      shellResonance: 0.85,
      defaultPan: 0.1,
      gainTrimDb: 0
    },
    {
      id: "tom-low",
      name: "16-inch Floor Tom",
      midi: 43,
      physicalType: "membrane",
      tuningHz: 85,
      decayTimeSec: 0.9,
      damping: 0.25,
      shellResonance: 0.9,
      defaultPan: 0.35,
      gainTrimDb: 1
    },
    {
      id: "crash-1",
      name: "16-inch Medium Crash",
      midi: 49,
      physicalType: "metal",
      tuningHz: 520,
      decayTimeSec: 2.2,
      damping: 0.1,
      defaultPan: -0.3,
      gainTrimDb: -2
    },
    {
      id: "ride-bow",
      name: "20-inch Heavy Ride Bow",
      midi: 51,
      physicalType: "metal",
      tuningHz: 480,
      decayTimeSec: 3.5,
      damping: 0.08,
      defaultPan: 0.3,
      gainTrimDb: -3
    },
    {
      id: "ride-bell",
      name: "20-inch Heavy Ride Bell",
      midi: 53,
      physicalType: "metal",
      tuningHz: 920,
      decayTimeSec: 3,
      damping: 0.05,
      defaultPan: 0.3,
      gainTrimDb: -1
    }
  ],
  performanceArticulations: {
    choke: {
      dampReleaseMs: 25
    },
    slap: {
      transientSharpness: 0.92,
      dampingFactor: 0.35
    }
  },
  techniques: {
    articulations: [
      "accent",
      "ghost",
      "open",
      "staccato",
      "rimshot",
      "staccatissimo",
      "roll",
      "choke"
    ],
    techniqueMethods: [
      "snare center strike for fat solid fundamental backbeat",
      "high-velocity rimshot hitting head and metal rim simultaneously",
      "delicate ghost notes providing syncopated inner groove subdivision",
      "hi-hat foot pressure modulation from tight closed tick to sizzle open wash",
      "bass drum heel-up punch with beater buried in head"
    ],
    playingStyles: ["rock", "funk", "pop", "hip-hop", "blues", "rnb", "metal"],
    genreTechniques: {
      rock: ["accent", "rimshot", "open", "staccato"],
      funk: ["ghost", "accent", "rimshot", "staccato"],
      pop: ["accent", "staccato", "open"],
      "hip-hop": ["accent", "ghost", "rimshot"]
    }
  },
  physicalModel: {
    model: "membrane",
    parameters: {
      membraneTension: 0.65,
      membraneDamping: 0.35,
      transientSharpness: 0.92,
      bodyResonance: 0.75
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Kick combines low fundamental sub thump (55-65 Hz) with crisp beater click (3-4 kHz).",
      "Snare couples top head acoustic crack with bottom snare wire sizzling buzz.",
      "Hi-hats and cymbals deliver shimmering metallic stick definition and wash."
    ]
  }
};
