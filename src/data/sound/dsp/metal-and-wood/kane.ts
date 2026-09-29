import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Kane (Atarigane). Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "impact",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [
      "mute",
      "rim"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "antler mallet inside-rim strike (chi)",
      "rim rimshot snap (ki)",
      "dead stroke hand muting",
      "matsuri festival groove syncopation"
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
        "ratio": 0.62,
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
    "attackToPitchCoupling": 0.292,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "japanese-festival": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "antler mallet inside-rim strike (chi)",
        "rim rimshot snap (ki)",
        "dead stroke hand muting",
        "matsuri festival groove syncopation"
      ]
    },
    "matsuri": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "antler mallet inside-rim strike (chi)",
        "rim rimshot snap (ki)",
        "dead stroke hand muting",
        "matsuri festival groove syncopation"
      ]
    },
    "gagaku": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "antler mallet inside-rim strike (chi)",
        "rim rimshot snap (ki)",
        "dead stroke hand muting",
        "matsuri festival groove syncopation"
      ]
    },
    "kabuki": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "antler mallet inside-rim strike (chi)",
        "rim rimshot snap (ki)",
        "dead stroke hand muting",
        "matsuri festival groove syncopation"
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
    "contactHardness": 0.786,
    "resonatorQ": 0.602,
    "nonlinearTransfer": 0.274,
    "inharmonicity": 0.312,
    "bodyCoupling": 0.533
  }
}
} as InstrumentDSPOverride;
