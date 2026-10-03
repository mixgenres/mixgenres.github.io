import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "country",
  "name": "Country",
  "family": "United States / Appalachia",
  "color": "#e909c2",
  "description": "Country is an independent musical world. United States / Appalachia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Honky-Tonk",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "guitar",
    "banjo",
    "mandolin",
    "violin",
    "pedal-steel",
    "upright-bass",
    "drums"
  ],
  "roles": {
    "lead": [
      "voice",
      "violin",
      "pedal-steel"
    ],
    "harmony": [
      "guitar",
      "banjo",
      "mandolin"
    ],
    "bass": [
      "upright-bass"
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
      "id": "honky-tonk",
      "name": "Honky-Tonk",
      "description": "Honky-Tonk: style-specific cycle and phrase variation Honky-Tonk: style-specific articulation and phrase gesture Honky-Tonk: style-specific harmony and cadence",
      "patterns": [
        "Honky-Tonk: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Honky-Tonk: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Honky-Tonk: style-specific harmony and cadence"
      ]
    },
    {
      "id": "bluegrass",
      "name": "Bluegrass",
      "description": "Bluegrass: style-specific cycle and phrase variation Bluegrass: style-specific articulation and phrase gesture Bluegrass: style-specific harmony and cadence",
      "patterns": [
        "Bluegrass: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Bluegrass: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Bluegrass: style-specific harmony and cadence"
      ]
    },
    {
      "id": "bakersfield",
      "name": "Bakersfield",
      "description": "Bakersfield: style-specific cycle and phrase variation Bakersfield: style-specific articulation and phrase gesture Bakersfield: style-specific harmony and cadence",
      "patterns": [
        "Bakersfield: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Bakersfield: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Bakersfield: style-specific harmony and cadence"
      ]
    },
    {
      "id": "outlaw",
      "name": "Outlaw",
      "description": "Outlaw: style-specific cycle and phrase variation Outlaw: style-specific articulation and phrase gesture Outlaw: style-specific harmony and cadence",
      "patterns": [
        "Outlaw: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Outlaw: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Outlaw: style-specific harmony and cadence"
      ]
    },
    {
      "id": "western-swing",
      "name": "Western Swing",
      "description": "Western Swing: style-specific cycle and phrase variation Western Swing: style-specific articulation and phrase gesture Western Swing: style-specific harmony and cadence",
      "patterns": [
        "Western Swing: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Western Swing: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Western Swing: style-specific harmony and cadence"
      ]
    },
    {
      "id": "americana",
      "name": "Americana",
      "description": "Americana: style-specific cycle and phrase variation Americana: style-specific articulation and phrase gesture Americana: style-specific harmony and cadence",
      "patterns": [
        "Americana: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Americana: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Americana: style-specific harmony and cadence"
      ]
    },
    {
      "id": "country-pop",
      "name": "Country Pop",
      "description": "Country Pop: style-specific cycle and phrase variation Country Pop: style-specific articulation and phrase gesture Country Pop: style-specific harmony and cadence",
      "patterns": [
        "Country Pop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Country Pop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Country Pop: style-specific harmony and cadence"
      ]
    }
  ]
};
