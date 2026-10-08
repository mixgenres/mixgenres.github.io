import type { InstrumentDef } from '../../schema/instrument-def';

export const quena: InstrumentDef = {
  id: "quena",
  name: "Quena",
  family: "winds",
  octave: 12,
  voicing: "single",
  
  
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
    materialDensity: 0.4,
    tension: 0.5,
    bodyResonanceVolume: 0.9,
    decayTimeFactor: 0.5,
    harmonicRichness: 0.5
  },
  formantProfile: {
    f1: {
      freq: 920,
      q: 3.4,
      gain: 0.85
    },
    f2: {
      freq: 2450,
      q: 3,
      gain: 0.4
    },
    f3: {
      freq: 4800,
      q: 2.2,
      gain: 0.18
    },
    tongueType: "chiff",
    tongueFreq: 2600
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
