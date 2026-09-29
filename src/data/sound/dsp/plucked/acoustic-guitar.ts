import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Steel-String Acoustic Guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "mute"
    ],
    "couplingPaths": [
      "bridge"
    ],
    "techniqueBindings": [
      "down-up flatpick strumming patterns",
      "Travis fingerpicking thumb-bass separation",
      "bridge palm muting",
      "hammer-on and pull-off legato runs"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.66,
    "pressureSensitivity": 0.6,
    "nonlinearDrive": 0.159,
    "attackCollision": 0.47,
    "spectralSpread": 0.546,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.62,
        "q": 2.0,
        "gain": 0.136
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.108
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.099
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.094
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
    "strikeZoneLocation": "bridge",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "tango-electronico": {
      "excitationBias": 0.03,
      "brightness": 0.98,
      "damping": 0.08,
      "attack": 1.04,
      "body": 1.00,
      "articulation": ["short-chord", "muted-strum", "sincopa", "arrastre"]
    },
    "tango": {
      "excitationBias": 0.05,
      "brightness": 0.96,
      "damping": 0.06,
      "attack": 1.08,
      "body": 1.04,
      "articulation": ["marcato", "arrastre", "muted-strum", "sincopa"]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "down-up flatpick strumming patterns",
        "Travis fingerpicking thumb-bass separation",
        "bridge palm muting",
        "hammer-on and pull-off legato runs"
      ]
    },
    "country": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "down-up flatpick strumming patterns",
        "Travis fingerpicking thumb-bass separation",
        "bridge palm muting",
        "hammer-on and pull-off legato runs"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "down-up flatpick strumming patterns",
        "Travis fingerpicking thumb-bass separation",
        "bridge palm muting",
        "hammer-on and pull-off legato runs"
      ]
    },
    "bluegrass": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "down-up flatpick strumming patterns",
        "Travis fingerpicking thumb-bass separation",
        "bridge palm muting",
        "hammer-on and pull-off legato runs"
      ]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "down-up flatpick strumming patterns",
        "Travis fingerpicking thumb-bass separation",
        "bridge palm muting",
        "hammer-on and pull-off legato runs"
      ]
    },
    "indie": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "down-up flatpick strumming patterns",
        "Travis fingerpicking thumb-bass separation",
        "bridge palm muting",
        "hammer-on and pull-off legato runs"
      ]
    },
    "americana": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "down-up flatpick strumming patterns",
        "Travis fingerpicking thumb-bass separation",
        "bridge palm muting",
        "hammer-on and pull-off legato runs"
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
    "acoustic-guitar string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.742,
    "resonatorQ": 0.865,
    "nonlinearTransfer": 0.288,
    "inharmonicity": 0.079,
    "bodyCoupling": 0.764
  }
}
} as InstrumentDSPOverride;
