import type { InstrumentDef } from '../types';

export const slap_bass: InstrumentDef = {
  id: "slap-bass",
  name: "Slap Electric Bass",
  family: "plucked",
  voicing: "bass",
  bodyConstruction: "solid-electric",
  excitationType: "hard-pick",
  elementaryModel: 3,
  makeupGain: 0.685,
  polyphony: 4,
  note: "Funk slap bass technique combining thumb bone strikes against fretboard metal and index finger popping snap",
  acousticProfile: {
    sustain: "short",
    role: "bass",
    centre: 40,
    low: 28,
    high: 60,
    pan: 0,
    trim: 1,
    space: 0.05,
    ring: 0.8
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.85,
    tension: 0.88,
    bodyResonanceVolume: 6,
    decayTimeFactor: 1.2,
    harmonicRichness: 0.92,
    fretBuzzAmount: 0.65,
    pickupBlend: 0.8,
    bodyConstruction: "solid-electric",
    excitationType: "hard-pick"
  },
  tuningAndMechanics: {
    tuningName: "EADG Standard Slap Bass",
    frets: 24,
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
    slap: {
      transientSharpness: 0.98,
      dampingFactor: 0.65,
      openToneGainDb: 3.5,
      popOctaveSnap: true
    },
    mute: {
      dampingFactor: 0.9,
      cutoffFreqHz: 900,
      decayTimeSec: 0.08
    }
  },
  techniques: {
    articulations: ["accent", "staccato", "slap", "ghost", "pop", "hammer-on", "slide"],
    techniqueMethods: [
      "thumb slap bone strike",
      "index finger pop snap",
      "left hand fret muting",
      "double thumbing"
    ],
    playingStyles: ["funk", "disco", "fusion", "pop", "rock"],
    genreTechniques: {
      funk: ["slap", "pop", "ghost", "staccato"],
      disco: ["slap", "staccato", "accent"]
    }
  }
};
