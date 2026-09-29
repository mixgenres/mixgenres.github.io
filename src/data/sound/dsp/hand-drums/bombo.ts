import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Bombo. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [
      "rim"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "padded mallet skin stroke",
      "wooden rim (aro) stick click",
      "interlocking rim-and-head rhythm",
      "decay damping"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.68,
    "pressureSensitivity": 0.57,
    "nonlinearDrive": 0.162,
    "attackCollision": 0.78,
    "spectralSpread": 0.694,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.63,
        "q": 2.0,
        "gain": 0.174
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.127
      },
      {
        "ratio": 1.59,
        "q": 2.9,
        "gain": 0.111
      },
      {
        "ratio": 2.35,
        "q": 3.35,
        "gain": 0.103
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
    "fleshVsNail": 0.18,
    "handDamping": 0,
    "attackToPitchCoupling": 0.292,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "andean-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "padded mallet skin stroke",
        "wooden rim (aro) stick click",
        "interlocking rim-and-head rhythm",
        "decay damping"
      ]
    },
    "chacarera": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "padded mallet skin stroke",
        "wooden rim (aro) stick click",
        "interlocking rim-and-head rhythm",
        "decay damping"
      ]
    },
    "zamba": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "padded mallet skin stroke",
        "wooden rim (aro) stick click",
        "interlocking rim-and-head rhythm",
        "decay damping"
      ]
    },
    "cumbia": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.06,
      "articulation": [
        "padded mallet skin stroke",
        "wooden rim (aro) stick click",
        "interlocking rim-and-head rhythm",
        "decay damping"
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
    "contactHardness": 0.634,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.158,
    "inharmonicity": 0.244,
    "bodyCoupling": 0.98
  }
}
} as InstrumentDSPOverride;
