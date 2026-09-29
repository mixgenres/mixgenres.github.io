import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Sitar. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "sitar-jawari",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "gourd-jawari",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [
      "pitch-bend"
    ],
    "couplingPaths": [
      "cavity",
      "sympathetic"
    ],
    "techniqueBindings": [
      "mizrab stroke",
      "meend bend",
      "sympathetic resonance"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.65,
    "pressureSensitivity": 0.605,
    "nonlinearDrive": 0.157,
    "attackCollision": 0.465,
    "spectralSpread": 0.543,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.61,
        "q": 2.0,
        "gain": 0.136
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.108
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.099
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.094
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
  "bodyKnock": 0.08,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.03,
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
  "breathBurst": 0,
  "keyworkClick": 0
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
    "indian-classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "mizrab stroke",
        "meend bend",
        "sympathetic resonance"
      ]
    }
  },
  "physicalDetails": {
  "system": "fretted-lute-with-sympathetics",
  "construction": "long neck with movable frets and gourd resonator",
  "exciter": "wire mizrab pluck",
  "asymmetries": [
    "daun/baaj string roles",
    "pitch pulls across fret",
    "jawari bridge buzz"
  ],
  "coupling": [
    "main strings-to-jawari",
    "taraf sympathetic strings",
    "gourd body",
    "bridge contact"
  ],
  "artifactSources": [
    "mizrab zing",
    "jawari buzz",
    "fret contact",
    "string slide"
  ],
  "detail": [
    "sympathetic taraf strings",
    "movable frets",
    "jawari bridge",
    "large pitch bends",
    "gourd resonance"
  ],
  "response": {
    "contactHardness": 0.82,
    "resonatorQ": 0.78,
    "nonlinearTransfer": 0.34,
    "inharmonicity": 0.24,
    "bodyCoupling": 0.72
  }
}
} as InstrumentDSPOverride;
