import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Great Highland Bagpipes. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "bagpipe-reservoir",
    "energyPath": "bag pressure/reed/drone",
    "bodyArchitecture": "drone-chamber",
    "primaryCollision": "chanter reed excitation under continuous bag pressure",
    "asymmetries": [
      "bag pressure regulation",
      "grace-note interruption",
      "chanter vs drone"
    ],
    "couplingPaths": [
      "bag-to-chanter",
      "bag-to-drones",
      "drone phase lock"
    ],
    "techniqueBindings": [
      "doublings and grips rapid gracenote articulation",
      "taorluath and crunluath complex high-level piobaireachd movements",
      "birl pinky strike across low A",
      "continuous bag pressure management during breaths",
      "drones lock harmonic phase alignment"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.42,
    "pressureSensitivity": 0.76,
    "nonlinearDrive": 0.116,
    "attackCollision": 0.48,
    "spectralSpread": 0.55,
    "directionalAsymmetry": 0.12,
    "continuousReservoir": {
      "pressure": 0.91,
      "pressureLoss": 0.09,
      "chokeThreshold": 0.58,
      "minimumFlow": 0.72,
      "dronePhaseLock": 0.97,
      "articulationNeverSilences": true
    }
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.138
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.109
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.099
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.094
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
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "reservoir-flow"
  },
  "genreDialects": {
    "highland-marching": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "doublings and grips rapid gracenote articulation",
        "taorluath and crunluath complex high-level piobaireachd movements",
        "birl pinky strike across low A",
        "continuous bag pressure management during breaths"
      ]
    },
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "doublings and grips rapid gracenote articulation",
        "taorluath and crunluath complex high-level piobaireachd movements",
        "birl pinky strike across low A",
        "continuous bag pressure management during breaths"
      ]
    },
    "piobaireachd": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "doublings and grips rapid gracenote articulation",
        "taorluath and crunluath complex high-level piobaireachd movements",
        "birl pinky strike across low A",
        "continuous bag pressure management during breaths"
      ]
    },
    "military": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "doublings and grips rapid gracenote articulation",
        "taorluath and crunluath complex high-level piobaireachd movements",
        "birl pinky strike across low A",
        "continuous bag pressure management during breaths"
      ]
    },
    "folk-rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "doublings and grips rapid gracenote articulation",
        "taorluath and crunluath complex high-level piobaireachd movements",
        "birl pinky strike across low A",
        "continuous bag pressure management during breaths"
      ]
    }
  },
  "instrumentSpecific": {
    "reservoir": {
      "pressureLoss": 0.09,
      "dronePhaseAlignment": 0.97,
      "articulation": "grace-note interruption of continuous flow",
      "scale": "Highland non-tempered Mixolydian-derived"
    }
  },
  "tuning": {
    "temperament": "non-tempered",
    "scale": "Highland Mixolydian-derived",
    "driftCents": 4
  },
  "physicalDetails": {
  "system": "continuous-bag-reservoir-reed",
  "construction": "airtight bag feeding chanter and drones",
  "exciter": "chanter reed plus continuous drone reeds",
  "asymmetries": [
    "bag pressure regulation",
    "grace-note interruption",
    "chanter vs drone pressure coupling"
  ],
  "coupling": [
    "bag-to-chanter",
    "bag-to-drones",
    "drone phase lock",
    "reed-to-bag pressure"
  ],
  "artifactSources": [
    "bag/leather noise",
    "chanter finger-hole noise",
    "drone leakage/pressure noise"
  ],
  "detail": [
    "continuous reservoir",
    "drones remain active",
    "no fret buzz",
    "no generic key/valve artifacts",
    "Highland chanter tuning is not assumed equal temperament"
  ],
  "response": {
    "contactHardness": 0.5,
    "resonatorQ": 0.94,
    "nonlinearTransfer": 0.22,
    "inharmonicity": 0.16,
    "bodyCoupling": 0.84
  }
}
} as InstrumentDSPOverride;
