import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "house",
  "name": "House",
  "family": "Chicago / Global electronic",
  "color": "#2ca63c",
  "description": "House is an independent musical world. Chicago / Global electronic idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Deep House",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "synth",
    "synth",
    "drums",
    "sampler"
  ],
  "roles": {
    "lead": [
      "synth",
      "voice"
    ],
    "harmony": [
      "synth"
    ],
    "bass": [
      "synth"
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
      "id": "deep-house",
      "name": "Deep House",
      "description": "Deep House: style-specific cycle and phrase variation Deep House: style-specific articulation and phrase gesture Deep House: style-specific harmony and cadence",
      "patterns": [
        "Deep House: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Deep House: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Deep House: style-specific harmony and cadence"
      ]
    },
    {
      "id": "chicago-house",
      "name": "Chicago House",
      "description": "Chicago House: style-specific cycle and phrase variation Chicago House: style-specific articulation and phrase gesture Chicago House: style-specific harmony and cadence",
      "patterns": [
        "Chicago House: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Chicago House: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Chicago House: style-specific harmony and cadence"
      ]
    },
    {
      "id": "garage-piano-house",
      "name": "Garage / Piano House",
      "description": "Garage / Piano House: style-specific cycle and phrase variation Garage / Piano House: style-specific articulation and phrase gesture Garage / Piano House: style-specific harmony and cadence",
      "patterns": [
        "Garage / Piano House: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Garage / Piano House: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Garage / Piano House: style-specific harmony and cadence"
      ]
    },
    {
      "id": "acid-house",
      "name": "Acid House",
      "description": "Acid House: style-specific cycle and phrase variation Acid House: style-specific articulation and phrase gesture Acid House: style-specific harmony and cadence",
      "patterns": [
        "Acid House: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Acid House: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Acid House: style-specific harmony and cadence"
      ]
    },
    {
      "id": "tech-house",
      "name": "Tech House",
      "description": "Tech House: style-specific cycle and phrase variation Tech House: style-specific articulation and phrase gesture Tech House: style-specific harmony and cadence",
      "patterns": [
        "Tech House: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Tech House: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Tech House: style-specific harmony and cadence"
      ]
    },
    {
      "id": "progressive-house",
      "name": "Progressive House",
      "description": "Progressive House: style-specific cycle and phrase variation Progressive House: style-specific articulation and phrase gesture Progressive House: style-specific harmony and cadence",
      "patterns": [
        "Progressive House: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Progressive House: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Progressive House: style-specific harmony and cadence"
      ]
    },
    {
      "id": "afro-house",
      "name": "Afro-House",
      "description": "Afro-House: style-specific cycle and phrase variation Afro-House: style-specific articulation and phrase gesture Afro-House: style-specific harmony and cadence",
      "patterns": [
        "Afro-House: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Afro-House: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Afro-House: style-specific harmony and cadence"
      ]
    }
  ]
};
