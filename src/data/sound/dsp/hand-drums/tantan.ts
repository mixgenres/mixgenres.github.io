import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Tantan. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [
      "mute"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "open low tone",
      "damped syncopation",
      "muted finger/hand stroke",
      "pagode bass punctuation"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.57,
    "pressureSensitivity": 0.625,
    "nonlinearDrive": 0.143,
    "attackCollision": 0.725,
    "spectralSpread": 0.668,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.52,
        "q": 2.0,
        "gain": 0.167
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.123
      },
      {
        "ratio": 1.535,
        "q": 2.9,
        "gain": 0.109
      },
      {
        "ratio": 2.35,
        "q": 3.35,
        "gain": 0.102
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
  "handContact": 0.12,
  "bodyKnock": 0.08,
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
  "membraneFingerNoise": 0.16,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "mixed",
    "fleshVsNail": 0.18,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "pagode": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open low tone",
        "damped syncopation",
        "muted finger/hand stroke",
        "pagode bass punctuation"
      ]
    },
    "samba": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "open low tone",
        "damped syncopation",
        "muted finger/hand stroke",
        "pagode bass punctuation"
      ]
    },
    "partido-alto": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open low tone",
        "damped syncopation",
        "muted finger/hand stroke",
        "pagode bass punctuation"
      ]
    },
    "genre-native performance": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open low tone",
        "damped syncopation",
        "muted finger/hand stroke",
        "pagode bass punctuation"
      ]
    }
  },
  "physicalDetails": {
  "system": "membrane-shell-percussion",
  "construction": "tensioned membrane over resonant shell/body",
  "exciter": "hand/stick/beaters according to instrument",
  "asymmetries": [
    "center vs edge",
    "open vs damped",
    "hand vs stick",
    "rim contact"
  ],
  "coupling": [
    "membrane radial modes",
    "membrane circular modes",
    "shell/air cavity",
    "hand damping"
  ],
  "artifactSources": [
    "skin contact",
    "rim click",
    "shell knock"
  ],
  "detail": [
    "strike-zone controls modal mixture",
    "membrane tension controls decay",
    "shell/air coupling varies by stroke and hand damping"
  ],
  "response": {
    "contactHardness": 0.7,
    "resonatorQ": 0.9,
    "nonlinearTransfer": 0.223,
    "inharmonicity": 0.208,
    "bodyCoupling": 0.832
  }
}
} as InstrumentDSPOverride;
