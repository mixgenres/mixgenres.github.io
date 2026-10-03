import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "zouk",
  "name": "Zouk",
  "family": "French Caribbean",
  "color": "#bc1267",
  "description": "Zouk is an independent musical world. French Caribbean idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Zouk Love",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "synth",
    "guitar",
    "bass",
    "drums",
    "shaker"
  ],
  "roles": {
    "lead": [
      "voice",
      "synth"
    ],
    "harmony": [
      "guitar",
      "synth"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "drums",
      "shaker"
    ]
  },
  "pitchSystem": "12-tet",
  "scales": [
    "major",
    "minor",
    "Dorian"
  ],
  "chordQualities": [
    "minor 7",
    "major 7",
    "add9",
    "sus2",
    "sus4",
    "dominant 9"
  ],
  "harmonicRhythm": "slow-to-medium; section-led",
  "cadences": [
    "soft dominant resolution",
    "loop return"
  ],
  "bassChordInteraction": "smooth bass roots, inversions, and anticipations",
  "patternFamilies": [
    "syncopated kick/snare",
    "flowing bass",
    "keyboard arpeggio",
    "continuous phrase motion"
  ],
  "techniques": [
    "legato synth swell",
    "vocal melisma",
    "ghost percussion",
    "filtered fill",
    "smooth keyboard voicing"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "zouk-love",
      "name": "Zouk Love",
      "description": "slow continuous groove slow groove + string countermelody sustained keys romantic extended chords",
      "patterns": [
        "slow continuous groove",
        "slow groove + string countermelody"
      ],
      "techniques": [
        "sustained keys",
        "soft vocal phrasing",
        "sweeping strings",
        "melodic fills"
      ],
      "harmony": [
        "romantic extended chords",
        "slow harmonic rhythm",
        "maj7/min9/add9",
        "chromatic passing chords"
      ]
    },
    {
      "id": "zouk-beton",
      "name": "Zouk Béton",
      "description": "faster denser percussion stronger synth/brass stabs simpler repetitive dance cycles",
      "patterns": [
        "faster denser percussion"
      ],
      "techniques": [
        "stronger synth/brass stabs"
      ],
      "harmony": [
        "simpler repetitive dance cycles"
      ]
    },
    {
      "id": "orchestral-zouk-love",
      "name": "Orchestral Zouk Love",
      "description": "slow continuous groove slow groove + string countermelody sustained keys romantic extended chords",
      "patterns": [
        "slow continuous groove",
        "slow groove + string countermelody"
      ],
      "techniques": [
        "sustained keys",
        "soft vocal phrasing",
        "sweeping strings",
        "melodic fills"
      ],
      "harmony": [
        "romantic extended chords",
        "slow harmonic rhythm",
        "maj7/min9/add9",
        "chromatic passing chords"
      ]
    },
    {
      "id": "cabo-zouk",
      "name": "Cabo-Zouk",
      "description": "softer programmed rhythm Lusophone vocal ornament R&B-derived seventh/ninth voicings",
      "patterns": [
        "softer programmed rhythm"
      ],
      "techniques": [
        "Lusophone vocal ornament"
      ],
      "harmony": [
        "R&B-derived seventh/ninth voicings"
      ]
    },
    {
      "id": "ghetto-zouk",
      "name": "Ghetto Zouk",
      "description": "programmed urban drums sub-bass vocal layering modern R&B loops",
      "patterns": [
        "programmed urban drums",
        "sub-bass"
      ],
      "techniques": [
        "vocal layering",
        "electronic fills"
      ],
      "harmony": [
        "modern R&B loops"
      ]
    },
    {
      "id": "zouk-randb",
      "name": "Zouk R&B",
      "description": "zouk pulse + R&B drum phrasing melisma min9/maj9/sus/add9",
      "patterns": [
        "zouk pulse + R&B drum phrasing"
      ],
      "techniques": [
        "melisma",
        "synth pad swells"
      ],
      "harmony": [
        "min9/maj9/sus/add9"
      ]
    },
    {
      "id": "afro-zouk",
      "name": "Afro-Zouk",
      "description": "African guitar/percussion overlay guitar arpeggio repeating pop/African cycles",
      "patterns": [
        "African guitar/percussion overlay"
      ],
      "techniques": [
        "guitar arpeggio",
        "vocal call-response"
      ],
      "harmony": [
        "repeating pop/African cycles"
      ]
    },
    {
      "id": "kompa-crossover",
      "name": "Kompa Crossover",
      "description": "guitar ostinato steady kick/snare clean guitar picking diatonic extended chords",
      "patterns": [
        "guitar ostinato",
        "steady kick/snare"
      ],
      "techniques": [
        "clean guitar picking",
        "keyboard fills"
      ],
      "harmony": [
        "diatonic extended chords"
      ]
    },
    {
      "id": "zouk-fusion",
      "name": "Zouk Fusion",
      "description": "broken beat atmospheric pauses reverb swells suspended/modal pads",
      "patterns": [
        "broken beat",
        "atmospheric pauses"
      ],
      "techniques": [
        "reverb swells",
        "granular vocals",
        "filtered percussion"
      ],
      "harmony": [
        "suspended/modal pads",
        "slow bass movement"
      ]
    },
    {
      "id": "lambazouk-oriented",
      "name": "Lambazouk-Oriented",
      "description": "faster continuous dance groove bright percussion simple major/minor dance loops",
      "patterns": [
        "faster continuous dance groove"
      ],
      "techniques": [
        "bright percussion",
        "rolling guitar/keys"
      ],
      "harmony": [
        "simple major/minor dance loops"
      ]
    }
  ]
};
