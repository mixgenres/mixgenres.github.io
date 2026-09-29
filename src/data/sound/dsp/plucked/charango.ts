import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Charango. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "charango-course",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "small-body",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "courses",
      "mute"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "repique rapid index-finger roll",
      "trémolo de charango",
      "syncopated fingerstyle arpeggio",
      "palm mute apagado"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.63,
    "pressureSensitivity": 0.595,
    "nonlinearDrive": 0.153,
    "attackCollision": 0.475,
    "spectralSpread": 0.548,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.137
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.108
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.099
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.094
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.2,
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
    "andean-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "repique rapid index-finger roll",
        "trémolo de charango",
        "syncopated fingerstyle arpeggio",
        "palm mute apagado"
      ]
    },
    "huayno": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "repique rapid index-finger roll",
        "trémolo de charango",
        "syncopated fingerstyle arpeggio",
        "palm mute apagado"
      ]
    },
    "carnavalito": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "repique rapid index-finger roll",
        "trémolo de charango",
        "syncopated fingerstyle arpeggio",
        "palm mute apagado"
      ]
    },
    "cueca": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "repique rapid index-finger roll",
        "trémolo de charango",
        "syncopated fingerstyle arpeggio",
        "palm mute apagado"
      ]
    }
  },
  "physicalDetails": {
  "system": "plucked-string",
  "construction": "instrument-specific string body",
  "exciter": "instrument-specific pick/finger/nail",
  "asymmetries": [
    "pick/finger direction",
    "stopping position",
    "string gauge/register"
  ],
  "coupling": [
    "string-bridge",
    "bridge-body",
    "body-air"
  ],
  "artifactSources": [
    "contact click",
    "string scrape",
    "finger/pick noise"
  ],
  "detail": [
    "charango string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.684,
    "resonatorQ": 0.605,
    "nonlinearTransfer": 0.273,
    "inharmonicity": 0.074,
    "bodyCoupling": 0.506
  }
}
} as InstrumentDSPOverride;
