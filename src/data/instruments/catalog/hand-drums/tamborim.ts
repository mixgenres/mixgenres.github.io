import type { InstrumentDef } from '../../schema/instrument-def';

export const tamborim: InstrumentDef = {
  id: "tamborim",
  name: "Tamborim",
  family: "hand-drums",
  drum: {
    low: 69,
    mid: 69,
    high: 54
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "High Brazilian drum punctuation",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.34,
    trim: -4,
    space: 0.12,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.9,
    tension: 0.98,
    bodyResonanceVolume: 2,
    decayTimeFactor: 0.3,
    harmonicRichness: 0.9
  },
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
