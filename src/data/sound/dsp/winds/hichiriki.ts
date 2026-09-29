import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Hichiriki. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air",
    "energyPath": "air-column/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "jet/reed/lip excitation",
    "asymmetries": [
      "courses",
      "pitch-bend"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "enbai lip-pressure microtonal bending",
      "large double-reed embouchure attack",
      "ornamental portamento glides",
      "ceremonial breath support"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.35,
    "pressureSensitivity": 0.795,
    "nonlinearDrive": 0.103,
    "attackCollision": 0.445,
    "spectralSpread": 0.534,
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
        "gain": 0.107
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
  "airHiss": 0.22,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0.025,
  "bodyKnock": 0,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0.16,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0,
  "pedalNoise": 0,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0.1,
  "keyworkClick": 0.1
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
    "gagaku": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "enbai lip-pressure microtonal bending",
        "large double-reed embouchure attack",
        "ornamental portamento glides",
        "ceremonial breath support"
      ]
    },
    "japanese-classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "enbai lip-pressure microtonal bending",
        "large double-reed embouchure attack",
        "ornamental portamento glides",
        "ceremonial breath support"
      ]
    },
    "ceremonial": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "enbai lip-pressure microtonal bending",
        "large double-reed embouchure attack",
        "ornamental portamento glides",
        "ceremonial breath support"
      ]
    }
  },
  "physicalDetails": {
  "system": "double-reed-reverse-conical",
  "construction": "short bamboo/wood reverse-conical bore",
  "exciter": "double reed with controlled embouchure",
  "asymmetries": [
    "reed pressure",
    "finger-hole venting",
    "strong register/timbre changes"
  ],
  "coupling": [
    "double reed-to-bore",
    "bore-to-body",
    "finger-hole venting"
  ],
  "artifactSources": [
    "reed scrape",
    "key/finger-hole click",
    "air turbulence"
  ],
  "detail": [
    "double reed",
    "reverse-conical bore",
    "Gagaku melodic role",
    "very strong reed harmonics"
  ],
  "response": {
    "contactHardness": 0.64,
    "resonatorQ": 0.86,
    "nonlinearTransfer": 0.22,
    "inharmonicity": 0.14,
    "bodyCoupling": 0.82
  }
}
} as InstrumentDSPOverride;
