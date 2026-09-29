import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Pandeiro. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "skin-faced",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [
      "center",
      "rim"
    ],
    "couplingPaths": [
      "snare"
    ],
    "techniqueBindings": [
      "thumb open bass pop (emulating the surdo drum)",
      "fingertip rim tap (emulating tamborim)",
      "heel of the palm rocking stroke",
      "cupped center slap for sharp snare-like crack",
      "finger-shake jingle roll"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.59,
    "pressureSensitivity": 0.615,
    "nonlinearDrive": 0.196,
    "attackCollision": 0.855,
    "spectralSpread": 0.73,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.54,
        "q": 2.0,
        "gain": 0.183
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.131
      },
      {
        "ratio": 1.545,
        "q": 2.9,
        "gain": 0.114
      },
      {
        "ratio": 2.35,
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
    "samba": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "thumb open bass pop (emulating the surdo drum)",
        "fingertip rim tap (emulating tamborim)",
        "heel of the palm rocking stroke",
        "cupped center slap for sharp snare-like crack"
      ]
    },
    "choro": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "thumb open bass pop (emulating the surdo drum)",
        "fingertip rim tap (emulating tamborim)",
        "heel of the palm rocking stroke",
        "cupped center slap for sharp snare-like crack"
      ]
    },
    "capoeira": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "thumb open bass pop (emulating the surdo drum)",
        "fingertip rim tap (emulating tamborim)",
        "heel of the palm rocking stroke",
        "cupped center slap for sharp snare-like crack"
      ]
    },
    "forro": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "thumb open bass pop (emulating the surdo drum)",
        "fingertip rim tap (emulating tamborim)",
        "heel of the palm rocking stroke",
        "cupped center slap for sharp snare-like crack"
      ]
    },
    "mpb": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "thumb open bass pop (emulating the surdo drum)",
        "fingertip rim tap (emulating tamborim)",
        "heel of the palm rocking stroke",
        "cupped center slap for sharp snare-like crack"
      ]
    },
    "baião": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "thumb open bass pop (emulating the surdo drum)",
        "fingertip rim tap (emulating tamborim)",
        "heel of the palm rocking stroke",
        "cupped center slap for sharp snare-like crack"
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
    "contactHardness": 0.688,
    "resonatorQ": 0.644,
    "nonlinearTransfer": 0.278,
    "inharmonicity": 0.196,
    "bodyCoupling": 0.546
  }
}
} as InstrumentDSPOverride;
