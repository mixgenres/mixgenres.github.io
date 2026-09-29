import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Electric Bass Guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "solid-electric",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "mute",
      "slide"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "two-finger plucking",
      "thumb muting",
      "hammer-on",
      "slide"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.49,
    "pressureSensitivity": 0.585,
    "nonlinearDrive": 0.128,
    "attackCollision": 0.515,
    "spectralSpread": 0.567,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.65,
        "q": 2.0,
        "gain": 0.142
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.111
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.101
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
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "funk": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "two-finger plucking",
        "thumb muting",
        "hammer-on",
        "slide"
      ]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "two-finger plucking",
        "thumb muting",
        "hammer-on",
        "slide"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "two-finger plucking",
        "thumb muting",
        "hammer-on",
        "slide"
      ]
    },
    "rnb": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "two-finger plucking",
        "thumb muting",
        "hammer-on",
        "slide"
      ]
    },
    "salsa": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "two-finger plucking",
        "thumb muting",
        "hammer-on",
        "slide"
      ]
    },
    "reggae": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "two-finger plucking",
        "thumb muting",
        "hammer-on",
        "slide"
      ]
    }
  },
  "physicalDetails": {
  "system": "instrument-specific",
  "construction": "declared acoustic/electronic construction",
  "exciter": "declared excitation",
  "asymmetries": [
    "performance-state dependence"
  ],
  "coupling": [
    "exciter-resonator",
    "body/air transfer"
  ],
  "artifactSources": [
    "contact noise"
  ],
  "detail": [
    "bass requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.646,
    "resonatorQ": 0.729,
    "nonlinearTransfer": 0.286,
    "inharmonicity": 0.086,
    "bodyCoupling": 0.638
  }
}
} as InstrumentDSPOverride;
