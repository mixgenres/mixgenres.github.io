import type { InstrumentDef } from '../../schema/instrument-def';

export const pizz_strings: InstrumentDef = {
  id: "pizz-strings",
  name: "Pizzicato strings",
  family: "plucked-string",
  voicing: "chord",
  elementaryModel: 6,
  makeupGain: 5.477,
  polyphony: 8,
  acousticProfile: {
    sustain: "short",
    role: "comp",
    centre: 62,
    low: 48,
    high: 88,
    pan: -0.26,
    trim: -3,
    space: 0.3,
    ring: 0.6,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "plucked_resonance",
    materialDensity: 0.5,
    tension: 0.7,
    bodyResonanceVolume: 45,
    decayTimeFactor: 0.9,
    harmonicRichness: 0.65
  },
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["orchestral", "cinematic", "pop"]
  }
};
