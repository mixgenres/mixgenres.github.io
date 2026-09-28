import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Deep physical profile override for Acoustic Grand Piano. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "piano-hammer-string",
    "energyPath": "key/reed/string",
    "bodyArchitecture": "soundboard-bridge",
    "primaryCollision": "mechanical key/hammer",
    "asymmetries": [
    "hammer hardness",
    "strike point",
    "unison string count",
    "damper/pedal state"
],
    "couplingPaths": [
    "hammer-string",
    "string-bridge",
    "bridge-soundboard",
    "soundboard-air"
],
    "techniqueBindings": [
      "sustain pedal resonance",
      "octave octave bass coupling",
      "syncopated salsa montuno two-hand interlocking",
      "golpe de cluster palm slap",
      "chapa metal plate damping"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.56,
    "pressureSensitivity": 0.73,
    "nonlinearDrive": 0.191,
    "attackCollision": 0.76,
    "spectralSpread": 0.685,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.6,
        "q": 2.0,
        "gain": 0.171
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.126
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.11
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.103
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
        "sustain pedal resonance",
        "octave octave bass coupling",
        "syncopated salsa montuno two-hand interlocking",
        "golpe de cluster palm slap"
      ]
    },
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "sustain pedal resonance",
        "octave octave bass coupling",
        "syncopated salsa montuno two-hand interlocking",
        "golpe de cluster palm slap"
      ]
    },
    "salsa": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "sustain pedal resonance",
        "octave octave bass coupling",
        "syncopated salsa montuno two-hand interlocking",
        "golpe de cluster palm slap"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "sustain pedal resonance",
        "octave octave bass coupling",
        "syncopated salsa montuno two-hand interlocking",
        "golpe de cluster palm slap"
      ]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "sustain pedal resonance",
        "octave octave bass coupling",
        "syncopated salsa montuno two-hand interlocking",
        "golpe de cluster palm slap"
      ]
    },
    "gospel": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "sustain pedal resonance",
        "octave octave bass coupling",
        "syncopated salsa montuno two-hand interlocking",
        "golpe de cluster palm slap"
      ]
    },
    "bossa-nova": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "sustain pedal resonance",
        "octave octave bass coupling",
        "syncopated salsa montuno two-hand interlocking",
        "golpe de cluster palm slap"
      ]
    },
    "tango": {
      "excitationBias": 0.06,
      "brightness": 1.00,
      "damping": 0.015,
      "attack": 1.14,
      "body": 1.12,
      "articulation": ["marcato", "arrastre", "yumba", "chapa", "campanitas", "sincopa", "bordoneo"]
    }
  },
  "physicalDetails": {
  "system": "multi-string-hammer-soundboard",
  "construction": "wood soundboard with cast-iron plate, bridge and strings",
  "exciter": "felt-covered hammer",
  "asymmetries": [
    "hammer hardness",
    "strike point",
    "unison string count",
    "damper/pedal state"
  ],
  "coupling": [
    "hammer-string",
    "string-bridge",
    "bridge-soundboard",
    "soundboard-air"
  ],
  "artifactSources": [
    "hammer felt impact",
    "key/action",
    "damper lift",
    "pedal/mechanical noise"
  ],
  "detail": [
    "bass strings may use wound construction",
    "unison strings couple into one bridge/body mode",
    "sustain pedal lifts dampers globally",
    "soft pedal changes hammer/string interaction"
  ],
  "response": {
    "contactHardness": 0.76,
    "resonatorQ": 0.82,
    "nonlinearTransfer": 0.12,
    "inharmonicity": 0.18,
    "bodyCoupling": 0.86
  }
}
} as InstrumentDSPOverride;
