import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "afrobeat",
  "name": "Afrobeat",
  "family": "Nigeria / Ghana",
  "color": "#b74576",
  "description": "Afrobeat is an independent musical world. Nigeria / Ghana idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic Afrobeat",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "tenor-sax",
    "trumpet",
    "guitar",
    "organ",
    "bass",
    "drums",
    "congas",
    "talking-drum"
  ],
  "roles": {
    "lead": [
      "voice",
      "tenor-sax",
      "trumpet"
    ],
    "harmony": [
      "guitar",
      "organ"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "drums",
      "congas",
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
      "id": "classic-afrobeat",
      "name": "Classic Afrobeat",
      "description": "Classic Afrobeat: style-specific cycle and phrase variation Classic Afrobeat: style-specific articulation and phrase gesture Classic Afrobeat: style-specific harmony and cadence",
      "patterns": [
        "Classic Afrobeat: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Classic Afrobeat: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Classic Afrobeat: style-specific harmony and cadence"
      ]
    },
    {
      "id": "highlife",
      "name": "Highlife",
      "description": "Highlife: style-specific cycle and phrase variation Highlife: style-specific articulation and phrase gesture Highlife: style-specific harmony and cadence",
      "patterns": [
        "Highlife: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Highlife: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Highlife: style-specific harmony and cadence"
      ]
    },
    {
      "id": "palm-wine",
      "name": "Palm-Wine",
      "description": "Palm-Wine: style-specific cycle and phrase variation Palm-Wine: style-specific articulation and phrase gesture Palm-Wine: style-specific harmony and cadence",
      "patterns": [
        "Palm-Wine: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Palm-Wine: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Palm-Wine: style-specific harmony and cadence"
      ]
    },
    {
      "id": "juju",
      "name": "Juju",
      "description": "Juju: style-specific cycle and phrase variation Juju: style-specific articulation and phrase gesture Juju: style-specific harmony and cadence",
      "patterns": [
        "Juju: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Juju: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Juju: style-specific harmony and cadence"
      ]
    },
    {
      "id": "funk-heavy-afrobeat",
      "name": "Funk-Heavy Afrobeat",
      "description": "Funk-Heavy Afrobeat: style-specific cycle and phrase variation Funk-Heavy Afrobeat: style-specific articulation and phrase gesture Funk-Heavy Afrobeat: style-specific harmony and cadence",
      "patterns": [
        "Funk-Heavy Afrobeat: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Funk-Heavy Afrobeat: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Funk-Heavy Afrobeat: style-specific harmony and cadence"
      ]
    },
    {
      "id": "jazz-heavy-afrobeat",
      "name": "Jazz-Heavy Afrobeat",
      "description": "Jazz-Heavy Afrobeat: style-specific cycle and phrase variation Jazz-Heavy Afrobeat: style-specific articulation and phrase gesture Jazz-Heavy Afrobeat: style-specific harmony and cadence",
      "patterns": [
        "Jazz-Heavy Afrobeat: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Jazz-Heavy Afrobeat: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Jazz-Heavy Afrobeat: style-specific harmony and cadence"
      ]
    },
    {
      "id": "modern-revival",
      "name": "Modern Revival",
      "description": "Modern Revival: style-specific cycle and phrase variation Modern Revival: style-specific articulation and phrase gesture Modern Revival: style-specific harmony and cadence",
      "patterns": [
        "Modern Revival: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Modern Revival: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Modern Revival: style-specific harmony and cadence"
      ]
    }
  ]
};
