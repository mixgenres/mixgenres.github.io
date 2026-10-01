import type { InstrumentDef } from '../../schema/instrument-def';

export const synth: InstrumentDef = {
  id: "synth",
  name: "Synth",
  family: "electronic",
  voicing: "single",
  elementaryModel: 9,
  makeupGain: 14.757,
  polyphony: 8,
  note: "Lead synth voice",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
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
    bodyResonanceVolume: 10,
    decayTimeFactor: 2,
    harmonicRichness: 0.9
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "bend"],
    techniqueMethods: ["mono lead", "filter sweep", "pitch glide", "velocity envelope"],
    playingStyles: ["electronic"],
    genreTechniques: {
      electronic: ["staccato", "portamento"]
    }
  }
};
