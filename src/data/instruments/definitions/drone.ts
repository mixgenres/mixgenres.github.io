import type { InstrumentDef } from '../types';

export const drone: InstrumentDef = {
  id: "drone",
  name: "Drone texture",
  family: "electronic",
  program: 89,
  voicing: "chord",
  elementaryModel: 0,
  makeupGain: 0.438,
  polyphony: 8,
  note: "Sustained harmonic root and fifth acoustic/electronic bed with slow organic filter movement",
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
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
    materialDensity: 0.5,
    tension: 0.5,
    bodyResonanceVolume: 35,
    decayTimeFactor: 8,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["legato", "tenuto", "crescendo", "diminuendo", "accent"],
    techniqueMethods: [
      "sustained open fifth register",
      "slow lowpass filter envelope swell",
      "subtle tape wow/flutter",
      "sub-octave coupling"
    ],
    playingStyles: ["folk", "celtic", "ambient", "raga", "electronic"],
    genreTechniques: {
      folk: ["legato", "tenuto"],
      celtic: ["legato", "tenuto"],
      ambient: ["legato", "crescendo", "diminuendo"]
    }
  }
};
