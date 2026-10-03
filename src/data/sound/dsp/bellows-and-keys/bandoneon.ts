import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Bandoneón. Modeled after historical Alfred Arnold (AA) bisonoric instruments. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "free-reed-bellows",
    "energyPath": "bellows/reed-plates/peines/resonator-chamber",
    "bodyArchitecture": "wood-chamber",
    "primaryCollision": "air-stream reed excitation with pallet release",
    "asymmetries": [
      "bellows-direction",
      "bisonoric-pitch",
      "knee-drop-accent"
    ],
    "couplingPaths": [
      "reed-to-reed-block",
      "chamber-to-casing",
      "air-column-bellows"
    ],
    "techniqueBindings": [
      "knee-drop marcato (golpe de rodilla) with violent pressure burst",
      "abrir (opening bellows) weeping lyrical cantabile with wrist vibrato",
      "cerrar (closing bellows) compressed biting rhythmic articulation",
      "arrastre chromatic approach figure and pressure swell into the downbeat",
      "staccato seco with instantaneous pallet choke",
      "bellows slap and wooden casing golpe"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.74,
    "pressureSensitivity": 0.88,
    "nonlinearDrive": 0.32,
    "attackCollision": 0.86,
    "spectralSpread": 0.82,
    "directionalAsymmetry": 0.42,
    "bisonoricAsymmetry": {
      "opening": {
        "attack": 0.88,
        "formantShift": -0.06,
        "pitchDriftCents": -2.4,
        "pressure": 0.90
      },
      "closing": {
        "attack": 1.34,
        "formantShift": 0.10,
        "pitchDriftCents": 2.1,
        "pressure": 1.22
      }
    },
    "kneeDropImpact": {
      "threshold": 0.65,
      "gain": 1.15,
      "saturation": 0.85,
      "decayMs": 16
    }
  },
  "coupledResonators": {
    "bodyModes": [
      { "ratio": 0.52, "q": 2.2, "gain": 0.19 }, // Sub-chamber cavity resonance
      { "ratio": 1.0,  "q": 3.0, "gain": 0.16 }, // Reed fundamental plate resonance
      { "ratio": 1.84, "q": 3.4, "gain": 0.13 }, // Reed block acoustic impedance peak
      { "ratio": 2.92, "q": 2.6, "gain": 0.11 }  // Grill / casework acoustic radiation
    ],
    "soundboard": {
      "thudHz": 310,
      "thudGain": 0.16,
      "topModes": [310, 840, 2380],
      "coupling": 0.68
    }
  },
  "mechanicalArtifacts": {
    "airHiss": 0.14,
    "keyThud": 0.08,
    "valveClick": 0.15,
    "fretBuzz": 0,
    "stringSqueak": 0,
    "pickZing": 0,
    "handContact": 0.06,
    "bodyKnock": 0.12,
    "rimImpact": 0,
    "bellowsNoise": 0.22,
    "damperNoise": 0.10,
    "palletClick": 0.18,
    "slideNoise": 0,
    "reedChatter": 0.14,
    "bellowsFold": 0.24,
    "bowRosin": 0,
    "hammerClick": 0,
    "pedalNoise": 0,
    "membraneFingerNoise": 0,
    "seedRattle": 0,
    "fippleNoise": 0,
    "muteContact": 0,
    "breathBurst": 0,
    "keyworkClick": 0.15
  },
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.38,
    "releaseCoupling": 0.48,
    "continuousSustain": true,
    "noteTransition": "bellows-flow"
  },
  "genreDialects": {
    "tango": {
      "excitationBias": 0.08,
      "brightness": 1.05,
      "damping": 0.02,
      "attack": 1.18,
      "body": 1.10,
      "articulation": [
        "marcato",
        "staccato",
        "arrastre",
        "tenuto",
        "bellows-slap"
      ]
    },
    "nuevo-tango": {
      "excitationBias": 0.04,
      "brightness": 1.02,
      "damping": 0.04,
      "attack": 1.05,
      "body": 1.15,
      "articulation": [
        "legato",
        "tenuto",
        "marcato",
        "arrastre"
      ]
    },
    "milonga": {
      "excitationBias": 0.12,
      "brightness": 1.08,
      "damping": 0.06,
      "attack": 1.25,
      "body": 0.95,
      "articulation": [
        "staccato",
        "accent",
        "marcato"
      ]
    },
    "chamame": {
      "excitationBias": 0.02,
      "brightness": 1.00,
      "damping": 0,
      "attack": 1.05,
      "body": 1.00,
      "articulation": [
        "accent",
        "staccato",
        "legato"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 0.98,
      "damping": 0.02,
      "attack": 1.00,
      "body": 1.00,
      "articulation": [
        "legato",
        "tenuto",
        "accent"
      ]
    }
  },
  "instrumentSpecific": {
    "bisonoric": {
      "opening": "Abrir: singing, lower pressure gradient, softer onset, slight chamber warmth (-2.4 cents sag on forte)",
      "closing": "Cerrar: sharp attack, compressed chamber, bright high-order harmonics (+2.1 cents push)",
      "kneeDropImpact": true,
      "dryReedBanks": "two-chörig octave register (8-foot fundamental + 4-foot upper octave); dry tuning without musette beating"
    }
  },
  "physicalDetails": {
    "system": "bisonoric-free-reed",
    "construction": "dual-chamber zinc reed-blocks in solid resonant pine cabinet with cardboard/leather bellows",
    "exciter": "steel/zinc free-reed tongues vibrating in tight slots under bellows pressure differential",
    "asymmetries": [
      "Abrir/Cerrar bisonoric button mapping",
      "Bellows reversal inertia and pressure bounce",
      "Knee-drop marcato transient surge"
    ],
    "coupling": [
      "8-foot and 4-foot inter-reed acoustic coupling",
      "Reed-plate to hardwood block resonance transfer",
      "Bellows air reservoir compliance",
      "Acoustic wooden case radiation"
    ],
    "artifactSources": [
      "Felt/leather pallet clatter on open/close",
      "Bellows fold leather creak and air intake sigh",
      "Wooden casework impact thud",
      "Knee-drop transient pulse"
    ],
    "detail": [
      "Dry 8' and 4' octave-paired reed voices provide characteristic biting Argentine tango color",
      "Zero musette beating gives pure harmonic punch",
      "Nonlinear pressure curve produces soaring harmonic brilliance under fortissimo"
    ],
    "response": {
      "contactHardness": 0.76,
      "resonatorQ": 0.84,
      "nonlinearTransfer": 0.36,
      "inharmonicity": 0.08,
      "bodyCoupling": 0.78
    }
  }
} as InstrumentDSPOverride;
