import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Wood block. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "impact",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [
      "center",
      "edge"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "hard center strike",
      "damped edge touch",
      "alternating pitch-block ostinato"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.69,
    "pressureSensitivity": 0.425,
    "nonlinearDrive": 0.164,
    "attackCollision": 0.875,
    "spectralSpread": 0.74,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.65,
        "q": 2.0,
        "gain": 0.185
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.133
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.115
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.106
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
  "bodyKnock": 0.1,
  "rimImpact": 0.16,
  "bellowsNoise": 0,
  "damperNoise": 0,
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
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hard center strike",
        "damped edge touch",
        "alternating pitch-block ostinato"
      ]
    },
    "ensemble-percussion": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hard center strike",
        "damped edge touch",
        "alternating pitch-block ostinato"
      ]
    },
    "orchestral": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hard center strike",
        "damped edge touch",
        "alternating pitch-block ostinato"
      ]
    },
    "latin": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hard center strike",
        "damped edge touch",
        "alternating pitch-block ostinato"
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
    "woodblock requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.71,
    "resonatorQ": 0.485,
    "nonlinearTransfer": 0.168,
    "inharmonicity": 0.248,
    "bodyCoupling": 0.412
  }
}
} as InstrumentDSPOverride;
