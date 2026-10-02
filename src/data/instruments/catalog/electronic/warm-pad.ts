import type { InstrumentDef } from '../../schema/instrument-def';

export const warm_pad: InstrumentDef = {
  id: "warm-pad",
  name: "Warm pad",
  family: "electronic",
  voicing: "chord",
  elementaryModel: 9,
  makeupGain: 0.548,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "pad",
    centre: 60,
    low: 40,
    high: 84,
    pan: 0,
    trim: -6,
    space: 0.55,
    ring: 8
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.25,
    tension: 0.35,
    bodyResonanceVolume: 30,
    decayTimeFactor: 8,
    harmonicRichness: 0.55,
    articulationCapabilities: ["legato", "crescendo", "diminuendo"]
  },
  techniques: {
    articulations: ["accent", "legato", "crescendo", "diminuendo"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
