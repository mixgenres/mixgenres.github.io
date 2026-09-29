import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Jazz Brush Kit. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick/wire collision",
    "asymmetries": [
      "rim"
    ],
    "couplingPaths": [
      "snare",
      "wire"
    ],
    "techniqueBindings": [
      "clockwise continuous circular wire sweeping on coated snare",
      "right-hand brush slap and pop accents on 2 and 4",
      "feathered bass drum quarter-note pulse",
      "delicate wire brush tap on sizzle ride cymbal",
      "brush rim tap and rim scrape"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.62,
    "pressureSensitivity": 0.64,
    "nonlinearDrive": 0.202,
    "attackCollision": 0.91,
    "spectralSpread": 0.757,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.49,
        "q": 2.0,
        "gain": 0.189
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.135
      },
      {
        "ratio": 1.52,
        "q": 2.9,
        "gain": 0.116
      },
      {
        "ratio": 2.35,
        "q": 3.35,
        "gain": 0.107
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
    "handDamping": 0,
    "attackToPitchCoupling": 0.292,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "reservoir-flow"
  },
  "genreDialects": {
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "clockwise continuous circular wire sweeping on coated snare",
        "right-hand brush slap and pop accents on 2 and 4",
        "feathered bass drum quarter-note pulse",
        "delicate wire brush tap on sizzle ride cymbal"
      ]
    },
    "ballad": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "clockwise continuous circular wire sweeping on coated snare",
        "right-hand brush slap and pop accents on 2 and 4",
        "feathered bass drum quarter-note pulse",
        "delicate wire brush tap on sizzle ride cymbal"
      ]
    },
    "swing": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "clockwise continuous circular wire sweeping on coated snare",
        "right-hand brush slap and pop accents on 2 and 4",
        "feathered bass drum quarter-note pulse",
        "delicate wire brush tap on sizzle ride cymbal"
      ]
    },
    "bossa-nova": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "clockwise continuous circular wire sweeping on coated snare",
        "right-hand brush slap and pop accents on 2 and 4",
        "feathered bass drum quarter-note pulse",
        "delicate wire brush tap on sizzle ride cymbal"
      ]
    },
    "acoustic-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "clockwise continuous circular wire sweeping on coated snare",
        "right-hand brush slap and pop accents on 2 and 4",
        "feathered bass drum quarter-note pulse",
        "delicate wire brush tap on sizzle ride cymbal"
      ]
    },
    "blues": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "clockwise continuous circular wire sweeping on coated snare",
        "right-hand brush slap and pop accents on 2 and 4",
        "feathered bass drum quarter-note pulse",
        "delicate wire brush tap on sizzle ride cymbal"
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
    "contactHardness": 0.7,
    "resonatorQ": 0.924,
    "nonlinearTransfer": 0.26,
    "inharmonicity": 0.202,
    "bodyCoupling": 0.83
  }
}
} as InstrumentDSPOverride;
