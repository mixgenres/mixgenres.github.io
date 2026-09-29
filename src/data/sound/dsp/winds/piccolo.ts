import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Piccolo. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air",
    "energyPath": "air-column/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "jet/reed/lip excitation",
    "asymmetries": [
      "courses"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "tight embouchure airstream",
      "crisp double-tonguing",
      "flutter-tonguing",
      "soaring top-register penetration"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.31,
    "pressureSensitivity": 0.815,
    "nonlinearDrive": 0.096,
    "attackCollision": 0.425,
    "spectralSpread": 0.524,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.131
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.105
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.097
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.093
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.24,
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
  "fippleNoise": 0.08,
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
    "orchestral": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tight embouchure airstream",
        "crisp double-tonguing",
        "flutter-tonguing",
        "soaring top-register penetration"
      ]
    },
    "marching": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tight embouchure airstream",
        "crisp double-tonguing",
        "flutter-tonguing",
        "soaring top-register penetration"
      ]
    },
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tight embouchure airstream",
        "crisp double-tonguing",
        "flutter-tonguing",
        "soaring top-register penetration"
      ]
    },
    "cinematic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tight embouchure airstream",
        "crisp double-tonguing",
        "flutter-tonguing",
        "soaring top-register penetration"
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
    "contactHardness": 0.518,
    "resonatorQ": 0.489,
    "nonlinearTransfer": 0.191,
    "inharmonicity": 0.06,
    "bodyCoupling": 0.379
  }
}
} as InstrumentDSPOverride;
