import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for FM Electric Piano. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "hammer",
    "energyPath": "key/reed/string",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "mechanical key/hammer",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "FM operator index velocity scaling",
      "glassy chime attack",
      "sustained digital decay",
      "stereo chorus spreading"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.52,
    "pressureSensitivity": 0.75,
    "nonlinearDrive": 0.134,
    "attackCollision": 0.65,
    "spectralSpread": 0.632,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.56,
        "q": 2.0,
        "gain": 0.158
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.119
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.106
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.1
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
  "damperNoise": 0.16,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0.14,
  "pedalNoise": 0,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0.1
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "FM operator index velocity scaling",
        "glassy chime attack",
        "sustained digital decay",
        "stereo chorus spreading"
      ]
    },
    "ballad": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "FM operator index velocity scaling",
        "glassy chime attack",
        "sustained digital decay",
        "stereo chorus spreading"
      ]
    },
    "city-pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "FM operator index velocity scaling",
        "glassy chime attack",
        "sustained digital decay",
        "stereo chorus spreading"
      ]
    },
    "r&b": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "FM operator index velocity scaling",
        "glassy chime attack",
        "sustained digital decay",
        "stereo chorus spreading"
      ]
    },
    "synthwave": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "FM operator index velocity scaling",
        "glassy chime attack",
        "sustained digital decay",
        "stereo chorus spreading"
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
    "contactHardness": 0.592,
    "resonatorQ": 0.662,
    "nonlinearTransfer": 0.26,
    "inharmonicity": 0.085,
    "bodyCoupling": 0.578
  }
}
} as InstrumentDSPOverride;
