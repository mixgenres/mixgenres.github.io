import type { InstrumentDef } from '../types';

export const synth_strings: InstrumentDef = {
  id: "synth-strings",
  name: "Synth strings",
  family: "electronic",
  voicing: "chord",
  elementaryModel: 6,
  makeupGain: 0.457,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "pad",
    centre: 64,
    low: 45,
    high: 86,
    pan: -0.16,
    trim: -5,
    space: 0.5,
    ring: 6
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.3,
    tension: 0.45,
    bodyResonanceVolume: 25,
    decayTimeFactor: 7,
    harmonicRichness: 0.62,
    articulationCapabilities: ["legato", "tremolo", "crescendo"]
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo", "crescendo"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
