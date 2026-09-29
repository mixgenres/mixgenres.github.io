import type { InstrumentDef } from '../../schema/instrument-def';

export const tambor_alegre: InstrumentDef = {
  id: "tambor-alegre",
  name: "Tambor alegre",
  family: "hand-drums",
  drum: {
    low: 64,
    mid: 62,
    high: 63
  },
  voicing: "unpitched",
  elementaryModel: 4,
  makeupGain: 1.185,
  polyphony: 8,
  note: "Colombian cumbia hand-drum",
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
    materialDensity: 0.82,
    tension: 0.75,
    bodyResonanceVolume: 16,
    decayTimeFactor: 0.8,
    harmonicRichness: 0.7
  },
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
