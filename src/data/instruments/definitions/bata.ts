import type { InstrumentDef } from '../types';

export const bata: InstrumentDef = {
  id: "bata",
  name: "Afro-Cuban Bata Drum Trio",
  family: "hand-drums",
  drum: {
    low: 60,
    mid: 62,
    high: 64
  },
  voicing: "unpitched",
  bodyConstruction: "skin-faced",
  excitationType: "fingerpad",
  elementaryModel: 4,
  makeupGain: 0.976,
  polyphony: 8,
  note: "Sacred hour-glass shaped double-headed Afro-Cuban drums (Iyá mother drum, Itótele, Okónkolo) with Enú (large head) and Chachá (small head)",
  acousticProfile: {
    sustain: "percussive",
    role: "percussion",
    centre: 62,
    low: 60,
    high: 65,
    pan: 0.2,
    trim: -1,
    space: 0.22,
    ring: 0.8
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.85,
    tension: 0.8,
    bodyResonanceVolume: 15,
    decayTimeFactor: 0.8,
    harmonicRichness: 0.75,
    excitationType: "fingerpad"
  },
  kitComponents: [
    {
      id: "iya-enu",
      name: "Iya Enu (Large Bass Head)",
      midi: 60,
      physicalType: "membrane",
      tuningHz: 115,
      decayTimeSec: 0.7,
      damping: 0.3,
      strikeZones: ["open", "bass"],
      defaultPan: 0,
      gainTrimDb: 1,
      synthesisNotes: "Deep booming bass head on largest Iyá drum with brass bells resonance"
    },
    {
      id: "iya-chacha",
      name: "Iya Chacha (Small Treble Head)",
      midi: 64,
      physicalType: "membrane",
      tuningHz: 310,
      decayTimeSec: 0.2,
      damping: 0.7,
      strikeZones: ["rim", "slap"],
      defaultPan: 0,
      gainTrimDb: 0
    },
    {
      id: "itotele-enu",
      name: "Itotele Enu (Mid Drum Bass Head)",
      midi: 62,
      physicalType: "membrane",
      tuningHz: 160,
      decayTimeSec: 0.55,
      damping: 0.35,
      defaultPan: -0.25,
      gainTrimDb: 0
    },
    {
      id: "okonkolo-chacha",
      name: "Okonkolo Chacha (High Ostinato Head)",
      midi: 65,
      physicalType: "membrane",
      tuningHz: 420,
      decayTimeSec: 0.12,
      damping: 0.8,
      defaultPan: 0.3,
      gainTrimDb: -1
    }
  ],
  performanceArticulations: {
    slap: {
      transientSharpness: 0.9,
      dampingFactor: 0.6
    }
  },
  techniques: {
    articulations: ["accent", "open", "staccato", "slap", "chachá"],
    techniqueMethods: [
      "two-handed enu/chacha conversations",
      "sacred toque ostinatos",
      "muffled hand presses"
    ],
    playingStyles: ["santeria", "rumba", "latin-jazz", "world"],
    genreTechniques: {
      santeria: ["open", "chachá", "accent", "staccato"]
    }
  }
};
