import type { InstrumentDef } from '../types';

export const zabumba: InstrumentDef = {
  id: "zabumba",
  name: "Zabumba",
  family: "hand-drums",
  drum: {
    low: 41,
    mid: 43,
    high: 45
  },
  voicing: "unpitched",
  elementaryModel: 4,
  makeupGain: 0.817,
  polyphony: 8,
  note: "Brazilian folk bass drum",
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
    materialDensity: 0.9,
    tension: 0.6,
    bodyResonanceVolume: 25,
    decayTimeFactor: 1.2,
    harmonicRichness: 0.5
  },
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
