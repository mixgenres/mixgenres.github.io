import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "chinese",
  "name": "Chinese",
  "family": "China",
  "color": "#babd29",
  "description": "Chinese is an independent musical world. China idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Jiangnan Sizhu",
  "meter": "free / cycle",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "erhu",
    "dizi",
    "guqin",
    "pipa",
    "guzheng",
    "cello",
    "paigu",
    "gongs"
  ],
  "roles": {
    "lead": [
      "erhu",
      "dizi",
      "guqin"
    ],
    "harmony": [
      "pipa",
      "guzheng"
    ],
    "bass": [
      "cello"
    ],
    "percussion": [
      "paigu",
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
      "id": "jiangnan-sizhu",
      "name": "Jiangnan Sizhu",
      "description": "shared melody with heterophonic embellishment ornament, pitch bend, flexible timing modal/heterophonic",
      "patterns": [
        "shared melody with heterophonic embellishment"
      ],
      "techniques": [
        "ornament, pitch bend, flexible timing"
      ],
      "harmony": [
        "modal/heterophonic",
        "no chord progression requirement"
      ]
    },
    {
      "id": "guqin",
      "name": "Guqin",
      "description": "free phrase repeated motivic cells harmonics, sliding, vibrato, left-hand pitch shading pentatonic/modal single-line texture",
      "patterns": [
        "free phrase",
        "repeated motivic cells"
      ],
      "techniques": [
        "harmonics, sliding, vibrato, left-hand pitch shading"
      ],
      "harmony": [
        "pentatonic/modal single-line texture"
      ]
    },
    {
      "id": "guzheng",
      "name": "Guzheng",
      "description": "arpeggio/tremolo ostinato tremolo, bends, glissando pentatonic/modal, occasional stacked open fifths",
      "patterns": [
        "arpeggio/tremolo ostinato"
      ],
      "techniques": [
        "tremolo, bends, glissando"
      ],
      "harmony": [
        "pentatonic/modal, occasional stacked open fifths"
      ]
    },
    {
      "id": "pipa",
      "name": "Pipa",
      "description": "rapid tremolo, martial ostinato wheel tremolo, snaps, percussive strum melodic/modal",
      "patterns": [
        "rapid tremolo, martial ostinato"
      ],
      "techniques": [
        "wheel tremolo, snaps, percussive strum"
      ],
      "harmony": [
        "melodic/modal"
      ]
    },
    {
      "id": "jingju",
      "name": "Jingju",
      "description": "percussion cue structures flexible speech-song rhythm stylized vocal ornament modal melodic framework",
      "patterns": [
        "percussion cue structures",
        "flexible speech-song rhythm"
      ],
      "techniques": [
        "stylized vocal ornament",
        "jinghu slides"
      ],
      "harmony": [
        "modal melodic framework"
      ]
    },
    {
      "id": "cantonese-ensemble",
      "name": "Cantonese Ensemble",
      "description": "heterophonic small ensemble Cantonese Ensemble: style-specific articulation and phrase gesture modal/pentatonic",
      "patterns": [
        "heterophonic small ensemble"
      ],
      "techniques": [
        "Cantonese Ensemble: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "modal/pentatonic"
      ]
    },
    {
      "id": "chaozhou",
      "name": "Chaozhou",
      "description": "ornamented melody elastic timing Chaozhou: style-specific articulation and phrase gesture modal",
      "patterns": [
        "ornamented melody",
        "elastic timing"
      ],
      "techniques": [
        "Chaozhou: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "modal"
      ]
    },
    {
      "id": "suona-chuida",
      "name": "Suona / Chuida",
      "description": "loud processional drum/wind cycles Suona / Chuida: style-specific articulation and phrase gesture modal/unison/heterophonic",
      "patterns": [
        "loud processional drum/wind cycles"
      ],
      "techniques": [
        "Suona / Chuida: style-specific articulation and phrase gesture"
      ],
      "harmony": [
        "modal/unison/heterophonic"
      ]
    }
  ]
};
