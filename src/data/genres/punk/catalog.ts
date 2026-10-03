import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "punk",
  "name": "Punk",
  "family": "Global popular music",
  "color": "#f72e91",
  "description": "Punk is an independent musical world. Global popular music idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Punk",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "guitar",
    "bass",
    "drums"
  ],
  "roles": {
    "lead": [
      "voice",
      "guitar"
    ],
    "harmony": [
      "guitar"
    ],
    "bass": [
      "bass"
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
      "id": "punk",
      "name": "Punk",
      "description": "Punk: style-specific cycle and phrase variation Punk: style-specific articulation and phrase gesture Punk: style-specific harmony and cadence",
      "patterns": [
        "Punk: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Punk: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Punk: style-specific harmony and cadence"
      ]
    },
    {
      "id": "hardcore",
      "name": "Hardcore",
      "description": "Hardcore: style-specific cycle and phrase variation Hardcore: style-specific articulation and phrase gesture Hardcore: style-specific harmony and cadence",
      "patterns": [
        "Hardcore: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Hardcore: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Hardcore: style-specific harmony and cadence"
      ]
    },
    {
      "id": "post-hardcore",
      "name": "Post-Hardcore",
      "description": "Post-Hardcore: style-specific cycle and phrase variation Post-Hardcore: style-specific articulation and phrase gesture Post-Hardcore: style-specific harmony and cadence",
      "patterns": [
        "Post-Hardcore: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Post-Hardcore: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Post-Hardcore: style-specific harmony and cadence"
      ]
    },
    {
      "id": "pop-punk",
      "name": "Pop-Punk",
      "description": "Pop-Punk: style-specific cycle and phrase variation Pop-Punk: style-specific articulation and phrase gesture Pop-Punk: style-specific harmony and cadence",
      "patterns": [
        "Pop-Punk: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Pop-Punk: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Pop-Punk: style-specific harmony and cadence"
      ]
    },
    {
      "id": "noise-punk",
      "name": "Noise Punk",
      "description": "Noise Punk: style-specific cycle and phrase variation Noise Punk: style-specific articulation and phrase gesture Noise Punk: style-specific harmony and cadence",
      "patterns": [
        "Noise Punk: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Noise Punk: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Noise Punk: style-specific harmony and cadence"
      ]
    }
  ]
};
