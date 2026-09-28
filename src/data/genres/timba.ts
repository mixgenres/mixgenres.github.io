import type { GenreWorld } from '../../types';

export const TIMBA_WORLD: GenreWorld = {
  "id": "timba",
  "name": "Timba",
  "family": "Cuban Popular Music",
  "color": "#8964cf",
  "level": "family",
  "parentId": "afro-cuban",
  "description": "High-energy modern Cuban popular music: dynamic",
  "styleDefinitions": [
    {
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
    },
    {
      "id": "timba-songo",
      "worldId": "timba",
      "name": "Songo",
      "origin": "Havana, Cuba (Los Van Van)",
      "era": "1970s–1980s",
      "description": "Changuito Drum Groove • Cowbell •",
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
    }
  ],
  "substyles": [
    "Timba Habanera",
    "Songo"
  ],
  "artists": [
    "Los Van Van",
    "NG La Banda",
    "Changuito",
    "Juan Formell"
  ],
  "concepts": [
    "engranajes (gear changes)",
    "marcha",
    "presión",
    "bomba",
    "pedal",
    "songo",
    "bloque",
    "displaced bass"
  ],
  "roles": {
    "bass": [
      "displaced funk bass",
      "slap bomba breakdown",
      "sustained pedal",
      "tumbao progression"
    ],
    "piano": [
      "percussive bloque",
      "syncopated timba montuno",
      "block chords"
    ],
    "drumKit": [
      "songo groove",
      "foot cowbell pulse",
      "linear snare fills"
    ],
    "percussion": [
      "timbal bell drive",
      "conga slaps",
      "guiro rasp"
    ],
    "lead": [
      "horn section stabs",
      "trumpet solos",
      "vocal pregón dialogues"
    ]
  },
  "patterns": [
    {
      "id": "timba-gear-marcha",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Gear Change: Marcha (Standard Drive)",
      "family": "Timba Gear System",
      "category": "sectionPattern",
      "description": "Base gear featuring full driving groove",
      "tags": [
        "timba",
        "gear",
        "marcha",
        "groove"
      ],
      "scopes": [
        "region",
        "track",
        "song"
      ],
      "roles": [
        "harmony",
        "piano",
        "keyboard"
      ],

      "approaches": ["comping"],
      "instruments": [
        "piano",
        "keys"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        4,
        6,
        10,
        12,
        14,
        16,
        20,
        22,
        26,
        28,
        30
      ],
      "accentProfile": [
        0.9,
        0.7,
        1,
        0.7,
        0.95,
        1,
        0.9,
        0.7,
        1,
        0.7,
        0.95,
        1
      ],
      "velocityProfile": [
        0.9,
        0.7,
        1,
        0.7,
        0.9,
        1,
        0.9,
        0.7,
        1,
        0.7,
        0.9,
        1
      ],
      "supportedEnergy": [1, 2, 3, 4, 5],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "montuno",
        "gear-change"
      ],
      "variants": [
        {
          "id": "timba-gear-bomba",
          "parentPatternId": "timba-gear-marcha",
          "name": "Gear Change: Bomba (Bass Slap & Kick Breakdown)",
          "variationType": "breakdown",
          "probability": 0.6,
          "onsetGrid": [
            0,
            6,
            12,
            16,
            22,
            28
          ],
          "accentProfile": [
            1,
            0.85,
            0.95,
            1,
            0.85,
            0.95
          ],
          "description": "Drop to raw sub-bass slap and"
        },
        {
          "id": "timba-gear-presion",
          "parentPatternId": "timba-gear-marcha",
          "name": "Gear Change: Presión (High Tension Climax)",
          "variationType": "dense",
          "probability": 0.5,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14,
            16,
            18,
            20,
            22,
            24,
            26,
            28,
            30
          ],
          "accentProfile": [
            1,
            0.8,
            1,
            0.8,
            1,
            0.8,
            1,
            0.9,
            1,
            0.8,
            1,
            0.8,
            1,
            0.8,
            1,
            1
          ],
          "description": "Maximum density and cowbell acceleration for"
        },
        {
          "id": "timba-gear-marcha-v-03",
          "parentPatternId": "timba-gear-marcha",
          "name": "Gear Change: Marcha (Standard Drive) — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            14,
            15,
            16,
            20,
            22,
            26,
            28,
            30
          ],
          "accentProfile": [
            0.88,
            0.6799999999999999,
            0.98,
            0.6799999999999999,
            0.9299999999999999,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "velocityProfile": [
            0.9,
            0.7,
            1,
            0.7,
            0.9,
            0.98,
            0.98,
            0.98,
            0.98,
            0.98,
            0.98,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            -6,
            -6,
            -6,
            -6,
            -6,
            -6,
            -6,
            -6
          ]
        }
      ],

      "difficulty": 4,
      "weight": 0.7,
      "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-songo-groove",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Songo Drum Kit & Cowbell Groove (Changuito / Los Van Van)",
      "family": "Songo Drumming",
      "category": "fill",
      "transitionType": "fill",
      "description": "Changuito’s revolutionary drum groove combining foot",
      "tags": [
        "songo",
        "drums",
        "los-van-van",
        "changuito",
        "timba"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "drums",
        "percussion",
        "pulse"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums",
        "timbales",
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        0.95,
        0.5,
        0.9,
        0.6,
        0.95,
        0.5,
        1,
        0.6
      ],
      "velocityProfile": [
        0.9,
        0.5,
        0.85,
        0.6,
        0.9,
        0.5,
        0.95,
        0.6
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "montuno"
      ],
      "variants": [
        {
          "id": "timba-songo-with-snare-drag",
          "parentPatternId": "timba-songo-groove",
          "name": "Songo with Linear Snare Drags",
          "variationType": "ornamented",
          "probability": 0.5,
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            8,
            10,
            11,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.4,
            0.6,
            0.9,
            0.6,
            0.95,
            0.4,
            0.6,
            1,
            0.6
          ],
          "description": "Syncopated linear snare fills weaving between"
        },
        {
          "id": "timba-songo-groove-variant-bongo-bell-drive",
          "parentPatternId": "timba-songo-groove",
          "name": "Bongo Bell Drive",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Driving cowbell syncopation for high-energy presión",
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.6,
            0.85,
            0.65,
            0.95,
            0.6,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.8,
            0.6,
            0.9,
            0.55,
            0.8,
            0.65
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        }
      ],

      "difficulty": 3,
      "weight": 1,
      "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-displaced-bass",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Displaced Funk / Timba Bassline",
      "family": "Timba Bass Systems",
      "category": "ostinato",
      "description": "Syncopated bass utilizing slap thumb pops,",
      "tags": [
        "bass",
        "slap",
        "funk",
        "timba",
        "displaced"
      ],
      "scopes": [
        "measure",
        "phrase",
        "track"
      ],
      "roles": [
        "bass",
        "pulse"
      ],

      "approaches": ["walking", "groove"],
      "instruments": [
        "bass",
        "synth"
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
        0.9,
        0.85,
        1,
        0.8,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.9,
        0.8,
        0.95,
        0.75,
        0.9,
        0.85
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "montuno",
        "gear-change"
      ],
      "variants": [
        {
          "id": "timba-bass-pedal-riff",
          "parentPatternId": "timba-displaced-bass",
          "name": "Timba Pedal Bass (Root Anchor)",
          "variationType": "sparse",
          "probability": 0.45,
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            1,
            0.8,
            0.95
          ],
          "description": "Heavy sustained pedal point creating tension"
        },
        {
          "id": "timba-displaced-bass-v-02",
          "parentPatternId": "timba-displaced-bass",
          "name": "Displaced Funk / Timba Bassline — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.86,
            0.9299999999999999,
            0.96,
            0.88,
            0.9099999999999999,
            0.98
          ],
          "velocityProfile": [
            0.96,
            0.78,
            0.9299999999999999,
            0.81,
            0.88,
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
        }
      ],

      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-conga-gear",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Timba Conga Gear",
      "family": "Conga",
      "category": "break",
      "transitionType": "fill",
      "description": "Dense modern timba conga pattern with",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion"
      ],

      "approaches": ["groove"],
      "instruments": [
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        4,
        7,
        8,
        11,
        12,
        15
      ],
      "accentProfile": [
        0.75,
        0.95,
        0.6,
        0.85,
        0.75,
        0.95,
        0.6,
        0.9
      ],
      "velocityProfile": [
        0.7,
        0.95,
        0.55,
        0.8,
        0.7,
        0.95,
        0.55,
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
          "id": "timba-conga-gear-v-01",
          "parentPatternId": "timba-conga-gear",
          "name": "Timba Conga Gear — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            7,
            11,
            12
          ],
          "accentProfile": [
            0.7,
            0.8999999999999999,
            0.5499999999999999,
            0.7999999999999999,
            0.7
          ],
          "velocityProfile": [
            0.62,
            0.87,
            0.47000000000000003,
            0.7200000000000001,
            0.62
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
          "id": "timba-conga-gear-v-02",
          "parentPatternId": "timba-conga-gear",
          "name": "Timba Conga Gear — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            11,
            12,
            15
          ],
          "accentProfile": [
            0.71,
            1,
            0.5599999999999999,
            0.9299999999999999,
            0.71,
            1,
            0.5599999999999999,
            0.98
          ],
          "velocityProfile": [
            0.76,
            0.9299999999999999,
            0.53,
            0.8600000000000001,
            0.6799999999999999,
            0.9299999999999999,
            0.6100000000000001,
            0.83
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
      "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-bata-fusion",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Bata Fusion",
      "family": "Percussion",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Bata drum accents blended into drumkit",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion"
      ],

      "approaches": ["groove"],
      "instruments": [
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        10,
        14
      ],
      "accentProfile": [
        1,
        0.7,
        0.9,
        0.8,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.85,
        0.75,
        0.9
      ],
      "supportedEnergy": [2, 3, 4],
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
          "id": "timba-bata-fusion-v-01",
          "parentPatternId": "timba-bata-fusion",
          "name": "Bata Fusion — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            8,
            10
          ],
          "accentProfile": [
            0.95,
            0.6499999999999999,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "timba-bata-fusion-v-02",
          "parentPatternId": "timba-bata-fusion",
          "name": "Bata Fusion — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            8,
            10,
            14
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.86,
            0.88,
            0.9099999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.83,
            0.81,
            0.88
          ],
          "microtimingOffset": [
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
      "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-synth-bass",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Synth Bass Tumbao",
      "family": "Bass",
      "category": "groove",
      "description": "Aggressive synth bass timba line punching",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass",
        "synth"
      ],

      "approaches": ["walking"],
      "instruments": [
        "synth",
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        6,
        10,
        14
      ],
      "accentProfile": [
        0.85,
        1,
        0.85,
        0.95
      ],
      "velocityProfile": [
        0.8,
        0.95,
        0.8,
        0.9
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
          "id": "timba-synth-bass-v-01",
          "parentPatternId": "timba-synth-bass",
          "name": "Synth Bass Tumbao — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            10,
            14
          ],
          "accentProfile": [
            0.7999999999999999,
            0.95,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.87,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "timba-synth-bass-v-02",
          "parentPatternId": "timba-synth-bass",
          "name": "Synth Bass Tumbao — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.8099999999999999,
            1,
            0.8099999999999999,
            1
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.9299999999999999,
            0.78,
            0.96
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
      "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-piano-guajeo",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Piano Guajeo",
      "family": "Piano",
      "category": "groove",
      "description": "Syncopated two-handed timba piano ostinato.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "piano",
        "keys"
      ],

      "approaches": ["comping"],
      "instruments": [
        "piano",
        "keys"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        11,
        14
      ],
      "accentProfile": [
        0.9,
        0.75,
        1,
        0.7,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.85,
        0.7,
        0.95,
        0.65,
        0.9,
        0.75
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
          "id": "timba-piano-guajeo-v-01",
          "parentPatternId": "timba-piano-guajeo",
          "name": "Piano Guajeo — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            0.85,
            0.7,
            0.95,
            0.6499999999999999
          ],
          "velocityProfile": [
            0.77,
            0.62,
            0.87,
            0.5700000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "timba-piano-guajeo-v-02",
          "parentPatternId": "timba-piano-guajeo",
          "name": "Piano Guajeo — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.86,
            0.83,
            0.96,
            0.7799999999999999,
            0.9099999999999999,
            0.88
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.6799999999999999,
            0.9299999999999999,
            0.71,
            0.88,
            0.73
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
      "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-kick-bomobo",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Kick Bombo",
      "family": "Drum Kit",
      "category": "groove",
      "description": "Kick hitting the bombo note heavily",
      "tags": [],
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
      "subdivisions": 16,
      "onsetGrid": [
        6,
        14
      ],
      "accentProfile": [
        1,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.8
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
          "id": "timba-kick-bomobo-v-01-safe",
          "parentPatternId": "timba-kick-bomobo",
          "name": "Kick Bombo — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            6,
            14
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
          "id": "timba-kick-bomobo-v-02-safe",
          "parentPatternId": "timba-kick-bomobo",
          "name": "Kick Bombo — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            6,
            14
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
      "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-horn-moña",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Horn Moña",
      "family": "Horns",
      "category": "groove",
      "description": "Interlocking brass riffs cutting through the",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "brass",
        "trumpet"
      ],

      "approaches": ["groove"],
      "instruments": [
        "brass",
        "trumpet"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        4,
        7,
        9,
        12
      ],
      "accentProfile": [
        0.85,
        1,
        0.75,
        0.9,
        0.95
      ],
      "velocityProfile": [
        0.8,
        0.95,
        0.7,
        0.85,
        0.9
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
          "id": "timba-horn-moña-v-01",
          "parentPatternId": "timba-horn-moña",
          "name": "Horn Moña — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            7,
            9
          ],
          "accentProfile": [
            0.7999999999999999,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.87,
            0.62
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "timba-horn-moña-v-02",
          "parentPatternId": "timba-horn-moña",
          "name": "Horn Moña — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            4,
            7,
            9,
            12
          ],
          "accentProfile": [
            0.8099999999999999,
            1,
            0.71,
            0.98,
            0.9099999999999999
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.9299999999999999,
            0.6799999999999999,
            0.9099999999999999,
            0.88
          ],
          "microtimingOffset": [
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
      "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-clave-rumba",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "2-3 Rumba Clave",
      "family": "Clave",
      "category": "groove",
      "description": "Rumba clave direction fundamental to modern",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion"
      ],

      "approaches": ["groove"],
      "instruments": [
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        4,
        8,
        11,
        14
      ],
      "accentProfile": [
        0.9,
        0.85,
        1,
        0.95,
        0.85
      ],
      "velocityProfile": [
        0.85,
        0.8,
        0.95,
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
          "id": "timba-clave-rumba-v-01",
          "parentPatternId": "timba-clave-rumba",
          "name": "2-3 Rumba Clave — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            8,
            11
          ],
          "accentProfile": [
            0.85,
            0.7999999999999999,
            0.95
          ],
          "velocityProfile": [
            0.77,
            0.7200000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "timba-clave-rumba-v-02",
          "parentPatternId": "timba-clave-rumba",
          "name": "2-3 Rumba Clave — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            4,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.86,
            0.9299999999999999,
            0.96,
            1,
            0.8099999999999999
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.78,
            0.9299999999999999,
            0.96,
            0.83
          ],
          "microtimingOffset": [
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
      "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-anticipated-pedal",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Anticipated Presión Pedal",
      "family": "Bass",
      "category": "groove",
      "description": "Bass hits landing a 16th note",
      "tags": [
        "timba",
        "anticipated",
        "presion"
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
      "subdivisions": 16,
      "onsetGrid": [
        3,
        7,
        11,
        15
      ],
      "accentProfile": [
        0.8,
        0.9,
        0.95,
        1
      ],
      "velocityProfile": [
        0.75,
        0.85,
        0.9,
        0.95
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "chorus",
        "gear-change"
      ],
      "variants": [
        {
          "id": "timba-anticipated-pedal-v-01",
          "parentPatternId": "timba-anticipated-pedal",
          "name": "Anticipated Presión Pedal — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            3,
            11,
            15
          ],
          "accentProfile": [
            0.75,
            0.85,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.67,
            0.77,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "timba-anticipated-pedal-v-02",
          "parentPatternId": "timba-anticipated-pedal",
          "name": "Anticipated Presión Pedal — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            3,
            7,
            11,
            15
          ],
          "accentProfile": [
            0.76,
            0.98,
            0.9099999999999999,
            1
          ],
          "velocityProfile": [
            0.81,
            0.83,
            0.88,
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
      "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 1,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-phrase-12",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Gear Change Phrase",
      "family": "Gear Change",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves",
      "tags": [
        "timba",
        "gear-change",
        "phrase",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "synth"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "synth"
      ],
      "compatibleRoles": [
        "synth"
      ],
      "compatibleInstruments": [
        "synth"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        6,
        7,
        10,
        12,
        15
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
      "swingPercentage": 53,
      "articulations": [
        "breath",
        "phrase-end"
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
          "id": "timba-phrase-12-v-01",
          "parentPatternId": "timba-phrase-12",
          "name": "Gear Change Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            6,
            7,
            12,
            15
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
          "id": "timba-phrase-12-v-02",
          "parentPatternId": "timba-phrase-12",
          "name": "Gear Change Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            6,
            7,
            10,
            12,
            15
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
      "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "timba",
        "gear-change"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "timba-call-13",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Coro Response",
      "family": "Coro / backing vocals",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the",
      "tags": [
        "timba",
        "coro",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "synth"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "synth"
      ],
      "compatibleRoles": [
        "synth"
      ],
      "compatibleInstruments": [
        "synth"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        3,
        7,
        8,
        11,
        13
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
      "swingPercentage": 53,
      "articulations": [
        "breath",
        "phrase-end"
      ],
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
          "id": "timba-call-13-v-01",
          "parentPatternId": "timba-call-13",
          "name": "Coro Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            3,
            7,
            11,
            13
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
          "id": "timba-call-13-v-02",
          "parentPatternId": "timba-call-13",
          "name": "Coro Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            3,
            7,
            8,
            11,
            13
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
          "id": "timba-call-13-v-03",
          "parentPatternId": "timba-call-13",
          "name": "Coro Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            1,
            3,
            7,
            8,
            11,
            13,
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
      "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "timba",
        "coro"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "timba-anchor-14",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Moña Anchor",
      "family": "Moña",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "timba",
        "mona",
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
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        2,
        4,
        8,
        9,
        12,
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
      "syncopationRating": 0.5714285714285714,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
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
          "id": "timba-anchor-14-v-01",
          "parentPatternId": "timba-anchor-14",
          "name": "Moña Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            4,
            8,
            12,
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
          "id": "timba-anchor-14-v-02",
          "parentPatternId": "timba-anchor-14",
          "name": "Moña Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            2,
            4,
            8,
            9,
            12,
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
      "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "timba",
        "mona"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "timba-comp-15",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Presión Comping",
      "family": "Presión",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports",
      "tags": [
        "timba",
        "presion",
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
        0,
        3,
        4,
        6,
        10,
        11,
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
      "swingPercentage": 53,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
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
          "id": "timba-comp-15-v-01",
          "parentPatternId": "timba-comp-15",
          "name": "Presión Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            6,
            11,
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
          "id": "timba-comp-15-v-02",
          "parentPatternId": "timba-comp-15",
          "name": "Presión Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            6,
            10,
            11,
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
      "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "timba",
        "presion"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "timba-intro-16",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Marcha Intro",
      "family": "Marcha",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish",
      "tags": [
        "timba",
        "marcha",
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
        1,
        4,
        6,
        9,
        11,
        14
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
      "swingPercentage": 53,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro"
      ],


      "variants": [
        {
          "id": "timba-intro-16-v-01",
          "parentPatternId": "timba-intro-16",
          "name": "Marcha Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            6,
            9,
            14
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
          "id": "timba-intro-16-v-02",
          "parentPatternId": "timba-intro-16",
          "name": "Marcha Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            4,
            6,
            9,
            11,
            14
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
        },
        {
          "id": "timba-intro-16-v-03",
          "parentPatternId": "timba-intro-16",
          "name": "Marcha Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            1,
            4,
            6,
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
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
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
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "timba",
        "marcha"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "timba--phrasing",
      "worldId": "timba",
      "styleIds": ["timba-havana-modern"],
      "name": "Timba Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Coro and sonero phrasing template shaped",
      "tags": [
        "timba",
        "synth",
        "vocal-phrasing",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "synth"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "synth"
      ],
      "compatibleRoles": [
        "synth",
        "lead"
      ],
      "compatibleInstruments": [
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        5,
        8,
        11,
        14
      ],
      "accentProfile": [
        0.94,
        0.62,
        0.94,
        0.62,
        0.94,
        0.62
      ],
      "velocityProfile": [
        0.9,
        0.58,
        0.9,
        0.58,
        0.9,
        0.58
      ],
      "syncopationRating": 0.6666666666666666,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "breath",
        "phrase-end"
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "bridge",
        "coro"
      ],


      "variants": [
        {
          "id": "timba--phrasing-v--alt",
          "parentPatternId": "timba--phrasing",
          "name": "Timba Vocal Phrasing — alternate phrasing",
          "variationType": "phraseStart",
          "probability": 0.2,
          "description": "Alternate vocal entry placement for a",
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.92,
            0.62,
            0.92,
            0.62,
            0.92,
            0.62
          ],
          "velocityProfile": [
            0.88,
            0.58,
            0.88,
            0.58,
            0.88,
            0.58
          ],
          "microtimingOffset": [
            2,
            -4,
            2,
            -4,
            2,
            -4
          ]
        },
        {
          "id": "timba--phrasing-v-final-accent",
          "parentPatternId": "timba--phrasing",
          "name": "Timba Vocal Phrasing — accent shift",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "Same rhythmic shape with shifted emphasis",
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.7,
            0.8999999999999999,
            0.7,
            0.8999999999999999,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.58,
            0.9,
            0.58,
            0.9,
            0.58
          ],
          "microtimingOffset": [
            2,
            -4,
            2,
            -4,
            2,
            -4
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Timba.",
      "authenticityTags": [
        "timba",
        "synth"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    }
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Timba 4-gear system (Marcha → Presión → Bomba → Pedal) with songo drums",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "pushed"
  },
  "crossLinks": [
    "Timba ↔ Salsa (lineage)",
    "Timba ↔ Funk (songo/slap crossover)",
    "Timba ↔ Jazz (Cuban Latin Jazz)"
  ]
};
