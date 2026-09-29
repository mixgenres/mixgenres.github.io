import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Snare. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick/wire collision",
    "asymmetries": [
      "edge",
      "rim"
    ],
    "couplingPaths": [
      "snare"
    ],
    "techniqueBindings": [
      "kick/snare/hihat orchestration",
      "ghost note",
      "rim/edge",
      "brush sweep",
      "roll"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.6,
    "pressureSensitivity": 0.65,
    "nonlinearDrive": 0.148,
    "attackCollision": 0.78,
    "spectralSpread": 0.694,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.47,
        "q": 2.0,
        "gain": 0.174
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.127
      },
      {
        "ratio": 1.51,
        "q": 2.9,
        "gain": 0.111
      },
      {
        "ratio": 2.35,
        "q": 3.35,
        "gain": 0.103
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
  "rimImpact": 0.18,
  "bellowsNoise": 0,
  "damperNoise": 0,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0.1,
  "pedalNoise": 0,
  "membraneFingerNoise": 0.16,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "edge",
    "fleshVsNail": 0,
    "handDamping": 0.18,
    "attackToPitchCoupling": 0.292,
    "releaseCoupling": 0.261,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "kick/snare/hihat orchestration",
        "ghost note",
        "rim/edge",
        "brush sweep"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "kick/snare/hihat orchestration",
        "ghost note",
        "rim/edge",
        "brush sweep"
      ]
    },
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "kick/snare/hihat orchestration",
        "ghost note",
        "rim/edge",
        "brush sweep"
      ]
    }
  },
  "physicalDetails": {
  "system": "contact-noise-idiophone",
  "construction": "instrument-specific rigid/skin contact structure",
  "exciter": "friction/impact/hand/stick",
  "asymmetries": [
    "stroke direction",
    "contact location",
    "fill material or plate geometry"
  ],
  "coupling": [
    "exciter-material",
    "body resonance",
    "secondary particles where applicable"
  ],
  "artifactSources": [
    "contact noise",
    "body knock",
    "secondary rattles"
  ],
  "detail": [
    "timbral identity comes from contact geometry",
    "noise density follows stroke speed",
    "secondary resonances are short and material-dependent"
  ],
  "response": {
    "contactHardness": 0.774,
    "resonatorQ": 0.622,
    "nonlinearTransfer": 0.263,
    "inharmonicity": 0.208,
    "bodyCoupling": 0.547
  }
}
} as InstrumentDSPOverride;
