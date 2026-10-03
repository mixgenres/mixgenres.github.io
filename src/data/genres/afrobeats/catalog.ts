import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "afrobeats",
  "name": "Afrobeats",
  "family": "West Africa / Global pop",
  "color": "#9194aa",
  "description": "Afrobeats is an independent musical world. West Africa / Global pop idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Contemporary Afrobeats",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "guitar",
    "piano",
    "bass",
    "drums",
    "shaker",
    "talking-drum"
  ],
  "roles": {
    "lead": [
      "voice",
      "guitar"
    ],
    "harmony": [
      "guitar",
      "piano"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "drums",
      "shaker",
      "talking-drum"
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
      "id": "contemporary-afrobeats",
      "name": "Contemporary Afrobeats",
      "description": "Contemporary Afrobeats: style-specific cycle and phrase variation Contemporary Afrobeats: style-specific articulation and phrase gesture Contemporary Afrobeats: style-specific harmony and cadence",
      "patterns": [
        "Contemporary Afrobeats: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Contemporary Afrobeats: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Contemporary Afrobeats: style-specific harmony and cadence"
      ]
    },
    {
      "id": "afropop",
      "name": "Afropop",
      "description": "Afropop: style-specific cycle and phrase variation Afropop: style-specific articulation and phrase gesture Afropop: style-specific harmony and cadence",
      "patterns": [
        "Afropop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Afropop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Afropop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "afrofusion",
      "name": "Afrofusion",
      "description": "Afrofusion: style-specific cycle and phrase variation Afrofusion: style-specific articulation and phrase gesture Afrofusion: style-specific harmony and cadence",
      "patterns": [
        "Afrofusion: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Afrofusion: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Afrofusion: style-specific harmony and cadence"
      ]
    },
    {
      "id": "alte",
      "name": "Alté",
      "description": "Alté: style-specific cycle and phrase variation Alté: style-specific articulation and phrase gesture Alté: style-specific harmony and cadence",
      "patterns": [
        "Alté: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Alté: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Alté: style-specific harmony and cadence"
      ]
    },
    {
      "id": "randb-afrobeats",
      "name": "R&B Afrobeats",
      "description": "R&B Afrobeats: style-specific cycle and phrase variation R&B Afrobeats: style-specific articulation and phrase gesture R&B Afrobeats: style-specific harmony and cadence",
      "patterns": [
        "R&B Afrobeats: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "R&B Afrobeats: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "R&B Afrobeats: style-specific harmony and cadence"
      ]
    }
  ]
};
