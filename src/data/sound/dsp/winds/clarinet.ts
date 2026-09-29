import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Clarinet. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air",
    "energyPath": "air-column/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "jet/reed/lip excitation",
    "asymmetries": [
      "pitch-bend",
      "slide"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "single reed embouchure flexibility",
      "klezmer glissando throat bends",
      "subtle sub-tone warmth",
      "rapid staccato tonguing"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.32,
    "pressureSensitivity": 0.81,
    "nonlinearDrive": 0.098,
    "attackCollision": 0.43,
    "spectralSpread": 0.526,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.132
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.106
      },
      {
        "ratio": 1.48,
        "q": 2.9,
        "gain": 0.097
      },
      {
        "ratio": 2.02,
        "q": 3.35,
        "gain": 0.093
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
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "single reed embouchure flexibility",
        "klezmer glissando throat bends",
        "subtle sub-tone warmth",
        "rapid staccato tonguing"
      ]
    },
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "single reed embouchure flexibility",
        "klezmer glissando throat bends",
        "subtle sub-tone warmth",
        "rapid staccato tonguing"
      ]
    },
    "klezmer": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "single reed embouchure flexibility",
        "klezmer glissando throat bends",
        "subtle sub-tone warmth",
        "rapid staccato tonguing"
      ]
    },
    "choro": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "single reed embouchure flexibility",
        "klezmer glissando throat bends",
        "subtle sub-tone warmth",
        "rapid staccato tonguing"
      ]
    },
    "dixieland": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "single reed embouchure flexibility",
        "klezmer glissando throat bends",
        "subtle sub-tone warmth",
        "rapid staccato tonguing"
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
    "contactHardness": 0.574,
    "resonatorQ": 0.565,
    "nonlinearTransfer": 0.205,
    "inharmonicity": 0.077,
    "bodyCoupling": 0.486
  }
}
} as InstrumentDSPOverride;
