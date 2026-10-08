import type { InstrumentDef } from '../../schema/instrument-def';

export const choir: InstrumentDef = {
  id: "choir",
  name: "Full Vocal Choir",
  family: "voice",
  voicing: "chord",
  
  
  polyphony: 8,
  note: "Polyphonic acoustic choral ensemble combining soprano, alto, tenor, and bass vocalists singing sustained vowel sonorities with expansive cathedral acoustic bloom",
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 62,
    low: 48,
    high: 79,
    pan: 0,
    trim: -5,
    space: 0.55,
    ring: 6,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.5,
    tension: 0.6,
    bodyResonanceVolume: 12,
    decayTimeFactor: 2,
    harmonicRichness: 0.7
  },
  techniques: {
    articulations: ["tenuto", "legato", "crescendo", "diminuendo", "accent", "portato"],
    techniqueMethods: [
      "polyphonic SATB voice leading and suspensions",
      "seamless staggered breathing for infinite sustains",
      "dynamic choral swells (messa di voce)",
      "gentle vocal onset without harsh consonants",
      "cathedral acoustic release decay"
    ],
    playingStyles: ["choral", "cinematic", "classical", "gospel", "ambient"],
    genreTechniques: {
      cinematic: ["tenuto", "legato", "crescendo", "diminuendo"],
      choral: ["legato", "tenuto", "portato"],
      ambient: ["tenuto", "legato"]
    }
  },
  physicalModel: {
    model: "voice-source",
    parameters: {
      airResonance: 0.92,
      breathNoise: 0.2,
      bodyResonance: 0.9,
      stereoWidth: 0.95
    },
    
    
  }
};
