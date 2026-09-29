import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Darbuka (Doumbek). Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "membrane",
    "energyPath": "head/shell/air",
    "bodyArchitecture": "skin-faced",
    "primaryCollision": "flesh/edge collision",
    "asymmetries": [
      "center",
      "rim"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "Doum: deep low resonant center palm strike",
      "Tek: right-hand ringing rim snap with ring finger",
      "Ka: left-hand crisp ring finger rim strike",
      "split-finger Turkish roll technique (index-ring alternation)",
      "finger-muffled slap in drum center (Slap/Sak)"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.54,
    "pressureSensitivity": 0.64,
    "nonlinearDrive": 0.187,
    "attackCollision": 0.83,
    "spectralSpread": 0.718,
    "directionalAsymmetry": 0.28
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.49,
        "q": 2.0,
        "gain": 0.18
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.13
      },
      {
        "ratio": 1.52,
        "q": 2.9,
        "gain": 0.113
      },
      {
        "ratio": 2.35,
        "q": 3.35,
        "gain": 0.105
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
  "handContact": 0.12,
  "bodyKnock": 0.08,
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
  "membraneFingerNoise": 0.26,
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
    "middle-eastern": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "Doum: deep low resonant center palm strike",
        "Tek: right-hand ringing rim snap with ring finger",
        "Ka: left-hand crisp ring finger rim strike",
        "split-finger Turkish roll technique (index-ring alternation)"
      ]
    },
    "belly-dance": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "Doum: deep low resonant center palm strike",
        "Tek: right-hand ringing rim snap with ring finger",
        "Ka: left-hand crisp ring finger rim strike",
        "split-finger Turkish roll technique (index-ring alternation)"
      ]
    },
    "turkish": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "Doum: deep low resonant center palm strike",
        "Tek: right-hand ringing rim snap with ring finger",
        "Ka: left-hand crisp ring finger rim strike",
        "split-finger Turkish roll technique (index-ring alternation)"
      ]
    },
    "arabic-maqam": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "Doum: deep low resonant center palm strike",
        "Tek: right-hand ringing rim snap with ring finger",
        "Ka: left-hand crisp ring finger rim strike",
        "split-finger Turkish roll technique (index-ring alternation)"
      ]
    },
    "balkan": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "Doum: deep low resonant center palm strike",
        "Tek: right-hand ringing rim snap with ring finger",
        "Ka: left-hand crisp ring finger rim strike",
        "split-finger Turkish roll technique (index-ring alternation)"
      ]
    },
    "flamenco-fusion": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "Doum: deep low resonant center palm strike",
        "Tek: right-hand ringing rim snap with ring finger",
        "Ka: left-hand crisp ring finger rim strike",
        "split-finger Turkish roll technique (index-ring alternation)"
      ]
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
    "resonatorQ": 0.702,
    "nonlinearTransfer": 0.274,
    "inharmonicity": 0.208,
    "bodyCoupling": 0.623
  }
}
} as InstrumentDSPOverride;
