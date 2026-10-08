import type { InstrumentDef } from '../../schema/instrument-def';

export const dizi: InstrumentDef = {
  id: "dizi",
  name: "Dizi",
  family: "winds",
  voicing: "single",
  
  
  polyphony: 4,
  note: "Chinese transverse bamboo flute equipped with a mo-kong membrane hole covered by a thin reed tissue (dimo), radiating bright, buzzing, resonant, and soaring lyrical timbre",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 74,
    low: 60,
    high: 96,
    pan: 0.24,
    trim: -2,
    space: 0.4,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_membrane_flute",
    materialDensity: 0.4,
    tension: 0.55,
    bodyResonanceVolume: 0.7,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.6
  },
  formantProfile: {
    f1: {
      freq: 1150,
      q: 3.8,
      gain: 0.85
    },
    f2: {
      freq: 2750,
      q: 3.5,
      gain: 0.45
    },
    f3: {
      freq: 5400,
      q: 2.8,
      gain: 0.25
    },
    tongueType: "chiff",
    tongueFreq: 3200
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "trill",
      "slide",
      "tremolo",
      "tenuto",
      "vibrato"
    ],
    techniqueMethods: [
      "duo-yin rapid sliding glissando into target note",
      "chan-yin delicate throat and finger vibrato",
      "hua-she rapid flutter tonguing",
      "du-yin crisp staccato single and double tonguing",
      "die-yin finger tapping ornamentation"
    ],
    playingStyles: ["chinese-classical", "bangdi-northern", "qudi-southern", "folk", "soundtrack"],
    genreTechniques: {
      "chinese-classical": ["legato", "trill", "slide", "tremolo", "accent"],
      "bangdi-northern": ["accent", "staccato", "trill", "tremolo"],
      "qudi-southern": ["legato", "tenuto", "slide", "vibrato"]
    }
  },
  physicalModel: {
    model: "blown-air",
    parameters: {
      airResonance: 0.86,
      breathNoise: 0.24,
      transientSharpness: 0.62
    },
    
    
  }
};
