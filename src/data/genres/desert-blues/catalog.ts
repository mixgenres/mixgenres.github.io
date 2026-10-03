import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "desert-blues",
  "name": "Desert Blues",
  "family": "Sahel / Tuareg",
  "color": "#be6293",
  "description": "Desert Blues is an independent musical world. Sahel / Tuareg idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Tishoumaren",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "guitar",
    "voice",
    "bass",
    "hand-percussion"
  ],
  "roles": {
    "lead": [
      "guitar",
      "voice"
    ],
    "harmony": [
      "guitar"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "hand-percussion"
    ]
  },
  "pitchSystem": "modal / drone-centered",
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
      "id": "tishoumaren",
      "name": "Tishoumaren",
      "description": "Tishoumaren: style-specific cycle and phrase variation Tishoumaren: style-specific articulation and phrase gesture Tishoumaren: style-specific harmony and cadence",
      "patterns": [
        "Tishoumaren: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Tishoumaren: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Tishoumaren: style-specific harmony and cadence"
      ]
    },
    {
      "id": "sahel-guitar",
      "name": "Sahel Guitar",
      "description": "Sahel Guitar: style-specific cycle and phrase variation Sahel Guitar: style-specific articulation and phrase gesture Sahel Guitar: style-specific harmony and cadence",
      "patterns": [
        "Sahel Guitar: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Sahel Guitar: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Sahel Guitar: style-specific harmony and cadence"
      ]
    },
    {
      "id": "acoustic-tuareg",
      "name": "Acoustic Tuareg",
      "description": "Acoustic Tuareg: style-specific cycle and phrase variation Acoustic Tuareg: style-specific articulation and phrase gesture Acoustic Tuareg: style-specific harmony and cadence",
      "patterns": [
        "Acoustic Tuareg: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Acoustic Tuareg: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Acoustic Tuareg: style-specific harmony and cadence"
      ]
    },
    {
      "id": "psychedelic-desert",
      "name": "Psychedelic Desert",
      "description": "Psychedelic Desert: style-specific cycle and phrase variation Psychedelic Desert: style-specific articulation and phrase gesture Psychedelic Desert: style-specific harmony and cadence",
      "patterns": [
        "Psychedelic Desert: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Psychedelic Desert: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Psychedelic Desert: style-specific harmony and cadence"
      ]
    }
  ]
};
