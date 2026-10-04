import type { InstrumentDef } from '../../schema/instrument-def';

export const clarinet: InstrumentDef = {
  id: "clarinet",
  name: "Clarinet",
  family: "winds",
  voicing: "single",
  elementaryModel: 16,
  makeupGain: 1.0305,
  polyphony: 4,
  note: "Single-reed cylindrical woodwind with rich chalumeau low register and soaring expressive clarion highs",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 65,
    low: 50,
    high: 86,
    pan: 0.2,
    trim: -2,
    space: 0.36,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_single_reed",
    materialDensity: 0.65,
    tension: 0.7,
    bodyResonanceVolume: 2.5,
    decayTimeFactor: 0.55,
    harmonicRichness: 0.55
  },
  formantProfile: {
    f1: {
      freq: 1450,
      q: 3.2,
      gain: 0.7
    },
    f2: {
      freq: 2950,
      q: 2.6,
      gain: 0.45
    },
    f3: {
      freq: 4900,
      q: 2,
      gain: 0.2
    },
    tongueType: "reed-tongue",
    tongueFreq: 2400
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "vibrato",
      "bend",
      "trill",
      "portato"
    ],
    techniqueMethods: [
      "single reed embouchure flexibility",
      "klezmer glissando throat bends",
      "subtle sub-tone warmth",
      "rapid staccato tonguing"
    ],
    playingStyles: ["classical", "jazz", "klezmer", "choro", "dixieland"],
    genreTechniques: {
      jazz: ["legato", "bend", "vibrato", "accent"],
      klezmer: ["bend", "vibrato", "trill", "accent"],
      classical: ["legato", "staccato", "tenuto", "portato"],
      choro: ["staccato", "accent", "legato"]
    }
  }
};
