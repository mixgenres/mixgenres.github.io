import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "hip-hop",
  "name": "Hip-Hop",
  "family": "African American / Global",
  "color": "#66c224",
  "description": "Hip-Hop is an independent musical world. African American / Global idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Boom Bap",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "sampler",
    "synth",
    "synth",
    "drums"
  ],
  "roles": {
    "lead": [
      "voice"
    ],
    "harmony": [
      "sampler",
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
      "id": "boom-bap",
      "name": "Boom Bap",
      "description": "Boom Bap: style-specific cycle and phrase variation Boom Bap: style-specific articulation and phrase gesture Boom Bap: style-specific harmony and cadence",
      "patterns": [
        "Boom Bap: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Boom Bap: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Boom Bap: style-specific harmony and cadence"
      ]
    },
    {
      "id": "golden-age",
      "name": "Golden Age",
      "description": "Golden Age: style-specific cycle and phrase variation Golden Age: style-specific articulation and phrase gesture Golden Age: style-specific harmony and cadence",
      "patterns": [
        "Golden Age: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Golden Age: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Golden Age: style-specific harmony and cadence"
      ]
    },
    {
      "id": "g-funk",
      "name": "G-Funk",
      "description": "G-Funk: style-specific cycle and phrase variation G-Funk: style-specific articulation and phrase gesture G-Funk: style-specific harmony and cadence",
      "patterns": [
        "G-Funk: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "G-Funk: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "G-Funk: style-specific harmony and cadence"
      ]
    },
    {
      "id": "southern",
      "name": "Southern",
      "description": "Southern: style-specific cycle and phrase variation Southern: style-specific articulation and phrase gesture Southern: style-specific harmony and cadence",
      "patterns": [
        "Southern: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Southern: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Southern: style-specific harmony and cadence"
      ]
    },
    {
      "id": "trap",
      "name": "Trap",
      "description": "Trap: style-specific cycle and phrase variation Trap: style-specific articulation and phrase gesture Trap: style-specific harmony and cadence",
      "patterns": [
        "Trap: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Trap: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Trap: style-specific harmony and cadence"
      ]
    },
    {
      "id": "drill",
      "name": "Drill",
      "description": "Drill: style-specific cycle and phrase variation Drill: style-specific articulation and phrase gesture Drill: style-specific harmony and cadence",
      "patterns": [
        "Drill: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Drill: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Drill: style-specific harmony and cadence"
      ]
    },
    {
      "id": "jazz-rap",
      "name": "Jazz Rap",
      "description": "Jazz Rap: style-specific cycle and phrase variation Jazz Rap: style-specific articulation and phrase gesture Jazz Rap: style-specific harmony and cadence",
      "patterns": [
        "Jazz Rap: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Jazz Rap: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Jazz Rap: style-specific harmony and cadence"
      ]
    },
    {
      "id": "abstract",
      "name": "Abstract",
      "description": "Abstract: style-specific cycle and phrase variation Abstract: style-specific articulation and phrase gesture Abstract: style-specific harmony and cadence",
      "patterns": [
        "Abstract: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Abstract: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Abstract: style-specific harmony and cadence"
      ]
    },
    {
      "id": "lo-fi",
      "name": "Lo-Fi",
      "description": "Lo-Fi: style-specific cycle and phrase variation Lo-Fi: style-specific articulation and phrase gesture Lo-Fi: style-specific harmony and cadence",
      "patterns": [
        "Lo-Fi: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Lo-Fi: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Lo-Fi: style-specific harmony and cadence"
      ]
    }
  ]
};
