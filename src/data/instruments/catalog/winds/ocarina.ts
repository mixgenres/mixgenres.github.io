import type { InstrumentDef } from '../../schema/instrument-def';

export const ocarina: InstrumentDef = {
  id: "ocarina",
  name: "Ocarina",
  family: "winds",
  octave: 12,
  voicing: "single",
  elementaryModel: 7,
  makeupGain: 0.466,
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
    category: "aerophone_flue",
    materialDensity: 0.4,
    tension: 0.4,
    bodyResonanceVolume: 0.4,
    decayTimeFactor: 0.35,
    harmonicRichness: 0.25
  },
  formantProfile: {
    f1: {
      freq: 840,
      q: 4.5,
      gain: 0.95
    },
    f2: {
      freq: 1680,
      q: 4,
      gain: 0.25
    },
    tongueType: "soft-puff",
    tongueFreq: 1500
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
