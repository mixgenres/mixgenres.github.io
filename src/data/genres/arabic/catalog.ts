import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "arabic",
  "name": "Arabic",
  "family": "Arab world",
  "color": "#c56279",
  "description": "Arabic is an independent musical world. Arab world idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Tarab",
  "meter": "free / cycle",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "oud",
    "ney",
    "voice",
    "qanun",
    "darbuka",
    "riq"
  ],
  "roles": {
    "lead": [
      "oud",
      "ney",
      "voice"
    ],
    "harmony": [
      "qanun",
      "oud"
    ],
    "bass": [
      "oud"
    ],
    "percussion": [
      "darbuka",
      "riq"
    ]
  },
  "pitchSystem": "maqam / microtonal inflection",
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
      "id": "tarab",
      "name": "Tarab",
      "description": "Tarab: style-specific cycle and phrase variation Tarab: style-specific articulation and phrase gesture Tarab: style-specific harmony and cadence",
      "patterns": [
        "Tarab: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Tarab: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Tarab: style-specific harmony and cadence"
      ]
    },
    {
      "id": "takht",
      "name": "Takht",
      "description": "Takht: style-specific cycle and phrase variation Takht: style-specific articulation and phrase gesture Takht: style-specific harmony and cadence",
      "patterns": [
        "Takht: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Takht: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Takht: style-specific harmony and cadence"
      ]
    },
    {
      "id": "muwashshah",
      "name": "Muwashshah",
      "description": "Muwashshah: style-specific cycle and phrase variation Muwashshah: style-specific articulation and phrase gesture Muwashshah: style-specific harmony and cadence",
      "patterns": [
        "Muwashshah: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Muwashshah: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Muwashshah: style-specific harmony and cadence"
      ]
    },
    {
      "id": "instrumental-maqam",
      "name": "Instrumental Maqam",
      "description": "Instrumental Maqam: style-specific cycle and phrase variation Instrumental Maqam: style-specific articulation and phrase gesture Instrumental Maqam: style-specific harmony and cadence",
      "patterns": [
        "Instrumental Maqam: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Instrumental Maqam: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Instrumental Maqam: style-specific harmony and cadence"
      ]
    },
    {
      "id": "modern-arabic-orchestra",
      "name": "Modern Arabic Orchestra",
      "description": "Modern Arabic Orchestra: style-specific cycle and phrase variation Modern Arabic Orchestra: style-specific articulation and phrase gesture Modern Arabic Orchestra: style-specific harmony and cadence",
      "patterns": [
        "Modern Arabic Orchestra: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Modern Arabic Orchestra: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Modern Arabic Orchestra: style-specific harmony and cadence"
      ]
    }
  ]
};
