import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Congas (Tumbadoras). Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "conga-membrane",
    "energyPath": "hand/head/shell/air",
    "bodyArchitecture": "wood-shell",
    "primaryCollision": "flesh-to-membrane collision",
    "asymmetries": [
      "center",
      "rim"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "open tone (tono abierto) with full fingers bouncing off rim",
      "muffled slap (slap tapao) fingers cup into head holding contact",
      "open slap (slap abierto) explosive high harmonic pop",
      "heel-toe palm rocking motion (manoteo)",
      "bass tone with full palm centered on head"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.58,
    "pressureSensitivity": 0.62,
    "nonlinearDrive": 0.194,
    "attackCollision": 0.85,
    "spectralSpread": 0.728,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.53,
        "q": 2.0,
        "gain": 0.182
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.131
      },
      {
        "ratio": 1.54,
        "q": 2.9,
        "gain": 0.114
      },
      {
        "ratio": 2.35,
        "q": 3.35,
        "gain": 0.105
      }
    ],
    "membrane2D": {
      "radial": 0.84,
      "circular": 0.62,
      "tension": 0.76,
      "damping": 0.52,
      "strikeZoneSensitivity": 0.96
    }
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.06,
  "handContact": 0.1,
  "bodyKnock": 0.07,
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
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "edge",
    "fleshVsNail": 0.18,
    "handDamping": 0,
    "attackToPitchCoupling": 0.292,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "salsa": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "open tone (tono abierto) with full fingers bouncing off rim",
        "muffled slap (slap tapao) fingers cup into head holding contact",
        "open slap (slap abierto) explosive high harmonic pop",
        "heel-toe palm rocking motion (manoteo)"
      ]
    },
    "son-cubano": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open tone (tono abierto) with full fingers bouncing off rim",
        "muffled slap (slap tapao) fingers cup into head holding contact",
        "open slap (slap abierto) explosive high harmonic pop",
        "heel-toe palm rocking motion (manoteo)"
      ]
    },
    "rumba-guaguanco": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open tone (tono abierto) with full fingers bouncing off rim",
        "muffled slap (slap tapao) fingers cup into head holding contact",
        "open slap (slap abierto) explosive high harmonic pop",
        "heel-toe palm rocking motion (manoteo)"
      ]
    },
    "latin-jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "open tone (tono abierto) with full fingers bouncing off rim",
        "muffled slap (slap tapao) fingers cup into head holding contact",
        "open slap (slap abierto) explosive high harmonic pop",
        "heel-toe palm rocking motion (manoteo)"
      ]
    },
    "cumbia": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.06,
      "articulation": [
        "open tone (tono abierto) with full fingers bouncing off rim",
        "muffled slap (slap tapao) fingers cup into head holding contact",
        "open slap (slap abierto) explosive high harmonic pop",
        "heel-toe palm rocking motion (manoteo)"
      ]
    },
    "cha-cha-cha": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "open tone (tono abierto) with full fingers bouncing off rim",
        "muffled slap (slap tapao) fingers cup into head holding contact",
        "open slap (slap abierto) explosive high harmonic pop",
        "heel-toe palm rocking motion (manoteo)"
      ]
    }
  },
  "instrumentSpecific": {
    "membrane": {
      "strikeZoneLocation": "center vs edge vs rim",
      "openToneShellCoupling": 0.86,
      "slapSkinOnly": 0.92,
      "handDamping": 0.6
    }
  },
  "physicalDetails": {
  "system": "membrane-shell-percussion",
  "construction": "tensioned membrane over resonant shell/body",
  "exciter": "hand/stick/beaters according to instrument",
  "asymmetries": [
    "center vs edge",
    "open vs damped",
    "hand vs stick",
    "rim contact"
  ],
  "coupling": [
    "membrane radial modes",
    "membrane circular modes",
    "shell/air cavity",
    "hand damping"
  ],
  "artifactSources": [
    "skin contact",
    "rim click",
    "shell knock"
  ],
  "detail": [
    "strike-zone controls modal mixture",
    "membrane tension controls decay",
    "shell/air coupling varies by stroke and hand damping"
  ],
  "response": {
    "contactHardness": 0.734,
    "resonatorQ": 0.772,
    "nonlinearTransfer": 0.248,
    "inharmonicity": 0.205,
    "bodyCoupling": 0.696
  }
}
} as InstrumentDSPOverride;
