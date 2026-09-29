import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Timbales. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "skin-faced",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [
      "rim"
    ],
    "couplingPaths": [
      "shell"
    ],
    "techniqueBindings": [
      "cáscara stick pattern on side shell",
      "mambo bell syncopated drive",
      "paila rimshot press roll",
      "abanico 5-stroke stick roll into verse"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.65,
    "pressureSensitivity": 0.585,
    "nonlinearDrive": 0.157,
    "attackCollision": 0.765,
    "spectralSpread": 0.687,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.6,
        "q": 2.0,
        "gain": 0.172
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.126
      },
      {
        "ratio": 1.575,
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
  "rimImpact": 0.18,
  "bellowsNoise": 0,
  "damperNoise": 0,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0.1,
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
    "salsa": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "cáscara stick pattern on side shell",
        "mambo bell syncopated drive",
        "paila rimshot press roll",
        "abanico 5-stroke stick roll into verse"
      ]
    },
    "mambo": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "cáscara stick pattern on side shell",
        "mambo bell syncopated drive",
        "paila rimshot press roll",
        "abanico 5-stroke stick roll into verse"
      ]
    },
    "latin-jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "cáscara stick pattern on side shell",
        "mambo bell syncopated drive",
        "paila rimshot press roll",
        "abanico 5-stroke stick roll into verse"
      ]
    },
    "cha-cha-cha": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "cáscara stick pattern on side shell",
        "mambo bell syncopated drive",
        "paila rimshot press roll",
        "abanico 5-stroke stick roll into verse"
      ]
    },
    "timba": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "cáscara stick pattern on side shell",
        "mambo bell syncopated drive",
        "paila rimshot press roll",
        "abanico 5-stroke stick roll into verse"
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
    "contactHardness": 0.934,
    "resonatorQ": 0.74,
    "nonlinearTransfer": 0.299,
    "inharmonicity": 0.211,
    "bodyCoupling": 0.658
  }
}
} as InstrumentDSPOverride;
