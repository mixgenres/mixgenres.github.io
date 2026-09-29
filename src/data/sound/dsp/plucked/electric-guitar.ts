import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Electric Guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "solid-electric",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "mute",
      "pitch-bend",
      "slide"
    ],
    "couplingPaths": [
      "pickup"
    ],
    "techniqueBindings": [
      "alternate-picking",
      "palm-muting",
      "string-bending",
      "hammer-on",
      "pull-off",
      "slide"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.48,
    "pressureSensitivity": 0.64,
    "nonlinearDrive": 0.126,
    "attackCollision": 0.46,
    "spectralSpread": 0.541,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.54,
        "q": 2.0,
        "gain": 0.135
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.108
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.098
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.094
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.2,
  "handContact": 0.1,
  "bodyKnock": 0.07,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.03,
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
    "strikeZoneLocation": "mixed",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "nuevo-tango": {
      "excitationBias": 0.06, "brightness": 0.98, "damping": 0.025, "attack": 1.10, "body": 1.08,
      "articulation": ["marcato", "arrastre", "slide", "legato", "clean-chord"]
    },
    "tango": {
      "excitationBias": 0.03, "brightness": 0.98, "damping": 0.02, "attack": 1.06, "body": 1.04,
      "articulation": ["marcato", "arrastre", "slide", "clean-chord"]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "alternate-picking",
        "palm-muting",
        "string-bending",
        "hammer-on"
      ]
    },
    "funk": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "alternate-picking",
        "palm-muting",
        "string-bending",
        "hammer-on"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "alternate-picking",
        "palm-muting",
        "string-bending",
        "hammer-on"
      ]
    },
    "blues": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "alternate-picking",
        "palm-muting",
        "string-bending",
        "hammer-on"
      ]
    },
    "rnb": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "alternate-picking",
        "palm-muting",
        "string-bending",
        "hammer-on"
      ]
    },
    "reggae": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "alternate-picking",
        "palm-muting",
        "string-bending",
        "hammer-on"
      ]
    },
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "alternate-picking",
        "palm-muting",
        "string-bending",
        "hammer-on"
      ]
    }
  },
  "physicalDetails": {
  "system": "instrument-specific",
  "construction": "declared acoustic/electronic construction",
  "exciter": "declared excitation",
  "asymmetries": [
    "performance-state dependence"
  ],
  "coupling": [
    "exciter-resonator",
    "body/air transfer"
  ],
  "artifactSources": [
    "contact noise"
  ],
  "detail": [
    "electric-guitar requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.728,
    "resonatorQ": 0.667,
    "nonlinearTransfer": 0.365,
    "inharmonicity": 0.08,
    "bodyCoupling": 0.566
  }
}
} as InstrumentDSPOverride;
