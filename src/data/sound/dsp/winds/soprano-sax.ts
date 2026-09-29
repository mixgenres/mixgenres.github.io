import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Soprano sax. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "air",
    "energyPath": "air-column/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "jet/reed/lip excitation",
    "asymmetries": [
      "pitch-bend"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "tongue",
      "subtone",
      "growl",
      "bend"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.29,
    "pressureSensitivity": 0.825,
    "nonlinearDrive": 0.092,
    "attackCollision": 0.415,
    "spectralSpread": 0.519,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.13
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.105
      },
      {
        "ratio": 1.48,
        "q": 2.9,
        "gain": 0.097
      },
      {
        "ratio": 2.02,
        "q": 3.35,
        "gain": 0.092
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.16,
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
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0.1,
  "keyworkClick": 0.1
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
        "tongue",
        "subtone",
        "growl",
        "bend"
      ]
    }
  },
  "physicalDetails": {
  "system": "reed-bore-aerophone",
  "construction": "reed plus tone-hole/bore resonator",
  "exciter": "single or double reed depending instrument",
  "asymmetries": [
    "reed pressure",
    "register venting",
    "tone-hole opening",
    "embouchure"
  ],
  "coupling": [
    "reed-bore",
    "tone holes",
    "body-wall resonances"
  ],
  "artifactSources": [
    "reed scrape",
    "key/pad click",
    "air turbulence"
  ],
  "detail": [
    "reed oscillation is impedance-coupled to bore",
    "tone-hole pattern changes effective bore",
    "attack is pressure/reed onset rather than oscillator envelope"
  ],
  "response": {
    "contactHardness": 0.626,
    "resonatorQ": 0.604,
    "nonlinearTransfer": 0.256,
    "inharmonicity": 0.087,
    "bodyCoupling": 0.529
  }
}
} as InstrumentDSPOverride;
