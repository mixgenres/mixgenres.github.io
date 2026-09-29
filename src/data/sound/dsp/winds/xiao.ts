import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Xiao end-blown Chinese bamboo flute */
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
      "end-blown breath",
      "breath phrasing",
      "finger-hole transitions",
      "register overblow"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.34,
    "pressureSensitivity": 0.82,
    "nonlinearDrive": 0.08,
    "attackCollision": 0.28,
    "spectralSpread": 0.54,
    "directionalAsymmetry": 0.34
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.99,
        "q": 4.5,
        "gain": 0.18
      },
      {
        "ratio": 1.99,
        "q": 3.2,
        "gain": 0.09
      },
      {
        "ratio": 3.02,
        "q": 2.4,
        "gain": 0.05
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
    "exciter": "end-blown breath",
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
      "end-blown breath",
      "breath phrasing",
      "finger-hole transitions",
      "register overblow"
    ],
    "response": {
      "contactHardness": 0.34,
      "resonatorQ": 0.68,
      "nonlinearTransfer": 0.08,
      "inharmonicity": 0.05,
      "bodyCoupling": 0.54
    }
  }
};
