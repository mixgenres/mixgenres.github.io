import type { InstrumentDef } from '../../schema/instrument-def';

export const paigu: InstrumentDef = {
  id: "paigu",
  name: "Paigu drums",
  family: "hand-drums",
  drum: {
    low: 41,
    mid: 43,
    high: 45
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Chinese tuned barrel drums",
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
    materialDensity: 0.8,
    tension: 0.8,
    bodyResonanceVolume: 10,
    decayTimeFactor: 0.7,
    harmonicRichness: 0.6
  },
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["Chinese traditional", "Chinese opera", "Chinese percussion ensemble"]
  }
};
