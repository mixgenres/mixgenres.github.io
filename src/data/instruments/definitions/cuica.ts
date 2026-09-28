import type { InstrumentDef } from '../types';

export const cuica: InstrumentDef = {
  id: "cuica",
  name: "Cuíca",
  family: "hand-drums",
  drum: {
    low: 53,
    mid: 54,
    high: 55
  },
  voicing: "unpitched",
  elementaryModel: 0,
  makeupGain: 1.771,
  polyphony: 8,
  note: "Brazilian friction drum; internal bamboo cane rubbed with moist cloth producing singing, expressive pitch glissandi",
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
    bodyResonanceVolume: 5,
    decayTimeFactor: 0.7,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "roll", "open", "low-tone"],
    techniqueMethods: [
      "bamboo stick friction rubbing",
      "thumb membrane pitch-bending pressure",
      "high-pitched laughing squeak",
      "damped low percussive pop"
    ],
    playingStyles: ["samba", "batucada", "bossa", "pagode", "mpb"],
    genreTechniques: {
      samba: ["accent", "ghost", "open", "low-tone"],
      batucada: ["accent", "roll", "open"],
      bossa: ["ghost", "staccato"]
    }
  }
};
