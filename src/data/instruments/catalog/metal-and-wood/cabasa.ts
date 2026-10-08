import type { InstrumentDef } from '../../schema/instrument-def';

export const cabasa: InstrumentDef = {
  id: "cabasa",
  name: "Cabasa / Afoxe",
  family: "metal-and-wood",
  drum: {
    low: 69,
    mid: 69,
    high: 69
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Loops of steel bead chains wrapped around corrugated steel cylinder; creates metallic scrapings and crisp shakes",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.46,
    trim: -6,
    space: 0.12,
    ring: 0.5
  },
  luthierPhysics: {
    category: "scraped_friction",
    materialDensity: 0.6,
    tension: 0.8,
    bodyResonanceVolume: 0.5,
    decayTimeFactor: 0.3,
    harmonicRichness: 0.9
  },
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato", "brushed"],
    techniqueMethods: [
      "hand twisting beads against cylinder",
      "forward and backward hand shaking",
      "crisp rhythmic subdivisions",
      "accented palm slap catches"
    ],
    playingStyles: ["bossa", "samba", "salsa", "son-cubano", "latin-jazz", "cumbia", "pop", "fusion"],
    genreTechniques: {
      bossa: ["accent", "ghost", "staccato"],
      samba: ["accent", "roll", "staccato"],
      "latin-jazz": ["accent", "staccato", "ghost"]
    }
  }
};
