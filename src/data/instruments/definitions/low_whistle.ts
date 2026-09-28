import type { InstrumentDef } from '../types';

export const low_whistle: InstrumentDef = {
  id: "low-whistle",
  name: "Low whistle",
  family: "winds",
  voicing: "single",
  elementaryModel: 7,
  makeupGain: 0.466,
  polyphony: 4,
  note: "Large cylindrical fipple flute pitched in D with deep, breathy, haunting Celtic tone",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 67,
    low: 48,
    high: 86,
    pan: 0.24,
    trim: -2,
    space: 0.38,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.4,
    tension: 0.55,
    bodyResonanceVolume: 1,
    decayTimeFactor: 0.55,
    harmonicRichness: 0.45
  },
  formantProfile: {
    f1: {
      freq: 520,
      q: 2.8,
      gain: 0.8
    },
    f2: {
      freq: 1280,
      q: 2.5,
      gain: 0.32
    },
    f3: {
      freq: 2750,
      q: 2,
      gain: 0.15
    },
    tongueType: "chiff",
    tongueFreq: 1900
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "vibrato", "grace", "trill"],
    techniqueMethods: [
      "piper grip finger pads",
      "breath-controlled dynamic swelling",
      "crann and cut ornamentation",
      "delicate pitch sliding"
    ],
    playingStyles: ["celtic", "irish-folk", "cinematic", "soundtrack", "ambient"],
    genreTechniques: {
      celtic: ["legato", "grace", "accent", "trill"],
      "irish-folk": ["grace", "trill", "legato", "staccato"],
      cinematic: ["legato", "tenuto", "vibrato"]
    }
  }
};
