import type { InstrumentDef } from '../../schema/instrument-def';

export const melodica: InstrumentDef = {
  id: "melodica",
  name: "Melodica",
  family: "winds",
  freeReedSynthesis: { fundamentalGain: 0.62, upperPartialGain: 0.20, upperPartialRatio: 2, breathNoiseCutoffHz: 1800, transientClickGain: 0.05, attackSeconds: 0.045, bendDepth: 0.035, chamberFrequencyMultiple: 2.1, chamberQ: 2.8 },
  octave: 12,
  voicing: "single",
  elementaryModel: 10,
  makeupGain: 0.9833,
  polyphony: 4,
  note: "Breathy melodica line",
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
    category: "breath_free_reed",
    materialDensity: 0.6,
    tension: 0.7,
    bodyResonanceVolume: 1,
    decayTimeFactor: 0.8,
    harmonicRichness: 0.7
  },
  formantProfile: {
    f1: { freq: 1450, q: 2.6, gain: 0.8 },
    f2: { freq: 3100, q: 2.2, gain: 0.4 },
    tongueType: "reed-tongue",
    tongueFreq: 2200
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
