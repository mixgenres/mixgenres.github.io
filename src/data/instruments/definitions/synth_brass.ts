import type { InstrumentDef } from '../types';

export const synth_brass: InstrumentDef = {
  id: "synth-brass",
  name: "Synth brass",
  family: "electronic",
  program: 62,
  voicing: "chord",
  elementaryModel: 15,
  makeupGain: 0.551,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 62,
    low: 45,
    high: 84,
    pan: 0.18,
    trim: -3,
    space: 0.26,
    ring: 4
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.45,
    tension: 0.7,
    bodyResonanceVolume: 9,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.88,
    articulationCapabilities: ["staccato", "accent", "swell"],
    genreAdaptable: true
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide", "crescendo"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
