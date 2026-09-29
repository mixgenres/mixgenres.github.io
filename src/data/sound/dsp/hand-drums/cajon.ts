import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Cajón. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "cajon-plate",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "box-cavity",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [
      "center"
    ],
    "couplingPaths": [
      "snare",
      "wire"
    ],
    "techniqueBindings": [
      "center palm bass thump",
      "corner finger snare slap",
      "fingertip ghost taps",
      "side wood knock",
      "flamenco bulería accenting"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.59,
    "pressureSensitivity": 0.615,
    "nonlinearDrive": 0.196,
    "attackCollision": 0.825,
    "spectralSpread": 0.716,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.54,
        "q": 2.0,
        "gain": 0.179
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.13
      },
      {
        "ratio": 1.545,
        "q": 2.9,
        "gain": 0.113
      },
      {
        "ratio": 2.35,
        "q": 3.35,
        "gain": 0.105
      }
    ],
    "sympathetic": {
      "coupling": 0.18,
      "q": 28,
      "ratios": [
        1,
        1.125,
        1.25,
        1.5,
        2
      ],
      "decayScale": 0.9
    }
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
    "handDamping": 0.18,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.261,
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
        "center palm bass thump",
        "corner finger snare slap",
        "fingertip ghost taps",
        "side wood knock"
      ]
    },
    "afro-peruvian": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "center palm bass thump",
        "corner finger snare slap",
        "fingertip ghost taps",
        "side wood knock"
      ]
    },
    "rumba": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "center palm bass thump",
        "corner finger snare slap",
        "fingertip ghost taps",
        "side wood knock"
      ]
    },
    "acoustic-pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "center palm bass thump",
        "corner finger snare slap",
        "fingertip ghost taps",
        "side wood knock"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "center palm bass thump",
        "corner finger snare slap",
        "fingertip ghost taps",
        "side wood knock"
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
    "contactHardness": 0.668,
    "resonatorQ": 0.884,
    "nonlinearTransfer": 0.216,
    "inharmonicity": 0.19,
    "bodyCoupling": 0.796
  }
}
} as InstrumentDSPOverride;
