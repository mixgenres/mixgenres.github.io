import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Rhythm bones. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "impact",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [
      "courses"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "wrist whip momentum clacking",
      "single click accents",
      "rapid continuous roll (triplets)",
      "double-hand polyrhythmic clatter"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.62,
    "pressureSensitivity": 0.46,
    "nonlinearDrive": 0.152,
    "attackCollision": 0.84,
    "spectralSpread": 0.723,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.181
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.13
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.114
      },
      {
        "ratio": 3.0,
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
  "handContact": 0,
  "bodyKnock": 0.1,
  "rimImpact": 0.16,
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
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "reservoir-flow"
  },
  "genreDialects": {
    "irish-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "wrist whip momentum clacking",
        "single click accents",
        "rapid continuous roll (triplets)",
        "double-hand polyrhythmic clatter"
      ]
    },
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "wrist whip momentum clacking",
        "single click accents",
        "rapid continuous roll (triplets)",
        "double-hand polyrhythmic clatter"
      ]
    },
    "minstrel": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "wrist whip momentum clacking",
        "single click accents",
        "rapid continuous roll (triplets)",
        "double-hand polyrhythmic clatter"
      ]
    },
    "bluegrass": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "wrist whip momentum clacking",
        "single click accents",
        "rapid continuous roll (triplets)",
        "double-hand polyrhythmic clatter"
      ]
    },
    "zydeco": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "wrist whip momentum clacking",
        "single click accents",
        "rapid continuous roll (triplets)",
        "double-hand polyrhythmic clatter"
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
    "contactHardness": 0.682,
    "resonatorQ": 0.492,
    "nonlinearTransfer": 0.172,
    "inharmonicity": 0.248,
    "bodyCoupling": 0.415
  }
}
} as InstrumentDSPOverride;
