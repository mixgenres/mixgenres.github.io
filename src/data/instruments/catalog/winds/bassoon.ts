import type { InstrumentDef } from '../../schema/instrument-def';

export const bassoon: InstrumentDef = {
  id: "bassoon",
  name: "Bassoon",
  family: "winds",
  voicing: "single",
  elementaryModel: 3,
  makeupGain: 0.685,
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
  playability: {
    absoluteRange: { lowMidi: 34, highMidi: 79 }, // Bb1–G5
    practicalRange: { lowMidi: 34, highMidi: 75 }, // Bb1–Eb5
    comfortableRange: { lowMidi: 41, highMidi: 69 }, // F2–A4
    characteristicRegister: { lowMidi: 43, centreMidi: 57, highMidi: 67 }
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
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
