import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for 5-String Banjo. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "banjo-membrane",
    "energyPath": "string/bridge/mylar head/rim",
    "bodyArchitecture": "membrane-head",
    "primaryCollision": "metal pick-to-string collision and head coupling",
    "asymmetries": [
      "pitch-bend",
      "rim",
      "slide"
    ],
    "couplingPaths": [
      "synth"
    ],
    "techniqueBindings": [
      "Scruggs three-finger roll patterns (T-I-M)",
      "clawhammer downward index nail frailing",
      "thumb drone string syncopation",
      "choke string pitch bending",
      "quick two-fret upward slide ornamentation"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.66,
    "pressureSensitivity": 0.66,
    "nonlinearDrive": 0.159,
    "attackCollision": 0.47,
    "spectralSpread": 0.546,
    "directionalAsymmetry": 0.7
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.56,
        "q": 2.0,
        "gain": 0.136
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.108
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.099
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.094
      }
    ],
    "membrane2D": {
      "radial": 0.96,
      "circular": 0.82,
      "tension": 0.92,
      "damping": 0.76,
      "strikeZoneSensitivity": 0.99
    },
    "sympathetic": {
      "coupling": 0.34,
      "q": 42,
      "ratios": [
        1,
        1.5,
        2,
        3,
        4
      ],
      "decayScale": 0.52
    }
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0.08,
  "stringSqueak": 0.11,
  "pickZing": 0.42,
  "handContact": 0.1,
  "bodyKnock": 0.1,
  "rimImpact": 0.16,
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
    "strikeZoneLocation": "edge",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.46,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "reservoir-flow"
  },
  "genreDialects": {
    "bluegrass": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "Scruggs three-finger roll patterns (T-I-M)",
        "clawhammer downward index nail frailing",
        "thumb drone string syncopation",
        "choke string pitch bending"
      ]
    },
    "old-time": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "Scruggs three-finger roll patterns (T-I-M)",
        "clawhammer downward index nail frailing",
        "thumb drone string syncopation",
        "choke string pitch bending"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "Scruggs three-finger roll patterns (T-I-M)",
        "clawhammer downward index nail frailing",
        "thumb drone string syncopation",
        "choke string pitch bending"
      ]
    },
    "country": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "Scruggs three-finger roll patterns (T-I-M)",
        "clawhammer downward index nail frailing",
        "thumb drone string syncopation",
        "choke string pitch bending"
      ]
    },
    "americana": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "Scruggs three-finger roll patterns (T-I-M)",
        "clawhammer downward index nail frailing",
        "thumb drone string syncopation",
        "choke string pitch bending"
      ]
    }
  },
  "instrumentSpecific": {
    "banjoHead": {
      "sympatheticDrone5th": true,
      "headTensionSnap": 0.96,
      "pickMaterial": "metal",
      "mylarDecay": 0.96
    }
  },
  "physicalDetails": {
  "system": "five-string-plucked-membrane-resonator",
  "construction": "tensioned head over cylindrical rim with bridge",
  "exciter": "metal fingerpick/plectrum",
  "asymmetries": [
    "center vs bridge strike",
    "fifth-string short drone",
    "head tension"
  ],
  "coupling": [
    "strings-bridge-head",
    "head-rim",
    "rim-air cavity",
    "fifth-string sympathetic"
  ],
  "artifactSources": [
    "metal pick zing",
    "head snap",
    "fret noise",
    "bridge/rim click"
  ],
  "detail": [
    "5 strings with short 5th drone",
    "rapid head transient",
    "strong inharmonic attack",
    "open-string sympathetic ring"
  ],
  "response": {
    "contactHardness": 0.9,
    "resonatorQ": 0.62,
    "nonlinearTransfer": 0.38,
    "inharmonicity": 0.3,
    "bodyCoupling": 0.48
  }
}
} as InstrumentDSPOverride;
