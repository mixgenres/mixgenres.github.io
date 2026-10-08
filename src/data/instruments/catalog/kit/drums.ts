import type { InstrumentDef } from '../../schema/instrument-def';

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
      
    },
    { id: "tom-extra-low", name: "14-inch Low Rack Tom", midi: 41, physicalType: "membrane", tuningHz: 100, decayTimeSec: 0.75, damping: 0.28, shellResonance: 0.88, strikeZones: ["center"], defaultPan: 0.22, gainTrimDb: 0 },
    { id: "tom-extra-high", name: "12-inch High Rack Tom", midi: 48, physicalType: "membrane", tuningHz: 145, decayTimeSec: 0.62, damping: 0.30, shellResonance: 0.85, strikeZones: ["center"], defaultPan: -0.10, gainTrimDb: 0 },
    { id: "crash-2", name: "18-inch Medium Crash", midi: 57, physicalType: "metal", tuningHz: 430, decayTimeSec: 2.5, damping: 0.09, strikeZones: ["edge"], defaultPan: 0.28, gainTrimDb: -2 },
    { id: "splash", name: "10-inch Splash", midi: 55, physicalType: "metal", tuningHz: 760, decayTimeSec: 0.55, damping: 0.22, strikeZones: ["edge"], defaultPan: -0.15, gainTrimDb: -3 },
    { id: "china", name: "18-inch China Cymbal", midi: 52, physicalType: "metal", tuningHz: 470, decayTimeSec: 1.65, damping: 0.13, strikeZones: ["edge"], defaultPan: -0.35, gainTrimDb: -3 },
    { id: "ride-edge", name: "20-inch Ride Edge", midi: 59, physicalType: "metal", tuningHz: 410, decayTimeSec: 2.8, damping: 0.07, strikeZones: ["edge"], defaultPan: 0.30, gainTrimDb: -3 },
    { id: "cowbell", name: "Cowbell", midi: 56, physicalType: "metal", tuningHz: 650, decayTimeSec: 0.45, damping: 0.35, strikeZones: ["center", "edge"], defaultPan: 0.18, gainTrimDb: -3 },
    { id: "tambourine", name: "Tambourine", midi: 54, physicalType: "metal", tuningHz: 3200, decayTimeSec: 0.9, damping: 0.22, strikeZones: ["edge"], defaultPan: -0.18, gainTrimDb: -5 },
    { id: "cabasa", name: "Cabasa", midi: 69, physicalType: "shaker", decayTimeSec: 0.18, damping: 0.5, strikeZones: ["edge"], defaultPan: 0.24, gainTrimDb: -6 },
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
    
    
  }
};
