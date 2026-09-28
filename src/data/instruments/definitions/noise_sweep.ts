import type { InstrumentDef } from '../types';

export const noise_sweep: InstrumentDef = {
  id: "noise-sweep",
  name: "Noise sweep",
  family: "electronic",
  voicing: "single",
  elementaryModel: 9,
  makeupGain: 0.548,
  polyphony: 4,
  note: "Build and riser sweep",
  acousticProfile: {
    sustain: "sustained",
    role: "effect",
    centre: 60,
    low: 36,
    high: 90,
    pan: 0,
    trim: -2,
    space: 0.3,
    ring: 4
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.2,
    tension: 0.2,
    bodyResonanceVolume: 20,
    decayTimeFactor: 4,
    harmonicRichness: 0.95
  },
  techniques: {
    articulations: ["legato", "crescendo", "diminuendo", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
