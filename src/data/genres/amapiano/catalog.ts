import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "amapiano",
  "name": "Amapiano",
  "family": "South Africa",
  "color": "#8ba99a",
  "description": "Amapiano is an independent musical world. South Africa idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "piano",
    "synth",
    "log-drum",
    "shaker",
    "drums"
  ],
  "roles": {
    "lead": [
      "voice",
      "piano"
    ],
    "harmony": [
      "piano",
      "synth"
    ],
    "bass": [
      "log-drum"
    ],
    "percussion": [
      "shaker",
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
      "id": "private-school",
      "name": "Private School",
      "description": "Private School: style-specific cycle and phrase variation Private School: style-specific articulation and phrase gesture Private School: style-specific harmony and cadence",
      "patterns": [
        "Private School: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Private School: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Private School: style-specific harmony and cadence"
      ]
    },
    {
      "id": "vocal",
      "name": "Vocal",
      "description": "Vocal: style-specific cycle and phrase variation Vocal: style-specific articulation and phrase gesture Vocal: style-specific harmony and cadence",
      "patterns": [
        "Vocal: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Vocal: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Vocal: style-specific harmony and cadence"
      ]
    },
    {
      "id": "log-drum-heavy",
      "name": "Log-Drum Heavy",
      "description": "Log-Drum Heavy: style-specific cycle and phrase variation Log-Drum Heavy: style-specific articulation and phrase gesture Log-Drum Heavy: style-specific harmony and cadence",
      "patterns": [
        "Log-Drum Heavy: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Log-Drum Heavy: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Log-Drum Heavy: style-specific harmony and cadence"
      ]
    },
    {
      "id": "bacardi",
      "name": "Bacardi",
      "description": "Bacardi: style-specific cycle and phrase variation Bacardi: style-specific articulation and phrase gesture Bacardi: style-specific harmony and cadence",
      "patterns": [
        "Bacardi: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Bacardi: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Bacardi: style-specific harmony and cadence"
      ]
    },
    {
      "id": "gqom-crossover",
      "name": "Gqom Crossover",
      "description": "Gqom Crossover: style-specific cycle and phrase variation Gqom Crossover: style-specific articulation and phrase gesture Gqom Crossover: style-specific harmony and cadence",
      "patterns": [
        "Gqom Crossover: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Gqom Crossover: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Gqom Crossover: style-specific harmony and cadence"
      ]
    },
    {
      "id": "kwaito-crossover",
      "name": "Kwaito Crossover",
      "description": "Kwaito Crossover: style-specific cycle and phrase variation Kwaito Crossover: style-specific articulation and phrase gesture Kwaito Crossover: style-specific harmony and cadence",
      "patterns": [
        "Kwaito Crossover: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Kwaito Crossover: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Kwaito Crossover: style-specific harmony and cadence"
      ]
    }
  ]
};
