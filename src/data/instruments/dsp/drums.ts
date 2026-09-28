import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Deep physical profile override for Standard Drum Kit. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "stick/wire collision",
    "asymmetries": [
      "center",
      "rim"
    ],
    "couplingPaths": [
      "snare",
      "wire"
    ],
    "techniqueBindings": [
      "snare center strike for fat solid fundamental backbeat",
      "high-velocity rimshot hitting head and metal rim simultaneously",
      "delicate ghost notes providing syncopated inner groove subdivision",
      "hi-hat foot pressure modulation from tight closed tick to sizzle open wash",
      "bass drum heel-up punch with beater buried in head"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.74,
    "pressureSensitivity": 0.58,
    "nonlinearDrive": 0.173,
    "attackCollision": 0.82,
    "spectralSpread": 0.714,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.61,
        "q": 2.0,
        "gain": 0.178
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.129
      },
      {
        "ratio": 1.58,
        "q": 2.9,
        "gain": 0.113
      },
      {
        "ratio": 2.35,
        "q": 3.35,
        "gain": 0.105
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
    "tango-electronico": {
      "excitationBias": 0.06,
      "brightness": 1.02,
      "damping": 0.02,
      "attack": 1.10,
      "body": 1.05,
      "articulation": ["tight-kick", "dry-snare", "closed-hat", "vinyl-hit", "electrotango-groove"]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "snare center strike for fat solid fundamental backbeat",
        "high-velocity rimshot hitting head and metal rim simultaneously",
        "delicate ghost notes providing syncopated inner groove subdivision",
        "hi-hat foot pressure modulation from tight closed tick to sizzle open wash"
      ]
    },
    "funk": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "snare center strike for fat solid fundamental backbeat",
        "high-velocity rimshot hitting head and metal rim simultaneously",
        "delicate ghost notes providing syncopated inner groove subdivision",
        "hi-hat foot pressure modulation from tight closed tick to sizzle open wash"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "snare center strike for fat solid fundamental backbeat",
        "high-velocity rimshot hitting head and metal rim simultaneously",
        "delicate ghost notes providing syncopated inner groove subdivision",
        "hi-hat foot pressure modulation from tight closed tick to sizzle open wash"
      ]
    },
    "hip-hop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "snare center strike for fat solid fundamental backbeat",
        "high-velocity rimshot hitting head and metal rim simultaneously",
        "delicate ghost notes providing syncopated inner groove subdivision",
        "hi-hat foot pressure modulation from tight closed tick to sizzle open wash"
      ]
    },
    "blues": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "snare center strike for fat solid fundamental backbeat",
        "high-velocity rimshot hitting head and metal rim simultaneously",
        "delicate ghost notes providing syncopated inner groove subdivision",
        "hi-hat foot pressure modulation from tight closed tick to sizzle open wash"
      ]
    },
    "rnb": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "snare center strike for fat solid fundamental backbeat",
        "high-velocity rimshot hitting head and metal rim simultaneously",
        "delicate ghost notes providing syncopated inner groove subdivision",
        "hi-hat foot pressure modulation from tight closed tick to sizzle open wash"
      ]
    },
    "metal": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "snare center strike for fat solid fundamental backbeat",
        "high-velocity rimshot hitting head and metal rim simultaneously",
        "delicate ghost notes providing syncopated inner groove subdivision",
        "hi-hat foot pressure modulation from tight closed tick to sizzle open wash"
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
    "contactHardness": 0.912,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.241,
    "inharmonicity": 0.217,
    "bodyCoupling": 0.939
  }
}
} as InstrumentDSPOverride;
