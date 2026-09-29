import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Authentic warm-pad physical DSP override. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "slow oscillator bank",
    "energyPath": "detuned oscillator/filter/envelope",
    "bodyArchitecture": "soft subtractive pad",
    "primaryCollision": "slow envelope onset",
    "asymmetries": [
      "detune drift",
      "filter drift"
    ],
    "couplingPaths": [
      "oscillator-filter"
    ],
    "techniqueBindings": [
      "swell",
      "legato",
      "crossfade"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.16,
    "pressureSensitivity": 0.18,
    "nonlinearDrive": 0.05,
    "attackCollision": 0.08,
    "spectralSpread": 0.34,
    "directionalAsymmetry": 0.2
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 2.6,
        "gain": 0.12
      },
      {
        "ratio": 1.5,
        "q": 2.2,
        "gain": 0.06
      },
      {
        "ratio": 2,
        "q": 1.9,
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
      "brightness": 0.86,
      "damping": 0.08,
      "attack": 0.58,
      "articulation": [
        "swell",
        "legato",
        "crossfade"
      ]
    }
  },
  "physicalDetails": {
    "system": "warm-pad",
    "construction": "slow detuned oscillator bank with gentle low-pass filter",
    "exciter": "detuned oscillators",
    "asymmetries": [
      "slow drift",
      "filter motion"
    ],
    "coupling": [
      "oscillator-filter"
    ],
    "artifactSources": [
      "subtle oscillator beating"
    ],
    "detail": [
      "long attack masks oscillator edges"
    ],
    "response": {
      "contactHardness": 0.15,
      "resonatorQ": 0.38,
      "nonlinearTransfer": 0.05,
      "inharmonicity": 0.0,
      "bodyCoupling": 0.03
    }
  }
};
