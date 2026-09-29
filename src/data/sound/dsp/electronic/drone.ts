import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Drone texture. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "electronic",
    "energyPath": "oscillator/filter/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "circuit/switch/filter edge",
    "asymmetries": [],
    "couplingPaths": [
      "drone"
    ],
    "techniqueBindings": [
      "sustained open fifth register",
      "slow lowpass filter envelope swell",
      "subtle tape wow/flutter",
      "sub-octave coupling"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.28,
    "pressureSensitivity": 0.48,
    "nonlinearDrive": 0.09,
    "attackCollision": 0.54,
    "spectralSpread": 0.579,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.145
      },
      {
        "ratio": 2.0,
        "q": 2.45,
        "gain": 0.112
      },
      {
        "ratio": 3.0,
        "q": 2.9,
        "gain": 0.102
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
  "damperNoise": 0.02,
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
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "reservoir-flow"
  },
  "genreDialects": {
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "sustained open fifth register",
        "slow lowpass filter envelope swell",
        "subtle tape wow/flutter",
        "sub-octave coupling"
      ]
    },
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "sustained open fifth register",
        "slow lowpass filter envelope swell",
        "subtle tape wow/flutter",
        "sub-octave coupling"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "sustained open fifth register",
        "slow lowpass filter envelope swell",
        "subtle tape wow/flutter",
        "sub-octave coupling"
      ]
    },
    "raga": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "sustained open fifth register",
        "slow lowpass filter envelope swell",
        "subtle tape wow/flutter",
        "sub-octave coupling"
      ]
    },
    "electronic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "sustained open fifth register",
        "slow lowpass filter envelope swell",
        "subtle tape wow/flutter",
        "sub-octave coupling"
      ]
    }
  },
  "physicalDetails": {
  "system": "electronic-signal-chain",
  "construction": "electronic oscillator/filter/effect path",
  "exciter": "electronic source",
  "asymmetries": [
    "filter trajectory",
    "envelope/gate",
    "drive state",
    "effect feedback"
  ],
  "coupling": [
    "oscillator-filter",
    "filter-feedback",
    "effect loop"
  ],
  "artifactSources": [
    "switch/drive transients",
    "quantization/aliasing where intentional"
  ],
  "detail": [
    "electronic identity should not be forced into acoustic physics",
    "timbral motion comes from signal-path state",
    "effects are part of the instrument definition"
  ],
  "response": {
    "contactHardness": 0.5,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.326,
    "inharmonicity": 0.07,
    "bodyCoupling": 0.98
  }
}
} as InstrumentDSPOverride;
