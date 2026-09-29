import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for 12-string guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "12-string-course",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "soundboard",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "courses",
      "mute"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "flatpick downward strum across courses",
      "fingerstyle double-string rolling",
      "palm muting near saddle",
      "octave shimmer jangle"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.59,
    "pressureSensitivity": 0.635,
    "nonlinearDrive": 0.146,
    "attackCollision": 0.435,
    "spectralSpread": 0.529,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.132
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.106
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.097
      },
      {
        "ratio": 3.0,
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
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "flatpick downward strum across courses",
        "fingerstyle double-string rolling",
        "palm muting near saddle",
        "octave shimmer jangle"
      ]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "flatpick downward strum across courses",
        "fingerstyle double-string rolling",
        "palm muting near saddle",
        "octave shimmer jangle"
      ]
    },
    "jangle-pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "flatpick downward strum across courses",
        "fingerstyle double-string rolling",
        "palm muting near saddle",
        "octave shimmer jangle"
      ]
    },
    "country": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "flatpick downward strum across courses",
        "fingerstyle double-string rolling",
        "palm muting near saddle",
        "octave shimmer jangle"
      ]
    },
    "psychedelic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "flatpick downward strum across courses",
        "fingerstyle double-string rolling",
        "palm muting near saddle",
        "octave shimmer jangle"
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
    "12-string-guitar string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.755,
    "resonatorQ": 0.892,
    "nonlinearTransfer": 0.279,
    "inharmonicity": 0.092,
    "bodyCoupling": 0.812
  }
}
} as InstrumentDSPOverride;
