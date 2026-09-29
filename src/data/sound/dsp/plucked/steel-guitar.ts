import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Resonator Steel Guitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "pluck",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "courses",
      "slide",
      "vibrato"
    ],
    "couplingPaths": [
      "courses"
    ],
    "techniqueBindings": [
      "steel slide glissando across open tunings",
      "finger behind slide damping to eliminate ghost tones",
      "palm-damped alternating thumb bass",
      "wide wrist slide vibrato",
      "rapid double-stop slide shifts"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.78,
    "pressureSensitivity": 0.6,
    "nonlinearDrive": 0.18,
    "attackCollision": 0.47,
    "spectralSpread": 0.546,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.136
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.108
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.099
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.094
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
    "handDamping": 0.18,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.511,
    "continuousSustain": true,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "delta-blues": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "steel slide glissando across open tunings",
        "finger behind slide damping to eliminate ghost tones",
        "palm-damped alternating thumb bass",
        "wide wrist slide vibrato"
      ]
    },
    "country": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "steel slide glissando across open tunings",
        "finger behind slide damping to eliminate ghost tones",
        "palm-damped alternating thumb bass",
        "wide wrist slide vibrato"
      ]
    },
    "bluegrass": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "steel slide glissando across open tunings",
        "finger behind slide damping to eliminate ghost tones",
        "palm-damped alternating thumb bass",
        "wide wrist slide vibrato"
      ]
    },
    "hawaiian": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "steel slide glissando across open tunings",
        "finger behind slide damping to eliminate ghost tones",
        "palm-damped alternating thumb bass",
        "wide wrist slide vibrato"
      ]
    },
    "americana": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "steel slide glissando across open tunings",
        "finger behind slide damping to eliminate ghost tones",
        "palm-damped alternating thumb bass",
        "wide wrist slide vibrato"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "steel slide glissando across open tunings",
        "finger behind slide damping to eliminate ghost tones",
        "palm-damped alternating thumb bass",
        "wide wrist slide vibrato"
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
    "steel-guitar string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.746,
    "resonatorQ": 0.846,
    "nonlinearTransfer": 0.267,
    "inharmonicity": 0.09,
    "bodyCoupling": 0.767
  }
}
} as InstrumentDSPOverride;
