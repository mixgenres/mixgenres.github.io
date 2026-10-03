import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "bollywood",
  "name": "Bollywood",
  "family": "India",
  "color": "#09b542",
  "description": "Bollywood is an independent musical world. India idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Modern",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "synth",
    "piano",
    "string-ensemble",
    "bass",
    "drums",
    "tabla"
  ],
  "roles": {
    "lead": [
      "voice"
    ],
    "harmony": [
      "synth",
      "piano",
      "string-ensemble"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "drums",
      "tabla"
    ]
  },
  "pitchSystem": "raga / shruti inflection",
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
      "id": "modern",
      "name": "Modern",
      "description": "Modern: style-specific cycle and phrase variation Modern: style-specific articulation and phrase gesture Modern: style-specific harmony and cadence",
      "patterns": [
        "Modern: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Modern: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Modern: style-specific harmony and cadence"
      ]
    },
    {
      "id": "golden-age",
      "name": "Golden Age",
      "description": "Golden Age: style-specific cycle and phrase variation Golden Age: style-specific articulation and phrase gesture Golden Age: style-specific harmony and cadence",
      "patterns": [
        "Golden Age: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Golden Age: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Golden Age: style-specific harmony and cadence"
      ]
    },
    {
      "id": "disco-bollywood",
      "name": "Disco Bollywood",
      "description": "Disco Bollywood: style-specific cycle and phrase variation Disco Bollywood: style-specific articulation and phrase gesture Disco Bollywood: style-specific harmony and cadence",
      "patterns": [
        "Disco Bollywood: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Disco Bollywood: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Disco Bollywood: style-specific harmony and cadence"
      ]
    },
    {
      "id": "romantic",
      "name": "Romantic",
      "description": "Romantic: style-specific cycle and phrase variation Romantic: style-specific articulation and phrase gesture Romantic: style-specific harmony and cadence",
      "patterns": [
        "Romantic: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Romantic: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Romantic: style-specific harmony and cadence"
      ]
    },
    {
      "id": "folk-cinematic",
      "name": "Folk-Cinematic",
      "description": "Folk-Cinematic: style-specific cycle and phrase variation Folk-Cinematic: style-specific articulation and phrase gesture Folk-Cinematic: style-specific harmony and cadence",
      "patterns": [
        "Folk-Cinematic: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Folk-Cinematic: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Folk-Cinematic: style-specific harmony and cadence"
      ]
    },
    {
      "id": "electronic-club",
      "name": "Electronic / Club",
      "description": "Electronic / Club: style-specific cycle and phrase variation Electronic / Club: style-specific articulation and phrase gesture Electronic / Club: style-specific harmony and cadence",
      "patterns": [
        "Electronic / Club: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Electronic / Club: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Electronic / Club: style-specific harmony and cadence"
      ]
    }
  ]
};
