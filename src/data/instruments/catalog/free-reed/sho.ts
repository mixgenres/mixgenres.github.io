import type { InstrumentDef } from '../../schema/instrument-def';

export const sho: InstrumentDef = {
  id: "sho",
  name: "Sho",
  family: "free-reed",
  
  voicing: "chord",
  
  
  polyphony: 8,
  note: "Sustained Japanese reed-organ cluster",
  acousticProfile: {
    sustain: "sustained",
    role: "pad",
    centre: 60,
    low: 40,
    high: 82,
    pan: 0,
    trim: -7,
    space: 0.55,
    ring: 8,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "breath_free_reed",
    materialDensity: 0.6,
    tension: 0.6,
    bodyResonanceVolume: 1,
    decayTimeFactor: 1.5,
    harmonicRichness: 0.7
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto"],
    techniqueMethods: ["velocity-shaped attack", "fingered chord voicing", "register coupling"],
    playingStyles: ["folk", "pop", "world"]
  }
};
