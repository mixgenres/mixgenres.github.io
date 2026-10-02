import type { InstrumentDef } from '../../schema/instrument-def';

export const uilleann_pipes: InstrumentDef = {
  id: "uilleann-pipes",
  name: "Uilleann pipes",
  family: "winds",
  pipeSynthesis: { droneRatios: [0.5, 1, 2] },
  voicing: "single",
  elementaryModel: 16,
  makeupGain: 0.411,
  polyphony: 4,
  note: "Irish phrase rules over the pipes patch",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 68,
    low: 48,
    high: 91,
    pan: 0.16,
    trim: -2,
    space: 0.42,
    ring: 5
  },
  luthierPhysics: {
    category: "aerophone_bagpipe_reed",
    materialDensity: 0.65,
    tension: 0.75,
    bodyResonanceVolume: 3,
    decayTimeFactor: 1.2,
    harmonicRichness: 0.82
  },
  formantProfile: {
    f1: {
      freq: 1180,
      q: 4.8,
      gain: 0.85
    },
    f2: {
      freq: 2500,
      q: 4.2,
      gain: 0.55
    },
    f3: {
      freq: 4400,
      q: 3.2,
      gain: 0.3
    },
    tongueType: "reed-tongue",
    tongueFreq: 2900
  },
  techniques: {
    articulations: ["accent", "legato", "grace", "staccato"],
    techniqueMethods: ["cut", "tap", "roll", "bellows phrasing"],
    playingStyles: ["celtic"],
    genreTechniques: {
      celtic: ["grace", "legato"]
    }
  }
};
