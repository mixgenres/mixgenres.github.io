import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Synth voice. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "voice",
    "energyPath": "glottis/vocal tract",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "air/closure excitation",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "breath onset",
      "legato phrase",
      "vowel shaping",
      "chest/head register"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.3,
    "pressureSensitivity": 0.84,
    "nonlinearDrive": 0.094,
    "attackCollision": 0.36,
    "spectralSpread": 0.493,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.7,
        "q": 2.0,
        "gain": 0.123
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.102
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.094
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.091
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.18,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0,
  "bodyKnock": 0,
  "rimImpact": 0,
  "bellowsNoise": 0,
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
  "breathBurst": 0.12,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "soul": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "breath onset",
        "legato phrase",
        "vowel shaping",
        "chest/head register"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "breath onset",
        "legato phrase",
        "vowel shaping",
        "chest/head register"
      ]
    }
  },
  "physicalDetails": {
  "system": "source-filter-voice",
  "construction": "glottis plus variable vocal tract",
  "exciter": "vocal-fold self-oscillation",
  "asymmetries": [
    "vowel formants",
    "consonant onset",
    "breath/pressed register",
    "vibrato"
  ],
  "coupling": [
    "glottis-vocal tract",
    "oral/nasal cavities"
  ],
  "artifactSources": [
    "breath",
    "consonant noise",
    "vocal fry/closure"
  ],
  "detail": [
    "formants are resonator modes rather than EQ alone",
    "vowel identity changes resonant frequencies",
    "onset depends on glottal closure and airflow"
  ],
  "response": {
    "contactHardness": 0.528,
    "resonatorQ": 0.66,
    "nonlinearTransfer": 0.209,
    "inharmonicity": 0.07,
    "bodyCoupling": 0.562
  }
}
} as InstrumentDSPOverride;
