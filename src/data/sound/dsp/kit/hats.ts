import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Hi-hats. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick/wire collision",
    "asymmetries": [
      "edge"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "tip on top cymbal closed click",
      "shoulder of stick on edge splash",
      "foot pedal chick tap",
      "foot pedal splash",
      "half-open sizzle wash"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.74,
    "pressureSensitivity": 0.58,
    "nonlinearDrive": 0.173,
    "attackCollision": 0.85,
    "spectralSpread": 0.728,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.61,
        "q": 2.0,
        "gain": 0.182
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.131
      },
      {
        "ratio": 1.58,
        "q": 2.9,
        "gain": 0.114
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
    "strikeZoneLocation": "edge",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "funk": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "tip on top cymbal closed click",
        "shoulder of stick on edge splash",
        "foot pedal chick tap",
        "foot pedal splash"
      ]
    },
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "tip on top cymbal closed click",
        "shoulder of stick on edge splash",
        "foot pedal chick tap",
        "foot pedal splash"
      ]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "tip on top cymbal closed click",
        "shoulder of stick on edge splash",
        "foot pedal chick tap",
        "foot pedal splash"
      ]
    },
    "hip-hop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tip on top cymbal closed click",
        "shoulder of stick on edge splash",
        "foot pedal chick tap",
        "foot pedal splash"
      ]
    },
    "disco": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tip on top cymbal closed click",
        "shoulder of stick on edge splash",
        "foot pedal chick tap",
        "foot pedal splash"
      ]
    },
    "house": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tip on top cymbal closed click",
        "shoulder of stick on edge splash",
        "foot pedal chick tap",
        "foot pedal splash"
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
    "resonatorQ": 0.607,
    "nonlinearTransfer": 0.296,
    "inharmonicity": 0.22,
    "bodyCoupling": 0.53
  }
}
} as InstrumentDSPOverride;
