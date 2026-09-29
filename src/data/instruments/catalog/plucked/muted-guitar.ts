import type { InstrumentDef } from '../../schema/instrument-def';

export const muted_guitar: InstrumentDef = {
  id: "muted-guitar",
  name: "Muted guitar",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "solid-electric",
  excitationType: "hard-pick",
  elementaryModel: 23,
  makeupGain: 30.000,
  polyphony: 8,
  acousticProfile: {
    sustain: "short",
    role: "comp",
    centre: 52,
    low: 40,
    high: 72,
    pan: 0.36,
    trim: 0,
    space: 0.1,
    ring: 0.5
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.75,
    tension: 0.7,
    bodyResonanceVolume: 4,
    decayTimeFactor: 0.5,
    harmonicRichness: 0.55,
    courses: 1,
    bodyConstruction: "solid-electric",
    excitationType: "hard-pick"
  },
  techniques: {
    articulations: ["staccato", "ghost", "palm-mute", "accent"],
    techniqueMethods: ["dead-note strum", "muted upstroke", "chop"],
    playingStyles: ["ska", "funk"],
    genreTechniques: {
      ska: ["staccato", "ghost"],
      funk: ["staccato", "ghost"]
    }
  }
};
