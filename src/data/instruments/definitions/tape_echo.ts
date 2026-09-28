import type { InstrumentDef } from '../types';

export const tape_echo: InstrumentDef = {
  id: "tape-echo",
  name: "Tape echo",
  family: "electronic",
  voicing: "unpitched",
  elementaryModel: 0,
  makeupGain: 0.432,
  polyphony: 8,
  note: "magnetic tape delay; softened repeats with wow/flutter and feedback",
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
    materialDensity: 0.45,
    tension: 0.5,
    bodyResonanceVolume: 6,
    decayTimeFactor: 2.5,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["sustain", "accent"],
    techniqueMethods: ["delay-time setting", "feedback control", "wow/flutter and saturation"],
    playingStyles: ["dub", "rockabilly", "surf", "ambient", "studio effect"],
    genreTechniques: {}
  }
};
