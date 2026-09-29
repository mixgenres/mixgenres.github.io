import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Distortion guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "solid-electric",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "mute"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "down-picking",
      "tight mute",
      "alternate picking"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.59,
    "pressureSensitivity": 0.585,
    "nonlinearDrive": 0.266,
    "attackCollision": 0.515,
    "spectralSpread": 0.567,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.65,
        "q": 2.0,
        "gain": 0.142
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.111
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.101
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.095
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
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "metal": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "down-picking",
        "tight mute",
        "alternate picking"
      ]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "down-picking",
        "tight mute",
        "alternate picking"
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
    "distortion-guitar requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.772,
    "resonatorQ": 0.703,
    "nonlinearTransfer": 0.31,
    "inharmonicity": 0.096,
    "bodyCoupling": 0.619
  }
}
} as InstrumentDSPOverride;
