import type { InstrumentDef } from '../../schema/instrument-def';

export const bari_sax: InstrumentDef = {
  id: "bari-sax",
  name: "Baritone Saxophone",
  family: "winds",
  voicing: "bass",
  elementaryModel: 16,
  makeupGain: 0.411,
  polyphony: 4,
  note: "Massive E-flat low brass saxophone with coiled neck tube, delivering guttural earth-shaking low A/B-flat fundamentals, snappy funk horn punches, and motoring bass lines",
  acousticProfile: {
    sustain: "blown",
    role: "bass",
    centre: 52,
    low: 39,
    high: 72,
    pan: 0.28,
    trim: -1,
    space: 0.26,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_single_reed",
    materialDensity: 0.9,
    tension: 0.72,
    bodyResonanceVolume: 7,
    decayTimeFactor: 0.8,
    harmonicRichness: 0.6
  },
  formantProfile: {
    f1: {
      freq: 380,
      q: 1.8,
      gain: 0.8
    },
    f2: {
      freq: 1050,
      q: 2,
      gain: 0.5
    },
    f3: {
      freq: 2300,
      q: 1.5,
      gain: 0.2
    },
    tongueType: "reed-tongue",
    tongueFreq: 1400
  },
  techniques: {
    articulations: ["accent", "staccato", "marcato", "tenuto", "ghost", "legato"],
    techniqueMethods: [
      "percussive slap tonguing on low notes",
      "punchy 16th-note funk ostinato riffs",
      "growling subterranean low A pedal points",
      "walking bass line acoustic emulation",
      "horn section anchor bass stabs"
    ],
    playingStyles: ["funk", "soul", "big-band", "ska", "rock", "afrobeat"],
    genreTechniques: {
      funk: ["marcato", "accent", "staccato", "ghost"],
      "big-band": ["accent", "tenuto", "staccato"],
      afrobeat: ["staccato", "accent", "marcato"]
    }
  },
  physicalModel: {
    model: "blown-reed",
    parameters: {
      reedStiffness: 0.75,
      airResonance: 0.92,
      breathNoise: 0.25,
      transientSharpness: 0.78
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Huge single cane reed requires firm breath support to initiate massive low column vibrations.",
      "Fast key action provides percussive mechanical pad slaps that enhance the attack transient.",
      "Rich in low-mid rasp, locking together with bass guitar and kick drum."
    ]
  }
};
