import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Jinghu. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "jinghu-bowed-resonator",
    "energyPath": "bow/string/bridge/body",
    "bodyArchitecture": "small-drum-body",
    "primaryCollision": "stick-slip friction",
    "asymmetries": [
      "slide"
    ],
    "couplingPaths": [
      "soundboard"
    ],
    "techniqueBindings": [
      "horsehair bow trapped between strings",
      "snakeskin soundboard resonance",
      "rapid finger slides and vocal ornaments",
      "high-tension bamboo tube projection"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.44,
    "pressureSensitivity": 0.8,
    "nonlinearDrive": 0.119,
    "attackCollision": 0.58,
    "spectralSpread": 0.598,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.55,
        "q": 2.0,
        "gain": 0.15
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.115
      },
      {
        "ratio": 1.72,
        "q": 2.9,
        "gain": 0.103
      },
      {
        "ratio": 2.63,
        "q": 3.35,
        "gain": 0.097
      }
    ],
    "sympathetic": {
      "coupling": 0.18,
      "q": 28,
      "ratios": [
        1,
        1.125,
        1.25,
        1.5,
        2
      ],
      "decayScale": 0.9
    }
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.16,
  "pickZing": 0,
  "handContact": 0.06,
  "bodyKnock": 0.08,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.05,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0.24,
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
    "strikeZoneLocation": "fingerboard",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "beijing-opera": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "horsehair bow trapped between strings",
        "snakeskin soundboard resonance",
        "rapid finger slides and vocal ornaments",
        "high-tension bamboo tube projection"
      ]
    },
    "chinese-classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "horsehair bow trapped between strings",
        "snakeskin soundboard resonance",
        "rapid finger slides and vocal ornaments",
        "high-tension bamboo tube projection"
      ]
    },
    "traditional": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "horsehair bow trapped between strings",
        "snakeskin soundboard resonance",
        "rapid finger slides and vocal ornaments",
        "high-tension bamboo tube projection"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "horsehair bow trapped between strings",
        "snakeskin soundboard resonance",
        "rapid finger slides and vocal ornaments",
        "high-tension bamboo tube projection"
      ]
    }
  },
  "physicalDetails": {
  "system": "high-register-two-string-bowed-fiddle",
  "construction": "small snakeskin resonator",
  "exciter": "bow hair between strings",
  "asymmetries": [
    "high bow pressure sensitivity",
    "short resonator response",
    "left-hand sliding pitch"
  ],
  "coupling": [
    "strings-bridge-skin",
    "bow hair between strings"
  ],
  "artifactSources": [
    "bow scrape",
    "skin knock",
    "finger contact"
  ],
  "detail": [
    "two strings",
    "very small resonator",
    "opera accompaniment role",
    "high register"
  ],
  "response": {
    "contactHardness": 0.64,
    "resonatorQ": 0.84,
    "nonlinearTransfer": 0.24,
    "inharmonicity": 0.18,
    "bodyCoupling": 0.7
  }
}
} as InstrumentDSPOverride;
