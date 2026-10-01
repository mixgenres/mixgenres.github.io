import type { InstrumentDef } from '../../schema/instrument-def';

export const saw_lead: InstrumentDef = {
  id: "saw-lead",
  name: "Saw lead",
  family: "electronic",
  octave: 12,
  voicing: "single",
  elementaryModel: 9,
  makeupGain: 17.033,
  polyphony: 4,
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 72,
    low: 55,
    high: 96,
    pan: 0.1,
    trim: -4,
    space: 0.32,
    ring: 3
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.3,
    tension: 0.5,
    bodyResonanceVolume: 8,
    decayTimeFactor: 2.5,
    harmonicRichness: 0.98,
    articulationCapabilities: ["staccato", "legato", "portamento", "vibrato"]
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
