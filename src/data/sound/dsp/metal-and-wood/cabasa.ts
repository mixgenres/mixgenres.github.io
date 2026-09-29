import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Cabasa / Afoxé. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "impact",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "hand twisting beads against cylinder",
      "forward and backward hand shaking",
      "crisp rhythmic subdivisions",
      "accented palm slap catches"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.63,
    "pressureSensitivity": 0.455,
    "nonlinearDrive": 0.203,
    "attackCollision": 0.965,
    "spectralSpread": 0.783,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.59,
        "q": 2.0,
        "gain": 0.196
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.138
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.119
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.109
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
  "seedRattle": 0.28,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "mixed",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "bossa": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "hand twisting beads against cylinder",
        "forward and backward hand shaking",
        "crisp rhythmic subdivisions",
        "accented palm slap catches"
      ]
    },
    "samba": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "hand twisting beads against cylinder",
        "forward and backward hand shaking",
        "crisp rhythmic subdivisions",
        "accented palm slap catches"
      ]
    },
    "salsa": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "hand twisting beads against cylinder",
        "forward and backward hand shaking",
        "crisp rhythmic subdivisions",
        "accented palm slap catches"
      ]
    },
    "son-cubano": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hand twisting beads against cylinder",
        "forward and backward hand shaking",
        "crisp rhythmic subdivisions",
        "accented palm slap catches"
      ]
    },
    "latin-jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "hand twisting beads against cylinder",
        "forward and backward hand shaking",
        "crisp rhythmic subdivisions",
        "accented palm slap catches"
      ]
    },
    "cumbia": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.06,
      "articulation": [
        "hand twisting beads against cylinder",
        "forward and backward hand shaking",
        "crisp rhythmic subdivisions",
        "accented palm slap catches"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hand twisting beads against cylinder",
        "forward and backward hand shaking",
        "crisp rhythmic subdivisions",
        "accented palm slap catches"
      ]
    },
    "fusion": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hand twisting beads against cylinder",
        "forward and backward hand shaking",
        "crisp rhythmic subdivisions",
        "accented palm slap catches"
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
    "contactHardness": 0.716,
    "resonatorQ": 0.581,
    "nonlinearTransfer": 0.289,
    "inharmonicity": 0.256,
    "bodyCoupling": 0.469
  }
}
} as InstrumentDSPOverride;
