import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Ride cymbal. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "impact",
    "energyPath": "plate/body/air",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "stick/finger collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "tip-on-bow attack",
      "bell ping",
      "shoulder crash accent",
      "hand choke"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.69,
    "pressureSensitivity": 0.485,
    "nonlinearDrive": 0.164,
    "attackCollision": 0.895,
    "spectralSpread": 0.75,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.69,
        "q": 2.0,
        "gain": 0.187
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.134
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.116
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.107
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0,
  "bodyKnock": 0.1,
  "rimImpact": 0.16,
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
    "noteTransition": "legato"
  },
  "genreDialects": {
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "tip-on-bow attack",
        "bell ping",
        "shoulder crash accent",
        "hand choke"
      ]
    },
    "rock": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "tip-on-bow attack",
        "bell ping",
        "shoulder crash accent",
        "hand choke"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tip-on-bow attack",
        "bell ping",
        "shoulder crash accent",
        "hand choke"
      ]
    },
    "funk": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "tip-on-bow attack",
        "bell ping",
        "shoulder crash accent",
        "hand choke"
      ]
    },
    "orchestral": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tip-on-bow attack",
        "bell ping",
        "shoulder crash accent",
        "hand choke"
      ]
    }
  },
  "physicalDetails": {
  "system": "contact-noise-idiophone",
  "construction": "instrument-specific rigid/skin contact structure",
  "exciter": "friction/impact/hand/stick",
  "asymmetries": [
    "stroke direction",
    "contact location",
    "fill material or plate geometry"
  ],
  "coupling": [
    "exciter-material",
    "body resonance",
    "secondary particles where applicable"
  ],
  "artifactSources": [
    "contact noise",
    "body knock",
    "secondary rattles"
  ],
  "detail": [
    "timbral identity comes from contact geometry",
    "noise density follows stroke speed",
    "secondary resonances are short and material-dependent"
  ],
  "response": {
    "contactHardness": 0.772,
    "resonatorQ": 0.628,
    "nonlinearTransfer": 0.282,
    "inharmonicity": 0.312,
    "bodyCoupling": 0.555
  }
}
} as InstrumentDSPOverride;
