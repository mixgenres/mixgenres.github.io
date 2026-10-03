import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "metal",
  "name": "Metal",
  "family": "Global popular music",
  "color": "#86094b",
  "description": "Metal is an independent musical world. Global popular music idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Heavy Metal",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "guitar",
    "bass",
    "drums",
    "synth"
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
    "across Metal:"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "heavy-metal",
      "name": "Heavy Metal",
      "description": "Heavy Metal: style-specific cycle and phrase variation Heavy Metal: across Metal: Heavy Metal: style-specific harmony and cadence",
      "patterns": [
        "Heavy Metal: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Heavy Metal: across Metal:"
      ],
      "harmony": [
        "Heavy Metal: style-specific harmony and cadence"
      ]
    },
    {
      "id": "thrash",
      "name": "Thrash",
      "description": "Thrash: style-specific cycle and phrase variation Thrash: across Metal: Thrash: style-specific harmony and cadence",
      "patterns": [
        "Thrash: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Thrash: across Metal:"
      ],
      "harmony": [
        "Thrash: style-specific harmony and cadence"
      ]
    },
    {
      "id": "doom",
      "name": "Doom",
      "description": "Doom: style-specific cycle and phrase variation Doom: across Metal: Doom: style-specific harmony and cadence",
      "patterns": [
        "Doom: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Doom: across Metal:"
      ],
      "harmony": [
        "Doom: style-specific harmony and cadence"
      ]
    },
    {
      "id": "death",
      "name": "Death",
      "description": "Death: style-specific cycle and phrase variation Death: across Metal: Death: style-specific harmony and cadence",
      "patterns": [
        "Death: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Death: across Metal:"
      ],
      "harmony": [
        "Death: style-specific harmony and cadence"
      ]
    },
    {
      "id": "black",
      "name": "Black",
      "description": "Black: style-specific cycle and phrase variation Black: across Metal: Black: style-specific harmony and cadence",
      "patterns": [
        "Black: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Black: across Metal:"
      ],
      "harmony": [
        "Black: style-specific harmony and cadence"
      ]
    },
    {
      "id": "progressive-metal",
      "name": "Progressive Metal",
      "description": "Progressive Metal: style-specific cycle and phrase variation Progressive Metal: across Metal: Progressive Metal: style-specific harmony and cadence",
      "patterns": [
        "Progressive Metal: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Progressive Metal: across Metal:"
      ],
      "harmony": [
        "Progressive Metal: style-specific harmony and cadence"
      ]
    },
    {
      "id": "industrial-metal",
      "name": "Industrial Metal",
      "description": "Industrial Metal: style-specific cycle and phrase variation Industrial Metal: across Metal: Industrial Metal: style-specific harmony and cadence",
      "patterns": [
        "Industrial Metal: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Industrial Metal: across Metal:"
      ],
      "harmony": [
        "Industrial Metal: style-specific harmony and cadence"
      ]
    }
  ]
};
