import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "industrial",
  "name": "Industrial",
  "family": "United Kingdom / Germany / Global",
  "color": "#eb2a26",
  "description": "Industrial is an independent musical world. United Kingdom / Germany / Global idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "EBM",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "synth",
    "guitar",
    "synth",
    "drums",
    "sampler"
  ],
  "roles": {
    "lead": [
      "voice",
      "synth",
      "guitar"
    ],
    "harmony": [
      "synth",
      "guitar"
    ],
    "bass": [
      "synth"
    ],
    "percussion": [
      "drums",
      "sampler"
    ]
  },
  "pitchSystem": "12-tet",
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
      "id": "ebm",
      "name": "EBM",
      "description": "EBM: style-specific cycle and phrase variation EBM: style-specific articulation and phrase gesture EBM: style-specific harmony and cadence",
      "patterns": [
        "EBM: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "EBM: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "EBM: style-specific harmony and cadence"
      ]
    },
    {
      "id": "early-industrial",
      "name": "Early Industrial",
      "description": "Early Industrial: style-specific cycle and phrase variation Early Industrial: style-specific articulation and phrase gesture Early Industrial: style-specific harmony and cadence",
      "patterns": [
        "Early Industrial: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Early Industrial: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Early Industrial: style-specific harmony and cadence"
      ]
    },
    {
      "id": "industrial-dance",
      "name": "Industrial Dance",
      "description": "Industrial Dance: style-specific cycle and phrase variation Industrial Dance: style-specific articulation and phrase gesture Industrial Dance: style-specific harmony and cadence",
      "patterns": [
        "Industrial Dance: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Industrial Dance: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Industrial Dance: style-specific harmony and cadence"
      ]
    },
    {
      "id": "industrial-rock",
      "name": "Industrial Rock",
      "description": "Industrial Rock: style-specific cycle and phrase variation Industrial Rock: style-specific articulation and phrase gesture Industrial Rock: style-specific harmony and cadence",
      "patterns": [
        "Industrial Rock: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Industrial Rock: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Industrial Rock: style-specific harmony and cadence"
      ]
    },
    {
      "id": "industrial-metal",
      "name": "Industrial Metal",
      "description": "Industrial Metal: style-specific cycle and phrase variation Industrial Metal: style-specific articulation and phrase gesture Industrial Metal: style-specific harmony and cadence",
      "patterns": [
        "Industrial Metal: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Industrial Metal: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Industrial Metal: style-specific harmony and cadence"
      ]
    }
  ]
};
