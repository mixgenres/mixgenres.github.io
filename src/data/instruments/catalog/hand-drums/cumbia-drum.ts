import type { InstrumentDef } from '../../schema/instrument-def';

export const cumbia_drum: InstrumentDef = {
  id: "cumbia-drum",
  name: "Tambor llamador",
  family: "hand-drums",
  drum: {
    low: 45,
    mid: 47,
    high: 48
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Colombian single-headed llamador drum maintaining the relentless, hypnotic offbeat pulse of authentic cumbia",
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
    materialDensity: 0.85,
    tension: 0.65,
    bodyResonanceVolume: 22,
    decayTimeFactor: 1.1,
    harmonicRichness: 0.6
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "open", "low-tone"],
    techniqueMethods: [
      "sharp hand slap on offbeats",
      "palm resting muting",
      "dry resonant skin pop",
      "strict metronomic cadence"
    ],
    playingStyles: ["cumbia", "porro", "bullerengue", "colombian-folk"],
    genreTechniques: {
      cumbia: ["accent", "staccato", "ghost", "open"],
      bullerengue: ["accent", "open", "low-tone"]
    }
  }
};
