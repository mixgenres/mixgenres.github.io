import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Trombone. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "lip",
    "energyPath": "lip/bore/bell",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "lip-bore collision",
    "asymmetries": [
      "slide"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "tongue",
      "lip slur",
      "slide position gliss"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.48,
    "pressureSensitivity": 0.94,
    "nonlinearDrive": 0.126,
    "attackCollision": 0.68,
    "spectralSpread": 0.646,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.162
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.121
      },
      {
        "ratio": 1.48,
        "q": 2.9,
        "gain": 0.107
      },
      {
        "ratio": 2.02,
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
  "handContact": 0.04,
  "bodyKnock": 0,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0,
  "palletClick": 0,
  "slideNoise": 0.18,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0,
  "pedalNoise": 0,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0.08,
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
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "tongue",
        "lip slur",
        "slide position gliss"
      ]
    }
  },
  "physicalDetails": {
  "system": "lip-reed-brass-bore",
  "construction": "metal tube with cup/funnel mouthpiece and bell",
  "exciter": "lip valve/embouchure oscillator",
  "asymmetries": [
    "lip pressure",
    "air pressure",
    "bore/register",
    "mute if present"
  ],
  "coupling": [
    "lips-mouthpiece",
    "mouthpiece-bore",
    "bore-bell",
    "hand/mute cavity"
  ],
  "artifactSources": [
    "valve click where applicable",
    "breath/air turbulence",
    "hand/mute contact"
  ],
  "detail": [
    "pressure nonlinearly increases upper partials",
    "standing-wave impedance feeds back to lips",
    "bell radiation changes with register"
  ],
  "response": {
    "contactHardness": 0.618,
    "resonatorQ": 0.669,
    "nonlinearTransfer": 0.275,
    "inharmonicity": 0.09,
    "bodyCoupling": 0.591
  }
}
} as InstrumentDSPOverride;
