import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Cuíca. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [
      "pitch-bend",
      "slide"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "bamboo stick friction rubbing",
      "thumb membrane pitch-bending pressure",
      "high-pitched laughing squeak",
      "damped low percussive pop"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.53,
    "pressureSensitivity": 0.645,
    "nonlinearDrive": 0.135,
    "attackCollision": 0.705,
    "spectralSpread": 0.658,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.48,
        "q": 2.0,
        "gain": 0.165
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.122
      },
      {
        "ratio": 1.515,
        "q": 2.9,
        "gain": 0.108
      },
      {
        "ratio": 2.35,
        "q": 3.35,
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
  "handContact": 0.12,
  "bodyKnock": 0.08,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0,
  "pedalNoise": 0,
  "membraneFingerNoise": 0.16,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "mixed",
    "fleshVsNail": 0.18,
    "handDamping": 0,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "samba": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "bamboo stick friction rubbing",
        "thumb membrane pitch-bending pressure",
        "high-pitched laughing squeak",
        "damped low percussive pop"
      ]
    },
    "batucada": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bamboo stick friction rubbing",
        "thumb membrane pitch-bending pressure",
        "high-pitched laughing squeak",
        "damped low percussive pop"
      ]
    },
    "bossa": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "bamboo stick friction rubbing",
        "thumb membrane pitch-bending pressure",
        "high-pitched laughing squeak",
        "damped low percussive pop"
      ]
    },
    "pagode": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bamboo stick friction rubbing",
        "thumb membrane pitch-bending pressure",
        "high-pitched laughing squeak",
        "damped low percussive pop"
      ]
    },
    "mpb": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bamboo stick friction rubbing",
        "thumb membrane pitch-bending pressure",
        "high-pitched laughing squeak",
        "damped low percussive pop"
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
    "cuica requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.7,
    "resonatorQ": 0.662,
    "nonlinearTransfer": 0.267,
    "inharmonicity": 0.208,
    "bodyCoupling": 0.578
  }
}
} as InstrumentDSPOverride;
