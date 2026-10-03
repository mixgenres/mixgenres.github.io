import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "ambient",
  "name": "Ambient",
  "family": "Global electronic / experimental",
  "color": "#fff66a",
  "description": "Ambient is an independent musical world. Global electronic / experimental idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Atmospheric",
  "meter": "free / 4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "synth",
    "piano",
    "string-ensemble",
    "synth",
    "sampler"
  ],
  "roles": {
    "lead": [
      "synth",
      "piano"
    ],
    "harmony": [
      "synth",
      "string-ensemble"
    ],
    "bass": [
      "synth"
    ],
    "percussion": [
      "sampler"
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
      "id": "atmospheric",
      "name": "Atmospheric",
      "description": "Atmospheric: style-specific cycle and phrase variation Atmospheric: style-specific articulation and phrase gesture Atmospheric: style-specific harmony and cadence",
      "patterns": [
        "Atmospheric: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Atmospheric: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Atmospheric: style-specific harmony and cadence"
      ]
    },
    {
      "id": "drone",
      "name": "Drone",
      "description": "Drone: style-specific cycle and phrase variation Drone: style-specific articulation and phrase gesture Drone: style-specific harmony and cadence",
      "patterns": [
        "Drone: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Drone: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Drone: style-specific harmony and cadence"
      ]
    },
    {
      "id": "dark-ambient",
      "name": "Dark Ambient",
      "description": "Dark Ambient: style-specific cycle and phrase variation Dark Ambient: style-specific articulation and phrase gesture Dark Ambient: style-specific harmony and cadence",
      "patterns": [
        "Dark Ambient: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Dark Ambient: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Dark Ambient: style-specific harmony and cadence"
      ]
    },
    {
      "id": "organic-ambient",
      "name": "Organic Ambient",
      "description": "Organic Ambient: style-specific cycle and phrase variation Organic Ambient: style-specific articulation and phrase gesture Organic Ambient: style-specific harmony and cadence",
      "patterns": [
        "Organic Ambient: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Organic Ambient: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Organic Ambient: style-specific harmony and cadence"
      ]
    },
    {
      "id": "neo-classical-ambient",
      "name": "Neo-Classical Ambient",
      "description": "Neo-Classical Ambient: style-specific cycle and phrase variation Neo-Classical Ambient: style-specific articulation and phrase gesture Neo-Classical Ambient: style-specific harmony and cadence",
      "patterns": [
        "Neo-Classical Ambient: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Neo-Classical Ambient: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Neo-Classical Ambient: style-specific harmony and cadence"
      ]
    },
    {
      "id": "glitch-ambient",
      "name": "Glitch Ambient",
      "description": "Glitch Ambient: style-specific cycle and phrase variation Glitch Ambient: style-specific articulation and phrase gesture Glitch Ambient: style-specific harmony and cadence",
      "patterns": [
        "Glitch Ambient: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Glitch Ambient: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Glitch Ambient: style-specific harmony and cadence"
      ]
    },
    {
      "id": "generative-ambient",
      "name": "Generative Ambient",
      "description": "Generative Ambient: style-specific cycle and phrase variation Generative Ambient: style-specific articulation and phrase gesture Generative Ambient: style-specific harmony and cadence",
      "patterns": [
        "Generative Ambient: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Generative Ambient: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Generative Ambient: style-specific harmony and cadence"
      ]
    },
    {
      "id": "cinematic-ambient",
      "name": "Cinematic Ambient",
      "description": "Cinematic Ambient: style-specific cycle and phrase variation Cinematic Ambient: style-specific articulation and phrase gesture Cinematic Ambient: style-specific harmony and cadence",
      "patterns": [
        "Cinematic Ambient: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Cinematic Ambient: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Cinematic Ambient: style-specific harmony and cadence"
      ]
    },
    {
      "id": "downtempo-ambient",
      "name": "Downtempo Ambient",
      "description": "Downtempo Ambient: style-specific cycle and phrase variation Downtempo Ambient: style-specific articulation and phrase gesture Downtempo Ambient: style-specific harmony and cadence",
      "patterns": [
        "Downtempo Ambient: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Downtempo Ambient: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Downtempo Ambient: style-specific harmony and cadence"
      ]
    }
  ]
};
