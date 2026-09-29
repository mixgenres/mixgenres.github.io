import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Pan flute closed-pipe edge-tone array */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air jet",
    "energyPath": "mouth/edge/air-column/body",
    "bodyArchitecture": "instrument-specific flute bore",
    "primaryCollision": "air jet to edge interaction",
    "asymmetries": [
      "hole venting",
      "breath pressure",
      "register overblow"
    ],
    "couplingPaths": [
      "jet-edge",
      "air-column",
      "tone holes"
    ],
    "techniqueBindings": [
      "pipe-edge breath",
      "breath phrasing",
      "finger-hole transitions",
      "register overblow"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.24,
    "pressureSensitivity": 0.72,
    "nonlinearDrive": 0.04,
    "attackCollision": 0.31,
    "spectralSpread": 0.48,
    "directionalAsymmetry": 0.42
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 5.0,
        "gain": 0.22
      },
      {
        "ratio": 2,
        "q": 3.1,
        "gain": 0.08
      },
      {
        "ratio": 3,
        "q": 2.1,
        "gain": 0.04
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
    "bodyKnock": 0,
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
    "membraneFingerNoise": 0,
    "seedRattle": 0,
    "fippleNoise": 0,
    "muteContact": 0,
    "breathBurst": 0,
    "keyworkClick": 0
  },
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.2,
    "releaseCoupling": 0.3,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "folk": {
      "excitationBias": 0.02,
      "brightness": 1.0,
      "damping": 0.01,
      "attack": 1.0,
      "articulation": [
        "breath phrasing",
        "finger-hole transitions",
        "register overblow"
      ]
    }
  },
  "physicalDetails": {
    "system": "aerophone-edge-tone",
    "construction": "instrument-specific flute bore",
    "exciter": "pipe-edge breath",
    "asymmetries": [
      "hole venting",
      "breath pressure",
      "register overblow"
    ],
    "coupling": [
      "jet-edge",
      "air-column",
      "tone holes"
    ],
    "artifactSources": [
      "breath hiss",
      "finger-hole noise",
      "edge turbulence"
    ],
    "detail": [
      "pipe-edge breath",
      "breath phrasing",
      "finger-hole transitions",
      "register overblow"
    ],
    "response": {
      "contactHardness": 0.24,
      "resonatorQ": 0.68,
      "nonlinearTransfer": 0.04,
      "inharmonicity": 0.05,
      "bodyCoupling": 0.54
    }
  }
};
