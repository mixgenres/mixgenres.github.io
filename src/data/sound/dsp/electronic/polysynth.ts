import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Authentic polysynth physical DSP override. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "multi-voice oscillators",
    "energyPath": "oscillator bank/filter/VCA",
    "bodyArchitecture": "polyphonic subtractive synthesizer",
    "primaryCollision": "per-voice oscillator onset",
    "asymmetries": [
      "voice detune",
      "filter envelopes",
      "phase"
    ],
    "couplingPaths": [
      "voice bank-filter",
      "filter-VCA"
    ],
    "techniqueBindings": [
      "chord spread",
      "voice detune",
      "filter motion"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.38,
    "pressureSensitivity": 0.28,
    "nonlinearDrive": 0.12,
    "attackCollision": 0.22,
    "spectralSpread": 0.58,
    "directionalAsymmetry": 0.16
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 3.8,
        "gain": 0.1
      },
      {
        "ratio": 2,
        "q": 2.6,
        "gain": 0.045
      },
      {
        "ratio": 3,
        "q": 2.1,
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
      "brightness": 1.0,
      "damping": 0.01,
      "attack": 1.0,
      "articulation": [
        "chord spread",
        "voice detune",
        "filter motion"
      ]
    }
  },
  "physicalDetails": {
    "system": "polyphonic-subtractive",
    "construction": "multi-voice oscillator bank with common filter",
    "exciter": "detuned oscillator bank",
    "asymmetries": [
      "voice phase",
      "detune",
      "filter envelope"
    ],
    "coupling": [
      "voice bank-filter"
    ],
    "artifactSources": [
      "voice beating",
      "filter resonance"
    ],
    "detail": [
      "each active note retains its own oscillator phase and envelope"
    ],
    "response": {
      "contactHardness": 0.32,
      "resonatorQ": 0.58,
      "nonlinearTransfer": 0.12,
      "inharmonicity": 0.0,
      "bodyCoupling": 0.05
    }
  }
};
