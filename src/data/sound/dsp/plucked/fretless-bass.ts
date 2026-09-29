import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Fretless bass. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "solid-electric",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "slide",
      "vibrato"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "finger pad acoustic pull",
      "vocal vibrato across fingerboard",
      "slow portamento glissando",
      "side-of-finger attack"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.54,
    "pressureSensitivity": 0.56,
    "nonlinearDrive": 0.137,
    "attackCollision": 0.54,
    "spectralSpread": 0.579,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.7,
        "q": 2.0,
        "gain": 0.145
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.112
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.102
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
    "noteTransition": "reservoir-flow"
  },
  "genreDialects": {
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "finger pad acoustic pull",
        "vocal vibrato across fingerboard",
        "slow portamento glissando",
        "side-of-finger attack"
      ]
    },
    "fusion": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad acoustic pull",
        "vocal vibrato across fingerboard",
        "slow portamento glissando",
        "side-of-finger attack"
      ]
    },
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad acoustic pull",
        "vocal vibrato across fingerboard",
        "slow portamento glissando",
        "side-of-finger attack"
      ]
    },
    "contemporary": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad acoustic pull",
        "vocal vibrato across fingerboard",
        "slow portamento glissando",
        "side-of-finger attack"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad acoustic pull",
        "vocal vibrato across fingerboard",
        "slow portamento glissando",
        "side-of-finger attack"
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
    "fretless-bass requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.572,
    "resonatorQ": 0.712,
    "nonlinearTransfer": 0.217,
    "inharmonicity": 0.096,
    "bodyCoupling": 0.642
  }
}
} as InstrumentDSPOverride;
