import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Berimbau. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "berimbau-string-gourd",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "gourd-cavity",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "rim"
    ],
    "couplingPaths": [
      "cavity",
      "wire"
    ],
    "techniqueBindings": [
      "open string low fundamental strike",
      "dobra pressed high pitch strike with coin buzz",
      "cabaça stomach wah-wah cavity modulation",
      "caxixi basket rattle accentuation",
      "syncopated capoeira toque patterns (Angola, São Bento)"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.56,
    "pressureSensitivity": 0.71,
    "nonlinearDrive": 0.141,
    "attackCollision": 0.44,
    "spectralSpread": 0.531,
    "directionalAsymmetry": 0.7
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.56,
        "q": 2.0,
        "gain": 0.133
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.106
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.098
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.093
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
  "handContact": 0.14,
  "bodyKnock": 0.12,
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
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.46,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "capoeira": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open string low fundamental strike",
        "dobra pressed high pitch strike with coin buzz",
        "cabaça stomach wah-wah cavity modulation",
        "caxixi basket rattle accentuation"
      ]
    },
    "samba-de-roda": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "open string low fundamental strike",
        "dobra pressed high pitch strike with coin buzz",
        "cabaça stomach wah-wah cavity modulation",
        "caxixi basket rattle accentuation"
      ]
    },
    "afro-brazilian": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open string low fundamental strike",
        "dobra pressed high pitch strike with coin buzz",
        "cabaça stomach wah-wah cavity modulation",
        "caxixi basket rattle accentuation"
      ]
    },
    "mpb": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open string low fundamental strike",
        "dobra pressed high pitch strike with coin buzz",
        "cabaça stomach wah-wah cavity modulation",
        "caxixi basket rattle accentuation"
      ]
    },
    "world-percussion": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open string low fundamental strike",
        "dobra pressed high pitch strike with coin buzz",
        "cabaça stomach wah-wah cavity modulation",
        "caxixi basket rattle accentuation"
      ]
    }
  },
  "physicalDetails": {
  "system": "single-string-bowed-flexible-bow",
  "construction": "wooden arched bow with resonating gourd",
  "exciter": "baqueta strike plus caxixi/contact",
  "asymmetries": [
    "baqueta contact point",
    "cabaça open/closed against body",
    "stone/coin string pressure"
  ],
  "coupling": [
    "string-bow",
    "string-cabaca",
    "open/closed cavity"
  ],
  "artifactSources": [
    "stick click",
    "caxixi",
    "gourd contact"
  ],
  "detail": [
    "single wire string",
    "gourd cavity is actively opened/closed",
    "stone/coin changes pitch and buzz"
  ],
  "response": {
    "contactHardness": 0.728,
    "resonatorQ": 0.708,
    "nonlinearTransfer": 0.267,
    "inharmonicity": 0.08,
    "bodyCoupling": 0.614
  }
}
} as InstrumentDSPOverride;
