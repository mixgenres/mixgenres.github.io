import type { InstrumentDef } from '../../schema/instrument-def';

export const upright_bass: InstrumentDef = {
  id: "upright-bass",
  name: "Upright Double Bass",
  family: "plucked",
  voicing: "single",
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  sympatheticStrings: true,
  
  
  polyphony: 4,
  note: "Acoustic double bass with estimated plucked/bowed source and body responses; separate tango arrastre, strappata bow-bounce, tambor damped pizzicato, lija rasp, and golpe-caja body contact",
  acousticProfile: {
    sustain: "decaying",
    role: "bass",
    centre: 40,
    low: 28,
    high: 60,
    pan: 0,
    trim: 1,
    space: 0.1,
    ring: 1.6
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.82,
    tension: 0.76,
    bodyResonanceVolume: 220,
    decayTimeFactor: 2.8,
    harmonicRichness: 0.80,
    soundboardResonanceHz: 65,
    airResonanceHz: 42,
    transientSharpness: 0.88,
    sympatheticStrings: true,
    bodyConstruction: "wood-box",
    excitationType: "fingerpad"
  },
  tuningAndMechanics: {
    tuningName: "EADG Standard Double Bass Tuning (A440 Equal Temperament)",
    courses: 1,
    frets: 0,
    keyRange: {
      lowNote: "E1",
      highNote: "C4",
      lowMidi: 28,
      highMidi: 60
    },
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
        frequencyHz: 55.0
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
        frequencyHz: 98.0
      }
    ]
  },
  performanceArticulations: {
    arrastre: {
      preBeatOffsetMs: -60,
      // Approach pitches belong to the written passage, not a universal scoop.
      pitchDragSemitones: 0,
      pressureRamp: true,
      velocityGrowth: 1.4
    },
    pizzicato: {
      damping: 0.45,
      pluckHardness: 0.7
    },
    bend: {
      maxSemitones: 2,
      speedMs: 120,
      curve: "s-curve"
    },
    mute: {
      dampingFactor: 0.88,
      cutoffFreqHz: 420,
      decayTimeSec: 0.18
    },
    vibrato: {
      rateHz: 4.8,
      depthCents: 18,
      onsetDelayMs: 180
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "ghost",
      "pizzicato",
      "harmonic",
      "arco",
      "arrastre",
      "strappata",
      "lija",
      "tambor",
      "chicharra",
      "golpe-caja",
      "slap"
    ],
    techniqueMethods: [
      "fleshy fingerpad pizzicato walk",
      "arrastre bow-pressure swell through authored approach notes into an accent",
      "strappata bouncing bow strikes with left-hand fingerboard percussion",
      "lija sandpaper bow scraping with high downward pressure",
      "tambor damped pizzicato with string/finger contact and indefinite pitch",
      "golpe-caja palm or knuckle strike on the instrument body",
      "arco cantabile with rich wood and Helmholtz air cavity coupling"
    ],
    playingStyles: ["tango", "jazz", "flamenco", "classical", "folk", "latin"],
    genreTechniques: {
      tango: ["arrastre", "strappata", "lija", "tambor", "chicharra", "pizzicato", "arco", "staccato", "accent"],
      jazz: ["pizzicato", "accent", "ghost", "legato"],
      classical: ["arco", "pizzicato", "legato", "tenuto"],
      flamenco: ["pizzicato", "slap", "tambor", "accent"]
    }
  },
  physicalModel: {
    model: "plucked-string",
    parameters: {
      bodyResonance: 0.88,
      airResonance: 0.92,
      transientSharpness: 0.85,
      damping: 0.45
    },
    
    
  }
};
