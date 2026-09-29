import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Harp. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "finger pad plucking",
      "rapid arpeggiation",
      "pedal accidentals adjustment",
      "palm damping"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.64,
    "pressureSensitivity": 0.56,
    "nonlinearDrive": 0.155,
    "attackCollision": 0.51,
    "spectralSpread": 0.565,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.7,
        "q": 2.0,
        "gain": 0.141
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.111
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
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "finger pad plucking",
        "rapid arpeggiation",
        "pedal accidentals adjustment",
        "palm damping"
      ]
    },
    "cinematic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad plucking",
        "rapid arpeggiation",
        "pedal accidentals adjustment",
        "palm damping"
      ]
    },
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad plucking",
        "rapid arpeggiation",
        "pedal accidentals adjustment",
        "palm damping"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad plucking",
        "rapid arpeggiation",
        "pedal accidentals adjustment",
        "palm damping"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "finger pad plucking",
        "rapid arpeggiation",
        "pedal accidentals adjustment",
        "palm damping"
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
    "contactHardness": 0.576,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.227,
    "inharmonicity": 0.069,
    "bodyCoupling": 0.98
  }
}
} as InstrumentDSPOverride;
