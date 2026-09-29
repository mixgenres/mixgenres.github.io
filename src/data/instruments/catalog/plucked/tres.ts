import type { InstrumentDef } from '../../schema/instrument-def';

export const tres: InstrumentDef = {
  id: "tres",
  name: "Cuban Tres",
  family: "plucked",
  voicing: "chord",
  courses: 3,
  bodyConstruction: "wood-box",
  excitationType: "plectrum",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 8,
  note: "Cuban 3 double-course guitar (G4/G3 octave, C4/C4 unison, E4/E3 octave) creating metallic biting guajeos",
  acousticProfile: {
    sustain: "decaying",
    role: "harmony",
    centre: 64,
    low: 52,
    high: 84,
    pan: 0.36,
    trim: 0,
    space: 0.22,
    ring: 1.6
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.72,
    tension: 0.85,
    bodyResonanceVolume: 9,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.8,
    courses: 3,
    soundboardResonanceHz: 210,
    airResonanceHz: 110,
    excitationType: "plectrum",
    bodyConstruction: "wood-box"
  },
  tuningAndMechanics: {
    tuningName: "C Major Cuban Tres Tuning (G-C-E)",
    courses: 3,
    frets: 19,
    openStrings: [
      {
        name: "3rd Course (Low G)",
        note: "G3/G4",
        midi: 55,
        frequencyHz: 196
      },
      {
        name: "2nd Course (Mid C)",
        note: "C4/C4",
        midi: 60,
        frequencyHz: 261.63
      },
      {
        name: "1st Course (High E)",
        note: "E3/E4",
        midi: 64,
        frequencyHz: 329.63
      }
    ]
  },
  performanceArticulations: {
    rasgueado: {
      burstNotes: 3,
      spreadMs: 20,
      directionPattern: ["down", "up", "down"],
      nailTransientSharpness: 0.95
    },
    golpe: {
      bodyTapPitchHz: 220,
      transientDecayMs: 30
    }
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "repique", "guajeo", "martillo"],
    techniqueMethods: ["pick guajeo ostinato", "repique fast triplet strum", "martillo thumb accent"],
    playingStyles: ["son-cubano", "salsa", "changui", "latin-jazz"],
    genreTechniques: {
      "son-cubano": ["guajeo", "repique", "accent", "staccato"],
      salsa: ["guajeo", "accent", "staccato"]
    }
  }
};
