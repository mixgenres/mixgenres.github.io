import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Shamisen. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "shamisen-string-sawari",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "skin-body",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "sawari"
    ],
    "couplingPaths": [
      "sawari"
    ],
    "techniqueBindings": [
      "bachi attack",
      "sukui upstroke",
      "sawari buzz"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.66,
    "pressureSensitivity": 0.63,
    "nonlinearDrive": 0.159,
    "attackCollision": 0.5,
    "spectralSpread": 0.56,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.71,
        "q": 2.0,
        "gain": 0.14
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.11
      },
      {
        "ratio": 1.29,
        "q": 2.9,
        "gain": 0.1
      },
      {
        "ratio": 1.93,
        "q": 3.35,
        "gain": 0.095
      }
    ],
    "sympathetic": {
      "coupling": 0.18,
      "q": 28,
      "ratios": [
        1,
        1.125,
        1.25,
        1.5,
        2
      ],
      "decayScale": 0.9
    }
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.2,
  "handContact": 0.1,
  "bodyKnock": 0.08,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.03,
  "palletClick": 0,
  "slideNoise": 0.18,
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
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "japanese-traditional": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bachi attack",
        "sukui upstroke",
        "sawari buzz"
      ]
    }
  },
  "physicalDetails": {
  "system": "unfretted-skin-lute",
  "construction": "hollow wooden dō with skin-covered body and koma bridge",
  "exciter": "large bachi plectrum plus left-hand stop",
  "asymmetries": [
    "bachi down/up impact",
    "sawari buzz varies with string and position",
    "skin/body response"
  ],
  "coupling": [
    "string-koma",
    "koma-skin/body",
    "sawari contact",
    "skin-air cavity"
  ],
  "artifactSources": [
    "bachi slap",
    "sawari buzz",
    "koma click",
    "skin knock"
  ],
  "detail": [
    "three strings",
    "unfretted neck",
    "koma bridge",
    "sawari is a contact/buzz mechanism",
    "body skin is part of the resonator"
  ],
  "response": {
    "contactHardness": 0.88,
    "resonatorQ": 0.76,
    "nonlinearTransfer": 0.32,
    "inharmonicity": 0.18,
    "bodyCoupling": 0.62
  }
}
} as InstrumentDSPOverride;
