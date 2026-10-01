import type { InstrumentDef } from '../../schema/instrument-def';

export const bongos: InstrumentDef = {
  id: "bongos",
  name: "Bongos",
  family: "hand-drums",
  drum: {
    low: 61,
    mid: 60,
    high: 62
  },
  voicing: "unpitched",
  bodyConstruction: "skin-faced",
  excitationType: "fingerpad",
  elementaryModel: 4,
  makeupGain: 2.777,
  polyphony: 12,
  note: "Small Afro-Cuban paired high-pitched wooden hand drums (Macho 7-inch, Hembra 8.5-inch) playing the driving martillo pattern",
  acousticProfile: {
    sustain: "percussive",
    role: "percussion",
    centre: 60,
    low: 60,
    high: 62,
    pan: 0.44,
    trim: -3,
    space: 0.16,
    ring: 0.4
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.75,
    tension: 0.9,
    bodyResonanceVolume: 3,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.8,
    excitationType: "fingerpad"
  },
  kitComponents: [
    {
      id: "macho-slap",
      name: "Macho High Slap",
      midi: 60,
      physicalType: "membrane",
      tuningHz: 420,
      decayTimeSec: 0.08,
      damping: 0.8,
      strikeZones: ["slap"],
      defaultPan: 0.48,
      gainTrimDb: 0,
      synthesisNotes: "Crisp, piercing high-frequency slap on 7-inch Macho drum"
    },
    {
      id: "hembra-open",
      name: "Hembra Low Open Tone",
      midi: 61,
      physicalType: "membrane",
      tuningHz: 260,
      decayTimeSec: 0.35,
      damping: 0.3,
      strikeZones: ["open"],
      defaultPan: 0.42,
      gainTrimDb: 0,
      synthesisNotes: "Warm resonant open tone on 8.5-inch Hembra drum"
    },
    {
      id: "macho-finger-tap",
      name: "Martillo Index Fingertip Tap",
      midi: 62,
      physicalType: "membrane",
      tuningHz: 380,
      decayTimeSec: 0.06,
      damping: 0.85,
      strikeZones: ["tip"],
      defaultPan: 0.48,
      gainTrimDb: -4,
      synthesisNotes: "Index finger edge stroke driving straight 8th-note martillo feel"
    },
    {
      id: "macho-thumb",
      name: "Martillo Thumb Pressure Strike",
      midi: 63,
      physicalType: "membrane",
      tuningHz: 350,
      decayTimeSec: 0.09,
      damping: 0.75,
      strikeZones: ["center"],
      defaultPan: 0.48,
      gainTrimDb: -3
    }
  ],
  performanceArticulations: {
    slap: {
      transientSharpness: 0.98,
      dampingFactor: 0.8
    }
  },
  techniques: {
    articulations: ["accent", "open", "slap", "staccato", "ghost"],
    techniqueMethods: [
      "martillo thumb/index stroke pattern",
      "open tone on hembra",
      "dry dry slap on macho edge",
      "finger-glissando pitch bend on hembra head"
    ],
    playingStyles: ["salsa", "son-cubano", "bachata", "bolero", "latin-jazz"],
    genreTechniques: {
      bachata: ["slap", "open", "staccato"],
      salsa: ["slap", "open", "accent"],
      "son-cubano": ["open", "slap", "staccato"]
    }
  }
};
