import type { InstrumentDef } from '../../schema/instrument-def';

export const celtic_harp: InstrumentDef = {
  id: "celtic-harp",
  name: "Celtic harp",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  elementaryModel: 0,
  makeupGain: 5.500,
  polyphony: 8,
  note: "Lever harp with nylon or wire strings and warm acoustic resonance for traditional airs and reels",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 68,
    low: 40,
    high: 96,
    pan: -0.28,
    trim: -2,
    space: 0.48,
    ring: 4
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.55,
    tension: 0.75,
    bodyResonanceVolume: 30,
    decayTimeFactor: 3.2,
    harmonicRichness: 0.6
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "harmonic", "trill", "grace"],
    techniqueMethods: [
      "finger pad plucking",
      "wire string fingernail ringing",
      "lever pitch shifts",
      "interlocking two-hand ornaments"
    ],
    playingStyles: ["celtic", "irish-folk", "scottish-folk", "renaissance", "ambient"],
    genreTechniques: {
      celtic: ["legato", "grace", "accent", "tenuto"],
      "irish-folk": ["legato", "grace", "trill", "staccato"],
      ambient: ["legato", "tenuto", "harmonic"]
    }
  }
};
