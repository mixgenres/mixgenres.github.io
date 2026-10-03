import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "cinematic",
  "name": "Cinematic",
  "family": "Global screen music",
  "color": "#47019e",
  "description": "Cinematic is an independent musical world. Global screen music idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Modern Score",
  "meter": "free / 4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "string-ensemble",
    "horn-section",
    "piano",
    "synth",
    "cello",
    "synth",
    "timpani",
    "drums"
  ],
  "roles": {
    "lead": [
      "string-ensemble",
      "horn-section"
    ],
    "harmony": [
      "piano",
      "synth"
    ],
    "bass": [
      "cello",
      "synth"
    ],
    "percussion": [
      "timpani",
      "drums"
    ]
  },
  "pitchSystem": "12-tet / style-specific tuning",
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
      "id": "modern-score",
      "name": "Modern Score",
      "description": "Modern Score: style-specific cycle and phrase variation Modern Score: style-specific articulation and phrase gesture Modern Score: style-specific harmony and cadence",
      "patterns": [
        "Modern Score: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Modern Score: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Modern Score: style-specific harmony and cadence"
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
      "id": "minimal-tension",
      "name": "Minimal Tension",
      "description": "Minimal Tension: style-specific cycle and phrase variation Minimal Tension: style-specific articulation and phrase gesture Minimal Tension: style-specific harmony and cadence",
      "patterns": [
        "Minimal Tension: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Minimal Tension: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Minimal Tension: style-specific harmony and cadence"
      ]
    },
    {
      "id": "hybrid",
      "name": "Hybrid",
      "description": "Hybrid: style-specific cycle and phrase variation Hybrid: style-specific articulation and phrase gesture Hybrid: style-specific harmony and cadence",
      "patterns": [
        "Hybrid: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Hybrid: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Hybrid: style-specific harmony and cadence"
      ]
    },
    {
      "id": "epic",
      "name": "Epic",
      "description": "Epic: style-specific cycle and phrase variation Epic: style-specific articulation and phrase gesture Epic: style-specific harmony and cadence",
      "patterns": [
        "Epic: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Epic: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Epic: style-specific harmony and cadence"
      ]
    },
    {
      "id": "ambient-score",
      "name": "Ambient Score",
      "description": "Ambient Score: style-specific cycle and phrase variation Ambient Score: style-specific articulation and phrase gesture Ambient Score: style-specific harmony and cadence",
      "patterns": [
        "Ambient Score: style-specific cycle and phrase variation"
      ],
      "techniques": [
        "Ambient Score: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "Ambient Score: style-specific harmony and cadence"
      ]
    }
  ]
};
