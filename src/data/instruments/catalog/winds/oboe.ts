import type { InstrumentDef } from '../../schema/instrument-def';

export const oboe: InstrumentDef = {
  id: "oboe",
  name: "Oboe",
  family: "winds",
  octave: 12,
  voicing: "single",
  elementaryModel: 16,
  makeupGain: 1.0018,
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
    category: "aerophone_double_reed",
    materialDensity: 0.75,
    tension: 0.85,
    bodyResonanceVolume: 1.2,
    decayTimeFactor: 0.45,
    harmonicRichness: 0.8
  },
  formantProfile: {
    f1: {
      freq: 1100,
      q: 4.8,
      gain: 0.85
    },
    f2: {
      freq: 2850,
      q: 4.2,
      gain: 0.65
    },
    f3: {
      freq: 4300,
      q: 3,
      gain: 0.3
    },
    tongueType: "reed-tongue",
    tongueFreq: 3000
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
