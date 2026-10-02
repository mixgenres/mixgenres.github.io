import type { InstrumentDef } from '../../schema/instrument-def';

export const english_horn: InstrumentDef = {
  id: "english-horn",
  name: "English Horn",
  family: "winds",
  octave: 12,
  voicing: "single",
  elementaryModel: 15,
  makeupGain: 0.399,
  polyphony: 4,
  note: "Tenor oboe with bulbous bell producing haunting, melancholic, autumnal double-reed tone",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 69,
    low: 55,
    high: 92,
    pan: 0.26,
    trim: -2,
    space: 0.34,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_double_reed",
    materialDensity: 0.75,
    tension: 0.75,
    bodyResonanceVolume: 2.5,
    decayTimeFactor: 0.55,
    harmonicRichness: 0.7
  },
  formantProfile: {
    f1: {
      freq: 780,
      q: 4.2,
      gain: 0.8
    },
    f2: {
      freq: 2150,
      q: 3.6,
      gain: 0.55
    },
    f3: {
      freq: 3500,
      q: 2.6,
      gain: 0.25
    },
    tongueType: "reed-tongue",
    tongueFreq: 2200
  },
  techniques: {
    articulations: ["accent", "legato", "tenuto", "staccato", "vibrato", "portato"],
    techniqueMethods: [
      "broad double reed voicing",
      "breath support dynamic shaping",
      "cantabile legato phrasing",
      "expressive throat vibrato"
    ],
    playingStyles: ["orchestral", "cinematic", "chamber", "impressionist"],
    genreTechniques: {
      orchestral: ["legato", "tenuto", "vibrato", "portato"],
      cinematic: ["legato", "tenuto", "vibrato"]
    }
  }
};
