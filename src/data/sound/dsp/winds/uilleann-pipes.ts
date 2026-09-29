import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Uilleann pipes. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "uilleann-reservoir",
    "energyPath": "bellows/reservoir/reed/drone",
    "bodyArchitecture": "drone-chamber",
    "primaryCollision": "chanter reed excitation under regulated bellows pressure",
    "asymmetries": [
      "bellows"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "cut",
      "tap",
      "roll",
      "bellows phrasing"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.35,
    "pressureSensitivity": 0.795,
    "nonlinearDrive": 0.103,
    "attackCollision": 0.445,
    "spectralSpread": 0.534,
    "directionalAsymmetry": 0.34,
    "continuousReservoir": {
      "pressure": 0.75,
      "pressureLoss": 0.15,
      "chokeThreshold": 0.42,
      "minimumFlow": 0.72,
      "dronePhaseLock": 0.9,
      "articulationNeverSilences": true
    }
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.133
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.107
      },
      {
        "ratio": 1.48,
        "q": 2.9,
        "gain": 0.098
      },
      {
        "ratio": 2.02,
        "q": 3.35,
        "gain": 0.093
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.18,
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
  "keyworkClick": 0.03
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.316,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "bellows-flow"
  },
  "genreDialects": {
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "cut",
        "tap",
        "roll",
        "bellows phrasing"
      ]
    }
  },
  "instrumentSpecific": {
    "reservoir": {
      "pressureLoss": 0.15,
      "dronePhaseAlignment": 0.9,
      "articulation": "grace-note interruption of continuous flow",
      "scale": "instrument-specific chanter tuning"
    }
  },
  "tuning": {
    "temperament": "instrument-specific",
    "scale": "uilleann chanter tuning",
    "driftCents": 2
  },
  "physicalDetails": {
  "system": "bellows-fed-bag-reservoir-reed",
  "construction": "elbow bellows feeding bag, chanter and regulated drones",
  "exciter": "chanter reed and drone reeds under reservoir pressure",
  "asymmetries": [
    "bellows pressure",
    "chanter closed/open fingering",
    "regulator/key interaction"
  ],
  "coupling": [
    "bellows-bag",
    "bag-chanter",
    "bag-drones",
    "regulators-drones"
  ],
  "artifactSources": [
    "bellows leather",
    "key/regulator clicks",
    "chanter reed noise"
  ],
  "detail": [
    "elbow-operated bellows",
    "bag reservoir",
    "chanter can be closed/staccato by knee/finger technique",
    "regulators add chordal notes"
  ],
  "response": {
    "contactHardness": 0.46,
    "resonatorQ": 0.92,
    "nonlinearTransfer": 0.18,
    "inharmonicity": 0.14,
    "bodyCoupling": 0.8
  }
}
} as InstrumentDSPOverride;
