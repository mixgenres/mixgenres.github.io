import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Hand percussion. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "impact",
    "energyPath": "body/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "wood/flesh collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "hand claps",
      "finger snaps",
      "egg shaker subdivision",
      "percussive body tap"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.57,
    "pressureSensitivity": 0.475,
    "nonlinearDrive": 0.143,
    "attackCollision": 0.785,
    "spectralSpread": 0.697,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.55,
        "q": 2.0,
        "gain": 0.174
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.127
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.111
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.104
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
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hand claps",
        "finger snaps",
        "egg shaker subdivision",
        "percussive body tap"
      ]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "hand claps",
        "finger snaps",
        "egg shaker subdivision",
        "percussive body tap"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hand claps",
        "finger snaps",
        "egg shaker subdivision",
        "percussive body tap"
      ]
    },
    "afrobeats": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hand claps",
        "finger snaps",
        "egg shaker subdivision",
        "percussive body tap"
      ]
    },
    "latin": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hand claps",
        "finger snaps",
        "egg shaker subdivision",
        "percussive body tap"
      ]
    },
    "r&b": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hand claps",
        "finger snaps",
        "egg shaker subdivision",
        "percussive body tap"
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
    "contactHardness": 0.694,
    "resonatorQ": 0.632,
    "nonlinearTransfer": 0.256,
    "inharmonicity": 0.083,
    "bodyCoupling": 0.547
  }
}
} as InstrumentDSPOverride;
