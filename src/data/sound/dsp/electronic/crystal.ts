import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Crystal Bell. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "crystal-struck",
    "energyPath": "oscillator/filter/body",
    "bodyArchitecture": "glass-body",
    "primaryCollision": "circuit/switch/filter edge",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "glass friction resonance",
      "high-frequency additive harmonics",
      "long crystal decay",
      "subtle stereo panning"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.29,
    "pressureSensitivity": 0.475,
    "nonlinearDrive": 0.092,
    "attackCollision": 0.545,
    "spectralSpread": 0.582,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.145
      },
      {
        "ratio": 2.0,
        "q": 2.45,
        "gain": 0.113
      },
      {
        "ratio": 3.0,
        "q": 2.9,
        "gain": 0.102
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
  "damperNoise": 0.02,
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
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "glass friction resonance",
        "high-frequency additive harmonics",
        "long crystal decay",
        "subtle stereo panning"
      ]
    },
    "new-age": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "glass friction resonance",
        "high-frequency additive harmonics",
        "long crystal decay",
        "subtle stereo panning"
      ]
    },
    "soundtrack": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "glass friction resonance",
        "high-frequency additive harmonics",
        "long crystal decay",
        "subtle stereo panning"
      ]
    },
    "electronic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "glass friction resonance",
        "high-frequency additive harmonics",
        "long crystal decay",
        "subtle stereo panning"
      ]
    },
    "dream-pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "glass friction resonance",
        "high-frequency additive harmonics",
        "long crystal decay",
        "subtle stereo panning"
      ]
    }
  },
  "physicalDetails": {
  "system": "struck-resonator",
  "construction": "tuned resonant element with body/cavity",
  "exciter": "hammer/mallet/tangent",
  "asymmetries": [
    "contact hardness",
    "strike position",
    "damper state"
  ],
  "coupling": [
    "exciter-resonator",
    "resonator-body",
    "sympathetic notes"
  ],
  "artifactSources": [
    "key/action click",
    "hammer/mallet noise",
    "damper contact"
  ],
  "detail": [
    "attack is a collision spectrum",
    "modal ratios depend on resonator material",
    "damping changes both decay and spectral centroid"
  ],
  "response": {
    "contactHardness": 0.675,
    "resonatorQ": 0.642,
    "nonlinearTransfer": 0.382,
    "inharmonicity": 0.094,
    "bodyCoupling": 0.566
  }
}
} as InstrumentDSPOverride;
