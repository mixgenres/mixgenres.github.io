import type { InstrumentDef } from '../../schema/instrument-def';

export const bombo: InstrumentDef = {
  id: "bombo",
  name: "Bombo",
  family: "hand-drums",
  drum: {
    low: 35,
    mid: 36,
    high: 38
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Large South American wooden bass drum with sheepskin head delivering deep, resonant ceremonial pulses",
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
    materialDensity: 0.95,
    tension: 0.5,
    bodyResonanceVolume: 40,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.4
  },
  techniques: {
    articulations: ["accent", "low-tone", "ghost", "roll", "open", "staccato"],
    techniqueMethods: [
      "padded mallet skin stroke",
      "wooden rim (aro) stick click",
      "interlocking rim-and-head rhythm",
      "decay damping"
    ],
    playingStyles: ["andean-folk", "chacarera", "zamba", "cumbia"],
    genreTechniques: {
      "andean-folk": ["accent", "low-tone", "staccato", "roll"],
      cumbia: ["low-tone", "accent", "ghost"]
    }
  }
};
