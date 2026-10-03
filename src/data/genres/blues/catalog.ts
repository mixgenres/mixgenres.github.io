import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "blues",
  "name": "Blues",
  "family": "African American / United States",
  "color": "#3a61b7",
  "description": "Blues is an independent musical world. African American / United States idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Modern Blues",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "guitar",
    "harmonica",
    "voice",
    "piano",
    "bass",
    "upright-bass",
    "drums"
  ],
  "roles": {
    "lead": [
      "guitar",
      "harmonica",
      "voice"
    ],
    "harmony": [
      "piano"
    ],
    "bass": [
      "bass",
      "upright-bass"
    ],
    "percussion": [
      "drums"
    ]
  },
  "pitchSystem": "12-tet",
  "scales": [
    "I7-IV7-V7"
  ],
  "chordQualities": [
    "I7-IV7-V7",
    "minor blues",
    "quick IV",
    "secondary dominants",
    "diminished turnaround"
  ],
  "harmonicRhythm": "phrase and section dependent",
  "cadences": [
    "diminished turnaround"
  ],
  "bassChordInteraction": "Follow the style-specific pulse, harmonic rhythm, and phrase cadence.",
  "patternFamilies": [
    "shuffle",
    "straight eighth blues",
    "boogie",
    "stop-time",
    "turnaround"
  ],
  "techniques": [
    "bends",
    "slides",
    "vibrato",
    "blue-note inflection",
    "call-response"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "modern-blues",
      "name": "Modern Blues",
      "description": "Modern Blues: shuffle Modern Blues: straight eighth blues Modern Blues: bends Modern Blues: I7-IV7-V7",
      "patterns": [
        "Modern Blues: shuffle",
        "Modern Blues: straight eighth blues",
        "Modern Blues: boogie"
      ],
      "techniques": [
        "Modern Blues: bends",
        "Modern Blues: slides",
        "Modern Blues: vibrato"
      ],
      "harmony": [
        "Modern Blues: I7-IV7-V7",
        "Modern Blues: minor blues",
        "Modern Blues: quick IV"
      ]
    },
    {
      "id": "delta",
      "name": "Delta",
      "description": "Delta: shuffle Delta: straight eighth blues Delta: bends Delta: I7-IV7-V7",
      "patterns": [
        "Delta: shuffle",
        "Delta: straight eighth blues",
        "Delta: boogie"
      ],
      "techniques": [
        "Delta: bends",
        "Delta: slides",
        "Delta: vibrato"
      ],
      "harmony": [
        "Delta: I7-IV7-V7",
        "Delta: minor blues",
        "Delta: quick IV"
      ]
    },
    {
      "id": "chicago",
      "name": "Chicago",
      "description": "Chicago: shuffle Chicago: straight eighth blues Chicago: bends Chicago: I7-IV7-V7",
      "patterns": [
        "Chicago: shuffle",
        "Chicago: straight eighth blues",
        "Chicago: boogie"
      ],
      "techniques": [
        "Chicago: bends",
        "Chicago: slides",
        "Chicago: vibrato"
      ],
      "harmony": [
        "Chicago: I7-IV7-V7",
        "Chicago: minor blues",
        "Chicago: quick IV"
      ]
    },
    {
      "id": "texas",
      "name": "Texas",
      "description": "Texas: shuffle Texas: straight eighth blues Texas: bends Texas: I7-IV7-V7",
      "patterns": [
        "Texas: shuffle",
        "Texas: straight eighth blues",
        "Texas: boogie"
      ],
      "techniques": [
        "Texas: bends",
        "Texas: slides",
        "Texas: vibrato"
      ],
      "harmony": [
        "Texas: I7-IV7-V7",
        "Texas: minor blues",
        "Texas: quick IV"
      ]
    },
    {
      "id": "piedmont",
      "name": "Piedmont",
      "description": "Piedmont: shuffle Piedmont: straight eighth blues Piedmont: bends Piedmont: I7-IV7-V7",
      "patterns": [
        "Piedmont: shuffle",
        "Piedmont: straight eighth blues",
        "Piedmont: boogie"
      ],
      "techniques": [
        "Piedmont: bends",
        "Piedmont: slides",
        "Piedmont: vibrato"
      ],
      "harmony": [
        "Piedmont: I7-IV7-V7",
        "Piedmont: minor blues",
        "Piedmont: quick IV"
      ]
    },
    {
      "id": "hill-country",
      "name": "Hill Country",
      "description": "Hill Country: shuffle Hill Country: straight eighth blues Hill Country: bends Hill Country: I7-IV7-V7",
      "patterns": [
        "Hill Country: shuffle",
        "Hill Country: straight eighth blues",
        "Hill Country: boogie"
      ],
      "techniques": [
        "Hill Country: bends",
        "Hill Country: slides",
        "Hill Country: vibrato"
      ],
      "harmony": [
        "Hill Country: I7-IV7-V7",
        "Hill Country: minor blues",
        "Hill Country: quick IV"
      ]
    },
    {
      "id": "slow-blues",
      "name": "Slow Blues",
      "description": "Slow Blues: shuffle Slow Blues: straight eighth blues Slow Blues: bends Slow Blues: I7-IV7-V7",
      "patterns": [
        "Slow Blues: shuffle",
        "Slow Blues: straight eighth blues",
        "Slow Blues: boogie"
      ],
      "techniques": [
        "Slow Blues: bends",
        "Slow Blues: slides",
        "Slow Blues: vibrato"
      ],
      "harmony": [
        "Slow Blues: I7-IV7-V7",
        "Slow Blues: minor blues",
        "Slow Blues: quick IV"
      ]
    },
    {
      "id": "blues-fusion",
      "name": "Blues Fusion",
      "description": "Blues Fusion: shuffle Blues Fusion: straight eighth blues Blues Fusion: bends Blues Fusion: I7-IV7-V7",
      "patterns": [
        "Blues Fusion: shuffle",
        "Blues Fusion: straight eighth blues",
        "Blues Fusion: boogie"
      ],
      "techniques": [
        "Blues Fusion: bends",
        "Blues Fusion: slides",
        "Blues Fusion: vibrato"
      ],
      "harmony": [
        "Blues Fusion: I7-IV7-V7",
        "Blues Fusion: minor blues",
        "Blues Fusion: quick IV"
      ]
    }
  ]
};
