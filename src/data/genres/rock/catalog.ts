import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "rock",
  "name": "Rock",
  "family": "Global popular music",
  "color": "#9a1f30",
  "description": "Rock is an independent musical world. Global popular music idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Alternative",
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
    "organ"
  ],
  "roles": {
    "lead": [
      "voice",
      "guitar"
    ],
    "harmony": [
      "guitar",
      "organ"
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
      "id": "alternative",
      "name": "Alternative",
      "description": "Alternative: style-specific cycle and phrase variation Alternative: style-specific articulation and phrase gesture Alternative: style-specific harmony and cadence",
      "patterns": [
        "Alternative: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Alternative: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Alternative: style-specific harmony and cadence"
      ]
    },
    {
      "id": "rock-and-roll",
      "name": "Rock & Roll",
      "description": "Rock & Roll: style-specific cycle and phrase variation Rock & Roll: style-specific articulation and phrase gesture Rock & Roll: style-specific harmony and cadence",
      "patterns": [
        "Rock & Roll: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Rock & Roll: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Rock & Roll: style-specific harmony and cadence"
      ]
    },
    {
      "id": "classic-rock",
      "name": "Classic Rock",
      "description": "Classic Rock: style-specific cycle and phrase variation Classic Rock: style-specific articulation and phrase gesture Classic Rock: style-specific harmony and cadence",
      "patterns": [
        "Classic Rock: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Classic Rock: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Classic Rock: style-specific harmony and cadence"
      ]
    },
    {
      "id": "hard-rock",
      "name": "Hard Rock",
      "description": "Hard Rock: style-specific cycle and phrase variation Hard Rock: style-specific articulation and phrase gesture Hard Rock: style-specific harmony and cadence",
      "patterns": [
        "Hard Rock: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Hard Rock: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Hard Rock: style-specific harmony and cadence"
      ]
    },
    {
      "id": "psychedelic",
      "name": "Psychedelic",
      "description": "Psychedelic: style-specific cycle and phrase variation Psychedelic: style-specific articulation and phrase gesture Psychedelic: style-specific harmony and cadence",
      "patterns": [
        "Psychedelic: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Psychedelic: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Psychedelic: style-specific harmony and cadence"
      ]
    },
    {
      "id": "progressive",
      "name": "Progressive",
      "description": "Progressive: style-specific cycle and phrase variation Progressive: style-specific articulation and phrase gesture Progressive: style-specific harmony and cadence",
      "patterns": [
        "Progressive: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Progressive: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Progressive: style-specific harmony and cadence"
      ]
    },
    {
      "id": "indie",
      "name": "Indie",
      "description": "Indie: style-specific cycle and phrase variation Indie: style-specific articulation and phrase gesture Indie: style-specific harmony and cadence",
      "patterns": [
        "Indie: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Indie: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Indie: style-specific harmony and cadence"
      ]
    },
    {
      "id": "shoegaze",
      "name": "Shoegaze",
      "description": "Shoegaze: style-specific cycle and phrase variation Shoegaze: style-specific articulation and phrase gesture Shoegaze: style-specific harmony and cadence",
      "patterns": [
        "Shoegaze: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Shoegaze: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Shoegaze: style-specific harmony and cadence"
      ]
    },
    {
      "id": "post-rock",
      "name": "Post-Rock",
      "description": "Post-Rock: style-specific cycle and phrase variation Post-Rock: style-specific articulation and phrase gesture Post-Rock: style-specific harmony and cadence",
      "patterns": [
        "Post-Rock: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Post-Rock: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Post-Rock: style-specific harmony and cadence"
      ]
    },
    {
      "id": "japanese-melodic-rock",
      "name": "Japanese Melodic Rock",
      "description": "Japanese Melodic Rock: style-specific cycle and phrase variation Japanese Melodic Rock: style-specific articulation and phrase gesture Japanese Melodic Rock: style-specific harmony and cadence",
      "patterns": [
        "Japanese Melodic Rock: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Japanese Melodic Rock: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Japanese Melodic Rock: style-specific harmony and cadence"
      ]
    }
  ]
};
