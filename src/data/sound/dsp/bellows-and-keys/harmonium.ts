import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Harmonium. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "free-reed-reservoir",
    "energyPath": "key/reed/string",
    "bodyArchitecture": "wood-chamber",
    "primaryCollision": "mechanical key/hammer",
    "asymmetries": [
      "bellows"
    ],
    "couplingPaths": [
      "synth"
    ],
    "techniqueBindings": [
      "bellows pumping for dynamic control",
      "drone stop engagement",
      "sustained cluster chord voicing",
      "finger substitution legato"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.61,
    "pressureSensitivity": 0.705,
    "nonlinearDrive": 0.15,
    "attackCollision": 0.695,
    "spectralSpread": 0.654,
    "directionalAsymmetry": 0.34
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.65,
        "q": 2.0,
        "gain": 0.163
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.122
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.108
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.101
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.16,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0,
  "bodyKnock": 0,
  "rimImpact": 0,
  "bellowsNoise": 0.22,
  "damperNoise": 0,
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
  "keyworkClick": 0.08
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.316,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "bellows-flow"
  },
  "genreDialects": {
    "qawwali": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bellows pumping for dynamic control",
        "drone stop engagement",
        "sustained cluster chord voicing",
        "finger substitution legato"
      ]
    },
    "hindustani": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bellows pumping for dynamic control",
        "drone stop engagement",
        "sustained cluster chord voicing",
        "finger substitution legato"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bellows pumping for dynamic control",
        "drone stop engagement",
        "sustained cluster chord voicing",
        "finger substitution legato"
      ]
    },
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bellows pumping for dynamic control",
        "drone stop engagement",
        "sustained cluster chord voicing",
        "finger substitution legato"
      ]
    },
    "kirtan": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bellows pumping for dynamic control",
        "drone stop engagement",
        "sustained cluster chord voicing",
        "finger substitution legato"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bellows pumping for dynamic control",
        "drone stop engagement",
        "sustained cluster chord voicing",
        "finger substitution legato"
      ]
    }
  },
  "physicalDetails": {
  "system": "continuous-air-reed-pipe-bank",
  "construction": "air reservoir/wind chamber feeding resonant pipes or reeds",
  "exciter": "continuous air pressure",
  "asymmetries": [
    "pressure",
    "register drawbars/stops",
    "key/pallet opening"
  ],
  "coupling": [
    "common wind pressure",
    "multiple resonators",
    "cabinet"
  ],
  "artifactSources": [
    "key/pallet click",
    "wind noise",
    "valve leakage"
  ],
  "detail": [
    "sustained source is wind pressure",
    "registers alter pipe/reed populations",
    "note onset is valve/pallet plus resonator settling"
  ],
  "response": {
    "contactHardness": 0.586,
    "resonatorQ": 0.936,
    "nonlinearTransfer": 0.271,
    "inharmonicity": 0.083,
    "bodyCoupling": 0.843
  }
}
} as InstrumentDSPOverride;
