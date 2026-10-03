import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "timba",
  "name": "Timba",
  "family": "Cuban / Afro-Cuban",
  "color": "#266417",
  "description": "Timba is an independent musical world. Cuban / Afro-Cuban idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic Timba",
  "meter": "4/4",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "piano",
    "bass",
    "congas",
    "timbales",
    "drums",
    "trumpet",
    "trombone",
    "cowbell"
  ],
  "roles": {
    "lead": [
      "voice",
      "trumpet",
      "trombone"
    ],
    "harmony": [
      "piano"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "congas",
      "timbales",
      "drums",
      "cowbell"
    ]
  },
  "pitchSystem": "12-tet",
  "scales": [
    "major",
    "minor",
    "Dorian",
    "Mixolydian"
  ],
  "chordQualities": [
    "dominant 7/9/13",
    "minor 7/9",
    "altered dominant",
    "quartal"
  ],
  "harmonicRhythm": "gear-dependent; vamp to sectional change",
  "cadences": [
    "gear-ending block",
    "dominant turnaround"
  ],
  "bassChordInteraction": "bass and piano tumbao reset or intensify at gear changes",
  "patternFamilies": [
    "gear change",
    "bomba",
    "presión",
    "bloque",
    "marcha",
    "bass/piano/percussion reconfiguration"
  ],
  "techniques": [
    "gears",
    "bloque unison",
    "presión",
    "sudden dropout",
    "marcha transition",
    "bass tumbao reconfiguration"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "classic-timba",
      "name": "Classic Timba",
      "description": "full gear vocabulary multiple piano/bass patterns per section sudden breakdowns extended dominants",
      "patterns": [
        "full gear vocabulary",
        "multiple piano/bass patterns per section"
      ],
      "techniques": [
        "sudden breakdowns",
        "high-energy horn blocks"
      ],
      "harmony": [
        "extended dominants",
        "chromatic passing harmony",
        "modal gears"
      ]
    },
    {
      "id": "songo",
      "name": "Songo",
      "description": "kit + conga groove more continuous pocket ghosted snare jazz-funk sevenths/ninths",
      "patterns": [
        "kit + conga groove",
        "more continuous pocket"
      ],
      "techniques": [
        "ghosted snare",
        "syncopated kick",
        "funk bass"
      ],
      "harmony": [
        "jazz-funk sevenths/ninths",
        "smoother cycling"
      ]
    },
    {
      "id": "irakere-jazz-funk-precursor",
      "name": "Irakere / Jazz-Funk Precursor",
      "description": "Afro-Cuban jazz/funk complex odd accents virtuosic horn lines modal jazz",
      "patterns": [
        "Afro-Cuban jazz/funk",
        "complex odd accents"
      ],
      "techniques": [
        "virtuosic horn lines",
        "jazz solo articulation"
      ],
      "harmony": [
        "modal jazz",
        "altered dominants",
        "quartal voicings"
      ]
    },
    {
      "id": "ng-la-banda-early-timba",
      "name": "NG La Banda / Early Timba",
      "description": "aggressive horn bloques dense piano very sharp brass attacks sophisticated jazz-derived extensions",
      "patterns": [
        "aggressive horn bloques",
        "dense piano"
      ],
      "techniques": [
        "very sharp brass attacks",
        "virtuosic rhythm-section interplay"
      ],
      "harmony": [
        "sophisticated jazz-derived extensions"
      ]
    },
    {
      "id": "charanga-habanera",
      "name": "Charanga Habanera",
      "description": "extreme gear contrast sudden bombas hard mute/unmute, explosive percussion simpler vamps during high-energy gears, richer harmony elsewhere",
      "patterns": [
        "extreme gear contrast",
        "sudden bombas",
        "displaced bass"
      ],
      "techniques": [
        "hard mute/unmute, explosive percussion"
      ],
      "harmony": [
        "simpler vamps during high-energy gears, richer harmony elsewhere"
      ]
    },
    {
      "id": "bamboleo",
      "name": "Bamboleo",
      "description": "smoother pocket R&B-oriented vocal sections legato vocal backing R&B/jazz sevenths/ninths",
      "patterns": [
        "smoother pocket",
        "R&B-oriented vocal sections"
      ],
      "techniques": [
        "legato vocal backing",
        "polished keyboard voicings"
      ],
      "harmony": [
        "R&B/jazz sevenths/ninths"
      ]
    },
    {
      "id": "paulito-fg",
      "name": "Paulito FG",
      "description": "lyrical verse, complex montuno escalation restrained verse articulation romantic extended harmony + timba dominant vamps",
      "patterns": [
        "lyrical verse, complex montuno escalation"
      ],
      "techniques": [
        "restrained verse articulation",
        "hard coro gear"
      ],
      "harmony": [
        "romantic extended harmony + timba dominant vamps"
      ]
    },
    {
      "id": "manolin",
      "name": "Manolín",
      "description": "hook-heavy coro repetition direct street groove shouted response simpler repetitive harmony",
      "patterns": [
        "hook-heavy coro repetition",
        "direct street groove"
      ],
      "techniques": [
        "shouted response",
        "aggressive percussion"
      ],
      "harmony": [
        "simpler repetitive harmony"
      ]
    },
    {
      "id": "havana-dprimera",
      "name": "Havana D'Primera",
      "description": "polished modern tumbao controlled gears tight brass balanced jazz/salsa vocabulary",
      "patterns": [
        "polished modern tumbao",
        "controlled gears"
      ],
      "techniques": [
        "tight brass",
        "clean piano articulation"
      ],
      "harmony": [
        "balanced jazz/salsa vocabulary"
      ]
    },
    {
      "id": "maykel-blanco",
      "name": "Maykel Blanco",
      "description": "dancer-focused breaks frequent bloques percussion showmanship functional timba with clear tension/release",
      "patterns": [
        "dancer-focused breaks",
        "frequent bloques"
      ],
      "techniques": [
        "percussion showmanship",
        "sharp horn hits"
      ],
      "harmony": [
        "functional timba with clear tension/release"
      ]
    },
    {
      "id": "timba-funk",
      "name": "Timba-Funk",
      "description": "funk pocket + clave-aware percussion guitar muting funk dominant/minor-seventh vamps",
      "patterns": [
        "funk pocket + clave-aware percussion"
      ],
      "techniques": [
        "guitar muting",
        "slap/finger bass",
        "syncopated vocals"
      ],
      "harmony": [
        "funk dominant/minor-seventh vamps"
      ]
    },
    {
      "id": "international-modern-timba",
      "name": "International / Modern Timba",
      "description": "International / Modern Timba: gear change International / Modern Timba: bomba International / Modern Timba: gears International / Modern Timba: salsa-derived functional harmony",
      "patterns": [
        "International / Modern Timba: gear change",
        "International / Modern Timba: bomba",
        "International / Modern Timba: presión"
      ],
      "techniques": [
        "International / Modern Timba: gears",
        "International / Modern Timba: bloque unison",
        "International / Modern Timba: presión"
      ],
      "harmony": [
        "International / Modern Timba: salsa-derived functional harmony",
        "International / Modern Timba: extended jazz harmony",
        "International / Modern Timba: modal montuno"
      ]
    }
  ]
};
