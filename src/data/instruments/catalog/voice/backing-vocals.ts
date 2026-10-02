import type { InstrumentDef } from '../../schema/instrument-def';

export const backing_vocals: InstrumentDef = {
  id: "backing-vocals",
  name: "Backing vocals",
  family: "voice",
  voicing: "chord",
  elementaryModel: 12,
  makeupGain: 29.744,
  polyphony: 8,
  note: "Harmonized vocal ensemble providing lush background pad chords and call-and-response hooks",
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 64,
    low: 52,
    high: 81,
    pan: 0,
    trim: -5,
    space: 0.5,
    ring: 5,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.5,
    tension: 0.6,
    bodyResonanceVolume: 10,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.6
  },
  techniques: {
    articulations: ["accent", "legato", "tenuto", "staccato", "crescendo", "diminuendo"],
    techniqueMethods: [
      "blended vocal harmony vowel shaping",
      "tight onset consonant synchronization",
      "subtle vibrato warm tails",
      "call-and-response dynamic balance"
    ],
    playingStyles: ["pop", "soul", "r&b", "afrobeats", "reggae"],
    genreTechniques: {
      soul: ["legato", "accent", "tenuto"],
      afrobeats: ["staccato", "accent", "legato"],
      pop: ["legato", "tenuto", "staccato"]
    }
  }
};
