import type { InstrumentDef } from '../types';

export const tambora: InstrumentDef = {
  id: "tambora",
  name: "Tambora",
  family: "hand-drums",
  drum: {
    low: 36,
    mid: 38,
    high: 40
  },
  voicing: "unpitched",
  elementaryModel: 4,
  makeupGain: 0.853,
  polyphony: 8,
  note: "Colombian cumbia drum",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.3,
    trim: -1,
    space: 0.18,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.88,
    tension: 0.7,
    bodyResonanceVolume: 28,
    decayTimeFactor: 1,
    harmonicRichness: 0.65
  },
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
