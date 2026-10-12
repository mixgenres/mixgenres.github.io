import type { InstrumentDef } from '../../schema/instrument-def';

export const sampler: InstrumentDef = {
  id: "sampler",
  name: "Sampler",
  family: "electronic",
  voicing: "single",
  variants: [
    { id: 'acoustic-kit', name: 'Acoustic Hits' },
    { id: 'electronic-kit', name: 'Electronic Hits' },
    { id: '808-kit', name: '808 / 909 Hits' },
    { id: 'dance-kit', name: 'Dance Hits' },
  ],
  
  
  polyphony: 4,
  note: "Multi-sample kit; each note selects a recorded one-shot, so it can play chopped rhythms and sample accents in any genre",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 60,
    low: 36,
    high: 90,
    pan: 0,
    trim: -2,
    space: 0.3,
    ring: 1.2
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.5,
    tension: 0.5,
    bodyResonanceVolume: 12,
    decayTimeFactor: 0.45,
    harmonicRichness: 0.75
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost"],
    techniqueMethods: ["sample selection by note", "one-shot chop", "velocity-shaped accent"],
    playingStyles: ["hip-hop", "electronic", "pop", "musique concrète"],
    genreTechniques: {}
  }
};
