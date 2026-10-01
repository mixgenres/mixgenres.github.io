import type { InstrumentDef } from '../../schema/instrument-def';

export const bass: InstrumentDef = {
  id: "bass",
  name: "Electric Bass Guitar",
  family: "plucked",
  voicing: "bass",
  bodyConstruction: "solid-electric",
  excitationType: "fingerpad",
  elementaryModel: 3,
  makeupGain: 31.764,
  polyphony: 4,
  note: "Solid-body electric bass guitar driving low-end fundamental groove across funk, rock, pop, and Latin music",
  acousticProfile: {
    sustain: "decaying",
    role: "bass",
    centre: 40,
    low: 28,
    high: 55,
    pan: 0,
    trim: 1,
    space: 0.05,
    ring: 1.6
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.8,
    tension: 0.82,
    bodyResonanceVolume: 8,
    decayTimeFactor: 2.6,
    harmonicRichness: 0.88,
    fretBuzzAmount: 0.15,
    pickupBlend: 0.35,
    bodyConstruction: "solid-electric",
    excitationType: "fingerpad"
  },
  tuningAndMechanics: {
    tuningName: "EADG Electric Bass Standard",
    frets: 20,
    openStrings: [
      {
        name: "E1",
        note: "E1",
        midi: 28,
        frequencyHz: 41.2
      },
      {
        name: "A1",
        note: "A1",
        midi: 33,
        frequencyHz: 55
      },
      {
        name: "D2",
        note: "D2",
        midi: 38,
        frequencyHz: 73.42
      },
      {
        name: "G2",
        note: "G2",
        midi: 43,
        frequencyHz: 98
      }
    ]
  },
  performanceArticulations: {
    bend: {
      maxSemitones: 2,
      speedMs: 120,
      curve: "exponential"
    },
    mute: {
      dampingFactor: 0.8,
      cutoffFreqHz: 600,
      decayTimeSec: 0.15
    },
    slap: {
      transientSharpness: 0.9,
      dampingFactor: 0.4,
      openToneGainDb: 2
    }
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "ghost", "palm-mute", "slap", "slide"],
    techniqueMethods: ["two-finger plucking", "thumb muting", "hammer-on", "slide"],
    playingStyles: ["funk", "rock", "pop", "rnb", "salsa", "reggae"],
    genreTechniques: {
      funk: ["staccato", "ghost", "accent", "slap"],
      rock: ["accent", "legato", "staccato"],
      reggae: ["legato", "staccato"]
    }
  }
};
