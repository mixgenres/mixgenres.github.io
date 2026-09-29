import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Concertina. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "free-reed-bellows",
    "energyPath": "bellows/reed/chamber",
    "bodyArchitecture": "wood-chamber",
    "primaryCollision": "button + bellows pressure collision",
    "asymmetries": [
      "bellows"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "push-pull bellows reversals",
      "finger button dance cuts",
      "air button breathing",
      "octave chord stabs"
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
  "airHiss": 0.1,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0,
  "bodyKnock": 0,
  "rimImpact": 0,
  "bellowsNoise": 0.18,
  "damperNoise": 0,
  "palletClick": 0.16,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0.2,
  "bowRosin": 0,
  "hammerClick": 0,
  "pedalNoise": 0,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0.12
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
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "push-pull bellows reversals",
        "finger button dance cuts",
        "air button breathing",
        "octave chord stabs"
      ]
    },
    "irish-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "push-pull bellows reversals",
        "finger button dance cuts",
        "air button breathing",
        "octave chord stabs"
      ]
    },
    "english-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "push-pull bellows reversals",
        "finger button dance cuts",
        "air button breathing",
        "octave chord stabs"
      ]
    },
    "shanty": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "push-pull bellows reversals",
        "finger button dance cuts",
        "air button breathing",
        "octave chord stabs"
      ]
    },
    "polka": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "push-pull bellows reversals",
        "finger button dance cuts",
        "air button breathing",
        "octave chord stabs"
      ]
    }
  },
  "physicalDetails": {
  "system": "bellows-free-reed",
  "construction": "compact free-reed chambers with hand bellows",
  "exciter": "steel free reeds and pallets",
  "asymmetries": [
    "bellows direction can be bisonoric depending on concertina system",
    "pallet/key opening changes attack",
    "compact chamber pressure"
  ],
  "coupling": [
    "reed-to-chamber",
    "bellows-to-reed pressure",
    "endplate/cabinet resonance"
  ],
  "artifactSources": [
    "pallet click",
    "bellows folds",
    "reed chatter"
  ],
  "detail": [
    "system-dependent bisonoricity",
    "English concertina is not treated as identical to Anglo concertina",
    "do not impose accordion register architecture"
  ],
  "response": {
    "contactHardness": 0.62,
    "resonatorQ": 0.7,
    "nonlinearTransfer": 0.15,
    "inharmonicity": 0.1,
    "bodyCoupling": 0.66
  }
}
} as InstrumentDSPOverride;
