import type { InstrumentDef } from '../../schema/instrument-def';

export const alto_sax: InstrumentDef = {
  id: "alto-sax",
  name: "Alto Saxophone",
  family: "winds",
  voicing: "single",
  elementaryModel: 16,
  makeupGain: 0.8584,
  polyphony: 4,
  note: "E-flat curved conical brass saxophone with single reed mouthpiece, delivering the expressive bite, vocal flexibility, and iconic bebop agility of Charlie Parker",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 67,
    low: 53,
    high: 86,
    pan: 0.3,
    trim: -1,
    space: 0.3,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_single_reed",
    materialDensity: 0.85,
    tension: 0.78,
    bodyResonanceVolume: 3,
    decayTimeFactor: 0.65,
    harmonicRichness: 0.7
  },
  formantProfile: {
    f1: {
      freq: 820,
      q: 2,
      gain: 0.75
    },
    f2: {
      freq: 2100,
      q: 2.2,
      gain: 0.55
    },
    f3: {
      freq: 3800,
      q: 1.8,
      gain: 0.22
    },
    tongueType: "reed-tongue",
    tongueFreq: 2200
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "marcato",
      "ghost",
      "bend",
      "vibrato"
    ],
    techniqueMethods: [
      "jaw-dropped expressive blues note bends",
      "bebop swing tongue articulation (slur two, tongue two)",
      "growl created by singing while blowing into reed",
      "subtone warmth on low notes with loose lower lip",
      "altissimo overtone fingerings extending range upward"
    ],
    playingStyles: ["jazz", "bebop", "funk", "soul", "pop", "ska", "rnb"],
    genreTechniques: {
      bebop: ["accent", "ghost", "legato", "staccato"],
      funk: ["marcato", "accent", "staccato"],
      blues: ["bend", "vibrato", "legato", "accent"],
      pop: ["accent", "legato", "tenuto"]
    }
  },
  physicalModel: {
    model: "blown-reed",
    parameters: {
      reedStiffness: 0.58,
      airResonance: 0.84,
      breathNoise: 0.18,
      transientSharpness: 0.68
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Single cane reed vibrating against the curved mouthpiece facing generates rich odd and even harmonics.",
      "Dynamic biting embouchure allows explosive accents, screaming altissimo register, and sweet subtones."
    ]
  }
};
