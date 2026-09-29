import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Afro-Cuban Batá Drum Trio. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "skin-faced",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [
      "courses"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "two-handed enu/chacha conversations",
      "sacred toque ostinatos",
      "muffled hand presses"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.62,
    "pressureSensitivity": 0.6,
    "nonlinearDrive": 0.152,
    "attackCollision": 0.75,
    "spectralSpread": 0.68,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.17
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.125
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.11
      },
      {
        "ratio": 3.0,
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
  "stringSqueak": 0.11,
  "pickZing": 0.06,
  "handContact": 0.1,
  "bodyKnock": 0.07,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.03,
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
    "fleshVsNail": 0.18,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "santeria": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "two-handed enu/chacha conversations",
        "sacred toque ostinatos",
        "muffled hand presses"
      ]
    },
    "rumba": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "two-handed enu/chacha conversations",
        "sacred toque ostinatos",
        "muffled hand presses"
      ]
    },
    "latin-jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "two-handed enu/chacha conversations",
        "sacred toque ostinatos",
        "muffled hand presses"
      ]
    },
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "two-handed enu/chacha conversations",
        "sacred toque ostinatos",
        "muffled hand presses"
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
    "contactHardness": 0.726,
    "resonatorQ": 0.838,
    "nonlinearTransfer": 0.256,
    "inharmonicity": 0.214,
    "bodyCoupling": 0.763
  }
}
} as InstrumentDSPOverride;
