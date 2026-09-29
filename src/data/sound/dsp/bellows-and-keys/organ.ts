import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Tonewheel organ. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "hammer",
    "energyPath": "key/reed/string",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "mechanical key/hammer",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "velocity-shaped attack",
      "fingered chord voicing",
      "register coupling"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.63,
    "pressureSensitivity": 0.695,
    "nonlinearDrive": 0.153,
    "attackCollision": 0.705,
    "spectralSpread": 0.658,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.67,
        "q": 2.0,
        "gain": 0.165
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.122
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.108
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.101
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.05,
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
  "pedalNoise": 0.06,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0.1
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
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
    "contactHardness": 0.464,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.218,
    "inharmonicity": 0.073,
    "bodyCoupling": 0.98
  }
}
} as InstrumentDSPOverride;
