import type { InstrumentDef } from '../types';

export const xiao: InstrumentDef = {
  id: "xiao",
  name: "Xiao",
  family: "winds",
  program: 75,
  octave: 12,
  voicing: "single",
  elementaryModel: 7,
  makeupGain: 0.466,
  polyphony: 4,
  note: "Soft Chinese end-blown flute",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 67,
    low: 55,
    high: 91,
    pan: -0.22,
    trim: -3,
    space: 0.42,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.4,
    tension: 0.42,
    bodyResonanceVolume: 1,
    decayTimeFactor: 0.6,
    harmonicRichness: 0.4
  },
  formantProfile: {
    f1: {
      freq: 580,
      q: 3,
      gain: 0.8
    },
    f2: {
      freq: 1480,
      q: 2.6,
      gain: 0.3
    },
    f3: {
      freq: 3100,
      q: 2,
      gain: 0.12
    },
    tongueType: "soft-puff",
    tongueFreq: 1600
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
