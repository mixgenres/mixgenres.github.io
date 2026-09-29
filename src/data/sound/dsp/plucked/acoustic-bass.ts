import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Acoustic bass guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [],
    "couplingPaths": [
      "soundboard"
    ],
    "techniqueBindings": [
      "acoustic thumb pluck",
      "two-finger pad attack",
      "body damping",
      "soundboard acoustic resonance"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.63,
    "pressureSensitivity": 0.565,
    "nonlinearDrive": 0.153,
    "attackCollision": 0.505,
    "spectralSpread": 0.562,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.69,
        "q": 2.0,
        "gain": 0.141
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.11
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.1
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
        "acoustic thumb pluck",
        "two-finger pad attack",
        "body damping",
        "soundboard acoustic resonance"
      ]
    },
    "acoustic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "acoustic thumb pluck",
        "two-finger pad attack",
        "body damping",
        "soundboard acoustic resonance"
      ]
    },
    "latin": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "acoustic thumb pluck",
        "two-finger pad attack",
        "body damping",
        "soundboard acoustic resonance"
      ]
    },
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "acoustic thumb pluck",
        "two-finger pad attack",
        "body damping",
        "soundboard acoustic resonance"
      ]
    },
    "cumbia": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.06,
      "articulation": [
        "acoustic thumb pluck",
        "two-finger pad attack",
        "body damping",
        "soundboard acoustic resonance"
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
    "acoustic-bass requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.53,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.191,
    "inharmonicity": 0.081,
    "bodyCoupling": 0.98
  }
}
} as InstrumentDSPOverride;
