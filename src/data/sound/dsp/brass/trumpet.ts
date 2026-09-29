import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Bb Trumpet. Modeled with acoustic impedance and nonlinear brass shock-wave physics. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "brass-lip-oscillator",
    "energyPath": "lips/cup-mouthpiece/leadpipe/tuning-slide/valves/bell",
    "bodyArchitecture": "brass-tube",
    "primaryCollision": "lip valve pressure-gated standing-wave collision",
    "asymmetries": [
      "lip-closure-cycle",
      "shockwave-blare",
      "mute-cavity"
    ],
    "couplingPaths": [
      "mouthpiece-to-bore",
      "bore-to-bell-radiation",
      "hand-to-mute"
    ],
    "techniqueBindings": [
      "double-tonguing percussive transient impact",
      "lip-buzzing harmonic excitation with nonlinear shockwave steepening",
      "lip-trill shakes between adjacent valve overtones",
      "half-valve glissando and expressive falls/doits",
      "throat/flutter growl modulation",
      "harmon and cup mute acoustic filtering"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.78,
    "pressureSensitivity": 0.94,
    "nonlinearDrive": 0.38,
    "attackCollision": 0.82,
    "spectralSpread": 0.86,
    "directionalAsymmetry": 0.28,
    "lipTensionResistance": {
      "resistance": 0.90,
      "pressureToBrightness": 1.48,
      "standingWavePushback": 0.82,
      "nonlinearBlare": 1.15
    }
  },
  "coupledResonators": {
    "bodyModes": [
      { "ratio": 1.0,  "q": 3.6, "gain": 0.18 }, // Fundamental bore impedance
      { "ratio": 2.0,  "q": 4.2, "gain": 0.16 }, // 2nd harmonic overtone slot
      { "ratio": 3.0,  "q": 4.8, "gain": 0.14 }, // 3rd harmonic
      { "ratio": 4.0,  "q": 5.2, "gain": 0.12 }  // High bell reinforcement
    ],
    "airModes": [
      { "ratio": 2.53, "q": 2.2, "gain": 0.15 }  // Mouthpiece cup acoustic resonance
    ]
  },
  "mechanicalArtifacts": {
    "airHiss": 0.08,
    "keyThud": 0,
    "valveClick": 0.16,
    "fretBuzz": 0,
    "stringSqueak": 0,
    "pickZing": 0,
    "handContact": 0.06,
    "bodyKnock": 0,
    "rimImpact": 0,
    "bellowsNoise": 0,
    "damperNoise": 0,
    "palletClick": 0,
    "slideNoise": 0.12,
    "reedChatter": 0,
    "bellowsFold": 0,
    "bowRosin": 0,
    "hammerClick": 0,
    "pedalNoise": 0,
    "membraneFingerNoise": 0,
    "seedRattle": 0,
    "fippleNoise": 0,
    "muteContact": 0.14,
    "breathBurst": 0.14,
    "keyworkClick": 0.12
  },
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.26,
    "releaseCoupling": 0.44,
    "continuousSustain": true,
    "noteTransition": "lip-slur"
  },
  "genreDialects": {
    "salsa": {
      "excitationBias": 0.12,
      "brightness": 1.12,
      "damping": -0.04,
      "attack": 1.20,
      "body": 1.05,
      "articulation": ["accent", "staccato", "fall", "shake", "doit"]
    },
    "mambo": {
      "excitationBias": 0.14,
      "brightness": 1.15,
      "damping": -0.05,
      "attack": 1.22,
      "body": 1.08,
      "articulation": ["accent", "staccato", "shake", "fall"]
    },
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.98,
      "damping": 0.04,
      "attack": 1.00,
      "body": 1.12,
      "articulation": ["legato", "staccato", "bend", "vibrato", "cup-mute"]
    },
    "mariachi": {
      "excitationBias": 0.08,
      "brightness": 1.06,
      "damping": -0.02,
      "attack": 1.10,
      "body": 1.15,
      "articulation": ["accent", "vibrato", "legato"]
    },
    "funk": {
      "excitationBias": 0.12,
      "brightness": 1.14,
      "damping": -0.04,
      "attack": 1.25,
      "body": 1.00,
      "articulation": ["accent", "staccato", "shake"]
    },
    "ska": {
      "excitationBias": 0.10,
      "brightness": 1.10,
      "damping": -0.02,
      "attack": 1.18,
      "body": 0.98,
      "articulation": ["staccato", "accent", "fall"]
    }
  },
  "instrumentSpecific": {
    "trumpet": {
      "embouchureTension": 0.92,
      "pressureToBrightnessCurve": 1.48,
      "muteDamping": 0.24,
      "muteCombResonance": 0.18
    }
  },
  "physicalDetails": {
    "system": "lip-reed-brass-bore",
    "construction": "seamless drawn yellow brass with cup mouthpiece, piston valves, and exponential bell",
    "exciter": "human lips acting as inward/outward striking pressure valve into acoustic impedance tube",
    "asymmetries": [
      "Lip closure cycle asymmetry",
      "Nonlinear shockwave steepening along bore",
      "Mute insertion cavity reflection"
    ],
    "coupling": [
      "Lips to cup mouthpiece acoustic feedback",
      "Cylindrical tubing to bell radiation transfer",
      "Standing-wave bore impedance peaks"
    ],
    "artifactSources": [
      "Piston valve click and spring bounce",
      "Tonguing burst and breath turbulence",
      "Mute cork and hand resonance"
    ],
    "detail": [
      "Velocity nonlinearly drives harmonic steepening (brass blare)",
      "High frequency cutoff expands exponentially with blowing pressure",
      "Bell radiation filters low frequencies and projects directional upper partials"
    ],
    "response": {
      "contactHardness": 0.78,
      "resonatorQ": 0.85,
      "nonlinearTransfer": 0.42,
      "inharmonicity": 0.04,
      "bodyCoupling": 0.72
    }
  }
} as InstrumentDSPOverride;
