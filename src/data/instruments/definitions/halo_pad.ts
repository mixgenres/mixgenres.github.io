import type { InstrumentDef } from '../types';

export const halo_pad: InstrumentDef = {
  id: "halo-pad",
  name: "Halo pad",
  family: "electronic",
  voicing: "chord",
  elementaryModel: 9,
  makeupGain: 0.548,
  polyphony: 8,
  note: "Ethereal synthesizer pad with high-frequency crystalline overtone halo and celestial shimmer",
  acousticProfile: {
    sustain: "sustained",
    role: "pad",
    centre: 64,
    low: 45,
    high: 88,
    pan: 0,
    trim: -7,
    space: 0.62,
    ring: 8
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.2,
    tension: 0.3,
    bodyResonanceVolume: 45,
    decayTimeFactor: 10,
    harmonicRichness: 0.72,
    articulationCapabilities: ["legato", "crescendo", "diminuendo"]
  },
  techniques: {
    articulations: ["legato", "tenuto", "crescendo", "diminuendo"],
    techniqueMethods: [
      "pitch-shifted shimmer reverb send",
      "additive upper partials",
      "slow envelope dynamic breathing",
      "diffuse stereo spread"
    ],
    playingStyles: ["ambient", "cinematic", "new-age", "soundtrack"],
    genreTechniques: {
      ambient: ["legato", "tenuto", "crescendo", "diminuendo"],
      cinematic: ["legato", "tenuto"]
    }
  }
};
