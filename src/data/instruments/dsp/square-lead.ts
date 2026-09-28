import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Authentic square-lead physical DSP override. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pulse oscillator",
    "energyPath": "pulse oscillator/filter/VCA",
    "bodyArchitecture": "electronic oscillator voice",
    "primaryCollision": "pulse edge onset",
    "asymmetries": [
      "pulse width",
      "filter envelope",
      "glide"
    ],
    "couplingPaths": [
      "pulse-filter",
      "filter-envelope"
    ],
    "techniqueBindings": [
      "glide",
      "pulse-width",
      "accent"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.56,
    "pressureSensitivity": 0.32,
    "nonlinearDrive": 0.18,
    "attackCollision": 0.44,
    "spectralSpread": 0.62,
    "directionalAsymmetry": 0.1
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 5.0,
        "gain": 0.11
      },
      {
        "ratio": 3,
        "q": 3.0,
        "gain": 0.045
      },
      {
        "ratio": 5,
        "q": 2.2,
        "gain": 0.025
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
      "excitationBias": 0.02,
      "brightness": 1.02,
      "damping": 0.02,
      "attack": 1.04,
      "articulation": [
        "glide",
        "pulse-width",
        "accent"
      ]
    }
  },
  "physicalDetails": {
    "system": "pulse-wave-mono-synth",
    "construction": "variable-duty-cycle pulse oscillator with resonant filter",
    "exciter": "pulse oscillator",
    "asymmetries": [
      "duty cycle",
      "filter cutoff",
      "portamento"
    ],
    "coupling": [
      "oscillator-filter"
    ],
    "artifactSources": [
      "pulse edge transient"
    ],
    "detail": [
      "odd harmonic dominance varies with duty cycle"
    ],
    "response": {
      "contactHardness": 0.38,
      "resonatorQ": 0.68,
      "nonlinearTransfer": 0.18,
      "inharmonicity": 0.0,
      "bodyCoupling": 0.04
    }
  }
};
