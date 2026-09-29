import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Guqin. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "guqin-string-bridge",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-slab",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "slide",
      "vibrato"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "plucked harmonics",
      "slide/press vibrato",
      "open-string resonance"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.62,
    "pressureSensitivity": 0.57,
    "nonlinearDrive": 0.152,
    "attackCollision": 0.53,
    "spectralSpread": 0.574,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.68,
        "q": 2.0,
        "gain": 0.144
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.112
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.101
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.096
      }
    ],
    "sympathetic": {
      "coupling": 0.3,
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
  "stringSqueak": 0.035,
  "pickZing": 0.06,
  "handContact": 0.1,
  "bodyKnock": 0.06,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.03,
  "palletClick": 0,
  "slideNoise": 0.16,
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
    "chinese-traditional": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "plucked harmonics",
        "slide/press vibrato",
        "open-string resonance"
      ]
    }
  },
  "physicalDetails": {
  "system": "bridge-less-long-zither",
  "construction": "flat lacquered wood body with strings elevated by end supports",
  "exciter": "right-hand finger pluck; left-hand stop/slide/harmonic touch",
  "asymmetries": [
    "san open string",
    "an stopped string",
    "fan harmonic",
    "continuous left-hand slides"
  ],
  "coupling": [
    "string-to-lacquered-soundboard",
    "end-supports",
    "long-body air cavity"
  ],
  "artifactSources": [
    "finger noise",
    "string slide",
    "body tap"
  ],
  "detail": [
    "7 strings",
    "no conventional movable bridges",
    "13 hui harmonic/stopping markers",
    "quiet intimate dynamic range",
    "fan/an/san technique families"
  ],
  "response": {
    "contactHardness": 0.48,
    "resonatorQ": 0.9,
    "nonlinearTransfer": 0.08,
    "inharmonicity": 0.05,
    "bodyCoupling": 0.72
  }
}
} as InstrumentDSPOverride;
