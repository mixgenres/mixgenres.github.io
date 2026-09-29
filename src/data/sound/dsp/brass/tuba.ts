import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Tuba. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "lip",
    "energyPath": "lip/bore/bell",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "lip-bore collision",
    "asymmetries": [
      "mute",
      "pitch-bend"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "tongued attack",
      "legato slur",
      "lip bend",
      "mute/stopping"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.46,
    "pressureSensitivity": 0.95,
    "nonlinearDrive": 0.123,
    "attackCollision": 0.67,
    "spectralSpread": 0.642,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.16
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.12
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
  "valveClick": 0.14,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0.04,
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
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0.08,
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
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "tongued attack",
        "legato slur",
        "lip bend",
        "mute/stopping"
      ]
    },
    "soul": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tongued attack",
        "legato slur",
        "lip bend",
        "mute/stopping"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "tongued attack",
        "legato slur",
        "lip bend",
        "mute/stopping"
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
    "contactHardness": 0.582,
    "resonatorQ": 0.98,
    "nonlinearTransfer": 0.209,
    "inharmonicity": 0.092,
    "bodyCoupling": 0.98
  }
}
} as InstrumentDSPOverride;
