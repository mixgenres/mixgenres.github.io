import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Agogô bells. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "impact",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [
      "rim"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "wooden stick striking low and high bell",
      "squeezing bells together for handle click",
      "interlocking syncopated ostinato",
      "rim shot accents"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.71,
    "pressureSensitivity": 0.475,
    "nonlinearDrive": 0.168,
    "attackCollision": 0.825,
    "spectralSpread": 0.716,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.55,
        "q": 2.0,
        "gain": 0.179
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
    "attackToPitchCoupling": 0.292,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "samba": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "wooden stick striking low and high bell",
        "squeezing bells together for handle click",
        "interlocking syncopated ostinato",
        "rim shot accents"
      ]
    },
    "batucada": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "wooden stick striking low and high bell",
        "squeezing bells together for handle click",
        "interlocking syncopated ostinato",
        "rim shot accents"
      ]
    },
    "capoeira": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "wooden stick striking low and high bell",
        "squeezing bells together for handle click",
        "interlocking syncopated ostinato",
        "rim shot accents"
      ]
    },
    "afrobeats": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "wooden stick striking low and high bell",
        "squeezing bells together for handle click",
        "interlocking syncopated ostinato",
        "rim shot accents"
      ]
    },
    "candomble": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "wooden stick striking low and high bell",
        "squeezing bells together for handle click",
        "interlocking syncopated ostinato",
        "rim shot accents"
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
    "contactHardness": 0.808,
    "resonatorQ": 0.618,
    "nonlinearTransfer": 0.306,
    "inharmonicity": 0.312,
    "bodyCoupling": 0.539
  }
}
} as InstrumentDSPOverride;
