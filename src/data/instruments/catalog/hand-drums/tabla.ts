import type { InstrumentDef } from '../../schema/instrument-def';

export const tabla: InstrumentDef = {
  id: "tabla",
  name: "Indian Tabla Pair",
  family: "hand-drums",
  drum: {
    low: 60,
    mid: 62,
    high: 64
  },
  voicing: "unpitched",
  bodyConstruction: "skin-faced",
  excitationType: "fingerpad",
  
  
  polyphony: 8,
  note: "North Indian classical hand drum pair consisting of wooden Dayān (treble drum with black Syāhī paste) and metal Bayān (bass drum with pitch bends)",
  acousticProfile: {
    sustain: "percussive",
    role: "percussion",
    centre: 60,
    low: 58,
    high: 65,
    pan: 0.2,
    trim: -1,
    space: 0.22,
    ring: 1.1
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.8,
    tension: 0.75,
    bodyResonanceVolume: 6,
    decayTimeFactor: 1.1,
    harmonicRichness: 0.85,
    excitationType: "fingerpad"
  },
  kitComponents: [
    {
      id: "dayan-na",
      name: "Dayan Na / Tin (Rim Ringing Tone)",
      midi: 64,
      physicalType: "membrane",
      tuningHz: 261.63,
      decayTimeSec: 0.8,
      damping: 0.2,
      strikeZones: ["edge"],
      defaultPan: 0.25,
      gainTrimDb: 0,
      
    },
    {
      id: "dayan-tun",
      name: "Dayan Tun (Center Open Resonant)",
      midi: 62,
      physicalType: "membrane",
      tuningHz: 261.63,
      decayTimeSec: 1.2,
      damping: 0.15,
      strikeZones: ["open"],
      defaultPan: 0.25,
      gainTrimDb: 0.5
    },
    {
      id: "dayan-ti-ke",
      name: "Dayan Ti / Ke (Syahi Center Muted Tap)",
      midi: 63,
      physicalType: "membrane",
      tuningHz: 320,
      decayTimeSec: 0.08,
      damping: 0.9,
      strikeZones: ["closed"],
      defaultPan: 0.25,
      gainTrimDb: -3,
      
    },
    {
      id: "bayan-ghe",
      name: "Bayan Ge / Ghe (Bass Resonance)",
      midi: 60,
      physicalType: "membrane",
      tuningHz: 110,
      decayTimeSec: 1,
      damping: 0.25,
      strikeZones: ["bass", "open"],
      defaultPan: -0.15,
      gainTrimDb: 1,
      
    },
    {
      id: "bayan-meend",
      name: "Bayan Meend (Wrist Pressure Pitch Bend)",
      midi: 61,
      physicalType: "membrane",
      tuningHz: 130,
      decayTimeSec: 0.9,
      damping: 0.3,
      strikeZones: ["bass"],
      defaultPan: -0.15,
      gainTrimDb: 1,
      
    }
  ],
  performanceArticulations: {
    bend: {
      maxSemitones: 4,
      speedMs: 150,
      curve: "s-curve"
    },
    slap: {
      transientSharpness: 0.92,
      dampingFactor: 0.7
    }
  },
  techniques: {
    articulations: ["accent", "open", "slap", "staccato", "bend", "meend"],
    techniqueMethods: [
      "dayan syahi center strike",
      "bayan wrist pressure pitch swoop",
      "ti-re-ki-te fast finger rolls"
    ],
    playingStyles: ["hindustani-classical", "fusion", "world", "ambient"],
    genreTechniques: {
      "hindustani-classical": ["open", "meend", "accent", "staccato"],
      fusion: ["open", "meend", "slap"]
    }
  }
};
