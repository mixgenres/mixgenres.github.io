import type { InstrumentDef } from '../../schema/instrument-def';

export const timbales: InstrumentDef = {
  id: "timbales",
  name: "Timbales",
  family: "hand-drums",
  drum: {
    low: 65,
    mid: 66,
    high: 67
  },
  voicing: "unpitched",
  bodyConstruction: "skin-faced",
  excitationType: "stick",
  elementaryModel: 4,
  makeupGain: 1.540,
  polyphony: 12,
  note: "Single-headed metal shell drums (Macho 13-inch, Hembra 14-inch) played with wooden dowels for explosive cáscara shell tapping and mambo bell riffs",
  acousticProfile: {
    sustain: "percussive",
    role: "percussion",
    centre: 66,
    low: 65,
    high: 68,
    pan: -0.34,
    trim: -1,
    space: 0.2,
    ring: 0.7
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.9,
    tension: 0.95,
    bodyResonanceVolume: 8,
    decayTimeFactor: 0.7,
    harmonicRichness: 0.9,
    bodyConstruction: "metal-shell",
    excitationType: "stick"
  },
  kitComponents: [
    {
      id: "cascara",
      name: "Cáscara",
      midi: 68,
      physicalType: "metal",
      tuningHz: 950,
      decayTimeSec: 0.08,
      damping: 0.9,
      strikeZones: ["rim"],
      defaultPan: -0.34,
      gainTrimDb: -2,
      synthesisNotes: "Sharp wood stick tapping rhythmically against brass/steel shell"
    },
    {
      id: "macho-open",
      name: "Macho High Timbale Head Strike",
      midi: 66,
      physicalType: "membrane",
      tuningHz: 340,
      decayTimeSec: 0.45,
      damping: 0.3,
      strikeZones: ["open"],
      defaultPan: -0.36,
      gainTrimDb: 0,
      synthesisNotes: "Ringing metallic head strike on 13-inch Macho drum"
    },
    {
      id: "hembra-open",
      name: "Hembra Low Timbale Head Strike",
      midi: 65,
      physicalType: "membrane",
      tuningHz: 240,
      decayTimeSec: 0.6,
      damping: 0.25,
      strikeZones: ["open"],
      defaultPan: -0.3,
      gainTrimDb: 0,
      synthesisNotes: "Resonant low head strike on 14-inch Hembra drum"
    },
    {
      id: "mambo-bell-mouth",
      name: "Mambo Cowbell Open Mouth",
      midi: 67,
      physicalType: "metal",
      tuningHz: 780,
      decayTimeSec: 0.35,
      damping: 0.4,
      strikeZones: ["open"],
      defaultPan: -0.28,
      gainTrimDb: 1,
      synthesisNotes: "Heavy brass cowbell mouth strike for driving mambo chorus section"
    },
    {
      id: "cha-cha-bell",
      name: "Cha-Cha Cowbell Neck",
      midi: 56,
      physicalType: "metal",
      tuningHz: 1100,
      decayTimeSec: 0.18,
      damping: 0.7,
      strikeZones: ["closed"],
      defaultPan: -0.28,
      gainTrimDb: -1,
      synthesisNotes: "High dry bell tap on closed neck"
    }
  ],
  performanceArticulations: {
    choke: {
      dampReleaseMs: 20
    },
    slap: {
      transientSharpness: 0.95,
      dampingFactor: 0.3
    }
  },
  techniques: {
    articulations: ["accent", "open", "staccato", "rimshot", "roll", "choke"],
    techniqueMethods: [
      "cáscara stick pattern on side shell",
      "mambo bell syncopated drive",
      "paila rimshot press roll",
      "abanico 5-stroke stick roll into verse"
    ],
    playingStyles: ["salsa", "mambo", "latin-jazz", "cha-cha-cha", "timba"],
    genreTechniques: {
      salsa: ["accent", "open", "staccato", "rimshot"],
      timba: ["accent", "rimshot", "roll", "open"],
      mambo: ["open", "accent", "staccato"]
    }
  }
};
