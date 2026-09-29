import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Backing vocals. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "voice",
    "energyPath": "glottis/vocal tract",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "air/closure excitation",
    "asymmetries": [
      "vibrato"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "blended vocal harmony vowel shaping",
      "tight onset consonant synchronization",
      "subtle vibrato warm tails",
      "call-and-response dynamic balance"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.28,
    "pressureSensitivity": 0.85,
    "nonlinearDrive": 0.09,
    "attackCollision": 0.35,
    "spectralSpread": 0.488,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.68,
        "q": 2.0,
        "gain": 0.122
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.101
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.094
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.09
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
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "blended vocal harmony vowel shaping",
        "tight onset consonant synchronization",
        "subtle vibrato warm tails",
        "call-and-response dynamic balance"
      ]
    },
    "soul": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "blended vocal harmony vowel shaping",
        "tight onset consonant synchronization",
        "subtle vibrato warm tails",
        "call-and-response dynamic balance"
      ]
    },
    "gospel": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "blended vocal harmony vowel shaping",
        "tight onset consonant synchronization",
        "subtle vibrato warm tails",
        "call-and-response dynamic balance"
      ]
    },
    "r&b": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "blended vocal harmony vowel shaping",
        "tight onset consonant synchronization",
        "subtle vibrato warm tails",
        "call-and-response dynamic balance"
      ]
    },
    "afrobeats": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "blended vocal harmony vowel shaping",
        "tight onset consonant synchronization",
        "subtle vibrato warm tails",
        "call-and-response dynamic balance"
      ]
    },
    "reggae": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "blended vocal harmony vowel shaping",
        "tight onset consonant synchronization",
        "subtle vibrato warm tails",
        "call-and-response dynamic balance"
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
    "resonatorQ": 0.696,
    "nonlinearTransfer": 0.209,
    "inharmonicity": 0.07,
    "bodyCoupling": 0.598
  }
}
} as InstrumentDSPOverride;
