import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Harpsichord. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "harpsichord-plectrum",
    "energyPath": "key/reed/string",
    "bodyArchitecture": "soundboard",
    "primaryCollision": "mechanical key/hammer",
    "asymmetries": [
    "pluck direction",
    "manual/register",
    "damper state"
],
    "couplingPaths": [
    "jack-plectrum-string",
    "string-bridge",
    "bridge-soundboard"
],
    "techniqueBindings": [
      "quill plectrum plucking action",
      "finger articulation timing",
      "manual registration switching",
      "ornamental embellishments"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.7,
    "pressureSensitivity": 0.71,
    "nonlinearDrive": 0.166,
    "attackCollision": 0.69,
    "spectralSpread": 0.651,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.64,
        "q": 2.0,
        "gain": 0.163
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.121
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
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "baroque": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "quill plectrum plucking action",
        "finger articulation timing",
        "manual registration switching",
        "ornamental embellishments"
      ]
    },
    "classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "quill plectrum plucking action",
        "finger articulation timing",
        "manual registration switching",
        "ornamental embellishments"
      ]
    },
    "early-music": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "quill plectrum plucking action",
        "finger articulation timing",
        "manual registration switching",
        "ornamental embellishments"
      ]
    },
    "chamber": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "quill plectrum plucking action",
        "finger articulation timing",
        "manual registration switching",
        "ornamental embellishments"
      ]
    }
  },
  "physicalDetails": {
  "system": "quill-plucked-keyboard",
  "construction": "light soundboard with bridges and plucked strings",
  "exciter": "quill/plectrum on jack",
  "asymmetries": [
    "pluck direction",
    "manual/register",
    "damper state"
  ],
  "coupling": [
    "jack-plectrum-string",
    "string-bridge",
    "bridge-soundboard"
  ],
  "artifactSources": [
    "jack click",
    "quill pluck",
    "damper contact",
    "key mechanism"
  ],
  "detail": [
    "no velocity-controlled hammer",
    "registration changes string sets/octaves",
    "pluck transient is bright and short"
  ],
  "response": {
    "contactHardness": 0.7,
    "resonatorQ": 0.66,
    "nonlinearTransfer": 0.08,
    "inharmonicity": 0.08,
    "bodyCoupling": 0.58
  }
}
} as InstrumentDSPOverride;
