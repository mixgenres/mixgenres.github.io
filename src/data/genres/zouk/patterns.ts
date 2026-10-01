import type { GenreWorld, MusicalPattern } from '../../schema';


const ZOUK_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "zouk-bass-movement",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Zouk Syncopated Bass Movement",
          "family": "Zouk Basslines",
          "category": "ostinato",
          "description": "Warm, round bass with syncopated 16th",
          "tags": [
            "zouk",
            "bass",
            "kassav",
            "groove",
            "antilles"
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
            12,
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.95,
            0.8,
            0.9,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.9,
            0.75,
            0.85,
            0.8
          ],
          "articulations": [
            "slap-pop",
            "warm-sub-slide"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo",
            "vamp"
          ],
          "variants": [
            {
              "id": "zouk-bass-sub-pulse",
              "parentPatternId": "zouk-bass-movement",
              "name": "Zouk Love Deep Sub-Bass Glide",
              "variationType": "sparse",
              "probability": 0.5,
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                1,
                0.9,
                0.8,
                0.95
              ],
              "description": "A slower, heavier sub-bass pattern suits breakdowns and sparse passages."
            },
            {
              "id": "zouk-bass-movement-v-02",
              "parentPatternId": "zouk-bass-movement",
              "name": "Zouk Syncopated Bass Movement — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.9099999999999999,
                0.88,
                0.86,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.88,
                0.81,
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
          "weight": 0.7,
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    },
  {
          "id": "zouk-guitar-skank-chawa",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-love"],
          "name": "Chawa Guitar Skank",
          "family": "Zouk Guitar Chawa",
          "category": "ostinato",
          "description": "Crisp, muted single-coil electric guitar chops",
          "tags": [
            "guitar",
            "skank",
            "chawa",
            "zouk",
            "clean"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony",
            "rhythm-guitar"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "electric-guitar",
            "guitar",
            "keys"
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
            0.9,
            1,
            0.9,
            1
          ],
          "velocityProfile": [
            0.85,
            0.95,
            0.85,
            0.95
          ],
          "articulations": [
            "staccato-chop",
            "palm-mute"
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
              "id": "zouk-guitar-double-chop",
              "parentPatternId": "zouk-guitar-skank-chawa",
              "name": "Double-Time 16th Chawa Chop",
              "variationType": "dense",
              "probability": 0.45,
              "onsetGrid": [
                2,
                3,
                6,
                7,
                10,
                11,
                14,
                15
              ],
              "accentProfile": [
                0.9,
                0.5,
                1,
                0.5,
                0.9,
                0.5,
                1,
                0.5
              ],
              "description": "Rapid double-stroke chops for high-energy Zouk"
            },
            {
              "id": "zouk-guitar-skank-chawa-v-02",
              "parentPatternId": "zouk-guitar-skank-chawa",
              "name": "Chawa Guitar Skank — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.86,
                1,
                0.86,
                1
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.9299999999999999,
                0.83,
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
          "weight": 0.7,
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    },
  {
          "id": "zouk-anchor-11",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Chawa Anchor",
          "family": "Chawa",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "zouk",
            "chawa",
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
            3,
            6,
            8,
            11,
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
              "id": "zouk-anchor-11-v-01",
              "parentPatternId": "zouk-anchor-11",
              "name": "Chawa Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
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
              "id": "zouk-anchor-11-v-02",
              "parentPatternId": "zouk-anchor-11",
              "name": "Chawa Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
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
          "provenance": "GenreDAW catalog rebuild from existing Zouk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "zouk",
            "chawa"
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


const ZOUK_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "zouk-french-bass",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "French Antillean Zouk Bass",
          "family": "Bass",
          "category": "break",
          "transitionType": "fill",
          "description": "Melodic driving bass line with Caribbean",
          "tags": [
            "zouk",
            "bass",
            "antilles"
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
            0,
            3,
            6,
            8,
            12
          ],
          "accentProfile": [
            1,
            0.75,
            0.9,
            0.8,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.7,
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
            "chorus"
          ],
          "variants": [
            {
              "id": "zouk-french-bass-v-01",
              "parentPatternId": "zouk-french-bass",
              "name": "French Antillean Zouk Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                8
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.62,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "zouk-french-bass-v-02",
              "parentPatternId": "zouk-french-bass",
              "name": "French Antillean Zouk Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                12
              ],
              "accentProfile": [
                0.96,
                0.83,
                0.86,
                0.88,
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
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
        }
];


const ZOUK_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "zouk-shaker",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-love"],
          "name": "Zouk Shaker",
          "family": "Percussion",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Continuous 16ths shaker with accented 8th",
          "tags": [
            "zouk",
            "shaker",
            "percussion"
          ],
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
            0.9,
            0.5,
            0.7,
            0.5,
            0.95,
            0.5,
            0.7,
            0.5,
            0.9,
            0.5,
            0.7,
            0.5,
            0.95,
            0.5,
            0.7,
            0.55
          ],
          "velocityProfile": [
            0.85,
            0.45,
            0.65,
            0.45,
            0.9,
            0.45,
            0.65,
            0.45,
            0.85,
            0.45,
            0.65,
            0.45,
            0.9,
            0.45,
            0.65,
            0.5
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
              "id": "zouk-shaker-v-01",
              "parentPatternId": "zouk-shaker",
              "name": "Zouk Shaker — sparse variation",
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
                0.85,
                0.45,
                0.6499999999999999,
                0.45,
                0.8999999999999999,
                0.45,
                0.6499999999999999,
                0.45,
                0.85,
                0.45,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.77,
                0.4,
                0.5700000000000001,
                0.4,
                0.8200000000000001,
                0.4,
                0.5700000000000001,
                0.4,
                0.77,
                0.4,
                0.5700000000000001
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
              "id": "zouk-shaker-v-02",
              "parentPatternId": "zouk-shaker",
              "name": "Zouk Shaker — accent shift",
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
                0.86,
                0.58,
                0.6599999999999999,
                0.58,
                0.9099999999999999,
                0.58,
                0.6599999999999999,
                0.58,
                0.86,
                0.58,
                0.6599999999999999,
                0.58,
                0.9099999999999999,
                0.58,
                0.6599999999999999,
                0.63
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.43,
                0.63,
                0.51,
                0.88,
                0.43,
                0.71,
                0.43,
                0.83,
                0.51,
                0.63,
                0.43,
                0.96,
                0.43,
                0.63,
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
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
        }
];


const ZOUK_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "zouk-ti-bwa",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Ti-Bwa Woodblock Ostinato",
          "family": "Percussion",
          "category": "groove",
          "description": "Traditional Martinique and Guadeloupe ti-bwa stick patterns mark the pulse.",
          "tags": [
            "zouk",
            "ti-bwa",
            "percussion",
            "woodblock",
            "antilles"
          ],
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
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.78,
            0.92,
            0.74,
            0.94,
            0.72,
            0.88
          ],
          "velocityProfile": [
            0.95,
            0.72,
            0.88,
            0.7,
            0.9,
            0.68,
            0.84
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "zouk-ti-bwa-v-01",
              "parentPatternId": "zouk-ti-bwa",
              "name": "Ti-Bwa Woodblock Ostinato — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.95,
                0.73,
                0.87,
                0.69,
                0.8899999999999999
              ],
              "velocityProfile": [
                0.87,
                0.64,
                0.8,
                0.62,
                0.8200000000000001
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
              "id": "zouk-ti-bwa-v-02",
              "parentPatternId": "zouk-ti-bwa",
              "name": "Ti-Bwa Woodblock Ostinato — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.86,
                0.88,
                0.82,
                0.8999999999999999,
                0.7999999999999999,
                0.84
              ],
              "velocityProfile": [
                1,
                0.7,
                0.86,
                0.76,
                0.88,
                0.66,
                0.8999999999999999
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
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
          "id": "zouk-synth-chords",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-love"],
          "name": "Zouk DX7 Synth Stabs",
          "family": "Synth",
          "category": "groove",
          "description": "Syncopated DX7 electric piano and FM",
          "tags": [
            "zouk",
            "dx7",
            "synth",
            "keys"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "keys",
            "synth"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "keys",
            "synth"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.88,
            0.98,
            0.88,
            1
          ],
          "velocityProfile": [
            0.82,
            0.94,
            0.82,
            0.96
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
              "id": "zouk-synth-chords-v-01",
              "parentPatternId": "zouk-synth-chords",
              "name": "Zouk DX7 Synth Stabs — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                3,
                10,
                14
              ],
              "accentProfile": [
                0.83,
                0.9299999999999999,
                0.83
              ],
              "velocityProfile": [
                0.74,
                0.86,
                0.74
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "zouk-synth-chords-v-02",
              "parentPatternId": "zouk-synth-chords",
              "name": "Zouk DX7 Synth Stabs — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                3,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.84,
                1,
                0.84,
                1
              ],
              "velocityProfile": [
                0.8799999999999999,
                0.9199999999999999,
                0.7999999999999999,
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
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
          "id": "zouk-snare",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Zouk Snare Rimshot",
          "family": "Beat",
          "category": "groove",
          "description": "Snare rimshot on the backbeat locking",
          "tags": [
            "zouk",
            "snare",
            "drums"
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
          "subdivisions": 16,
          "onsetGrid": [
            4,
            12
          ],
          "accentProfile": [
            0.95,
            1
          ],
          "velocityProfile": [
            0.9,
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
              "id": "zouk-snare-v-01-safe",
              "parentPatternId": "zouk-snare",
              "name": "Zouk Snare Rimshot — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                4,
                12
              ],
              "accentProfile": [
                0.8999999999999999,
                1
              ],
              "velocityProfile": [
                0.93,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "zouk-snare-v-02-safe",
              "parentPatternId": "zouk-snare",
              "name": "Zouk Snare Rimshot — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                4,
                12
              ],
              "accentProfile": [
                0.8999999999999999,
                1
              ],
              "velocityProfile": [
                0.93,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
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
          "id": "zouk-horn-stabs",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Kassav Horn Section Stabs",
          "family": "Brass",
          "category": "groove",
          "description": "Punchy Kassav-style brass horn section stabs",
          "tags": [
            "zouk",
            "brass",
            "horns",
            "kassav",
            "antilles"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "lead",
            "brass"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet",
            "brass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            6,
            11,
            14
          ],
          "accentProfile": [
            0.95,
            1,
            0.95,
            1
          ],
          "velocityProfile": [
            0.9,
            0.96,
            0.9,
            0.96
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "zouk-horn-stabs-v-01",
              "parentPatternId": "zouk-horn-stabs",
              "name": "Kassav Horn Section Stabs — sparse variation",
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
                0.95,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.88,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "zouk-horn-stabs-v-02",
              "parentPatternId": "zouk-horn-stabs",
              "name": "Kassav Horn Section Stabs — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                3,
                6,
                11,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                1,
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                0.96,
                0.94,
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
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
          "id": "zouk-comp-12",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Zouk Love Comping",
          "family": "Zouk Love",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "zouk",
            "zouk-zouk-love",
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
            "guitar",
            "keys"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "guitar",
            "keys"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            5,
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
              "id": "zouk-comp-12-v-01",
              "parentPatternId": "zouk-comp-12",
              "name": "Zouk Love Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                8,
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
              "id": "zouk-comp-12-v-02",
              "parentPatternId": "zouk-comp-12",
              "name": "Zouk Love Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                5,
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
          "provenance": "GenreDAW catalog rebuild from existing Zouk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "zouk",
            "zouk-zouk-love"
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
          "id": "zouk-verse-14",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Hook Verse Variation",
          "family": "Hook",
          "category": "groove",
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
          "tags": [
            "zouk",
            "hook",
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
            0,
            1,
            3,
            6,
            8,
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
              "id": "zouk-verse-14-v-01",
              "parentPatternId": "zouk-verse-14",
              "name": "Hook Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
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
              "id": "zouk-verse-14-v-02",
              "parentPatternId": "zouk-verse-14",
              "name": "Hook Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                3,
                6,
                8,
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
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Zouk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "zouk",
            "hook"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        }
,
  {
    "id": "tech-zouk-caribbean-percussion-layer",
    "worldId": "zouk",
    "styleIds": [
      "zouk-kassav-zouk-beton",
      "zouk-zouk-kizomba-bridge"
    ],
    "name": "Caribbean percussion layer",
    "shortName": "Caribbean percussion layer",
    "family": "zouk",
    "category": "groove",
    "description": "Technique: Caribbean percussion layer",
    "tags": [
      "zouk",
      "Caribbean percussion layer"
    ],
    "approaches": [
      "Caribbean percussion layer"
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
      "zouk",
      "Caribbean percussion layer"
    ],
    "techniques": [
      "Caribbean percussion layer"
    ]
  },
  {
    "id": "style-zouk-kassav-zouk-beton-signature",
    "worldId": "zouk",
    "styleIds": [
      "zouk-kassav-zouk-beton"
    ],
    "name": "Kassav' / Zouk Béton Signature Cell",
    "shortName": "Kassav' / Zouk Béton Cell",
    "family": "zouk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "zouk",
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
      "zouk",
      "signature"
    ],
    "techniques": [
      "zouk guitar syncopation",
      "zouk béton bass",
      "Caribbean percussion layer",
      "ghetto-zouk sub-bass",
      "kizomba/zouk hybrid bass",
      "sparse electronic percussion"
    ]
  },
  {
    "id": "style-zouk-antillean-big-band-zouk-signature",
    "worldId": "zouk",
    "styleIds": [
      "zouk-antillean-big-band-zouk"
    ],
    "name": "Antillean Big-Band Zouk Signature Cell",
    "shortName": "Antillean Big-Band Zouk Cell",
    "family": "zouk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "zouk",
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
      "brass",
      "strings",
      "rhodes",
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
      "zouk",
      "signature"
    ],
    "techniques": [
      "zouk horn stab",
      "keyboard ostinato",
      "ghetto-zouk sub-bass",
      "kizomba/zouk hybrid bass",
      "zouk béton bass",
      "zouk guitar syncopation"
    ]
  },
  {
    "id": "style-zouk-cabo-zouk-signature",
    "worldId": "zouk",
    "styleIds": [
      "zouk-cabo-zouk"
    ],
    "name": "Cabo Zouk Signature Cell",
    "shortName": "Cabo Zouk Cell",
    "family": "zouk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "zouk",
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
      "synth",
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
      "zouk",
      "signature"
    ],
    "techniques": [
      "ghetto-zouk sub-bass",
      "R&B chord extensions",
      "kizomba/zouk hybrid bass",
      "zouk béton bass",
      "zouk guitar syncopation",
      "zouk horn stab"
    ]
  },
  {
    "id": "style-zouk-zouk-kizomba-bridge-signature",
    "worldId": "zouk",
    "styleIds": [
      "zouk-zouk-kizomba-bridge"
    ],
    "name": "Zouk–Kizomba Bridge Signature Cell",
    "shortName": "Zouk–Kizomba Bridge Cell",
    "family": "zouk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "zouk",
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
      "sub-bass",
      "synth",
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
      "zouk",
      "signature"
    ],
    "techniques": [
      "kizomba/zouk hybrid bass",
      "R&B chord extensions",
      "ghetto-zouk sub-bass",
      "zouk béton bass",
      "Caribbean percussion layer",
      "sparse electronic percussion"
    ]
  }
];


const ZOUK_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "zouk-phrase-9",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Hook Phrase",
          "family": "Hook",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "zouk",
            "hook",
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
          "swingPercentage": 50,
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
              "id": "zouk-phrase-9-v-01",
              "parentPatternId": "zouk-phrase-9",
              "name": "Hook Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "zouk-phrase-9-v-02",
              "parentPatternId": "zouk-phrase-9",
              "name": "Hook Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Zouk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "zouk",
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
        },
  {
          "id": "zouk--phrasing",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Zouk Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Breathy lead-vocal placement that leaves space",
          "tags": [
            "zouk",
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
              "id": "zouk--phrasing-v--alt",
              "parentPatternId": "zouk--phrasing",
              "name": "Zouk Vocal Phrasing — alternate phrasing",
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
              "id": "zouk--phrasing-v-final-accent",
              "parentPatternId": "zouk--phrasing",
              "name": "Zouk Vocal Phrasing — accent shift",
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
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Zouk.",
          "authenticityTags": [
            "zouk",
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


const ZOUK_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "zouk-call-10",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Tarraxinha Response",
          "family": "Tarraxinha",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "zouk",
            "tarraxinha",
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
            2,
            5,
            7,
            10,
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
          "syncopationRating": 0.8333333333333334,
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
              "id": "zouk-call-10-v-01",
              "parentPatternId": "zouk-call-10",
              "name": "Tarraxinha Response — sparse variation",
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
              "id": "zouk-call-10-v-02",
              "parentPatternId": "zouk-call-10",
              "name": "Tarraxinha Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                5,
                7,
                10,
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
              "id": "zouk-call-10-v-03",
              "parentPatternId": "zouk-call-10",
              "name": "Tarraxinha Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                2,
                5,
                7,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Zouk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "zouk",
            "tarraxinha"
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


const ZOUK_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "zouk-intro-13",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Drop Intro",
          "family": "Drop",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish the groove before the full ensemble enters.",
          "tags": [
            "zouk",
            "drop",
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
            "guitar",
            "keys"
          ],
          "compatibleRoles": [
            "harmony",
            "texture"
          ],
          "compatibleInstruments": [
            "guitar",
            "keys"
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
              "id": "zouk-intro-13-v-01",
              "parentPatternId": "zouk-intro-13",
              "name": "Drop Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5,
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
              "id": "zouk-intro-13-v-02",
              "parentPatternId": "zouk-intro-13",
              "name": "Drop Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                5,
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
            },
            {
              "id": "zouk-intro-13-v-03",
              "parentPatternId": "zouk-intro-13",
              "name": "Drop Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                2,
                5,
                7,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Zouk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "zouk",
            "drop"
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
          "id": "zouk-chorus-15",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Tarraxinha Chorus Lift",
          "family": "Tarraxinha",
          "category": "sectionPattern",
          "description": "A higher-energy chorus layer increases rhythmic density while keeping the underlying pulse clear.",
          "tags": [
            "zouk",
            "tarraxinha",
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
            1,
            2,
            4,
            7,
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
          "syncopationRating": 0.7142857142857143,
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
              "id": "zouk-chorus-15-v-01",
              "parentPatternId": "zouk-chorus-15",
              "name": "Tarraxinha Chorus Lift — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                4,
                7,
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
              "id": "zouk-chorus-15-v-02",
              "parentPatternId": "zouk-chorus-15",
              "name": "Tarraxinha Chorus Lift — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                2,
                4,
                7,
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
            },
            {
              "id": "zouk-chorus-15-v-03",
              "parentPatternId": "zouk-chorus-15",
              "name": "Tarraxinha Chorus Lift — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                2,
                4,
                7,
                9,
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
          "provenance": "GenreDAW catalog rebuild from existing Zouk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "zouk",
            "tarraxinha"
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
          "id": "zouk-bridge-16",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Chawa Bridge",
          "family": "Chawa",
          "category": "sectionPattern",
          "description": "A contrasting bridge texture creates a clear change in energy before the main section returns.",
          "tags": [
            "zouk",
            "chawa",
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
            "guitar",
            "keys"
          ],
          "compatibleRoles": [
            "harmony",
            "lead"
          ],
          "compatibleInstruments": [
            "guitar",
            "keys"
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
              "id": "zouk-bridge-16-v-01",
              "parentPatternId": "zouk-bridge-16",
              "name": "Chawa Bridge — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "zouk-bridge-16-v-02",
              "parentPatternId": "zouk-bridge-16",
              "name": "Chawa Bridge — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
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
              "id": "zouk-bridge-16-v-03",
              "parentPatternId": "zouk-bridge-16",
              "name": "Chawa Bridge — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                3,
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
                0.72,
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
          "provenance": "GenreDAW catalog rebuild from existing Zouk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "zouk",
            "chawa"
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


const ZOUK_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
    "id": "tech-zouk-zouk-beton-bass",
    "worldId": "zouk",
    "styleIds": [
      "zouk-kassav-zouk-beton",
      "zouk-antillean-big-band-zouk",
      "zouk-cabo-zouk",
      "zouk-zouk-kizomba-bridge"
    ],
    "name": "zouk béton bass",
    "shortName": "zouk béton bass",
    "family": "zouk",
    "category": "bass",
    "description": "Technique: zouk béton bass",
    "tags": [
      "zouk",
      "zouk béton bass"
    ],
    "approaches": [
      "zouk béton bass"
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
      "zouk",
      "zouk béton bass"
    ],
    "techniques": [
      "zouk béton bass"
    ]
  },
  {
    "id": "tech-zouk-ghetto-zouk-sub-bass",
    "worldId": "zouk",
    "styleIds": [
      "zouk-kassav-zouk-beton",
      "zouk-antillean-big-band-zouk",
      "zouk-cabo-zouk",
      "zouk-zouk-kizomba-bridge"
    ],
    "name": "ghetto-zouk sub-bass",
    "shortName": "ghetto-zouk sub-bass",
    "family": "zouk",
    "category": "bass",
    "description": "Technique: ghetto-zouk sub-bass",
    "tags": [
      "zouk",
      "ghetto-zouk sub-bass"
    ],
    "approaches": [
      "ghetto-zouk sub-bass"
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
      "zouk",
      "ghetto-zouk sub-bass"
    ],
    "techniques": [
      "ghetto-zouk sub-bass"
    ]
  },
  {
    "id": "tech-zouk-kizomba-zouk-hybrid-bass",
    "worldId": "zouk",
    "styleIds": [
      "zouk-kassav-zouk-beton",
      "zouk-antillean-big-band-zouk",
      "zouk-cabo-zouk",
      "zouk-zouk-kizomba-bridge"
    ],
    "name": "kizomba/zouk hybrid bass",
    "shortName": "kizomba/zouk hybrid bass",
    "family": "zouk",
    "category": "bass",
    "description": "Technique: kizomba/zouk hybrid bass",
    "tags": [
      "zouk",
      "kizomba/zouk hybrid bass"
    ],
    "approaches": [
      "kizomba/zouk hybrid bass"
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
      "zouk",
      "kizomba/zouk hybrid bass"
    ],
    "techniques": [
      "kizomba/zouk hybrid bass"
    ]
  }
];


const ZOUK_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-zouk-zouk-guitar-syncopation",
    "worldId": "zouk",
    "styleIds": [
      "zouk-kassav-zouk-beton",
      "zouk-antillean-big-band-zouk",
      "zouk-cabo-zouk"
    ],
    "name": "zouk guitar syncopation",
    "shortName": "zouk guitar syncopation",
    "family": "zouk",
    "category": "comping",
    "description": "Technique: zouk guitar syncopation",
    "tags": [
      "zouk",
      "zouk guitar syncopation"
    ],
    "approaches": [
      "zouk guitar syncopation"
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
      "zouk",
      "zouk guitar syncopation"
    ],
    "techniques": [
      "zouk guitar syncopation"
    ]
  },
  {
    "id": "tech-zouk-keyboard-ostinato",
    "worldId": "zouk",
    "styleIds": [
      "zouk-antillean-big-band-zouk"
    ],
    "name": "keyboard ostinato",
    "shortName": "keyboard ostinato",
    "family": "zouk",
    "category": "comping",
    "description": "Technique: keyboard ostinato",
    "tags": [
      "zouk",
      "keyboard ostinato"
    ],
    "approaches": [
      "keyboard ostinato"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "harmony",
      "piano"
    ],
    "instruments": [
      "piano"
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
      "zouk",
      "keyboard ostinato"
    ],
    "techniques": [
      "keyboard ostinato"
    ]
  },
  {
    "id": "tech-zouk-r-b-chord-extensions",
    "worldId": "zouk",
    "styleIds": [
      "zouk-cabo-zouk",
      "zouk-zouk-kizomba-bridge"
    ],
    "name": "R&B chord extensions",
    "shortName": "R&B chord extensions",
    "family": "zouk",
    "category": "comping",
    "description": "Technique: R&B chord extensions",
    "tags": [
      "zouk",
      "R&B chord extensions"
    ],
    "approaches": [
      "R&B chord extensions"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "harmony",
      "piano"
    ],
    "instruments": [
      "piano"
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
      "zouk",
      "R&B chord extensions"
    ],
    "techniques": [
      "R&B chord extensions"
    ]
  }
];


const ZOUK_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-zouk-zouk-horn-stab",
    "worldId": "zouk",
    "styleIds": [
      "zouk-antillean-big-band-zouk",
      "zouk-cabo-zouk"
    ],
    "name": "zouk horn stab",
    "shortName": "zouk horn stab",
    "family": "zouk",
    "category": "lead",
    "description": "Technique: zouk horn stab",
    "tags": [
      "zouk",
      "zouk horn stab"
    ],
    "approaches": [
      "zouk horn stab"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "horn-section",
      "lead"
    ],
    "instruments": [
      "brass"
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
      "zouk",
      "zouk horn stab"
    ],
    "techniques": [
      "zouk horn stab"
    ]
  },
  {
    "id": "tech-zouk-romantic-vocal-legato",
    "worldId": "zouk",
    "styleIds": [],
    "name": "romantic vocal legato",
    "shortName": "romantic vocal legato",
    "family": "zouk",
    "category": "lead",
    "description": "Technique: romantic vocal legato",
    "tags": [
      "zouk",
      "romantic vocal legato"
    ],
    "approaches": [
      "romantic vocal legato"
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
      8
    ],
    "accentProfile": [
      1,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72
    ],
    "durationGrid": [
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "zouk",
      "romantic vocal legato"
    ],
    "techniques": [
      "romantic vocal legato"
    ]
  }
];


const ZOUK_WORLD_PATTERNS_TEXTURE: MusicalPattern[] = [
  {
    "id": "tech-zouk-sparse-electronic-percussion",
    "worldId": "zouk",
    "styleIds": [
      "zouk-kassav-zouk-beton",
      "zouk-zouk-kizomba-bridge"
    ],
    "name": "sparse electronic percussion",
    "shortName": "sparse electronic percussion",
    "family": "zouk",
    "category": "texture",
    "description": "Technique: sparse electronic percussion",
    "tags": [
      "zouk",
      "sparse electronic percussion"
    ],
    "approaches": [
      "sparse electronic percussion"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "texture",
      "lead"
    ],
    "instruments": [
      "synth"
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
      "zouk",
      "sparse electronic percussion"
    ],
    "techniques": [
      "sparse electronic percussion"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": ZOUK_WORLD_PATTERNS_OSTINATO,
  "break": ZOUK_WORLD_PATTERNS_BREAK,
  "cadence": ZOUK_WORLD_PATTERNS_CADENCE,
  "groove": ZOUK_WORLD_PATTERNS_GROOVE,
  "phrasePattern": ZOUK_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": ZOUK_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": ZOUK_WORLD_PATTERNS_SECTIONPATTERN,
  "bass": ZOUK_WORLD_PATTERNS_BASS,
  "comping": ZOUK_WORLD_PATTERNS_COMPING,
  "lead": ZOUK_WORLD_PATTERNS_LEAD,
  "texture": ZOUK_WORLD_PATTERNS_TEXTURE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":4},{"category":"sectionPattern","index":0},{"category":"groove","index":5},{"category":"sectionPattern","index":1},{"category":"sectionPattern","index":2},{"category":"phrasePattern","index":1},{"category":"bass","index":0},{"category":"bass","index":1},{"category":"bass","index":2},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"comping","index":2},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"lead","index":0},{"category":"lead","index":1},{"category":"texture","index":0}];

export const ZOUK_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
