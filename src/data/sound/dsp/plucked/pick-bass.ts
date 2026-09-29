import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Pick bass. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "mute"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "fingerstyle",
      "pick",
      "muting",
      "alternating attack"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.73,
    "pressureSensitivity": 0.565,
    "nonlinearDrive": 0.171,
    "attackCollision": 0.535,
    "spectralSpread": 0.577,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.69,
        "q": 2.0,
        "gain": 0.144
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.112
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.101
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.096
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.06,
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
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "fingerstyle",
        "pick",
        "muting",
        "alternating attack"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "fingerstyle",
        "pick",
        "muting",
        "alternating attack"
      ]
    },
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "fingerstyle",
        "pick",
        "muting",
        "alternating attack"
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
    "pick-bass requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.598,
    "resonatorQ": 0.715,
    "nonlinearTransfer": 0.259,
    "inharmonicity": 0.098,
    "bodyCoupling": 0.641
  }
}
} as InstrumentDSPOverride;
