import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Tin whistle. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air",
    "energyPath": "air-column/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "jet/reed/lip excitation",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "tongue",
      "cut",
      "roll",
      "cran"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.26,
    "pressureSensitivity": 0.84,
    "nonlinearDrive": 0.087,
    "attackCollision": 0.4,
    "spectralSpread": 0.512,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.128
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.104
      },
      {
        "ratio": 1.48,
        "q": 2.9,
        "gain": 0.096
      },
      {
        "ratio": 2.02,
        "q": 3.35,
        "gain": 0.092
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.2,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0.025,
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
  "fippleNoise": 0.12,
  "muteContact": 0,
  "breathBurst": 0.1,
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
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tongue",
        "cut",
        "roll",
        "cran"
      ]
    }
  },
  "physicalDetails": {
  "system": "air-jet-aerophone",
  "construction": "air-column with edge/voicing system",
  "exciter": "air jet / fipple / end-blown edge depending instrument",
  "asymmetries": [
    "jet angle",
    "breath pressure",
    "hole venting",
    "register overblow"
  ],
  "coupling": [
    "jet-edge",
    "air-column modes",
    "tone holes"
  ],
  "artifactSources": [
    "chiff",
    "air hiss",
    "finger-hole noise"
  ],
  "detail": [
    "air-column impedance controls pitch",
    "attack includes jet noise and transient overblow",
    "register changes alter mode family rather than only brightness"
  ],
  "response": {
    "contactHardness": 0.516,
    "resonatorQ": 0.513,
    "nonlinearTransfer": 0.209,
    "inharmonicity": 0.065,
    "bodyCoupling": 0.405
  }
}
} as InstrumentDSPOverride;
