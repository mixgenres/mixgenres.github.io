import type { InstrumentDef } from '../../schema/instrument-def';

export const spring_reverb: InstrumentDef = {
  id: "spring-reverb",
  name: "Spring reverb",
  family: "electronic",
  voicing: "unpitched",
  elementaryModel: 0,
  makeupGain: 0.458,
  polyphony: 8,
  note: "spring tank reverb; boingy metallic decay",
  acousticProfile: {
    sustain: "sustained",
    role: "effect",
    centre: 60,
    low: 36,
    high: 90,
    pan: 0,
    trim: -2,
    space: 0.3,
    ring: 4
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.65,
    tension: 0.6,
    bodyResonanceVolume: 8,
    decayTimeFactor: 3,
    harmonicRichness: 0.65
  },
  techniques: {
    articulations: ["sustain", "accent"],
    techniqueMethods: ["feedback level", "decay and tone control", "spring excitation response"],
    playingStyles: ["dub", "surf", "ambient", "rock", "studio effect"],
    genreTechniques: {}
  }
};
