import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Palmas. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "impact",
    "energyPath": "body/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "wood/flesh collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "palmas sordas",
      "palmas fuertes",
      "base and second-voice patterns",
      "flamenco compas accents"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.72,
    "pressureSensitivity": 0.4,
    "nonlinearDrive": 0.17,
    "attackCollision": 0.86,
    "spectralSpread": 0.733,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.7,
        "q": 2.0,
        "gain": 0.183
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.132
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.114
      },
      {
        "ratio": 2.91,
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
    "flamenco": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "palmas sordas",
        "palmas fuertes",
        "base and second-voice patterns",
        "flamenco compas accents"
      ]
    },
    "bulerias": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "palmas sordas",
        "palmas fuertes",
        "base and second-voice patterns",
        "flamenco compas accents"
      ]
    },
    "solea": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "palmas sordas",
        "palmas fuertes",
        "base and second-voice patterns",
        "flamenco compas accents"
      ]
    },
    "tangos": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "palmas sordas",
        "palmas fuertes",
        "base and second-voice patterns",
        "flamenco compas accents"
      ]
    },
    "rumba": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "palmas sordas",
        "palmas fuertes",
        "base and second-voice patterns",
        "flamenco compas accents"
      ]
    },
    "cantiñas": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "palmas sordas",
        "palmas fuertes",
        "base and second-voice patterns",
        "flamenco compas accents"
      ]
    },
    "sevillanas": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "palmas sordas",
        "palmas fuertes",
        "base and second-voice patterns",
        "flamenco compas accents"
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
    "contactHardness": 0.608,
    "resonatorQ": 0.505,
    "nonlinearTransfer": 0.187,
    "inharmonicity": 0.07,
    "bodyCoupling": 0.415
  }
}
} as InstrumentDSPOverride;
