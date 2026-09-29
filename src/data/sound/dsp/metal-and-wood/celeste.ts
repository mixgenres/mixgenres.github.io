import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Celesta. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "celesta-felt-hammer",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "metal-plate-resonator",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [
      "damper"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "felt hammer strike on steel plates",
      "wooden resonator resonance",
      "damper pedal release",
      "delicate arpeggiation"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.69,
    "pressureSensitivity": 0.425,
    "nonlinearDrive": 0.164,
    "attackCollision": 0.875,
    "spectralSpread": 0.74,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.65,
        "q": 2.0,
        "gain": 0.185
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
    "handDamping": 0.28,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.306,
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
        "felt hammer strike on steel plates",
        "wooden resonator resonance",
        "damper pedal release",
        "delicate arpeggiation"
      ]
    },
    "cinematic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "felt hammer strike on steel plates",
        "wooden resonator resonance",
        "damper pedal release",
        "delicate arpeggiation"
      ]
    },
    "chamber": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "felt hammer strike on steel plates",
        "wooden resonator resonance",
        "damper pedal release",
        "delicate arpeggiation"
      ]
    },
    "fairytale": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "felt hammer strike on steel plates",
        "wooden resonator resonance",
        "damper pedal release",
        "delicate arpeggiation"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "felt hammer strike on steel plates",
        "wooden resonator resonance",
        "damper pedal release",
        "delicate arpeggiation"
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
    "contactHardness": 0.716,
    "resonatorQ": 0.56,
    "nonlinearTransfer": 0.223,
    "inharmonicity": 0.256,
    "bodyCoupling": 0.472
  }
}
} as InstrumentDSPOverride;
