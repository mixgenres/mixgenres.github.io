import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Music box. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "music-box-pins",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "metal-comb",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "pin-pluck transient",
      "mechanism-limited note sustain",
      "register-sensitive phrasing"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.72,
    "pressureSensitivity": 0.41,
    "nonlinearDrive": 0.17,
    "attackCollision": 0.89,
    "spectralSpread": 0.747,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.68,
        "q": 2.0,
        "gain": 0.187
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.133
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.116
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.107
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
  "damperNoise": 0.08,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0.2,
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
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "music-box": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "pin-pluck transient",
        "mechanism-limited note sustain",
        "register-sensitive phrasing"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "pin-pluck transient",
        "mechanism-limited note sustain",
        "register-sensitive phrasing"
      ]
    },
    "cinematic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "pin-pluck transient",
        "mechanism-limited note sustain",
        "register-sensitive phrasing"
      ]
    },
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "pin-pluck transient",
        "mechanism-limited note sustain",
        "register-sensitive phrasing"
      ]
    }
  },
  "physicalDetails": {
  "system": "struck-resonator",
  "construction": "tuned resonant element with body/cavity",
  "exciter": "hammer/mallet/tangent",
  "asymmetries": [
    "contact hardness",
    "strike position",
    "damper state"
  ],
  "coupling": [
    "exciter-resonator",
    "resonator-body",
    "sympathetic notes"
  ],
  "artifactSources": [
    "key/action click",
    "hammer/mallet noise",
    "damper contact"
  ],
  "detail": [
    "attack is a collision spectrum",
    "modal ratios depend on resonator material",
    "damping changes both decay and spectral centroid"
  ],
  "response": {
    "contactHardness": 0.786,
    "resonatorQ": 0.538,
    "nonlinearTransfer": 0.208,
    "inharmonicity": 0.312,
    "bodyCoupling": 0.493
  }
}
} as InstrumentDSPOverride;
