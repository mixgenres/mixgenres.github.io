import type { InstrumentDef } from '../../schema/instrument-def';

export const overdrive_guitar: InstrumentDef = {
  id: "overdrive-guitar",
  name: "Overdriven guitar",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "solid-electric",
  excitationType: "hard-pick",
  elementaryModel: 25,
  makeupGain: 6.443,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 52,
    low: 38,
    high: 76,
    pan: -0.42,
    trim: -3,
    space: 0.18,
    ring: 2.5
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.92,
    tension: 0.82,
    bodyResonanceVolume: 5,
    decayTimeFactor: 4.4,
    harmonicRichness: 0.92,
    courses: 1,
    bodyConstruction: "solid-electric",
    excitationType: "hard-pick"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
