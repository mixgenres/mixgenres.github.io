import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Authentic noise-sweep physical DSP override. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "noise source",
    "energyPath": "noise/filter/envelope",
    "bodyArchitecture": "filtered-noise synthesizer",
    "primaryCollision": "noise gate onset",
    "asymmetries": [
      "filter slope",
      "sweep direction"
    ],
    "couplingPaths": [
      "noise-filter",
      "envelope-filter"
    ],
    "techniqueBindings": [
      "riser",
      "down-sweep",
      "noise hit"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.48,
    "pressureSensitivity": 0.18,
    "nonlinearDrive": 0.02,
    "attackCollision": 0.62,
    "spectralSpread": 0.98,
    "directionalAsymmetry": 0.44
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 2.0,
        "gain": 0.08
      },
      {
        "ratio": 2.4,
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
      "excitationBias": 0.03,
      "brightness": 1.12,
      "damping": -0.02,
      "attack": 1.12,
      "articulation": [
        "riser",
        "down-sweep",
        "noise hit"
      ]
    }
  },
  "physicalDetails": {
    "system": "filtered-noise-sweep",
    "construction": "broadband noise through automated filter and envelope",
    "exciter": "noise generator",
    "asymmetries": [
      "sweep direction",
      "filter resonance"
    ],
    "coupling": [
      "noise-filter"
    ],
    "artifactSources": [
      "noise floor",
      "filter resonance"
    ],
    "detail": [
      "no pitched oscillator is required"
    ],
    "response": {
      "contactHardness": 0.5,
      "resonatorQ": 0.3,
      "nonlinearTransfer": 0.02,
      "inharmonicity": 1.0,
      "bodyCoupling": 0.01
    }
  }
};
