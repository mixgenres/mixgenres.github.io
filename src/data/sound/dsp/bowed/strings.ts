import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Fast string ensemble. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "bow",
    "energyPath": "bow/string/bridge/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick-slip friction",
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
    "hardness": 0.44,
    "pressureSensitivity": 0.8,
    "nonlinearDrive": 0.119,
    "attackCollision": 0.58,
    "spectralSpread": 0.598,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.55,
        "q": 2.0,
        "gain": 0.15
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.115
      },
      {
        "ratio": 1.72,
        "q": 2.9,
        "gain": 0.103
      },
      {
        "ratio": 2.63,
        "q": 3.35,
        "gain": 0.097
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.09,
  "pickZing": 0,
  "handContact": 0.06,
  "bodyKnock": 0.04,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.05,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0.16,
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
    "strikeZoneLocation": "fingerboard",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "tango": {
      "excitationBias": 0.10,
      "brightness": 1.02,
      "damping": 0.02,
      "attack": 1.18,
      "body": 1.12,
      "articulation": ["marcato", "staccato", "arrastre", "cantando", "pizzicato"]
    },
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
    "strings requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.556,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.238,
    "inharmonicity": 0.069,
    "bodyCoupling": 0.98
  }
}
} as InstrumentDSPOverride;
