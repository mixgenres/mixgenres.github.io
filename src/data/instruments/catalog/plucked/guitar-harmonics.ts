import type { InstrumentDef } from '../../schema/instrument-def';

export const guitar_harmonics: InstrumentDef = {
  id: "guitar-harmonics",
  name: "Guitar harmonics",
  family: "plucked",
  voicing: "single",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "nail",
  elementaryModel: 26,
  makeupGain: 0.378,
  polyphony: 4,
  note: "Pure acoustic guitar natural and artificial bell harmonics ringing at nodal division points",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
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
    materialDensity: 0.6,
    tension: 0.85,
    bodyResonanceVolume: 3,
    decayTimeFactor: 2.2,
    harmonicRichness: 0.9,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "nail"
  },
  techniques: {
    articulations: ["accent", "tenuto", "legato", "staccato", "harmonic", "vibrato"],
    techniqueMethods: [
      "light fingertip touching harmonic nodes (12th, 7th, 5th frets)",
      "artificial pinch harmonic pluck",
      "open string sympathetic ringing",
      "behind-the-nut chimes"
    ],
    playingStyles: ["folk", "ambient", "fusion", "classical", "acoustic"],
    genreTechniques: {
      ambient: ["tenuto", "harmonic", "legato"],
      folk: ["harmonic", "accent", "tenuto"],
      fusion: ["harmonic", "vibrato", "accent"]
    }
  }
};
