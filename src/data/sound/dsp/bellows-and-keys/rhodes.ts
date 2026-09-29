import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Rhodes Electric Piano. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "electric-tine",
    "energyPath": "key/reed/string",
    "bodyArchitecture": "tine-pickup",
    "primaryCollision": "mechanical key/hammer",
    "asymmetries": [
    "hammer hardness",
    "tine register",
    "pickup proximity"
],
    "couplingPaths": [
    "hammer-tine",
    "tine-tonebar",
    "tine-pickup"
],
    "techniqueBindings": [
      "neoprene hammer tine excitation",
      "magnetic pickup proximity overload",
      "mechanical damper pedal release",
      "stereo pan tremolo modulation",
      "extended chord cluster comping"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.63,
    "pressureSensitivity": 0.695,
    "nonlinearDrive": 0.153,
    "attackCollision": 0.705,
    "spectralSpread": 0.658,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.67,
        "q": 2.0,
        "gain": 0.165
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.122
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.108
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.101
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
    "handDamping": 0.28,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.306,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "neo-soul": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "neoprene hammer tine excitation",
        "magnetic pickup proximity overload",
        "mechanical damper pedal release",
        "stereo pan tremolo modulation"
      ]
    },
    "jazz-fusion": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "neoprene hammer tine excitation",
        "magnetic pickup proximity overload",
        "mechanical damper pedal release",
        "stereo pan tremolo modulation"
      ]
    },
    "funk": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "neoprene hammer tine excitation",
        "magnetic pickup proximity overload",
        "mechanical damper pedal release",
        "stereo pan tremolo modulation"
      ]
    },
    "rnb": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "neoprene hammer tine excitation",
        "magnetic pickup proximity overload",
        "mechanical damper pedal release",
        "stereo pan tremolo modulation"
      ]
    },
    "lofi": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "neoprene hammer tine excitation",
        "magnetic pickup proximity overload",
        "mechanical damper pedal release",
        "stereo pan tremolo modulation"
      ]
    },
    "house": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "neoprene hammer tine excitation",
        "magnetic pickup proximity overload",
        "mechanical damper pedal release",
        "stereo pan tremolo modulation"
      ]
    }
  },
  "physicalDetails": {
  "system": "electric-tine-keyboard",
  "construction": "tuned metal tines, tone bars, pickups and mechanical action",
  "exciter": "hammer striking tine",
  "asymmetries": [
    "hammer hardness",
    "tine register",
    "pickup proximity"
  ],
  "coupling": [
    "hammer-tine",
    "tine-tonebar",
    "tine-pickup"
  ],
  "artifactSources": [
    "hammer felt",
    "key/action",
    "damper lift",
    "pickup proximity coloration"
  ],
  "detail": [
    "tine bark increases with hard attack",
    "pickup distance changes brightness",
    "mechanical damping shapes release"
  ],
  "response": {
    "contactHardness": 0.72,
    "resonatorQ": 0.72,
    "nonlinearTransfer": 0.18,
    "inharmonicity": 0.1,
    "bodyCoupling": 0.52
  }
}
} as InstrumentDSPOverride;
