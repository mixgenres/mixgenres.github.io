import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "qawwali",
  "name": "Qawwali",
  "family": "South Asia",
  "color": "#ea2a8e",
  "description": "Qawwali is an independent musical world. South Asia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Traditional",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "harmonium",
    "dholak",
    "tabla",
    "hand-percussion"
  ],
  "roles": {
    "lead": [
      "voice"
    ],
    "harmony": [
      "harmonium"
    ],
    "bass": [
      "dholak"
    ],
    "percussion": [
      "tabla",
      "hand-percussion"
    ]
  },
  "pitchSystem": "raga / shruti inflection",
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
      "id": "traditional",
      "name": "Traditional",
      "description": "Traditional: style-specific cycle and phrase variation Traditional: style-specific articulation and phrase gesture Traditional: style-specific harmony and cadence",
      "patterns": [
        "Traditional: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Traditional: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Traditional: style-specific harmony and cadence"
      ]
    },
    {
      "id": "hamd-naat",
      "name": "Hamd / Naat",
      "description": "Hamd / Naat: style-specific cycle and phrase variation Hamd / Naat: style-specific articulation and phrase gesture Hamd / Naat: style-specific harmony and cadence",
      "patterns": [
        "Hamd / Naat: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Hamd / Naat: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Hamd / Naat: style-specific harmony and cadence"
      ]
    },
    {
      "id": "ghazal-qawwali",
      "name": "Ghazal-Qawwali",
      "description": "Ghazal-Qawwali: style-specific cycle and phrase variation Ghazal-Qawwali: style-specific articulation and phrase gesture Ghazal-Qawwali: style-specific harmony and cadence",
      "patterns": [
        "Ghazal-Qawwali: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Ghazal-Qawwali: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Ghazal-Qawwali: style-specific harmony and cadence"
      ]
    },
    {
      "id": "contemporary-fusion",
      "name": "Contemporary Fusion",
      "description": "Contemporary Fusion: style-specific cycle and phrase variation Contemporary Fusion: style-specific articulation and phrase gesture Contemporary Fusion: style-specific harmony and cadence",
      "patterns": [
        "Contemporary Fusion: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Contemporary Fusion: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Contemporary Fusion: style-specific harmony and cadence"
      ]
    }
  ]
};
