import type { InstrumentDef } from '../../schema/instrument-def';

export const rhodes: InstrumentDef = {
  id: "rhodes",
  name: "Rhodes Electric Piano",
  family: "bellows-and-keys",
  voicing: "chord",
  bodyConstruction: "solid-electric",
  excitationType: "hammer",
  elementaryModel: 14,
  makeupGain: 0.322,
  polyphony: 8,
  note: "Electro-mechanical tine piano with neoprene hammers striking asymmetric tuning forks, producing warm chime-like purr and overdriven bark",
  acousticProfile: {
    sustain: "sustained",
    role: "comp",
    centre: 58,
    low: 36,
    high: 84,
    pan: -0.16,
    trim: -1,
    space: 0.3,
    ring: 3.5,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.7,
    tension: 0.6,
    bodyResonanceVolume: 6,
    decayTimeFactor: 3,
    harmonicRichness: 0.6
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "ghost", "tremolo", "portato"],
    techniqueMethods: [
      "neoprene hammer tine excitation",
      "magnetic pickup proximity overload",
      "mechanical damper pedal release",
      "stereo pan tremolo modulation",
      "extended chord cluster comping"
    ],
    playingStyles: ["neo-soul", "jazz-fusion", "funk", "rnb", "lofi", "house"],
    genreTechniques: {
      "neo-soul": ["legato", "tenuto", "ghost", "accent"],
      funk: ["staccato", "accent", "ghost"],
      "jazz-fusion": ["legato", "accent", "tenuto"],
      lofi: ["tenuto", "ghost", "legato"]
    }
  },
  physicalModel: {
    model: "struck-string",
    parameters: {
      stiffness: 0.42,
      damping: 0.35,
      inharmonicity: 0.15,
      bodyResonance: 0.5,
      pickupPosition: 0.45,
      pickupDistance: 0.3,
      saturation: 0.35,
      transientSharpness: 0.6
    },
    signalChain: ["preamp", "eq", "chorus", "reverb"],
    synthesisNotes: [
      "Soft velocities yield pure bell-like sine-dominant fundamentals.",
      "Hard velocities induce mechanical tine bite and magnetic pickup clipping bark.",
      "Stereo tremolo pans across harmonic fields for classic neo-soul movement."
    ]
  }
};
