import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Irish / Greek Bouzouki. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "courses",
      "mute",
      "slide"
    ],
    "couplingPaths": [
      "courses",
      "synth"
    ],
    "techniqueBindings": [
      "continuous plectrum tremolo melodic lines",
      "modal drone backing with moving countermelodies",
      "hammer-on and pull-off triplets",
      "fast octave glissandi shifts",
      "syncopated rhythmic strumming with muted strikes"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.7,
    "pressureSensitivity": 0.58,
    "nonlinearDrive": 0.166,
    "attackCollision": 0.49,
    "spectralSpread": 0.555,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.139
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.109
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.1
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.095
      }
    ]
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
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "reservoir-flow"
  },
  "genreDialects": {
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "continuous plectrum tremolo melodic lines",
        "modal drone backing with moving countermelodies",
        "hammer-on and pull-off triplets",
        "fast octave glissandi shifts"
      ]
    },
    "greek-rebetiko": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "continuous plectrum tremolo melodic lines",
        "modal drone backing with moving countermelodies",
        "hammer-on and pull-off triplets",
        "fast octave glissandi shifts"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "continuous plectrum tremolo melodic lines",
        "modal drone backing with moving countermelodies",
        "hammer-on and pull-off triplets",
        "fast octave glissandi shifts"
      ]
    },
    "balkan": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "continuous plectrum tremolo melodic lines",
        "modal drone backing with moving countermelodies",
        "hammer-on and pull-off triplets",
        "fast octave glissandi shifts"
      ]
    },
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "continuous plectrum tremolo melodic lines",
        "modal drone backing with moving countermelodies",
        "hammer-on and pull-off triplets",
        "fast octave glissandi shifts"
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
    "bouzouki string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.76,
    "resonatorQ": 0.758,
    "nonlinearTransfer": 0.284,
    "inharmonicity": 0.083,
    "bodyCoupling": 0.668
  }
}
} as InstrumentDSPOverride;
