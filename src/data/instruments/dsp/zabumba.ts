import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Deep physical profile override for Zabumba. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "double-headed Brazilian bass drum",
    "primaryCollision": "beater membrane impact with opposite-head hand mute",
    "asymmetries": ["beater head", "hand head", "two-head coupling"],
    "couplingPaths": ["head-head", "head-shell", "shell-air"],
    "techniqueBindings": [
      "open tone",
      "bass tone",
      "slap",
      "finger/hand stroke",
      "roll"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.68,
    "pressureSensitivity": 0.57,
    "nonlinearDrive": 0.212,
    "attackCollision": 0.9,
    "spectralSpread": 0.752,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.63,
        "q": 2.0,
        "gain": 0.188
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.134
      },
      {
        "ratio": 1.59,
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
  "membraneFingerNoise": 0.26,
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
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open tone",
        "bass tone",
        "slap",
        "finger/hand stroke"
      ]
    },
    "dance": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open tone",
        "bass tone",
        "slap",
        "finger/hand stroke"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open tone",
        "bass tone",
        "slap",
        "finger/hand stroke"
      ]
    }
  },
  "physicalDetails": {
  "system": "membrane-shell-percussion",
  "construction": "tensioned membrane over resonant shell/body",
  "exciter": "hand/stick/beaters according to instrument",
  "asymmetries": [
    "center vs edge",
    "open vs damped",
    "hand vs stick",
    "rim contact"
  ],
  "coupling": [
    "membrane radial modes",
    "membrane circular modes",
    "shell/air cavity",
    "hand damping"
  ],
  "artifactSources": [
    "skin contact",
    "rim click",
    "shell knock"
  ],
  "detail": [
    "strike-zone controls modal mixture",
    "membrane tension controls decay",
    "shell/air coupling varies by stroke and hand damping"
  ],
  "response": {
    "contactHardness": 0.656,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.187,
    "inharmonicity": 0.232,
    "bodyCoupling": 0.932
  }
}
} as InstrumentDSPOverride;
