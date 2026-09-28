import type { InstrumentDef } from '../types';

export const soprano_sax: InstrumentDef = {
  id: "soprano-sax",
  name: "Soprano sax",
  family: "winds",
  program: 64,
  octave: 12,
  voicing: "single",
  elementaryModel: 16,
  makeupGain: 0.411,
  polyphony: 4,
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 72,
    low: 58,
    high: 91,
    pan: 0.3,
    trim: -2,
    space: 0.32,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.85,
    tension: 0.8,
    bodyResonanceVolume: 2,
    decayTimeFactor: 0.6,
    harmonicRichness: 0.75
  },
  formantProfile: {
    f1: {
      freq: 1050,
      q: 2.2,
      gain: 0.75
    },
    f2: {
      freq: 2700,
      q: 2,
      gain: 0.55
    },
    f3: {
      freq: 4800,
      q: 1.8,
      gain: 0.25
    },
    tongueType: "reed-tongue",
    tongueFreq: 2800
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "fall", "doit"],
    techniqueMethods: ["tongue", "subtone", "growl", "bend"],
    playingStyles: ["jazz"],
    genreTechniques: {
      jazz: ["fall", "vibrato", "accent"]
    }
  }
};
