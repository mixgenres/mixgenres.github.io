import type { InstrumentDef } from '../../schema/instrument-def';

export const melodica: InstrumentDef = {
  id: "melodica",
  name: "Melodica",
  family: "winds",
  
  octave: 12,
  voicing: "single",
  
  
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
