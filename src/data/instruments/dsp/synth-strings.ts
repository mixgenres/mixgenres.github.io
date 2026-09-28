import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Authentic synth-strings physical DSP override. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "detuned oscillators",
    "energyPath": "saw/ensemble/filter/VCA",
    "bodyArchitecture": "ensemble synthesizer",
    "primaryCollision": "soft oscillator onset",
    "asymmetries": [
      "detune beating",
      "filter drift",
      "slow envelope"
    ],
    "couplingPaths": [
      "oscillator ensemble",
      "filter-VCA"
    ],
    "techniqueBindings": [
      "ensemble swell",
      "legato",
      "detune"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.24,
    "pressureSensitivity": 0.28,
    "nonlinearDrive": 0.08,
    "attackCollision": 0.16,
    "spectralSpread": 0.46,
    "directionalAsymmetry": 0.22
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 3.0,
        "gain": 0.1
      },
      {
        "ratio": 1.003,
        "q": 2.8,
        "gain": 0.08
      },
      {
        "ratio": 0.997,
        "q": 2.7,
        "gain": 0.075
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
      "brightness": 0.94,
      "damping": 0.03,
      "attack": 0.78,
      "articulation": [
        "ensemble swell",
        "legato",
        "detune"
      ]
    }
  },
  "physicalDetails": {
    "system": "ensemble-synth",
    "construction": "multiple detuned oscillators with slow filter/VCA envelope",
    "exciter": "detuned saw oscillators",
    "asymmetries": [
      "detune beating",
      "voice drift"
    ],
    "coupling": [
      "oscillator ensemble",
      "filter"
    ],
    "artifactSources": [
      "phase beating",
      "filter movement"
    ],
    "detail": [
      "slow attack and detuned partials create ensemble width"
    ],
    "response": {
      "contactHardness": 0.22,
      "resonatorQ": 0.46,
      "nonlinearTransfer": 0.08,
      "inharmonicity": 0.0,
      "bodyCoupling": 0.04
    }
  }
};
