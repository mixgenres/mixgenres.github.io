import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Authentic saw-lead physical DSP override. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "oscillator",
    "energyPath": "saw oscillator/filter/VCA",
    "bodyArchitecture": "electronic oscillator voice",
    "primaryCollision": "hard sync onset",
    "asymmetries": [
      "filter envelope",
      "portamento",
      "oscillator phase"
    ],
    "couplingPaths": [
      "oscillator-filter",
      "filter-envelope"
    ],
    "techniqueBindings": [
      "glide",
      "accent",
      "filter opening"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.62,
    "pressureSensitivity": 0.35,
    "nonlinearDrive": 0.28,
    "attackCollision": 0.38,
    "spectralSpread": 0.78,
    "directionalAsymmetry": 0.14
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 5.5,
        "gain": 0.1
      },
      {
        "ratio": 2,
        "q": 3.2,
        "gain": 0.05
      },
      {
        "ratio": 3,
        "q": 2.2,
        "gain": 0.03
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
    "bodyKnock": 0,
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
    "membraneFingerNoise": 0,
    "seedRattle": 0,
    "fippleNoise": 0,
    "muteContact": 0,
    "breathBurst": 0,
    "keyworkClick": 0
  },
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.2,
    "releaseCoupling": 0.3,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "electronic": {
      "excitationBias": 0.03,
      "brightness": 1.08,
      "damping": 0.01,
      "attack": 1.05,
      "articulation": [
        "glide",
        "accent",
        "filter opening"
      ]
    }
  },
  "physicalDetails": {
    "system": "subtractive-mono-synth",
    "construction": "saw oscillator through resonant low-pass VCF",
    "exciter": "sawtooth oscillator",
    "asymmetries": [
      "filter cutoff",
      "resonance",
      "portamento"
    ],
    "coupling": [
      "oscillator-filter",
      "envelope-VCA"
    ],
    "artifactSources": [
      "oscillator aliasing residual",
      "filter resonance"
    ],
    "detail": [
      "continuous pitch glide",
      "resonant filter accent"
    ],
    "response": {
      "contactHardness": 0.4,
      "resonatorQ": 0.72,
      "nonlinearTransfer": 0.28,
      "inharmonicity": 0.0,
      "bodyCoupling": 0.05
    }
  }
};
