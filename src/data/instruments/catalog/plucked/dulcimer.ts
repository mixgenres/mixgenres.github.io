import type { InstrumentDef } from '../../schema/instrument-def';

export const dulcimer: InstrumentDef = {
  id: "dulcimer",
  name: "Hammered dulcimer",
  family: "plucked",
  voicing: "single",
  courses: 2,
  bodyConstruction: "board",
  excitationType: "hammer",
  elementaryModel: 0,
  makeupGain: 1.6971,
  polyphony: 4,
  note: "Trapezoidal multi-string zither struck with lightweight wooden hammers producing bright crystalline cascading tones",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 67,
    low: 40,
    high: 84,
    pan: 0.18,
    trim: -3,
    space: 0.35,
    ring: 2.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.7,
    tension: 0.8,
    bodyResonanceVolume: 5,
    decayTimeFactor: 2.5,
    harmonicRichness: 0.7,
    courses: 2,
    bodyConstruction: "board",
    excitationType: "hammer"
  },
  techniques: {
    articulations: ["accent", "staccato", "tenuto", "tremolo", "roll", "legato"],
    techniqueMethods: [
      "double-hammer alternating bounce",
      "rapid two-hand roll",
      "damper damping with palms",
      "bridge-side strike harmonics"
    ],
    playingStyles: ["folk", "celtic", "appalachian", "bluegrass", "middle-eastern"],
    genreTechniques: {
      folk: ["accent", "staccato", "roll", "tenuto"],
      celtic: ["roll", "accent", "staccato", "legato"],
      appalachian: ["accent", "staccato", "tremolo"]
    }
  }
};
