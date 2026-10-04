import type { InstrumentDef } from '../../schema/instrument-def';

export const string_ensemble: InstrumentDef = {
  id: "string-ensemble",
  name: "String Ensemble",
  family: "bowed",
  voicing: "chord",
  elementaryModel: 6,
  makeupGain: 1.0296,
  polyphony: 8,
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 64,
    low: 45,
    high: 86,
    pan: -0.2,
    trim: -4,
    space: 0.5,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.5,
    tension: 0.7,
    bodyResonanceVolume: 60,
    decayTimeFactor: 2.2,
    harmonicRichness: 0.7
  },
  bowedResonance: {
    bodyFreq: 380,
    bodyQ: 1.8,
    bodyGain: 0.45,
    bridgeHillFreq: 2400,
    bridgeHillQ: 2,
    bridgeHillGain: 0.35
  },
  techniques: {
    articulations: ["accent", "legato", "portato", "slow-attack", "tremolo", "pizzicato", "staccato", "spiccato", "marcato", "sul-ponticello", "sul-tasto", "portamento"],
    techniqueMethods: ["arco", "detaché", "legato bow", "slow bow attack", "tremolo bowing", "pizzicato", "spiccato", "sul ponticello", "sul tasto", "portamento"],
    playingStyles: ["orchestral", "cinematic", "pop", "tango", "salsa", "classical"]
  },
  physicalTechniques: ["accent", "legato", "portato", "slow-attack", "tremolo", "pizzicato", "staccato", "spiccato", "marcato", "sul-ponticello", "sul-tasto", "portamento"]
};
