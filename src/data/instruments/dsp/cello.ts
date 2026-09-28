import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Deep physical profile override for Violoncello. Modeled with large 22-liter air cavity and heavy-gauge stick-slip friction. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "heavy-horsehair-bow-rosin",
    "energyPath": "bow-hair/heavy-wound-string/belgian-bridge/soundpost/spruce-top/maple-back/22L-air-cavity",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "heavy string Helmholtz stick-slip friction with rosin grab",
    "asymmetries": [
      "thick-string-rotational-inertia",
      "bow-pressure-hysteresis",
      "endpin-floor-coupling"
    ],
    "couplingPaths": [
      "string-to-bridge-lever",
      "soundpost-acoustic-transfer",
      "A0-air-cavity-resonance",
      "open-string-sympathetics"
    ],
    "techniqueBindings": [
      "expressive singing cantabile arco with deep chest resonance",
      "tango arrastre heavy bow drag from below the pitch",
      "deep resonant finger pizzicato with low-end air cavity thud",
      "spiccato bouncing bow with thick string rosin bite",
      "sul tasto flautando airy whisper",
      "sul ponticello cold metallic rasp",
      "tremolo rapid bow direction reversal"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.58,
    "pressureSensitivity": 0.92,
    "nonlinearDrive": 0.28,
    "attackCollision": 0.72,
    "spectralSpread": 0.68,
    "directionalAsymmetry": 0.58
  },
  "coupledResonators": {
    "bodyModes": [
      { "ratio": 0.44, "q": 3.4, "gain": 0.22 }, // A0 Helmholtz air mode (~108 Hz)
      { "ratio": 1.0,  "q": 2.8, "gain": 0.18 }, // B1- spruce wood breathing mode (~180 Hz)
      { "ratio": 1.55, "q": 3.0, "gain": 0.14 }, // B1+ maple back bending mode (~280 Hz)
      { "ratio": 2.45, "q": 2.4, "gain": 0.16 }  // Cello bridge hill singing formant (~1550 Hz)
    ],
    "sympathetic": {
      "coupling": 0.26,
      "q": 30,
      "ratios": [1.0, 1.498, 2.245, 3.364], // C2, G2, D3, A3 open strings
      "decayScale": 0.90
    },
    "bridge": {
      "stiffness": 0.78,
      "buzz": 0.06,
      "settlingMs": 120
    },
    "soundboard": {
      "thudHz": 108,
      "thudGain": 0.18,
      "topModes": [108, 180, 280, 1550],
      "coupling": 0.82
    }
  },
  "mechanicalArtifacts": {
    "airHiss": 0.04,
    "keyThud": 0,
    "valveClick": 0,
    "fretBuzz": 0,
    "stringSqueak": 0.14,
    "pickZing": 0,
    "handContact": 0.08,
    "bodyKnock": 0.12,
    "rimImpact": 0,
    "bellowsNoise": 0,
    "damperNoise": 0.08,
    "palletClick": 0,
    "slideNoise": 0.14,
    "reedChatter": 0,
    "bellowsFold": 0,
    "bowRosin": 0.26,
    "hammerClick": 0,
    "pedalNoise": 0,
    "membraneFingerNoise": 0,
    "seedRattle": 0,
    "fippleNoise": 0,
    "muteContact": 0.06,
    "breathBurst": 0,
    "keyworkClick": 0
  },
  "articulationPhysics": {
    "strikeZoneLocation": "center",
    "fleshVsNail": 0.15,
    "handDamping": 0.10,
    "attackToPitchCoupling": 0.36,
    "releaseCoupling": 0.48,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "classical": {
      "excitationBias": 0,
      "brightness": 1.00,
      "damping": 0,
      "attack": 1.00,
      "body": 1.20,
      "articulation": ["arco", "legato", "tenuto", "pizzicato", "portato", "vibrato"]
    },
    "tango": {
      "excitationBias": 0.12,
      "brightness": 1.06,
      "damping": 0.02,
      "attack": 1.25,
      "body": 1.15,
      "articulation": ["arrastre", "staccato", "accent", "arco", "pizzicato"]
    },
    "cinematic": {
      "excitationBias": 0.02,
      "brightness": 1.02,
      "damping": 0,
      "attack": 1.05,
      "body": 1.25,
      "articulation": ["legato", "tenuto", "tremolo", "vibrato", "arco"]
    },
    "folk": {
      "excitationBias": 0.08,
      "brightness": 1.04,
      "damping": 0,
      "attack": 1.15,
      "body": 1.08,
      "articulation": ["arco", "pizzicato", "accent", "staccato"]
    },
    "pop": {
      "excitationBias": 0.04,
      "brightness": 1.02,
      "damping": 0,
      "attack": 1.08,
      "body": 1.10,
      "articulation": ["arco", "legato", "pizzicato"]
    }
  },
  "physicalDetails": {
    "system": "bowed-string",
    "construction": "large hand-carved spruce top and maple ribs/back with 22-liter acoustic chamber and endpin",
    "exciter": "heavy horsehair bow with dark sticky rosin exciting thick wound steel/core strings",
    "asymmetries": [
      "Thick string inertia creates characteristic onset delay and initial catch crunch",
      "Low strings (C2, G2) drive the A0 Helmholtz cavity with massive acoustic resonance",
      "Tango arrastre bow drag from below pitch delivers intense acoustic bite"
    ],
    "coupling": [
      "Heavy string-to-bridge lever transfer",
      "Spruce top plate to large interior air cavity",
      "Endpin floor vibrational conduction",
      "C2-G2-D3-A3 sympathetic string bank"
    ],
    "artifactSources": [
      "Thick rosin bite crunch",
      "Finger shifting slide across wound metal windings",
      "Deep wooden soundboard knock on pizzicato",
      "Endpin floor resonance"
    ],
    "detail": [
      "Helmholtz stick-slip motion provides rich warm saw-triangular string waveform",
      "Bridge hill resonance around 1550 Hz gives the cello its singing human vocal tenor quality",
      "Substantial body volume produces sustained, blooming low frequencies"
    ],
    "response": {
      "contactHardness": 0.68,
      "resonatorQ": 0.88,
      "nonlinearTransfer": 0.35,
      "inharmonicity": 0.07,
      "bodyCoupling": 0.88
    }
  }
} as InstrumentDSPOverride;
