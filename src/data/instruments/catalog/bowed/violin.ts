import type { InstrumentDef } from '../../schema/instrument-def';

export const violin: InstrumentDef = {
  id: "violin",
  name: "Violin",
  family: "bowed",
  octave: 12,
  voicing: "single",
  bodyConstruction: "wood-box",
  excitationType: "bow",
  
  
  polyphony: 4,
  note: "Acoustic orchestral, chamber, and folk violin with estimated bowed source/filter and corpus responses, bridge hill presence, and distinct tango string, afterlength, and body contacts",
  acousticProfile: {
    sustain: "sustained",
    role: "melody",
    centre: 67,
    low: 55,
    high: 103,
    pan: -0.24,
    trim: -2,
    space: 0.42,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.72,
    tension: 0.88,
    bodyResonanceVolume: 2.2,
    decayTimeFactor: 3.2,
    harmonicRichness: 0.88,
    soundboardResonanceHz: 460,
    airResonanceHz: 280,
    transientSharpness: 0.85,
    excitationType: "bow",
    bodyConstruction: "wood-box"
  },
  bowedResonance: {
    bodyFreq: 460,
    bodyQ: 2.4,
    bodyGain: 0.48,
    bridgeHillFreq: 3100,
    bridgeHillQ: 2.6,
    bridgeHillGain: 0.42
  },
  physicalTechniques: ["accent", "staccato", "legato", "portato", "tremolo", "pizzicato", "vibrato", "spiccato", "chicharra", "tambor", "golpe-caja", "arrastre", "latigo", "arco", "detache", "shuffle-bow", "cross-string", "drone-double-stop", "ornamented-slide", "open-string-drone", "short-bow-accent", "double-stop", "folk-vibrato", "bluegrass-run", "celtic-ornament"],
  tuningAndMechanics: {
    tuningName: "GDAE Standard Violin Tuning",
    frets: 0,
    openStrings: [
      {
        name: "G3",
        note: "G3",
        midi: 55,
        frequencyHz: 196
      },
      {
        name: "D4",
        note: "D4",
        midi: 62,
        frequencyHz: 293.66
      },
      {
        name: "A4",
        note: "A4",
        midi: 69,
        frequencyHz: 440
      },
      {
        name: "E5",
        note: "E5",
        midi: 76,
        frequencyHz: 659.25
      }
    ]
  },
  performanceArticulations: {
    vibrato: {
      rateHz: 5.8,
      depthCents: 28,
      onsetDelayMs: 200
    },
    pizzicato: {
      damping: 0.35,
      pluckHardness: 0.7
    },
    bend: {
      maxSemitones: 2,
      speedMs: 110,
      curve: "s-curve"
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "portato",
      "tremolo",
      "pizzicato",
      "vibrato",
      "spiccato",
      "chicharra",
      "tambor",
      "golpe-caja",
      "arrastre",
      "latigo",
      "arco",
      "detache"
    ],
    techniqueMethods: [
      "détaché cantabile bowing",
      "spiccato bouncing bow",
      "sul ponticello bridge rasp",
      "sul tasto flautando",
      "martelé accented bow",
      "chicharra cricket scrape",
      "tambor damped G-string pizzicato with finger contact",
      "golpe-caja palm or knuckle strike on the instrument body",
      "arrastre bow-energy swell through authored approach notes",
      "látigo whip glissando",
      "sympathetic open string resonance"
    ],
    playingStyles: ["classical", "orchestral", "folk", "tango", "gypsy", "bluegrass", "celtic"],
    genreTechniques: {
      classical: ["arco", "legato", "tremolo", "vibrato", "spiccato", "pizzicato", "detache"],
      orchestral: ["legato", "tremolo", "vibrato", "spiccato", "arco"],
      tango: ["staccato", "accent", "pizzicato", "chicharra", "tambor", "golpe-caja", "arrastre", "latigo", "detache"],
      folk: ["staccato", "pizzicato", "accent", "detache"],
      gypsy: ["vibrato", "latigo", "spiccato", "legato"]
    }
  },
  physicalModel: {
    model: "bowed-string",
    parameters: {
      bowPressure: 0.75,
      bowSpeed: 0.82,
      airResonance: 0.78,
      bodyResonance: 0.85,
      transientSharpness: 0.85,
      stiffness: 0.88
    },
    
    
  }
};
