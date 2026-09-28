import type { InstrumentDef } from '../types';

export const french_horn: InstrumentDef = {
  id: "french-horn",
  name: "French horn",
  family: "brass",
  program: 60,
  voicing: "single",
  elementaryModel: 15,
  makeupGain: 0.399,
  polyphony: 4,
  note: "Coiled brass instrument with wide bell producing noble, heroic fanfare and warm, velvety choir blend",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 60,
    low: 41,
    high: 79,
    pan: -0.3,
    trim: -2,
    space: 0.4,
    ring: 2.5
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.85,
    tension: 0.65,
    bodyResonanceVolume: 12,
    decayTimeFactor: 1.1,
    harmonicRichness: 0.7
  },
  formantProfile: {
    f1: {
      freq: 470,
      q: 2.4,
      gain: 0.85
    },
    f2: {
      freq: 1080,
      q: 2.6,
      gain: 0.45
    },
    f3: {
      freq: 2050,
      q: 2,
      gain: 0.2
    },
    tongueType: "lip-slap",
    tongueFreq: 1200
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "marcato", "sforzando", "portato"],
    techniqueMethods: [
      "right-hand bell position muting",
      "cuivré brassy edge overblowing",
      "smooth lip slur legato",
      "heroic stopped horn attack"
    ],
    playingStyles: ["orchestral", "cinematic", "chamber", "soundtrack"],
    genreTechniques: {
      orchestral: ["legato", "tenuto", "accent", "sforzando"],
      cinematic: ["legato", "marcato", "sforzando", "tenuto"]
    }
  }
};
