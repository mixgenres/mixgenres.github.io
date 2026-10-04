import type { InstrumentDef } from '../../schema/instrument-def';

export const vihuela: InstrumentDef = {
  id: "vihuela",
  name: "Vihuela",
  family: "plucked",
  octave: 12,
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "nail",
  elementaryModel: 0,
  makeupGain: 4.1102,
  polyphony: 8,
  note: "Mexican son guitar-family",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 57,
    low: 40,
    high: 84,
    pan: 0.18,
    trim: 0,
    space: 0.24,
    ring: 2.5
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.55,
    tension: 0.7,
    bodyResonanceVolume: 7,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.7,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "fingerpad"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
