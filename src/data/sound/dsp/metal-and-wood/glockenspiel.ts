import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Glockenspiel. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "glockenspiel-mallet",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "metal-bar-resonator",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [
      "mute"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "brass mallet strike",
      "hard plastic mallet attack",
      "finger muting",
      "two-mallet rapid alternating roll"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.74,
    "pressureSensitivity": 0.46,
    "nonlinearDrive": 0.173,
    "attackCollision": 0.84,
    "spectralSpread": 0.723,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.58,
        "q": 2.0,
        "gain": 0.181
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.13
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.114
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.105
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
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "orchestral": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "brass mallet strike",
        "hard plastic mallet attack",
        "finger muting",
        "two-mallet rapid alternating roll"
      ]
    },
    "marching": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "brass mallet strike",
        "hard plastic mallet attack",
        "finger muting",
        "two-mallet rapid alternating roll"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "brass mallet strike",
        "hard plastic mallet attack",
        "finger muting",
        "two-mallet rapid alternating roll"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "brass mallet strike",
        "hard plastic mallet attack",
        "finger muting",
        "two-mallet rapid alternating roll"
      ]
    },
    "indie-rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "brass mallet strike",
        "hard plastic mallet attack",
        "finger muting",
        "two-mallet rapid alternating roll"
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
    "resonatorQ": 0.593,
    "nonlinearTransfer": 0.274,
    "inharmonicity": 0.312,
    "bodyCoupling": 0.524
  }
}
} as InstrumentDSPOverride;
