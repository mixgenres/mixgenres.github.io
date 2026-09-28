import type { GenreWorld } from '../../types';

export const SWING_WORLD: GenreWorld = {
  "id": "swing",
  "name": "Swing",
  "family": "Jazz / Big Band",
  "color": "#ECD5BB",
  "level": "world",
  "description": "Big Band and Small Group Swing",
  "styleDefinitions": [
    {
      "id": "swing-big-band-swing",
      "worldId": "swing",
      "name": "Big Band Swing",
      "origin": "New York / Kansas City / Chicago",
      "era": "1930s–1940s",
      "description": "Four-on-the-Floor • Horn Riffs • Lindy",
      "characteristicInstruments": [
        "brass",
        "clarinet",
        "piano",
        "upright-bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        140,
        185
      ],
      "keySubstyles": [
        "Kansas City Swing",
        "Harlem Big Band"
      ],
      "coreConcepts": [
        "driving four-on-the-floor bass drum pulse and Freddie Green acoustic guitar chomp",
        "call-and-response horn section riffs (trumpets vs reeds)",
        "virtuosic clarinet and saxophone improvisations",
        "high-flying Lindy Hop dance energy"
      ],
      "rhythmicGrammar": [
        "shuffled ride cymbal [ding-spang-a-lang] over unamplified acoustic four-beat rhythm section"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Benny Goodman soaring clarinet glissando over swinging big band brass shout chorus and ride cymbal",
      "grooveMechanics": {
        "swingPercentage": 62,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Bb",
          "G7",
          "Cm7",
          "F7"
        ],
        "chorus": [
          "Bb",
          "Eb7",
          "Bb",
          "Bb7",
          "Eb7",
          "Ebm7",
          "Bb",
          "G7",
          "Cm7",
          "F7",
          "Bb",
          "F7"
        ],
        "coda": [
          "Cm7",
          "F7",
          "Bb",
          "Bb"
        ]
      }
    },
    {
      "id": "swing-gypsy-jazz",
      "worldId": "swing",
      "name": "Gypsy Jazz (Manouche)",
      "origin": "Paris, France",
      "era": "1930s–1950s",
      "description": "La Pompe • Selmer Guitars •",
      "characteristicInstruments": [
        "acoustic-guitar",
        "violin",
        "upright-bass",
        "clarinet",
        "alto-sax"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        160,
        240
      ],
      "keySubstyles": [
        "Jazz Manouche",
        "Swing Parisien"
      ],
      "coreConcepts": [
        "\"La Pompe\" percussive acoustic rhythm guitar strumming (dry bass hit on 1 & 3, crisp chop on 2 & 4)",
        "dazzling chromatic two-finger Django guitar solos",
        "soaring romantic violin phrasing (Stéphane Grappelli)",
        "purely acoustic string ensemble format without drums"
      ],
      "rhythmicGrammar": [
        "La Pompe: [bass-downbeat, crisp-chop-backbeat] driving relentlessly at blazing tempos"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Dazzling Django chromatic guitar arpeggio flying over relentless La Pompe rhythm guitar chop",
      "grooveMechanics": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "E7",
          "Am",
          "E7"
        ],
        "theme": [
          "Am",
          "Dm",
          "E7",
          "Am",
          "C",
          "G7",
          "C",
          "E7",
          "Am",
          "Dm",
          "E7",
          "Am"
        ],
        "bridge": [
          "A7",
          "Dm",
          "G7",
          "C",
          "B7",
          "E7",
          "Am",
          "E7"
        ],
        "coda": [
          "Dm",
          "E7",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "swing-jump-blues",
      "worldId": "swing",
      "name": "Jump Blues",
      "origin": "Los Angeles / Kansas City",
      "era": "Late 1940s–1950s",
      "description": "Honking Tenor Sax • Boogying Bass",
      "characteristicInstruments": [
        "tenor-sax",
        "brass",
        "piano",
        "upright-bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        135,
        175
      ],
      "keySubstyles": [
        "Proto-Rock and Roll",
        "Jumpin' Swing"
      ],
      "coreConcepts": [
        "honking, screaming tenor saxophone solos and riffs",
        "shuffled boogie-woogie piano and walking basslines",
        "humorous, energetic shouted vocal storytelling",
        "proto-rock rhythmic power"
      ],
      "rhythmicGrammar": [
        "fast swinging 12-bar blues shuffle with aggressive backbeat snare rimshots on 2 and 4"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Honking tenor saxophone squeal over roaring boogie-woogie piano shuffle and jump blues shout",
      "grooveMechanics": {
        "swingPercentage": 60,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "C7",
          "G",
          "D7"
        ],
        "blues": [
          "G7",
          "G7",
          "G7",
          "G7",
          "C7",
          "C7",
          "G7",
          "G7",
          "D7",
          "C7",
          "G7",
          "D7"
        ],
        "coda": [
          "D7",
          "C7",
          "G7",
          "G7"
        ]
      }
    }
  ],
  "substyles": [
    "Big Band Swing",
    "Gypsy Jazz (Manouche)",
    "Jump Blues"
  ],
  "artists": [
    "Benny Goodman",
    "Count Basie",
    "Django Reinhardt",
    "Stéphane Grappelli",
    "Louis Jordan",
    "Wynonie Harris"
  ],
  "concepts": [
    "spang-a-lang",
    "walking bass",
    "four-on-the-floor bass drum feathering",
    "hi-hat on 2 and 4",
    "Charleston rhythm",
    "shout chorus",
    "call-and-response brass"
  ],
  "roles": {
    "drums": [
      "spang-a-lang ride cymbal",
      "hi-hat pedal snap on 2 & 4",
      "feathered bass drum"
    ],
    "bass": [
      "acoustic four-to-the-bar walking bass"
    ],
    "piano": [
      "syncopated Freddie Green / Charleston comping",
      "tasty right-hand blues fills"
    ],
    "lead": [
      "brass section unison stabs",
      "improvised saxophone lines"
    ]
  },
  "patterns": [
    {
      "id": "swing-spang",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Spang-a-lang",
      "family": "Ride",
      "category": "fill",
      "transitionType": "fill",
      "description": "Classic swing ride cymbal pattern with",
      "tags": [
        "swing",
        "ride"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        4,
        6,
        9,
        10
      ],
      "accentProfile": [
        0.85,
        1,
        0.7,
        0.85,
        1,
        0.7
      ],
      "velocityProfile": [
        0.8,
        0.95,
        0.65,
        0.8,
        0.95,
        0.65
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "swing-spang-v-01",
          "parentPatternId": "swing-spang",
          "name": "Spang-a-lang — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            6,
            10
          ],
          "accentProfile": [
            0.7999999999999999,
            0.95,
            0.6499999999999999,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.87,
            0.5700000000000001,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "swing-spang-v-02",
          "parentPatternId": "swing-spang",
          "name": "Spang-a-lang — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            6,
            9,
            10
          ],
          "accentProfile": [
            0.8099999999999999,
            1,
            0.6599999999999999,
            0.9299999999999999,
            0.96,
            0.7799999999999999
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.9299999999999999,
            0.63,
            0.8600000000000001,
            0.9299999999999999,
            0.63
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],

      "difficulty": 2,
      "weight": 1,
      "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "swing"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "swing-walking-bass",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Walking Bass",
      "family": "Bass",
      "category": "break",
      "transitionType": "fill",
      "description": "Quarter note acoustic walking bass line",
      "tags": [
        "swing",
        "bass"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass"
      ],

      "approaches": ["walking"],
      "instruments": [
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 4,
      "onsetGrid": [
        0,
        1,
        2,
        3
      ],
      "accentProfile": [
        1,
        0.9,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.85,
        0.9,
        0.85
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "swing-walking-bass-variant-la-pompe",
          "parentPatternId": "swing-walking-bass",
          "name": "La Pompe",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Gypsy jazz rhythm guitar with bass",
          "onsetGrid": [
            0,
            1,
            2,
            3
          ],
          "accentProfile": [
            0.8,
            1,
            0.8,
            1
          ],
          "velocityProfile": [
            0.75,
            0.95,
            0.75,
            0.95
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        {
          "id": "swing-walking-bass-v-02",
          "parentPatternId": "swing-walking-bass",
          "name": "Walking Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            2,
            3
          ],
          "accentProfile": [
            0.96,
            0.98,
            0.9099999999999999,
            0.98
          ],
          "velocityProfile": [
            1,
            0.83,
            0.88,
            0.9099999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "swing"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "swing-2-feel",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "2-Feel Bass",
      "family": "Bass",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Half note bass line for verses",
      "tags": [
        "swing",
        "bass"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass"
      ],

      "approaches": ["walking"],
      "instruments": [
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 4,
      "onsetGrid": [
        0,
        2
      ],
      "accentProfile": [
        1,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.8
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "ending",
        "turnaround"
      ],
      "variants": [
        {
          "id": "swing-2-feel-v-01-safe",
          "parentPatternId": "swing-2-feel",
          "name": "2-Feel Bass — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.95,
            0.9299999999999999
          ],
          "velocityProfile": [
            0.98,
            0.76
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "swing-2-feel-v-02-safe",
          "parentPatternId": "swing-2-feel",
          "name": "2-Feel Bass — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.95,
            0.9299999999999999
          ],
          "velocityProfile": [
            0.98,
            0.76
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "swing"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "swing-charleston",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Charleston Comping",
      "family": "Comping",
      "category": "groove",
      "description": "Classic dotted quarter and eighth note",
      "tags": [
        "swing",
        "piano"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "keys",
        "piano"
      ],

      "approaches": ["comping"],
      "instruments": [
        "keys",
        "piano"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        3
      ],
      "accentProfile": [
        1,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.8
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "swing-charleston-v-01-safe",
          "parentPatternId": "swing-charleston",
          "name": "Charleston Comping — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            3
          ],
          "accentProfile": [
            0.95,
            0.9299999999999999
          ],
          "velocityProfile": [
            0.98,
            0.76
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "swing-charleston-v-02-safe",
          "parentPatternId": "swing-charleston",
          "name": "Charleston Comping — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            3
          ],
          "accentProfile": [
            0.95,
            0.9299999999999999
          ],
          "velocityProfile": [
            0.98,
            0.76
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "swing"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "swing-shuffle",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Shuffle Swing",
      "family": "Beat",
      "category": "groove",
      "description": "Heavy big band shuffle blues feel",
      "tags": [
        "swing",
        "shuffle"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        2,
        3,
        5,
        6,
        8,
        9,
        11
      ],
      "accentProfile": [
        1,
        0.7,
        0.95,
        0.7,
        0.9,
        0.7,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.9,
        0.65,
        0.85,
        0.65,
        0.9,
        0.7
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "swing-shuffle-variant-jump-blues-shuffle",
          "parentPatternId": "swing-shuffle",
          "name": "Jump Blues Shuffle",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Aggressive Louis Jordan style triplet shuffle.",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8,
            9,
            11
          ],
          "accentProfile": [
            1,
            0.75,
            0.95,
            0.75,
            0.9,
            0.75,
            0.95,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.7,
            0.9,
            0.7,
            0.85,
            0.7,
            0.9,
            0.75
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        {
          "id": "swing-shuffle-v-02",
          "parentPatternId": "swing-shuffle",
          "name": "Shuffle Swing — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8,
            9,
            11
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.9099999999999999,
            0.7799999999999999,
            0.86,
            0.7799999999999999,
            0.9099999999999999,
            0.83
          ],
          "velocityProfile": [
            1,
            0.63,
            0.88,
            0.71,
            0.83,
            0.63,
            0.96,
            0.6799999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],

      "difficulty": 3,
      "weight": 1,
      "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "swing"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "swing-bebop-ride",
      "worldId": "swing",
      "styleIds": ["swing-small-group"],
      "name": "Bebop Ride",
      "family": "Ride",
      "category": "groove",
      "description": "Fast, light ride pattern with dropped",
      "tags": [
        "swing",
        "bebop"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        4,
        6,
        9,
        10,
        11
      ],
      "accentProfile": [
        0.85,
        0.95,
        0.7,
        0.85,
        1,
        0.7,
        0.9
      ],
      "velocityProfile": [
        0.8,
        0.9,
        0.65,
        0.8,
        0.95,
        0.65,
        0.85
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "swing-bebop-ride-v-01",
          "parentPatternId": "swing-bebop-ride",
          "name": "Bebop Ride — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            11
          ],
          "accentProfile": [
            0.7999999999999999,
            0.8999999999999999,
            0.6499999999999999,
            0.7999999999999999,
            0.95
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.8200000000000001,
            0.5700000000000001,
            0.7200000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "swing-bebop-ride-v-02",
          "parentPatternId": "swing-bebop-ride",
          "name": "Bebop Ride — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            6,
            9,
            10,
            11
          ],
          "accentProfile": [
            0.8099999999999999,
            1,
            0.6599999999999999,
            0.9299999999999999,
            0.96,
            0.7799999999999999,
            0.86
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.88,
            0.63,
            0.8600000000000001,
            0.9299999999999999,
            0.63,
            0.9099999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],

      "difficulty": 2,
      "weight": 1,
      "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "swing"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "swing-brushes",
      "worldId": "swing",
      "styleIds": ["swing-small-group"],
      "name": "Brushes Ballad",
      "family": "Beat",
      "category": "groove",
      "description": "Swished wire brushes on coated snare",
      "tags": [
        "swing",
        "brushes"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        2,
        4,
        6
      ],
      "accentProfile": [
        0.75,
        1,
        0.75,
        1
      ],
      "velocityProfile": [
        0.7,
        0.95,
        0.7,
        0.95
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "swing-brushes-v-02",
          "parentPatternId": "swing-brushes",
          "name": "Brushes Ballad — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            0.71,
            1,
            0.71,
            1
          ],
          "velocityProfile": [
            0.76,
            0.9299999999999999,
            0.6799999999999999,
            1
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "swing"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "swing-ensemble",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Ensemble Hits",
      "family": "Comping",
      "category": "groove",
      "description": "Syncopated brass and rhythm section punch",
      "tags": [
        "swing",
        "big-band"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "keys",
        "trumpet"
      ],

      "approaches": ["groove"],
      "instruments": [
        "keys",
        "trumpet"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        1,
        4,
        6
      ],
      "accentProfile": [
        0.9,
        1,
        0.95
      ],
      "velocityProfile": [
        0.85,
        0.95,
        0.9
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "swing-ensemble-v-01",
          "parentPatternId": "swing-ensemble",
          "name": "Ensemble Hits — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            6
          ],
          "accentProfile": [
            0.85,
            0.95
          ],
          "velocityProfile": [
            0.77,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "swing-ensemble-v-02",
          "parentPatternId": "swing-ensemble",
          "name": "Ensemble Hits — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            4,
            6
          ],
          "accentProfile": [
            0.86,
            1,
            0.9099999999999999
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.9299999999999999,
            0.88
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "swing"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "swing-shout-chorus",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Shout Chorus Ensemble Hits",
      "family": "Ensemble",
      "category": "sectionPattern",
      "description": "Full horn section and rhythm section",
      "tags": [
        "swing",
        "big-band",
        "shout-chorus"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "keys",
        "trumpet",
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "keys",
        "trumpet",
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        4,
        8,
        11,
        12
      ],
      "accentProfile": [
        1,
        0.85,
        0.7,
        0.95,
        0.8,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.65,
        0.9,
        0.75,
        0.85
      ],
      "supportedEnergy": [1, 2, 3, 4, 5],
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "chorus",
        "coda"
      ],
      "variants": [
        {
          "id": "swing-shout-chorus-v-01",
          "parentPatternId": "swing-shout-chorus",
          "name": "Shout Chorus Ensemble Hits — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999,
            0.6499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.7200000000000001,
            0.5700000000000001,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "swing-shout-chorus-v-02",
          "parentPatternId": "swing-shout-chorus",
          "name": "Shout Chorus Ensemble Hits — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            8,
            11,
            12
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.6599999999999999,
            1,
            0.76,
            0.98
          ],
          "velocityProfile": [
            1,
            0.78,
            0.63,
            0.96,
            0.73,
            0.83
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "swing-shout-chorus-v-03",
          "parentPatternId": "swing-shout-chorus",
          "name": "Shout Chorus Ensemble Hits — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            3,
            4,
            8,
            11,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.83,
            0.6799999999999999,
            0.9299999999999999,
            0.78,
            0.88,
            1,
            1
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.65,
            0.9,
            0.75,
            0.85,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],

      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "swing"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "swing-phrase-10",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Spang-a-Lang Phrase",
      "family": "Spang-a-Lang",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves",
      "tags": [
        "swing",
        "spang-a-lang",
        "phrase",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "alto-sax"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "alto-sax"
      ],
      "compatibleRoles": [
        "alto-sax"
      ],
      "compatibleInstruments": [
        "alto-sax"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        4,
        6,
        7,
        9,
        10
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": ["breath"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],


      "variants": [
        {
          "id": "swing-phrase-10-v-01",
          "parentPatternId": "swing-phrase-10",
          "name": "Spang-a-Lang Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            6,
            9,
            10
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "swing-phrase-10-v-02",
          "parentPatternId": "swing-phrase-10",
          "name": "Spang-a-Lang Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            6,
            7,
            9,
            10
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "swing",
        "spang-a-lang"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "swing-call-11",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "La Pompe Response",
      "family": "La Pompe",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the",
      "tags": [
        "swing",
        "la-pompe",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "alto-sax",
        "lead"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "drums",
        "bass",
        "piano"
      ],
      "compatibleRoles": [
        "alto-sax",
        "lead"
      ],
      "compatibleInstruments": [
        "drums",
        "bass",
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        4,
        5,
        7,
        8,
        10,
        11
      ],
      "accentProfile": [
        0.95,
        0.62,
        0.95,
        0.62,
        0.95,
        0.62,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.57,
        0.95,
        0.62,
        0.8999999999999999,
        0.62,
        0.95
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": ["breath"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "bridge"
      ],


      "variants": [
        {
          "id": "swing-call-11-v-01",
          "parentPatternId": "swing-call-11",
          "name": "La Pompe Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            5,
            7,
            10,
            11
          ],
          "accentProfile": [
            0.8999999999999999,
            0.57,
            0.8999999999999999,
            0.57,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.48999999999999994,
            0.87,
            0.54,
            0.82
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "swing-call-11-v-02",
          "parentPatternId": "swing-call-11",
          "name": "La Pompe Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            4,
            5,
            7,
            8,
            10,
            11
          ],
          "accentProfile": [
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7,
            0.9099999999999999
          ],
          "velocityProfile": [
            1,
            0.5499999999999999,
            0.9299999999999999,
            0.6799999999999999,
            0.8799999999999999,
            0.6,
            1
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        },
        {
          "id": "swing-call-11-v-03",
          "parentPatternId": "swing-call-11",
          "name": "La Pompe Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            1,
            4,
            5,
            7,
            8,
            10,
            11,
            14,
            15
          ],
          "accentProfile": [
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            1,
            1
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62,
            0.95,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "swing",
        "la-pompe"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "swing-anchor-12",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Shout Anchor",
      "family": "Shout",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "swing",
        "shout",
        "anchor",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "bass"
      ],

      "approaches": ["walking"],
      "instruments": [
        "bass"
      ],
      "compatibleRoles": [
        "bass"
      ],
      "compatibleInstruments": [
        "bass"
      ],
      "canCrossRole": true,
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        5,
        6,
        8,
        9,
        11,
        12
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": ["accented"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],


      "variants": [
        {
          "id": "swing-anchor-12-v-01",
          "parentPatternId": "swing-anchor-12",
          "name": "Shout Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            6,
            8,
            11,
            12
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "swing-anchor-12-v-02",
          "parentPatternId": "swing-anchor-12",
          "name": "Shout Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            5,
            6,
            8,
            9,
            11,
            12
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "swing",
        "shout"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "swing-comp-13",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Comping Comping",
      "family": "Comping",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports",
      "tags": [
        "swing",
        "comping",
        "comp",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony"
      ],

      "approaches": ["comping"],
      "instruments": [
        "piano"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        4,
        7,
        8,
        10,
        11,
        13,
        14
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": ["accented"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],


      "variants": [
        {
          "id": "swing-comp-13-v-01",
          "parentPatternId": "swing-comp-13",
          "name": "Comping Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            4,
            8,
            10,
            13,
            14
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "swing-comp-13-v-02",
          "parentPatternId": "swing-comp-13",
          "name": "Comping Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            4,
            7,
            8,
            10,
            11,
            13,
            14
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "swing",
        "comping"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "swing-intro-14",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Turnaround Intro",
      "family": "Turnaround",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish",
      "tags": [
        "swing",
        "turnaround",
        "intro",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "texture"
      ],

      "approaches": ["comping"],
      "instruments": [
        "piano"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        3,
        6,
        8,
        9,
        11
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": ["accented"],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro"
      ],


      "variants": [
        {
          "id": "swing-intro-14-v-01",
          "parentPatternId": "swing-intro-14",
          "name": "Turnaround Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            3,
            6,
            9,
            11
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "swing-intro-14-v-02",
          "parentPatternId": "swing-intro-14",
          "name": "Turnaround Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            3,
            6,
            8,
            9,
            11
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        },
        {
          "id": "swing-intro-14-v-03",
          "parentPatternId": "swing-intro-14",
          "name": "Turnaround Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            2,
            3,
            6,
            8,
            9,
            11,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            0.88,
            0.66,
            0.98,
            0.72,
            0.88,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "swing",
        "turnaround"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "swing-verse-15",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Spang-a-Lang Verse Variation",
      "family": "Spang-a-Lang",
      "category": "groove",
      "description": "A restrained verse variation with intentional",
      "tags": [
        "swing",
        "spang-a-lang",
        "verse",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "pulse",
        "rhythm-guitar",
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums",
        "percussion",
        "bass"
      ],
      "compatibleRoles": [
        "pulse",
        "rhythm-guitar",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "bass"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        1,
        2,
        3,
        5,
        7,
        8
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74
      ],
      "syncopationRating": 0.8333333333333334,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": ["accented"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse"
      ],


      "variants": [
        {
          "id": "swing-verse-15-v-01",
          "parentPatternId": "swing-verse-15",
          "name": "Spang-a-Lang Verse Variation — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            3,
            5,
            8
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "swing-verse-15-v-02",
          "parentPatternId": "swing-verse-15",
          "name": "Spang-a-Lang Verse Variation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            2,
            3,
            5,
            7,
            8
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "swing",
        "spang-a-lang"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "swing-chorus-16",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "La Pompe Chorus Lift",
      "family": "La Pompe",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases",
      "tags": [
        "swing",
        "la-pompe",
        "chorus",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "pulse",
        "harmony",
        "drums"
      ],

      "approaches": ["groove", "comping"],
      "instruments": [
        "drums",
        "percussion",
        "piano"
      ],
      "compatibleRoles": [
        "pulse",
        "harmony",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        4,
        5,
        8,
        10,
        11,
        13
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 1,
      "swingPercentage": 66,
      "articulations": ["accented"],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "chorus"
      ],


      "variants": [
        {
          "id": "swing-chorus-16-v-01",
          "parentPatternId": "swing-chorus-16",
          "name": "La Pompe Chorus Lift — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            5,
            8,
            11,
            13
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "swing-chorus-16-v-02",
          "parentPatternId": "swing-chorus-16",
          "name": "La Pompe Chorus Lift — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            4,
            5,
            8,
            10,
            11,
            13
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        },
        {
          "id": "swing-chorus-16-v-03",
          "parentPatternId": "swing-chorus-16",
          "name": "La Pompe Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            2,
            4,
            5,
            8,
            10,
            11,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            0.88,
            0.66,
            0.98,
            0.72,
            0.88,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "swing",
        "la-pompe"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "swing--phrasing",
      "worldId": "swing",
      "styleIds": ["swing-big-band"],
      "name": "Swing Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Dedicated vocal phrasing space for Swing,",
      "tags": [
        "swing",
        "alto-sax",
        "vocal-phrasing",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "alto-sax"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "alto-sax"
      ],
      "compatibleRoles": [
        "alto-sax",
        "lead"
      ],
      "compatibleInstruments": [
        "alto-sax"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        10,
        12,
        15
      ],
      "accentProfile": [
        0.98,
        0.62,
        0.84,
        0.6,
        0.94,
        0.68
      ],
      "velocityProfile": [
        0.92,
        0.58,
        0.78,
        0.56,
        0.88,
        0.64
      ],
      "syncopationRating": 0.66,
      "anticipationOffset": 0,
      "swingPercentage": 55,
      "articulations": ["breath"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "bridge"
      ],


      "variants": [
        {
          "id": "swing--phrasing-v1",
          "parentPatternId": "swing--phrasing",
          "name": "Swing Vocal Phrasing — sparse",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Sparse answer-friendly repeat.",
          "onsetGrid": [
            0,
            3,
            10,
            15
          ],
          "accentProfile": [
            0.98,
            0.62,
            0.92,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.58,
            0.86,
            0.64
          ]
        },
        {
          "id": "swing--phrasing-v2",
          "parentPatternId": "swing--phrasing",
          "name": "Swing Vocal Phrasing — accent shift",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "Shifted vocal emphasis for repeat variation.",
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.9,
            0.7,
            0.8,
            0.65,
            1,
            0.62
          ],
          "velocityProfile": [
            0.86,
            0.62,
            0.76,
            0.6,
            0.92,
            0.58
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild: vocal coverage for Swing.",
      "authenticityTags": [
        "swing",
        "alto-sax"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.8,
      "enabled": true
    }
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Spang-a-lang ride cymbal phrasing with four-to-the-bar acoustic walking bass and brass ensemble punch hits",
  "grooveMechanics": {
    "swingPercentage": 64,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "pushed"
  },
  "crossLinks": [
    "Swing ↔ Blues",
    "Swing ↔ Funk",
    "Swing ↔ WCS",
    "Swing ↔ Pop"
  ]
};
