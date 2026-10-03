import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "swing",
  "name": "Swing",
  "family": "United States / Jazz dance",
  "color": "#ce04e5",
  "description": "Swing is an independent musical world. United States / Jazz dance idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "West Coast Swing",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "trumpet",
    "alto-sax",
    "clarinet",
    "piano",
    "guitar",
    "upright-bass",
    "drums"
  ],
  "roles": {
    "lead": [
      "trumpet",
      "alto-sax",
      "clarinet"
    ],
    "harmony": [
      "piano",
      "guitar"
    ],
    "bass": [
      "upright-bass"
    ],
    "percussion": [
      "drums"
    ]
  },
  "pitchSystem": "12-tet",
  "scales": [
    "dominant sevenths"
  ],
  "chordQualities": [
    "dominant sevenths",
    "ii-V",
    "rhythm changes",
    "blues",
    "diminished passing"
  ],
  "harmonicRhythm": "phrase and section dependent",
  "cadences": [
    "style-specific phrase close"
  ],
  "bassChordInteraction": "Follow the style-specific pulse, harmonic rhythm, and phrase cadence.",
  "patternFamilies": [
    "swung eighths",
    "walking bass",
    "ride pattern",
    "backbeat variants"
  ],
  "techniques": [
    "horn falls",
    "scoops",
    "shakes",
    "guitar chunk",
    "brushed drums"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "west-coast-swing",
      "name": "West Coast Swing",
      "description": "West Coast Swing: swung eighths West Coast Swing: walking bass West Coast Swing: horn falls West Coast Swing: dominant sevenths",
      "patterns": [
        "West Coast Swing: swung eighths",
        "West Coast Swing: walking bass",
        "West Coast Swing: ride pattern"
      ],
      "techniques": [
        "West Coast Swing: horn falls",
        "West Coast Swing: scoops",
        "West Coast Swing: shakes"
      ],
      "harmony": [
        "West Coast Swing: dominant sevenths",
        "West Coast Swing: ii-V",
        "West Coast Swing: rhythm changes"
      ]
    },
    {
      "id": "lindy-hop",
      "name": "Lindy Hop",
      "description": "Lindy Hop: swung eighths Lindy Hop: walking bass Lindy Hop: horn falls Lindy Hop: dominant sevenths",
      "patterns": [
        "Lindy Hop: swung eighths",
        "Lindy Hop: walking bass",
        "Lindy Hop: ride pattern"
      ],
      "techniques": [
        "Lindy Hop: horn falls",
        "Lindy Hop: scoops",
        "Lindy Hop: shakes"
      ],
      "harmony": [
        "Lindy Hop: dominant sevenths",
        "Lindy Hop: ii-V",
        "Lindy Hop: rhythm changes"
      ]
    },
    {
      "id": "balboa",
      "name": "Balboa",
      "description": "Balboa: swung eighths Balboa: walking bass Balboa: horn falls Balboa: dominant sevenths",
      "patterns": [
        "Balboa: swung eighths",
        "Balboa: walking bass",
        "Balboa: ride pattern"
      ],
      "techniques": [
        "Balboa: horn falls",
        "Balboa: scoops",
        "Balboa: shakes"
      ],
      "harmony": [
        "Balboa: dominant sevenths",
        "Balboa: ii-V",
        "Balboa: rhythm changes"
      ]
    },
    {
      "id": "charleston",
      "name": "Charleston",
      "description": "Charleston: swung eighths Charleston: walking bass Charleston: horn falls Charleston: dominant sevenths",
      "patterns": [
        "Charleston: swung eighths",
        "Charleston: walking bass",
        "Charleston: ride pattern"
      ],
      "techniques": [
        "Charleston: horn falls",
        "Charleston: scoops",
        "Charleston: shakes"
      ],
      "harmony": [
        "Charleston: dominant sevenths",
        "Charleston: ii-V",
        "Charleston: rhythm changes"
      ]
    },
    {
      "id": "slow-swing",
      "name": "Slow Swing",
      "description": "Slow Swing: swung eighths Slow Swing: walking bass Slow Swing: horn falls Slow Swing: dominant sevenths",
      "patterns": [
        "Slow Swing: swung eighths",
        "Slow Swing: walking bass",
        "Slow Swing: ride pattern"
      ],
      "techniques": [
        "Slow Swing: horn falls",
        "Slow Swing: scoops",
        "Slow Swing: shakes"
      ],
      "harmony": [
        "Slow Swing: dominant sevenths",
        "Slow Swing: ii-V",
        "Slow Swing: rhythm changes"
      ]
    },
    {
      "id": "electro-swing",
      "name": "Electro-Swing",
      "description": "Electro-Swing: swung eighths Electro-Swing: walking bass Electro-Swing: horn falls Electro-Swing: dominant sevenths",
      "patterns": [
        "Electro-Swing: swung eighths",
        "Electro-Swing: walking bass",
        "Electro-Swing: ride pattern"
      ],
      "techniques": [
        "Electro-Swing: horn falls",
        "Electro-Swing: scoops",
        "Electro-Swing: shakes"
      ],
      "harmony": [
        "Electro-Swing: dominant sevenths",
        "Electro-Swing: ii-V",
        "Electro-Swing: rhythm changes"
      ]
    },
    {
      "id": "fusion-swing",
      "name": "Fusion Swing",
      "description": "Fusion Swing: swung eighths Fusion Swing: walking bass Fusion Swing: horn falls Fusion Swing: dominant sevenths",
      "patterns": [
        "Fusion Swing: swung eighths",
        "Fusion Swing: walking bass",
        "Fusion Swing: ride pattern"
      ],
      "techniques": [
        "Fusion Swing: horn falls",
        "Fusion Swing: scoops",
        "Fusion Swing: shakes"
      ],
      "harmony": [
        "Fusion Swing: dominant sevenths",
        "Fusion Swing: ii-V",
        "Fusion Swing: rhythm changes"
      ]
    }
  ]
};
