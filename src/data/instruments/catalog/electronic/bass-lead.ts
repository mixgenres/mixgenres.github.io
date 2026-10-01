import type { InstrumentDef } from '../../schema/instrument-def';

export const bass_lead: InstrumentDef = {
  id: "bass-lead",
  name: "Bass lead synth",
  family: "electronic",
  voicing: "single",
  elementaryModel: 3,
  makeupGain: 40.000,
  polyphony: 4,
  note: "Aggressive synthesized bass lead with resonant lowpass filter envelope and distortion drive",
  acousticProfile: {
    sustain: "sustained",
    role: "bass",
    centre: 40,
    low: 28,
    high: 60,
    pan: 0,
    trim: 0,
    space: 0.08,
    ring: 2
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.35,
    tension: 0.45,
    bodyResonanceVolume: 18,
    decayTimeFactor: 2.8,
    harmonicRichness: 0.9,
    articulationCapabilities: ["staccato", "legato", "portamento", "bend"]
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide", "tenuto", "bend"],
    techniqueMethods: [
      "resonant filter envelope snap",
      "glide portamento",
      "monophonic voice priority",
      "drive saturation clipping"
    ],
    playingStyles: ["electronic", "techno", "synthwave", "electro", "industrial"],
    genreTechniques: {
      electronic: ["accent", "staccato", "slide"],
      techno: ["staccato", "accent", "tenuto"],
      synthwave: ["legato", "bend", "accent"]
    }
  }
};
