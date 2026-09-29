import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Authentic electromechanical rock-organ profile. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "electromagnetic tonewheel",
    "energyPath": "tonewheel/pickup/keying/speaker",
    "bodyArchitecture": "tonewheel organ through rotary speaker",
    "primaryCollision": "keying click and rotary onset",
    "asymmetries": [
      "drawbar registration",
      "rotor acceleration",
      "speaker breakup"
    ],
    "couplingPaths": [
      "tonewheel-pickup",
      "amp-speaker",
      "rotor-air"
    ],
    "techniqueBindings": [
      "percussive key click",
      "drawbar registration",
      "rotary swell",
      "palm smear"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.34,
    "pressureSensitivity": 0.22,
    "nonlinearDrive": 0.28,
    "attackCollision": 0.18,
    "spectralSpread": 0.72,
    "directionalAsymmetry": 0.34
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 2.6,
        "gain": 0.14
      },
      {
        "ratio": 2,
        "q": 2.1,
        "gain": 0.08
      },
      {
        "ratio": 3,
        "q": 1.8,
        "gain": 0.05
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
    "rock": {
      "excitationBias": 0.08,
      "brightness": 1.08,
      "damping": -0.01,
      "attack": 1.1,
      "articulation": [
        "percussive key click",
        "drawbar registration",
        "rotary swell",
        "palm smear"
      ]
    }
  },
  "physicalDetails": {
    "system": "electromechanical-tonewheel",
    "construction": "tonewheel generator, magnetic pickup, amplifier and rotary speaker",
    "exciter": "electromagnetic tonewheel",
    "asymmetries": [
      "drawbar harmonic mix",
      "rotor speed",
      "speaker breakup"
    ],
    "coupling": [
      "tonewheel-pickup",
      "amp-speaker",
      "rotor"
    ],
    "artifactSources": [
      "key click",
      "rotor modulation",
      "speaker grit"
    ],
    "detail": [
      "rotary speed changes amplitude and phase",
      "drawbars select harmonic partials"
    ],
    "response": {
      "contactHardness": 0.34,
      "resonatorQ": 0.42,
      "nonlinearTransfer": 0.28,
      "inharmonicity": 0.0,
      "bodyCoupling": 0.35
    }
  }
};
