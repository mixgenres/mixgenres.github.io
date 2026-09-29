import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Tubular bells. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "tubular-bell-mallet",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "metal-tube-resonator",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "felt mallet strike",
      "controlled damping",
      "ringing decay management"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.66,
    "pressureSensitivity": 0.44,
    "nonlinearDrive": 0.159,
    "attackCollision": 0.86,
    "spectralSpread": 0.733,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.62,
        "q": 2.0,
        "gain": 0.183
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.132
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.114
      },
      {
        "ratio": 2.91,
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
        "felt mallet strike",
        "controlled damping",
        "ringing decay management"
      ]
    },
    "cinematic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "felt mallet strike",
        "controlled damping",
        "ringing decay management"
      ]
    },
    "ceremonial": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "felt mallet strike",
        "controlled damping",
        "ringing decay management"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "felt mallet strike",
        "controlled damping",
        "ringing decay management"
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
    "contactHardness": 0.758,
    "resonatorQ": 0.944,
    "nonlinearTransfer": 0.267,
    "inharmonicity": 0.312,
    "bodyCoupling": 0.875
  }
}
} as InstrumentDSPOverride;
