import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Pizzicato strings. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "arco",
      "detaché",
      "legato bow",
      "pizzicato"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.58,
    "pressureSensitivity": 0.65,
    "nonlinearDrive": 0.144,
    "attackCollision": 0.53,
    "spectralSpread": 0.574,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.68,
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
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "orchestral": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "arco",
        "detaché",
        "legato bow",
        "pizzicato"
      ]
    },
    "cinematic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "arco",
        "detaché",
        "legato bow",
        "pizzicato"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "arco",
        "detaché",
        "legato bow",
        "pizzicato"
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
    "pizz-strings requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.556,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.227,
    "inharmonicity": 0.069,
    "bodyCoupling": 0.98
  }
}
} as InstrumentDSPOverride;
