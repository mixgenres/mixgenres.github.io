import type { InstrumentDSPOverride } from '../../schema/dsp-profile';

/** Authentic synth-brass physical DSP override. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "layered oscillators",
    "energyPath": "saw/pulse/filter/envelope",
    "bodyArchitecture": "analog-style subtractive voice",
    "primaryCollision": "brass-like filter attack",
    "asymmetries": [
      "filter envelope",
      "pitch drift",
      "detune"
    ],
    "couplingPaths": [
      "oscillator detune",
      "filter-envelope"
    ],
    "techniqueBindings": [
      "brass stab",
      "legato",
      "pitch bend"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.52,
    "pressureSensitivity": 0.4,
    "nonlinearDrive": 0.22,
    "attackCollision": 0.52,
    "spectralSpread": 0.68,
    "directionalAsymmetry": 0.12
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1,
        "q": 4.5,
        "gain": 0.12
      },
      {
        "ratio": 2,
        "q": 3,
        "gain": 0.055
      },
      {
        "ratio": 3,
        "q": 2.3,
        "gain": 0.028
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
    "handContact": 0,
    "bodyKnock": 0,
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
    "membraneFingerNoise": 0,
    "seedRattle": 0,
    "fippleNoise": 0,
    "muteContact": 0,
    "breathBurst": 0,
    "keyworkClick": 0
  },
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.2,
    "releaseCoupling": 0.3,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "electronic": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": 0.01,
      "attack": 1.08,
      "articulation": [
        "brass stab",
        "legato",
        "pitch bend"
      ]
    }
  },
  "physicalDetails": {
    "system": "subtractive-brass-synth",
    "construction": "detuned saw/pulse oscillators with envelope-controlled filter",
    "exciter": "detuned oscillators",
    "asymmetries": [
      "detune spread",
      "filter attack",
      "pitch envelope"
    ],
    "coupling": [
      "oscillators-filter",
      "envelope-VCA"
    ],
    "artifactSources": [
      "oscillator onset",
      "filter resonance"
    ],
    "detail": [
      "fast filter attack produces brass-like bite",
      "slow release preserves pad tail"
    ],
    "response": {
      "contactHardness": 0.42,
      "resonatorQ": 0.64,
      "nonlinearTransfer": 0.22,
      "inharmonicity": 0.0,
      "bodyCoupling": 0.06
    }
  }
};
