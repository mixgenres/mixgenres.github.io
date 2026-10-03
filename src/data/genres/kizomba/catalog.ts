import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "kizomba",
  "name": "Kizomba",
  "family": "Angola / Lusophone Africa",
  "color": "#7d37d2",
  "description": "Kizomba is an independent musical world. Angola / Lusophone Africa idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Traditional",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "synth",
    "guitar",
    "bass",
    "congas",
    "guiro",
    "drums"
  ],
  "roles": {
    "lead": [
      "voice",
      "synth"
    ],
    "harmony": [
      "guitar",
      "synth"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "congas",
      "guiro",
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
      "id": "semba-derived",
      "name": "Semba-Derived",
      "description": "Semba-Derived: style-specific cycle and phrase variation Semba-Derived: style-specific articulation and phrase gesture Semba-Derived: style-specific harmony and cadence",
      "patterns": [
        "Semba-Derived: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Semba-Derived: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Semba-Derived: style-specific harmony and cadence"
      ]
    },
    {
      "id": "passada",
      "name": "Passada",
      "description": "Passada: style-specific cycle and phrase variation Passada: style-specific articulation and phrase gesture Passada: style-specific harmony and cadence",
      "patterns": [
        "Passada: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Passada: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Passada: style-specific harmony and cadence"
      ]
    },
    {
      "id": "tarraxinha",
      "name": "Tarraxinha",
      "description": "Tarraxinha: style-specific cycle and phrase variation Tarraxinha: style-specific articulation and phrase gesture Tarraxinha: style-specific harmony and cadence",
      "patterns": [
        "Tarraxinha: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Tarraxinha: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Tarraxinha: style-specific harmony and cadence"
      ]
    },
    {
      "id": "urban-kiz",
      "name": "Urban Kiz",
      "description": "Urban Kiz: style-specific cycle and phrase variation Urban Kiz: style-specific articulation and phrase gesture Urban Kiz: style-specific harmony and cadence",
      "patterns": [
        "Urban Kiz: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Urban Kiz: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Urban Kiz: style-specific harmony and cadence"
      ]
    },
    {
      "id": "ghetto-zouk-crossover",
      "name": "Ghetto-Zouk Crossover",
      "description": "Ghetto-Zouk Crossover: style-specific cycle and phrase variation Ghetto-Zouk Crossover: style-specific articulation and phrase gesture Ghetto-Zouk Crossover: style-specific harmony and cadence",
      "patterns": [
        "Ghetto-Zouk Crossover: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Ghetto-Zouk Crossover: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Ghetto-Zouk Crossover: style-specific harmony and cadence"
      ]
    },
    {
      "id": "fusion-kiz",
      "name": "Fusion Kiz",
      "description": "Fusion Kiz: style-specific cycle and phrase variation Fusion Kiz: style-specific articulation and phrase gesture Fusion Kiz: style-specific harmony and cadence",
      "patterns": [
        "Fusion Kiz: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Fusion Kiz: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Fusion Kiz: style-specific harmony and cadence"
      ]
    }
  ]
};
