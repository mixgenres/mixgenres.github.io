import type { InstrumentDef } from '../../schema/instrument-def';

export const tuba: InstrumentDef = {
  id: "tuba",
  name: "Tuba",
  family: "brass",
  
  octave: -12,
  voicing: "single",
  
  
  polyphony: 4,
  acousticProfile: {
    sustain: "blown",
    role: "bass",
    centre: 41,
    low: 28,
    high: 60,
    pan: -0.2,
    trim: 0,
    space: 0.3,
    ring: 2.5
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.95,
    tension: 0.6,
    bodyResonanceVolume: 30,
    decayTimeFactor: 1.4,
    harmonicRichness: 0.6
  },
  formantProfile: {
    f1: {
      freq: 250,
      q: 2.2,
      gain: 0.9
    },
    f2: {
      freq: 630,
      q: 2.4,
      gain: 0.45
    },
    f3: {
      freq: 1250,
      q: 1.8,
      gain: 0.2
    },
    tongueType: "lip-slap",
    tongueFreq: 800
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "sforzando", "fall", "doit"],
    techniqueMethods: ["tongued attack", "legato slur", "lip bend", "mute/stopping"],
    playingStyles: ["jazz", "soul", "pop"]
  }
};
