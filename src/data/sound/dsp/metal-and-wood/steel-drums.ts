import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Steel pan. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "steelpan-mallet",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "metal-pan-resonator",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "rubber-tipped mallet attack",
      "controlled roll reiteration",
      "damped note release",
      "register-aware voicing"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.7,
    "pressureSensitivity": 0.48,
    "nonlinearDrive": 0.166,
    "attackCollision": 0.82,
    "spectralSpread": 0.714,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.54,
        "q": 2.0,
        "gain": 0.178
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.129
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.113
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.105
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
  "damperNoise": 0.08,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0.2,
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
    "soca": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "rubber-tipped mallet attack",
        "controlled roll reiteration",
        "damped note release",
        "register-aware voicing"
      ]
    },
    "calypso": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "rubber-tipped mallet attack",
        "controlled roll reiteration",
        "damped note release",
        "register-aware voicing"
      ]
    },
    "steelband": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "rubber-tipped mallet attack",
        "controlled roll reiteration",
        "damped note release",
        "register-aware voicing"
      ]
    },
    "reggae": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "rubber-tipped mallet attack",
        "controlled roll reiteration",
        "damped note release",
        "register-aware voicing"
      ]
    },
    "genre-native performance": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "rubber-tipped mallet attack",
        "controlled roll reiteration",
        "damped note release",
        "register-aware voicing"
      ]
    }
  },
  "physicalDetails": {
  "system": "struck-resonator",
  "construction": "tuned resonant element with body/cavity",
  "exciter": "hammer/mallet/tangent",
  "asymmetries": [
    "contact hardness",
    "strike position",
    "damper state"
  ],
  "coupling": [
    "exciter-resonator",
    "resonator-body",
    "sympathetic notes"
  ],
  "artifactSources": [
    "key/action click",
    "hammer/mallet noise",
    "damper contact"
  ],
  "detail": [
    "attack is a collision spectrum",
    "modal ratios depend on resonator material",
    "damping changes both decay and spectral centroid"
  ],
  "response": {
    "contactHardness": 0.718,
    "resonatorQ": 0.83,
    "nonlinearTransfer": 0.238,
    "inharmonicity": 0.296,
    "bodyCoupling": 0.759
  }
}
} as InstrumentDSPOverride;
