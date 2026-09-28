import type { InstrumentDef } from '../types';

export const requinto: InstrumentDef = {
  id: "requinto",
  name: "Requinto Guitar",
  family: "plucked",
  octave: 12,
  voicing: "single",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "plectrum",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 4,
  note: "Authentic Latin/Mexican 6-string Requinto guitar tuned a fourth higher (A2-D3-G3-C4-E4-A4), with 535mm scale, deep 115mm wooden body, crystalline mordiente snap, fast picado scales, tremolo, and alzapúa",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 67,
    low: 45,
    high: 93,
    pan: 0.18,
    trim: 0,
    space: 0.24,
    ring: 2.2
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.72,
    tension: 0.88,
    bodyResonanceVolume: 8.5,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.84,
    soundboardResonanceHz: 330,
    airResonanceHz: 148,
    transientSharpness: 0.92,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "plectrum"
  },
  tuningAndMechanics: {
    tuningName: "ADGCEA Requinto Standard Tuning (Fourth Above Guitar)",
    frets: 19,
    openStrings: [
      {
        name: "A2",
        note: "A2",
        midi: 45,
        frequencyHz: 110.0
      },
      {
        name: "D3",
        note: "D3",
        midi: 50,
        frequencyHz: 146.83
      },
      {
        name: "G3",
        note: "G3",
        midi: 55,
        frequencyHz: 196.0
      },
      {
        name: "C4",
        note: "C4",
        midi: 60,
        frequencyHz: 261.63
      },
      {
        name: "E4",
        note: "E4",
        midi: 64,
        frequencyHz: 329.63
      },
      {
        name: "A4",
        note: "A4",
        midi: 69,
        frequencyHz: 440.0
      }
    ]
  },
  performanceArticulations: {
    bend: {
      maxSemitones: 2,
      speedMs: 80,
      curve: "exponential"
    },
    vibrato: {
      rateHz: 5.8,
      depthCents: 24,
      onsetDelayMs: 180
    },
    pizzicato: {
      damping: 0.45,
      pluckHardness: 0.85
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "palm-mute",
      "picado",
      "tremolo",
      "alzapua",
      "rasgueado",
      "golpe",
      "slide",
      "harmonic",
      "hammer-on",
      "pull-off",
      "rapid-run",
      "tirando",
      "apoyando"
    ],
    techniqueMethods: [
      "sharp púa (celluloid pick) picado attack",
      "high-speed tremolo lead runs",
      "alzapúa thumb sweep",
      "apagado palm mute chop",
      "abanico and rasgueado fan strumming",
      "golpe tap on spruce soundboard",
      "singing high-register mordiente vibrato"
    ],
    playingStyles: ["bolero", "trio-romantico", "mariachi", "huapango", "folk", "ranchera", "latin-jazz"],
    genreTechniques: {
      bolero: ["picado", "tremolo", "legato", "alzapua", "slide", "harmonic"],
      "trio-romantico": ["picado", "tremolo", "rapid-run", "palm-mute", "alzapua", "slide"],
      mariachi: ["accent", "picado", "rasgueado", "golpe"],
      huapango: ["rasgueado", "palm-mute", "picado", "accent"],
      folk: ["picado", "palm-mute", "legato", "slide"],
      ranchera: ["accent", "picado", "alzapua"],
      "latin-jazz": ["picado", "legato", "slide", "harmonic"]
    }
  },
  physicalModel: {
    model: "plucked-string",
    parameters: {
      pluckHardness: 0.92,
      pluckPosition: 0.85,
      airResonance: 0.75,
      bodyResonance: 0.82,
      transientSharpness: 0.92,
      stiffness: 0.88
    },
    signalChain: ["preamp", "eq", "reverb"],
    synthesisNotes: [
      "High-tension nylon string waveguide tuned a fourth higher with shorter scale length produces rapid transient attack and crystalline high-frequency snap.",
      "Acoustic body model couples 148Hz Helmholtz cavity with 330Hz solid spruce resonance and 2.8kHz mordiente presence peak.",
      "Faithfully articulates Trio Romántico lead picado scales, fast tremolo falsetas, alzapúa sweeps, and apagado muted comping."
    ]
  }
};
