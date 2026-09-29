import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Indian Tabla Pair. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "tabla-membrane",
    "energyPath": "finger/head/syahi/air",
    "bodyArchitecture": "syahi-head",
    "primaryCollision": "finger-to-syahi membrane collision",
    "asymmetries": [
      "center",
      "pitch-bend"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "dayan syahi center strike",
      "bayan wrist pressure pitch swoop",
      "ti-re-ki-te fast finger rolls"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.65,
    "pressureSensitivity": 0.585,
    "nonlinearDrive": 0.157,
    "attackCollision": 0.765,
    "spectralSpread": 0.687,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.6,
        "q": 2.0,
        "gain": 0.172
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.126
      },
      {
        "ratio": 1.575,
        "q": 2.9,
        "gain": 0.111
      },
      {
        "ratio": 2.35,
        "q": 3.35,
        "gain": 0.103
      }
    ],
    "membrane2D": {
      "radial": 0.9,
      "circular": 0.76,
      "tension": 0.9,
      "damping": 0.4,
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
    "strikeZoneLocation": "mixed",
    "fleshVsNail": 0.18,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "hindustani-classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "dayan syahi center strike",
        "bayan wrist pressure pitch swoop",
        "ti-re-ki-te fast finger rolls"
      ]
    },
    "fusion": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "dayan syahi center strike",
        "bayan wrist pressure pitch swoop",
        "ti-re-ki-te fast finger rolls"
      ]
    },
    "world": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "dayan syahi center strike",
        "bayan wrist pressure pitch swoop",
        "ti-re-ki-te fast finger rolls"
      ]
    },
    "ambient": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "dayan syahi center strike",
        "bayan wrist pressure pitch swoop",
        "ti-re-ki-te fast finger rolls"
      ]
    }
  },
  "instrumentSpecific": {
    "membrane": {
      "strikeZoneLocation": "syahi center vs ring",
      "openToneShellCoupling": 0.64,
      "slapSkinOnly": 0.72,
      "handDamping": 0.32
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
    "contactHardness": 0.706,
    "resonatorQ": 0.688,
    "nonlinearTransfer": 0.275,
    "inharmonicity": 0.211,
    "bodyCoupling": 0.6
  }
}
} as InstrumentDSPOverride;
