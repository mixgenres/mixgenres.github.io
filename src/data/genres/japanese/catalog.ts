import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "japanese",
  "name": "Japanese",
  "family": "Japan",
  "color": "#817546",
  "description": "Japanese is an independent musical world. Japan idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Gagaku",
  "meter": "free / cycle",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "shakuhachi",
    "shamisen",
    "koto",
    "biwa",
    "taiko"
  ],
  "roles": {
    "lead": [
      "shakuhachi",
      "shamisen"
    ],
    "harmony": [
      "koto",
      "biwa"
    ],
    "bass": [
      "koto"
    ],
    "percussion": [
      "taiko"
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
      "id": "gagaku",
      "name": "Gagaku",
      "description": "slow cyclic percussion heterophonic winds sustained hichiriki modal pitch organization + characteristic shō sonorities",
      "patterns": [
        "slow cyclic percussion",
        "heterophonic winds",
        "shō clusters"
      ],
      "techniques": [
        "sustained hichiriki",
        "breath-shaped phrase",
        "shō aitake clusters"
      ],
      "harmony": [
        "modal pitch organization + characteristic shō sonorities"
      ]
    },
    {
      "id": "shakuhachi",
      "name": "Shakuhachi",
      "description": "free breathing phrases meri/kari pitch bending melodic/modal, no fixed chords",
      "patterns": [
        "free breathing phrases"
      ],
      "techniques": [
        "meri/kari pitch bending",
        "breath noise",
        "muraiki"
      ],
      "harmony": [
        "melodic/modal, no fixed chords"
      ]
    },
    {
      "id": "shamisen-minyo",
      "name": "Shamisen / Min'yō",
      "description": "percussive strum repeated folk accompaniment sawari, hard bachi attack, slides modal/pentatonic",
      "patterns": [
        "percussive strum",
        "repeated folk accompaniment"
      ],
      "techniques": [
        "sawari, hard bachi attack, slides"
      ],
      "harmony": [
        "modal/pentatonic"
      ]
    },
    {
      "id": "koto-sankyoku",
      "name": "Koto / Sankyoku",
      "description": "arpeggiation heterophonic chamber interplay pitch bends, tremolo, glissandi tuning-specific modal framework",
      "patterns": [
        "arpeggiation",
        "heterophonic chamber interplay"
      ],
      "techniques": [
        "pitch bends, tremolo, glissandi"
      ],
      "harmony": [
        "tuning-specific modal framework"
      ]
    },
    {
      "id": "taiko",
      "name": "Taiko",
      "description": "kuchi-shōga-derived rhythmic cells ensemble unison/canon rim hit, full-body stroke, dynamic crescendo percussion-only unless fused",
      "patterns": [
        "kuchi-shōga-derived rhythmic cells",
        "ensemble unison/canon"
      ],
      "techniques": [
        "rim hit, full-body stroke, dynamic crescendo"
      ],
      "harmony": [
        "percussion-only unless fused"
      ]
    }
  ]
};
