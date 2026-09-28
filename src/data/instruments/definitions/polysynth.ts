import type { InstrumentDef } from '../types';

export const polysynth: InstrumentDef = {
  id: "polysynth",
  name: "Polysynth",
  family: "electronic",
  program: 90,
  voicing: "chord",
  elementaryModel: 9,
  makeupGain: 0.548,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 62,
    low: 45,
    high: 86,
    pan: 0.14,
    trim: -4,
    space: 0.38,
    ring: 3
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.3,
    tension: 0.4,
    bodyResonanceVolume: 25,
    decayTimeFactor: 4,
    harmonicRichness: 0.88,
    articulationCapabilities: ["staccato", "legato", "portamento"]
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
