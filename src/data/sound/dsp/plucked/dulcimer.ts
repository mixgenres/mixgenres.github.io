import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Hammered dulcimer. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "dulcimer-hammer",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-bridge-soundboard",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "courses",
      "damper"
    ],
    "couplingPaths": [
      "bridge",
      "courses"
    ],
    "techniqueBindings": [
      "double-hammer alternating bounce",
      "rapid two-hand roll",
      "damper damping with palms",
      "bridge-side strike harmonics"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.61,
    "pressureSensitivity": 0.575,
    "nonlinearDrive": 0.15,
    "attackCollision": 0.525,
    "spectralSpread": 0.572,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.143
      },
      {
        "ratio": 1.002,
        "q": 2.45,
        "gain": 0.112
      },
      {
        "ratio": 2.0,
        "q": 2.9,
        "gain": 0.101
      },
      {
        "ratio": 3.0,
        "q": 3.35,
        "gain": 0.096
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.06,
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
    "strikeZoneLocation": "bridge",
    "fleshVsNail": 0,
    "handDamping": 0.28,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.306,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "double-hammer alternating bounce",
        "rapid two-hand roll",
        "damper damping with palms",
        "bridge-side strike harmonics"
      ]
    },
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "double-hammer alternating bounce",
        "rapid two-hand roll",
        "damper damping with palms",
        "bridge-side strike harmonics"
      ]
    },
    "appalachian": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "double-hammer alternating bounce",
        "rapid two-hand roll",
        "damper damping with palms",
        "bridge-side strike harmonics"
      ]
    },
    "bluegrass": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "double-hammer alternating bounce",
        "rapid two-hand roll",
        "damper damping with palms",
        "bridge-side strike harmonics"
      ]
    },
    "middle-eastern": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "double-hammer alternating bounce",
        "rapid two-hand roll",
        "damper damping with palms",
        "bridge-side strike harmonics"
      ]
    }
  },
  "physicalDetails": {
  "system": "hammered-zither",
  "construction": "tensioned strings over trapezoid soundboard",
  "exciter": "two hand-held hammers",
  "asymmetries": [
    "bridge groups",
    "hard vs soft hammer contact"
  ],
  "coupling": [
    "string-bridge",
    "bridge-soundboard",
    "soundboard cavity"
  ],
  "artifactSources": [
    "hammer click",
    "string rattle"
  ],
  "detail": [
    "multiple string courses",
    "hammer strike location changes partials",
    "sustained sympathetic courses"
  ],
  "response": {
    "contactHardness": 0.768,
    "resonatorQ": 0.638,
    "nonlinearTransfer": 0.245,
    "inharmonicity": 0.08,
    "bodyCoupling": 0.552
  }
}
} as InstrumentDSPOverride;
