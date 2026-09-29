import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Cuban Tres. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "tres-course",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-body",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "courses"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "pick guajeo ostinato",
      "repique fast triplet strum",
      "martillo thumb accent"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.65,
    "pressureSensitivity": 0.605,
    "nonlinearDrive": 0.157,
    "attackCollision": 0.465,
    "spectralSpread": 0.543,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.136
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
    "son-cubano": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "pick guajeo ostinato",
        "repique fast triplet strum",
        "martillo thumb accent"
      ]
    },
    "salsa": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "pick guajeo ostinato",
        "repique fast triplet strum",
        "martillo thumb accent"
      ]
    },
    "changui": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "pick guajeo ostinato",
        "repique fast triplet strum",
        "martillo thumb accent"
      ]
    },
    "latin-jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "pick guajeo ostinato",
        "repique fast triplet strum",
        "martillo thumb accent"
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
    "tres string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.704,
    "resonatorQ": 0.728,
    "nonlinearTransfer": 0.271,
    "inharmonicity": 0.08,
    "bodyCoupling": 0.636
  }
}
} as InstrumentDSPOverride;
