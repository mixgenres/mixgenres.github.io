import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Full Vocal Choir. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "voice",
    "energyPath": "glottis/vocal tract",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "air/closure excitation",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "polyphonic SATB voice leading and suspensions",
      "seamless staggered breathing for infinite sustains",
      "dynamic choral swells (messa di voce)",
      "gentle vocal onset without harsh consonants",
      "cathedral acoustic release decay"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.16,
    "pressureSensitivity": 0.91,
    "nonlinearDrive": 0.069,
    "attackCollision": 0.29,
    "spectralSpread": 0.459,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.56,
        "q": 2.0,
        "gain": 0.115
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.097
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.092
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.089
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
    "choral": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "polyphonic SATB voice leading and suspensions",
        "seamless staggered breathing for infinite sustains",
        "dynamic choral swells (messa di voce)",
        "gentle vocal onset without harsh consonants"
      ]
    },
    "cinematic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "polyphonic SATB voice leading and suspensions",
        "seamless staggered breathing for infinite sustains",
        "dynamic choral swells (messa di voce)",
        "gentle vocal onset without harsh consonants"
      ]
    },
    "classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "polyphonic SATB voice leading and suspensions",
        "seamless staggered breathing for infinite sustains",
        "dynamic choral swells (messa di voce)",
        "gentle vocal onset without harsh consonants"
      ]
    },
    "gospel": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "polyphonic SATB voice leading and suspensions",
        "seamless staggered breathing for infinite sustains",
        "dynamic choral swells (messa di voce)",
        "gentle vocal onset without harsh consonants"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "polyphonic SATB voice leading and suspensions",
        "seamless staggered breathing for infinite sustains",
        "dynamic choral swells (messa di voce)",
        "gentle vocal onset without harsh consonants"
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
    "resonatorQ": 0.748,
    "nonlinearTransfer": 0.231,
    "inharmonicity": 0.07,
    "bodyCoupling": 0.642
  }
}
} as InstrumentDSPOverride;
