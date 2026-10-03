import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "ethiopian",
  "name": "Ethiopian",
  "family": "Ethiopia",
  "color": "#1f02f9",
  "description": "Ethiopian is an independent musical world. Ethiopia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Ethio-Jazz",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "krar",
    "masenqo",
    "voice",
    "tenor-sax",
    "piano",
    "bass",
    "kebero",
    "drums"
  ],
  "roles": {
    "lead": [
      "krar",
      "masenqo",
      "voice",
      "tenor-sax"
    ],
    "harmony": [
      "krar",
      "piano"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "kebero",
      "drums"
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
      "id": "ethio-jazz",
      "name": "Ethio-Jazz",
      "description": "Ethio-Jazz: style-specific cycle and phrase variation Ethio-Jazz: style-specific articulation and phrase gesture Ethio-Jazz: style-specific harmony and cadence",
      "patterns": [
        "Ethio-Jazz: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Ethio-Jazz: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Ethio-Jazz: style-specific harmony and cadence"
      ]
    },
    {
      "id": "tizita",
      "name": "Tizita",
      "description": "Tizita: style-specific cycle and phrase variation Tizita: style-specific articulation and phrase gesture Tizita: style-specific harmony and cadence",
      "patterns": [
        "Tizita: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Tizita: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Tizita: style-specific harmony and cadence"
      ]
    },
    {
      "id": "ethiopian-funk",
      "name": "Ethiopian Funk",
      "description": "Ethiopian Funk: style-specific cycle and phrase variation Ethiopian Funk: style-specific articulation and phrase gesture Ethiopian Funk: style-specific harmony and cadence",
      "patterns": [
        "Ethiopian Funk: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Ethiopian Funk: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Ethiopian Funk: style-specific harmony and cadence"
      ]
    },
    {
      "id": "traditional-modal",
      "name": "Traditional Modal",
      "description": "Traditional Modal: style-specific cycle and phrase variation Traditional Modal: style-specific articulation and phrase gesture Traditional Modal: style-specific harmony and cadence",
      "patterns": [
        "Traditional Modal: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Traditional Modal: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Traditional Modal: style-specific harmony and cadence"
      ]
    },
    {
      "id": "modern-ethio-jazz",
      "name": "Modern Ethio-Jazz",
      "description": "Modern Ethio-Jazz: style-specific cycle and phrase variation Modern Ethio-Jazz: style-specific articulation and phrase gesture Modern Ethio-Jazz: style-specific harmony and cadence",
      "patterns": [
        "Modern Ethio-Jazz: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Modern Ethio-Jazz: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Modern Ethio-Jazz: style-specific harmony and cadence"
      ]
    }
  ]
};
