import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Accordion. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "free-reed-bellows",
    "energyPath": "bellows/reed/chamber",
    "bodyArchitecture": "wood-chamber",
    "primaryCollision": "key/button + bellows pressure collision",
    "asymmetries": [
      "bellows pressure",
      "register banks",
      "pallet opening"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "bellows shake and tremolo pumping",
      "push-pull bellows direction reversal",
      "musette register stop switching",
      "stradella bass button counter-rhythm",
      "ricochet bellows bouncing"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.56,
    "pressureSensitivity": 0.73,
    "nonlinearDrive": 0.141,
    "attackCollision": 0.67,
    "spectralSpread": 0.642,
    "directionalAsymmetry": 0.34
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.6,
        "q": 2.0,
        "gain": 0.16
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.12
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.107
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.1
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.1,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0,
  "bodyKnock": 0,
  "rimImpact": 0,
  "bellowsNoise": 0.18,
  "damperNoise": 0,
  "palletClick": 0.16,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0.2,
  "bowRosin": 0,
  "hammerClick": 0,
  "pedalNoise": 0,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0.12
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.316,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "bellows-flow"
  },
  "genreDialects": {
    "cumbia": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.06,
      "articulation": [
        "bellows shake and tremolo pumping",
        "push-pull bellows direction reversal",
        "musette register stop switching",
        "stradella bass button counter-rhythm"
      ]
    },
    "vallenato": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bellows shake and tremolo pumping",
        "push-pull bellows direction reversal",
        "musette register stop switching",
        "stradella bass button counter-rhythm"
      ]
    },
    "forro": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bellows shake and tremolo pumping",
        "push-pull bellows direction reversal",
        "musette register stop switching",
        "stradella bass button counter-rhythm"
      ]
    },
    "chanson": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bellows shake and tremolo pumping",
        "push-pull bellows direction reversal",
        "musette register stop switching",
        "stradella bass button counter-rhythm"
      ]
    },
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bellows shake and tremolo pumping",
        "push-pull bellows direction reversal",
        "musette register stop switching",
        "stradella bass button counter-rhythm"
      ]
    },
    "zydeco": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "bellows shake and tremolo pumping",
        "push-pull bellows direction reversal",
        "musette register stop switching",
        "stradella bass button counter-rhythm"
      ]
    },
    "tango": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "bellows shake and tremolo pumping",
        "push-pull bellows direction reversal",
        "musette register stop switching",
        "stradella bass button counter-rhythm"
      ]
    }
  },
  "instrumentSpecific": {
    "accordion": {
      "bellowsMode": "pressure-and-register",
      "reedBankFootages": ["16-foot", "8-foot", "4-foot"],
      "registerSelection": "explicit stop-controlled reed-bank combinations",
      "musetteDetunePolicy": "explicit-register",
      "cassottoPolicy": "explicit-chamber",
      "palletMechanism": "key/button lifts pallet to admit bellows air to selected reed chamber"
    }
  },
  "physicalDetails": {
  "system": "free-reed-bellows",
  "construction": "reed blocks in two hand cabinets joined by bellows",
  "exciter": "steel free reeds via pallets",
  "asymmetries": [
    "push/pull pressure",
    "register bank selection",
    "pallet opening"
  ],
  "coupling": [
    "reed-bank/cabinet",
    "bellows pressure",
    "cabinet air resonance"
  ],
  "artifactSources": [
    "pallet click",
    "bellows folds",
    "reed onset"
  ],
  "detail": [
    "piano accordion assumed here",
    "not bisonoric by default",
    "register stops alter octave banks",
    "musette only when explicitly selected",
    "cassotto only when explicitly selected"
  ],
  "response": {
    "contactHardness": 0.58,
    "resonatorQ": 0.76,
    "nonlinearTransfer": 0.16,
    "inharmonicity": 0.1,
    "bodyCoupling": 0.68
  }
}
} as InstrumentDSPOverride;
