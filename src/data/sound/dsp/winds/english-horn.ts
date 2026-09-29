import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for English horn (Cor anglais). Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air",
    "energyPath": "air-column/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "jet/reed/lip excitation",
    "asymmetries": [
      "courses",
      "vibrato"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "broad double reed voicing",
      "breath support dynamic shaping",
      "cantabile legato phrasing",
      "expressive throat vibrato"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.26,
    "pressureSensitivity": 0.84,
    "nonlinearDrive": 0.087,
    "attackCollision": 0.4,
    "spectralSpread": 0.512,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.128
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.104
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.096
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.092
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.16,
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
  "reedChatter": 0,
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
    "orchestral": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "broad double reed voicing",
        "breath support dynamic shaping",
        "cantabile legato phrasing",
        "expressive throat vibrato"
      ]
    },
    "cinematic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "broad double reed voicing",
        "breath support dynamic shaping",
        "cantabile legato phrasing",
        "expressive throat vibrato"
      ]
    },
    "chamber": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "broad double reed voicing",
        "breath support dynamic shaping",
        "cantabile legato phrasing",
        "expressive throat vibrato"
      ]
    },
    "impressionist": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "broad double reed voicing",
        "breath support dynamic shaping",
        "cantabile legato phrasing",
        "expressive throat vibrato"
      ]
    }
  },
  "physicalDetails": {
  "system": "reed-bore-aerophone",
  "construction": "reed plus tone-hole/bore resonator",
  "exciter": "single or double reed depending instrument",
  "asymmetries": [
    "reed pressure",
    "register venting",
    "tone-hole opening",
    "embouchure"
  ],
  "coupling": [
    "reed-bore",
    "tone holes",
    "body-wall resonances"
  ],
  "artifactSources": [
    "reed scrape",
    "key/pad click",
    "air turbulence"
  ],
  "detail": [
    "reed oscillation is impedance-coupled to bore",
    "tone-hole pattern changes effective bore",
    "attack is pressure/reed onset rather than oscillator envelope"
  ],
  "response": {
    "contactHardness": 0.6,
    "resonatorQ": 0.597,
    "nonlinearTransfer": 0.241,
    "inharmonicity": 0.083,
    "bodyCoupling": 0.516
  }
}
} as InstrumentDSPOverride;
