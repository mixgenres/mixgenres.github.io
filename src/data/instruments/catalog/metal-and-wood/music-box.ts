import type { InstrumentDef } from '../../schema/instrument-def';

export const music_box: InstrumentDef = {
  id: "music-box",
  name: "Music box",
  family: "metal-and-wood",
  voicing: "single",
  elementaryModel: 8,
  makeupGain: 1.273,
  polyphony: 4,
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 84,
    low: 60,
    high: 96,
    pan: 0.3,
    trim: -6,
    space: 0.45,
    ring: 3
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.95,
    tension: 0.9,
    bodyResonanceVolume: 0.1,
    decayTimeFactor: 1.5,
    harmonicRichness: 0.5
  },
  techniques: {
    articulations: ["accent", "staccato", "legato"],
    techniqueMethods: ["pin-pluck transient", "mechanism-limited note sustain", "register-sensitive phrasing"],
    playingStyles: ["music-box", "folk", "cinematic", "world"]
  }
};
