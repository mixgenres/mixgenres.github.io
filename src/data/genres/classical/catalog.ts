import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "classical",
  "name": "Classical",
  "family": "European concert tradition",
  "color": "#700e61",
  "description": "Classical is an independent musical world. European concert tradition idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classical Orchestra",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "violin",
    "flute",
    "voice",
    "piano",
    "string-ensemble",
    "cello",
    "upright-bass",
    "timpani"
  ],
  "roles": {
    "lead": [
      "violin",
      "flute",
      "voice"
    ],
    "harmony": [
      "piano",
      "string-ensemble"
    ],
    "bass": [
      "cello",
      "upright-bass"
    ],
    "percussion": [
      "timpani"
    ]
  },
  "pitchSystem": "12-tet / style-specific tuning",
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
      "id": "baroque",
      "name": "Baroque",
      "description": "Baroque: style-specific cycle and phrase variation Baroque: style-specific articulation and phrase gesture Baroque: style-specific harmony and cadence",
      "patterns": [
        "Baroque: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Baroque: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Baroque: style-specific harmony and cadence"
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
      "id": "impressionist",
      "name": "Impressionist",
      "description": "Impressionist: style-specific cycle and phrase variation Impressionist: style-specific articulation and phrase gesture Impressionist: style-specific harmony and cadence",
      "patterns": [
        "Impressionist: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Impressionist: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Impressionist: style-specific harmony and cadence"
      ]
    },
    {
      "id": "modernist",
      "name": "Modernist",
      "description": "Modernist: style-specific cycle and phrase variation Modernist: style-specific articulation and phrase gesture Modernist: style-specific harmony and cadence",
      "patterns": [
        "Modernist: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Modernist: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Modernist: style-specific harmony and cadence"
      ]
    },
    {
      "id": "minimalist",
      "name": "Minimalist",
      "description": "Minimalist: style-specific cycle and phrase variation Minimalist: style-specific articulation and phrase gesture Minimalist: style-specific harmony and cadence",
      "patterns": [
        "Minimalist: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Minimalist: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Minimalist: style-specific harmony and cadence"
      ]
    },
    {
      "id": "chamber",
      "name": "Chamber",
      "description": "Chamber: style-specific cycle and phrase variation Chamber: style-specific articulation and phrase gesture Chamber: style-specific harmony and cadence",
      "patterns": [
        "Chamber: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Chamber: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Chamber: style-specific harmony and cadence"
      ]
    }
  ]
};
