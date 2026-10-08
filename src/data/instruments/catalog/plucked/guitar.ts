import type { InstrumentDef } from '../../schema/instrument-def';

export const guitar: InstrumentDef = {
  id: "guitar",
  name: "Guitar",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  
  
  polyphony: 8,
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 55,
    low: 40,
    high: 76,
    pan: 0.22,
    trim: 0,
    space: 0.24,
    ring: 2.2
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.6,
    tension: 0.7,
    bodyResonanceVolume: 12,
    decayTimeFactor: 2.5,
    harmonicRichness: 0.6,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "fingerpad",
    articulationCapabilities: [
      "pluck", "rest-stroke", "palm-mute", "rasgueado", "alzapua", "golpe", "tremolo", "ponticello", "tasto"
    ],
    genreAdaptable: true
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute", "dead-note", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "arrastre", "harmonic", "natural-harmonic", "artificial-harmonic", "bend", "vibrato", "hammer-on", "pull-off", "slide", "glissando", "chord-rake", "strum", "arpeggio", "fingerstyle", "flatpick", "hybrid-pick", "double-stop", "muted-sixteenth", "short-chord-stab", "power-chord", "riff"],
    techniqueMethods: ["fingerstyle", "flatpick", "hybrid pick", "strum", "rasgueado", "golpe", "picado", "alzapúa", "tremolo", "palm muting", "dead notes", "bends", "hammer-on", "pull-off", "slide", "artificial harmonics"],
    playingStyles: ["flamenco", "funk", "jazz", "rock", "metal", "country", "bossa-nova", "folk"],
    genreTechniques: {
      flamenco: ["rasgueado", "golpe", "picado", "alzapua", "tremolo", "arrastre"],
      funk: ["muted-sixteenth", "dead-note", "short-chord-stab"],
      jazz: ["chord-rake", "arpeggio", "legato", "double-stop"],
      rock: ["power-chord", "riff", "palm-mute", "bend", "vibrato"],
      metal: ["palm-mute", "alternate-picking", "riff", "harmonic"],
      country: ["flatpick", "hybrid-pick", "double-stop", "bend"]
    }
  },
  physicalTechniques: ["fingerstyle", "flatpick", "pick", "hybrid-pick", "rasgueado", "abanico", "golpe", "picado", "alzapua", "tremolo", "arrastre", "palm-mute", "dead-note", "harmonic", "natural-harmonic", "artificial-harmonic", "bend", "vibrato", "hammer-on", "pull-off", "slide", "glissando", "chord-rake", "strum", "arpeggio", "percussive-body-hit", "muted-sixteenth", "short-chord-stab", "syncopated-chop", "extended-chord", "voice-leading", "comping", "octave-line", "legato", "legato-single-note", "power-chord", "riff", "tight-palm-mute", "alternate-picking", "gallop", "chug", "fast-position-shift", "open-string", "double-stop", "offbeat-skank", "muted-strum"],
  variants: [
    { id: "nylon", name: "Nylon string", bodyConstruction: "wood-box", courses: 1, excitationType: "nail", luthierPhysics: { category: "strum_friction_pluck", materialDensity: 0.68, tension: 0.78, bodyResonanceVolume: 11, decayTimeFactor: 1.9, harmonicRichness: 0.88, soundboardResonanceHz: 190, airResonanceHz: 98, excitationType: "nail" }, techniqueAdditions: ["rasgueado", "golpe", "picado", "alzapua", "tremolo", "arrastre"] },
    { id: "steel-acoustic", name: "Steel string acoustic", bodyConstruction: "wood-box", courses: 1, excitationType: "plectrum", luthierPhysics: { category: "strum_friction_pluck", materialDensity: 0.72, tension: 0.88, bodyResonanceVolume: 16, decayTimeFactor: 2.8, harmonicRichness: 0.75, soundboardResonanceHz: 205, airResonanceHz: 105, excitationType: "plectrum" } },
    { id: "solid-electric", name: "Solid body electric", bodyConstruction: "solid-electric", courses: 1, excitationType: "hard-pick", polyphony: 8, luthierPhysics: { category: "strum_friction_pluck", materialDensity: 0.7, tension: 0.8, bodyResonanceVolume: 5, decayTimeFactor: 3.2, harmonicRichness: 0.88, pickupBlend: 0.6, fretBuzzAmount: 0.15, bodyConstruction: "solid-electric", excitationType: "hard-pick" }, techniqueAdditions: ["power-chord", "riff", "palm-mute", "bend", "vibrato"] },
    { id: "archtop-electric", name: "Archtop electric", bodyConstruction: "wood-box", courses: 1, excitationType: "plectrum", luthierPhysics: { category: "strum_friction_pluck", materialDensity: 0.7, tension: 0.76, bodyResonanceVolume: 13, decayTimeFactor: 2.5, harmonicRichness: 0.7, pickupBlend: 0.45, bodyConstruction: "wood-box", excitationType: "plectrum" }, techniqueAdditions: ["chord-rake", "extended-chord", "voice-leading", "comping"] },
    { id: "12-string", name: "12-string", bodyConstruction: "wood-box", courses: 6, excitationType: "plectrum", luthierPhysics: { category: "strum_friction_pluck", materialDensity: 0.62, tension: 0.92, bodyResonanceVolume: 18, decayTimeFactor: 2.1, harmonicRichness: 0.94, courses: 6, bodyConstruction: "wood-box", excitationType: "plectrum" } }
  ]
};
