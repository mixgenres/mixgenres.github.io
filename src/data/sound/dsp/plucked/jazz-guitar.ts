import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Jazz guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "fingerstyle comping",
      "pick comping",
      "drop voicing"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.72,
    "pressureSensitivity": 0.57,
    "nonlinearDrive": 0.17,
    "attackCollision": 0.5,
    "spectralSpread": 0.56,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.68,
        "q": 2.0,
        "gain": 0.14
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.11
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.1
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.095
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
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "fingerstyle comping",
        "pick comping",
        "drop voicing"
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
    "jazz-guitar string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.618,
    "resonatorQ": 0.828,
    "nonlinearTransfer": 0.217,
    "inharmonicity": 0.089,
    "bodyCoupling": 0.76
  }
}
} as InstrumentDSPOverride;
