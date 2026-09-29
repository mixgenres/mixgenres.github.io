import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Shakuhachi. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air",
    "energyPath": "air-column/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "jet/reed/lip excitation",
    "asymmetries": [
      "pitch-bend",
      "vibrato"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "meri/kari pitch bend",
      "muraiki breath",
      "yuri vibrato"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.37,
    "pressureSensitivity": 0.785,
    "nonlinearDrive": 0.107,
    "attackCollision": 0.455,
    "spectralSpread": 0.538,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.135
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.107
      },
      {
        "ratio": 1.48,
        "q": 2.9,
        "gain": 0.098
      },
      {
        "ratio": 2.02,
        "q": 3.35,
        "gain": 0.094
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.24,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0.025,
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
  "fippleNoise": 0.08,
  "muteContact": 0,
  "breathBurst": 0.1,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "japanese-traditional": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "meri/kari pitch bend",
        "muraiki breath",
        "yuri vibrato"
      ]
    }
  },
  "physicalDetails": {
  "system": "end-blown-bamboo-flute",
  "construction": "bamboo end-blown bore with utaguchi edge",
  "exciter": "angled breath jet",
  "asymmetries": [
    "head-angle air jet",
    "meri/kari embouchure pitch changes",
    "finger-hole partial opening"
  ],
  "coupling": [
    "jet-edge",
    "bore",
    "finger-hole venting"
  ],
  "artifactSources": [
    "breath turbulence",
    "edge noise",
    "finger-hole noise"
  ],
  "detail": [
    "end-blown",
    "meri/kari changes pitch and color by embouchure angle",
    "prominent breath/noise component"
  ],
  "response": {
    "contactHardness": 0.3,
    "resonatorQ": 0.8,
    "nonlinearTransfer": 0.1,
    "inharmonicity": 0.14,
    "bodyCoupling": 0.9
  }
}
} as InstrumentDSPOverride;
