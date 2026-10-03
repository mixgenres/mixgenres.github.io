import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "steppe",
  "name": "Steppe",
  "family": "Central Asia / Mongolia",
  "color": "#694d56",
  "description": "Steppe is an independent musical world. Central Asia / Mongolia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Morin Khuur",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "morin-khuur",
    "dombra",
    "khomus",
    "frame-drum"
  ],
  "roles": {
    "lead": [
      "morin-khuur",
      "dombra",
      "khomus"
    ],
    "harmony": [
      "morin-khuur"
    ],
    "bass": [
      "morin-khuur"
    ],
    "percussion": [
      "frame-drum"
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
      "id": "morin-khuur",
      "name": "Morin Khuur",
      "description": "Morin Khuur: style-specific cycle and phrase variation Morin Khuur: style-specific articulation and phrase gesture Morin Khuur: style-specific harmony and cadence",
      "patterns": [
        "Morin Khuur: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Morin Khuur: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Morin Khuur: style-specific harmony and cadence"
      ]
    },
    {
      "id": "khoomei",
      "name": "Khöömei",
      "description": "Khöömei: style-specific cycle and phrase variation Khöömei: style-specific articulation and phrase gesture Khöömei: style-specific harmony and cadence",
      "patterns": [
        "Khöömei: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Khöömei: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Khöömei: style-specific harmony and cadence"
      ]
    },
    {
      "id": "sygyt",
      "name": "Sygyt",
      "description": "Sygyt: style-specific cycle and phrase variation Sygyt: style-specific articulation and phrase gesture Sygyt: style-specific harmony and cadence",
      "patterns": [
        "Sygyt: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Sygyt: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Sygyt: style-specific harmony and cadence"
      ]
    },
    {
      "id": "kargyraa",
      "name": "Kargyraa",
      "description": "Kargyraa: style-specific cycle and phrase variation Kargyraa: style-specific articulation and phrase gesture Kargyraa: style-specific harmony and cadence",
      "patterns": [
        "Kargyraa: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Kargyraa: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Kargyraa: style-specific harmony and cadence"
      ]
    },
    {
      "id": "dombra",
      "name": "Dombra",
      "description": "Dombra: style-specific cycle and phrase variation Dombra: style-specific articulation and phrase gesture Dombra: style-specific harmony and cadence",
      "patterns": [
        "Dombra: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Dombra: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Dombra: style-specific harmony and cadence"
      ]
    },
    {
      "id": "folk-rock-fusion",
      "name": "Folk-Rock Fusion",
      "description": "Folk-Rock Fusion: style-specific cycle and phrase variation Folk-Rock Fusion: style-specific articulation and phrase gesture Folk-Rock Fusion: style-specific harmony and cadence",
      "patterns": [
        "Folk-Rock Fusion: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Folk-Rock Fusion: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Folk-Rock Fusion: style-specific harmony and cadence"
      ]
    }
  ]
};
