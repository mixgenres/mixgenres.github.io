import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "mbalax",
  "name": "Mbalax",
  "family": "Senegal",
  "color": "#677807",
  "description": "Mbalax is an independent musical world. Senegal idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic",
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
    "sabar",
    "talking-drum"
  ],
  "roles": {
    "lead": [
      "voice",
      "sabar"
    ],
    "harmony": [
      "guitar",
      "piano"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "sabar",
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
      "id": "sabar-heavy",
      "name": "Sabar-Heavy",
      "description": "Sabar-Heavy: style-specific cycle and phrase variation Sabar-Heavy: style-specific articulation and phrase gesture Sabar-Heavy: style-specific harmony and cadence",
      "patterns": [
        "Sabar-Heavy: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Sabar-Heavy: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Sabar-Heavy: style-specific harmony and cadence"
      ]
    },
    {
      "id": "pop-mbalax",
      "name": "Pop Mbalax",
      "description": "Pop Mbalax: style-specific cycle and phrase variation Pop Mbalax: style-specific articulation and phrase gesture Pop Mbalax: style-specific harmony and cadence",
      "patterns": [
        "Pop Mbalax: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Pop Mbalax: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Pop Mbalax: style-specific harmony and cadence"
      ]
    },
    {
      "id": "electronic-fusion",
      "name": "Electronic / Fusion",
      "description": "Electronic / Fusion: style-specific cycle and phrase variation Electronic / Fusion: style-specific articulation and phrase gesture Electronic / Fusion: style-specific harmony and cadence",
      "patterns": [
        "Electronic / Fusion: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Electronic / Fusion: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Electronic / Fusion: style-specific harmony and cadence"
      ]
    }
  ]
};
