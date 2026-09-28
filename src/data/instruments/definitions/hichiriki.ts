import type { InstrumentDef } from '../types';

export const hichiriki: InstrumentDef = {
  id: "hichiriki",
  name: "Hichiriki",
  family: "winds",
  octave: 12,
  voicing: "single",
  elementaryModel: 7,
  makeupGain: 0.466,
  polyphony: 4,
  note: "Short double-reed bamboo flute of Japanese Gagaku with piercing volume and heavy microtonal enbai pitch bends",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 68,
    low: 52,
    high: 88,
    pan: 0.18,
    trim: -3,
    space: 0.42,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.8,
    tension: 0.9,
    bodyResonanceVolume: 0.6,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.92
  },
  formantProfile: {
    f1: {
      freq: 1350,
      q: 5.4,
      gain: 0.9
    },
    f2: {
      freq: 2820,
      q: 4.8,
      gain: 0.65
    },
    f3: {
      freq: 4950,
      q: 3.8,
      gain: 0.35
    },
    tongueType: "reed-tongue",
    tongueFreq: 3200
  },
  techniques: {
    articulations: ["accent", "legato", "bend", "vibrato", "portamento", "tenuto"],
    techniqueMethods: [
      "enbai lip-pressure microtonal bending",
      "large double-reed embouchure attack",
      "ornamental portamento glides",
      "ceremonial breath support"
    ],
    playingStyles: ["gagaku", "japanese-classical", "ceremonial"],
    genreTechniques: {
      gagaku: ["bend", "portamento", "vibrato", "tenuto", "accent"],
      "japanese-classical": ["legato", "bend", "vibrato"]
    }
  }
};
