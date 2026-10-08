import type { InstrumentDef } from '../../schema/instrument-def';

export const mandolin: InstrumentDef = {
  id: "mandolin",
  name: "Mandolin",
  family: "plucked",
  octave: 12,
  voicing: "single",
  courses: 2,
  bodyConstruction: "wood-box",
  excitationType: "plectrum",
  
  
  polyphony: 4,
  note: "Bright tremolo/plucked folk color",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 69,
    low: 55,
    high: 88,
    pan: 0.38,
    trim: 0,
    space: 0.24,
    ring: 1.2
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.75,
    tension: 0.92,
    bodyResonanceVolume: 4,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.85,
    courses: 2,
    bodyConstruction: "wood-box",
    excitationType: "plectrum"
  },
  techniques: {
    articulations: ["accent", "staccato", "tremolo", "legato"],
    techniqueMethods: ["flatpick tremolo", "alternate picking", "double-stop chop"],
    playingStyles: ["bluegrass"],
    genreTechniques: {
      bluegrass: ["tremolo", "staccato"]
    }
  }
};
