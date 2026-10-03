import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "electronic",
  "name": "Electronic",
  "family": "Global electronic",
  "color": "#165181",
  "description": "Electronic is an independent musical world. Global electronic idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Techno",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "synth",
    "synth",
    "sampler",
    "drums"
  ],
  "roles": {
    "lead": [
      "synth"
    ],
    "harmony": [
      "synth",
      "sampler"
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
      "id": "techno",
      "name": "Techno",
      "description": "Techno: style-specific cycle and phrase variation Techno: style-specific articulation and phrase gesture Techno: style-specific harmony and cadence",
      "patterns": [
        "Techno: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Techno: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Techno: style-specific harmony and cadence"
      ]
    },
    {
      "id": "detroit-techno",
      "name": "Detroit Techno",
      "description": "Detroit Techno: style-specific cycle and phrase variation Detroit Techno: style-specific articulation and phrase gesture Detroit Techno: style-specific harmony and cadence",
      "patterns": [
        "Detroit Techno: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Detroit Techno: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Detroit Techno: style-specific harmony and cadence"
      ]
    },
    {
      "id": "electro",
      "name": "Electro",
      "description": "Electro: style-specific cycle and phrase variation Electro: style-specific articulation and phrase gesture Electro: style-specific harmony and cadence",
      "patterns": [
        "Electro: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Electro: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Electro: style-specific harmony and cadence"
      ]
    },
    {
      "id": "trance",
      "name": "Trance",
      "description": "Trance: style-specific cycle and phrase variation Trance: style-specific articulation and phrase gesture Trance: style-specific harmony and cadence",
      "patterns": [
        "Trance: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Trance: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Trance: style-specific harmony and cadence"
      ]
    },
    {
      "id": "idm",
      "name": "IDM",
      "description": "IDM: style-specific cycle and phrase variation IDM: style-specific articulation and phrase gesture IDM: style-specific harmony and cadence",
      "patterns": [
        "IDM: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "IDM: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "IDM: style-specific harmony and cadence"
      ]
    },
    {
      "id": "minimal",
      "name": "Minimal",
      "description": "Minimal: style-specific cycle and phrase variation Minimal: style-specific articulation and phrase gesture Minimal: style-specific harmony and cadence",
      "patterns": [
        "Minimal: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Minimal: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Minimal: style-specific harmony and cadence"
      ]
    },
    {
      "id": "synthwave",
      "name": "Synthwave",
      "description": "Synthwave: style-specific cycle and phrase variation Synthwave: style-specific articulation and phrase gesture Synthwave: style-specific harmony and cadence",
      "patterns": [
        "Synthwave: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Synthwave: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Synthwave: style-specific harmony and cadence"
      ]
    },
    {
      "id": "melodic-electronic",
      "name": "Melodic Electronic",
      "description": "Melodic Electronic: style-specific cycle and phrase variation Melodic Electronic: style-specific articulation and phrase gesture Melodic Electronic: style-specific harmony and cadence",
      "patterns": [
        "Melodic Electronic: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Melodic Electronic: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Melodic Electronic: style-specific harmony and cadence"
      ]
    }
  ]
};
