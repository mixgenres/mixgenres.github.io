import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Deep physical profile override for Requinto (Bachata & Bolero lead guitar). Tuned a 4th higher with hard plectrum bite. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "hard-plectrum-high-tension-nylon",
    "energyPath": "hard-pick/high-tension-nylon-carbon-string/bone-saddle/spruce-top/530mm-box",
    "bodyArchitecture": "wood-body",
    "primaryCollision": "rigid plectrum snap close to bridge (cerca del puente)",
    "asymmetries": [
      "plectrum-angle",
      "palm-mute-damping",
      "treble-register-energy"
    ],
    "couplingPaths": [
      "high-tension-string-to-saddle",
      "soundboard-golpeador",
      "small-air-cavity-projection"
    ],
    "techniqueBindings": [
      "hard plectrum snap near the bridge (cerca del puente) for piercing treble bite",
      "rapid staccato mambo scale runs with palm muting",
      "chocheo arpeggiated tremolo picking",
      "expressive sliding into melody notes with slight fret zing",
      "percussive soundboard golpe tap on the tap plate",
      "fast wrist vibrato on sustained notes"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.88,
    "pressureSensitivity": 0.72,
    "nonlinearDrive": 0.28,
    "attackCollision": 0.84,
    "spectralSpread": 0.85,
    "directionalAsymmetry": 0.22
  },
  "coupledResonators": {
    "bodyModes": [
      { "ratio": 0.55, "q": 3.5, "gain": 0.16 }, // Small soundbox Helmholtz mode (165 Hz)
      { "ratio": 1.0,  "q": 3.0, "gain": 0.18 }, // Spruce top plate fundamental (360 Hz)
      { "ratio": 1.78, "q": 2.8, "gain": 0.14 }, // Soundboard lateral cross-dipole (640 Hz)
      { "ratio": 3.85, "q": 2.5, "gain": 0.20 }  // Plectrum saddle bite & treble presence (2400 Hz)
    ],
    "bridge": {
      "stiffness": 0.85,
      "buzz": 0.14,
      "settlingMs": 45
    },
    "soundboard": {
      "thudHz": 165,
      "thudGain": 0.15,
      "topModes": [165, 360, 640, 2400],
      "coupling": 0.75
    }
  },
  "mechanicalArtifacts": {
    "airHiss": 0,
    "keyThud": 0,
    "valveClick": 0,
    "fretBuzz": 0.14,
    "stringSqueak": 0.16,
    "pickZing": 0.32,
    "handContact": 0.12,
    "bodyKnock": 0.18,
    "rimImpact": 0,
    "bellowsNoise": 0,
    "damperNoise": 0.08,
    "palletClick": 0,
    "slideNoise": 0.15,
    "reedChatter": 0,
    "bellowsFold": 0,
    "bowRosin": 0,
    "hammerClick": 0,
    "pedalNoise": 0,
    "membraneFingerNoise": 0,
    "seedRattle": 0,
    "fippleNoise": 0,
    "muteContact": 0.18,
    "breathBurst": 0,
    "keyworkClick": 0
  },
  "articulationPhysics": {
    "strikeZoneLocation": "bridge", // Picked close to bridge for maximum attack sharpness
    "fleshVsNail": 0.05,
    "handDamping": 0.14,
    "attackToPitchCoupling": 0.28,
    "releaseCoupling": 0.22,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "bachata": {
      "excitationBias": 0.15,
      "brightness": 1.18,
      "damping": -0.05,
      "attack": 1.30,
      "body": 0.95,
      "articulation": ["accent", "staccato", "palm-mute", "bend", "vibrato", "tremolo"]
    },
    "bolero": {
      "excitationBias": 0.05,
      "brightness": 1.05,
      "damping": 0.02,
      "attack": 1.10,
      "body": 1.10,
      "articulation": ["accent", "legato", "vibrato", "golpe", "bend"]
    },
    "folk": {
      "excitationBias": 0.08,
      "brightness": 1.04,
      "damping": 0,
      "attack": 1.12,
      "body": 1.00,
      "articulation": ["accent", "staccato", "legato", "palm-mute"]
    }
  },
  "physicalDetails": {
    "system": "plucked-string",
    "construction": "short-scale 530mm classical guitar body with solid cedar/spruce top, mahogany back and sides, and bone nut/saddle",
    "exciter": "heavy tortoise/plastic plectrum striking high-tension carbon or nylon strings close to the bridge",
    "asymmetries": [
      "Rigid pick attack transient with two-stage release",
      "Palm-heel dampening on bridge saddle for staccato mambos",
      "Fourth-higher tuning shifting primary acoustic energy up to 1.5 - 6 kHz"
    ],
    "coupling": [
      "High-tension string to tie-block bridge",
      "Thin resonant soundboard with fan bracing",
      "Transparent golpeador tap plate"
    ],
    "artifactSources": [
      "High-frequency plectrum click and scrape",
      "Fret buzz on aggressive pull-offs and slides",
      "Palm muting damper contact",
      "Nail/finger tap on golpeador"
    ],
    "detail": [
      "Scale length is approximately 530mm vs standard 650mm, increasing treble harmonic clarity",
      "Virtually no low-end boominess below 150 Hz, perfectly clearing sonic space for bass and bongo",
      "Fast decay on palm-muted staccato notes produces the signature Dominican mambo groove"
    ],
    "response": {
      "contactHardness": 0.88,
      "resonatorQ": 0.84,
      "nonlinearTransfer": 0.32,
      "inharmonicity": 0.05,
      "bodyCoupling": 0.76
    }
  }
} as InstrumentDSPOverride;
