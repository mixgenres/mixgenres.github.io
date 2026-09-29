import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Pipa. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pipa-string-bridge",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "pear-body",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "lunzhi five-finger outward wheel tremolo",
      "tan-tiao alternating index and thumb flick picking",
      "sa-yin percussive multi-string chord sweeping",
      "jiao-xian twisting strings together for buzzing martial percussion",
      "da-yin heavy hammer-on without picking"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.71,
    "pressureSensitivity": 0.605,
    "nonlinearDrive": 0.168,
    "attackCollision": 0.465,
    "spectralSpread": 0.543,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.61,
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
    "strikeZoneLocation": "mixed",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "chinese-classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "lunzhi five-finger outward wheel tremolo",
        "tan-tiao alternating index and thumb flick picking",
        "sa-yin percussive multi-string chord sweeping",
        "jiao-xian twisting strings together for buzzing martial percussion"
      ]
    },
    "silk-and-bamboo": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "lunzhi five-finger outward wheel tremolo",
        "tan-tiao alternating index and thumb flick picking",
        "sa-yin percussive multi-string chord sweeping",
        "jiao-xian twisting strings together for buzzing martial percussion"
      ]
    },
    "martial-style": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "lunzhi five-finger outward wheel tremolo",
        "tan-tiao alternating index and thumb flick picking",
        "sa-yin percussive multi-string chord sweeping",
        "jiao-xian twisting strings together for buzzing martial percussion"
      ]
    },
    "lyrical-style": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "lunzhi five-finger outward wheel tremolo",
        "tan-tiao alternating index and thumb flick picking",
        "sa-yin percussive multi-string chord sweeping",
        "jiao-xian twisting strings together for buzzing martial percussion"
      ]
    },
    "fusion": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "lunzhi five-finger outward wheel tremolo",
        "tan-tiao alternating index and thumb flick picking",
        "sa-yin percussive multi-string chord sweeping",
        "jiao-xian twisting strings together for buzzing martial percussion"
      ]
    }
  },
  "physicalDetails": {
  "system": "fretted-lute",
  "construction": "pear-shaped wooden soundbox with high frets and bridge",
  "exciter": "fingernails/false nails or plectrum; forward/backward stroke asymmetry",
  "asymmetries": [
    "pi forward vs pa backward",
    "high-fret left-hand pressure",
    "string bending and vibrato"
  ],
  "coupling": [
    "string-bridge",
    "bridge-top",
    "top-back air cavity",
    "fretted contact"
  ],
  "artifactSources": [
    "nail click",
    "fret/position noise",
    "string scrape",
    "body tap"
  ],
  "detail": [
    "four-string lute",
    "high frets",
    "upright playing posture",
    "lun-zhi finger tremolo",
    "left-hand bend/press techniques"
  ],
  "response": {
    "contactHardness": 0.78,
    "resonatorQ": 0.7,
    "nonlinearTransfer": 0.18,
    "inharmonicity": 0.11,
    "bodyCoupling": 0.58
  }
}
} as InstrumentDSPOverride;
