import type { InstrumentDef } from '../types';

export const pick_bass: InstrumentDef = {
  id: "pick-bass",
  name: "Pick bass",
  family: "plucked",
  program: 34,
  voicing: "bass",
  elementaryModel: 3,
  makeupGain: 0.685,
  polyphony: 4,
  acousticProfile: {
    sustain: "decaying",
    role: "bass",
    centre: 40,
    low: 28,
    high: 55,
    pan: 0,
    trim: 1,
    space: 0.05,
    ring: 1.4
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.9,
    tension: 0.68,
    bodyResonanceVolume: 7.5,
    decayTimeFactor: 3.2,
    harmonicRichness: 0.8,
    faustProfile: "electric-bass",
    articulationCapabilities: ["picked-down", "picked-up", "palm-mute", "chug"],
    genreAdaptable: true
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "pick", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
