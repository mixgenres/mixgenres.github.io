import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Guitar harmonics. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [],
    "couplingPaths": [
      "sympathetic"
    ],
    "techniqueBindings": [
      "light fingertip touching harmonic nodes (12th, 7th, 5th frets)",
      "artificial pinch harmonic pluck",
      "open string sympathetic ringing",
      "behind-the-nut chimes"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.57,
    "pressureSensitivity": 0.625,
    "nonlinearDrive": 0.143,
    "attackCollision": 0.445,
    "spectralSpread": 0.534,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.57,
        "q": 2.0,
        "gain": 0.133
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.107
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.098
      },
      {
        "ratio": 2.91,
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
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "light fingertip touching harmonic nodes (12th, 7th, 5th frets)",
        "artificial pinch harmonic pluck",
        "open string sympathetic ringing",
        "behind-the-nut chimes"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "light fingertip touching harmonic nodes (12th, 7th, 5th frets)",
        "artificial pinch harmonic pluck",
        "open string sympathetic ringing",
        "behind-the-nut chimes"
      ]
    },
    "fusion": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "light fingertip touching harmonic nodes (12th, 7th, 5th frets)",
        "artificial pinch harmonic pluck",
        "open string sympathetic ringing",
        "behind-the-nut chimes"
      ]
    },
    "classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "light fingertip touching harmonic nodes (12th, 7th, 5th frets)",
        "artificial pinch harmonic pluck",
        "open string sympathetic ringing",
        "behind-the-nut chimes"
      ]
    },
    "acoustic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "light fingertip touching harmonic nodes (12th, 7th, 5th frets)",
        "artificial pinch harmonic pluck",
        "open string sympathetic ringing",
        "behind-the-nut chimes"
      ]
    }
  },
  "physicalDetails": {
  "system": "plucked-string-harmonic",
  "construction": "guitar body/soundboard",
  "exciter": "light touch harmonic node plus pluck",
  "asymmetries": [
    "node position",
    "touch release timing"
  ],
  "coupling": [
    "string harmonic node",
    "bridge",
    "soundboard"
  ],
  "artifactSources": [
    "light fingertip click",
    "string squeak"
  ],
  "detail": [
    "artificial/natural harmonic excitation",
    "very low fundamental attack energy",
    "node release is part of the transient"
  ],
  "response": {
    "contactHardness": 0.67,
    "resonatorQ": 0.626,
    "nonlinearTransfer": 0.293,
    "inharmonicity": 0.072,
    "bodyCoupling": 0.514
  }
}
} as InstrumentDSPOverride;
