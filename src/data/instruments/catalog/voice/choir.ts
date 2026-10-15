import type { InstrumentDef } from '../../schema/instrument-def';

export const choir: InstrumentDef = {
  id: "choir",
  name: "Choir guide (GM aahs)",
  family: "voice",
  voicing: "chord",
  
  
  polyphony: 8,
  note: "General MIDI Choir Aahs pad used as a harmony guide; it is not a sampled SATB ensemble and does not include a cathedral recording",
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
      "sustained vowel-patch harmony",
      "voiced chord changes with clean releases",
      "soft dynamic shaping on held guide notes"
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
