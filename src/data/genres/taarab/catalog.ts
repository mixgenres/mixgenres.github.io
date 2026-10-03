import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "taarab",
  "name": "Taarab",
  "family": "Zanzibar / Swahili coast",
  "color": "#f24f99",
  "description": "Taarab is an independent musical world. Zanzibar / Swahili coast idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Zanzibar",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "oud",
    "qanun",
    "violin",
    "voice",
    "upright-bass",
    "darbuka",
    "riq"
  ],
  "roles": {
    "lead": [
      "oud",
      "qanun",
      "violin",
      "voice"
    ],
    "harmony": [
      "oud",
      "qanun"
    ],
    "bass": [
      "upright-bass"
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
      "id": "zanzibar",
      "name": "Zanzibar",
      "description": "Zanzibar: style-specific cycle and phrase variation Zanzibar: style-specific articulation and phrase gesture Zanzibar: style-specific harmony and cadence",
      "patterns": [
        "Zanzibar: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Zanzibar: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Zanzibar: style-specific harmony and cadence"
      ]
    },
    {
      "id": "classical-orchestra",
      "name": "Classical Orchestra",
      "description": "Classical Orchestra: style-specific cycle and phrase variation Classical Orchestra: style-specific articulation and phrase gesture Classical Orchestra: style-specific harmony and cadence",
      "patterns": [
        "Classical Orchestra: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Classical Orchestra: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Classical Orchestra: style-specific harmony and cadence"
      ]
    },
    {
      "id": "modern-taarab",
      "name": "Modern Taarab",
      "description": "Modern Taarab: style-specific cycle and phrase variation Modern Taarab: style-specific articulation and phrase gesture Modern Taarab: style-specific harmony and cadence",
      "patterns": [
        "Modern Taarab: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Modern Taarab: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Modern Taarab: style-specific harmony and cadence"
      ]
    },
    {
      "id": "swahili-orchestra",
      "name": "Swahili Orchestra",
      "description": "Swahili Orchestra: style-specific cycle and phrase variation Swahili Orchestra: style-specific articulation and phrase gesture Swahili Orchestra: style-specific harmony and cadence",
      "patterns": [
        "Swahili Orchestra: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Swahili Orchestra: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Swahili Orchestra: style-specific harmony and cadence"
      ]
    },
    {
      "id": "kidumbak",
      "name": "Kidumbak",
      "description": "Kidumbak: style-specific cycle and phrase variation Kidumbak: style-specific articulation and phrase gesture Kidumbak: style-specific harmony and cadence",
      "patterns": [
        "Kidumbak: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Kidumbak: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Kidumbak: style-specific harmony and cadence"
      ]
    }
  ]
};
