import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Erhu. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "erhu-bowed-resonator",
    "energyPath": "bow/string/bridge/body",
    "bodyArchitecture": "small-drum-body",
    "primaryCollision": "stick-slip friction",
    "asymmetries": [
      "slide",
      "vibrato"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "continuous bow",
      "slide",
      "finger vibrato"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.37,
    "pressureSensitivity": 0.865,
    "nonlinearDrive": 0.107,
    "attackCollision": 0.545,
    "spectralSpread": 0.582,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.55,
        "q": 2.0,
        "gain": 0.145
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.113
      },
      {
        "ratio": 1.72,
        "q": 2.9,
        "gain": 0.102
      },
      {
        "ratio": 2.63,
        "q": 3.35,
        "gain": 0.096
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
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "reservoir-flow"
  },
  "genreDialects": {
    "chinese-traditional": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "continuous bow",
        "slide",
        "finger vibrato"
      ]
    }
  },
  "physicalDetails": {
  "system": "two-string-bowed-spike-fiddle",
  "construction": "small snakeskin-covered soundbox with long neck",
  "exciter": "bow hair passing between two strings",
  "asymmetries": [
    "bow pressure/direction",
    "left-hand finger pressure without fingerboard",
    "snakeskin response"
  ],
  "coupling": [
    "two strings",
    "bow hair between strings",
    "bridge-skin",
    "skin-air cavity"
  ],
  "artifactSources": [
    "bow hair scrape",
    "skin slap",
    "finger/string contact"
  ],
  "detail": [
    "2 strings",
    "bow passes between strings",
    "no fingerboard",
    "snakeskin soundbox",
    "continuous pitch inflection"
  ],
  "response": {
    "contactHardness": 0.52,
    "resonatorQ": 0.86,
    "nonlinearTransfer": 0.2,
    "inharmonicity": 0.16,
    "bodyCoupling": 0.78
  }
}
} as InstrumentDSPOverride;
