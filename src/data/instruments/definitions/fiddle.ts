import type { InstrumentDef } from '../types';

export const fiddle: InstrumentDef = {
  id: "fiddle",
  name: "Fiddle",
  family: "bowed",
  program: 110,
  octave: 12,
  voicing: "single",
  bodyConstruction: "wood-box",
  excitationType: "bow",
  elementaryModel: 6,
  makeupGain: 5.477,
  polyphony: 4,
  note: "Fiddle for folk and country",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 71,
    low: 55,
    high: 90,
    pan: -0.3,
    trim: -2,
    space: 0.35,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.55,
    tension: 0.85,
    bodyResonanceVolume: 2.5,
    decayTimeFactor: 1.3,
    harmonicRichness: 0.8,
    soundboardResonanceHz: 280,
    airResonanceHz: 190,
    excitationType: "bow",
    bodyConstruction: "wood-box"
  },
  bowedResonance: {
    bodyFreq: 480,
    bodyQ: 2,
    bodyGain: 0.45,
    bridgeHillFreq: 3000,
    bridgeHillQ: 2.6,
    bridgeHillGain: 0.45
  },
  tuningAndMechanics: {
    tuningName: "GDAE Violin Standard Tuning",
    frets: 0,
    openStrings: [
      {
        name: "G3",
        note: "G3",
        midi: 55,
        frequencyHz: 196
      },
      {
        name: "D4",
        note: "D4",
        midi: 62,
        frequencyHz: 293.66
      },
      {
        name: "A4",
        note: "A4",
        midi: 69,
        frequencyHz: 440
      },
      {
        name: "E5",
        note: "E5",
        midi: 76,
        frequencyHz: 659.25
      }
    ]
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["shuffle bow", "double-stop", "drone string", "cut bow"],
    playingStyles: ["country", "folk"],
    genreTechniques: {
      country: ["staccato", "accent"],
      folk: ["staccato", "accent", "legato"]
    }
  }
};
