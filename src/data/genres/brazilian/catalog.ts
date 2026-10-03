import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "brazilian",
  "name": "Brazilian",
  "family": "Brazil",
  "color": "#cd94ad",
  "description": "Brazilian is an independent musical world. Brazil idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Samba",
  "meter": "2/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "guitar",
    "cavaquinho",
    "bass",
    "surdo",
    "pandeiro",
    "tamborim",
    "agogo",
    "flute"
  ],
  "roles": {
    "lead": [
      "voice",
      "flute"
    ],
    "harmony": [
      "guitar",
      "cavaquinho"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "surdo",
      "pandeiro",
      "tamborim",
      "agogo"
    ]
  },
  "pitchSystem": "12-tet",
  "scales": [
    "extended functional harmony"
  ],
  "chordQualities": [
    "extended functional harmony",
    "secondary dominants",
    "diminished passing",
    "chromatic bass"
  ],
  "harmonicRhythm": "phrase and section dependent",
  "cadences": [
    "style-specific phrase close"
  ],
  "bassChordInteraction": "Follow the style-specific pulse, harmonic rhythm, and phrase cadence.",
  "patternFamilies": [
    "partido-alto syncopation",
    "samba surdo/tamborim/agogo",
    "guitar syncopation"
  ],
  "techniques": [
    "cavaquinho strum",
    "nylon guitar fingerstyle",
    "pandeiro articulation"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "samba",
      "name": "Samba",
      "description": "Samba: partido-alto syncopation Samba: samba surdo/tamborim/agogo Samba: cavaquinho strum Samba: extended functional harmony",
      "patterns": [
        "Samba: partido-alto syncopation",
        "Samba: samba surdo/tamborim/agogo",
        "Samba: guitar syncopation"
      ],
      "techniques": [
        "Samba: cavaquinho strum",
        "Samba: nylon guitar fingerstyle",
        "Samba: pandeiro articulation"
      ],
      "harmony": [
        "Samba: extended functional harmony",
        "Samba: secondary dominants",
        "Samba: diminished passing"
      ]
    },
    {
      "id": "bossa-nova",
      "name": "Bossa Nova",
      "description": "Bossa Nova: partido-alto syncopation Bossa Nova: samba surdo/tamborim/agogo Bossa Nova: cavaquinho strum Bossa Nova: extended functional harmony",
      "patterns": [
        "Bossa Nova: partido-alto syncopation",
        "Bossa Nova: samba surdo/tamborim/agogo",
        "Bossa Nova: guitar syncopation"
      ],
      "techniques": [
        "Bossa Nova: cavaquinho strum",
        "Bossa Nova: nylon guitar fingerstyle",
        "Bossa Nova: pandeiro articulation"
      ],
      "harmony": [
        "Bossa Nova: extended functional harmony",
        "Bossa Nova: secondary dominants",
        "Bossa Nova: diminished passing"
      ]
    },
    {
      "id": "pagode",
      "name": "Pagode",
      "description": "Pagode: partido-alto syncopation Pagode: samba surdo/tamborim/agogo Pagode: cavaquinho strum Pagode: extended functional harmony",
      "patterns": [
        "Pagode: partido-alto syncopation",
        "Pagode: samba surdo/tamborim/agogo",
        "Pagode: guitar syncopation"
      ],
      "techniques": [
        "Pagode: cavaquinho strum",
        "Pagode: nylon guitar fingerstyle",
        "Pagode: pandeiro articulation"
      ],
      "harmony": [
        "Pagode: extended functional harmony",
        "Pagode: secondary dominants",
        "Pagode: diminished passing"
      ]
    },
    {
      "id": "partido-alto",
      "name": "Partido Alto",
      "description": "Partido Alto: partido-alto syncopation Partido Alto: samba surdo/tamborim/agogo Partido Alto: cavaquinho strum Partido Alto: extended functional harmony",
      "patterns": [
        "Partido Alto: partido-alto syncopation",
        "Partido Alto: samba surdo/tamborim/agogo",
        "Partido Alto: guitar syncopation"
      ],
      "techniques": [
        "Partido Alto: cavaquinho strum",
        "Partido Alto: nylon guitar fingerstyle",
        "Partido Alto: pandeiro articulation"
      ],
      "harmony": [
        "Partido Alto: extended functional harmony",
        "Partido Alto: secondary dominants",
        "Partido Alto: diminished passing"
      ]
    },
    {
      "id": "samba-de-roda",
      "name": "Samba de Roda",
      "description": "Samba de Roda: partido-alto syncopation Samba de Roda: samba surdo/tamborim/agogo Samba de Roda: cavaquinho strum Samba de Roda: extended functional harmony",
      "patterns": [
        "Samba de Roda: partido-alto syncopation",
        "Samba de Roda: samba surdo/tamborim/agogo",
        "Samba de Roda: guitar syncopation"
      ],
      "techniques": [
        "Samba de Roda: cavaquinho strum",
        "Samba de Roda: nylon guitar fingerstyle",
        "Samba de Roda: pandeiro articulation"
      ],
      "harmony": [
        "Samba de Roda: extended functional harmony",
        "Samba de Roda: secondary dominants",
        "Samba de Roda: diminished passing"
      ]
    },
    {
      "id": "forro",
      "name": "Forró",
      "description": "Forró: partido-alto syncopation Forró: samba surdo/tamborim/agogo Forró: cavaquinho strum Forró: extended functional harmony",
      "patterns": [
        "Forró: partido-alto syncopation",
        "Forró: samba surdo/tamborim/agogo",
        "Forró: guitar syncopation"
      ],
      "techniques": [
        "Forró: cavaquinho strum",
        "Forró: nylon guitar fingerstyle",
        "Forró: pandeiro articulation"
      ],
      "harmony": [
        "Forró: extended functional harmony",
        "Forró: secondary dominants",
        "Forró: diminished passing"
      ]
    },
    {
      "id": "baiao",
      "name": "Baião",
      "description": "Baião: partido-alto syncopation Baião: samba surdo/tamborim/agogo Baião: cavaquinho strum Baião: extended functional harmony",
      "patterns": [
        "Baião: partido-alto syncopation",
        "Baião: samba surdo/tamborim/agogo",
        "Baião: guitar syncopation"
      ],
      "techniques": [
        "Baião: cavaquinho strum",
        "Baião: nylon guitar fingerstyle",
        "Baião: pandeiro articulation"
      ],
      "harmony": [
        "Baião: extended functional harmony",
        "Baião: secondary dominants",
        "Baião: diminished passing"
      ]
    },
    {
      "id": "xote",
      "name": "Xote",
      "description": "Xote: partido-alto syncopation Xote: samba surdo/tamborim/agogo Xote: cavaquinho strum Xote: extended functional harmony",
      "patterns": [
        "Xote: partido-alto syncopation",
        "Xote: samba surdo/tamborim/agogo",
        "Xote: guitar syncopation"
      ],
      "techniques": [
        "Xote: cavaquinho strum",
        "Xote: nylon guitar fingerstyle",
        "Xote: pandeiro articulation"
      ],
      "harmony": [
        "Xote: extended functional harmony",
        "Xote: secondary dominants",
        "Xote: diminished passing"
      ]
    },
    {
      "id": "mpb",
      "name": "MPB",
      "description": "MPB: partido-alto syncopation MPB: samba surdo/tamborim/agogo MPB: cavaquinho strum MPB: extended functional harmony",
      "patterns": [
        "MPB: partido-alto syncopation",
        "MPB: samba surdo/tamborim/agogo",
        "MPB: guitar syncopation"
      ],
      "techniques": [
        "MPB: cavaquinho strum",
        "MPB: nylon guitar fingerstyle",
        "MPB: pandeiro articulation"
      ],
      "harmony": [
        "MPB: extended functional harmony",
        "MPB: secondary dominants",
        "MPB: diminished passing"
      ]
    },
    {
      "id": "samba-reggae",
      "name": "Samba-Reggae",
      "description": "Samba-Reggae: partido-alto syncopation Samba-Reggae: samba surdo/tamborim/agogo Samba-Reggae: cavaquinho strum Samba-Reggae: extended functional harmony",
      "patterns": [
        "Samba-Reggae: partido-alto syncopation",
        "Samba-Reggae: samba surdo/tamborim/agogo",
        "Samba-Reggae: guitar syncopation"
      ],
      "techniques": [
        "Samba-Reggae: cavaquinho strum",
        "Samba-Reggae: nylon guitar fingerstyle",
        "Samba-Reggae: pandeiro articulation"
      ],
      "harmony": [
        "Samba-Reggae: extended functional harmony",
        "Samba-Reggae: secondary dominants",
        "Samba-Reggae: diminished passing"
      ]
    },
    {
      "id": "samba-rock",
      "name": "Samba-Rock",
      "description": "Samba-Rock: partido-alto syncopation Samba-Rock: samba surdo/tamborim/agogo Samba-Rock: cavaquinho strum Samba-Rock: extended functional harmony",
      "patterns": [
        "Samba-Rock: partido-alto syncopation",
        "Samba-Rock: samba surdo/tamborim/agogo",
        "Samba-Rock: guitar syncopation"
      ],
      "techniques": [
        "Samba-Rock: cavaquinho strum",
        "Samba-Rock: nylon guitar fingerstyle",
        "Samba-Rock: pandeiro articulation"
      ],
      "harmony": [
        "Samba-Rock: extended functional harmony",
        "Samba-Rock: secondary dominants",
        "Samba-Rock: diminished passing"
      ]
    }
  ]
};
