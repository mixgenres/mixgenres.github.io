import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "pop",
  "name": "Pop",
  "family": "Global popular music",
  "color": "#b21afc",
  "description": "Pop is an independent musical world. Global popular music idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Contemporary",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "piano",
    "guitar",
    "synth",
    "bass",
    "synth",
    "drums",
    "string-ensemble"
  ],
  "roles": {
    "lead": [
      "voice"
    ],
    "harmony": [
      "piano",
      "guitar",
      "synth"
    ],
    "bass": [
      "bass",
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
      "id": "contemporary",
      "name": "Contemporary",
      "description": "Contemporary: style-specific cycle and phrase variation Contemporary: style-specific articulation and phrase gesture Contemporary: style-specific harmony and cadence",
      "patterns": [
        "Contemporary: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Contemporary: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Contemporary: style-specific harmony and cadence"
      ]
    },
    {
      "id": "dance-pop",
      "name": "Dance Pop",
      "description": "Dance Pop: style-specific cycle and phrase variation Dance Pop: style-specific articulation and phrase gesture Dance Pop: style-specific harmony and cadence",
      "patterns": [
        "Dance Pop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Dance Pop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Dance Pop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "synth-pop",
      "name": "Synth-Pop",
      "description": "Synth-Pop: style-specific cycle and phrase variation Synth-Pop: style-specific articulation and phrase gesture Synth-Pop: style-specific harmony and cadence",
      "patterns": [
        "Synth-Pop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Synth-Pop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Synth-Pop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "city-pop",
      "name": "City Pop",
      "description": "City Pop: style-specific cycle and phrase variation City Pop: style-specific articulation and phrase gesture City Pop: style-specific harmony and cadence",
      "patterns": [
        "City Pop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "City Pop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "City Pop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "indie-pop",
      "name": "Indie Pop",
      "description": "Indie Pop: style-specific cycle and phrase variation Indie Pop: style-specific articulation and phrase gesture Indie Pop: style-specific harmony and cadence",
      "patterns": [
        "Indie Pop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Indie Pop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Indie Pop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "dream-pop",
      "name": "Dream Pop",
      "description": "Dream Pop: style-specific cycle and phrase variation Dream Pop: style-specific articulation and phrase gesture Dream Pop: style-specific harmony and cadence",
      "patterns": [
        "Dream Pop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Dream Pop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Dream Pop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "art-pop",
      "name": "Art Pop",
      "description": "Art Pop: style-specific cycle and phrase variation Art Pop: style-specific articulation and phrase gesture Art Pop: style-specific harmony and cadence",
      "patterns": [
        "Art Pop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Art Pop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Art Pop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "power-pop",
      "name": "Power Pop",
      "description": "Power Pop: style-specific cycle and phrase variation Power Pop: style-specific articulation and phrase gesture Power Pop: style-specific harmony and cadence",
      "patterns": [
        "Power Pop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Power Pop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Power Pop: style-specific harmony and cadence"
      ]
    },
    {
      "id": "maximal-idol-pop",
      "name": "Maximal Idol Pop",
      "description": "Maximal Idol Pop: style-specific cycle and phrase variation Maximal Idol Pop: style-specific articulation and phrase gesture Maximal Idol Pop: style-specific harmony and cadence",
      "patterns": [
        "Maximal Idol Pop: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Maximal Idol Pop: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Maximal Idol Pop: style-specific harmony and cadence"
      ]
    }
  ]
};
