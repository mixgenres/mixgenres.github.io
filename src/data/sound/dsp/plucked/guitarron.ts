import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Guitarrón. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "guitarron-string",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "large-body",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "courses"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "double-octave pluck",
      "thumb pad attack",
      "acoustic body resonance"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.5,
    "pressureSensitivity": 0.63,
    "nonlinearDrive": 0.13,
    "attackCollision": 0.44,
    "spectralSpread": 0.531,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.133
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.106
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.098
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.093
      }
    ]
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
    "mariachi": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "double-octave pluck",
        "thumb pad attack",
        "acoustic body resonance"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "double-octave pluck",
        "thumb pad attack",
        "acoustic body resonance"
      ]
    },
    "latin": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "double-octave pluck",
        "thumb pad attack",
        "acoustic body resonance"
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
    "guitarron string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.526,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.18,
    "inharmonicity": 0.079,
    "bodyCoupling": 0.98
  }
}
} as InstrumentDSPOverride;
