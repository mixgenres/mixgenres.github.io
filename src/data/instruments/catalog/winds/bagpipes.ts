import type { InstrumentDef } from '../../schema/instrument-def';

export const bagpipes: InstrumentDef = {
  id: "bagpipes",
  name: "Great Highland Bagpipes",
  family: "winds",
  pipeSynthesis: { droneRatios: [0.5, 1, 1.5, 2] },
  voicing: "single",
  elementaryModel: 16,
  makeupGain: 0.4693,
  polyphony: 4,
  note: "Iconic Scottish Highland bagpipes with mouth-blown airtight bag, three continuous bass and tenor drones, and a piercing conical double-reed chanter built for thunderous outdoor projection",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 74,
    low: 55,
    high: 95,
    pan: 0.18,
    trim: -3,
    space: 0.42,
    ring: 6
  },
  luthierPhysics: {
    category: "aerophone_bagpipe_reed",
    materialDensity: 0.7,
    tension: 0.8,
    bodyResonanceVolume: 5,
    decayTimeFactor: 2,
    harmonicRichness: 0.95
  },
  formantProfile: {
    f1: {
      freq: 1250,
      q: 5.2,
      gain: 0.85
    },
    f2: {
      freq: 2650,
      q: 4.5,
      gain: 0.6
    },
    f3: {
      freq: 4600,
      q: 3.5,
      gain: 0.35
    },
    tongueType: "reed-tongue",
    tongueFreq: 3100
  },
  techniques: {
    articulations: ["accent", "legato", "tenuto", "trill", "marcato"],
    techniqueMethods: [
      "doublings and grips rapid gracenote articulation",
      "taorluath and crunluath complex high-level piobaireachd movements",
      "birl pinky strike across low A",
      "continuous bag pressure management during breaths",
      "drones lock harmonic phase alignment"
    ],
    playingStyles: ["highland-marching", "celtic", "piobaireachd", "military", "folk-rock"],
    genreTechniques: {
      "highland-marching": ["accent", "marcato", "legato"],
      celtic: ["legato", "trill", "accent"],
      piobaireachd: ["tenuto", "legato", "trill"]
    }
  },
  physicalModel: {
    model: "blown-reed",
    parameters: {
      reedStiffness: 0.78,
      airResonance: 0.9,
      bodyResonance: 0.8,
      breathNoise: 0.12,
      transientSharpness: 0.72
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Continuous unbroken airflow from the squeezed bag eliminates rests and silences.",
      "All note articulations must be accomplished via gracenotes, strikes, and multi-note cuts.",
      "Fixed non-tempered Mixolydian scale with high pitch center (~476-482 Hz)."
    ]
  }
};
