import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Viola. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "bow",
    "energyPath": "bow/string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "stick-slip friction",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "arco",
      "detaché",
      "legato bow",
      "pizzicato"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.38,
    "pressureSensitivity": 0.83,
    "nonlinearDrive": 0.108,
    "attackCollision": 0.52,
    "spectralSpread": 0.57,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.55,
        "q": 2.0,
        "gain": 0.142
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.111
      },
      {
        "ratio": 1.72,
        "q": 2.9,
        "gain": 0.101
      },
      {
        "ratio": 2.63,
        "q": 3.35,
        "gain": 0.096
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.09,
  "pickZing": 0,
  "handContact": 0.06,
  "bodyKnock": 0.04,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.05,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0.16,
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
    "strikeZoneLocation": "fingerboard",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "arco",
        "detaché",
        "legato bow",
        "pizzicato"
      ]
    },
    "orchestral": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "arco",
        "detaché",
        "legato bow",
        "pizzicato"
      ]
    },
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "arco",
        "detaché",
        "legato bow",
        "pizzicato"
      ]
    }
  },
  "physicalDetails": {
  "system": "bowed-string",
  "construction": "arched wooden body with bridge",
  "exciter": "bow hair stick-slip",
  "asymmetries": [
    "bow direction",
    "bow speed/pressure",
    "stopping position"
  ],
  "coupling": [
    "string-bridge",
    "bridge-body",
    "body-air",
    "open-string sympathetics"
  ],
  "artifactSources": [
    "bow hair noise",
    "finger contact",
    "bridge scrape"
  ],
  "detail": [
    "bow friction is nonlinear",
    "bridge transmits both fundamental and high-frequency bow noise",
    "stopping changes damping and pitch stability"
  ],
  "response": {
    "contactHardness": 0.61,
    "resonatorQ": 0.604,
    "nonlinearTransfer": 0.241,
    "inharmonicity": 0.068,
    "bodyCoupling": 0.498
  }
}
} as InstrumentDSPOverride;
