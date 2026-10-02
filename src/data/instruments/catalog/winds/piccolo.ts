import type { InstrumentDef } from '../../schema/instrument-def';

export const piccolo: InstrumentDef = {
  id: "piccolo",
  name: "Piccolo",
  family: "winds",
  octave: 12,
  voicing: "single",
  elementaryModel: 7,
  makeupGain: 0.466,
  polyphony: 4,
  note: "Half-size transverse flute pitched an octave above concert flute with piercing, brilliant, soaring highs",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 69,
    low: 55,
    high: 92,
    pan: 0.26,
    trim: -2,
    space: 0.34,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_edge_blown",
    materialDensity: 0.3,
    tension: 0.65,
    bodyResonanceVolume: 0.3,
    decayTimeFactor: 0.3,
    harmonicRichness: 0.5
  },
  formantProfile: {
    f1: {
      freq: 1750,
      q: 3.2,
      gain: 0.85
    },
    f2: {
      freq: 3800,
      q: 2.8,
      gain: 0.4
    },
    f3: {
      freq: 7200,
      q: 2.2,
      gain: 0.2
    },
    tongueType: "chiff",
    tongueFreq: 4200
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "trill", "tremolo"],
    techniqueMethods: [
      "tight embouchure airstream",
      "crisp double-tonguing",
      "flutter-tonguing",
      "soaring top-register penetration"
    ],
    playingStyles: ["orchestral", "marching", "celtic", "cinematic"],
    genreTechniques: {
      orchestral: ["accent", "staccato", "legato", "trill"],
      celtic: ["staccato", "trill", "accent"]
    }
  }
};
