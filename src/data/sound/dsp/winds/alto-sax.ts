import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Alto Saxophone. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
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
      "jaw-dropped expressive blues note bends",
      "bebop swing tongue articulation (slur two, tongue two)",
      "growl created by singing while blowing into reed",
      "subtone warmth on low notes with loose lower lip",
      "altissimo overtone fingerings extending range upward"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.39,
    "pressureSensitivity": 0.775,
    "nonlinearDrive": 0.11,
    "attackCollision": 0.465,
    "spectralSpread": 0.543,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.92,
        "q": 2.0,
        "gain": 0.136
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.108
      },
      {
        "ratio": 1.48,
        "q": 2.9,
        "gain": 0.099
      },
      {
        "ratio": 2.02,
        "q": 3.35,
        "gain": 0.094
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
        "jaw-dropped expressive blues note bends",
        "bebop swing tongue articulation (slur two, tongue two)",
        "growl created by singing while blowing into reed",
        "subtone warmth on low notes with loose lower lip"
      ]
    },
    "bebop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "jaw-dropped expressive blues note bends",
        "bebop swing tongue articulation (slur two, tongue two)",
        "growl created by singing while blowing into reed",
        "subtone warmth on low notes with loose lower lip"
      ]
    },
    "funk": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "jaw-dropped expressive blues note bends",
        "bebop swing tongue articulation (slur two, tongue two)",
        "growl created by singing while blowing into reed",
        "subtone warmth on low notes with loose lower lip"
      ]
    },
    "soul": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "jaw-dropped expressive blues note bends",
        "bebop swing tongue articulation (slur two, tongue two)",
        "growl created by singing while blowing into reed",
        "subtone warmth on low notes with loose lower lip"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "jaw-dropped expressive blues note bends",
        "bebop swing tongue articulation (slur two, tongue two)",
        "growl created by singing while blowing into reed",
        "subtone warmth on low notes with loose lower lip"
      ]
    },
    "ska": {
      "excitationBias": 0,
      "brightness": 1.04,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "jaw-dropped expressive blues note bends",
        "bebop swing tongue articulation (slur two, tongue two)",
        "growl created by singing while blowing into reed",
        "subtone warmth on low notes with loose lower lip"
      ]
    },
    "rnb": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "jaw-dropped expressive blues note bends",
        "bebop swing tongue articulation (slur two, tongue two)",
        "growl created by singing while blowing into reed",
        "subtone warmth on low notes with loose lower lip"
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
    "contactHardness": 0.62,
    "resonatorQ": 0.614,
    "nonlinearTransfer": 0.244,
    "inharmonicity": 0.087,
    "bodyCoupling": 0.543
  }
}
} as InstrumentDSPOverride;
