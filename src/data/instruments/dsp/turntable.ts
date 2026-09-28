import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Authentic turntable physical DSP override. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "mechanical-disc-contact",
    "energyPath": "stylus/record/cartridge/air",
    "bodyArchitecture": "direct-drive turntable and vinyl disc",
    "primaryCollision": "stylus-groove friction",
    "asymmetries": [
      "record eccentricity",
      "crossfader cuts",
      "hand braking"
    ],
    "couplingPaths": [
      "stylus-cartridge",
      "disc-platter"
    ],
    "techniqueBindings": [
      "baby scratch",
      "transformer cut",
      "backspin",
      "brake"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.72,
    "pressureSensitivity": 0.18,
    "nonlinearDrive": 0.22,
    "attackCollision": 0.76,
    "spectralSpread": 0.86,
    "directionalAsymmetry": 0.64
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 6,
        "gain": 0.08
      },
      {
        "ratio": 2.01,
        "q": 3.5,
        "gain": 0.04
      },
      {
        "ratio": 3.07,
        "q": 2.8,
        "gain": 0.025
      }
    ]
  },
  "mechanicalArtifacts": {
    "airHiss": 0.05,
    "keyThud": 0,
    "valveClick": 0,
    "fretBuzz": 0,
    "stringSqueak": 0,
    "pickZing": 0,
    "handContact": 0,
    "bodyKnock": 0.03,
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
    "breathBurst": 0,
    "keyworkClick": 0
  },
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.2,
    "releaseCoupling": 0.3,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "electronic": {
      "excitationBias": 0.08,
      "brightness": 1.1,
      "damping": 0.0,
      "attack": 1.1,
      "articulation": [
        "scratch",
        "backspin",
        "transformer",
        "brake"
      ]
    }
  },
  "physicalDetails": {
    "system": "electro-mechanical-disc",
    "construction": "vinyl disc on direct-drive platter with magnetic cartridge",
    "exciter": "stylus/groove friction",
    "asymmetries": [
      "groove velocity",
      "stylus pressure",
      "crossfader gating"
    ],
    "coupling": [
      "stylus-cartridge",
      "platter-bearing",
      "record-groove"
    ],
    "artifactSources": [
      "needle scratch",
      "vinyl crackle",
      "motor rumble"
    ],
    "detail": [
      "pitch changes by platter speed",
      "scratch reverses groove velocity",
      "cuts are amplitude-gated at the mixer"
    ],
    "response": {
      "contactHardness": 0.82,
      "resonatorQ": 0.42,
      "nonlinearTransfer": 0.24,
      "inharmonicity": 0.08,
      "bodyCoupling": 0.22
    }
  }
};
