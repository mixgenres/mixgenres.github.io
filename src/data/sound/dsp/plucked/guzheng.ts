import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Guzheng. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "guzheng-string-bridge",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "hollow-box",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "pitch-bend"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "right-hand pluck",
      "left-hand bend",
      "yaozhi tremolo"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.7,
    "pressureSensitivity": 0.56,
    "nonlinearDrive": 0.166,
    "attackCollision": 0.54,
    "spectralSpread": 0.579,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.7,
        "q": 2.0,
        "gain": 0.145
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.112
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.102
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.096
      }
    ],
    "sympathetic": {
      "coupling": 0.3,
      "q": 28,
      "ratios": [
        1,
        1.125,
        1.25,
        1.5,
        2
      ],
      "decayScale": 0.9
    }
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.2,
  "handContact": 0.1,
  "bodyKnock": 0.1,
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
  "keyworkClick": 0.0
},
  "articulationPhysics": {
    "strikeZoneLocation": "mixed",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "chinese-traditional": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "right-hand pluck",
        "left-hand bend",
        "yaozhi tremolo"
      ]
    }
  },
  "physicalDetails": {
  "system": "multi-string-bridge-zither",
  "construction": "long curved soundboard with individual movable bridges",
  "exciter": "right-hand finger picks",
  "asymmetries": [
    "right-hand pluck vs left-hand pressure",
    "individual bridge placement",
    "string afterlength"
  ],
  "coupling": [
    "string-to-individual-bridge",
    "bridge-to-soundboard",
    "left-afterlength segment",
    "soundboard cavity"
  ],
  "artifactSources": [
    "plectrum click",
    "bridge rattle",
    "string scrape"
  ],
  "detail": [
    "individual movable bridges",
    "left-hand pitch bends/vibrato",
    "right-hand multi-finger techniques",
    "afterlength responds to left-hand pressure"
  ],
  "response": {
    "contactHardness": 0.76,
    "resonatorQ": 0.84,
    "nonlinearTransfer": 0.14,
    "inharmonicity": 0.1,
    "bodyCoupling": 0.65
  }
}
} as InstrumentDSPOverride;
