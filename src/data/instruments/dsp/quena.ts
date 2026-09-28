import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Quena notched end-blown flute */
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
      "notched edge breath",
      "breath phrasing",
      "finger-hole transitions",
      "register overblow"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.31,
    "pressureSensitivity": 0.79,
    "nonlinearDrive": 0.07,
    "attackCollision": 0.34,
    "spectralSpread": 0.58,
    "directionalAsymmetry": 0.5
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.98,
        "q": 4.2,
        "gain": 0.19
      },
      {
        "ratio": 2.01,
        "q": 2.9,
        "gain": 0.08
      },
      {
        "ratio": 3.01,
        "q": 2.2,
        "gain": 0.045
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
    "exciter": "notched edge breath",
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
      "notched edge breath",
      "breath phrasing",
      "finger-hole transitions",
      "register overblow"
    ],
    "response": {
      "contactHardness": 0.31,
      "resonatorQ": 0.68,
      "nonlinearTransfer": 0.07,
      "inharmonicity": 0.05,
      "bodyCoupling": 0.54
    }
  }
};
