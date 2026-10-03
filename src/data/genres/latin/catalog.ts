import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "latin",
  "name": "Latin",
  "family": "Latin America / Caribbean",
  "color": "#f4b418",
  "description": "Latin is an independent musical world. Latin America / Caribbean idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Cumbia",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "accordion",
    "guitar",
    "piano",
    "bass",
    "congas",
    "guiro",
    "cowbell"
  ],
  "roles": {
    "lead": [
      "voice",
      "accordion",
      "trumpet"
    ],
    "harmony": [
      "guitar",
      "piano"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "congas",
      "guiro",
      "cowbell"
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
      "id": "cumbia",
      "name": "Cumbia",
      "description": "Cumbia: style-specific cycle and phrase variation Cumbia: style-specific articulation and phrase gesture Cumbia: style-specific harmony and cadence",
      "patterns": [
        "Cumbia: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Cumbia: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Cumbia: style-specific harmony and cadence"
      ]
    },
    {
      "id": "merengue",
      "name": "Merengue",
      "description": "Merengue: style-specific cycle and phrase variation Merengue: style-specific articulation and phrase gesture Merengue: style-specific harmony and cadence",
      "patterns": [
        "Merengue: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Merengue: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Merengue: style-specific harmony and cadence"
      ]
    },
    {
      "id": "vallenato",
      "name": "Vallenato",
      "description": "Vallenato: style-specific cycle and phrase variation Vallenato: style-specific articulation and phrase gesture Vallenato: style-specific harmony and cadence",
      "patterns": [
        "Vallenato: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Vallenato: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Vallenato: style-specific harmony and cadence"
      ]
    },
    {
      "id": "bolero",
      "name": "Bolero",
      "description": "Bolero: style-specific cycle and phrase variation Bolero: style-specific articulation and phrase gesture Bolero: style-specific harmony and cadence",
      "patterns": [
        "Bolero: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Bolero: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Bolero: style-specific harmony and cadence"
      ]
    },
    {
      "id": "chicha",
      "name": "Chicha",
      "description": "Chicha: style-specific cycle and phrase variation Chicha: style-specific articulation and phrase gesture Chicha: style-specific harmony and cadence",
      "patterns": [
        "Chicha: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Chicha: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Chicha: style-specific harmony and cadence"
      ]
    },
    {
      "id": "sonidera",
      "name": "Sonidera",
      "description": "Sonidera: style-specific cycle and phrase variation Sonidera: style-specific articulation and phrase gesture Sonidera: style-specific harmony and cadence",
      "patterns": [
        "Sonidera: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Sonidera: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Sonidera: style-specific harmony and cadence"
      ]
    },
    {
      "id": "tropical",
      "name": "Tropical",
      "description": "Tropical: style-specific cycle and phrase variation Tropical: style-specific articulation and phrase gesture Tropical: style-specific harmony and cadence",
      "patterns": [
        "Tropical: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Tropical: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Tropical: style-specific harmony and cadence"
      ]
    },
    {
      "id": "latin-pop",
      "name": "Latin Pop",
      "description": "Latin Pop: style-specific cycle and phrase variation Latin Pop: style-specific articulation and phrase gesture Latin Pop: style-specific harmony and cadence",
      "patterns": [
        "Latin Pop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Latin Pop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Latin Pop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "latin-funk",
      "name": "Latin Funk",
      "description": "Latin Funk: style-specific cycle and phrase variation Latin Funk: style-specific articulation and phrase gesture Latin Funk: style-specific harmony and cadence",
      "patterns": [
        "Latin Funk: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Latin Funk: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Latin Funk: style-specific harmony and cadence"
      ]
    },
    {
      "id": "cumbia-villera",
      "name": "Cumbia Villera",
      "description": "Cumbia Villera: style-specific cycle and phrase variation Cumbia Villera: style-specific articulation and phrase gesture Cumbia Villera: style-specific harmony and cadence",
      "patterns": [
        "Cumbia Villera: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Cumbia Villera: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Cumbia Villera: style-specific harmony and cadence"
      ]
    },
    {
      "id": "electrocumbia",
      "name": "Electrocumbia",
      "description": "Electrocumbia: style-specific cycle and phrase variation Electrocumbia: style-specific articulation and phrase gesture Electrocumbia: style-specific harmony and cadence",
      "patterns": [
        "Electrocumbia: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Electrocumbia: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Electrocumbia: style-specific harmony and cadence"
      ]
    },
    {
      "id": "latin-fusion",
      "name": "Latin Fusion",
      "description": "Latin Fusion: style-specific cycle and phrase variation Latin Fusion: style-specific articulation and phrase gesture Latin Fusion: style-specific harmony and cadence",
      "patterns": [
        "Latin Fusion: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Latin Fusion: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Latin Fusion: style-specific harmony and cadence"
      ]
    }
  ]
};
