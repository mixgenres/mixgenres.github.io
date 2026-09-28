import type { InstrumentDef } from '../types';

export const distortion_guitar: InstrumentDef = {
  id: "distortion-guitar",
  name: "Distortion guitar",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "solid-electric",
  excitationType: "hard-pick",
  elementaryModel: 24,
  makeupGain: 2.994,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 50,
    low: 38,
    high: 74,
    pan: 0.42,
    trim: -3,
    space: 0.16,
    ring: 2.5
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.95,
    tension: 0.85,
    bodyResonanceVolume: 5,
    decayTimeFactor: 5,
    harmonicRichness: 0.98,
    courses: 1,
    bodyConstruction: "solid-electric",
    excitationType: "hard-pick"
  },
  techniques: {
    articulations: ["accent", "staccato", "palm-mute", "harmonic", "bend"],
    techniqueMethods: ["down-picking", "tight mute", "alternate picking"],
    playingStyles: ["metal", "rock"],
    genreTechniques: {
      metal: ["palm-mute", "staccato", "accent"],
      rock: ["accent", "palm-mute"]
    }
  }
};
