import type { InstrumentDef } from '../types';

export const guitar: InstrumentDef = {
  id: "guitar",
  name: "Acoustic guitar",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 8,
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 55,
    low: 40,
    high: 76,
    pan: 0.22,
    trim: 0,
    space: 0.24,
    ring: 2.2
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.6,
    tension: 0.7,
    bodyResonanceVolume: 12,
    decayTimeFactor: 2.5,
    harmonicRichness: 0.6,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "fingerpad",
    articulationCapabilities: [
      "pluck",
      "rest-stroke",
      "palm-mute",
      "rasgueado",
      "alzapua",
      "golpe",
      "tremolo",
      "ponticello",
      "tasto"
    ],
    genreAdaptable: true
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "palm-mute",
      "rasgueado",
      "tremolo",
      "harmonic",
      "fingerstyle",
      "flatpick"
    ],
    techniqueMethods: ["fingerstyle", "flatpick", "strum", "muted strum"],
    playingStyles: ["folk", "country"],
    genreTechniques: {
      folk: ["fingerstyle", "accent"],
      country: ["flatpick", "staccato"]
    }
  }
};
