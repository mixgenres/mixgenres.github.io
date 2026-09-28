import type { InstrumentDef } from '../types';

export const congas: InstrumentDef = {
  id: "congas",
  name: "Congas (Tumbadoras)",
  family: "hand-drums",
  drum: {
    low: 64,
    mid: 62,
    high: 60
  },
  voicing: "unpitched",
  bodyConstruction: "skin-faced",
  excitationType: "fingerpad",
  elementaryModel: 4,
  makeupGain: 1.540,
  polyphony: 12,
  note: "Afro-Cuban paired staved wooden barrel hand drums (Quinto, Conga, Tumba) with thick mule or steer skin heads, driving the complex marcha tumbao",
  acousticProfile: {
    sustain: "percussive",
    role: "percussion",
    centre: 62,
    low: 60,
    high: 65,
    pan: 0.34,
    trim: -1,
    space: 0.18,
    ring: 0.6
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.8,
    tension: 0.85,
    bodyResonanceVolume: 12,
    decayTimeFactor: 0.6,
    harmonicRichness: 0.7,
    bodyConstruction: "wood-box",
    excitationType: "fingerpad"
  },
  kitComponents: [
    {
      id: "quinto-slap",
      name: "Quinto Open Slap",
      midi: 60,
      physicalType: "membrane",
      tuningHz: 290,
      decayTimeSec: 0.15,
      damping: 0.6,
      strikeZones: ["slap"],
      defaultPan: 0.38,
      gainTrimDb: 0,
      synthesisNotes: "High-pitched explosive crack on small 11-inch Quinto drumhead"
    },
    {
      id: "conga-open",
      name: "Conga Tono Abierto",
      midi: 62,
      physicalType: "membrane",
      tuningHz: 210,
      decayTimeSec: 0.55,
      damping: 0.25,
      shellResonance: 0.85,
      strikeZones: ["open", "edge"],
      defaultPan: 0.34,
      gainTrimDb: 0,
      synthesisNotes: "Full resonant open tone played near rim with fingers bouncing off"
    },
    {
      id: "conga-slap-tapao",
      name: "Conga Slap Tapao (Muted Slap)",
      midi: 63,
      physicalType: "membrane",
      tuningHz: 240,
      decayTimeSec: 0.1,
      damping: 0.85,
      strikeZones: ["closed", "slap"],
      defaultPan: 0.34,
      gainTrimDb: -1,
      synthesisNotes: "Dry, cupped finger slap holding contact against drumhead"
    },
    {
      id: "tumba-open",
      name: "Tumba Open Low Tone",
      midi: 64,
      physicalType: "membrane",
      tuningHz: 140,
      decayTimeSec: 0.75,
      damping: 0.2,
      shellResonance: 0.95,
      strikeZones: ["open", "bass"],
      defaultPan: 0.28,
      gainTrimDb: 1,
      synthesisNotes: "Deep, resonant bass rumble on 12.5-inch Tumba barrel"
    },
    {
      id: "conga-heel",
      name: "Manoteo Heel (Palm)",
      midi: 61,
      physicalType: "membrane",
      tuningHz: 180,
      decayTimeSec: 0.12,
      damping: 0.75,
      strikeZones: ["center"],
      defaultPan: 0.34,
      gainTrimDb: -5,
      synthesisNotes: "Soft heel of hand palm strike in marching tumbao motion"
    },
    {
      id: "conga-toe",
      name: "Manoteo Toe (Fingertips)",
      midi: 61,
      physicalType: "membrane",
      tuningHz: 220,
      decayTimeSec: 0.08,
      damping: 0.8,
      strikeZones: ["tip"],
      defaultPan: 0.34,
      gainTrimDb: -6,
      synthesisNotes: "Fingertip tap completing heel-toe rocking cycle"
    }
  ],
  performanceArticulations: {
    slap: {
      transientSharpness: 0.95,
      dampingFactor: 0.7,
      openToneGainDb: 2
    },
    mute: {
      dampingFactor: 0.85,
      cutoffFreqHz: 900,
      decayTimeSec: 0.1
    }
  },
  techniques: {
    articulations: ["accent", "open", "staccato", "slap", "ghost", "heel", "toe", "slap-tapao", "quinto-slap", "conga-open", "tumba-open"],
    techniqueMethods: [
      "open tone (tono abierto) with full fingers bouncing off rim",
      "muffled slap (slap tapao) fingers cup into head holding contact",
      "open slap (slap abierto) explosive high harmonic pop",
      "heel-toe palm rocking motion (manoteo)",
      "bass tone with full palm centered on head"
    ],
    playingStyles: [
      "salsa",
      "son-cubano",
      "rumba-guaguanco",
      "latin-jazz",
      "cumbia",
      "cha-cha-cha"
    ],
    genreTechniques: {
      salsa: ["open", "slap", "accent", "ghost", "heel", "toe", "slap-tapao", "conga-open", "tumba-open"],
      cumbia: ["open", "accent", "ghost"],
      "latin-jazz": ["slap", "open", "ghost", "accent"]
    }
  },
  physicalModel: {
    model: "membrane",
    parameters: {
      membraneTension: 0.72,
      membraneDamping: 0.38,
      transientSharpness: 0.88,
      bodyResonance: 0.8
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Tono abierto (open tone) strikes edge with fingers for resonant pitch projection.",
      "Slap (seco / tapao) cups fingers against center for explosive crack transient.",
      "Manoteo (heel-toe rocking palm motion) creates continuous 8th-note momentum."
    ]
  }
};
