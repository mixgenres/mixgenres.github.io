import type { InstrumentDef } from '../../schema/instrument-def';

export const sampler: InstrumentDef = {
  id: "sampler",
  name: "Sampler",
  family: "electronic",
  voicing: "single",
  
  
  polyphony: 4,
  note: "sample playback; transient-preserving one-shots and looped phrases",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 60,
    low: 36,
    high: 90,
    pan: 0,
    trim: -2,
    space: 0.3,
    ring: 4
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.5,
    tension: 0.5,
    bodyResonanceVolume: 12,
    decayTimeFactor: 1.5,
    harmonicRichness: 0.75
  },
  techniques: {
    articulations: ["accent", "staccato", "legato"],
    techniqueMethods: ["sample-selection attack", "one-shot transient shaping", "looped sustain and release"],
    playingStyles: ["genre-native performance"],
    genreTechniques: {}
  }
};
