import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Kalimba / Mbira. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "kalimba-tine",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "vibrato"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "two-thumb downward plucking",
      "index finger upward flick",
      "resonant soundhole vibrato modulation",
      "buzzing bottle-cap timbre"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.57,
    "pressureSensitivity": 0.595,
    "nonlinearDrive": 0.143,
    "attackCollision": 0.475,
    "spectralSpread": 0.548,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.63,
        "q": 2.0,
        "gain": 0.137
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
    "african-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "two-thumb downward plucking",
        "index finger upward flick",
        "resonant soundhole vibrato modulation",
        "buzzing bottle-cap timbre"
      ]
    },
    "mbira-dza-vadzimu": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "two-thumb downward plucking",
        "index finger upward flick",
        "resonant soundhole vibrato modulation",
        "buzzing bottle-cap timbre"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "two-thumb downward plucking",
        "index finger upward flick",
        "resonant soundhole vibrato modulation",
        "buzzing bottle-cap timbre"
      ]
    },
    "afrobeats": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "two-thumb downward plucking",
        "index finger upward flick",
        "resonant soundhole vibrato modulation",
        "buzzing bottle-cap timbre"
      ]
    },
    "acoustic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "two-thumb downward plucking",
        "index finger upward flick",
        "resonant soundhole vibrato modulation",
        "buzzing bottle-cap timbre"
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
    "kalimba requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.652,
    "resonatorQ": 0.552,
    "nonlinearTransfer": 0.179,
    "inharmonicity": 0.094,
    "bodyCoupling": 0.51
  }
}
} as InstrumentDSPOverride;
