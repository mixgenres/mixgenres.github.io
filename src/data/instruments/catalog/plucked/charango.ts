import type { InstrumentDef } from '../../schema/instrument-def';

export const charango: InstrumentDef = {
  id: "charango",
  name: "Charango",
  family: "plucked",
  octave: 12,
  voicing: "chord",
  courses: 2,
  bodyConstruction: "wood-box",
  excitationType: "nail",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 8,
  note: "Ten-string Andean small lute with doubled courses and vibrant, bright, high-pitched rapid strums",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 66,
    low: 55,
    high: 86,
    pan: 0.36,
    trim: 0,
    space: 0.24,
    ring: 1.6
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.65,
    tension: 0.88,
    bodyResonanceVolume: 2.5,
    decayTimeFactor: 1.4,
    harmonicRichness: 0.8,
    courses: 2,
    bodyConstruction: "wood-box",
    excitationType: "nail"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo", "rasgueado", "tenuto"],
    techniqueMethods: [
      "repique rapid index-finger roll",
      "trémolo de charango",
      "syncopated fingerstyle arpeggio",
      "palm mute apagado"
    ],
    playingStyles: ["andean-folk", "huayno", "carnavalito", "cueca"],
    genreTechniques: {
      "andean-folk": ["accent", "rasgueado", "tremolo", "staccato"],
      huayno: ["accent", "rasgueado", "staccato"],
      carnavalito: ["accent", "staccato", "tremolo"]
    }
  }
};
