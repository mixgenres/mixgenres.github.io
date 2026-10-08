import type { InstrumentDef } from '../../schema/instrument-def';

export const repinique: InstrumentDef = {
  id: "repinique",
  name: "Repinique",
  family: "hand-drums",
  drum: {
    low: 65,
    mid: 66,
    high: 66
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "high-pitched Brazilian samba drum; open calls and sharp rim attacks",
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
    tension: 0.95,
    bodyResonanceVolume: 6,
    decayTimeFactor: 0.5,
    harmonicRichness: 0.85
  },
  techniques: {
    articulations: ["accent", "open", "ghost", "rimshot", "roll"],
    techniqueMethods: ["open head call", "rim attack", "ghosted support stroke", "rearticulated roll"],
    playingStyles: ["samba-regional", "samba-enredo", "pagode", "genre-native performance"],
    genreTechniques: {}
  }
};
