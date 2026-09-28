import type { InstrumentDef } from '../types';

export const horn_section: InstrumentDef = {
  id: "horn-section",
  name: "Horn section",
  family: "brass",
  program: 61,
  voicing: "chord",
  elementaryModel: 15,
  makeupGain: 0.399,
  polyphony: 8,
  note: "Tight funk and soul brass section (trumpet, tenor sax, trombone) with laser-accurate syncopated hits",
  acousticProfile: {
    sustain: "blown",
    role: "comp",
    centre: 64,
    low: 48,
    high: 84,
    pan: 0.2,
    trim: -2,
    space: 0.28,
    ring: 2.5
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.85,
    tension: 0.8,
    bodyResonanceVolume: 8,
    decayTimeFactor: 0.7,
    harmonicRichness: 0.85
  },
  formantProfile: {
    f1: {
      freq: 850,
      q: 1.6,
      gain: 0.8
    },
    f2: {
      freq: 1950,
      q: 1.9,
      gain: 0.5
    },
    f3: {
      freq: 3600,
      q: 1.7,
      gain: 0.25
    },
    tongueType: "lip-slap",
    tongueFreq: 2000
  },
  techniques: {
    articulations: ["accent", "staccato", "marcato", "ghost", "fall", "doit", "tenuto"],
    techniqueMethods: [
      "crisp synchronized tonguing",
      "offbeat sixteenth-note punches",
      "explosive fall-offs",
      "percussive ghost stabs"
    ],
    playingStyles: ["funk", "r&b", "soul", "ska", "afrobeats"],
    genreTechniques: {
      funk: ["staccato", "accent", "marcato", "fall", "ghost"],
      ska: ["staccato", "accent", "marcato"],
      afrobeats: ["staccato", "accent", "fall"]
    }
  }
};
