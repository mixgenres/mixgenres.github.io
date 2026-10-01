import type { InstrumentDef } from '../../schema/instrument-def';

export const kick: InstrumentDef = {
  id: "kick",
  name: "Kick Drum",
  family: "kit",
  drum: {
    low: 36,
    mid: 36,
    high: 36
  },
  voicing: "unpitched",
  elementaryModel: 4,
  makeupGain: 1.540,
  polyphony: 12,
  note: "Acoustic bass drum struck with foot pedal beater; provides the low-end punch and groove anchor",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0,
    trim: 2,
    space: 0.04,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.9,
    tension: 0.4,
    bodyResonanceVolume: 30,
    decayTimeFactor: 0.5,
    harmonicRichness: 0.3
  },
  techniques: {
    articulations: ["accent", "ghost", "low-tone", "staccato", "open"],
    techniqueMethods: [
      "heel-up power pedal stroke",
      "heel-down feathering touch",
      "beater buried damping",
      "beater rebound open resonance"
    ],
    playingStyles: ["rock", "pop", "funk", "jazz", "hip-hop", "electronic"],
    genreTechniques: {
      rock: ["accent", "staccato", "low-tone"],
      funk: ["accent", "ghost", "staccato"],
      jazz: ["ghost", "open", "accent"]
    }
  }
};
