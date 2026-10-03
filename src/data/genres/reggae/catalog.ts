import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "reggae",
  "name": "Reggae",
  "family": "Jamaica / Caribbean",
  "color": "#c2b17b",
  "description": "Reggae is an independent musical world. Jamaica / Caribbean idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Roots",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "organ",
    "guitar",
    "bass",
    "drums",
    "hand-percussion",
    "melodica"
  ],
  "roles": {
    "lead": [
      "voice",
      "melodica"
    ],
    "harmony": [
      "organ",
      "guitar"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "drums",
      "hand-percussion"
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
      "id": "roots",
      "name": "Roots",
      "description": "Roots: style-specific cycle and phrase variation Roots: style-specific articulation and phrase gesture Roots: style-specific harmony and cadence",
      "patterns": [
        "Roots: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Roots: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Roots: style-specific harmony and cadence"
      ]
    },
    {
      "id": "one-drop",
      "name": "One-Drop",
      "description": "One-Drop: style-specific cycle and phrase variation One-Drop: style-specific articulation and phrase gesture One-Drop: style-specific harmony and cadence",
      "patterns": [
        "One-Drop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "One-Drop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "One-Drop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "rockers",
      "name": "Rockers",
      "description": "Rockers: style-specific cycle and phrase variation Rockers: style-specific articulation and phrase gesture Rockers: style-specific harmony and cadence",
      "patterns": [
        "Rockers: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Rockers: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Rockers: style-specific harmony and cadence"
      ]
    },
    {
      "id": "dub",
      "name": "Dub",
      "description": "Dub: style-specific cycle and phrase variation Dub: style-specific articulation and phrase gesture Dub: style-specific harmony and cadence",
      "patterns": [
        "Dub: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Dub: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Dub: style-specific harmony and cadence"
      ]
    },
    {
      "id": "rocksteady",
      "name": "Rocksteady",
      "description": "Rocksteady: style-specific cycle and phrase variation Rocksteady: style-specific articulation and phrase gesture Rocksteady: style-specific harmony and cadence",
      "patterns": [
        "Rocksteady: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Rocksteady: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Rocksteady: style-specific harmony and cadence"
      ]
    },
    {
      "id": "ska",
      "name": "Ska",
      "description": "Ska: style-specific cycle and phrase variation Ska: style-specific articulation and phrase gesture Ska: style-specific harmony and cadence",
      "patterns": [
        "Ska: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Ska: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Ska: style-specific harmony and cadence"
      ]
    },
    {
      "id": "dancehall",
      "name": "Dancehall",
      "description": "Dancehall: style-specific cycle and phrase variation Dancehall: style-specific articulation and phrase gesture Dancehall: style-specific harmony and cadence",
      "patterns": [
        "Dancehall: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Dancehall: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Dancehall: style-specific harmony and cadence"
      ]
    }
  ]
};
