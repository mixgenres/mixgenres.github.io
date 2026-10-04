import type { InstrumentDef } from '../../schema/instrument-def';

export const trumpet: InstrumentDef = {
  id: "trumpet",
  name: "Bb Trumpet",
  family: "brass",
  voicing: "single",
  bodyConstruction: "brass-tube",
  excitationType: "breath",
  elementaryModel: 15,
  makeupGain: 0.8068,
  polyphony: 4,
  note: "Bb brass trumpet with lip-reed excitation, cylindrical bore shockwave steepening, flaring bell radiation, salsa mambo stabs, screams, and cup-mute colors",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 70,
    low: 54,
    high: 91,
    pan: 0.36,
    trim: -1,
    space: 0.3,
    ring: 2.5
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.92,
    tension: 0.88,
    bodyResonanceVolume: 4.5,
    decayTimeFactor: 0.9,
    harmonicRichness: 0.92,
    transientSharpness: 0.90,
    airResonanceHz: 466,
    soundboardResonanceHz: 1200,
    bodyConstruction: "brass-tube",
    excitationType: "breath"
  },
  formantProfile: {
    f1: {
      freq: 1200,
      q: 2.2,
      gain: 0.8
    },
    f2: {
      freq: 2800,
      q: 2.6,
      gain: 0.6
    },
    f3: {
      freq: 5200,
      q: 2.0,
      gain: 0.3
    },
    tongueType: "lip-slap",
    tongueFreq: 2600
  },
  tuningAndMechanics: {
    tuningName: "Bb Standard Trumpet Range",
    keyRange: {
      lowNote: "F#3",
      highNote: "G6",
      lowMidi: 54,
      highMidi: 91
    }
  },
  performanceArticulations: {
    bend: {
      maxSemitones: 2,
      speedMs: 90,
      curve: "exponential"
    },
    vibrato: {
      rateHz: 5.6,
      depthCents: 30,
      onsetDelayMs: 220
    },
    mute: {
      dampingFactor: 0.75,
      cutoffFreqHz: 1600,
      decayTimeSec: 0.2
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "growl",
      "doit",
      "fall",
      "shake",
      "cup-mute",
      "bend",
      "vibrato",
      "lip_slur"
    ],
    techniqueMethods: [
      "lip buzzing and pressure steepening",
      "double tonguing (tu-ku-tu-ku)",
      "half-valve scoops and bends",
      "guttural throat growl",
      "big band fall-offs and doit rips",
      "lip-trill shakes",
      "cup and straight mute coloring"
    ],
    playingStyles: ["salsa", "jazz", "mambo", "mariachi", "funk", "ska", "latin-jazz", "classical"],
    genreTechniques: {
      salsa: ["accent", "staccato", "fall", "shake", "doit"],
      jazz: ["legato", "staccato", "bend", "vibrato", "cup-mute", "growl", "fall"],
      mariachi: ["accent", "vibrato", "legato", "bend"],
      mambo: ["accent", "staccato", "fall", "shake"],
      funk: ["accent", "staccato", "growl", "doit"],
      classical: ["legato", "staccato", "tenuto", "lip_slur"]
    }
  },
  physicalModel: {
    model: "lip-reed",
    parameters: {
      stiffness: 0.85,
      airResonance: 0.78,
      bodyResonance: 0.88,
      nonlinearDrive: 0.75,
      breathNoise: 0.08,
      transientSharpness: 0.90
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Lip buzz excitation coupled with cylindrical tube impedance generates rich odd and even harmonics with non-linear shockwave distortion at high dynamics.",
      "Mouthpiece cup (1.2kHz) and flaring bell (2.8kHz) formants shape the authentic cutting brass brilliance.",
      "Realistic brass performance gestures include lip-trill shakes, throat growl FM, fall drops, doit rips, and half-valve scoops."
    ]
  }
};
