import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Marimba. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "marimba-mallet",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "wood-bar-resonator",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [
      "courses",
      "rim"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "soft mallet attack",
      "hard mallet attack",
      "damped release",
      "alternating or double-stroke roll"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.66,
    "pressureSensitivity": 0.44,
    "nonlinearDrive": 0.159,
    "attackCollision": 0.86,
    "spectralSpread": 0.733,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.183
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.132
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.114
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.106
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
  "damperNoise": 0.08,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0.2,
  "pedalNoise": 0,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "edge",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.292,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "soft mallet attack",
        "hard mallet attack",
        "damped release",
        "alternating or double-stroke roll"
      ]
    },
    "contemporary": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "soft mallet attack",
        "hard mallet attack",
        "damped release",
        "alternating or double-stroke roll"
      ]
    },
    "latin": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "soft mallet attack",
        "hard mallet attack",
        "damped release",
        "alternating or double-stroke roll"
      ]
    },
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "soft mallet attack",
        "hard mallet attack",
        "damped release",
        "alternating or double-stroke roll"
      ]
    },
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "soft mallet attack",
        "hard mallet attack",
        "damped release",
        "alternating or double-stroke roll"
      ]
    }
  },
  "physicalDetails": {
  "system": "struck-resonator",
  "construction": "tuned resonant element with body/cavity",
  "exciter": "hammer/mallet/tangent",
  "asymmetries": [
    "contact hardness",
    "strike position",
    "damper state"
  ],
  "coupling": [
    "exciter-resonator",
    "resonator-body",
    "sympathetic notes"
  ],
  "artifactSources": [
    "key/action click",
    "hammer/mallet noise",
    "damper contact"
  ],
  "detail": [
    "attack is a collision spectrum",
    "modal ratios depend on resonator material",
    "damping changes both decay and spectral centroid"
  ],
  "response": {
    "contactHardness": 0.648,
    "resonatorQ": 0.95,
    "nonlinearTransfer": 0.187,
    "inharmonicity": 0.24,
    "bodyCoupling": 0.86
  }
}
} as InstrumentDSPOverride;
