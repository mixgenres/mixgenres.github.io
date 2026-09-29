import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Deep physical profile override for Jarana jarocha. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "jarana-course",
    "energyPath": "string/bridge/body",
    "bodyArchitecture": "wood-body",
    "primaryCollision": "finger or plectrum collision",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "mánico jarocho rasgueado strum",
      "percussive finger slap",
      "syncopated zapateado lock",
      "thumb bass counterline"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.56,
    "pressureSensitivity": 0.63,
    "nonlinearDrive": 0.191,
    "attackCollision": 0.56,
    "spectralSpread": 0.589,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.56,
        "q": 2.0,
        "gain": 0.147
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.114
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.102
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.097
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.11,
  "pickZing": 0.2,
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
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "retrigger"
  },
  "genreDialects": {
    "son-jarocho": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "mánico jarocho rasgueado strum",
        "percussive finger slap",
        "syncopated zapateado lock",
        "thumb bass counterline"
      ]
    },
    "mexican-folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "mánico jarocho rasgueado strum",
        "percussive finger slap",
        "syncopated zapateado lock",
        "thumb bass counterline"
      ]
    },
    "afro-mexican": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "mánico jarocho rasgueado strum",
        "percussive finger slap",
        "syncopated zapateado lock",
        "thumb bass counterline"
      ]
    },
    "cumbia": {
      "excitationBias": 0.04,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.06,
      "articulation": [
        "mánico jarocho rasgueado strum",
        "percussive finger slap",
        "syncopated zapateado lock",
        "thumb bass counterline"
      ]
    }
  },
  "physicalDetails": {
  "system": "plucked-string",
  "construction": "instrument-specific string body",
  "exciter": "instrument-specific pick/finger/nail",
  "asymmetries": [
    "pick/finger direction",
    "stopping position",
    "string gauge/register"
  ],
  "coupling": [
    "string-bridge",
    "bridge-body",
    "body-air"
  ],
  "artifactSources": [
    "contact click",
    "string scrape",
    "finger/pick noise"
  ],
  "detail": [
    "jarana string/bridge transfer is distinct from generic guitar",
    "register-dependent decay",
    "technique-dependent contact noise"
  ],
  "response": {
    "contactHardness": 0.668,
    "resonatorQ": 0.642,
    "nonlinearTransfer": 0.257,
    "inharmonicity": 0.076,
    "bodyCoupling": 0.547
  }
}
} as InstrumentDSPOverride;
