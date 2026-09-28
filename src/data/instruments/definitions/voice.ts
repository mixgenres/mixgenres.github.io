import type { InstrumentDef } from '../types';

export const voice: InstrumentDef = {
  id: "voice",
  name: "Synth voice",
  family: "voice",
  program: 54,
  octave: 12,
  voicing: "single",
  elementaryModel: 12,
  makeupGain: 0.455,
  polyphony: 4,
  note: "Synth voice tone",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 64,
    low: 52,
    high: 81,
    pan: 0,
    trim: -2,
    space: 0.42,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.5,
    tension: 0.6,
    bodyResonanceVolume: 8,
    decayTimeFactor: 1.5,
    harmonicRichness: 0.6
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portato", "vibrato", "scoop", "fall"],
    techniqueMethods: ["breath onset", "legato phrase", "vowel shaping", "chest/head register"],
    playingStyles: ["soul", "pop"],
    genreTechniques: {
      soul: ["legato", "vibrato"],
      pop: ["staccato", "accent"]
    }
  }
};
