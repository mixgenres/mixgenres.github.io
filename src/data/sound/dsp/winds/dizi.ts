import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Dizi. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air",
    "energyPath": "air-column/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "jet/reed/lip excitation",
    "asymmetries": [
      "courses",
      "slide",
      "vibrato"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "duo-yin rapid sliding glissando into target note",
      "chan-yin delicate throat and finger vibrato",
      "hua-she rapid flutter tonguing",
      "du-yin crisp staccato single and double tonguing",
      "die-yin finger tapping ornamentation"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.36,
    "pressureSensitivity": 0.79,
    "nonlinearDrive": 0.105,
    "attackCollision": 0.45,
    "spectralSpread": 0.536,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.134
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.107
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.098
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.093
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.24,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0.025,
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
  "fippleNoise": 0.18,
  "muteContact": 0,
  "breathBurst": 0.1,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "chinese-classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "duo-yin rapid sliding glissando into target note",
        "chan-yin delicate throat and finger vibrato",
        "hua-she rapid flutter tonguing",
        "du-yin crisp staccato single and double tonguing"
      ]
    },
    "bangdi-northern": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "duo-yin rapid sliding glissando into target note",
        "chan-yin delicate throat and finger vibrato",
        "hua-she rapid flutter tonguing",
        "du-yin crisp staccato single and double tonguing"
      ]
    },
    "qudi-southern": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "duo-yin rapid sliding glissando into target note",
        "chan-yin delicate throat and finger vibrato",
        "hua-she rapid flutter tonguing",
        "du-yin crisp staccato single and double tonguing"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "duo-yin rapid sliding glissando into target note",
        "chan-yin delicate throat and finger vibrato",
        "hua-she rapid flutter tonguing",
        "du-yin crisp staccato single and double tonguing"
      ]
    },
    "soundtrack": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "duo-yin rapid sliding glissando into target note",
        "chan-yin delicate throat and finger vibrato",
        "hua-she rapid flutter tonguing",
        "du-yin crisp staccato single and double tonguing"
      ]
    }
  },
  "physicalDetails": {
  "system": "membrane-flute",
  "construction": "bamboo transverse flute with vibrating membrane",
  "exciter": "edge-tone jet plus dimo membrane",
  "asymmetries": [
    "jet angle",
    "membrane tension",
    "finger-hole venting"
  ],
  "coupling": [
    "air-column-to-membrane",
    "jet-to-bore",
    "bore modes"
  ],
  "artifactSources": [
    "membrane buzz",
    "chiff",
    "finger-hole noise"
  ],
  "detail": [
    "dimo membrane is an essential timbral component",
    "transverse bamboo flute",
    "membrane tension affects brightness"
  ],
  "response": {
    "contactHardness": 0.36,
    "resonatorQ": 0.76,
    "nonlinearTransfer": 0.12,
    "inharmonicity": 0.2,
    "bodyCoupling": 0.86
  }
}
} as InstrumentDSPOverride;
