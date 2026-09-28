import type { InstrumentDef } from '../types';

export const surdo: InstrumentDef = {
  id: "surdo",
  name: "Surdo",
  family: "hand-drums",
  drum: {
    low: 41,
    mid: 41,
    high: 43
  },
  voicing: "unpitched",
  elementaryModel: 4,
  makeupGain: 0.701,
  polyphony: 8,
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0,
    trim: 0,
    space: 0.12,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.95,
    tension: 0.45,
    bodyResonanceVolume: 60,
    decayTimeFactor: 2.2,
    harmonicRichness: 0.35
  },
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
