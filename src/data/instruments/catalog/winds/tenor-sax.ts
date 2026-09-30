import type { InstrumentDef } from '../../schema/instrument-def';

export const tenor_sax: InstrumentDef = {
  id: "tenor-sax",
  name: "Bb Tenor Saxophone",
  family: "winds",
  voicing: "single",
  bodyConstruction: "brass-tube",
  excitationType: "breath",
  elementaryModel: 16,
  makeupGain: 0.411,
  polyphony: 4,
  note: "Bb brass single-reed tenor saxophone with husky low register, smoky subtones, and screaming high altissimo bends",
  acousticProfile: {
    sustain: "blown",
    role: "melody",
    centre: 62,
    low: 44,
    high: 76,
    pan: -0.26,
    trim: -1,
    space: 0.32,
    ring: 2.8
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.85,
    tension: 0.82,
    bodyResonanceVolume: 8.5,
    decayTimeFactor: 1.1,
    harmonicRichness: 0.85,
    airResonanceHz: 233,
    excitationType: "breath"
  },
  formantProfile: {
    f1: {
      freq: 580,
      q: 2,
      gain: 0.75
    },
    f2: {
      freq: 1550,
      q: 2.2,
      gain: 0.55
    },
    f3: {
      freq: 3100,
      q: 1.6,
      gain: 0.2
    },
    tongueType: "reed-tongue",
    tongueFreq: 1800
  },
  tuningAndMechanics: {
    tuningName: "Bb Tenor Saxophone Range",
    keyRange: {
      lowNote: "Ab2",
      highNote: "E5",
      lowMidi: 44,
      highMidi: 76
    }
  },
  performanceArticulations: {
    bend: {
      maxSemitones: 3,
      speedMs: 110,
      curve: "s-curve"
    },
    vibrato: {
      rateHz: 5.2,
      depthCents: 32,
      onsetDelayMs: 250
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "subtone",
      "growl",
      "bend",
      "altissimo",
      "vibrato"
    ],
    techniqueMethods: [
      "subtone embouchure loosening",
      "throat growl raspy distortion",
      "key slapping",
      "false fingerings"
    ],
    playingStyles: ["jazz", "funk", "blues", "reggae", "afrobeats", "soul"],
    genreTechniques: {
      jazz: ["subtone", "bend", "vibrato", "legato"],
      funk: ["accent", "staccato", "growl"],
      afrobeats: ["accent", "legato", "bend"]
    }
  }
};
