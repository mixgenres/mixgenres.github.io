import type { InstrumentDef } from '../../schema/instrument-def';

export const voice: InstrumentDef = {
  id: "voice",
  name: "Vocal guide (oohs)",
  family: "voice",
  octave: 12,
  voicing: "single",
  
  
  polyphony: 4,
  note: "General MIDI Voice Oohs guide tone; it follows the melody but is not a recorded singer.",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 64,
    // Keep the guide's playable floor low enough for bass-register traditions
    // such as Kargyraa. The standard MIDI vowel timbre remains only a pitch
    // guide; the broader range models human access, not its missing timbre.
    low: 38,
    high: 81,
    pan: 0,
    trim: -2,
    space: 0.42,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.5,
    tension: 0.6,
    bodyResonanceVolume: 8,
    decayTimeFactor: 1.5,
    harmonicRichness: 0.6
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portato", "vibrato", "scoop", "fall"],
    techniqueMethods: ["breath onset", "legato phrase", "vowel shaping", "chest/head register"],
    playingStyles: ["soul", "pop"],
    genreTechniques: {
      soul: ["legato", "vibrato"],
      pop: ["staccato", "accent"]
    }
  }
};
