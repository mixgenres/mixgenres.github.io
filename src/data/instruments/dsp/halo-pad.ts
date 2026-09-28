import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Authentic halo-pad physical DSP override. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "spectral oscillator cloud",
    "energyPath": "partial bank/filter/reverb",
    "bodyArchitecture": "diffuse electronic pad",
    "primaryCollision": "soft spectral onset",
    "asymmetries": [
      "partial detune",
      "long release"
    ],
    "couplingPaths": [
      "partial bank-filter"
    ],
    "techniqueBindings": [
      "swell",
      "sustain",
      "fade"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.1,
    "pressureSensitivity": 0.16,
    "nonlinearDrive": 0.03,
    "attackCollision": 0.05,
    "spectralSpread": 0.52,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 2.2,
        "gain": 0.1
      },
      {
        "ratio": 1.41,
        "q": 2.0,
        "gain": 0.06
      },
      {
        "ratio": 2.37,
        "q": 1.8,
        "gain": 0.04
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
      "excitationBias": 0,
      "brightness": 0.82,
      "damping": 0.1,
      "attack": 0.48,
      "articulation": [
        "swell",
        "sustain",
        "fade"
      ]
    }
  },
  "physicalDetails": {
    "system": "spectral-pad",
    "construction": "layered partial bank with diffuse filtering",
    "exciter": "detuned partial oscillators",
    "asymmetries": [
      "partial spacing",
      "release length"
    ],
    "coupling": [
      "partial bank",
      "filter"
    ],
    "artifactSources": [
      "slow beating"
    ],
    "detail": [
      "upper partials are intentionally sparse"
    ],
    "response": {
      "contactHardness": 0.1,
      "resonatorQ": 0.34,
      "nonlinearTransfer": 0.03,
      "inharmonicity": 0.02,
      "bodyCoupling": 0.02
    }
  }
};
