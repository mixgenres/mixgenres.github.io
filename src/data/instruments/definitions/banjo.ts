import type { InstrumentDef } from '../types';

export const banjo: InstrumentDef = {
  id: "banjo",
  name: "5-String Banjo",
  family: "plucked",
  voicing: "chord",
  courses: 1,
  bodyConstruction: "skin-faced",
  excitationType: "hard-pick",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 8,
  note: "American 5-string banjo with brass tone ring and mylar head stretched over a maple rim, generating blistering high-speed rolls and crisp percussive projection",
  acousticProfile: {
    sustain: "decaying",
    role: "comp",
    centre: 62,
    low: 50,
    high: 84,
    pan: 0.4,
    trim: 0,
    space: 0.24,
    ring: 1.2
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.85,
    tension: 0.85,
    bodyResonanceVolume: 6,
    decayTimeFactor: 1.6,
    harmonicRichness: 0.9,
    courses: 1,
    bodyConstruction: "skin-faced",
    excitationType: "hard-pick"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide", "tenuto", "ghost", "harmonic"],
    techniqueMethods: [
      "Scruggs three-finger roll patterns (T-I-M)",
      "clawhammer downward index nail frailing",
      "thumb drone string syncopation",
      "choke string pitch bending",
      "quick two-fret upward slide ornamentation"
    ],
    playingStyles: ["bluegrass", "old-time", "folk", "country", "americana"],
    genreTechniques: {
      bluegrass: ["accent", "staccato", "slide", "legato"],
      "old-time": ["accent", "tenuto", "staccato"],
      country: ["accent", "slide", "staccato"]
    }
  },
  physicalModel: {
    model: "plucked-string",
    parameters: {
      stiffness: 0.65,
      damping: 0.55,
      inharmonicity: 0.35,
      membraneTension: 0.75,
      transientSharpness: 0.88
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "High-tension drumhead radiates explosive pluck transients with rapid decay.",
      "High 5th drone string (thumb-picked) anchors syncope-heavy bluegrass rolls.",
      "Metal fingerpicks striking steel strings create a signature metallic zing."
    ]
  }
};
