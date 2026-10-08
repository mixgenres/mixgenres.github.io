import type { InstrumentDef } from '../../schema/instrument-def';

export const bones: InstrumentDef = {
  id: "bones",
  name: "Rhythm bones",
  family: "metal-and-wood",
  drum: {
    low: 75,
    mid: 76,
    high: 77
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Pair of curved animal bones or hardwoods held between fingers and clacked together with rapid wrist snaps",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 76,
    low: 60,
    high: 90,
    pan: 0.34,
    trim: -4,
    space: 0.14,
    ring: 0.35
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.55,
    tension: 0.7,
    bodyResonanceVolume: 0.2,
    decayTimeFactor: 0.1,
    harmonicRichness: 0.4
  },
  techniques: {
    articulations: ["accent", "staccato", "roll", "ghost", "flam"],
    techniqueMethods: [
      "wrist whip momentum clacking",
      "single click accents",
      "rapid continuous roll (triplets)",
      "double-hand polyrhythmic clatter"
    ],
    playingStyles: ["irish-folk", "celtic", "minstrel", "bluegrass", "zydeco"],
    genreTechniques: {
      celtic: ["roll", "accent", "staccato", "flam"],
      "irish-folk": ["accent", "roll", "staccato"],
      bluegrass: ["accent", "staccato", "ghost"]
    }
  }
};
