import type { InstrumentDef } from '../../schema/instrument-def';

export const jinghu: InstrumentDef = {
  id: "jinghu",
  name: "Jinghu",
  family: "bowed",
  octave: 12,
  voicing: "single",
  
  
  polyphony: 4,
  note: "Small high-pitched two-string Chinese bamboo fiddle leading Beijing Opera with piercing expressive tone",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 64,
    low: 48,
    high: 88,
    pan: -0.24,
    trim: -2,
    space: 0.42,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.8,
    tension: 0.92,
    bodyResonanceVolume: 0.5,
    decayTimeFactor: 0.8,
    harmonicRichness: 0.9
  },
  bowedResonance: {
    bodyFreq: 680,
    bodyQ: 3.5,
    bodyGain: 0.35,
    bridgeHillFreq: 3300,
    bridgeHillQ: 3.2,
    bridgeHillGain: 0.55
  },
  techniques: {
    articulations: ["arco", "staccato", "legato", "vibrato", "bend", "accent", "portamento"],
    techniqueMethods: [
      "horsehair bow trapped between strings",
      "snakeskin soundboard resonance",
      "rapid finger slides and vocal ornaments",
      "high-tension bamboo tube projection"
    ],
    playingStyles: ["beijing-opera", "chinese-classical", "traditional", "folk"],
    genreTechniques: {
      "beijing-opera": ["arco", "bend", "vibrato", "portamento", "accent"],
      "chinese-classical": ["legato", "vibrato", "arco"]
    }
  }
};
