import type { InstrumentDef } from '../types';

export const cajon: InstrumentDef = {
  id: "cajon",
  name: "Cajón Flamenco",
  family: "hand-drums",
  drum: {
    low: 36,
    mid: 38,
    high: 42
  },
  voicing: "unpitched",
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  elementaryModel: 4,
  makeupGain: 2.299,
  polyphony: 12,
  note: "Authentic Flamenco/Peruvian wooden box drum with thin resonant birch tapa, internal guitar string snare wires, deep 65Hz cavity bass thump (grave), crisp corner snare slap (agudo), open tones, and fingertip ghost taps",
  acousticProfile: {
    sustain: "percussive",
    role: "percussion",
    centre: 38,
    low: 36,
    high: 42,
    pan: 0.1,
    trim: 0,
    space: 0.14,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.65,
    tension: 0.72,
    bodyResonanceVolume: 22,
    decayTimeFactor: 0.5,
    harmonicRichness: 0.75,
    faustProfile: "flamenco-cajon",
    articulationCapabilities: ["bass", "slap", "tip", "side-tap", "brush", "roll", "open", "mute"],
    soundboardResonanceHz: 180,
    airResonanceHz: 65,
    bodyConstruction: "wood-box",
    excitationType: "fingerpad"
  },
  kitComponents: [
    {
      id: "cajon-bass",
      name: "Cajón Grave (Center Bass Thump)",
      midi: 36,
      physicalType: "wood",
      tuningHz: 65,
      decayTimeSec: 0.38,
      damping: 0.45,
      shellResonance: 0.92,
      strikeZones: ["bass", "center"],
      defaultPan: 0.1,
      gainTrimDb: 1.5,
      synthesisNotes: "Full palm strike in center of wooden front plate driving 65Hz internal air cavity resonance"
    },
    {
      id: "cajon-slap",
      name: "Cajón Agudo (Corner Snare Slap)",
      midi: 38,
      physicalType: "wood",
      tuningHz: 240,
      decayTimeSec: 0.08,
      damping: 0.85,
      shellResonance: 0.55,
      strikeZones: ["slap", "edge"],
      defaultPan: 0.1,
      gainTrimDb: 0.5,
      synthesisNotes: "Relaxed finger slap on upper corner exciting internal guitar snare wire buzz at 3.5kHz"
    },
    {
      id: "cajon-tip",
      name: "Cajón Tip (Fingertip Ghost Tap)",
      midi: 42,
      physicalType: "wood",
      tuningHz: 360,
      decayTimeSec: 0.06,
      damping: 0.90,
      strikeZones: ["tip"],
      defaultPan: 0.1,
      gainTrimDb: -4,
      synthesisNotes: "Delicate ghost note fingertip touch on top wood plate"
    },
    {
      id: "cajon-side",
      name: "Cajón Side (Hardwood Rim Knock)",
      midi: 37,
      physicalType: "wood",
      tuningHz: 480,
      decayTimeSec: 0.1,
      damping: 0.92,
      strikeZones: ["rim"],
      defaultPan: 0.1,
      gainTrimDb: -2,
      synthesisNotes: "Knuckle tap against outer solid birch side panel"
    }
  ],
  performanceArticulations: {
    slap: {
      transientSharpness: 0.94,
      dampingFactor: 0.65
    },
    golpe: {
      bodyTapPitchHz: 180,
      transientDecayMs: 35,
      gainDb: 2
    }
  },
  techniques: {
    articulations: ["accent", "low-tone", "slap", "ghost", "golpe", "brushed", "roll", "tip", "staccato", "open", "palm-mute"],
    techniqueMethods: [
      "center palm grave bass thump",
      "upper corner agudo snare slap",
      "fingertip ghost subdivision taps",
      "side wood panel rim tap",
      "flamenco bulería & rumba accentuation",
      "muffled palm apagado"
    ],
    playingStyles: ["flamenco", "rumba", "afro-peruvian", "acoustic-pop", "folk", "latin-jazz"],
    genreTechniques: {
      flamenco: ["slap", "accent", "golpe", "staccato", "low-tone", "ghost"],
      rumba: ["slap", "accent", "staccato", "low-tone"],
      "afro-peruvian": ["slap", "accent", "ghost", "open"]
    }
  },
  physicalModel: {
    model: "membrane",
    parameters: {
      airResonance: 0.88,
      bodyResonance: 0.75,
      transientSharpness: 0.92,
      damping: 0.65
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Internal air chamber (65Hz) provides resonant bass thump when struck in the center.",
      "Upper corner slaps excite internal snare wire tension generating bright crisp sizzle.",
      "Delicate fingertip ghost notes maintain continuous compás subdivision."
    ]
  }
};
