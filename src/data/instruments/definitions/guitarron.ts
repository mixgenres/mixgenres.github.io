import type { InstrumentDef } from '../types';

export const guitarron: InstrumentDef = {
  id: "guitarron",
  name: "Guitarrón",
  family: "plucked",
  voicing: "bass",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  elementaryModel: 0,
  makeupGain: 0.479,
  polyphony: 4,
  note: "Large acoustic bass guitar from Mexico used in mariachi and folk music",
  acousticProfile: {
    sustain: "decaying",
    role: "bass",
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
    materialDensity: 0.55,
    tension: 0.5,
    bodyResonanceVolume: 45,
    decayTimeFactor: 2.8,
    harmonicRichness: 0.5,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "fingerpad"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "ghost", "palm-mute", "tenuto"],
    techniqueMethods: ["double-octave pluck", "thumb pad attack", "acoustic body resonance"],
    playingStyles: ["mariachi", "folk", "latin"],
    genreTechniques: {
      mariachi: ["accent", "staccato", "tenuto"],
      latin: ["staccato", "accent"]
    }
  }
};
