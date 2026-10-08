import type { InstrumentDef } from '../../schema/instrument-def';

export const accordion: InstrumentDef = {
  id: "accordion",
  name: "Accordion",
  family: "bellows-and-keys",
  voicing: "chord",
  
  
  polyphony: 8,
  note: "Free-reed aerophone with hand-pumped bellows driving dual/triple reed banks in resonant wooden tone chambers with musette tremolo tuning",
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 60,
    low: 41,
    high: 84,
    pan: 0.2,
    trim: -2,
    space: 0.26,
    ring: 2,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "bellows_free_reed",
    materialDensity: 0.75,
    tension: 0.75,
    bodyResonanceVolume: 12,
    decayTimeFactor: 1,
    harmonicRichness: 0.85
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "marcato", "tremolo"],
    techniqueMethods: [
      "bellows shake and tremolo pumping",
      "push-pull bellows direction reversal",
      "musette register stop switching",
      "stradella bass button counter-rhythm",
      "ricochet bellows bouncing"
    ],
    playingStyles: ["cumbia", "vallenato", "forro", "chanson", "celtic", "zydeco", "tango"],
    genreTechniques: {
      cumbia: ["accent", "staccato", "legato"],
      vallenato: ["accent", "marcato", "tremolo"],
      forro: ["staccato", "accent", "legato"],
      zydeco: ["accent", "marcato", "staccato"]
    }
  },
  physicalModel: {
    model: "blown-reed",
    parameters: {
      reedStiffness: 0.6,
      airResonance: 0.8,
      bodyResonance: 0.7,
      breathNoise: 0.12,
      transientSharpness: 0.55
    },
    
    
  }
};
