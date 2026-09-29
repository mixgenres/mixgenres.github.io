import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for 10-Hole Diatonic Harmonica (Blues Harp). Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air",
    "energyPath": "air-column/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "jet/reed/lip excitation",
    "asymmetries": [
      "pitch-bend",
      "vibrato"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "draw reed bending",
      "tongue-blocking percussive slaps",
      "cupped hand acoustic wah",
      "throat vibrato",
      "flutter tonguing"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.37,
    "pressureSensitivity": 0.785,
    "nonlinearDrive": 0.157,
    "attackCollision": 0.545,
    "spectralSpread": 0.582,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.145
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.113
      },
      {
        "ratio": 1.48,
        "q": 2.9,
        "gain": 0.102
      },
      {
        "ratio": 2.02,
        "q": 3.35,
        "gain": 0.096
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.14,
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
  "reedChatter": 0.12,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0,
  "pedalNoise": 0,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0.1,
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
    "blues": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "draw reed bending",
        "tongue-blocking percussive slaps",
        "cupped hand acoustic wah",
        "throat vibrato"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "draw reed bending",
        "tongue-blocking percussive slaps",
        "cupped hand acoustic wah",
        "throat vibrato"
      ]
    },
    "country": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "draw reed bending",
        "tongue-blocking percussive slaps",
        "cupped hand acoustic wah",
        "throat vibrato"
      ]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "draw reed bending",
        "tongue-blocking percussive slaps",
        "cupped hand acoustic wah",
        "throat vibrato"
      ]
    },
    "chicago-blues": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "draw reed bending",
        "tongue-blocking percussive slaps",
        "cupped hand acoustic wah",
        "throat vibrato"
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
    "contactHardness": 0.594,
    "resonatorQ": 0.59,
    "nonlinearTransfer": 0.285,
    "inharmonicity": 0.083,
    "bodyCoupling": 0.494
  }
}
} as InstrumentDSPOverride;
