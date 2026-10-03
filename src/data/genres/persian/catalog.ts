import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "persian",
  "name": "Persian",
  "family": "Iran",
  "color": "#40c47a",
  "description": "Persian is an independent musical world. Iran idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Dastgah",
  "meter": "free / cycle",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "tar",
    "setar",
    "santur",
    "voice",
    "tanpura",
    "tombak"
  ],
  "roles": {
    "lead": [
      "tar",
      "setar",
      "santur",
      "voice"
    ],
    "harmony": [
      "santur"
    ],
    "bass": [
      "tanpura"
    ],
    "percussion": [
      "tombak"
    ]
  },
  "pitchSystem": "dastgah / radif modal tuning",
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
      "id": "dastgah",
      "name": "Dastgah",
      "description": "Dastgah: style-specific cycle and phrase variation Dastgah: style-specific articulation and phrase gesture Dastgah: style-specific harmony and cadence",
      "patterns": [
        "Dastgah: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Dastgah: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Dastgah: style-specific harmony and cadence"
      ]
    },
    {
      "id": "radif",
      "name": "Radif",
      "description": "Radif: style-specific cycle and phrase variation Radif: style-specific articulation and phrase gesture Radif: style-specific harmony and cadence",
      "patterns": [
        "Radif: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Radif: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Radif: style-specific harmony and cadence"
      ]
    },
    {
      "id": "avaz",
      "name": "Avaz",
      "description": "Avaz: style-specific cycle and phrase variation Avaz: style-specific articulation and phrase gesture Avaz: style-specific harmony and cadence",
      "patterns": [
        "Avaz: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Avaz: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Avaz: style-specific harmony and cadence"
      ]
    },
    {
      "id": "instrumental-ensemble",
      "name": "Instrumental Ensemble",
      "description": "Instrumental Ensemble: style-specific cycle and phrase variation Instrumental Ensemble: style-specific articulation and phrase gesture Instrumental Ensemble: style-specific harmony and cadence",
      "patterns": [
        "Instrumental Ensemble: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Instrumental Ensemble: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Instrumental Ensemble: style-specific harmony and cadence"
      ]
    },
    {
      "id": "modern-persian",
      "name": "Modern Persian",
      "description": "Modern Persian: style-specific cycle and phrase variation Modern Persian: style-specific articulation and phrase gesture Modern Persian: style-specific harmony and cadence",
      "patterns": [
        "Modern Persian: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Modern Persian: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Modern Persian: style-specific harmony and cadence"
      ]
    }
  ]
};
