import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "turkish",
  "name": "Turkish",
  "family": "Anatolia / Turkey",
  "color": "#7a74a6",
  "description": "Turkish is an independent musical world. Anatolia / Turkey idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Turkish Folk",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "oud",
    "ney",
    "baglama",
    "voice",
    "qanun",
    "bass",
    "darbuka",
    "zurna"
  ],
  "roles": {
    "lead": [
      "oud",
      "ney",
      "baglama",
      "voice"
    ],
    "harmony": [
      "qanun"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "darbuka",
      "zurna"
    ]
  },
  "pitchSystem": "maqam / microtonal inflection",
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
      "id": "turkish-folk",
      "name": "Turkish Folk",
      "description": "Turkish Folk: style-specific cycle and phrase variation Turkish Folk: style-specific articulation and phrase gesture Turkish Folk: style-specific harmony and cadence",
      "patterns": [
        "Turkish Folk: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Turkish Folk: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Turkish Folk: style-specific harmony and cadence"
      ]
    },
    {
      "id": "ottoman-classical",
      "name": "Ottoman Classical",
      "description": "Ottoman Classical: style-specific cycle and phrase variation Ottoman Classical: style-specific articulation and phrase gesture Ottoman Classical: style-specific harmony and cadence",
      "patterns": [
        "Ottoman Classical: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Ottoman Classical: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Ottoman Classical: style-specific harmony and cadence"
      ]
    },
    {
      "id": "anatolian-rock",
      "name": "Anatolian Rock",
      "description": "Anatolian Rock: style-specific cycle and phrase variation Anatolian Rock: style-specific articulation and phrase gesture Anatolian Rock: style-specific harmony and cadence",
      "patterns": [
        "Anatolian Rock: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Anatolian Rock: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Anatolian Rock: style-specific harmony and cadence"
      ]
    },
    {
      "id": "arabesque",
      "name": "Arabesque",
      "description": "Arabesque: style-specific cycle and phrase variation Arabesque: style-specific articulation and phrase gesture Arabesque: style-specific harmony and cadence",
      "patterns": [
        "Arabesque: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Arabesque: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Arabesque: style-specific harmony and cadence"
      ]
    },
    {
      "id": "roman-halk",
      "name": "Roman / Halk",
      "description": "Roman / Halk: style-specific cycle and phrase variation Roman / Halk: style-specific articulation and phrase gesture Roman / Halk: style-specific harmony and cadence",
      "patterns": [
        "Roman / Halk: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Roman / Halk: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Roman / Halk: style-specific harmony and cadence"
      ]
    }
  ]
};
