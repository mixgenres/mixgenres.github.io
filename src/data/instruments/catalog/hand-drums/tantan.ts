import type { InstrumentDef } from '../../schema/instrument-def';

export const tantan: InstrumentDef = {
  id: "tantan",
  name: "Tantan",
  family: "hand-drums",
  drum: {
    low: 41,
    mid: 43,
    high: 45
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Brazilian pagode bass drum; low open tone and damped syncopated strokes",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.3,
    trim: -1,
    space: 0.18,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.8,
    tension: 0.8,
    bodyResonanceVolume: 20,
    decayTimeFactor: 0.8,
    harmonicRichness: 0.6
  },
  techniques: {
    articulations: ["low-tone", "open", "ghost", "accent", "roll"],
    techniqueMethods: ["open low tone", "damped syncopation", "muted finger/hand stroke", "pagode bass punctuation"],
    playingStyles: ["pagode", "samba", "partido-alto", "genre-native performance"],
    genreTechniques: {}
  }
};
