import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "gamelan",
  "name": "Gamelan",
  "family": "Indonesia",
  "color": "#51547e",
  "description": "Gamelan is an independent musical world. Indonesia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Javanese",
  "meter": "free / cycle",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "gamelan-metallophone",
    "rebab",
    "gamelan-metallophone",
    "bonang",
    "gongs",
    "kendang"
  ],
  "roles": {
    "lead": [
      "gamelan-metallophone",
      "rebab"
    ],
    "harmony": [
      "gamelan-metallophone",
      "bonang"
    ],
    "bass": [
      "gongs"
    ],
    "percussion": [
      "kendang",
      "gongs"
    ]
  },
  "pitchSystem": "traditional pentatonic/modal tuning",
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
      "id": "javanese",
      "name": "Javanese",
      "description": "Javanese: style-specific cycle and phrase variation Javanese: style-specific articulation and phrase gesture Javanese: style-specific harmony and cadence",
      "patterns": [
        "Javanese: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Javanese: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Javanese: style-specific harmony and cadence"
      ]
    },
    {
      "id": "balinese-gong-kebyar",
      "name": "Balinese Gong Kebyar",
      "description": "Balinese Gong Kebyar: style-specific cycle and phrase variation Balinese Gong Kebyar: style-specific articulation and phrase gesture Balinese Gong Kebyar: style-specific harmony and cadence",
      "patterns": [
        "Balinese Gong Kebyar: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Balinese Gong Kebyar: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Balinese Gong Kebyar: style-specific harmony and cadence"
      ]
    },
    {
      "id": "degung",
      "name": "Degung",
      "description": "slower cyclical metallophone/gong texture Degung: style-specific articulation and phrase gesture Degung: style-specific harmony and cadence",
      "patterns": [
        "slower cyclical metallophone/gong texture"
      ],
      "techniques": [
        "Degung: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Degung: style-specific harmony and cadence"
      ]
    },
    {
      "id": "gamelan-angklung",
      "name": "Gamelan Angklung",
      "description": "lighter interlocking cyclic pattern Gamelan Angklung: style-specific articulation and phrase gesture Gamelan Angklung: style-specific harmony and cadence",
      "patterns": [
        "lighter interlocking cyclic pattern"
      ],
      "techniques": [
        "Gamelan Angklung: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Gamelan Angklung: style-specific harmony and cadence"
      ]
    }
  ]
};
