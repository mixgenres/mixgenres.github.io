import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Authentic sweep-pad physical DSP override. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "filtered oscillator",
    "energyPath": "oscillator/automated filter/envelope",
    "bodyArchitecture": "sweeping subtractive pad",
    "primaryCollision": "filter sweep onset",
    "asymmetries": [
      "filter trajectory",
      "resonance"
    ],
    "couplingPaths": [
      "LFO-filter",
      "envelope-filter"
    ],
    "techniqueBindings": [
      "filter sweep",
      "swell",
      "rise"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.2,
    "pressureSensitivity": 0.22,
    "nonlinearDrive": 0.06,
    "attackCollision": 0.1,
    "spectralSpread": 0.62,
    "directionalAsymmetry": 0.26
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 4.8,
        "gain": 0.09
      },
      {
        "ratio": 2,
        "q": 3.2,
        "gain": 0.045
      },
      {
        "ratio": 4,
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
      "excitationBias": 0.01,
      "brightness": 1.05,
      "damping": 0.0,
      "attack": 0.82,
      "articulation": [
        "filter sweep",
        "swell",
        "rise"
      ]
    }
  },
  "physicalDetails": {
    "system": "automated-filter-pad",
    "construction": "oscillator bank with time-varying resonant filter",
    "exciter": "detuned oscillators",
    "asymmetries": [
      "filter trajectory",
      "resonance"
    ],
    "coupling": [
      "LFO-filter"
    ],
    "artifactSources": [
      "filter resonance movement"
    ],
    "detail": [
      "spectral motion is part of the instrument identity"
    ],
    "response": {
      "contactHardness": 0.18,
      "resonatorQ": 0.66,
      "nonlinearTransfer": 0.06,
      "inharmonicity": 0.0,
      "bodyCoupling": 0.03
    }
  }
};
