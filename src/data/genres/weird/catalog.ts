import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "weird",
  "name": "Weird",
  "family": "Experimental / boundary-breaking",
  "color": "#498c38",
  "description": "Weird is an independent musical world. Experimental / boundary-breaking idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Deconstructed",
  "meter": "free / 4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "piano",
    "synth",
    "sampler",
    "synth",
    "drums"
  ],
  "roles": {
    "lead": [
      "piano",
      "synth",
      "sampler"
    ],
    "harmony": [
      "piano",
      "synth"
    ],
    "bass": [
      "synth"
    ],
    "percussion": [
      "sampler",
      "drums"
    ]
  },
  "pitchSystem": "xenharmonic / freely selected",
  "scales": [
    "style-appropriate tonal/modal vocabulary"
  ],
  "chordQualities": [
    "style-appropriate tonal/modal vocabulary",
    "phrase cadence",
    "bass/chord interaction"
  ],
  "harmonicRhythm": "phrase and section dependent",
  "cadences": [
    "phrase cadence"
  ],
  "bassChordInteraction": "Follow the style-specific pulse, harmonic rhythm, and phrase cadence.",
  "patternFamilies": [
    "style-defined rhythmic cells",
    "phrase-level variation",
    "section-specific fills"
  ],
  "techniques": [
    "instrument-specific articulation",
    "ornament",
    "phrase gesture",
    "ensemble interaction"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "deconstructed",
      "name": "Deconstructed",
      "description": "conflicting meters intentionally misaligned ostinati abrupt mute polytonality, clusters, chromatic cells",
      "patterns": [
        "conflicting meters",
        "intentionally misaligned ostinati",
        "broken form"
      ],
      "techniques": [
        "abrupt mute",
        "extreme articulation changes"
      ],
      "harmony": [
        "polytonality, clusters, chromatic cells"
      ]
    },
    {
      "id": "musique-concrete",
      "name": "Musique Concrète",
      "description": "sound-event montage reverse, splice, speed change, filtering spectral relationship rather than chord progression",
      "patterns": [
        "sound-event montage"
      ],
      "techniques": [
        "reverse, splice, speed change, filtering"
      ],
      "harmony": [
        "spectral relationship rather than chord progression"
      ]
    },
    {
      "id": "piano",
      "name": "Prepared Piano",
      "description": "percussive repeated cells preparation-specific attacks altered pitch set from prepared instrument",
      "patterns": [
        "percussive repeated cells"
      ],
      "techniques": [
        "preparation-specific attacks"
      ],
      "harmony": [
        "altered pitch set from prepared instrument"
      ]
    },
    {
      "id": "glitch",
      "name": "Glitch",
      "description": "micro-cuts skips buffer repeat, bitcrush, stutter fragments/static pitch field",
      "patterns": [
        "micro-cuts",
        "skips",
        "broken loops"
      ],
      "techniques": [
        "buffer repeat, bitcrush, stutter"
      ],
      "harmony": [
        "fragments/static pitch field"
      ]
    },
    {
      "id": "microsound",
      "name": "Microsound",
      "description": "granular impulses micro-granulation, ultra-short envelopes spectral bands",
      "patterns": [
        "granular impulses"
      ],
      "techniques": [
        "micro-granulation, ultra-short envelopes"
      ],
      "harmony": [
        "spectral bands"
      ]
    },
    {
      "id": "process-generative",
      "name": "Process / Generative",
      "description": "rule-derived loops probability chains algorithmic mutation constrained pitch-set evolution",
      "patterns": [
        "rule-derived loops",
        "probability chains"
      ],
      "techniques": [
        "algorithmic mutation"
      ],
      "harmony": [
        "constrained pitch-set evolution"
      ]
    },
    {
      "id": "phase",
      "name": "Phase",
      "description": "identical loop with gradual temporal displacement Phase: style-specific articulation and phrase gesture emergent composite sonority",
      "patterns": [
        "identical loop with gradual temporal displacement"
      ],
      "techniques": [
        "Phase: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "emergent composite sonority"
      ]
    },
    {
      "id": "microtonal",
      "name": "Microtonal",
      "description": "ordinary or experimental rhythm continuous pitch bend / alternate tuning just intonation, EDOs, spectral intervals",
      "patterns": [
        "ordinary or experimental rhythm"
      ],
      "techniques": [
        "continuous pitch bend / alternate tuning"
      ],
      "harmony": [
        "just intonation, EDOs, spectral intervals"
      ]
    },
    {
      "id": "free-improvisation",
      "name": "Free Improvisation",
      "description": "gesture-response rather than meter extended instrument techniques unconstrained or locally emergent",
      "patterns": [
        "gesture-response rather than meter"
      ],
      "techniques": [
        "extended instrument techniques"
      ],
      "harmony": [
        "unconstrained or locally emergent"
      ]
    },
    {
      "id": "noise",
      "name": "Noise",
      "description": "density envelopes feedback, distortion, saturation spectrum/noise bands",
      "patterns": [
        "density envelopes"
      ],
      "techniques": [
        "feedback, distortion, saturation"
      ],
      "harmony": [
        "spectrum/noise bands"
      ]
    },
    {
      "id": "drone",
      "name": "Drone",
      "description": "sustained tone fields feedback, bow sustain, overtone emphasis very slow spectral/interval change",
      "patterns": [
        "sustained tone fields"
      ],
      "techniques": [
        "feedback, bow sustain, overtone emphasis"
      ],
      "harmony": [
        "very slow spectral/interval change"
      ]
    },
    {
      "id": "spectral",
      "name": "Spectral",
      "description": "evolving timbral envelopes multiphonics, harmonics, spectral orchestration overtone-derived chord fields",
      "patterns": [
        "evolving timbral envelopes"
      ],
      "techniques": [
        "multiphonics, harmonics, spectral orchestration"
      ],
      "harmony": [
        "overtone-derived chord fields"
      ]
    },
    {
      "id": "no-wave",
      "name": "No Wave",
      "description": "jagged stop/start rhythm scratch guitar, dead notes, abrasive attack atonal/chromatic clusters",
      "patterns": [
        "jagged stop/start rhythm"
      ],
      "techniques": [
        "scratch guitar, dead notes, abrasive attack"
      ],
      "harmony": [
        "atonal/chromatic clusters"
      ]
    },
    {
      "id": "zeuhl",
      "name": "Zeuhl",
      "description": "ritual ostinato irregular meter chant, dramatic ensemble unison modal/altered, chromatic ostinato fields",
      "patterns": [
        "ritual ostinato",
        "irregular meter",
        "repeated bass cells"
      ],
      "techniques": [
        "chant, dramatic ensemble unison"
      ],
      "harmony": [
        "modal/altered, chromatic ostinato fields"
      ]
    },
    {
      "id": "polymetric",
      "name": "Polymetric",
      "description": "long cycle against stable reference meter precise accent displacement riff-based pedal harmony",
      "patterns": [
        "long cycle against stable reference meter"
      ],
      "techniques": [
        "precise accent displacement"
      ],
      "harmony": [
        "riff-based pedal harmony"
      ]
    },
    {
      "id": "circuit-bent-broken-electronics",
      "name": "Circuit-Bent / Broken Electronics",
      "description": "unstable clock/rhythm voltage/pitch instability unstable oscillator pitch relationships",
      "patterns": [
        "unstable clock/rhythm"
      ],
      "techniques": [
        "voltage/pitch instability",
        "random trigger"
      ],
      "harmony": [
        "unstable oscillator pitch relationships"
      ]
    }
  ]
};
