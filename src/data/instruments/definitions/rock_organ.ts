import type { InstrumentDef } from '../types';

export const rock_organ: InstrumentDef = {
  id: "rock-organ",
  name: "Rock organ",
  family: "bellows-and-keys",
  voicing: "chord",
  elementaryModel: 13,
  makeupGain: 0.417,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 58,
    low: 41,
    high: 84,
    pan: 0.28,
    trim: -3,
    space: 0.22,
    ring: 2,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.55,
    tension: 0.4,
    bodyResonanceVolume: 70,
    decayTimeFactor: 5,
    harmonicRichness: 0.82,
    articulationCapabilities: ["staccato", "accent", "swell"],
    genreAdaptable: true
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "crescendo"],
    techniqueMethods: ["velocity-shaped attack", "fingered chord voicing", "register coupling"],
    playingStyles: ["folk", "pop", "world"]
  }
};
