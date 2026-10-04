import type { InstrumentDef } from '../../schema/instrument-def';

export const concertina: InstrumentDef = {
  id: "concertina",
  name: "Concertina",
  family: "bellows-and-keys",
  voicing: "chord",
  elementaryModel: 10,
  makeupGain: 1.0859,
  polyphony: 8,
  note: "Hexagonal Anglo-Celtic concertina with bright reedy punch and lively dance ornamentation",
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 64,
    low: 48,
    high: 88,
    pan: 0.12,
    trim: -2,
    space: 0.3,
    ring: 2,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "bellows_free_reed",
    materialDensity: 0.75,
    tension: 0.72,
    bodyResonanceVolume: 5,
    decayTimeFactor: 0.9,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portato", "trill", "grace", "tenuto"],
    techniqueMethods: [
      "push-pull bellows reversals",
      "finger button dance cuts",
      "air button breathing",
      "octave chord stabs"
    ],
    playingStyles: ["celtic", "irish-folk", "english-folk", "shanty", "polka"],
    genreTechniques: {
      celtic: ["staccato", "grace", "accent", "legato"],
      "irish-folk": ["staccato", "grace", "accent"],
      polka: ["staccato", "accent"]
    }
  }
};
