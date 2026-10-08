import type { InstrumentDef } from '../../schema/instrument-def';

export const jarana: InstrumentDef = {
  id: "jarana",
  name: "Jarana jarocha",
  family: "plucked",
  octave: 12,
  voicing: "chord",
  courses: 2,
  bodyConstruction: "wood-box",
  excitationType: "nail",
  
  
  polyphony: 8,
  note: "Carved Mexican cedar guitar-like instrument providing the rhythmic motor of Son Jarocho",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 57,
    low: 40,
    high: 84,
    pan: 0.18,
    trim: 0,
    space: 0.24,
    ring: 2.5
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.65,
    tension: 0.82,
    bodyResonanceVolume: 5,
    decayTimeFactor: 1.6,
    harmonicRichness: 0.75,
    courses: 2,
    bodyConstruction: "wood-box",
    excitationType: "nail"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "rasgueado", "palm-mute", "tenuto"],
    techniqueMethods: [
      "mánico jarocho rasgueado strum",
      "percussive finger slap",
      "syncopated zapateado lock",
      "thumb bass counterline"
    ],
    playingStyles: ["son-jarocho", "mexican-folk", "afro-mexican", "cumbia"],
    genreTechniques: {
      "son-jarocho": ["rasgueado", "accent", "staccato", "palm-mute"],
      "mexican-folk": ["accent", "rasgueado", "tenuto"]
    }
  }
};
