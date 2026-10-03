import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "mexican",
  "name": "Mexican",
  "family": "Mexico",
  "color": "#0195df",
  "description": "Mexican is an independent musical world. Mexico idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Mariachi",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "trumpet",
    "violin",
    "accordion",
    "guitar",
    "vihuela",
    "bajo-sexto",
    "guitarron",
    "tuba"
  ],
  "roles": {
    "lead": [
      "voice",
      "trumpet",
      "violin",
      "accordion"
    ],
    "harmony": [
      "guitar",
      "vihuela",
      "bajo-sexto"
    ],
    "bass": [
      "guitarron",
      "tuba"
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
      "id": "mariachi",
      "name": "Mariachi",
      "description": "Mariachi: style-specific cycle and phrase variation Mariachi: style-specific articulation and phrase gesture Mariachi: style-specific harmony and cadence",
      "patterns": [
        "Mariachi: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Mariachi: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Mariachi: style-specific harmony and cadence"
      ]
    },
    {
      "id": "ranchera",
      "name": "Ranchera",
      "description": "Ranchera: style-specific cycle and phrase variation Ranchera: style-specific articulation and phrase gesture Ranchera: style-specific harmony and cadence",
      "patterns": [
        "Ranchera: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Ranchera: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Ranchera: style-specific harmony and cadence"
      ]
    },
    {
      "id": "norteno",
      "name": "Norteño",
      "description": "Norteño: style-specific cycle and phrase variation Norteño: style-specific articulation and phrase gesture Norteño: style-specific harmony and cadence",
      "patterns": [
        "Norteño: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Norteño: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Norteño: style-specific harmony and cadence"
      ]
    },
    {
      "id": "banda",
      "name": "Banda",
      "description": "Banda: style-specific cycle and phrase variation Banda: style-specific articulation and phrase gesture Banda: style-specific harmony and cadence",
      "patterns": [
        "Banda: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Banda: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Banda: style-specific harmony and cadence"
      ]
    },
    {
      "id": "son-jarocho",
      "name": "Son Jarocho",
      "description": "Son Jarocho: style-specific cycle and phrase variation Son Jarocho: style-specific articulation and phrase gesture Son Jarocho: style-specific harmony and cadence",
      "patterns": [
        "Son Jarocho: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Son Jarocho: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Son Jarocho: style-specific harmony and cadence"
      ]
    },
    {
      "id": "son-huasteco",
      "name": "Son Huasteco",
      "description": "Son Huasteco: style-specific cycle and phrase variation Son Huasteco: style-specific articulation and phrase gesture Son Huasteco: style-specific harmony and cadence",
      "patterns": [
        "Son Huasteco: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Son Huasteco: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Son Huasteco: style-specific harmony and cadence"
      ]
    },
    {
      "id": "corrido",
      "name": "Corrido",
      "description": "Corrido: style-specific cycle and phrase variation Corrido: style-specific articulation and phrase gesture Corrido: style-specific harmony and cadence",
      "patterns": [
        "Corrido: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Corrido: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Corrido: style-specific harmony and cadence"
      ]
    },
    {
      "id": "tierra-caliente",
      "name": "Tierra Caliente",
      "description": "Tierra Caliente: style-specific cycle and phrase variation Tierra Caliente: style-specific articulation and phrase gesture Tierra Caliente: style-specific harmony and cadence",
      "patterns": [
        "Tierra Caliente: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Tierra Caliente: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Tierra Caliente: style-specific harmony and cadence"
      ]
    },
    {
      "id": "conjunto",
      "name": "Conjunto",
      "description": "Conjunto: style-specific cycle and phrase variation Conjunto: style-specific articulation and phrase gesture Conjunto: style-specific harmony and cadence",
      "patterns": [
        "Conjunto: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Conjunto: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Conjunto: style-specific harmony and cadence"
      ]
    },
    {
      "id": "bolero-ranchero",
      "name": "Bolero Ranchero",
      "description": "Bolero Ranchero: style-specific cycle and phrase variation Bolero Ranchero: style-specific articulation and phrase gesture Bolero Ranchero: style-specific harmony and cadence",
      "patterns": [
        "Bolero Ranchero: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Bolero Ranchero: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Bolero Ranchero: style-specific harmony and cadence"
      ]
    }
  ]
};
