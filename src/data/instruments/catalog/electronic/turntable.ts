import type { InstrumentDef } from '../../schema/instrument-def';

export const turntable: InstrumentDef = {
  id: "turntable",
  name: "Turntable",
  family: "electronic",
  voicing: "single",
  elementaryModel: 9,
  makeupGain: 0.548,
  polyphony: 4,
  note: "DJ scratch / sampled texture",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
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
    materialDensity: 0.25,
    tension: 0.25,
    bodyResonanceVolume: 3,
    decayTimeFactor: 1.2,
    harmonicRichness: 0.95,
    articulationCapabilities: ["staccato", "accent", "scratch"]
  },
  techniques: {
    articulations: ["accent", "staccato", "scratch"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
