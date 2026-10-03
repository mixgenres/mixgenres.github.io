import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "folk",
  "name": "Folk",
  "family": "Global folk traditions",
  "color": "#ea678a",
  "description": "Folk is an independent musical world. Global folk traditions idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Contemporary Folk",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "guitar",
    "banjo",
    "violin",
    "tin-whistle",
    "upright-bass",
    "bodhran"
  ],
  "roles": {
    "lead": [
      "voice",
      "violin",
      "tin-whistle"
    ],
    "harmony": [
      "guitar",
      "banjo"
    ],
    "bass": [
      "upright-bass"
    ],
    "percussion": [
      "bodhran"
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
      "id": "contemporary-folk",
      "name": "Contemporary Folk",
      "description": "Contemporary Folk: style-specific cycle and phrase variation Contemporary Folk: style-specific articulation and phrase gesture Contemporary Folk: style-specific harmony and cadence",
      "patterns": [
        "Contemporary Folk: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Contemporary Folk: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Contemporary Folk: style-specific harmony and cadence"
      ]
    },
    {
      "id": "old-time",
      "name": "Old-Time",
      "description": "Old-Time: style-specific cycle and phrase variation Old-Time: style-specific articulation and phrase gesture Old-Time: style-specific harmony and cadence",
      "patterns": [
        "Old-Time: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Old-Time: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Old-Time: style-specific harmony and cadence"
      ]
    },
    {
      "id": "appalachian",
      "name": "Appalachian",
      "description": "Appalachian: style-specific cycle and phrase variation Appalachian: style-specific articulation and phrase gesture Appalachian: style-specific harmony and cadence",
      "patterns": [
        "Appalachian: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Appalachian: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Appalachian: style-specific harmony and cadence"
      ]
    },
    {
      "id": "celtic",
      "name": "Celtic",
      "description": "Celtic: style-specific cycle and phrase variation Celtic: style-specific articulation and phrase gesture Celtic: style-specific harmony and cadence",
      "patterns": [
        "Celtic: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Celtic: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Celtic: style-specific harmony and cadence"
      ]
    },
    {
      "id": "singer-songwriter",
      "name": "Singer-Songwriter",
      "description": "Singer-Songwriter: style-specific cycle and phrase variation Singer-Songwriter: style-specific articulation and phrase gesture Singer-Songwriter: style-specific harmony and cadence",
      "patterns": [
        "Singer-Songwriter: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Singer-Songwriter: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Singer-Songwriter: style-specific harmony and cadence"
      ]
    },
    {
      "id": "folk-revival",
      "name": "Folk Revival",
      "description": "Folk Revival: style-specific cycle and phrase variation Folk Revival: style-specific articulation and phrase gesture Folk Revival: style-specific harmony and cadence",
      "patterns": [
        "Folk Revival: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Folk Revival: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Folk Revival: style-specific harmony and cadence"
      ]
    }
  ]
};
