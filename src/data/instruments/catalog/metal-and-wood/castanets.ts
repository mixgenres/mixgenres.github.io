import type { InstrumentDef } from '../../schema/instrument-def';

export const castanets: InstrumentDef = {
  id: "castanets",
  name: "Castanets",
  family: "metal-and-wood",
  drum: {
    low: 76,
    mid: 77,
    high: 77
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Authentic paired Spanish hardwood castañuelas (granadillo/ebony) with hembra (high right hand) for cascading carretilla rolls and macho (low left hand) for single downbeat golpes",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.46,
    trim: -5,
    space: 0.14,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.75,
    tension: 0.85,
    bodyResonanceVolume: 0.18,
    decayTimeFactor: 0.12,
    harmonicRichness: 0.65,
    soundboardResonanceHz: 880,
    airResonanceHz: 3400
  },
  techniques: {
    articulations: ["accent", "staccato", "roll", "flam", "ghost", "golpe", "open"],
    techniqueMethods: [
      "carretilla four-finger cascading roll (hembra right hand)",
      "golpe single accented downbeat snap (macho left hand)",
      "postizo thumb-damped muted click",
      "flamenco dance rhythmic accompaniment"
    ],
    playingStyles: ["flamenco", "classical-spanish", "folklorico", "orchestral"],
    genreTechniques: {
      flamenco: ["accent", "roll", "staccato", "flam", "golpe"],
      "classical-spanish": ["roll", "accent", "staccato"]
    }
  },
  physicalModel: {
    model: "metal-impact",
    parameters: {
      bodyResonance: 0.75,
      airResonance: 0.85,
      transientSharpness: 0.98,
      damping: 0.90
    },
    
    
  }
};
