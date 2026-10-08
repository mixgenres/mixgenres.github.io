import type { InstrumentDef } from '../../schema/instrument-def';

export const harpsichord: InstrumentDef = {
  id: "harpsichord",
  name: "Harpsichord",
  family: "bellows-and-keys",
  voicing: "chord",
  
  
  polyphony: 8,
  note: "Quill-plucked string keyboard with bright, overtone-rich attack and crisp contrapuntal articulation",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 60,
    low: 41,
    high: 84,
    pan: -0.12,
    trim: -1,
    space: 0.28,
    ring: 1.2,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.8,
    tension: 0.95,
    bodyResonanceVolume: 2,
    decayTimeFactor: 1.5,
    harmonicRichness: 0.9
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "mordent", "trill", "turn"],
    techniqueMethods: [
      "quill plectrum plucking action",
      "finger articulation timing",
      "manual registration switching",
      "ornamental embellishments"
    ],
    playingStyles: ["baroque", "classical", "early-music", "chamber"],
    genreTechniques: {
      baroque: ["trill", "mordent", "staccato", "legato", "tenuto"],
      classical: ["staccato", "legato", "turn"]
    }
  }
};
