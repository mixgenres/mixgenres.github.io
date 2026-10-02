import type { InstrumentDef } from '../../schema/instrument-def';

export const spanish_guitar: InstrumentDef = {
  id: "spanish-guitar",
  name: "Flamenco Guitar",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "nail",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 8,
  note: "Authentic handcrafted Spanish flamenco guitar (blanca cypress/spruce) with dual golpeador tap plates, low-action fret clack (ceceo), explosive 5-finger rasgueados, alzapúa thumb sweeps, picado rest strokes, and 5-note tremolo (p-i-a-m-i)",
  acousticProfile: {
    sustain: "decaying",
    role: "harmony",
    centre: 55,
    low: 40,
    high: 88,
    pan: 0.22,
    trim: 0,
    space: 0.26,
    ring: 2.4
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.68,
    tension: 0.78,
    bodyResonanceVolume: 11,
    decayTimeFactor: 1.9,
    harmonicRichness: 0.88,
    soundboardResonanceHz: 190,
    airResonanceHz: 98,
    transientSharpness: 0.94,
    excitationType: "nail",
    bodyConstruction: "wood-box"
  },
  tuningAndMechanics: {
    tuningName: "EADGBE Flamenco Guitar Standard Tuning",
    courses: 1,
    frets: 19,
    keyRange: {
      lowNote: "E2",
      highNote: "E6",
      lowMidi: 40,
      highMidi: 88
    },
    openStrings: [
      {
        name: "E2",
        note: "E2",
        midi: 40,
        frequencyHz: 82.41
      },
      {
        name: "A2",
        note: "A2",
        midi: 45,
        frequencyHz: 110.0
      },
      {
        name: "D3",
        note: "D3",
        midi: 50,
        frequencyHz: 146.83
      },
      {
        name: "G3",
        note: "G3",
        midi: 55,
        frequencyHz: 196.0
      },
      {
        name: "B3",
        note: "B3",
        midi: 59,
        frequencyHz: 246.94
      },
      {
        name: "E4",
        note: "E4",
        midi: 64,
        frequencyHz: 329.63
      }
    ]
  },
  performanceArticulations: {
    rasgueado: {
      burstNotes: 5,
      spreadMs: 32,
      directionPattern: ["down", "down", "down", "down", "up"],
      nailTransientSharpness: 0.95
    },
    golpe: {
      bodyTapPitchHz: 185,
      transientDecayMs: 35,
      gainDb: 3
    },
    bend: {
      maxSemitones: 2,
      speedMs: 90,
      curve: "s-curve"
    },
    mute: {
      dampingFactor: 0.85,
      cutoffFreqHz: 1200,
      decayTimeSec: 0.12
    },
    vibrato: {
      rateHz: 5.8,
      depthCents: 24,
      onsetDelayMs: 160
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "rasgueado",
      "alzapua",
      "tremolo",
      "picado",
      "golpe",
      "arrastre",
      "bend",
      "palm-mute",
      "ghost",
      "harmonic"
    ],
    techniqueMethods: [
      "5-finger rasgueado fan burst (e-a-m-i-p)",
      "3-stroke alzapúa thumb engine with down/up/golpe cycle",
      "rest-stroke picado scale speed with nail bite",
      "5-note flamenco tremolo (p-i-a-m-i)",
      "golpeador ring fingernail soundboard taps",
      "low-action fret buzz (ceceo) under forte attack",
      "apagado fleshy thumb-base string damping"
    ],
    playingStyles: ["flamenco", "rumba", "bulerias", "solea", "tangos", "alegrias", "fandangos", "classical-spanish"],
    genreTechniques: {
      flamenco: ["rasgueado", "alzapua", "tremolo", "picado", "golpe", "accent", "staccato"],
      rumba: ["rasgueado", "golpe", "accent", "palm-mute"],
      solea: ["alzapua", "picado", "tremolo", "legato", "accent"],
      bulerias: ["rasgueado", "alzapua", "golpe", "picado", "staccato"]
    }
  },
  physicalModel: {
    model: "plucked-string",
    parameters: {
      bodyResonance: 0.82,
      airResonance: 0.88,
      stiffness: 0.92,
      transientSharpness: 0.95,
      damping: 0.38
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Thin German spruce top paired with lightweight Spanish cypress back/sides for rapid acoustic decay.",
      "Dual corpus modes at 98Hz (Helmholtz air) and 190Hz (wood top plate) with 3.2kHz presence bite.",
      "Dedicated multi-stage impulse generators for 5-finger rasgueado, 3-stroke alzapúa, rest-stroke picado, and 5-note tremolo."
    ]
  }
};
