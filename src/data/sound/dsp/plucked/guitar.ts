import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Acoustic guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "mute"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "fingerstyle",
      "flatpick",
      "strum",
      "muted strum"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.69,
    "pressureSensitivity": 0.585,
    "nonlinearDrive": 0.164,
    "attackCollision": 0.485,
    "spectralSpread": 0.553,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.65,
        "q": 2.0,
        "gain": 0.138
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.109
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.099
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.095
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.06,
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
    "tango": {
      "excitationBias": 0.05, "brightness": 0.96, "damping": 0.06, "attack": 1.08, "body": 1.05,
      "articulation": ["marcato", "arrastre", "sincopa", "bordoneo", "muted-strum"]
    },
    "tango-electronico": {
      "excitationBias": 0.02, "brightness": 0.98, "damping": 0.08, "attack": 1.04, "body": 1.00,
      "articulation": ["short-chord", "sincopa", "muted-strum", "arrastre"]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "fingerstyle",
        "flatpick",
        "strum",
        "muted strum"
      ]
    },
    "country": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "fingerstyle",
        "flatpick",
        "strum",
        "muted strum"
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
    "guitar string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.588,
    "resonatorQ": 0.74,
    "nonlinearTransfer": 0.216,
    "inharmonicity": 0.076,
    "bodyCoupling": 0.652
  }
}
} as InstrumentDSPOverride;
