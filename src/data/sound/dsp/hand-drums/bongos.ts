import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Bongos. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "skin-faced",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [
      "edge",
      "pitch-bend",
      "slide"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "martillo thumb/index stroke pattern",
      "open tone on hembra",
      "dry dry slap on macho edge",
      "finger-glissando pitch bend on hembra head"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.65,
    "pressureSensitivity": 0.585,
    "nonlinearDrive": 0.207,
    "attackCollision": 0.885,
    "spectralSpread": 0.745,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.6,
        "q": 2.0,
        "gain": 0.186
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.133
      },
      {
        "ratio": 1.575,
        "q": 2.9,
        "gain": 0.115
      },
      {
        "ratio": 2.35,
        "q": 3.35,
        "gain": 0.107
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
    "strikeZoneLocation": "edge",
    "fleshVsNail": 0.18,
    "handDamping": 0,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "salsa": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "martillo thumb/index stroke pattern",
        "open tone on hembra",
        "dry dry slap on macho edge",
        "finger-glissando pitch bend on hembra head"
      ]
    },
    "son-cubano": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "martillo thumb/index stroke pattern",
        "open tone on hembra",
        "dry dry slap on macho edge",
        "finger-glissando pitch bend on hembra head"
      ]
    },
    "bachata": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "martillo thumb/index stroke pattern",
        "open tone on hembra",
        "dry dry slap on macho edge",
        "finger-glissando pitch bend on hembra head"
      ]
    },
    "bolero": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "martillo thumb/index stroke pattern",
        "open tone on hembra",
        "dry dry slap on macho edge",
        "finger-glissando pitch bend on hembra head"
      ]
    },
    "latin-jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "martillo thumb/index stroke pattern",
        "open tone on hembra",
        "dry dry slap on macho edge",
        "finger-glissando pitch bend on hembra head"
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
    "contactHardness": 0.742,
    "resonatorQ": 0.622,
    "nonlinearTransfer": 0.274,
    "inharmonicity": 0.196,
    "bodyCoupling": 0.533
  }
}
} as InstrumentDSPOverride;
