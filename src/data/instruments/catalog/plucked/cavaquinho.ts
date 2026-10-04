import type { InstrumentDef } from '../../schema/instrument-def';

export const cavaquinho: InstrumentDef = {
  id: "cavaquinho",
  name: "Brazilian Cavaquinho",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "plectrum",
  elementaryModel: 0,
  makeupGain: 3.2271,
  polyphony: 8,
  note: "Small 4 steel-string Portuguese/Brazilian chordophone (D4-G4-B4-D5) driving fast samba palhetada rhythm and choro counterpoint",
  acousticProfile: {
    sustain: "decaying",
    role: "harmony",
    centre: 66,
    low: 55,
    high: 86,
    pan: 0.38,
    trim: 0,
    space: 0.2,
    ring: 1.4
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.78,
    tension: 0.9,
    bodyResonanceVolume: 3.5,
    decayTimeFactor: 1.4,
    harmonicRichness: 0.88,
    soundboardResonanceHz: 320,
    airResonanceHz: 160,
    excitationType: "plectrum",
    bodyConstruction: "wood-box"
  },
  tuningAndMechanics: {
    tuningName: "Brazilian Cavaquinho Standard (D-G-B-D)",
    courses: 1,
    frets: 17,
    openStrings: [
      {
        name: "D4",
        note: "D4",
        midi: 62,
        frequencyHz: 293.66
      },
      {
        name: "G4",
        note: "G4",
        midi: 67,
        frequencyHz: 392
      },
      {
        name: "B4",
        note: "B4",
        midi: 71,
        frequencyHz: 493.88
      },
      {
        name: "D5",
        note: "D5",
        midi: 74,
        frequencyHz: 587.33
      }
    ]
  },
  performanceArticulations: {
    rasgueado: {
      burstNotes: 4,
      spreadMs: 22,
      directionPattern: ["down", "up", "down", "up"],
      nailTransientSharpness: 0.96
    },
    mute: {
      dampingFactor: 0.88,
      cutoffFreqHz: 1400,
      decayTimeSec: 0.1
    }
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "palhetada", "palm-mute"],
    techniqueMethods: [
      "samba palhetada 16th strumming",
      "choro counterpoint picking",
      "left hand dampening"
    ],
    playingStyles: ["samba", "choro", "pagode", "forro", "mpb"],
    genreTechniques: {
      samba: ["palhetada", "accent", "staccato"],
      choro: ["legato", "accent", "staccato"]
    }
  }
};
