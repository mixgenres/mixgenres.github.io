import type { InstrumentDef } from '../../schema/instrument-def';

export const bouzouki: InstrumentDef = {
  id: "bouzouki",
  name: "Irish / Greek Bouzouki",
  family: "plucked",
  voicing: "chord",
  courses: 2,
  bodyConstruction: "wood-box",
  excitationType: "hard-pick",
  
  
  polyphony: 8,
  note: "Long-necked teardrop lute with four double courses tuned in unisons and octaves, producing expansive metallic chime, driving countermelodies, and modal drones",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
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
    materialDensity: 0.78,
    tension: 0.88,
    bodyResonanceVolume: 10,
    decayTimeFactor: 2.4,
    harmonicRichness: 0.85,
    courses: 2,
    bodyConstruction: "wood-box",
    excitationType: "plectrum"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo", "tenuto", "slide"],
    techniqueMethods: [
      "continuous plectrum tremolo melodic lines",
      "modal drone backing with moving countermelodies",
      "hammer-on and pull-off triplets",
      "fast octave glissandi shifts",
      "syncopated rhythmic strumming with muted strikes"
    ],
    playingStyles: ["Celtic folk", "Greek rebetiko", "Balkan folk"],
    genreTechniques: {
      celtic: ["legato", "accent", "tremolo", "tenuto"],
      "greek-rebetiko": ["tremolo", "accent", "staccato"],
      balkan: ["accent", "staccato", "legato"]
    }
  },
  physicalModel: {
    model: "plucked-string",
    parameters: {
      stiffness: 0.6,
      damping: 0.3,
      inharmonicity: 0.25,
      bodyResonance: 0.74,
      transientSharpness: 0.78
    },
    
    
  }
};
