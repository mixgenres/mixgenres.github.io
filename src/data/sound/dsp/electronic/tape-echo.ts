import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Tape echo. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "electronic",
    "energyPath": "oscillator/filter/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "circuit/switch/filter edge",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "delay-time setting",
      "feedback control",
      "wow/flutter and saturation"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.18,
    "pressureSensitivity": 0.53,
    "nonlinearDrive": 0.192,
    "attackCollision": 0.49,
    "spectralSpread": 0.555,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.139
      },
      {
        "ratio": 2.0,
        "q": 2.45,
        "gain": 0.109
      },
      {
        "ratio": 3.0,
        "q": 2.9,
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
  "damperNoise": 0.02,
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
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "dub": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "delay-time setting",
        "feedback control",
        "wow/flutter and saturation"
      ]
    },
    "rockabilly": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "delay-time setting",
        "feedback control",
        "wow/flutter and saturation"
      ]
    },
    "surf": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "delay-time setting",
        "feedback control",
        "wow/flutter and saturation"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "delay-time setting",
        "feedback control",
        "wow/flutter and saturation"
      ]
    },
    "studio effect": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "delay-time setting",
        "feedback control",
        "wow/flutter and saturation"
      ]
    }
  },
  "physicalDetails": {
  "system": "electronic-signal-chain",
  "construction": "electronic oscillator/filter/effect path",
  "exciter": "electronic source",
  "asymmetries": [
    "filter trajectory",
    "envelope/gate",
    "drive state",
    "effect feedback"
  ],
  "coupling": [
    "oscillator-filter",
    "filter-feedback",
    "effect loop"
  ],
  "artifactSources": [
    "switch/drive transients",
    "quantization/aliasing where intentional"
  ],
  "detail": [
    "electronic identity should not be forced into acoustic physics",
    "timbral motion comes from signal-path state",
    "effects are part of the instrument definition"
  ],
  "response": {
    "contactHardness": 0.494,
    "resonatorQ": 0.652,
    "nonlinearTransfer": 0.326,
    "inharmonicity": 0.068,
    "bodyCoupling": 0.533
  }
}
} as InstrumentDSPOverride;
