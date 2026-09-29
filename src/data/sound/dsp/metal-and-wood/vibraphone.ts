import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Vibraphone. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "vibraphone-mallet",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "metal-bar-resonator",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "hard and soft mallet attack",
      "pedal sustain control",
      "damped note release",
      "motor-driven tremolo"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.7,
    "pressureSensitivity": 0.42,
    "nonlinearDrive": 0.166,
    "attackCollision": 0.88,
    "spectralSpread": 0.742,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.66,
        "q": 2.0,
        "gain": 0.186
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.133
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.115
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
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "hard and soft mallet attack",
        "pedal sustain control",
        "damped note release",
        "motor-driven tremolo"
      ]
    },
    "bebop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hard and soft mallet attack",
        "pedal sustain control",
        "damped note release",
        "motor-driven tremolo"
      ]
    },
    "ballad": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "hard and soft mallet attack",
        "pedal sustain control",
        "damped note release",
        "motor-driven tremolo"
      ]
    },
    "city-pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "hard and soft mallet attack",
        "pedal sustain control",
        "damped note release",
        "motor-driven tremolo"
      ]
    },
    "latin-jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "hard and soft mallet attack",
        "pedal sustain control",
        "damped note release",
        "motor-driven tremolo"
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
    "contactHardness": 0.78,
    "resonatorQ": 0.802,
    "nonlinearTransfer": 0.208,
    "inharmonicity": 0.304,
    "bodyCoupling": 0.752
  }
}
} as InstrumentDSPOverride;
