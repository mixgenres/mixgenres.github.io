import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Slit log drum. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "rubber mallet slit strike",
      "bare finger tap",
      "wooden box resonance decay",
      "alternating pitch tongue patterns"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.54,
    "pressureSensitivity": 0.64,
    "nonlinearDrive": 0.137,
    "attackCollision": 0.71,
    "spectralSpread": 0.661,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.49,
        "q": 2.0,
        "gain": 0.165
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.123
      },
      {
        "ratio": 1.52,
        "q": 2.9,
        "gain": 0.108
      },
      {
        "ratio": 2.35,
        "q": 3.35,
        "gain": 0.101
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
    "strikeZoneLocation": "mixed",
    "fleshVsNail": 0.18,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "african-traditional": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "rubber mallet slit strike",
        "bare finger tap",
        "wooden box resonance decay",
        "alternating pitch tongue patterns"
      ]
    },
    "tribal": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "rubber mallet slit strike",
        "bare finger tap",
        "wooden box resonance decay",
        "alternating pitch tongue patterns"
      ]
    },
    "cinematic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "rubber mallet slit strike",
        "bare finger tap",
        "wooden box resonance decay",
        "alternating pitch tongue patterns"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "rubber mallet slit strike",
        "bare finger tap",
        "wooden box resonance decay",
        "alternating pitch tongue patterns"
      ]
    },
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "rubber mallet slit strike",
        "bare finger tap",
        "wooden box resonance decay",
        "alternating pitch tongue patterns"
      ]
    }
  },
  "familyModel": "mallet",
  "physicalDetails": {
  "system": "struck-resonator",
  "construction": "hollow hardwood log with tuned longitudinal slit tongues and shared air cavity",
  "exciter": "soft rubber mallet or bare finger on an individual wooden tongue",
  "asymmetries": [
    "tongue length and width set discrete pitch",
    "strike position changes upper partial strength",
    "soft mallet versus finger changes attack hardness",
    "cavity opening and log wall couple low body resonance"
  ],
  "coupling": [
    "bending modes of each isolated tongue",
    "tongue-to-log vibration transfer",
    "shared hollow-body air resonance"
  ],
  "artifactSources": [
    "mallet/finger contact",
    "short hardwood body knock",
    "air cavity bloom"
  ],
  "detail": [
    "tongues are fixed-pitch wooden resonators rather than membranes",
    "alternating tongues create the melodic contour",
    "strike strength changes attack and partial balance without retuning the tongue"
  ],
  "response": {
    "contactHardness": 0.46,
    "resonatorQ": 0.68,
    "nonlinearTransfer": 0.08,
    "inharmonicity": 0.12,
    "bodyCoupling": 0.62
  }
}
} as InstrumentDSPOverride;
