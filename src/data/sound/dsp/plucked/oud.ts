import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Oud. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "oud-string-soundboard",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-body",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "courses",
      "slide"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "riša pick",
      "tremolo",
      "ornamental slide"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.69,
    "pressureSensitivity": 0.585,
    "nonlinearDrive": 0.164,
    "attackCollision": 0.485,
    "spectralSpread": 0.553,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.138
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.109
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.099
      },
      {
        "ratio": 3.0,
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
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "middle-eastern": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "riša pick",
        "tremolo",
        "ornamental slide"
      ]
    }
  },
  "physicalDetails": {
  "system": "plucked-string",
  "construction": "instrument-specific string body",
  "exciter": "instrument-specific pick/finger/nail",
  "asymmetries": [
    "pick/finger direction",
    "stopping position",
    "string gauge/register"
  ],
  "coupling": [
    "string-bridge",
    "bridge-body",
    "body-air"
  ],
  "artifactSources": [
    "contact click",
    "string scrape",
    "finger/pick noise"
  ],
  "detail": [
    "oud string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.68,
    "resonatorQ": 0.894,
    "nonlinearTransfer": 0.277,
    "inharmonicity": 0.079,
    "bodyCoupling": 0.794
  }
}
} as InstrumentDSPOverride;
