import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Ryuteki. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air",
    "energyPath": "air-column/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "jet/reed/lip excitation",
    "asymmetries": [
      "vibrato"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "tongued attack",
      "legato air",
      "breath phrasing",
      "vibrato"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.35,
    "pressureSensitivity": 0.795,
    "nonlinearDrive": 0.103,
    "attackCollision": 0.445,
    "spectralSpread": 0.534,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.133
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
        "gain": 0.093
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
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tongued attack",
        "legato air",
        "breath phrasing",
        "vibrato"
      ]
    },
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "tongued attack",
        "legato air",
        "breath phrasing",
        "vibrato"
      ]
    },
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tongued attack",
        "legato air",
        "breath phrasing",
        "vibrato"
      ]
    }
  },
  "physicalDetails": {
  "system": "transverse-bamboo-flute",
  "construction": "bamboo side-blown tube",
  "exciter": "edge-tone air jet",
  "asymmetries": [
    "breath angle",
    "finger-hole venting",
    "strong overblow/register transitions"
  ],
  "coupling": [
    "jet-to-bore",
    "bore modes",
    "finger-hole venting"
  ],
  "artifactSources": [
    "jet chiff",
    "finger-hole noise",
    "bamboo turbulence"
  ],
  "detail": [
    "side-blown transverse flute",
    "bamboo body",
    "Gagaku melodic partner to hichiriki"
  ],
  "response": {
    "contactHardness": 0.34,
    "resonatorQ": 0.78,
    "nonlinearTransfer": 0.08,
    "inharmonicity": 0.06,
    "bodyCoupling": 0.74
  }
}
} as InstrumentDSPOverride;
