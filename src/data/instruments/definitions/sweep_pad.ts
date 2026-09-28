import type { InstrumentDef } from '../types';

export const sweep_pad: InstrumentDef = {
  id: "sweep-pad",
  name: "Sweep pad",
  family: "electronic",
  program: 95,
  voicing: "chord",
  elementaryModel: 9,
  makeupGain: 0.437,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "pad",
    centre: 60,
    low: 42,
    high: 84,
    pan: 0,
    trim: -7,
    space: 0.6,
    ring: 8
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.2,
    tension: 0.3,
    bodyResonanceVolume: 50,
    decayTimeFactor: 9,
    harmonicRichness: 0.78,
    articulationCapabilities: ["legato", "crescendo", "diminuendo"]
  },
  techniques: {
    articulations: ["accent", "legato", "crescendo", "diminuendo"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
