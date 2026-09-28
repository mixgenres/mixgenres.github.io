import type { InstrumentDef } from '../types';

export const cello: InstrumentDef = {
  id: "cello",
  name: "Cello",
  family: "bowed",
  octave: -12,
  voicing: "single",
  bodyConstruction: "wood-box",
  excitationType: "bow",
  elementaryModel: 6,
  makeupGain: 3.508,
  polyphony: 4,
  note: "Acoustic violoncello with resonant spruce body, deep wound steel string inertia, 110Hz Helmholtz air bloom, 180Hz corpus wood mode, 1.55kHz bridge hill, expressive arrastre, and rich cantabile phrasing",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 50,
    low: 36,
    high: 84,
    pan: -0.24,
    trim: -1,
    space: 0.42,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.65,
    tension: 0.75,
    bodyResonanceVolume: 25,
    decayTimeFactor: 2.8,
    harmonicRichness: 0.82,
    soundboardResonanceHz: 180,
    airResonanceHz: 110,
    transientSharpness: 0.82,
    excitationType: "bow",
    bodyConstruction: "wood-box"
  },
  bowedResonance: {
    bodyFreq: 180,
    bodyQ: 2.5,
    bodyGain: 0.55,
    bridgeHillFreq: 1550,
    bridgeHillQ: 2.0,
    bridgeHillGain: 0.35
  },
  tuningAndMechanics: {
    tuningName: "CGDA Standard Cello Tuning",
    frets: 0,
    openStrings: [
      {
        name: "C2",
        note: "C2",
        midi: 36,
        frequencyHz: 65.41
      },
      {
        name: "G2",
        note: "G2",
        midi: 43,
        frequencyHz: 98.0
      },
      {
        name: "D3",
        note: "D3",
        midi: 50,
        frequencyHz: 146.83
      },
      {
        name: "A3",
        note: "A3",
        midi: 57,
        frequencyHz: 220.0
      }
    ]
  },
  performanceArticulations: {
    vibrato: {
      rateHz: 5.2,
      depthCents: 32,
      onsetDelayMs: 250
    },
    pizzicato: {
      damping: 0.30,
      pluckHardness: 0.65
    },
    bend: {
      maxSemitones: 2,
      speedMs: 130,
      curve: "s-curve"
    },
    arrastre: {
      preBeatOffsetMs: -90,
      pitchDragSemitones: -2,
      pressureRamp: true,
      velocityGrowth: 1.8
    }
  },
  techniques: {
    articulations: [
      "arco",
      "pizzicato",
      "legato",
      "staccato",
      "tenuto",
      "tremolo",
      "arrastre",
      "portato",
      "vibrato",
      "accent",
      "spiccato",
      "chicharra",
      "detache"
    ],
    techniqueMethods: [
      "smooth bow legato cantabile",
      "finger pizzicato pluck",
      "tango arrastre bow drag",
      "sul tasto flautando",
      "sul ponticello metallic rasp",
      "heavy string catch transient",
      "spiccato bouncing bow",
      "open string sympathetic resonance"
    ],
    playingStyles: ["classical", "tango", "folk", "cinematic", "pop", "chamber"],
    genreTechniques: {
      classical: ["arco", "legato", "tenuto", "pizzicato", "portato", "detache"],
      tango: ["arrastre", "staccato", "accent", "arco", "chicharra", "detache"],
      cinematic: ["legato", "tenuto", "tremolo", "vibrato", "arco"],
      folk: ["arco", "pizzicato", "accent", "detache"],
      chamber: ["arco", "legato", "pizzicato", "vibrato"]
    }
  },
  physicalModel: {
    model: "bowed-string",
    parameters: {
      bowPressure: 0.82,
      bowSpeed: 0.75,
      airResonance: 0.85,
      bodyResonance: 0.88,
      transientSharpness: 0.82,
      stiffness: 0.75
    },
    signalChain: ["preamp", "eq", "reverb"],
    synthesisNotes: [
      "Heavy wound string stick-slip oscillation captures the authentic settling delay and guttural rasp of lower cello registers.",
      "Large wooden corpus mode (180Hz) and deep Helmholtz air mode (110Hz) deliver rich, resonant low-end presence.",
      "Supports lyrical cantabile vibrato, deep tango arrastre dragging scoops, crisp spiccato bouncing, and resonant woody pizzicato."
    ]
  }
};
