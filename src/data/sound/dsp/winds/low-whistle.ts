import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Low whistle. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air",
    "energyPath": "air-column/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "jet/reed/lip excitation",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "piper grip finger pads",
      "breath-controlled dynamic swelling",
      "crann and cut ornamentation",
      "delicate pitch sliding"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.32,
    "pressureSensitivity": 0.81,
    "nonlinearDrive": 0.098,
    "attackCollision": 0.43,
    "spectralSpread": 0.526,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.132
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.106
      },
      {
        "ratio": 1.48,
        "q": 2.9,
        "gain": 0.097
      },
      {
        "ratio": 2.02,
        "q": 3.35,
        "gain": 0.093
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.2,
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
  "fippleNoise": 0.12,
  "muteContact": 0,
  "breathBurst": 0.1,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "celtic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "piper grip finger pads",
        "breath-controlled dynamic swelling",
        "crann and cut ornamentation",
        "delicate pitch sliding"
      ]
    },
    "irish-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "piper grip finger pads",
        "breath-controlled dynamic swelling",
        "crann and cut ornamentation",
        "delicate pitch sliding"
      ]
    },
    "cinematic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "piper grip finger pads",
        "breath-controlled dynamic swelling",
        "crann and cut ornamentation",
        "delicate pitch sliding"
      ]
    },
    "soundtrack": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "piper grip finger pads",
        "breath-controlled dynamic swelling",
        "crann and cut ornamentation",
        "delicate pitch sliding"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "piper grip finger pads",
        "breath-controlled dynamic swelling",
        "crann and cut ornamentation",
        "delicate pitch sliding"
      ]
    }
  },
  "physicalDetails": {
  "system": "air-jet-aerophone",
  "construction": "air-column with edge/voicing system",
  "exciter": "air jet / fipple / end-blown edge depending instrument",
  "asymmetries": [
    "jet angle",
    "breath pressure",
    "hole venting",
    "register overblow"
  ],
  "coupling": [
    "jet-edge",
    "air-column modes",
    "tone holes"
  ],
  "artifactSources": [
    "chiff",
    "air hiss",
    "finger-hole noise"
  ],
  "detail": [
    "air-column impedance controls pitch",
    "attack includes jet noise and transient overblow",
    "register changes alter mode family rather than only brightness"
  ],
  "response": {
    "contactHardness": 0.502,
    "resonatorQ": 0.502,
    "nonlinearTransfer": 0.173,
    "inharmonicity": 0.065,
    "bodyCoupling": 0.406
  }
}
} as InstrumentDSPOverride;
