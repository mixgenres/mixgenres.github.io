import type { InstrumentDef } from '../../schema/instrument-def';

export const pan_flute: InstrumentDef = {
  id: "pan-flute",
  name: "Pan flute",
  family: "winds",
  octave: 12,
  voicing: "single",
  elementaryModel: 7,
  makeupGain: 0.794,
  polyphony: 4,
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
    category: "aerophone_edge_blown",
    materialDensity: 0.35,
    tension: 0.45,
    bodyResonanceVolume: 0.5,
    decayTimeFactor: 0.35,
    harmonicRichness: 0.3
  },
  formantProfile: {
    f1: {
      freq: 650,
      q: 3.5,
      gain: 0.9
    },
    f2: {
      freq: 1400,
      q: 3,
      gain: 0.3
    },
    f3: {
      freq: 3000,
      q: 2.2,
      gain: 0.15
    },
    tongueType: "soft-puff",
    tongueFreq: 1800
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
