import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "dangdut",
  "name": "Dangdut",
  "family": "Indonesia",
  "color": "#e2044b",
  "description": "Dangdut is an independent musical world. Indonesia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "synth",
    "guitar",
    "bass",
    "kendang",
    "drums"
  ],
  "roles": {
    "lead": [
      "voice",
      "synth"
    ],
    "harmony": [
      "guitar",
      "synth"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "kendang",
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
      "id": "classic",
      "name": "Classic",
      "description": "Classic: style-specific cycle and phrase variation Classic: style-specific articulation and phrase gesture Classic: style-specific harmony and cadence",
      "patterns": [
        "Classic: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Classic: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Classic: style-specific harmony and cadence"
      ]
    },
    {
      "id": "koplo",
      "name": "Koplo",
      "description": "Koplo: style-specific cycle and phrase variation Koplo: style-specific articulation and phrase gesture Koplo: style-specific harmony and cadence",
      "patterns": [
        "Koplo: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Koplo: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Koplo: style-specific harmony and cadence"
      ]
    },
    {
      "id": "rock-dangdut",
      "name": "Rock Dangdut",
      "description": "Rock Dangdut: style-specific cycle and phrase variation Rock Dangdut: style-specific articulation and phrase gesture Rock Dangdut: style-specific harmony and cadence",
      "patterns": [
        "Rock Dangdut: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Rock Dangdut: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Rock Dangdut: style-specific harmony and cadence"
      ]
    },
    {
      "id": "electronic-dangdut",
      "name": "Electronic Dangdut",
      "description": "Electronic Dangdut: style-specific cycle and phrase variation Electronic Dangdut: style-specific articulation and phrase gesture Electronic Dangdut: style-specific harmony and cadence",
      "patterns": [
        "Electronic Dangdut: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Electronic Dangdut: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Electronic Dangdut: style-specific harmony and cadence"
      ]
    }
  ]
};
