import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Upright Bass. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
    "pizzicato/arco",
    "bow pressure",
    "register",
    "slap/strappata"
],
    "couplingPaths": [
    "string-bridge",
    "bridge-body",
    "soundpost/body"
],
    "techniqueBindings": [
      "pizzicato",
      "arco",
      "walking",
      "one-finger pull",
      "arrastre drag",
      "slap-pop",
      "strappata slap",
      "golpe body thud"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.59,
    "pressureSensitivity": 0.585,
    "nonlinearDrive": 0.196,
    "attackCollision": 0.605,
    "spectralSpread": 0.61,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.153
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.116
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.104
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.098
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.06,
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
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "pizzicato",
        "arco",
        "walking",
        "one-finger pull"
      ]
    },
    "tango": {
      "excitationBias": 0.10,
      "brightness": 1.00,
      "damping": 0.025,
      "attack": 1.14,
      "body": 1.20,
      "articulation": ["pizzicato", "arco", "marcato", "arrastre", "strappata", "yumba"]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "pizzicato",
        "arco",
        "walking",
        "one-finger pull"
      ]
    },
    "bluegrass": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "pizzicato",
        "arco",
        "walking",
        "one-finger pull"
      ]
    },
    "rockabilly": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "pizzicato",
        "arco",
        "walking",
        "one-finger pull"
      ]
    },
    "bossa-nova": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "pizzicato",
        "arco",
        "walking",
        "one-finger pull"
      ]
    }
  },
  "physicalDetails": {
  "system": "large-bowed-and-plucked-string",
  "construction": "large hollow wooden body with bridge and long strings",
  "exciter": "finger pizzicato or bow hair",
  "asymmetries": [
    "pizzicato/arco",
    "bow pressure",
    "register",
    "slap/strappata"
  ],
  "coupling": [
    "string-bridge",
    "bridge-body",
    "soundpost/body"
  ],
  "artifactSources": [
    "finger release",
    "bow rosin",
    "body thud",
    "fingerboard/string contact"
  ],
  "detail": [
    "pizzicato and arco are fundamentally different excitations",
    "large body produces strong low modal response",
    "tango strappata adds body/bridge impact"
  ],
  "response": {
    "contactHardness": 0.6,
    "resonatorQ": 0.78,
    "nonlinearTransfer": 0.18,
    "inharmonicity": 0.12,
    "bodyCoupling": 0.9
  }
}
} as InstrumentDSPOverride;
