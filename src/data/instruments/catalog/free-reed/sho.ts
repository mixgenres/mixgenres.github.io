import type { InstrumentDef } from '../../schema/instrument-def';

export const sho: InstrumentDef = {
  id: "sho",
  name: "Sho",
  family: "free-reed",
  freeReedSynthesis: { fundamentalGain: 0.46, upperPartialGain: 0.20, upperPartialRatio: 2, breathNoiseCutoffHz: 1800, transientClickGain: 0.025, attackSeconds: 0.045, bendDepth: 0.035, chamberResonances: [{ frequencyHz: 900, q: 4.5, gain: 0.20 }, { frequencyHz: 1800, q: 3.5, gain: 0.12 }] },
  voicing: "chord",
  elementaryModel: 10,
  makeupGain: 0.457,
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
