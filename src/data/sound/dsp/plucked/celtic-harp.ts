import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Celtic harp. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [],
    "couplingPaths": [
      "wire"
    ],
    "techniqueBindings": [
      "finger pad plucking",
      "wire string fingernail ringing",
      "lever pitch shifts",
      "interlocking two-hand ornaments"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.65,
    "pressureSensitivity": 0.585,
    "nonlinearDrive": 0.157,
    "attackCollision": 0.485,
    "spectralSpread": 0.553,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.65,
        "q": 2.0,
        "gain": 0.138
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.109
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.099
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
  "stringSqueak": 0.04,
  "pickZing": 0.06,
  "handContact": 0.06,
  "bodyKnock": 0.08,
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
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad plucking",
        "wire string fingernail ringing",
        "lever pitch shifts",
        "interlocking two-hand ornaments"
      ]
    },
    "irish-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad plucking",
        "wire string fingernail ringing",
        "lever pitch shifts",
        "interlocking two-hand ornaments"
      ]
    },
    "scottish-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad plucking",
        "wire string fingernail ringing",
        "lever pitch shifts",
        "interlocking two-hand ornaments"
      ]
    },
    "renaissance": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad plucking",
        "wire string fingernail ringing",
        "lever pitch shifts",
        "interlocking two-hand ornaments"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad plucking",
        "wire string fingernail ringing",
        "lever pitch shifts",
        "interlocking two-hand ornaments"
      ]
    }
  },
  "physicalDetails": {
  "system": "open-frame-plucked-resonator",
  "construction": "wooden soundboard and open frame",
  "exciter": "fingers",
  "asymmetries": [
    "plucking position",
    "string register"
  ],
  "coupling": [
    "string-bridge",
    "soundboard-air",
    "frame"
  ],
  "artifactSources": [
    "finger release",
    "soundboard knock"
  ],
  "detail": [
    "individual string lengths",
    "open frame resonance",
    "pedal/lever or diatonic tuning depending model"
  ],
  "response": {
    "contactHardness": 0.596,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.22,
    "inharmonicity": 0.071,
    "bodyCoupling": 0.967
  }
}
} as InstrumentDSPOverride;
