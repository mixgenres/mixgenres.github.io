import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Slide guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "mute",
      "pitch-bend",
      "slide",
      "vibrato"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "slide-bar contact",
      "picked or fingered attack",
      "position-based vibrato",
      "muted pick attack"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.6,
    "pressureSensitivity": 0.63,
    "nonlinearDrive": 0.148,
    "attackCollision": 0.44,
    "spectralSpread": 0.531,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.56,
        "q": 2.0,
        "gain": 0.133
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.106
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.098
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.093
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.2,
  "handContact": 0.1,
  "bodyKnock": 0.07,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.03,
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
    "strikeZoneLocation": "mixed",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "reservoir-flow"
  },
  "genreDialects": {
    "blues": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "slide-bar contact",
        "picked or fingered attack",
        "position-based vibrato",
        "muted pick attack"
      ]
    },
    "country": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "slide-bar contact",
        "picked or fingered attack",
        "position-based vibrato",
        "muted pick attack"
      ]
    },
    "roots": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "slide-bar contact",
        "picked or fingered attack",
        "position-based vibrato",
        "muted pick attack"
      ]
    },
    "americana": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "slide-bar contact",
        "picked or fingered attack",
        "position-based vibrato",
        "muted pick attack"
      ]
    },
    "genre-native performance": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "slide-bar contact",
        "picked or fingered attack",
        "position-based vibrato",
        "muted pick attack"
      ]
    }
  },
  "physicalDetails": {
  "system": "plucked-string",
  "construction": "instrument-specific string body",
  "exciter": "instrument-specific pick/finger/nail",
  "asymmetries": [
    "pick/finger direction",
    "stopping position",
    "string gauge/register"
  ],
  "coupling": [
    "string-bridge",
    "bridge-body",
    "body-air"
  ],
  "artifactSources": [
    "contact click",
    "string scrape",
    "finger/pick noise"
  ],
  "detail": [
    "slide-guitar string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.702,
    "resonatorQ": 0.816,
    "nonlinearTransfer": 0.275,
    "inharmonicity": 0.075,
    "bodyCoupling": 0.708
  }
}
} as InstrumentDSPOverride;
