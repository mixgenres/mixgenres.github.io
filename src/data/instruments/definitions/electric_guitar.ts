import type { InstrumentDef } from '../types';

export const electric_guitar: InstrumentDef = {
  id: "electric-guitar",
  name: "Electric Guitar",
  family: "plucked",
  program: 27,
  voicing: "chord",
  courses: 1,
  bodyConstruction: "solid-electric",
  excitationType: "hard-pick",
  elementaryModel: 21,
  makeupGain: 13.580,
  polyphony: 8,
  note: "Solid-body electric guitar with magnetic dual humbuckers or single-coil pickups, delivering clean chnk, funk rhythm, and biting leads",
  acousticProfile: {
    sustain: "decaying",
    role: "harmony",
    centre: 55,
    low: 40,
    high: 78,
    pan: 0.34,
    trim: 2,
    space: 0.2,
    ring: 2
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.7,
    tension: 0.8,
    bodyResonanceVolume: 5,
    decayTimeFactor: 3.2,
    harmonicRichness: 0.88,
    pickupBlend: 0.6,
    fretBuzzAmount: 0.15,
    bodyConstruction: "solid-electric",
    excitationType: "hard-pick"
  },
  tuningAndMechanics: {
    tuningName: "E Standard Electric",
    courses: 1,
    frets: 22,
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
        frequencyHz: 110
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
        frequencyHz: 196
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
    bend: {
      maxSemitones: 2.5,
      speedMs: 100,
      curve: "s-curve"
    },
    mute: {
      dampingFactor: 0.85,
      cutoffFreqHz: 750,
      decayTimeSec: 0.12
    },
    vibrato: {
      rateHz: 5.8,
      depthCents: 35,
      onsetDelayMs: 200
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "palm-mute",
      "bend",
      "vibrato",
      "slide",
      "harmonic"
    ],
    techniqueMethods: [
      "alternate-picking",
      "palm-muting",
      "string-bending",
      "hammer-on",
      "pull-off",
      "slide"
    ],
    playingStyles: ["rock", "funk", "pop", "blues", "rnb", "reggae", "jazz"],
    genreTechniques: {
      funk: ["staccato", "palm-mute", "accent"],
      rock: ["bend", "vibrato", "accent", "palm-mute"],
      reggae: ["staccato", "palm-mute"]
    }
  }
};
