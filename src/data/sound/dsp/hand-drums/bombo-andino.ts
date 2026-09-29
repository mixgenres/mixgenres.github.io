import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Bombo andino. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [
      "rim"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "soft mallet head strike",
      "cane aro rim stroke",
      "sustained fur damping resonance",
      "marching syncopated pulse"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.63,
    "pressureSensitivity": 0.595,
    "nonlinearDrive": 0.153,
    "attackCollision": 0.755,
    "spectralSpread": 0.682,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.58,
        "q": 2.0,
        "gain": 0.171
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.125
      },
      {
        "ratio": 1.565,
        "q": 2.9,
        "gain": 0.11
      },
      {
        "ratio": 2.35,
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
  "handContact": 0.12,
  "bodyKnock": 0.08,
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
  "membraneFingerNoise": 0.16,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "edge",
    "fleshVsNail": 0.18,
    "handDamping": 0,
    "attackToPitchCoupling": 0.292,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "andean-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "soft mallet head strike",
        "cane aro rim stroke",
        "sustained fur damping resonance",
        "marching syncopated pulse"
      ]
    },
    "sikuri": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "soft mallet head strike",
        "cane aro rim stroke",
        "sustained fur damping resonance",
        "marching syncopated pulse"
      ]
    },
    "carnavalito": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "soft mallet head strike",
        "cane aro rim stroke",
        "sustained fur damping resonance",
        "marching syncopated pulse"
      ]
    },
    "huayno": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "soft mallet head strike",
        "cane aro rim stroke",
        "sustained fur damping resonance",
        "marching syncopated pulse"
      ]
    }
  },
  "physicalDetails": {
  "system": "membrane-shell-percussion",
  "construction": "tensioned membrane over resonant shell/body",
  "exciter": "hand/stick/beaters according to instrument",
  "asymmetries": [
    "center vs edge",
    "open vs damped",
    "hand vs stick",
    "rim contact"
  ],
  "coupling": [
    "membrane radial modes",
    "membrane circular modes",
    "shell/air cavity",
    "hand damping"
  ],
  "artifactSources": [
    "skin contact",
    "rim click",
    "shell knock"
  ],
  "detail": [
    "strike-zone controls modal mixture",
    "membrane tension controls decay",
    "shell/air coupling varies by stroke and hand damping"
  ],
  "response": {
    "contactHardness": 0.628,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.169,
    "inharmonicity": 0.238,
    "bodyCoupling": 0.98
  }
}
} as InstrumentDSPOverride;
