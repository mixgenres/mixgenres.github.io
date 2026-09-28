import type { InstrumentDef } from '../types';

export const sub_bass: InstrumentDef = {
  id: "sub-bass",
  name: "Sub bass",
  family: "electronic",
  program: 38,
  voicing: "bass",
  elementaryModel: 3,
  makeupGain: 0.685,
  polyphony: 4,
  note: "Felt more than heard",
  acousticProfile: {
    sustain: "sustained",
    role: "bass",
    centre: 33,
    low: 24,
    high: 48,
    pan: 0,
    trim: 2,
    space: 0.02,
    ring: 3
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.2,
    tension: 0.3,
    bodyResonanceVolume: 50,
    decayTimeFactor: 3,
    harmonicRichness: 0.2
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
