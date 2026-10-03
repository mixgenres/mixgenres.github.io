import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "soukous",
  "name": "Soukous",
  "family": "Democratic Republic of the Congo",
  "color": "#5a2768",
  "description": "Soukous is an independent musical world. Democratic Republic of the Congo idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Soukous",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "guitar",
    "voice",
    "bass",
    "drums",
    "congas"
  ],
  "roles": {
    "lead": [
      "guitar",
      "voice"
    ],
    "harmony": [
      "guitar"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "drums",
      "congas"
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
      "id": "soukous",
      "name": "Soukous",
      "description": "Soukous: style-specific cycle and phrase variation Soukous: style-specific articulation and phrase gesture Soukous: style-specific harmony and cadence",
      "patterns": [
        "Soukous: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Soukous: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Soukous: style-specific harmony and cadence"
      ]
    },
    {
      "id": "congolese-rumba",
      "name": "Congolese Rumba",
      "description": "Congolese Rumba: style-specific cycle and phrase variation Congolese Rumba: style-specific articulation and phrase gesture Congolese Rumba: style-specific harmony and cadence",
      "patterns": [
        "Congolese Rumba: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Congolese Rumba: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Congolese Rumba: style-specific harmony and cadence"
      ]
    },
    {
      "id": "sebene",
      "name": "Sebene",
      "description": "Sebene: style-specific cycle and phrase variation Sebene: style-specific articulation and phrase gesture Sebene: style-specific harmony and cadence",
      "patterns": [
        "Sebene: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Sebene: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Sebene: style-specific harmony and cadence"
      ]
    },
    {
      "id": "kwassa-kwassa",
      "name": "Kwassa-Kwassa",
      "description": "Kwassa-Kwassa: style-specific cycle and phrase variation Kwassa-Kwassa: style-specific articulation and phrase gesture Kwassa-Kwassa: style-specific harmony and cadence",
      "patterns": [
        "Kwassa-Kwassa: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Kwassa-Kwassa: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Kwassa-Kwassa: style-specific harmony and cadence"
      ]
    },
    {
      "id": "ndombolo",
      "name": "Ndombolo",
      "description": "Ndombolo: style-specific cycle and phrase variation Ndombolo: style-specific articulation and phrase gesture Ndombolo: style-specific harmony and cadence",
      "patterns": [
        "Ndombolo: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Ndombolo: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Ndombolo: style-specific harmony and cadence"
      ]
    }
  ]
};
