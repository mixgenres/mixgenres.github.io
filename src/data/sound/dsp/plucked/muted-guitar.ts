import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Muted guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
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
      "dead-note strum",
      "muted upstroke",
      "chop"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.53,
    "pressureSensitivity": 0.615,
    "nonlinearDrive": 0.135,
    "attackCollision": 0.485,
    "spectralSpread": 0.553,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.59,
        "q": 2.0,
        "gain": 0.138
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.109
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.099
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
    "ska": {
      "excitationBias": 0,
      "brightness": 1.04,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "dead-note strum",
        "muted upstroke",
        "chop"
      ]
    },
    "funk": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "dead-note strum",
        "muted upstroke",
        "chop"
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
    "muted-guitar requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.706,
    "resonatorQ": 0.6,
    "nonlinearTransfer": 0.205,
    "inharmonicity": 0.087,
    "bodyCoupling": 0.531
  }
}
} as InstrumentDSPOverride;
