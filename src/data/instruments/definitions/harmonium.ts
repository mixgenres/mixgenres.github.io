import type { InstrumentDef } from '../types';

export const harmonium: InstrumentDef = {
  id: "harmonium",
  name: "Harmonium",
  family: "bellows-and-keys",
  program: 20,
  voicing: "chord",
  elementaryModel: 0,
  makeupGain: 0.344,
  polyphony: 8,
  note: "Hand-pumped free-reed keyboard with sustained drone registers and warm bellows dynamics",
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 60,
    low: 41,
    high: 84,
    pan: -0.12,
    trim: -1,
    space: 0.28,
    ring: 2,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "bellows_free_reed",
    materialDensity: 0.75,
    tension: 0.7,
    bodyResonanceVolume: 20,
    decayTimeFactor: 1.4,
    harmonicRichness: 0.85,
    airResonanceHz: 260
  },
  techniques: {
    articulations: [
      "accent",
      "legato",
      "tenuto",
      "staccato",
      "crescendo",
      "diminuendo",
      "portato"
    ],
    techniqueMethods: [
      "bellows pumping for dynamic control",
      "drone stop engagement",
      "sustained cluster chord voicing",
      "finger substitution legato"
    ],
    playingStyles: ["qawwali", "hindustani", "folk", "celtic", "kirtan", "ambient"],
    genreTechniques: {
      folk: ["legato", "tenuto", "accent"],
      celtic: ["legato", "tenuto"],
      hindustani: ["legato", "crescendo", "diminuendo", "portato"]
    }
  }
};
