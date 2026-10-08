import type { InstrumentDef } from '../../schema/instrument-def';

export const bandoneon: InstrumentDef = {
  id: "bandoneon",
  name: "Bandoneon",
  family: "bellows-and-keys",
  voicing: "chord",
  bodyConstruction: "wood-box",
  excitationType: "breath",
  
  
  polyphony: 8,
  note: "142-tone Rheinische Tonlage bisonoric bandoneon model: 38 right + 33 left buttons with separate Zug/Druck pitches, dry 8′/4′ octave reeds and bellows pressure shaping. Synthesis approximation, not a recorded Alfred Arnold instrument.",
  acousticProfile: {
    sustain: "sustained",
    role: "harmony",
    centre: 58,
    low: 36,
    high: 95,
    pan: -0.1,
    trim: -1,
    space: 0.3,
    ring: 2.2,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "bellows_free_reed",
    materialDensity: 0.85,
    tension: 0.88,
    bodyResonanceVolume: 18,
    decayTimeFactor: 2.2,
    harmonicRichness: 0.94,
    transientSharpness: 0.88,
    airResonanceHz: 220,
    soundboardResonanceHz: 820,
    bodyConstruction: "wood-box",
    excitationType: "breath",
    excitationSaturation: "self-owned"
  },
  tuningAndMechanics: {
    tuningName: "142-Tone AA Bisonoric Rheinische Tonlage (71 Buttons)",
    keyRange: {
      lowNote: "C2",
      highNote: "B6",
      lowMidi: 36,
      highMidi: 95
    }
  },
  performanceArticulations: {
    marcato: {
      decayTimeSec: 0.15,
      transientSharpness: 0.92
    },
    arrastre: {
      preBeatOffsetMs: -85,
      pitchDragSemitones: 0,
      pressureRamp: true,
      velocityGrowth: 2.2
    },
    bend: {
      maxSemitones: 0.08,
      speedMs: 140,
      curve: "s-curve"
    },
    vibrato: {
      rateHz: 5.2,
      depthCents: 0,
      onsetDelayMs: 250
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "marcato",
      "tremolo",
      "portato",
      "arrastre",
      "bellows-slap",
      "golpe-caja",
      "cluster",
      "chapa",
      "vibrato",
      "legato_squeeze"
    ],
    techniqueMethods: [
      "knee drop marcato impact",
      "bellows opening sigh swell",
      "fast button articulation with air release",
      "arrastre drag into accented downbeat",
      "percussive bellows slap",
      "golpe de caja wooden thud",
      "cluster chord strike",
      "chapa metallic damp"
    ],
    playingStyles: ["tango", "nuevo-tango", "milonga", "chamame", "folk", "valses-criollos"],
    genreTechniques: {
      tango: ["marcato", "accent", "staccato", "tenuto", "arrastre", "bellows-slap", "golpe-caja", "legato_squeeze"],
      milonga: ["staccato", "accent", "marcato"],
      "nuevo-tango": ["legato", "tenuto", "marcato", "cluster", "arrastre"],
      chamame: ["accent", "staccato", "legato", "tremolo"],
      folk: ["legato", "staccato", "accent"],
      "valses-criollos": ["legato", "tenuto", "accent"]
    }
  },
  physicalModel: {
    model: "blown-reed",
    parameters: {
      reedStiffness: 0.72,
      airResonance: 0.78,
      bodyResonance: 0.75,
      breathNoise: 0.12,
      transientSharpness: 0.88,
      stiffness: 0.82,
      nonlinearDrive: 0.65
    },
    
    
  }
};
