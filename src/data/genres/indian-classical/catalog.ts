import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "indian-classical",
  "name": "Indian Classical",
  "family": "South Asia",
  "color": "#9af20e",
  "description": "Indian Classical is an independent musical world. South Asia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Hindustani Khayal",
  "meter": "free / cycle",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "sitar",
    "sarangi",
    "bansuri",
    "veena",
    "tanpura",
    "tabla",
    "mridangam"
  ],
  "roles": {
    "lead": [
      "sitar",
      "sarangi",
      "bansuri",
      "veena"
    ],
    "harmony": [
      "tanpura"
    ],
    "bass": [
      "tanpura"
    ],
    "percussion": [
      "tabla",
      "mridangam"
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
      "id": "hindustani-khayal",
      "name": "Hindustani Khayal",
      "description": "Hindustani Khayal: style-specific cycle and phrase variation Hindustani Khayal: style-specific articulation and phrase gesture Hindustani Khayal: style-specific harmony and cadence",
      "patterns": [
        "Hindustani Khayal: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Hindustani Khayal: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Hindustani Khayal: style-specific harmony and cadence"
      ]
    },
    {
      "id": "dhrupad",
      "name": "Dhrupad",
      "description": "Dhrupad: style-specific cycle and phrase variation Dhrupad: style-specific articulation and phrase gesture Dhrupad: style-specific harmony and cadence",
      "patterns": [
        "Dhrupad: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Dhrupad: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Dhrupad: style-specific harmony and cadence"
      ]
    },
    {
      "id": "instrumental-gat",
      "name": "Instrumental Gat",
      "description": "Instrumental Gat: style-specific cycle and phrase variation Instrumental Gat: style-specific articulation and phrase gesture Instrumental Gat: style-specific harmony and cadence",
      "patterns": [
        "Instrumental Gat: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Instrumental Gat: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Instrumental Gat: style-specific harmony and cadence"
      ]
    },
    {
      "id": "thumri",
      "name": "Thumri",
      "description": "Thumri: style-specific cycle and phrase variation Thumri: style-specific articulation and phrase gesture Thumri: style-specific harmony and cadence",
      "patterns": [
        "Thumri: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Thumri: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Thumri: style-specific harmony and cadence"
      ]
    },
    {
      "id": "carnatic-kriti",
      "name": "Carnatic Kriti",
      "description": "Carnatic Kriti: style-specific cycle and phrase variation Carnatic Kriti: style-specific articulation and phrase gesture Carnatic Kriti: style-specific harmony and cadence",
      "patterns": [
        "Carnatic Kriti: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Carnatic Kriti: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Carnatic Kriti: style-specific harmony and cadence"
      ]
    },
    {
      "id": "ragam-tanam-pallavi",
      "name": "Ragam-Tanam-Pallavi",
      "description": "Ragam-Tanam-Pallavi: style-specific cycle and phrase variation Ragam-Tanam-Pallavi: style-specific articulation and phrase gesture Ragam-Tanam-Pallavi: style-specific harmony and cadence",
      "patterns": [
        "Ragam-Tanam-Pallavi: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Ragam-Tanam-Pallavi: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Ragam-Tanam-Pallavi: style-specific harmony and cadence"
      ]
    },
    {
      "id": "varnam",
      "name": "Varnam",
      "description": "Varnam: style-specific cycle and phrase variation Varnam: style-specific articulation and phrase gesture Varnam: style-specific harmony and cadence",
      "patterns": [
        "Varnam: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Varnam: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Varnam: style-specific harmony and cadence"
      ]
    },
    {
      "id": "tillana",
      "name": "Tillana",
      "description": "Tillana: style-specific cycle and phrase variation Tillana: style-specific articulation and phrase gesture Tillana: style-specific harmony and cadence",
      "patterns": [
        "Tillana: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Tillana: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Tillana: style-specific harmony and cadence"
      ]
    }
  ]
};
