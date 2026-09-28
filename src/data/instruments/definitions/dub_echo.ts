import type { InstrumentDef } from '../types';

export const dub_echo: InstrumentDef = {
  id: "dub-echo",
  name: "Dub echo throw",
  family: "electronic",
  program: 120,
  voicing: "single",
  elementaryModel: 9,
  makeupGain: 0.548,
  polyphony: 4,
  note: "Single transient audio throw fed into high-feedback tape delay with resonant filter sweeps",
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
    bodyResonanceVolume: 35,
    decayTimeFactor: 6,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "staccato", "tenuto", "crescendo", "diminuendo"],
    techniqueMethods: [
      "auxiliary dub throw burst",
      "high-resonance delay feedback",
      "variable tape speed pitch drop",
      "spring reverb splash coupling"
    ],
    playingStyles: ["dub", "reggae", "dubstep", "ambient", "sound-system"],
    genreTechniques: {
      dub: ["accent", "tenuto", "crescendo", "diminuendo"],
      reggae: ["accent", "staccato", "tenuto"]
    }
  }
};
