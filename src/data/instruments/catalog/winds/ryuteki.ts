import type { InstrumentDef } from '../../schema/instrument-def';

export const ryuteki: InstrumentDef = {
  id: "ryuteki",
  name: "Ryuteki",
  family: "winds",
  octave: 12,
  voicing: "single",
  elementaryModel: 7,
  makeupGain: 0.466,
  polyphony: 4,
  note: "Gagaku flute",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 72,
    low: 58,
    high: 94,
    pan: 0.22,
    trim: -3,
    space: 0.45,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_edge_blown",
    materialDensity: 0.4,
    tension: 0.5,
    bodyResonanceVolume: 0.6,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.55
  },
  formantProfile: {
    f1: { freq: 880, q: 3.8, gain: 0.85 },
    f2: { freq: 1950, q: 3.0, gain: 0.35 },
    f3: { freq: 3800, q: 2.2, gain: 0.2 },
    tongueType: "chiff",
    tongueFreq: 2400
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
