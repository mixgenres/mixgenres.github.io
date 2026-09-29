import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Flamenco Guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "flamenco-guitar",
    "energyPath": "nail/string/bridge/soundboard/body",
    "bodyArchitecture": "soundboard",
    "primaryCollision": "nail/flesh-to-string and golpe-to-soundboard collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "picado",
      "ligado",
      "pulgar-apoyando",
      "rasgueado",
      "alzapúa",
      "golpe",
      "tirando"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.65,
    "pressureSensitivity": 0.585,
    "nonlinearDrive": 0.157,
    "attackCollision": 0.485,
    "spectralSpread": 0.553,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.65,
        "q": 2.0,
        "gain": 0.138
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.109
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.099
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.095
      }
    ],
    "soundboard": {
      "thudHz": 185,
      "thudGain": 0.22,
      "topModes": [
        190,
        320,
        580,
        940
      ],
      "coupling": 0.82
    }
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.2,
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
    "fleshVsNail": 0,
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
        "picado",
        "ligado",
        "pulgar-apoyando",
        "rasgueado"
      ]
    },
    "tango": {
      "excitationBias": 0.05,
      "brightness": 0.96,
      "damping": 0.06,
      "attack": 1.10,
      "body": 1.05,
      "articulation": ["marcato", "arrastre", "sincopa", "bordoneo", "picado", "golpe"]
    },
    "bossa-nova": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "picado",
        "ligado",
        "pulgar-apoyando",
        "rasgueado"
      ]
    },
    "latin-jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "picado",
        "ligado",
        "pulgar-apoyando",
        "rasgueado"
      ]
    },
    "classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "picado",
        "ligado",
        "pulgar-apoyando",
        "rasgueado"
      ]
    }
  },
  "instrumentSpecific": {
    "flamencoGuitar": {
      "soundboardThudHz": 185,
      "fleshVsNail": 0.9,
      "rasgueadoMicroTransients": 5,
      "golpeBodyCoupling": 0.82
    }
  },
  "physicalDetails": {
  "system": "instrument-specific",
  "construction": "declared acoustic/electronic construction",
  "exciter": "declared excitation",
  "asymmetries": [
    "performance-state dependence"
  ],
  "coupling": [
    "exciter-resonator",
    "body/air transfer"
  ],
  "artifactSources": [
    "contact noise"
  ],
  "detail": [
    "spanish-guitar requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.64,
    "resonatorQ": 0.768,
    "nonlinearTransfer": 0.25,
    "inharmonicity": 0.079,
    "bodyCoupling": 0.673
  }
}
} as InstrumentDSPOverride;
