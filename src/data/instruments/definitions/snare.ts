import type { InstrumentDef } from '../types';

export const snare: InstrumentDef = {
  id: "snare",
  name: "Snare",
  family: "kit",
  drum: {
    low: 37,
    mid: 38,
    high: 40
  },
  voicing: "unpitched",
  elementaryModel: 4,
  makeupGain: 3.960,
  polyphony: 12,
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.05,
    trim: 1,
    space: 0.18,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.85,
    tension: 0.9,
    bodyResonanceVolume: 3,
    decayTimeFactor: 0.3,
    harmonicRichness: 0.75
  },
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll", "brushed"],
    techniqueMethods: [
      "kick/snare/hihat orchestration",
      "ghost note",
      "rim/edge",
      "brush sweep",
      "roll"
    ],
    playingStyles: ["rock", "pop", "jazz"]
  }
};
