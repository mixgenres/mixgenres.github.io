import type { InstrumentDef } from '../../schema/instrument-def';

export const acid_303: InstrumentDef = {
  id: "acid-303",
  name: "Acid Bassline 303",
  family: "electronic",
  octave: 12,
  voicing: "single",
  elementaryModel: 9,
  makeupGain: 17.600,
  polyphony: 4,
  note: "Iconic Roland TB-303 bass synthesizer with aggressive resonant diode ladder filter and accent snaps",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 60,
    low: 36,
    high: 90,
    pan: 0,
    trim: -2,
    space: 0.3,
    ring: 4
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.8,
    tension: 0.9,
    bodyResonanceVolume: 5,
    decayTimeFactor: 1.5,
    harmonicRichness: 0.98
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: [
      "diode-ladder filter resonance squeal",
      "accent circuit envelope decay snap",
      "monophonic slide portamento",
      "saw/square oscillator switching"
    ],
    playingStyles: ["acid-house", "techno", "trance", "electronic", "breakbeat"],
    genreTechniques: {
      "acid-house": ["accent", "slide", "staccato", "legato"],
      techno: ["accent", "staccato", "slide"],
      electronic: ["accent", "slide", "legato"]
    }
  }
};
