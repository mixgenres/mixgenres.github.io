import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "jazz",
  "name": "Jazz",
  "family": "African American / United States",
  "color": "#2b21d9",
  "description": "Jazz is an independent musical world. African American / United States idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Hard Bop",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "trumpet",
    "alto-sax",
    "clarinet",
    "piano",
    "guitar",
    "upright-bass",
    "drums"
  ],
  "roles": {
    "lead": [
      "trumpet",
      "alto-sax",
      "clarinet"
    ],
    "harmony": [
      "piano",
      "guitar"
    ],
    "bass": [
      "upright-bass"
    ],
    "percussion": [
      "drums"
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
      "id": "hard-bop",
      "name": "Hard Bop",
      "description": "Hard Bop: style-specific cycle and phrase variation Hard Bop: style-specific articulation and phrase gesture Hard Bop: style-specific harmony and cadence",
      "patterns": [
        "Hard Bop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Hard Bop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Hard Bop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "bebop",
      "name": "Bebop",
      "description": "Bebop: style-specific cycle and phrase variation Bebop: style-specific articulation and phrase gesture Bebop: style-specific harmony and cadence",
      "patterns": [
        "Bebop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Bebop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Bebop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "cool",
      "name": "Cool",
      "description": "Cool: style-specific cycle and phrase variation Cool: style-specific articulation and phrase gesture Cool: style-specific harmony and cadence",
      "patterns": [
        "Cool: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Cool: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Cool: style-specific harmony and cadence"
      ]
    },
    {
      "id": "modal",
      "name": "Modal",
      "description": "Modal: style-specific cycle and phrase variation Modal: style-specific articulation and phrase gesture Modal: style-specific harmony and cadence",
      "patterns": [
        "Modal: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Modal: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Modal: style-specific harmony and cadence"
      ]
    },
    {
      "id": "post-bop",
      "name": "Post-Bop",
      "description": "Post-Bop: style-specific cycle and phrase variation Post-Bop: style-specific articulation and phrase gesture Post-Bop: style-specific harmony and cadence",
      "patterns": [
        "Post-Bop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Post-Bop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Post-Bop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "big-band",
      "name": "Big Band",
      "description": "Big Band: style-specific cycle and phrase variation Big Band: style-specific articulation and phrase gesture Big Band: style-specific harmony and cadence",
      "patterns": [
        "Big Band: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Big Band: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Big Band: style-specific harmony and cadence"
      ]
    },
    {
      "id": "gypsy-jazz",
      "name": "Gypsy Jazz",
      "description": "Gypsy Jazz: style-specific cycle and phrase variation Gypsy Jazz: style-specific articulation and phrase gesture Gypsy Jazz: style-specific harmony and cadence",
      "patterns": [
        "Gypsy Jazz: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Gypsy Jazz: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Gypsy Jazz: style-specific harmony and cadence"
      ]
    },
    {
      "id": "jazz-fusion",
      "name": "Jazz Fusion",
      "description": "Jazz Fusion: style-specific cycle and phrase variation Jazz Fusion: style-specific articulation and phrase gesture Jazz Fusion: style-specific harmony and cadence",
      "patterns": [
        "Jazz Fusion: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Jazz Fusion: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Jazz Fusion: style-specific harmony and cadence"
      ]
    },
    {
      "id": "free-jazz",
      "name": "Free Jazz",
      "description": "Free Jazz: style-specific cycle and phrase variation Free Jazz: style-specific articulation and phrase gesture Free Jazz: style-specific harmony and cadence",
      "patterns": [
        "Free Jazz: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Free Jazz: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Free Jazz: style-specific harmony and cadence"
      ]
    }
  ]
};
