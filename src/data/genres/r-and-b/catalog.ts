import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "r-and-b",
  "name": "R&B",
  "family": "R&B",
  "color": "#18bff6",
  "description": "R&B is an independent musical world. R&B idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Contemporary R&B",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "piano",
    "guitar",
    "bass",
    "drums"
  ],
  "roles": {
    "lead": [
      "voice"
    ],
    "harmony": [
      "piano",
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
      "id": "contemporary-randb",
      "name": "Contemporary R&B",
      "description": "Contemporary R&B: style-specific cycle and phrase variation Contemporary R&B: style-specific articulation and phrase gesture Contemporary R&B: style-specific harmony and cadence",
      "patterns": [
        "Contemporary R&B: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Contemporary R&B: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Contemporary R&B: style-specific harmony and cadence"
      ]
    },
    {
      "id": "motown",
      "name": "Motown",
      "description": "Motown: style-specific cycle and phrase variation Motown: style-specific articulation and phrase gesture Motown: style-specific harmony and cadence",
      "patterns": [
        "Motown: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Motown: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Motown: style-specific harmony and cadence"
      ]
    },
    {
      "id": "southern-soul",
      "name": "Southern Soul",
      "description": "Southern Soul: style-specific cycle and phrase variation Southern Soul: style-specific articulation and phrase gesture Southern Soul: style-specific harmony and cadence",
      "patterns": [
        "Southern Soul: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Southern Soul: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Southern Soul: style-specific harmony and cadence"
      ]
    },
    {
      "id": "memphis-soul",
      "name": "Memphis Soul",
      "description": "Memphis Soul: style-specific cycle and phrase variation Memphis Soul: style-specific articulation and phrase gesture Memphis Soul: style-specific harmony and cadence",
      "patterns": [
        "Memphis Soul: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Memphis Soul: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Memphis Soul: style-specific harmony and cadence"
      ]
    },
    {
      "id": "philly-soul",
      "name": "Philly Soul",
      "description": "Philly Soul: style-specific cycle and phrase variation Philly Soul: style-specific articulation and phrase gesture Philly Soul: style-specific harmony and cadence",
      "patterns": [
        "Philly Soul: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Philly Soul: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Philly Soul: style-specific harmony and cadence"
      ]
    },
    {
      "id": "quiet-storm",
      "name": "Quiet Storm",
      "description": "Quiet Storm: style-specific cycle and phrase variation Quiet Storm: style-specific articulation and phrase gesture Quiet Storm: style-specific harmony and cadence",
      "patterns": [
        "Quiet Storm: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Quiet Storm: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Quiet Storm: style-specific harmony and cadence"
      ]
    },
    {
      "id": "new-jack-swing",
      "name": "New Jack Swing",
      "description": "New Jack Swing: style-specific cycle and phrase variation New Jack Swing: style-specific articulation and phrase gesture New Jack Swing: style-specific harmony and cadence",
      "patterns": [
        "New Jack Swing: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "New Jack Swing: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "New Jack Swing: style-specific harmony and cadence"
      ]
    },
    {
      "id": "neo-soul",
      "name": "Neo-Soul",
      "description": "Neo-Soul: style-specific cycle and phrase variation Neo-Soul: style-specific articulation and phrase gesture Neo-Soul: style-specific harmony and cadence",
      "patterns": [
        "Neo-Soul: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Neo-Soul: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Neo-Soul: style-specific harmony and cadence"
      ]
    },
    {
      "id": "alternative-randb",
      "name": "Alternative R&B",
      "description": "Alternative R&B: style-specific cycle and phrase variation Alternative R&B: style-specific articulation and phrase gesture Alternative R&B: style-specific harmony and cadence",
      "patterns": [
        "Alternative R&B: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Alternative R&B: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Alternative R&B: style-specific harmony and cadence"
      ]
    }
  ]
};
