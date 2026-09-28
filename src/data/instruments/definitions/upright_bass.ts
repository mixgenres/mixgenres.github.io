import type { InstrumentDef } from '../types';

export const upright_bass: InstrumentDef = {
  id: "upright-bass",
  name: "Upright Double Bass",
  family: "plucked",
  program: 32,
  voicing: "single",
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  sympatheticStrings: true,
  elementaryModel: 3,
  makeupGain: 0.406,
  polyphony: 4,
  note: "Acoustic 3/4 spruce/maple double bass delivering deep woody fundamental resonance, expressive pizzicato, rich arco bowing, and dedicated Tango techniques (arrastre drag, strappata fingerboard snap, lija sandpaper bow scrape, and tambor wood hits)",
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
      pitchDragSemitones: -3,
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
      "slap"
    ],
    techniqueMethods: [
      "fleshy fingerpad pizzicato walk",
      "arrastre pre-beat glissando drag swelling into downbeat",
      "strappata violent string slap against ebony fingerboard",
      "lija sandpaper bow scraping with high downward pressure",
      "tambor lower bout wooden body thump",
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
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "42Hz Helmholtz internal air cavity resonance paired with 65Hz main carved spruce soundboard mode.",
      "Dual excitation pipeline: Karplus-Strong waveguide for pizzicato/strappata and stick-slip friction saturator for arco/lija.",
      "Full Tango extended techniques including arrastre upward drag, strappata fingerboard slap, and lija bow scraping."
    ]
  }
};
