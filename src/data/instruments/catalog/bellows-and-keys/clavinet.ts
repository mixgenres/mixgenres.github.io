import type { InstrumentDef } from '../../schema/instrument-def';

export const clavinet: InstrumentDef = {
  id: "clavinet",
  name: "Clavinet",
  family: "bellows-and-keys",
  voicing: "chord",
  elementaryModel: 19,
  makeupGain: 8.545,
  polyphony: 8,
  acousticProfile: {
    sustain: "short",
    role: "comp",
    centre: 55,
    low: 40,
    high: 79,
    pan: 0.3,
    trim: -1,
    space: 0.14,
    ring: 0.6,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.9,
    tension: 0.9,
    bodyResonanceVolume: 1,
    decayTimeFactor: 0.8,
    harmonicRichness: 0.95
  },
  techniques: {
    articulations: ["staccato", "accent", "ghost", "palm-mute"],
    techniqueMethods: ["finger mute", "pick-like attack", "percussive chord"],
    playingStyles: ["funk"],
    genreTechniques: {
      funk: ["staccato", "ghost", "accent"]
    }
  }
};
