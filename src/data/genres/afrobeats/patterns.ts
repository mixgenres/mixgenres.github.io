import type { GenreWorld, MusicalPattern } from '../../schema';


const AFROBEATS_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "afro-log-drum-bass",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Pitched Log Drum Bass Groove",
          "family": "Log Drum",
          "category": "groove",
          "description": "Resonant FM synth log drum bassline",
          "tags": [
            "afrobeats",
            "bass",
            "log-drum",
            "amapiano",
            "sub"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
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
            8,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.85,
            0.95,
            0.75,
            0.9,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9,
            0.7,
            0.85,
            0.8
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "afro-log-drum-bass-v-01",
              "parentPatternId": "afro-log-drum-bass",
              "name": "Pitched Log Drum Bass Groove — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999,
                0.8999999999999999,
                0.7
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001,
                0.8200000000000001,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "afro-log-drum-bass-v-02",
              "parentPatternId": "afro-log-drum-bass",
              "name": "Pitched Log Drum Bass Groove — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.9099999999999999,
                0.83,
                0.86,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.78,
                0.88,
                0.76,
                0.83,
                0.78
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
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "afro-syncopated-kit",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Modern Afropop Kick & Rim Pocket",
          "family": "Afrobeats Drums",
          "category": "groove",
          "description": "Signature Afrobeats syncopated kick placement anchors the groove.",
          "tags": [
            "afrobeats",
            "drums",
            "kick",
            "rimshot"
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
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.9,
            0.95,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.85,
            0.9,
            0.7,
            0.8
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "afro-syncopated-kit-v-01",
              "parentPatternId": "afro-syncopated-kit",
              "name": "Modern Afropop Kick & Rim Pocket — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                10,
                12
              ],
              "accentProfile": [
                0.95,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
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
              "id": "afro-syncopated-kit-v-02",
              "parentPatternId": "afro-syncopated-kit",
              "name": "Modern Afropop Kick & Rim Pocket — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                6,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.9099999999999999,
                0.83,
                0.8099999999999999
              ],
              "velocityProfile": [
                1,
                0.83,
                0.88,
                0.76,
                0.78
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
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "afro-shekere-shaker",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afrobeat"],
          "name": "Shekere & Gourd Shaker Engine",
          "family": "Afro Percussion",
          "category": "groove",
          "description": "A continuous 16th-note gourd-shaker rattle adds a fine-grained pulse.",
          "tags": [
            "afrobeat",
            "percussion",
            "shekere",
            "shaker"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion",
            "guiro"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.5,
            0.75,
            0.5,
            0.85,
            0.5,
            0.75,
            0.5,
            0.95,
            0.5,
            0.75,
            0.5,
            0.85,
            0.5,
            0.75,
            0.55
          ],
          "velocityProfile": [
            0.95,
            0.45,
            0.7,
            0.45,
            0.8,
            0.45,
            0.7,
            0.45,
            0.9,
            0.45,
            0.7,
            0.45,
            0.8,
            0.45,
            0.7,
            0.5
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "afro-shekere-shaker-v-01",
              "parentPatternId": "afro-shekere-shaker",
              "name": "Shekere & Gourd Shaker Engine — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6,
                8,
                9,
                11,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.95,
                0.45,
                0.7,
                0.45,
                0.7999999999999999,
                0.45,
                0.7,
                0.45,
                0.8999999999999999,
                0.45,
                0.7
              ],
              "velocityProfile": [
                0.87,
                0.4,
                0.62,
                0.4,
                0.7200000000000001,
                0.4,
                0.62,
                0.4,
                0.8200000000000001,
                0.4,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "afro-shekere-shaker-v-02",
              "parentPatternId": "afro-shekere-shaker",
              "name": "Shekere & Gourd Shaker Engine — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                0.58,
                0.71,
                0.58,
                0.8099999999999999,
                0.58,
                0.71,
                0.58,
                0.9099999999999999,
                0.58,
                0.71,
                0.58,
                0.8099999999999999,
                0.58,
                0.71,
                0.63
              ],
              "velocityProfile": [
                1,
                0.43,
                0.6799999999999999,
                0.51,
                0.78,
                0.43,
                0.76,
                0.43,
                0.88,
                0.51,
                0.6799999999999999,
                0.43,
                0.8600000000000001,
                0.43,
                0.6799999999999999,
                0.56
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
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
    
          "difficulty": 5,
          "weight": 1,
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "afro-amapiano-pad",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-amapiano"],
          "name": "Airy Rhodes & Synth Pad Comping",
          "family": "Amapiano Keys",
          "category": "groove",
          "description": "Spacious, warm electric piano voicings floating",
          "tags": [
            "amapiano",
            "keys",
            "rhodes",
            "pad"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "harmony",
            "texture"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "keys",
            "piano",
            "synth"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            8,
            14
          ],
          "accentProfile": [
            0.85,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.8,
            0.85,
            0.75
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "afro-amapiano-pad-v-01",
              "parentPatternId": "afro-amapiano-pad",
              "name": "Airy Rhodes & Synth Pad Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                14
              ],
              "accentProfile": [
                0.7999999999999999,
                0.85
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "afro-amapiano-pad-v-02",
              "parentPatternId": "afro-amapiano-pad",
              "name": "Airy Rhodes & Synth Pad Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                8,
                14
              ],
              "accentProfile": [
                0.8099999999999999,
                0.98,
                0.76
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.83,
                0.73
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
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "afrobeats-comp-9",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Horn Comping",
          "family": "Horn",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "afrobeats",
            "horn",
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
            "guitar"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
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
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
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
              "id": "afrobeats-comp-9-v-01",
              "parentPatternId": "afrobeats-comp-9",
              "name": "Horn Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                7,
                10,
                15
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
              "id": "afrobeats-comp-9-v-02",
              "parentPatternId": "afrobeats-comp-9",
              "name": "Horn Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                4,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "horn"
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
          "id": "afrobeats-verse-11",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Log Drum Verse Variation",
          "family": "Log Drum",
          "category": "groove",
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
          "tags": [
            "afrobeats",
            "log-drum",
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
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            5,
            7,
            10,
            12,
            13,
            15
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.63
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-verse-11-v-01",
              "parentPatternId": "afrobeats-verse-11",
              "name": "Log Drum Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                5,
                7,
                12,
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
              "id": "afrobeats-verse-11-v-02",
              "parentPatternId": "afrobeats-verse-11",
              "name": "Log Drum Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                4,
                5,
                7,
                10,
                12,
                13,
                15
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96,
                0.61
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "log-drum"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 1,
          "enabled": true
        }
,
  {
    "id": "tech-afrobeats-west-african-bell-timeline",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-west-african-highlife-guitar"
    ],
    "name": "West African bell timeline",
    "shortName": "West African bell timeline",
    "family": "afrobeats",
    "category": "groove",
    "description": "Technique: West African bell timeline",
    "tags": [
      "afrobeats",
      "West African bell timeline"
    ],
    "approaches": [
      "West African bell timeline"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "afrobeats",
      "West African bell timeline"
    ],
    "techniques": [
      "West African bell timeline"
    ]
  },
  {
    "id": "tech-afrobeats-12-8-bell-derived-patterns",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-west-african-highlife-guitar"
    ],
    "name": "12/8 bell-derived patterns",
    "shortName": "12/8 bell-derived patterns",
    "family": "afrobeats",
    "category": "groove",
    "description": "Technique: 12/8 bell-derived patterns",
    "tags": [
      "afrobeats",
      "12/8 bell-derived patterns"
    ],
    "approaches": [
      "12/8 bell-derived patterns"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "afrobeats",
      "12/8 bell-derived patterns"
    ],
    "techniques": [
      "12/8 bell-derived patterns"
    ]
  },
  {
    "id": "tech-afrobeats-shaker-16ths-with-displaced-accents",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-afropop-guitar-groove"
    ],
    "name": "shaker 16ths with displaced accents",
    "shortName": "shaker 16ths with displaced accents",
    "family": "afrobeats",
    "category": "groove",
    "description": "Technique: shaker 16ths with displaced",
    "tags": [
      "afrobeats",
      "shaker 16ths with displaced accents"
    ],
    "approaches": [
      "shaker 16ths with displaced accents"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "afrobeats",
      "shaker 16ths with displaced accents"
    ],
    "techniques": [
      "shaker 16ths with displaced accents"
    ]
  },
  {
    "id": "tech-afrobeats-syncopated-afrobeats-kick",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-afro-fusion-burna-boy",
      "afrobeats-afrobeats-percussive-minimalism"
    ],
    "name": "syncopated Afrobeats kick",
    "shortName": "syncopated Afrobeats kick",
    "family": "afrobeats",
    "category": "groove",
    "description": "Technique: syncopated Afrobeats kick",
    "tags": [
      "afrobeats",
      "syncopated Afrobeats kick"
    ],
    "approaches": [
      "syncopated Afrobeats kick"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "afrobeats",
      "syncopated Afrobeats kick"
    ],
    "techniques": [
      "syncopated Afrobeats kick"
    ]
  },
  {
    "id": "tech-afrobeats-percussion-dropouts",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-afrobeats-percussive-minimalism"
    ],
    "name": "percussion dropouts",
    "shortName": "percussion dropouts",
    "family": "afrobeats",
    "category": "groove",
    "description": "Technique: percussion dropouts",
    "tags": [
      "afrobeats",
      "percussion dropouts"
    ],
    "approaches": [
      "percussion dropouts"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "afrobeats",
      "percussion dropouts"
    ],
    "techniques": [
      "percussion dropouts"
    ]
  },
  {
    "id": "tech-afrobeats-three-layer-percussion-conversation",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-afrobeats-percussive-minimalism"
    ],
    "name": "three-layer percussion conversation",
    "shortName": "three-layer percussion conversation",
    "family": "afrobeats",
    "category": "groove",
    "description": "Technique: three-layer percussion conversation",
    "tags": [
      "afrobeats",
      "three-layer percussion conversation"
    ],
    "approaches": [
      "three-layer percussion conversation"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "afrobeats",
      "three-layer percussion conversation"
    ],
    "techniques": [
      "three-layer percussion conversation"
    ]
  },
  {
    "id": "style-afrobeats-west-african-highlife-guitar-signature",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-west-african-highlife-guitar"
    ],
    "name": "West African Highlife Guitar Signature Cell",
    "shortName": "West African Highlife Guitar Cell",
    "family": "afrobeats",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "afrobeats",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "acoustic-guitar",
      "electric-guitar",
      "bass",
      "drums"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      3,
      6,
      8
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "afrobeats",
      "signature"
    ],
    "techniques": [
      "West African bell timeline",
      "interlocking guitar ostinati",
      "call-and-response vocal fragments",
      "12/8 bell-derived patterns",
      "sparse sub-bass anticipation"
    ]
  },
  {
    "id": "style-afrobeats-afro-fusion-burna-boy-signature",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-afro-fusion-burna-boy"
    ],
    "name": "Afro-Fusion — Burna Boy Signature Cell",
    "shortName": "Afro-Fusion — Burna Boy Cell",
    "family": "afrobeats",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "afrobeats",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "afrobeats",
      "signature"
    ],
    "techniques": [
      "call-and-response vocal fragments",
      "sparse sub-bass anticipation",
      "syncopated Afrobeats kick",
      "vocal-as-rhythm phrasing"
    ]
  },
  {
    "id": "style-afrobeats-afropop-guitar-groove-signature",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-afropop-guitar-groove"
    ],
    "name": "Afropop Guitar Groove Signature Cell",
    "shortName": "Afropop Guitar Groove Cell",
    "family": "afrobeats",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "afrobeats",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
      "shaker"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "afrobeats",
      "signature"
    ],
    "techniques": [
      "shaker 16ths with displaced accents",
      "interlocking guitar ostinati",
      "sparse sub-bass anticipation"
    ]
  },
  {
    "id": "style-afrobeats-afrobeats-percussive-minimalism-signature",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-afrobeats-percussive-minimalism"
    ],
    "name": "Afrobeats Percussive Minimalism Signature Cell",
    "shortName": "Afrobeats Percussive Minimalism Cell",
    "family": "afrobeats",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "afrobeats",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "sub-bass",
      "drums",
      "shaker",
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "afrobeats",
      "signature"
    ],
    "techniques": [
      "percussion dropouts",
      "sparse sub-bass anticipation",
      "vocal-as-rhythm phrasing",
      "call-and-response vocal fragments",
      "syncopated Afrobeats kick",
      "three-layer percussion conversation"
    ]
  }
];


const AFROBEATS_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "afro-highlife-guitar",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop", "afrobeats-afrobeat"],
          "name": "Highlife Fingerstyle Clean Guitar",
          "family": "Highlife Guitar",
          "category": "ostinato",
          "description": "Bright clean electric guitar playing rhythmic",
          "tags": [
            "afrobeats",
            "guitar",
            "highlife",
            "clean"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "guitar"
          ],
    
          "approaches": ["comping", "chop"],
          "instruments": [
            "guitar",
            "electric-guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            7,
            8,
            11,
            13,
            15
          ],
          "accentProfile": [
            0.85,
            0.95,
            0.75,
            0.9,
            0.8,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.8,
            0.9,
            0.7,
            0.85,
            0.75,
            0.9,
            0.65
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
              "id": "afro-highlife-guitar-v-01",
              "parentPatternId": "afro-highlife-guitar",
              "name": "Highlife Fingerstyle Clean Guitar — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                7,
                8,
                13,
                15
              ],
              "accentProfile": [
                0.7999999999999999,
                0.8999999999999999,
                0.7,
                0.85,
                0.75
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.8200000000000001,
                0.62,
                0.77,
                0.67
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
              "id": "afro-highlife-guitar-v-02",
              "parentPatternId": "afro-highlife-guitar",
              "name": "Highlife Fingerstyle Clean Guitar — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                4,
                7,
                8,
                11,
                13,
                15
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.71,
                0.98,
                0.76,
                1,
                0.6599999999999999
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.88,
                0.6799999999999999,
                0.9099999999999999,
                0.73,
                0.88,
                0.71
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
          "weight": 0.7,
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "afrobeats-anchor-8",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop", "afrobeats-afrobeat"],
          "name": "Hook Anchor",
          "family": "Hook",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "afrobeats",
            "hook",
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
            0,
            2,
            5,
            8,
            10,
            13
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
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
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
              "id": "afrobeats-anchor-8-v-01",
              "parentPatternId": "afrobeats-anchor-8",
              "name": "Hook Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5,
                8,
                13
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
              "id": "afrobeats-anchor-8-v-02",
              "parentPatternId": "afrobeats-anchor-8",
              "name": "Hook Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                5,
                8,
                10,
                13
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "hook"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const AFROBEATS_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "afro-horn-stabs",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afrobeat"],
          "name": "Fela Afrobeat Horn Section Stabs",
          "family": "Afro Horns",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Pungent brass section horn stabs locking",
          "tags": [
            "afrobeat",
            "horns",
            "brass",
            "fela"
          ],
          "scopes": [
            "phrase",
            "region"
          ],
          "roles": [
            "lead",
            "brass"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet",
            "brass",
            "sax"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            7,
            11,
            14
          ],
          "accentProfile": [
            0.95,
            0.9,
            0.95,
            1
          ],
          "velocityProfile": [
            0.9,
            0.85,
            0.9,
            0.95
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "solo",
            "coda"
          ],
          "variants": [
            {
              "id": "afro-horn-stabs-v-01",
              "parentPatternId": "afro-horn-stabs",
              "name": "Fela Afrobeat Horn Section Stabs — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                3,
                11,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
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
              "id": "afro-horn-stabs-v-02",
              "parentPatternId": "afro-horn-stabs",
              "name": "Fela Afrobeat Horn Section Stabs — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                3,
                7,
                11,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                0.98,
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                0.96,
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
            },
            {
              "id": "afro-horn-stabs-v-03",
              "parentPatternId": "afro-horn-stabs",
              "name": "Fela Afrobeat Horn Section Stabs — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                3,
                7,
                11,
                14,
                15
              ],
              "accentProfile": [
                0.9299999999999999,
                0.88,
                0.9299999999999999,
                1,
                1
              ],
              "velocityProfile": [
                0.9,
                0.85,
                0.9,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": [
            "legato"
          ]
        },
  {
          "id": "afrobeats-cadence-16",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Log Drum Cadence",
          "family": "Log Drum",
          "category": "cadence",
          "transitionType": "fill",
          "description": "A phrase-ending cadence gives the melody a clear point of arrival.",
          "tags": [
            "afrobeats",
            "log-drum",
            "cadence",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "bass"
          ],
    
          "approaches": ["comping", "walking"],
          "instruments": [
            "guitar",
            "bass"
          ],
          "compatibleRoles": [
            "harmony",
            "bass"
          ],
          "compatibleInstruments": [
            "guitar",
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            6,
            8,
            12,
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
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "turnaround",
            "ending",
            "coda",
            "remate",
            "cierre"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-cadence-16-v-01",
              "parentPatternId": "afrobeats-cadence-16",
              "name": "Log Drum Cadence — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                8,
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
              "id": "afrobeats-cadence-16-v-02",
              "parentPatternId": "afrobeats-cadence-16",
              "name": "Log Drum Cadence — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                6,
                8,
                12,
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
              "id": "afrobeats-cadence-16-v-03",
              "parentPatternId": "afrobeats-cadence-16",
              "name": "Log Drum Cadence — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                2,
                6,
                8,
                12,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "log-drum"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const AFROBEATS_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "afrobeats-call-7",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Shekere Response",
          "family": "Shekere",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "afrobeats",
            "shekere",
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
            1,
            4,
            7,
            9,
            12,
            15
          ],
          "accentProfile": [
            0.95,
            0.62,
            0.95,
            0.62,
            0.95,
            0.62
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62
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
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-call-7-v-01",
              "parentPatternId": "afrobeats-call-7",
              "name": "Shekere Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                7,
                9,
                15
              ],
              "accentProfile": [
                0.8999999999999999,
                0.57,
                0.8999999999999999,
                0.57
              ],
              "velocityProfile": [
                0.87,
                0.48999999999999994,
                0.87,
                0.54
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "afrobeats-call-7-v-02",
              "parentPatternId": "afrobeats-call-7",
              "name": "Shekere Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                7,
                9,
                12,
                15
              ],
              "accentProfile": [
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999,
                0.8799999999999999,
                0.6
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
              "id": "afrobeats-call-7-v-03",
              "parentPatternId": "afrobeats-call-7",
              "name": "Shekere Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                4,
                7,
                9,
                12,
                14,
                15
              ],
              "accentProfile": [
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "shekere"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const AFROBEATS_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "afrobeats-intro-10",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Afrobeat Intro",
          "family": "Afrobeat",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish the groove before the full ensemble enters.",
          "tags": [
            "afrobeats",
            "afrobeat",
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
            "guitar"
          ],
          "compatibleRoles": [
            "harmony",
            "texture"
          ],
          "compatibleInstruments": [
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            3,
            4,
            6,
            9,
            11,
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
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.63
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
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
              "id": "afrobeats-intro-10-v-01",
              "parentPatternId": "afrobeats-intro-10",
              "name": "Afrobeat Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                4,
                6,
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
              "id": "afrobeats-intro-10-v-02",
              "parentPatternId": "afrobeats-intro-10",
              "name": "Afrobeat Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                3,
                4,
                6,
                9,
                11,
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
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96,
                0.61
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
            },
            {
              "id": "afrobeats-intro-10-v-03",
              "parentPatternId": "afrobeats-intro-10",
              "name": "Afrobeat Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                3,
                4,
                6,
                9,
                11,
                12,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "afrobeat"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "afrobeats-chorus-12",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Shekere Chorus Lift",
          "family": "Shekere",
          "category": "sectionPattern",
          "description": "A higher-energy chorus layer increases rhythmic density while keeping the underlying pulse clear.",
          "tags": [
            "afrobeats",
            "shekere",
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
            "guitar"
          ],
          "compatibleRoles": [
            "pulse",
            "harmony",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            5,
            6,
            8,
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
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.63
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-chorus-12-v-01",
              "parentPatternId": "afrobeats-chorus-12",
              "name": "Shekere Chorus Lift — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5,
                6,
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
              "id": "afrobeats-chorus-12-v-02",
              "parentPatternId": "afrobeats-chorus-12",
              "name": "Shekere Chorus Lift — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                5,
                6,
                8,
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
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96,
                0.61
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
            },
            {
              "id": "afrobeats-chorus-12-v-03",
              "parentPatternId": "afrobeats-chorus-12",
              "name": "Shekere Chorus Lift — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                3,
                5,
                6,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "shekere"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "afrobeats-bridge-13",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Hook Bridge",
          "family": "Hook",
          "category": "sectionPattern",
          "description": "A contrasting bridge texture creates a clear change in energy before the main section returns.",
          "tags": [
            "afrobeats",
            "hook",
            "bridge",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "lead"
          ],
    
          "approaches": ["comping", "phrase"],
          "instruments": [
            "guitar"
          ],
          "compatibleRoles": [
            "harmony",
            "lead"
          ],
          "compatibleInstruments": [
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            5,
            7,
            8,
            10,
            13,
            15
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.63
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "legato"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "bridge",
            "interlude",
            "development"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-bridge-13-v-01",
              "parentPatternId": "afrobeats-bridge-13",
              "name": "Hook Bridge — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5,
                7,
                10,
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
              "id": "afrobeats-bridge-13-v-02",
              "parentPatternId": "afrobeats-bridge-13",
              "name": "Hook Bridge — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                5,
                7,
                8,
                10,
                13,
                15
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96,
                0.61
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
            },
            {
              "id": "afrobeats-bridge-13-v-03",
              "parentPatternId": "afrobeats-bridge-13",
              "name": "Hook Bridge — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                2,
                5,
                7,
                8,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "hook"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.7,
          "enabled": true
        }
];


const AFROBEATS_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "afrobeats-fill-14",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Horn Fill",
          "family": "Horn",
          "category": "fill",
          "transitionType": "fill",
          "description": "A short transition fill that signals",
          "tags": [
            "afrobeats",
            "horn",
            "fill",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "fill",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion"
          ],
          "compatibleRoles": [
            "fill",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.72,
            0.78,
            0.84,
            0.72,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            0.72,
            0.95,
            1
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "pre-chorus",
            "turnaround",
            "ending"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-fill-14-v-01",
              "parentPatternId": "afrobeats-fill-14",
              "name": "Horn Fill — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.6699999999999999,
                0.73,
                0.7899999999999999,
                0.6699999999999999
              ],
              "velocityProfile": [
                0.64,
                0.65,
                0.76,
                0.64
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "afrobeats-fill-14-v-02",
              "parentPatternId": "afrobeats-fill-14",
              "name": "Horn Fill — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.6799999999999999,
                0.86,
                0.7999999999999999,
                0.7999999999999999,
                0.96,
                1
              ],
              "velocityProfile": [
                0.78,
                0.71,
                0.82,
                0.78,
                0.9299999999999999,
                0.98
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
              "id": "afrobeats-fill-14-v-03",
              "parentPatternId": "afrobeats-fill-14",
              "name": "Horn Fill — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.7,
                0.76,
                0.82,
                0.7,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                0.72,
                0.73,
                0.84,
                0.72,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "horn"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const AFROBEATS_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "afrobeats-break-15",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Afrobeat Break",
          "family": "Afrobeat",
          "category": "break",
          "transitionType": "fill",
          "description": "A deliberate drop in density creates contrast before the next section.",
          "tags": [
            "afrobeats",
            "afrobeat",
            "break",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "drums",
            "bass"
          ],
    
          "approaches": ["groove", "walking"],
          "instruments": [
            "drums",
            "percussion",
            "bass"
          ],
          "compatibleRoles": [
            "drums",
            "bass"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            5,
            7,
            11,
            13,
            15
          ],
          "accentProfile": [
            1,
            0.55,
            0.55,
            0.55,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.5,
            0.55,
            0.55,
            0.95,
            1
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "stop-time"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-break-15-v-01",
              "parentPatternId": "afrobeats-break-15",
              "name": "Afrobeat Break — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                7,
                11,
                15
              ],
              "accentProfile": [
                0.95,
                0.5,
                0.5,
                0.5
              ],
              "velocityProfile": [
                0.92,
                0.42,
                0.47000000000000003,
                0.47000000000000003
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "afrobeats-break-15-v-02",
              "parentPatternId": "afrobeats-break-15",
              "name": "Afrobeat Break — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                5,
                7,
                11,
                13,
                15
              ],
              "accentProfile": [
                0.96,
                0.63,
                0.51,
                0.63,
                0.96,
                1
              ],
              "velocityProfile": [
                1,
                0.48,
                0.53,
                0.6100000000000001,
                0.9299999999999999,
                0.98
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
              "id": "afrobeats-break-15-v-03",
              "parentPatternId": "afrobeats-break-15",
              "name": "Afrobeat Break — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                5,
                7,
                11,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.53,
                0.53,
                0.53,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.5,
                0.55,
                0.55,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "afrobeat"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const AFROBEATS_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "afrobeats--phrasing",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Afrobeats Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Hook-driven vocal placement designed around syncopated",
          "tags": [
            "afrobeats",
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
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats--phrasing-v--alt",
              "parentPatternId": "afrobeats--phrasing",
              "name": "Afrobeats Vocal Phrasing — alternate phrasing",
              "variationType": "phraseStart",
              "probability": 0.2,
              "description": "An alternate vocal entry shifts the placement of a phrase for subtle rhythmic variation.",
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
              "id": "afrobeats--phrasing-v-final-accent",
              "parentPatternId": "afrobeats--phrasing",
              "name": "Afrobeats Vocal Phrasing — accent shift",
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
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Afrobeats.",
          "authenticityTags": [
            "afrobeats",
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
];


const AFROBEATS_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
    "id": "tech-afrobeats-sparse-sub-bass-anticipation",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-west-african-highlife-guitar",
      "afrobeats-afro-fusion-burna-boy",
      "afrobeats-afropop-guitar-groove",
      "afrobeats-afrobeats-percussive-minimalism"
    ],
    "name": "sparse sub-bass anticipation",
    "shortName": "sparse sub-bass anticipation",
    "family": "afrobeats",
    "category": "bass",
    "description": "Technique: sparse sub-bass anticipation",
    "tags": [
      "afrobeats",
      "sparse sub-bass anticipation"
    ],
    "approaches": [
      "sparse sub-bass anticipation"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "bass"
    ],
    "instruments": [
      "bass"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "afrobeats",
      "sparse sub-bass anticipation"
    ],
    "techniques": [
      "sparse sub-bass anticipation"
    ]
  }
];


const AFROBEATS_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-afrobeats-interlocking-guitar-ostinati",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-west-african-highlife-guitar",
      "afrobeats-afropop-guitar-groove"
    ],
    "name": "interlocking guitar ostinati",
    "shortName": "interlocking guitar ostinati",
    "family": "afrobeats",
    "category": "comping",
    "description": "Technique: interlocking guitar ostinati",
    "tags": [
      "afrobeats",
      "interlocking guitar ostinati"
    ],
    "approaches": [
      "interlocking guitar ostinati"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "guitar",
      "lead",
      "comp"
    ],
    "instruments": [
      "electric-guitar"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "afrobeats",
      "interlocking guitar ostinati"
    ],
    "techniques": [
      "interlocking guitar ostinati"
    ]
  }
];


const AFROBEATS_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-afrobeats-call-and-response-vocal-fragments",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-west-african-highlife-guitar",
      "afrobeats-afro-fusion-burna-boy",
      "afrobeats-afrobeats-percussive-minimalism"
    ],
    "name": "call-and-response vocal fragments",
    "shortName": "call-and-response vocal fragments",
    "family": "afrobeats",
    "category": "lead",
    "description": "Technique: call-and-response vocal fragments",
    "tags": [
      "afrobeats",
      "call-and-response vocal fragments"
    ],
    "approaches": [
      "call-and-response vocal fragments"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "voice",
      "lead"
    ],
    "instruments": [
      "voice"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "afrobeats",
      "call-and-response vocal fragments"
    ],
    "techniques": [
      "call-and-response vocal fragments"
    ]
  },
  {
    "id": "tech-afrobeats-vocal-as-rhythm-phrasing",
    "worldId": "afrobeats",
    "styleIds": [
      "afrobeats-afro-fusion-burna-boy",
      "afrobeats-afrobeats-percussive-minimalism"
    ],
    "name": "vocal-as-rhythm phrasing",
    "shortName": "vocal-as-rhythm phrasing",
    "family": "afrobeats",
    "category": "lead",
    "description": "Technique: vocal-as-rhythm phrasing",
    "tags": [
      "afrobeats",
      "vocal-as-rhythm phrasing"
    ],
    "approaches": [
      "vocal-as-rhythm phrasing"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "voice",
      "lead"
    ],
    "instruments": [
      "voice"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "afrobeats",
      "vocal-as-rhythm phrasing"
    ],
    "techniques": [
      "vocal-as-rhythm phrasing"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "groove": AFROBEATS_WORLD_PATTERNS_GROOVE,
  "ostinato": AFROBEATS_WORLD_PATTERNS_OSTINATO,
  "cadence": AFROBEATS_WORLD_PATTERNS_CADENCE,
  "interactionPattern": AFROBEATS_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": AFROBEATS_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": AFROBEATS_WORLD_PATTERNS_FILL,
  "break": AFROBEATS_WORLD_PATTERNS_BREAK,
  "phrasePattern": AFROBEATS_WORLD_PATTERNS_PHRASEPATTERN,
  "bass": AFROBEATS_WORLD_PATTERNS_BASS,
  "comping": AFROBEATS_WORLD_PATTERNS_COMPING,
  "lead": AFROBEATS_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"groove","index":0},{"category":"groove","index":1},{"category":"ostinato","index":0},{"category":"groove","index":2},{"category":"cadence","index":0},{"category":"groove","index":3},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":4},{"category":"sectionPattern","index":0},{"category":"groove","index":5},{"category":"sectionPattern","index":1},{"category":"sectionPattern","index":2},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":1},{"category":"phrasePattern","index":0},{"category":"bass","index":0},{"category":"comping","index":0},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"lead","index":0},{"category":"lead","index":1}];

export const AFROBEATS_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
