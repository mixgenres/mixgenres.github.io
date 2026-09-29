import type { InstrumentDef } from '../../schema/instrument-def';

export const organ: InstrumentDef = {
  id: "organ",
  name: "Tonewheel organ",
  family: "bellows-and-keys",
  voicing: "chord",
  elementaryModel: 13,
  makeupGain: 0.417,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 58,
    low: 36,
    high: 84,
    pan: 0.22,
    trim: -3,
    space: 0.2,
    ring: 2,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.55,
    tension: 0.35,
    bodyResonanceVolume: 80,
    decayTimeFactor: 6,
    harmonicRichness: 0.72,
    articulationCapabilities: ["legato", "staccato", "accent", "swell"],
    genreAdaptable: true
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "crescendo"],
    techniqueMethods: ["velocity-shaped attack", "fingered chord voicing", "register coupling"],
    playingStyles: ["folk", "pop", "world"]
  }
};
