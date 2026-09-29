import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Koto. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "koto-string-bridge",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "hollow-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "left-hand pitch pressure",
      "movable ji bridge placement",
      "tsume attack geometry"
    ],
    "couplingPaths": [
      "string-to-ji",
      "ji-to-soundboard"
    ],
    "techniqueBindings": [
      "three-finger tsume attack",
      "left-hand pressure behind ji",
      "Ikuta/Yamada pick geometry"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.78,
    "pressureSensitivity": 0.57,
    "nonlinearDrive": 0.18,
    "attackCollision": 0.53,
    "spectralSpread": 0.574,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.71,
        "q": 2.0,
        "gain": 0.144
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.112
      },
      {
        "ratio": 1.29,
        "q": 2.9,
        "gain": 0.101
      },
      {
        "ratio": 1.93,
        "q": 3.35,
        "gain": 0.096
      }
    ],
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.05,
  "pickZing": 0.06,
  "handContact": 0.1,
  "bodyKnock": 0.1,
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
  "keyworkClick": 0.0
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
        "three-finger tsume attack",
        "left-hand pressure behind ji",
        "Ikuta/Yamada pick geometry"
      ]
    }
  },
  "instrumentSpecific": {
    "koto": {
      "stringCount": 13,
      "bridgeSystem": "movable-ji",
      "pickSystem": "tsume",
      "leftHandPitchControl": "press-and-pull-behind-ji",
      "tuningFamilies": ["hirajoshi", "kumoi-joshi", "nakazora", "gagaku-derived"],
      "sawari": false
    }
  },
  "physicalDetails": {
  "system": "long-zither",
  "construction": "paulownia soundboard; movable ji bridges",
  "exciter": "finger-mounted tsume",
  "asymmetries": [
    "left-hand pitch pressure behind ji",
    "bridge-position-dependent scale",
    "pick geometry"
  ],
  "coupling": [
    "string-ji",
    "ji-soundboard",
    "soundboard-air"
  ],
  "artifactSources": [
    "tsume click",
    "string scrape",
    "ji movement",
    "body knock"
  ],
  "detail": [
    "13 strings",
    "movable bridges",
    "high string tension",
    "traditional pentatonic tunings",
    "no sawari"
  ],
  "response": {
    "contactHardness": 0.74,
    "resonatorQ": 0.82,
    "nonlinearTransfer": 0.16,
    "inharmonicity": 0.08,
    "bodyCoupling": 0.66
  }
}
} as InstrumentDSPOverride;
