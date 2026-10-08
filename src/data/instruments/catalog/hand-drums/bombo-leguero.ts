import type { InstrumentDef } from '../../schema/instrument-def';

export const bombo_leguero: InstrumentDef = {
  id: "bombo-leguero",
  name: "Bombo leguero",
  family: "hand-drums",
  drum: {
    low: 35,
    mid: 36,
    high: 38
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Hollowed-tree trunk Argentine drum with goatskin heads said to be heard from leagues (leguas) away",
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
    materialDensity: 0.92,
    tension: 0.52,
    bodyResonanceVolume: 38,
    decayTimeFactor: 1.7,
    harmonicRichness: 0.4
  },
  techniques: {
    articulations: ["accent", "low-tone", "staccato", "ghost", "roll", "open"],
    techniqueMethods: [
      "paired stick rhythm: head and rim alternating",
      "leather ring tension tuning",
      "chacarera 6/8 - 3/4 hemiola pattern",
      "rim wood clack"
    ],
    playingStyles: ["chacarera", "zamba", "folklore-argentino", "malambo"],
    genreTechniques: {
      chacarera: ["accent", "low-tone", "staccato", "ghost"],
      zamba: ["low-tone", "accent", "open"],
      malambo: ["accent", "staccato", "roll"]
    }
  }
};
