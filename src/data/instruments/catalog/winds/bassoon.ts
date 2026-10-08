import type { InstrumentDef } from '../../schema/instrument-def';

export const bassoon: InstrumentDef = {
  id: "bassoon",
  name: "Bassoon",
  family: "winds",
  voicing: "single",
  
  
  polyphony: 4,
  note: "Double-reed bass woodwind with rich woody buzz, reedy warmth, and agile staccato articulation",
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
    materialDensity: 0.8,
    tension: 0.6,
    bodyResonanceVolume: 9,
    decayTimeFactor: 0.9,
    harmonicRichness: 0.55
  },
  formantProfile: {
    f1: {
      freq: 440,
      q: 3.8,
      gain: 0.85
    },
    f2: {
      freq: 1120,
      q: 3.2,
      gain: 0.5
    },
    f3: {
      freq: 2250,
      q: 2.4,
      gain: 0.22
    },
    tongueType: "reed-tongue",
    tongueFreq: 1500
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "portato", "vibrato", "marcato"],
    techniqueMethods: [
      "double reed embouchure control",
      "flick key agility",
      "dry staccato tonguing",
      "singing tenor register vibrato"
    ],
    playingStyles: ["orchestral", "chamber", "cinematic", "baroque"],
    genreTechniques: {
      orchestral: ["staccato", "legato", "tenuto", "accent"],
      chamber: ["legato", "portato", "vibrato"],
      cinematic: ["legato", "tenuto", "staccato"]
    }
  }
};
