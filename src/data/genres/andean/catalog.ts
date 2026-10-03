import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "andean",
  "name": "Andean",
  "family": "Andes",
  "color": "#22f325",
  "description": "Andean is an independent musical world. Andes idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Huayno",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "quena",
    "siku",
    "charango",
    "guitar",
    "bombo"
  ],
  "roles": {
    "lead": [
      "quena",
      "siku",
      "voice"
    ],
    "harmony": [
      "charango",
      "guitar"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "bombo"
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
      "id": "huayno",
      "name": "Huayno",
      "description": "Huayno: style-specific cycle and phrase variation Huayno: style-specific articulation and phrase gesture Huayno: style-specific harmony and cadence",
      "patterns": [
        "Huayno: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Huayno: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Huayno: style-specific harmony and cadence"
      ]
    },
    {
      "id": "sanjuanito",
      "name": "Sanjuanito",
      "description": "Sanjuanito: style-specific cycle and phrase variation Sanjuanito: style-specific articulation and phrase gesture Sanjuanito: style-specific harmony and cadence",
      "patterns": [
        "Sanjuanito: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Sanjuanito: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Sanjuanito: style-specific harmony and cadence"
      ]
    },
    {
      "id": "saya",
      "name": "Saya",
      "description": "Saya: style-specific cycle and phrase variation Saya: style-specific articulation and phrase gesture Saya: style-specific harmony and cadence",
      "patterns": [
        "Saya: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Saya: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Saya: style-specific harmony and cadence"
      ]
    },
    {
      "id": "tinku",
      "name": "Tinku",
      "description": "Tinku: style-specific cycle and phrase variation Tinku: style-specific articulation and phrase gesture Tinku: style-specific harmony and cadence",
      "patterns": [
        "Tinku: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Tinku: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Tinku: style-specific harmony and cadence"
      ]
    },
    {
      "id": "carnavalito",
      "name": "Carnavalito",
      "description": "Carnavalito: style-specific cycle and phrase variation Carnavalito: style-specific articulation and phrase gesture Carnavalito: style-specific harmony and cadence",
      "patterns": [
        "Carnavalito: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Carnavalito: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Carnavalito: style-specific harmony and cadence"
      ]
    },
    {
      "id": "nueva-cancion",
      "name": "Nueva Canción",
      "description": "Nueva Canción: style-specific cycle and phrase variation Nueva Canción: style-specific articulation and phrase gesture Nueva Canción: style-specific harmony and cadence",
      "patterns": [
        "Nueva Canción: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Nueva Canción: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Nueva Canción: style-specific harmony and cadence"
      ]
    },
    {
      "id": "andean-fusion",
      "name": "Andean Fusion",
      "description": "Andean Fusion: style-specific cycle and phrase variation Andean Fusion: style-specific articulation and phrase gesture Andean Fusion: style-specific harmony and cadence",
      "patterns": [
        "Andean Fusion: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Andean Fusion: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Andean Fusion: style-specific harmony and cadence"
      ]
    }
  ]
};
