import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "gospel",
  "name": "Gospel",
  "family": "African American / United States",
  "color": "#0b7346",
  "description": "Gospel is an independent musical world. African American / United States idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Choir Gospel",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "organ",
    "piano",
    "bass",
    "drums",
    "choir"
  ],
  "roles": {
    "lead": [
      "voice",
      "organ"
    ],
    "harmony": [
      "piano",
      "organ"
    ],
    "bass": [
      "bass"
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
      "id": "choir-gospel",
      "name": "Choir Gospel",
      "description": "Choir Gospel: style-specific cycle and phrase variation Choir Gospel: style-specific articulation and phrase gesture Choir Gospel: style-specific harmony and cadence",
      "patterns": [
        "Choir Gospel: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Choir Gospel: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Choir Gospel: style-specific harmony and cadence"
      ]
    },
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
      "id": "quartet",
      "name": "Quartet",
      "description": "Quartet: style-specific cycle and phrase variation Quartet: style-specific articulation and phrase gesture Quartet: style-specific harmony and cadence",
      "patterns": [
        "Quartet: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Quartet: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Quartet: style-specific harmony and cadence"
      ]
    },
    {
      "id": "gospel-soul",
      "name": "Gospel-Soul",
      "description": "Gospel-Soul: style-specific cycle and phrase variation Gospel-Soul: style-specific articulation and phrase gesture Gospel-Soul: style-specific harmony and cadence",
      "patterns": [
        "Gospel-Soul: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Gospel-Soul: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Gospel-Soul: style-specific harmony and cadence"
      ]
    },
    {
      "id": "contemporary",
      "name": "Contemporary",
      "description": "Contemporary: style-specific cycle and phrase variation Contemporary: style-specific articulation and phrase gesture Contemporary: style-specific harmony and cadence",
      "patterns": [
        "Contemporary: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Contemporary: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Contemporary: style-specific harmony and cadence"
      ]
    }
  ]
};
