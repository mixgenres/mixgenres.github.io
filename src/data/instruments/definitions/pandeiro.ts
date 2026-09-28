import type { InstrumentDef } from '../types';

export const pandeiro: InstrumentDef = {
  id: "pandeiro",
  name: "Pandeiro",
  family: "hand-drums",
  drum: {
    low: 62,
    mid: 63,
    high: 64
  },
  voicing: "unpitched",
  bodyConstruction: "skin-faced",
  elementaryModel: 4,
  makeupGain: 1.540,
  polyphony: 8,
  note: "Brazilian national frame drum with thin natural goatskin head and cupped metal platinelas (jingles) with internal dampening washers, capable of emulating an entire samba percussion section",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.38,
    trim: -4,
    space: 0.16,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.7,
    tension: 0.8,
    bodyResonanceVolume: 4,
    decayTimeFactor: 0.5,
    harmonicRichness: 0.85
  },
  techniques: {
    articulations: ["accent", "slap", "open", "staccato", "ghost", "roll"],
    techniqueMethods: [
      "thumb open bass pop (emulating the surdo drum)",
      "fingertip rim tap (emulating tamborim)",
      "heel of the palm rocking stroke",
      "cupped center slap for sharp snare-like crack",
      "finger-shake jingle roll"
    ],
    playingStyles: ["samba", "choro", "capoeira", "forro", "mpb", "baião"],
    genreTechniques: {
      samba: ["accent", "slap", "ghost", "open"],
      choro: ["accent", "ghost", "open", "slap"],
      capoeira: ["accent", "open", "slap"]
    }
  },
  physicalModel: {
    model: "membrane",
    parameters: {
      membraneTension: 0.68,
      membraneDamping: 0.45,
      transientSharpness: 0.88,
      bodyResonance: 0.75
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Interlocking metal platinelas have central damping plates to prevent uncontrolled sustained wash.",
      "Thumb strikes center for deep surdo-like bass tone (sub-bass pop).",
      "Rocking wrist rotation between thumb, heel of palm, and fingertips produces continuous 16th-note samba."
    ]
  }
};
