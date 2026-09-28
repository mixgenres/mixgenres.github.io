import type { InstrumentDef } from '../types';

export const fm_ep: InstrumentDef = {
  id: "fm-ep",
  name: "FM Electric Piano",
  family: "bellows-and-keys",
  voicing: "chord",
  elementaryModel: 14,
  makeupGain: 0.411,
  polyphony: 8,
  note: "Classic 80s FM digital electric piano with glassy metallic chime and crystalline clarity",
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 58,
    low: 36,
    high: 84,
    pan: -0.16,
    trim: -1,
    space: 0.28,
    ring: 3,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.8,
    tension: 0.7,
    bodyResonanceVolume: 5,
    decayTimeFactor: 3.5,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "portato", "crescendo"],
    techniqueMethods: [
      "FM operator index velocity scaling",
      "glassy chime attack",
      "sustained digital decay",
      "stereo chorus spreading"
    ],
    playingStyles: ["pop", "ballad", "city-pop", "r&b", "synthwave"],
    genreTechniques: {
      pop: ["legato", "tenuto", "accent"],
      ballad: ["legato", "tenuto", "crescendo"],
      "city-pop": ["staccato", "accent", "legato"]
    }
  }
};
