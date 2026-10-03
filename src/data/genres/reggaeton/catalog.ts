import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "reggaeton",
  "name": "Reggaeton",
  "family": "Reggaeton",
  "color": "#559acc",
  "description": "Reggaeton is an independent musical world. Reggaeton idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "synth",
    "synth",
    "drums",
    "congas",
    "sampler"
  ],
  "roles": {
    "lead": [
      "voice",
      "synth"
    ],
    "harmony": [
      "synth"
    ],
    "bass": [
      "synth"
    ],
    "percussion": [
      "drums",
      "congas"
    ]
  },
  "pitchSystem": "12-tet",
  "scales": [
    "short minor/modal loops"
  ],
  "chordQualities": [
    "short minor/modal loops",
    "i-VI-III-VII",
    "vi-IV-I-V",
    "sus/add9"
  ],
  "harmonicRhythm": "phrase and section dependent",
  "cadences": [
    "style-specific phrase close"
  ],
  "bassChordInteraction": "Follow the style-specific pulse, harmonic rhythm, and phrase cadence.",
  "patternFamilies": [
    "dembow",
    "808/sub",
    "syncopated vocal pickup",
    "loop-based arrangement"
  ],
  "techniques": [
    "vocal chop",
    "pitch correction",
    "hi-hat rolls",
    "filtered drops"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "classic",
      "name": "Classic",
      "description": "Classic: dembow Classic: 808/sub Classic: vocal chop Classic: short minor/modal loops",
      "patterns": [
        "Classic: dembow",
        "Classic: 808/sub",
        "Classic: syncopated vocal pickup"
      ],
      "techniques": [
        "Classic: vocal chop",
        "Classic: pitch correction",
        "Classic: hi-hat rolls"
      ],
      "harmony": [
        "Classic: short minor/modal loops",
        "Classic: i-VI-III-VII",
        "Classic: vi-IV-I-V"
      ]
    },
    {
      "id": "playero-underground",
      "name": "Playero / Underground",
      "description": "Playero / Underground: dembow Playero / Underground: 808/sub Playero / Underground: vocal chop Playero / Underground: short minor/modal loops",
      "patterns": [
        "Playero / Underground: dembow",
        "Playero / Underground: 808/sub",
        "Playero / Underground: syncopated vocal pickup"
      ],
      "techniques": [
        "Playero / Underground: vocal chop",
        "Playero / Underground: pitch correction",
        "Playero / Underground: hi-hat rolls"
      ],
      "harmony": [
        "Playero / Underground: short minor/modal loops",
        "Playero / Underground: i-VI-III-VII",
        "Playero / Underground: vi-IV-I-V"
      ]
    },
    {
      "id": "melodic",
      "name": "Melodic",
      "description": "Melodic: dembow Melodic: 808/sub Melodic: vocal chop Melodic: short minor/modal loops",
      "patterns": [
        "Melodic: dembow",
        "Melodic: 808/sub",
        "Melodic: syncopated vocal pickup"
      ],
      "techniques": [
        "Melodic: vocal chop",
        "Melodic: pitch correction",
        "Melodic: hi-hat rolls"
      ],
      "harmony": [
        "Melodic: short minor/modal loops",
        "Melodic: i-VI-III-VII",
        "Melodic: vi-IV-I-V"
      ]
    },
    {
      "id": "neoperreo",
      "name": "Neoperreo",
      "description": "Neoperreo: dembow Neoperreo: 808/sub Neoperreo: vocal chop Neoperreo: short minor/modal loops",
      "patterns": [
        "Neoperreo: dembow",
        "Neoperreo: 808/sub",
        "Neoperreo: syncopated vocal pickup"
      ],
      "techniques": [
        "Neoperreo: vocal chop",
        "Neoperreo: pitch correction",
        "Neoperreo: hi-hat rolls"
      ],
      "harmony": [
        "Neoperreo: short minor/modal loops",
        "Neoperreo: i-VI-III-VII",
        "Neoperreo: vi-IV-I-V"
      ]
    },
    {
      "id": "latin-trap-crossover",
      "name": "Latin Trap Crossover",
      "description": "Latin Trap Crossover: dembow Latin Trap Crossover: 808/sub Latin Trap Crossover: vocal chop Latin Trap Crossover: short minor/modal loops",
      "patterns": [
        "Latin Trap Crossover: dembow",
        "Latin Trap Crossover: 808/sub",
        "Latin Trap Crossover: syncopated vocal pickup"
      ],
      "techniques": [
        "Latin Trap Crossover: vocal chop",
        "Latin Trap Crossover: pitch correction",
        "Latin Trap Crossover: hi-hat rolls"
      ],
      "harmony": [
        "Latin Trap Crossover: short minor/modal loops",
        "Latin Trap Crossover: i-VI-III-VII",
        "Latin Trap Crossover: vi-IV-I-V"
      ]
    },
    {
      "id": "experimental",
      "name": "Experimental",
      "description": "Experimental: dembow Experimental: 808/sub Experimental: vocal chop Experimental: short minor/modal loops",
      "patterns": [
        "Experimental: dembow",
        "Experimental: 808/sub",
        "Experimental: syncopated vocal pickup"
      ],
      "techniques": [
        "Experimental: vocal chop",
        "Experimental: pitch correction",
        "Experimental: hi-hat rolls"
      ],
      "harmony": [
        "Experimental: short minor/modal loops",
        "Experimental: i-VI-III-VII",
        "Experimental: vi-IV-I-V"
      ]
    }
  ]
};
