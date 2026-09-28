import type { InstrumentDef } from '../types';

export const shakuhachi: InstrumentDef = {
  id: "shakuhachi",
  name: "Shakuhachi",
  family: "winds",
  program: 77,
  octave: 12,
  voicing: "single",
  elementaryModel: 7,
  makeupGain: 0.466,
  polyphony: 4,
  note: "Japanese end-blown flute",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 69,
    low: 55,
    high: 92,
    pan: 0.26,
    trim: -2,
    space: 0.34,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.45,
    tension: 0.45,
    bodyResonanceVolume: 1.2,
    decayTimeFactor: 0.7,
    harmonicRichness: 0.45
  },
  formantProfile: {
    f1: {
      freq: 720,
      q: 4,
      gain: 0.9
    },
    f2: {
      freq: 1650,
      q: 3.2,
      gain: 0.35
    },
    f3: {
      freq: 3400,
      q: 2.5,
      gain: 0.2
    },
    tongueType: "chiff",
    tongueFreq: 2100
  },
  techniques: {
    articulations: ["accent", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["meri/kari pitch bend", "muraiki breath", "yuri vibrato"],
    playingStyles: ["japanese-traditional"],
    genreTechniques: {
      "japanese-traditional": ["portamento", "vibrato"]
    }
  }
};
