import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Deep physical profile override for Acoustic Violin. Modeled on Italian lutherie with Helmholtz stick-slip friction. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "horsehair-bow-rosin",
    "energyPath": "bow-hair/string/bridge/soundpost/spruce-top/maple-back/air",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "Helmholtz stick-slip friction with rosin hysteresis",
    "asymmetries": [
      "down-bow-vs-up-bow",
      "bow-velocity-gradient",
      "bridge-contact-point"
    ],
    "couplingPaths": [
      "string-to-bridge-transfer",
      "soundpost-asymmetry",
      "open-string-sympathetics"
    ],
    "techniqueBindings": [
      "détaché bow stroke with steady Helmholtz stick-slip oscillation",
      "expressive cantabile legato with seamless bow reversal",
      "spiccato bouncing bow with crisp rosin catch",
      "finger pizzicato with woody soundboard thud",
      "tremolo rapid bow reciprocation",
      "chicharra scrape behind the bridge (tango cicada)",
      "tambor percussive thumb snap on strings near bridge",
      "látigo rapid whip glissando into accented stop"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.54,
    "pressureSensitivity": 0.88,
    "nonlinearDrive": 0.22,
    "attackCollision": 0.68,
    "spectralSpread": 0.72,
    "directionalAsymmetry": 0.62
  },
  "coupledResonators": {
    "bodyModes": [
      { "ratio": 0.58, "q": 2.6, "gain": 0.18 }, // A0 Helmholtz f-hole air mode (275 Hz)
      { "ratio": 1.0,  "q": 3.0, "gain": 0.15 }, // B1- spruce soundboard breathing mode (460 Hz)
      { "ratio": 1.18, "q": 3.2, "gain": 0.13 }, // B1+ maple back bending mode (550 Hz)
      { "ratio": 2.85, "q": 2.4, "gain": 0.16 }  // Bridge hill resonance (3100 Hz)
    ],
    "sympathetic": {
      "coupling": 0.22,
      "q": 32,
      "ratios": [1.0, 1.498, 2.245, 3.364], // G3, D4, A4, E5 open string harmonics
      "decayScale": 0.85
    },
    "bridge": {
      "stiffness": 0.72,
      "buzz": 0.08,
      "settlingMs": 95
    },
    "soundboard": {
      "thudHz": 275,
      "thudGain": 0.12,
      "topModes": [275, 460, 550, 3100],
      "coupling": 0.72
    }
  },
  "mechanicalArtifacts": {
    "airHiss": 0.04,
    "keyThud": 0,
    "valveClick": 0,
    "fretBuzz": 0,
    "stringSqueak": 0.12,
    "pickZing": 0,
    "handContact": 0.08,
    "bodyKnock": 0.08,
    "rimImpact": 0,
    "bellowsNoise": 0,
    "damperNoise": 0.06,
    "palletClick": 0,
    "slideNoise": 0.10,
    "reedChatter": 0,
    "bellowsFold": 0,
    "bowRosin": 0.22,
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
    "fleshVsNail": 0.20,
    "handDamping": 0.08,
    "attackToPitchCoupling": 0.32,
    "releaseCoupling": 0.45,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "orchestral": {
      "excitationBias": 0,
      "brightness": 1.00,
      "damping": 0,
      "attack": 1.00,
      "body": 1.15,
      "articulation": ["legato", "tremolo", "vibrato", "portato", "pizzicato"]
    },
    "tango": {
      "excitationBias": 0.14,
      "brightness": 1.04,
      "damping": 0.015,
      "attack": 1.22,
      "body": 1.12,
      "articulation": ["marcato", "staccato", "arrastre", "pizzicato", "chicharra", "tambor", "latigo", "cantando"]
    },
    "folk": {
      "excitationBias": 0.06,
      "brightness": 1.04,
      "damping": 0,
      "attack": 1.12,
      "body": 1.05,
      "articulation": ["staccato", "pizzicato", "accent"]
    },
    "gypsy": {
      "excitationBias": 0.08,
      "brightness": 1.08,
      "damping": -0.02,
      "attack": 1.15,
      "body": 1.08,
      "articulation": ["vibrato", "accent", "spiccato"]
    },
    "bluegrass": {
      "excitationBias": 0.12,
      "brightness": 1.10,
      "damping": 0,
      "attack": 1.22,
      "body": 0.98,
      "articulation": ["accent", "staccato", "spiccato"]
    },
    "celtic": {
      "excitationBias": 0.04,
      "brightness": 1.02,
      "damping": 0,
      "attack": 1.08,
      "body": 1.06,
      "articulation": ["legato", "accent", "portato"]
    }
  },
  "physicalDetails": {
    "system": "bowed-string",
    "construction": "hand-carved arched spruce top and flamed maple back with maple neck and ebony fingerboard",
    "exciter": "horsehair bow coated in tree rosin applying stick-slip friction to wound steel/synthetic gut strings",
    "asymmetries": [
      "Down-bow vs up-bow attack profile",
      "Bow speed vs bow force nonlinear balance",
      "Stopping position shifts effective string length and damping"
    ],
    "coupling": [
      "String-to-bridge mechanical transmission",
      "Bridge-to-top plate and soundpost-to-back plate transfer",
      "Air cavity (A0 mode) sound radiation through f-holes",
      "4-string open sympathetic bank resonance"
    ],
    "artifactSources": [
      "Rosin stick-slip grab and scratch",
      "Finger shifting slide across wound strings",
      "Wood soundboard thud on finger pizzicato",
      "Tailpiece string scrape (chicharra)"
    ],
    "detail": [
      "Helmholtz motion creates triangular wave on string with high-frequency rosin friction",
      "Bridge hill resonance around 3100 Hz provides brilliance and acoustic projection",
      "Sympathetic strings sustain gentle ambient ring behind played notes"
    ],
    "response": {
      "contactHardness": 0.72,
      "resonatorQ": 0.82,
      "nonlinearTransfer": 0.32,
      "inharmonicity": 0.06,
      "bodyCoupling": 0.82
    }
  }
} as InstrumentDSPOverride;
