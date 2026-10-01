import type { GenreStyleDefinition, GenreWorld } from '../../schema';


const STYLE_0: GenreStyleDefinition = {
        "id": "timba-timba-habanera",
        "worldId": "timba",
        "name": "Timba Habanera",
        "origin": "Havana, Cuba",
        "era": "1990s–Present",
        "description": "Funk Slap Bass • Gear Shifts",
        "characteristicInstruments": [
          "drums",
          "timbales",
          "congas",
          "bass",
          "piano"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          92,
          108
        ],
        "keySubstyles": [
          "Classic 90s Timba",
          "Songo-Timba"
        ],
        "coreConcepts": [
          "bomba gear shifts with virtuosic slap-bass passages",
          "drum kit and timbales played together by one drummer",
          "two-handed syncopated piano tumbaos",
          "intense call-and-response coros and street slang"
        ],
        "rhythmicGrammar": [
          "dynamic gear shifts: marchando -> pedal -> bomba -> presión with complex polyrhythmic breaks"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Explosive transition into bomba gear: slap-bass slide, conga slap frenzy, and brass shout",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Fm7",
            "Bbm7",
            "C7alt",
            "Fm7"
          ],
          "canto": [
            "Fm7",
            "Bbm7",
            "Eb7",
            "Abmaj7",
            "Dbmaj7",
            "Bbm7",
            "C7",
            "Fm7"
          ],
          "montuno": [
            "Bbm7",
            "C7",
            "Fm7",
            "Fm7"
          ],
          "coda": [
            "Bbm7",
            "C7",
            "Fm7",
            "Fm7"
          ]
        }
      };


const STYLE_1: GenreStyleDefinition = {
        "id": "timba-songo",
        "worldId": "timba",
        "name": "Songo",
        "origin": "Havana, Cuba (Los Van Van)",
        "era": "1970s–1980s",
        "description": "Changuito-inspired drum groove with cowbell.",
        "characteristicInstruments": [
          "drums",
          "congas",
          "bass",
          "piano",
          "flute"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          95,
          115
        ],
        "keySubstyles": [
          "Classic Van Van Songo",
          "Afro-Funk Cuban"
        ],
        "coreConcepts": [
          "Changuito innovative hybrid drum kit and timbale rhythm",
          "linear cowbell and woodblock patterns",
          "syncopated electric bass playing around the downbeat",
          "charanga flute blending with brass and electronics"
        ],
        "rhythmicGrammar": [
          "songo linear drum pattern with bass drum on 1, 1-and-a, 3 and continuous cowbell syncopation"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Changuito songo drum-kit groove locking with syncopated electric bass and charanga flute",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Gm7",
            "C7",
            "Gm7",
            "C7"
          ],
          "groove": [
            "Gm7",
            "C7",
            "Gm7",
            "C7",
            "Fmaj7",
            "Bbmaj7",
            "A7",
            "D7"
          ],
          "coda": [
            "Gm7",
            "C7",
            "Gm7",
            "Gm7"
          ]
        }
      };


const EXPANSION_STYLE_0: GenreStyleDefinition = {
  "id": "timba-son-montuno-timba",
  "worldId": "timba",
  "name": "Son-Montuno Timba",
  "origin": "Cuba",
  "era": "1990s–Present",
  "description": "Son-derived montuno and coro structures intensified through modern horns and rhythm-section changes.",
  "characteristicInstruments": [
    "piano",
    "bass",
    "congas",
    "timbales",
    "brass",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    90,
    115
  ],
  "keySubstyles": [
    "Son-Montuno Timba"
  ],
  "coreConcepts": [
    "montuno",
    "coro/pregón",
    "horn block",
    "clave displacement"
  ],
  "rhythmicGrammar": [
    "Montuno with modern horn blocks"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Montuno with modern horn blocks",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "G7",
    "Cmaj7",
    "E7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "verse": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "chorus": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "bridge": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "solo": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "coda": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ]
  },
  "referenceArtists": [
    "NG La Banda"
  ],
  "referenceTracks": [],
  "techniques": [
    "clave displacement",
    "horn block",
    "coro/pregón",
    "timba bass anticipation",
    "timba piano tumbao"
  ]
};


const EXPANSION_STYLE_1: GenreStyleDefinition = {
  "id": "timba-los-van-van-songo",
  "worldId": "timba",
  "name": "Los Van Van Songo",
  "origin": "Cuba",
  "era": "1970s–Present",
  "description": "Songo architecture built from interacting bass, drums, percussion and keyboard parts.",
  "characteristicInstruments": [
    "bass",
    "drums",
    "piano",
    "congas",
    "timbales",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    90,
    120
  ],
  "keySubstyles": [
    "Los Van Van Songo"
  ],
  "coreConcepts": [
    "songo",
    "bass tumbao",
    "keyboard interlock",
    "percussion interaction"
  ],
  "rhythmicGrammar": [
    "Songo bass and keyboard interlock"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Songo bass and keyboard interlock",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "G7",
    "Cmaj7",
    "E7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "verse": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "chorus": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "bridge": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "solo": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "coda": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ]
  },
  "referenceArtists": [
    "Los Van Van"
  ],
  "referenceTracks": [
    "Sandunguera"
  ],
  "techniques": [
    "songo",
    "percussion cascade",
    "timba bass anticipation",
    "timba piano tumbao"
  ]
};


const EXPANSION_STYLE_2: GenreStyleDefinition = {
  "id": "timba-timba-aggression",
  "worldId": "timba",
  "name": "Timba Aggression",
  "origin": "Cuba",
  "era": "1990s–Present",
  "description": "Dense rhythmic breaks, aggressive bass movement, horn blocks, percussion cascades and sudden density changes.",
  "characteristicInstruments": [
    "bass",
    "piano",
    "congas",
    "timbales",
    "brass",
    "drums"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    95,
    125
  ],
  "keySubstyles": [
    "Timba Aggression"
  ],
  "coreConcepts": [
    "masacote",
    "percussion cascade",
    "density switch",
    "gear change"
  ],
  "rhythmicGrammar": [
    "Dense timba gear change and break"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Dense timba gear change and break",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "G7",
    "Cmaj7",
    "E7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "verse": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "chorus": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "bridge": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "solo": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "coda": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ]
  },
  "referenceArtists": [
    "Havana D'Primera"
  ],
  "referenceTracks": [],
  "techniques": [
    "density switch",
    "percussion cascade",
    "masacote",
    "rhythmic gear change",
    "bomba break",
    "timba bass anticipation"
  ]
};


const EXPANSION_STYLE_3: GenreStyleDefinition = {
  "id": "timba-timba-piano-tumbao",
  "worldId": "timba",
  "name": "Timba Piano-Tumbao",
  "origin": "Cuba",
  "era": "1990s–Present",
  "description": "Highly syncopated piano patterns interact independently with bass and percussion.",
  "characteristicInstruments": [
    "piano",
    "bass",
    "congas",
    "timbales",
    "brass"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    90,
    120
  ],
  "keySubstyles": [
    "Timba Piano-Tumbao"
  ],
  "coreConcepts": [
    "piano tumbao",
    "bass anticipation",
    "clave displacement"
  ],
  "rhythmicGrammar": [
    "Independent piano tumbao over bass"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Independent piano tumbao over bass",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "G7",
    "Cmaj7",
    "E7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "verse": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "chorus": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "bridge": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "solo": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ],
    "coda": [
      "Am7",
      "G7",
      "Cmaj7",
      "E7"
    ]
  },
  "referenceArtists": [
    "César Pupy Pedroso"
  ],
  "referenceTracks": [],
  "techniques": [
    "timba piano tumbao",
    "clave displacement",
    "timba bass anticipation"
  ]
};

export const TIMBA_WORLD_STYLES: Partial<GenreWorld> = { styleDefinitions: [STYLE_0, STYLE_1, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3] };
