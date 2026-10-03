import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "gnawa",
  "name": "Gnawa",
  "family": "Morocco",
  "color": "#ca08f5",
  "description": "Gnawa is an independent musical world. Morocco idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Traditional",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "guembri",
    "voice",
    "qraqeb",
    "hand-percussion"
  ],
  "roles": {
    "lead": [
      "guembri",
      "voice"
    ],
    "harmony": [
      "guembri"
    ],
    "bass": [
      "guembri"
    ],
    "percussion": [
      "qraqeb",
      "hand-percussion"
    ]
  },
  "pitchSystem": "modal / drone-centered",
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
      "id": "traditional",
      "name": "Traditional",
      "description": "Traditional: style-specific cycle and phrase variation Traditional: style-specific articulation and phrase gesture Traditional: style-specific harmony and cadence",
      "patterns": [
        "Traditional: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Traditional: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Traditional: style-specific harmony and cadence"
      ]
    },
    {
      "id": "lila-trance",
      "name": "Lila / Trance",
      "description": "Lila / Trance: style-specific cycle and phrase variation Lila / Trance: style-specific articulation and phrase gesture Lila / Trance: style-specific harmony and cadence",
      "patterns": [
        "Lila / Trance: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Lila / Trance: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Lila / Trance: style-specific harmony and cadence"
      ]
    },
    {
      "id": "gnawa-jazz",
      "name": "Gnawa Jazz",
      "description": "Gnawa Jazz: style-specific cycle and phrase variation Gnawa Jazz: style-specific articulation and phrase gesture Gnawa Jazz: style-specific harmony and cadence",
      "patterns": [
        "Gnawa Jazz: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Gnawa Jazz: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Gnawa Jazz: style-specific harmony and cadence"
      ]
    },
    {
      "id": "gnawa-rock",
      "name": "Gnawa Rock",
      "description": "Gnawa Rock: style-specific cycle and phrase variation Gnawa Rock: style-specific articulation and phrase gesture Gnawa Rock: style-specific harmony and cadence",
      "patterns": [
        "Gnawa Rock: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Gnawa Rock: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Gnawa Rock: style-specific harmony and cadence"
      ]
    }
  ]
};
