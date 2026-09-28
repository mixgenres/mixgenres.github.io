import type { InstrumentDef } from '../types';

export const orchestral_harp: InstrumentDef = {
  id: "orchestral-harp",
  name: "Orchestral harp",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 8,
  note: "Concert grand pedal harp with expansive resonant spruce soundboard and sweeping glissandi",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 62,
    low: 36,
    high: 88,
    pan: -0.32,
    trim: 0,
    space: 0.45,
    ring: 4
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.5,
    tension: 0.7,
    bodyResonanceVolume: 55,
    decayTimeFactor: 4.2,
    harmonicRichness: 0.65
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "harmonic",
      "tremolo",
      "crescendo",
      "diminuendo"
    ],
    techniqueMethods: [
      "finger pad pluck (no pinky)",
      "pedal tuning chromatic action",
      "fluid sweeping glissando",
      "bisbigliando whispering tremolo",
      "étouffé palm damping"
    ],
    playingStyles: ["orchestral", "cinematic", "classical", "impressionist", "folk"],
    genreTechniques: {
      orchestral: ["legato", "tenuto", "harmonic", "accent", "crescendo"],
      cinematic: ["legato", "tenuto", "harmonic", "diminuendo"],
      classical: ["legato", "staccato", "tenuto"]
    }
  }
};
