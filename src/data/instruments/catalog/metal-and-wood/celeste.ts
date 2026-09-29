import type { InstrumentDef } from '../../schema/instrument-def';

export const celeste: InstrumentDef = {
  id: "celeste",
  name: "Celesta",
  family: "metal-and-wood",
  voicing: "chord",
  elementaryModel: 8,
  makeupGain: 1.000,
  polyphony: 8,
  note: "Keyboard struck metal-plate idiophone with wooden box resonators sounding delicate bell-like tones",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 79,
    low: 65,
    high: 96,
    pan: 0.26,
    trim: -5,
    space: 0.45,
    ring: 3
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.6,
    tension: 0.8,
    bodyResonanceVolume: 2,
    decayTimeFactor: 2,
    harmonicRichness: 0.6
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "portato"],
    techniqueMethods: [
      "felt hammer strike on steel plates",
      "wooden resonator resonance",
      "damper pedal release",
      "delicate arpeggiation"
    ],
    playingStyles: ["orchestral", "cinematic", "chamber", "fairytale", "ambient"],
    genreTechniques: {
      orchestral: ["legato", "tenuto", "staccato", "accent"],
      cinematic: ["legato", "tenuto"]
    }
  }
};
