import type { InstrumentDef } from '../../schema/instrument-def';

export const harp: InstrumentDef = {
  id: "harp",
  name: "Harp",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  elementaryModel: 0,
  makeupGain: 11.000,
  polyphony: 8,
  note: "Acoustic concert harp sounding rich polyphonic arpeggiations and sustained lyrical chords",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 62,
    low: 36,
    high: 88,
    pan: -0.3,
    trim: 0,
    space: 0.45,
    ring: 4
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.5,
    tension: 0.7,
    bodyResonanceVolume: 50,
    decayTimeFactor: 4,
    harmonicRichness: 0.65
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "harmonic", "tremolo", "crescendo"],
    techniqueMethods: [
      "finger pad plucking",
      "rapid arpeggiation",
      "pedal accidentals adjustment",
      "palm damping"
    ],
    playingStyles: ["classical", "cinematic", "celtic", "pop", "folk"],
    genreTechniques: {
      classical: ["legato", "tenuto", "harmonic", "accent"],
      cinematic: ["legato", "tenuto", "harmonic", "crescendo"],
      celtic: ["legato", "staccato", "accent"]
    }
  }
};
