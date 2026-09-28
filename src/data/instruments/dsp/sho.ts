import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Deep physical profile override for Sho. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "reed",
    "energyPath": "reed/chamber/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "pressure-driven reed",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "velocity-shaped attack",
      "fingered chord voicing",
      "register coupling"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.4,
    "pressureSensitivity": 0.92,
    "nonlinearDrive": 0.112,
    "attackCollision": 0.5,
    "spectralSpread": 0.56,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.14
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.11
      },
      {
        "ratio": 1.48,
        "q": 2.9,
        "gain": 0.1
      },
      {
        "ratio": 2.02,
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
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "velocity-shaped attack",
        "fingered chord voicing",
        "register coupling"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "velocity-shaped attack",
        "fingered chord voicing",
        "register coupling"
      ]
    },
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "velocity-shaped attack",
        "fingered chord voicing",
        "register coupling"
      ]
    }
  },
  "physicalDetails": {
  "system": "continuous-air-reed-pipe-bank",
  "construction": "air reservoir/wind chamber feeding resonant pipes or reeds",
  "exciter": "continuous air pressure",
  "asymmetries": [
    "pressure",
    "register drawbars/stops",
    "key/pallet opening"
  ],
  "coupling": [
    "common wind pressure",
    "multiple resonators",
    "cabinet"
  ],
  "artifactSources": [
    "key/pallet click",
    "wind noise",
    "valve leakage"
  ],
  "detail": [
    "sustained source is wind pressure",
    "registers alter pipe/reed populations",
    "note onset is valve/pallet plus resonator settling"
  ],
  "response": {
    "contactHardness": 0.52,
    "resonatorQ": 0.736,
    "nonlinearTransfer": 0.206,
    "inharmonicity": 0.073,
    "bodyCoupling": 0.643
  }
}
} as InstrumentDSPOverride;
