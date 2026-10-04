import type { InstrumentDef } from '../../schema/instrument-def';

export const bass: InstrumentDef = {
  id: "bass",
  name: "Bass",
  family: "plucked",
  voicing: "bass",
  bodyConstruction: "solid-electric",
  excitationType: "fingerpad",
  elementaryModel: 3,
  makeupGain: 3.9043,
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
    articulations: ["accent", "staccato", "legato", "ghost-note", "dead-note", "palm-mute", "slap", "thumb", "pop", "pick", "slide", "hammer-on", "pull-off", "harmonic"],
    techniqueMethods: ["fingerstyle", "pick", "slap", "thumb", "pop", "dead note", "ghost note", "hammer-on", "pull-off", "slide", "harmonic"],
    playingStyles: ["funk", "rock", "pop", "rnb", "salsa", "reggae", "jazz", "country"],
    genreTechniques: {
    funk: ["staccato", "ghost", "accent", "slap", "thumb", "pop", "ghost-note"],
      rock: ["accent", "legato", "staccato"],
      country: ["pick", "staccato"],
      reggae: ["legato", "staccato"]
    }
  },
  physicalTechniques: ["fingerstyle", "pick", "slap", "thumb", "pop", "dead-note", "ghost-note", "hammer-on", "pull-off", "slide", "harmonic", "staccato", "legato", "accent", "ghost"],
  variants: [
    { id: "fretted-electric", name: "Fretted electric", bodyConstruction: "solid-electric", excitationType: "fingerpad", courses: 4 },
    { id: "fretless-electric", name: "Fretless electric", bodyConstruction: "solid-electric", excitationType: "fingerpad", courses: 4, techniqueAdditions: ["continuous-slide", "portamento"] },
    { id: "acoustic-bass-guitar", name: "Acoustic bass guitar", bodyConstruction: "wood-box", excitationType: "fingerpad", courses: 4 }
  ]
};
