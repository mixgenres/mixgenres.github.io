import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Cowbell (Cencerro). Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "impact",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [
      "edge",
      "mute"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "open mouth heavy stick stroke",
      "closed edge dry high tap",
      "hand muting finger pressure",
      "bongo bell martillo pattern"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.72,
    "pressureSensitivity": 0.47,
    "nonlinearDrive": 0.17,
    "attackCollision": 0.83,
    "spectralSpread": 0.718,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.56,
        "q": 2.0,
        "gain": 0.18
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.13
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.113
      },
      {
        "ratio": 2.91,
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
    "strikeZoneLocation": "edge",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "salsa": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "open mouth heavy stick stroke",
        "closed edge dry high tap",
        "hand muting finger pressure",
        "bongo bell martillo pattern"
      ]
    },
    "funk": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "open mouth heavy stick stroke",
        "closed edge dry high tap",
        "hand muting finger pressure",
        "bongo bell martillo pattern"
      ]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "open mouth heavy stick stroke",
        "closed edge dry high tap",
        "hand muting finger pressure",
        "bongo bell martillo pattern"
      ]
    },
    "cumbia": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.06,
      "articulation": [
        "open mouth heavy stick stroke",
        "closed edge dry high tap",
        "hand muting finger pressure",
        "bongo bell martillo pattern"
      ]
    },
    "cha-cha": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open mouth heavy stick stroke",
        "closed edge dry high tap",
        "hand muting finger pressure",
        "bongo bell martillo pattern"
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
    "contactHardness": 0.8,
    "resonatorQ": 0.618,
    "nonlinearTransfer": 0.299,
    "inharmonicity": 0.312,
    "bodyCoupling": 0.541
  }
}
} as InstrumentDSPOverride;
