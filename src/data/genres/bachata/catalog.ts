import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "bachata",
  "name": "Bachata",
  "family": "Bachata",
  "color": "#eec4ab",
  "description": "Bachata is an independent musical world. Bachata idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Dominican",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "requinto",
    "guitar",
    "bass",
    "bongos",
    "guira"
  ],
  "roles": {
    "lead": [
      "requinto",
      "voice"
    ],
    "harmony": [
      "guitar"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "bongos",
      "guira"
    ]
  },
  "pitchSystem": "12-tet",
  "scales": [
    "diatonic major/minor"
  ],
  "chordQualities": [
    "diatonic major/minor",
    "secondary dominants",
    "bolero cadences"
  ],
  "harmonicRhythm": "phrase and section dependent",
  "cadences": [
    "bolero cadences"
  ],
  "bassChordInteraction": "Follow the style-specific pulse, harmonic rhythm, and phrase cadence.",
  "patternFamilies": [
    "requinto fills",
    "segunda syncopation",
    "bongó martillo",
    "güira",
    "anticipated bass"
  ],
  "techniques": [
    "guitar slides, hammer-ons, pull-offs, tremolo, arpeggio"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "dominican",
      "name": "Dominican",
      "description": "Dominican: requinto fills Dominican: segunda syncopation Dominican: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio Dominican: diatonic major/minor",
      "patterns": [
        "Dominican: requinto fills",
        "Dominican: segunda syncopation",
        "Dominican: bongó martillo"
      ],
      "techniques": [
        "Dominican: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio"
      ],
      "harmony": [
        "Dominican: diatonic major/minor",
        "Dominican: secondary dominants",
        "Dominican: bolero cadences"
      ]
    },
    {
      "id": "amargue",
      "name": "Amargue",
      "description": "Amargue: requinto fills Amargue: segunda syncopation Amargue: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio Amargue: diatonic major/minor",
      "patterns": [
        "Amargue: requinto fills",
        "Amargue: segunda syncopation",
        "Amargue: bongó martillo"
      ],
      "techniques": [
        "Amargue: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio"
      ],
      "harmony": [
        "Amargue: diatonic major/minor",
        "Amargue: secondary dominants",
        "Amargue: bolero cadences"
      ]
    },
    {
      "id": "traditional-bolero-bachata",
      "name": "Traditional / Bolero Bachata",
      "description": "Traditional / Bolero Bachata: requinto fills Traditional / Bolero Bachata: segunda syncopation Traditional / Bolero Bachata: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio Traditional / Bolero Bachata: diatonic major/minor",
      "patterns": [
        "Traditional / Bolero Bachata: requinto fills",
        "Traditional / Bolero Bachata: segunda syncopation",
        "Traditional / Bolero Bachata: bongó martillo"
      ],
      "techniques": [
        "Traditional / Bolero Bachata: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio"
      ],
      "harmony": [
        "Traditional / Bolero Bachata: diatonic major/minor",
        "Traditional / Bolero Bachata: secondary dominants",
        "Traditional / Bolero Bachata: bolero cadences"
      ]
    },
    {
      "id": "moderna",
      "name": "Moderna",
      "description": "Moderna: requinto fills Moderna: segunda syncopation Moderna: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio Moderna: diatonic major/minor",
      "patterns": [
        "Moderna: requinto fills",
        "Moderna: segunda syncopation",
        "Moderna: bongó martillo"
      ],
      "techniques": [
        "Moderna: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio"
      ],
      "harmony": [
        "Moderna: diatonic major/minor",
        "Moderna: secondary dominants",
        "Moderna: bolero cadences"
      ]
    },
    {
      "id": "sensual",
      "name": "Sensual",
      "description": "Sensual: requinto fills Sensual: segunda syncopation Sensual: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio Sensual: diatonic major/minor",
      "patterns": [
        "Sensual: requinto fills",
        "Sensual: segunda syncopation",
        "Sensual: bongó martillo"
      ],
      "techniques": [
        "Sensual: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio"
      ],
      "harmony": [
        "Sensual: diatonic major/minor",
        "Sensual: secondary dominants",
        "Sensual: bolero cadences"
      ]
    },
    {
      "id": "bachata-mambo",
      "name": "Bachata Mambo",
      "description": "Bachata Mambo: requinto fills Bachata Mambo: segunda syncopation Bachata Mambo: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio Bachata Mambo: diatonic major/minor",
      "patterns": [
        "Bachata Mambo: requinto fills",
        "Bachata Mambo: segunda syncopation",
        "Bachata Mambo: bongó martillo"
      ],
      "techniques": [
        "Bachata Mambo: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio"
      ],
      "harmony": [
        "Bachata Mambo: diatonic major/minor",
        "Bachata Mambo: secondary dominants",
        "Bachata Mambo: bolero cadences"
      ]
    },
    {
      "id": "urban",
      "name": "Urban",
      "description": "Urban: requinto fills Urban: segunda syncopation Urban: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio Urban: diatonic major/minor",
      "patterns": [
        "Urban: requinto fills",
        "Urban: segunda syncopation",
        "Urban: bongó martillo"
      ],
      "techniques": [
        "Urban: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio"
      ],
      "harmony": [
        "Urban: diatonic major/minor",
        "Urban: secondary dominants",
        "Urban: bolero cadences"
      ]
    },
    {
      "id": "fusion",
      "name": "Fusion",
      "description": "Fusion: requinto fills Fusion: segunda syncopation Fusion: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio Fusion: diatonic major/minor",
      "patterns": [
        "Fusion: requinto fills",
        "Fusion: segunda syncopation",
        "Fusion: bongó martillo"
      ],
      "techniques": [
        "Fusion: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio"
      ],
      "harmony": [
        "Fusion: diatonic major/minor",
        "Fusion: secondary dominants",
        "Fusion: bolero cadences"
      ]
    }
  ]
};
