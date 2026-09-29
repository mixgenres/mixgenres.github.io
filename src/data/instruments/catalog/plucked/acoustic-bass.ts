import type { InstrumentDef } from '../../schema/instrument-def';

export const acoustic_bass: InstrumentDef = {
  id: "acoustic-bass",
  name: "Acoustic bass guitar",
  family: "plucked",
  voicing: "bass",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  elementaryModel: 3,
  makeupGain: 0.685,
  polyphony: 4,
  note: "Hollow-body acoustic bass guitar with resonant woody body decay and round warmth",
  acousticProfile: {
    sustain: "decaying",
    role: "bass",
    centre: 40,
    low: 28,
    high: 57,
    pan: 0,
    trim: 1,
    space: 0.1,
    ring: 1.4
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.58,
    tension: 0.5,
    bodyResonanceVolume: 70,
    decayTimeFactor: 2.9,
    harmonicRichness: 0.55,
    articulationCapabilities: ["pizzicato", "arco", "slap-bass", "palm-mute"],
    genreAdaptable: true
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "ghost", "palm-mute", "tenuto", "harmonic", "pizzicato", "arco", "slap"],
    techniqueMethods: [
      "acoustic thumb pluck",
      "two-finger pad attack",
      "body damping",
      "soundboard acoustic resonance"
    ],
    playingStyles: ["folk", "acoustic", "latin", "jazz", "cumbia"],
    genreTechniques: {
      folk: ["accent", "legato", "tenuto"],
      acoustic: ["legato", "ghost", "palm-mute"],
      latin: ["staccato", "accent", "ghost"]
    }
  }
};
