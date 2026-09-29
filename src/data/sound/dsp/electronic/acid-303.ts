import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Acid Bassline 303. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "electronic",
    "energyPath": "oscillator/filter/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "circuit/switch/filter edge",
    "asymmetries": [
      "slide"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "diode-ladder filter resonance squeal",
      "accent circuit envelope decay snap",
      "monophonic slide portamento",
      "saw/square oscillator switching"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.23,
    "pressureSensitivity": 0.505,
    "nonlinearDrive": 0.081,
    "attackCollision": 0.515,
    "spectralSpread": 0.567,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.142
      },
      {
        "ratio": 2.0,
        "q": 2.45,
        "gain": 0.111
      },
      {
        "ratio": 3.0,
        "q": 2.9,
        "gain": 0.101
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0,
  "bodyKnock": 0,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.02,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0,
  "pedalNoise": 0,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "acid-house": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "diode-ladder filter resonance squeal",
        "accent circuit envelope decay snap",
        "monophonic slide portamento",
        "saw/square oscillator switching"
      ]
    },
    "techno": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "diode-ladder filter resonance squeal",
        "accent circuit envelope decay snap",
        "monophonic slide portamento",
        "saw/square oscillator switching"
      ]
    },
    "trance": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "diode-ladder filter resonance squeal",
        "accent circuit envelope decay snap",
        "monophonic slide portamento",
        "saw/square oscillator switching"
      ]
    },
    "electronic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "diode-ladder filter resonance squeal",
        "accent circuit envelope decay snap",
        "monophonic slide portamento",
        "saw/square oscillator switching"
      ]
    },
    "breakbeat": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "diode-ladder filter resonance squeal",
        "accent circuit envelope decay snap",
        "monophonic slide portamento",
        "saw/square oscillator switching"
      ]
    }
  },
  "physicalDetails": {
  "system": "electronic-signal-chain",
  "construction": "electronic oscillator/filter/effect path",
  "exciter": "electronic source",
  "asymmetries": [
    "filter trajectory",
    "envelope/gate",
    "drive state",
    "effect feedback"
  ],
  "coupling": [
    "oscillator-filter",
    "filter-feedback",
    "effect loop"
  ],
  "artifactSources": [
    "switch/drive transients",
    "quantization/aliasing where intentional"
  ],
  "detail": [
    "electronic identity should not be forced into acoustic physics",
    "timbral motion comes from signal-path state",
    "effects are part of the instrument definition"
  ],
  "response": {
    "contactHardness": 0.648,
    "resonatorQ": 0.691,
    "nonlinearTransfer": 0.394,
    "inharmonicity": 0.085,
    "bodyCoupling": 0.592
  }
}
} as InstrumentDSPOverride;
