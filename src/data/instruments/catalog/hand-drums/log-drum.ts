import type { InstrumentDef } from '../../schema/instrument-def';

export const log_drum: InstrumentDef = {
  id: "log-drum",
  name: "Slit log drum",
  family: "hand-drums",
  drum: {
    low: 47,
    mid: 48,
    high: 50
  },
  voicing: "unpitched",
  elementaryModel: 4,
  makeupGain: 12.253,
  polyphony: 8,
  note: "Hollowed resonant hardwood log with tuned acoustic tongue slits delivering organic, woody percussive melodies",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.3,
    trim: -1,
    space: 0.18,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.5,
    tension: 0.6,
    bodyResonanceVolume: 14,
    decayTimeFactor: 0.9,
    harmonicRichness: 0.3
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "roll", "open"],
    techniqueMethods: [
      "rubber mallet slit strike",
      "bare finger tap",
      "wooden box resonance decay",
      "alternating pitch tongue patterns"
    ],
    playingStyles: ["african-traditional", "tribal", "cinematic", "ambient", "world"],
    genreTechniques: {
      "african-traditional": ["accent", "staccato", "open", "roll"],
      ambient: ["open", "ghost", "staccato"]
    }
  }
};
