import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Bodhrán. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [
      "courses",
      "rim"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "double-ended tipper brush stroke",
      "inner hand skin pressure pitch modulation",
      "driving reel/jig rhythm",
      "tipper rim click"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.54,
    "pressureSensitivity": 0.64,
    "nonlinearDrive": 0.137,
    "attackCollision": 0.71,
    "spectralSpread": 0.661,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.165
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.123
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.108
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.101
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
    "strikeZoneLocation": "edge",
    "fleshVsNail": 0.18,
    "handDamping": 0,
    "attackToPitchCoupling": 0.292,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "double-ended tipper brush stroke",
        "inner hand skin pressure pitch modulation",
        "driving reel/jig rhythm",
        "tipper rim click"
      ]
    },
    "irish-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "double-ended tipper brush stroke",
        "inner hand skin pressure pitch modulation",
        "driving reel/jig rhythm",
        "tipper rim click"
      ]
    },
    "scottish-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "double-ended tipper brush stroke",
        "inner hand skin pressure pitch modulation",
        "driving reel/jig rhythm",
        "tipper rim click"
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
    "contactHardness": 0.636,
    "resonatorQ": 0.836,
    "nonlinearTransfer": 0.162,
    "inharmonicity": 0.229,
    "bodyCoupling": 0.789
  }
}
} as InstrumentDSPOverride;
