import type { InstrumentDef } from '../../schema/instrument-def';

export const piano: InstrumentDef = {
  id: "piano",
  name: "Acoustic Grand Piano",
  family: "bellows-and-keys",
  voicing: "chord",
  bodyConstruction: "wood-box",
  excitationType: "hammer",
  sympatheticStrings: true,
  elementaryModel: 11,
  makeupGain: 6.626,
  polyphony: 16,
  note: "Concert grand piano with multi-string unisons, velocity-sensitive felt hammers, cast-iron frame duplex scale chime, and comprehensive support for Tango techniques (marcato en 4, arrastre drag, Pugliese yumba clusters, chapa damping, Salgán campana stabs, and pesada sub-octaves)",
  acousticProfile: {
    sustain: "decaying",
    role: "harmony",
    centre: 60,
    low: 21,
    high: 108,
    pan: -0.08,
    trim: 0,
    space: 0.22,
    ring: 3.2
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.88,
    tension: 0.92,
    bodyResonanceVolume: 350,
    decayTimeFactor: 4.2,
    harmonicRichness: 0.88,
    soundboardResonanceHz: 120,
    airResonanceHz: 55,
    transientSharpness: 0.92,
    sympatheticStrings: true,
    bodyConstruction: "wood-box",
    excitationType: "hammer"
  },
  tuningAndMechanics: {
    tuningName: "88-Key Concert Grand Piano A440 Equal Temperament",
    courses: 3,
    frets: 88,
    keyRange: {
      lowNote: "A0",
      highNote: "C8",
      lowMidi: 21,
      highMidi: 108
    }
  },
  performanceArticulations: {
    marcato: {
      decayTimeSec: 0.65,
      transientSharpness: 0.95
    },
    arrastre: {
      preBeatOffsetMs: -50,
      pitchDragSemitones: -2,
      pressureRamp: true,
      velocityGrowth: 1.3
    },
    bend: {
      maxSemitones: 2,
      speedMs: 100,
      curve: "s-curve"
    },
    mute: {
      dampingFactor: 0.92,
      cutoffFreqHz: 950,
      decayTimeSec: 0.15
    },
    vibrato: {
      rateHz: 5.2,
      depthCents: 8,
      onsetDelayMs: 250
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "sostenuto",
      "marcato",
      "arrastre",
      "yumba",
      "cluster",
      "chapa",
      "campana",
      "pesada",
      "montuno",
      "octave-stabs"
    ],
    techniqueMethods: [
      "sustain pedal sympathetic string resonance",
      "velocity-dependent non-linear felt hammer hardening",
      "tango marcato en 4 heavy walking chord accentuation",
      "arrastre anticipatory pre-beat drag slide",
      "Pugliese yumba low-end cluster slam and dry rebound",
      "chapa metal plate damped percussive strike",
      "Horacio Salgán campana high register bell stabs",
      "pesada heavy sub-octave fundamental coupling"
    ],
    playingStyles: ["classical", "jazz", "tango", "salsa", "pop", "rock", "gospel", "bossa-nova"],
    genreTechniques: {
      tango: ["marcato", "arrastre", "yumba", "cluster", "chapa", "campana", "pesada", "staccato", "accent"],
      salsa: ["montuno", "accent", "staccato", "octave-stabs"],
      jazz: ["legato", "accent", "staccato", "tenuto"],
      classical: ["legato", "sostenuto", "tenuto", "accent"]
    }
  },
  physicalModel: {
    model: "struck-string",
    parameters: {
      stiffness: 0.88,
      bodyResonance: 0.85,
      inharmonicity: 0.00018,
      transientSharpness: 0.92,
      damping: 0.35
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Triple unison detuning in upper register with single/double wound copper strings in lower register.",
      "Non-linear felt compression transitioning dynamically from warm mellow pp to bright percussive ff attack.",
      "Acoustic spruce soundboard plate mode (120Hz) and cross-grain modal resonance (240Hz)."
    ]
  }
};
