import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "korean",
  "name": "Korean",
  "family": "Korea",
  "color": "#9d42bc",
  "description": "Korean is an independent musical world. Korea idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Jeongak",
  "meter": "free / cycle",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "haegeum",
    "gayageum",
    "ajaeng",
    "voice",
    "janggu",
    "buk"
  ],
  "roles": {
    "lead": [
      "haegeum",
      "gayageum",
      "voice"
    ],
    "harmony": [
      "gayageum"
    ],
    "bass": [
      "ajaeng"
    ],
    "percussion": [
      "janggu",
      "buk"
    ]
  },
  "pitchSystem": "traditional pentatonic/modal tuning",
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
      "id": "jeongak",
      "name": "Jeongak",
      "description": "Jeongak: style-specific cycle and phrase variation Jeongak: style-specific articulation and phrase gesture Jeongak: style-specific harmony and cadence",
      "patterns": [
        "Jeongak: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Jeongak: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Jeongak: style-specific harmony and cadence"
      ]
    },
    {
      "id": "pansori",
      "name": "Pansori",
      "description": "Pansori: style-specific cycle and phrase variation Pansori: style-specific articulation and phrase gesture Pansori: style-specific harmony and cadence",
      "patterns": [
        "Pansori: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Pansori: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Pansori: style-specific harmony and cadence"
      ]
    },
    {
      "id": "sanjo",
      "name": "Sanjo",
      "description": "Sanjo: style-specific cycle and phrase variation Sanjo: style-specific articulation and phrase gesture Sanjo: style-specific harmony and cadence",
      "patterns": [
        "Sanjo: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Sanjo: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Sanjo: style-specific harmony and cadence"
      ]
    },
    {
      "id": "samulnori",
      "name": "Samulnori",
      "description": "Samulnori: style-specific cycle and phrase variation Samulnori: style-specific articulation and phrase gesture Samulnori: style-specific harmony and cadence",
      "patterns": [
        "Samulnori: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Samulnori: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Samulnori: style-specific harmony and cadence"
      ]
    },
    {
      "id": "minyo",
      "name": "Minyo",
      "description": "Minyo: style-specific cycle and phrase variation Minyo: style-specific articulation and phrase gesture Minyo: style-specific harmony and cadence",
      "patterns": [
        "Minyo: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Minyo: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Minyo: style-specific harmony and cadence"
      ]
    }
  ]
};
