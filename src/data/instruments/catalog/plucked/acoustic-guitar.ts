import type { InstrumentDef } from '../../schema/instrument-def';

export const acoustic_guitar: InstrumentDef = {
  id: "acoustic-guitar",
  name: "Steel-String Acoustic Guitar",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "hard-pick",
  elementaryModel: 0,
  makeupGain: 15.812,
  polyphony: 8,
  note: "Steel-string dreadnought acoustic guitar with solid Sitka spruce top and phosphor bronze strings delivering crisp projection",
  acousticProfile: {
    sustain: "decaying",
    role: "harmony",
    centre: 55,
    low: 40,
    high: 78,
    pan: 0.22,
    trim: 0,
    space: 0.24,
    ring: 2.5
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.7,
    tension: 0.85,
    bodyResonanceVolume: 16,
    decayTimeFactor: 3.2,
    harmonicRichness: 0.88,
    soundboardResonanceHz: 180,
    airResonanceHz: 92,
    excitationType: "hard-pick",
    bodyConstruction: "wood-box"
  },
  tuningAndMechanics: {
    tuningName: "E Standard Steel-String Acoustic",
    courses: 1,
    frets: 20,
    maxFretStretch: 4,
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
    mute: {
      dampingFactor: 0.82,
      cutoffFreqHz: 950,
      decayTimeSec: 0.15
    },
    bend: {
      maxSemitones: 2,
      speedMs: 120,
      curve: "s-curve"
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "palm-mute",
      "tenuto",
      "ghost",
      "harmonic",
      "slide"
    ],
    techniqueMethods: [
      "down-up flatpick strumming patterns",
      "Travis fingerpicking thumb-bass separation",
      "bridge palm muting",
      "hammer-on and pull-off legato runs"
    ],
    playingStyles: ["folk", "country", "pop", "bluegrass", "rock", "indie", "americana"],
    genreTechniques: {
      folk: ["legato", "tenuto", "accent"],
      bluegrass: ["accent", "staccato", "slide"],
      country: ["palm-mute", "accent", "staccato"],
      pop: ["accent", "tenuto", "palm-mute"]
    }
  },
  physicalModel: {
    model: "plucked-string",
    parameters: {
      stiffness: 0.58,
      damping: 0.32,
      inharmonicity: 0.22,
      bodyResonance: 0.75,
      pluckPosition: 0.22,
      pluckHardness: 0.68,
      transientSharpness: 0.65
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Flatpicking near bridge delivers biting brightness; picking near soundhole yields deep woody warmth.",
      "Palm muting near bridge dampens fundamental decay while preserving crisp transients."
    ]
  }
};
