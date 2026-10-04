import type { InstrumentDef } from '../../schema/instrument-def';

export const tin_whistle: InstrumentDef = {
  id: "tin-whistle",
  name: "Tin whistle",
  family: "winds",
  octave: 12,
  voicing: "single",
  elementaryModel: 7,
  makeupGain: 0.7395,
  polyphony: 4,
  note: "Whistle register with Celtic ornament rules",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 79,
    low: 60,
    high: 98,
    pan: 0.22,
    trim: -2,
    space: 0.38,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_flue",
    materialDensity: 0.4,
    tension: 0.6,
    bodyResonanceVolume: 0.3,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.6
  },
  formantProfile: {
    f1: {
      freq: 1350,
      q: 3.2,
      gain: 0.85
    },
    f2: {
      freq: 3100,
      q: 2.8,
      gain: 0.4
    },
    f3: {
      freq: 5900,
      q: 2.2,
      gain: 0.2
    },
    tongueType: "chiff",
    tongueFreq: 3600
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "roll", "grace"],
    techniqueMethods: ["tongue", "cut", "roll", "cran"],
    playingStyles: ["celtic"],
    genreTechniques: {
      celtic: ["roll", "grace", "staccato"]
    }
  }
};
