import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Dikanza. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "impact",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "up-and-down stick scraping",
      "accented downward rasp",
      "syncopated sixteenth ghost scrape",
      "damped scrape dead stroke"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.68,
    "pressureSensitivity": 0.43,
    "nonlinearDrive": 0.162,
    "attackCollision": 0.87,
    "spectralSpread": 0.738,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.64,
        "q": 2.0,
        "gain": 0.184
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.132
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.115
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.106
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
  "damperNoise": 0,
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
    "handDamping": 0.18,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.511,
    "continuousSustain": true,
    "noteTransition": "reservoir-flow"
  },
  "genreDialects": {
    "kizomba": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "up-and-down stick scraping",
        "accented downward rasp",
        "syncopated sixteenth ghost scrape",
        "damped scrape dead stroke"
      ]
    },
    "semba": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "up-and-down stick scraping",
        "accented downward rasp",
        "syncopated sixteenth ghost scrape",
        "damped scrape dead stroke"
      ]
    },
    "kuduro": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "up-and-down stick scraping",
        "accented downward rasp",
        "syncopated sixteenth ghost scrape",
        "damped scrape dead stroke"
      ]
    },
    "angolan-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "up-and-down stick scraping",
        "accented downward rasp",
        "syncopated sixteenth ghost scrape",
        "damped scrape dead stroke"
      ]
    }
  },
  "physicalDetails": {
  "system": "instrument-specific",
  "construction": "declared acoustic/electronic construction",
  "exciter": "declared excitation",
  "asymmetries": [
    "performance-state dependence"
  ],
  "coupling": [
    "exciter-resonator",
    "body/air transfer"
  ],
  "artifactSources": [
    "contact noise"
  ],
  "detail": [
    "dikanza requires instrument-specific calibration rather than generic family identity"
  ],
  "response": {
    "contactHardness": 0.74,
    "resonatorQ": 0.626,
    "nonlinearTransfer": 0.267,
    "inharmonicity": 0.288,
    "bodyCoupling": 0.542
  }
}
} as InstrumentDSPOverride;
