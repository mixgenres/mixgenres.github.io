import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Clavinet. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "electric-tangent-string",
    "energyPath": "key/reed/string",
    "bodyArchitecture": "pickup-body",
    "primaryCollision": "mechanical key/hammer",
    "asymmetries": [
    "tangent position",
    "finger mute",
    "pickup position"
],
    "couplingPaths": [
    "tangent-string",
    "string-pickup",
    "body contact"
],
    "techniqueBindings": [
      "finger mute",
      "pick-like attack",
      "percussive chord"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.69,
    "pressureSensitivity": 0.715,
    "nonlinearDrive": 0.164,
    "attackCollision": 0.685,
    "spectralSpread": 0.649,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.63,
        "q": 2.0,
        "gain": 0.162
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.121
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.107
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.101
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
  "damperNoise": 0.16,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0.14,
  "pedalNoise": 0,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0.1
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "funk": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "finger mute",
        "pick-like attack",
        "percussive chord"
      ]
    }
  },
  "physicalDetails": {
  "system": "tangent-string-electric",
  "construction": "short strings with electromagnetic pickup and finger damping",
  "exciter": "tangent pressed against string",
  "asymmetries": [
    "tangent position",
    "finger mute",
    "pickup position"
  ],
  "coupling": [
    "tangent-string",
    "string-pickup",
    "body contact"
  ],
  "artifactSources": [
    "tangent click",
    "string slap",
    "finger mute noise",
    "pickup mechanical thump"
  ],
  "detail": [
    "percussive funk attack comes from tangent-string collision",
    "finger muting is integral to decay",
    "pickup placement changes harmonic balance"
  ],
  "response": {
    "contactHardness": 0.82,
    "resonatorQ": 0.54,
    "nonlinearTransfer": 0.2,
    "inharmonicity": 0.12,
    "bodyCoupling": 0.4
  }
}
} as InstrumentDSPOverride;
