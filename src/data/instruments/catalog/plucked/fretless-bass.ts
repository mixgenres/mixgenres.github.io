import type { InstrumentDef } from '../../schema/instrument-def';

export const fretless_bass: InstrumentDef = {
  id: "fretless-bass",
  name: "Fretless bass",
  family: "plucked",
  voicing: "bass",
  courses: 1,
  bodyConstruction: "solid-electric",
  excitationType: "fingerpad",
  elementaryModel: 3,
  makeupGain: 0.685,
  polyphony: 4,
  note: "Fretless electric bass producing continuous vocal mwah resonance and singing vibrato",
  acousticProfile: {
    sustain: "sustained",
    role: "bass",
    centre: 40,
    low: 28,
    high: 60,
    pan: 0,
    trim: 1,
    space: 0.12,
    ring: 2.4
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.82,
    tension: 0.55,
    bodyResonanceVolume: 9,
    decayTimeFactor: 3.8,
    harmonicRichness: 0.65,
    articulationCapabilities: ["mwah-growl", "fretless-slide", "vibrato", "soft-finger"],
    genreAdaptable: true
  },
  techniques: {
    articulations: ["accent", "legato", "vibrato", "slide", "portamento", "tenuto", "ghost", "mwah-growl", "fingerstyle"],
    techniqueMethods: [
      "finger pad acoustic pull",
      "vocal vibrato across fingerboard",
      "slow portamento glissando",
      "side-of-finger attack"
    ],
    playingStyles: ["jazz", "fusion", "world", "contemporary", "pop"],
    genreTechniques: {
      jazz: ["legato", "vibrato", "portamento", "accent"],
      fusion: ["slide", "vibrato", "legato", "ghost"],
      world: ["legato", "tenuto", "vibrato"]
    }
  }
};
