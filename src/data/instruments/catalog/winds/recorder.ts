import type { InstrumentDef } from '../../schema/instrument-def';

export const recorder: InstrumentDef = {
  id: "recorder",
  name: "Recorder",
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
    category: "aerophone_flue",
    materialDensity: 0.35,
    tension: 0.45,
    bodyResonanceVolume: 0.5,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.35
  },
  formantProfile: {
    f1: {
      freq: 980,
      q: 3,
      gain: 0.8
    },
    f2: {
      freq: 2150,
      q: 2.5,
      gain: 0.35
    },
    f3: {
      freq: 4300,
      q: 2,
      gain: 0.15
    },
    tongueType: "chiff",
    tongueFreq: 2300
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
