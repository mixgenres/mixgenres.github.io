import type { InstrumentDef } from '../types';

export const kalimba: InstrumentDef = {
  id: "kalimba",
  name: "Kalimba / Mbira",
  family: "plucked",
  voicing: "single",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  elementaryModel: 8,
  makeupGain: 0.649,
  polyphony: 4,
  note: "African thumb piano with staggered metal tines over wooden soundbox producing gentle bell resonance",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 72,
    low: 40,
    high: 84,
    pan: 0.18,
    trim: 0,
    space: 0.35,
    ring: 1.6
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.9,
    tension: 0.8,
    bodyResonanceVolume: 2,
    decayTimeFactor: 2,
    harmonicRichness: 0.4,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "fingerpad"
  },
  techniques: {
    articulations: ["accent", "staccato", "tenuto", "ghost", "legato"],
    techniqueMethods: [
      "two-thumb downward plucking",
      "index finger upward flick",
      "resonant soundhole vibrato modulation",
      "buzzing bottle-cap timbre"
    ],
    playingStyles: ["african-folk", "mbira-dza-vadzimu", "ambient", "afrobeats", "acoustic"],
    genreTechniques: {
      "african-folk": ["accent", "staccato", "ghost", "legato"],
      ambient: ["tenuto", "legato", "ghost"],
      afrobeats: ["accent", "staccato", "ghost"]
    }
  }
};
