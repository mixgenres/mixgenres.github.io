import type { InstrumentDef } from '../../schema/instrument-def';

export const bandoneon: InstrumentDef = {
  id: "bandoneon",
  name: "Bandoneon",
  family: "bellows-and-keys",
  voicing: "chord",
  bodyConstruction: "wood-box",
  excitationType: "breath",
  elementaryModel: 10,
  makeupGain: 32.466,
  polyphony: 8,
  note: "Authentic 142-tone AA (Alfred Arnold) Rheinische Tonlage bisonoric bandoneon: 38 right + 33 left buttons, each with separate Zug/Druck pitches, physical button mapping compiled at phrase level, dual zinc octave reed banks, resonant wooden air chamber, knee-drop marcato, and expressive arrastre drags",
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
      pitchDragSemitones: -3,
      pressureRamp: true,
      velocityGrowth: 2.2
    },
    bend: {
      maxSemitones: 2,
      speedMs: 140,
      curve: "s-curve"
    },
    vibrato: {
      rateHz: 5.2,
      depthCents: 28,
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
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Bisonoric zinc octave reed pairs deliver the characteristic dry bandoneon spectrum, with distinct timbre shifts between pushing (cerrar) and pulling (abrir).",
      "The 142-tone Rheinische keyboard is physically mapped as 71 buttons x 2 bellows directions; the compiler must select a valid button/direction pair rather than treating direction as a free timbral control.",
      "Violent knee-drops deliver sudden sharp explosive marcato transients with air compression overblown edge.",
      "Slow opening air draw evokes sustained, weeping lyrical phrasing with controlled bellows pressure and restrained pallet/air noise."
    ]
  }
};
