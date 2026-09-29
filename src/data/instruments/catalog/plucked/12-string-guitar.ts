import type { InstrumentDef } from '../../schema/instrument-def';

export const i_12_string_guitar: InstrumentDef = {
  id: "12-string-guitar",
  name: "12-string guitar",
  family: "plucked",
  voicing: "chord",
  courses: 2,
  bodyConstruction: "wood-box",
  excitationType: "hard-pick",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 8,
  note: "Double-course steel acoustic guitar with octave-doubled lower strings and unison trebles",
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
    materialDensity: 0.88,
    tension: 0.82,
    bodyResonanceVolume: 17,
    decayTimeFactor: 3.6,
    harmonicRichness: 0.85,
    courses: 2,
    bodyConstruction: "wood-box",
    excitationType: "hard-pick"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute", "tenuto", "ghost", "tremolo"],
    techniqueMethods: [
      "flatpick downward strum across courses",
      "fingerstyle double-string rolling",
      "palm muting near saddle",
      "octave shimmer jangle"
    ],
    playingStyles: ["folk", "rock", "jangle-pop", "country", "psychedelic"],
    genreTechniques: {
      folk: ["accent", "legato", "palm-mute", "tenuto"],
      rock: ["accent", "staccato", "palm-mute"],
      "jangle-pop": ["accent", "tenuto", "legato"]
    }
  }
};
