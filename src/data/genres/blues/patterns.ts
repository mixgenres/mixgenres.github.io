import type { GenreWorld, MusicalPattern } from '../../schema';


const BLUES_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "blues-shuffle",
          "worldId": "blues",
          "styleIds": ["blues-chicago"],
          "name": "Chicago Shuffle",
          "family": "Shuffle",
          "category": "fill",
          "transitionType": "fill",
          "description": "A repeating triplet-derived blues pulse supports the phrase.",
          "tags": [
            "blues",
            "shuffle",
            "backbeat"
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
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            11
          ],
          "accentProfile": [
            1,
            0.65,
            0.9,
            0.65,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.6,
            0.85,
            0.6,
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
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "blues-shuffle-fill",
              "parentPatternId": "blues-shuffle",
              "name": "Shuffle Fill",
              "variationType": "fill",
              "probability": 0.45,
              "onsetGrid": [
                0,
                3,
                4,
                6,
                8,
                9,
                11
              ],
              "accentProfile": [
                1,
                0.6,
                0.85,
                0.7,
                0.9,
                0.65,
                1
              ],
              "description": "A short turnaround-oriented fill that leaves"
            },
            {
              "id": "blues-shuffle-v-02",
              "parentPatternId": "blues-shuffle",
              "name": "Chicago Shuffle — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                11
              ],
              "accentProfile": [
                0.96,
                0.73,
                0.86,
                0.73,
                0.9099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                0.96,
                0.58,
                0.83,
                0.6599999999999999,
                0.88,
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];


const BLUES_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "blues-boogie-bass",
          "worldId": "blues",
          "styleIds": ["blues-texas"],
          "name": "Boogie Root–Fifth Bass",
          "family": "Boogie Bass",
          "category": "ostinato",
          "description": "Alternating root, fifth and sixth movement",
          "tags": [
            "blues",
            "boogie",
            "bass"
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
            "piano"
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
            1,
            0.55,
            0.85,
            0.55,
            0.95,
            0.6,
            0.9,
            0.6
          ],
          "velocityProfile": [
            0.9,
            0.55,
            0.8,
            0.55,
            0.9,
            0.55,
            0.85,
            0.55
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
              "id": "blues-boogie-walkup",
              "parentPatternId": "blues-boogie-bass",
              "name": "Sixth Walk-Up",
              "variationType": "development",
              "probability": 0.35,
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                1,
                0.5,
                0.8,
                0.5,
                0.9,
                0.55,
                0.85,
                0.65,
                0.8,
                1
              ],
              "description": "A rising sixth or chromatic approach leads into the target note."
            },
            {
              "id": "blues-boogie-bass-v-02",
              "parentPatternId": "blues-boogie-bass",
              "name": "Boogie Root–Fifth Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
                0.96,
                0.63,
                0.8099999999999999,
                0.63,
                0.9099999999999999,
                0.6799999999999999,
                0.86,
                0.6799999999999999
              ],
              "velocityProfile": [
                0.96,
                0.53,
                0.78,
                0.6100000000000001,
                0.88,
                0.53,
                0.9099999999999999,
                0.53
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
          "weight": 0.7,
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-anchor-15",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "Call & Response Anchor",
          "family": "Call & Response",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "blues",
            "call-response",
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
          "anticipationOffset": 0,
          "swingPercentage": 66,
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
              "id": "blues-anchor-15-v-01",
              "parentPatternId": "blues-anchor-15",
              "name": "Call & Response Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "blues-anchor-15-v-02",
              "parentPatternId": "blues-anchor-15",
              "name": "Call & Response Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Blues world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "blues",
            "call-response"
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


const BLUES_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "blues-turnaround",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "12-Bar Turnaround",
          "family": "Turnaround",
          "category": "cadence",
          "transitionType": "fill",
          "description": "A compact cadence in the final",
          "tags": [
            "blues",
            "12-bar",
            "turnaround",
            "cadence"
          ],
          "scopes": [
            "phrase",
            "region",
            "song"
          ],
          "roles": [
            "harmony",
            "rhythm-guitar",
            "melody"
          ],
    
          "approaches": ["comping", "phrase"],
          "instruments": [
            "electric-guitar",
            "guitar",
            "piano"
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
            14,
            15
          ],
          "accentProfile": [
            0.8,
            0.6,
            0.75,
            0.9,
            0.7,
            0.85,
            0.7,
            1
          ],
          "velocityProfile": [
            0.75,
            0.55,
            0.7,
            0.9,
            0.65,
            0.8,
            0.65,
            1
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "turnaround",
            "ending"
          ],
          "variants": [
            {
              "id": "blues-turnaround-v-01",
              "parentPatternId": "blues-turnaround",
              "name": "12-Bar Turnaround — sparse variation",
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
                0.75,
                0.5499999999999999,
                0.7,
                0.85,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.67,
                0.47000000000000003,
                0.62,
                0.8200000000000001,
                0.5700000000000001
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
              "id": "blues-turnaround-v-02",
              "parentPatternId": "blues-turnaround",
              "name": "12-Bar Turnaround — accent shift",
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
                14,
                15
              ],
              "accentProfile": [
                0.76,
                0.6799999999999999,
                0.71,
                0.98,
                0.6599999999999999,
                0.9299999999999999,
                0.6599999999999999,
                1
              ],
              "velocityProfile": [
                0.81,
                0.53,
                0.6799999999999999,
                0.96,
                0.63,
                0.78,
                0.71,
                0.98
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
              "id": "blues-turnaround-v-03",
              "parentPatternId": "blues-turnaround",
              "name": "12-Bar Turnaround — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.78,
                0.58,
                0.73,
                0.88,
                0.6799999999999999,
                0.83,
                1,
                1
              ],
              "velocityProfile": [
                0.75,
                0.55,
                0.7,
                0.9,
                0.65,
                0.8,
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
    
          "difficulty": 3,
          "weight": 0.7,
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];


const BLUES_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "blues-slow-12-8",
          "worldId": "blues",
          "styleIds": ["blues-chicago"],
          "name": "Slow 12/8 Groove",
          "family": "Drums",
          "category": "break",
          "transitionType": "fill",
          "description": "Slow heavy triplet feel with snare",
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
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            6,
            9
          ],
          "accentProfile": [
            1,
            0.7,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.9,
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
              "id": "blues-slow-12-8-v-01",
              "parentPatternId": "blues-slow-12-8",
              "name": "Slow 12/8 Groove — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                9
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "blues-slow-12-8-v-02",
              "parentPatternId": "blues-slow-12-8",
              "name": "Slow 12/8 Groove — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                9
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.9099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.88,
                0.71
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];


const BLUES_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "blues-texas-shuffle",
          "worldId": "blues",
          "styleIds": ["blues-texas"],
          "name": "Texas Shuffle",
          "family": "Guitar",
          "category": "groove",
          "description": "Driving guitar shuffle with muted rake",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "guitar",
            "electric-guitar"
          ],
    
          "approaches": ["chop"],
          "instruments": [
            "guitar",
            "electric-guitar"
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
            0.65,
            0.85,
            0.6,
            0.95,
            0.65,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.6,
            0.8,
            0.55,
            0.9,
            0.6,
            0.8,
            0.65
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "blues-texas-shuffle-v-01",
              "parentPatternId": "blues-texas-shuffle",
              "name": "Texas Shuffle — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                9
              ],
              "accentProfile": [
                0.95,
                0.6,
                0.7999999999999999,
                0.5499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.52,
                0.7200000000000001,
                0.47000000000000003,
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
              "id": "blues-texas-shuffle-v-02",
              "parentPatternId": "blues-texas-shuffle",
              "name": "Texas Shuffle — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
                0.73,
                0.8099999999999999,
                0.6799999999999999,
                0.9099999999999999,
                0.73,
                0.8099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                0.96,
                0.58,
                0.78,
                0.6100000000000001,
                0.88,
                0.58,
                0.8600000000000001,
                0.63
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-soul-groove",
          "worldId": "blues",
          "styleIds": ["blues-soul"],
          "name": "Soul Blues Beat",
          "family": "Drums",
          "category": "groove",
          "description": "A straight-eighth-note Memphis beat gives the groove a firm backbeat.",
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
          "subdivisions": 8,
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            1,
            0.6,
            0.95,
            0.65
          ],
          "velocityProfile": [
            0.9,
            0.55,
            0.9,
            0.6
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
              "id": "blues-soul-groove-v-01",
              "parentPatternId": "blues-soul-groove",
              "name": "Soul Blues Beat — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6
              ],
              "accentProfile": [
                0.95,
                0.5499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.47000000000000003,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "blues-soul-groove-v-02",
              "parentPatternId": "blues-soul-groove",
              "name": "Soul Blues Beat — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                0.96,
                0.6799999999999999,
                0.9099999999999999,
                0.73
              ],
              "velocityProfile": [
                0.96,
                0.53,
                0.88,
                0.6599999999999999
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-bass-walk",
          "worldId": "blues",
          "styleIds": ["blues-chicago"],
          "name": "Walking Blues Bass",
          "family": "Bass",
          "category": "groove",
          "description": "Quarter-note walking bass leads through each chord change.",
          "tags": [],
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
            0.75,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.7,
            0.85,
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
              "id": "blues-bass-walk-v-01",
              "parentPatternId": "blues-bass-walk",
              "name": "Walking Blues Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                2,
                3
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
              "id": "blues-bass-walk-v-02",
              "parentPatternId": "blues-bass-walk",
              "name": "Walking Blues Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                2,
                3
              ],
              "accentProfile": [
                0.96,
                0.83,
                0.86,
                0.88
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.83,
                0.81
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-piano-triplets",
          "worldId": "blues",
          "styleIds": ["blues-chicago"],
          "name": "Piano Triplets",
          "family": "Piano",
          "category": "groove",
          "description": "Rolling right hand blues triplets over",
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
          "subdivisions": 12,
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
            11
          ],
          "accentProfile": [
            1,
            0.6,
            0.7,
            0.9,
            0.6,
            0.7,
            0.95,
            0.6,
            0.7,
            0.85,
            0.6,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.65,
            0.85,
            0.55,
            0.65,
            0.9,
            0.55,
            0.65,
            0.8,
            0.55,
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
              "id": "blues-piano-triplets-v-01",
              "parentPatternId": "blues-piano-triplets",
              "name": "Piano Triplets — sparse variation",
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
                11
              ],
              "accentProfile": [
                0.95,
                0.5499999999999999,
                0.6499999999999999,
                0.85,
                0.5499999999999999,
                0.6499999999999999,
                0.8999999999999999,
                0.5499999999999999
              ],
              "velocityProfile": [
                0.87,
                0.47000000000000003,
                0.5700000000000001,
                0.77,
                0.47000000000000003,
                0.5700000000000001,
                0.8200000000000001,
                0.47000000000000003
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "blues-piano-triplets-v-02",
              "parentPatternId": "blues-piano-triplets",
              "name": "Piano Triplets — accent shift",
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
                11
              ],
              "accentProfile": [
                0.96,
                0.6799999999999999,
                0.6599999999999999,
                0.98,
                0.5599999999999999,
                0.7799999999999999,
                0.9099999999999999,
                0.6799999999999999,
                0.6599999999999999,
                0.9299999999999999,
                0.5599999999999999,
                0.83
              ],
              "velocityProfile": [
                1,
                0.53,
                0.63,
                0.9099999999999999,
                0.53,
                0.63,
                0.96,
                0.53,
                0.63,
                0.8600000000000001,
                0.53,
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
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 4,
          "weight": 1,
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-horn-stabs",
          "worldId": "blues",
          "styleIds": ["blues-soul"],
          "name": "Horn Stabs",
          "family": "Brass",
          "category": "groove",
          "description": "Punchy brass punctuation answering the vocal",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "brass",
            "trumpet",
            "sax"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "brass",
            "trumpet",
            "sax"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            2,
            6
          ],
          "accentProfile": [
            0.9,
            1
          ],
          "velocityProfile": [
            0.85,
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
              "id": "blues-horn-stabs-v-01-safe",
              "parentPatternId": "blues-horn-stabs",
              "name": "Horn Stabs — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                2,
                6
              ],
              "accentProfile": [
                0.85,
                1
              ],
              "velocityProfile": [
                0.88,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "blues-horn-stabs-v-02-safe",
              "parentPatternId": "blues-horn-stabs",
              "name": "Horn Stabs — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                2,
                6
              ],
              "accentProfile": [
                0.85,
                1
              ],
              "velocityProfile": [
                0.88,
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-delta-slide",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "Slide Guitar Lick",
          "family": "Guitar",
          "category": "groove",
          "description": "Acoustic slide guitar response with vocal",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "guitar",
            "electric-guitar"
          ],
    
          "approaches": ["chop"],
          "instruments": [
            "guitar",
            "electric-guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            8,
            10,
            12
          ],
          "accentProfile": [
            1,
            0.7,
            0.9,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.85,
            0.7,
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
              "id": "blues-delta-slide-v-01",
              "parentPatternId": "blues-delta-slide",
              "name": "Slide Guitar Lick — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "blues-delta-slide-v-02",
              "parentPatternId": "blues-delta-slide",
              "name": "Slide Guitar Lick — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                10,
                12
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.86,
                0.83,
                0.8099999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.83,
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-rhumba",
          "worldId": "blues",
          "styleIds": ["blues-chicago"],
          "name": "Blues Rhumba",
          "family": "Drums",
          "category": "groove",
          "description": "Cross-stick and tom rhumba beat popularized",
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
            0,
            3,
            6,
            8,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.9,
            0.95,
            0.65,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.85,
            0.9,
            0.6,
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
              "id": "blues-rhumba-v-01",
              "parentPatternId": "blues-rhumba",
              "name": "Blues Rhumba — sparse variation",
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
                0.6499999999999999,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.77,
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
              "id": "blues-rhumba-v-02",
              "parentPatternId": "blues-rhumba",
              "name": "Blues Rhumba — accent shift",
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
                0.7799999999999999,
                0.86,
                1,
                0.61,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.83,
                0.96,
                0.58,
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-organ-swell",
          "worldId": "blues",
          "styleIds": ["blues-soul"],
          "name": "Organ Swell",
          "family": "Keys",
          "category": "groove",
          "description": "Hammond B3 chord swell rising into",
          "tags": [],
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
          "subdivisions": 4,
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.75,
            0.95
          ],
          "velocityProfile": [
            0.7,
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
              "id": "blues-organ-swell-v-01-safe",
              "parentPatternId": "blues-organ-swell",
              "name": "Organ Swell — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                2
              ],
              "accentProfile": [
                0.7,
                1
              ],
              "velocityProfile": [
                0.73,
                0.86
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "blues-organ-swell-v-02-safe",
              "parentPatternId": "blues-organ-swell",
              "name": "Organ Swell — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                2
              ],
              "accentProfile": [
                0.7,
                1
              ],
              "velocityProfile": [
                0.73,
                0.86
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-comp-16",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "Turnaround Comping",
          "family": "Turnaround",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "blues",
            "turnaround",
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
            "piano"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "guitar",
            "piano"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            4,
            6,
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
              "id": "blues-comp-16-v-01",
              "parentPatternId": "blues-comp-16",
              "name": "Turnaround Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                4,
                7,
                10,
                13,
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
              "id": "blues-comp-16-v-02",
              "parentPatternId": "blues-comp-16",
              "name": "Turnaround Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                4,
                6,
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
          "provenance": "GenreDAW catalog rebuild from existing Blues world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "blues",
            "turnaround"
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
    "id": "tech-blues-stop-time-blues",
    "worldId": "blues",
    "styleIds": [
      "blues-memphis-electric-blues",
      "blues-new-orleans-blues",
      "blues-british-blues-revival"
    ],
    "name": "stop-time blues",
    "shortName": "stop-time blues",
    "family": "blues",
    "category": "groove",
    "description": "Technique: stop-time blues",
    "tags": [
      "blues",
      "stop-time blues"
    ],
    "approaches": [
      "stop-time blues"
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
      "blues",
      "stop-time blues"
    ],
    "techniques": [
      "stop-time blues"
    ]
  },
  {
    "id": "tech-blues-shuffle-triplet-pocket",
    "worldId": "blues",
    "styleIds": [
      "blues-west-coast-jump-blues",
      "blues-new-orleans-blues"
    ],
    "name": "shuffle triplet pocket",
    "shortName": "shuffle triplet pocket",
    "family": "blues",
    "category": "groove",
    "description": "Technique: shuffle triplet pocket",
    "tags": [
      "blues",
      "shuffle triplet pocket"
    ],
    "approaches": [
      "shuffle triplet pocket"
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
      3,
      6,
      8,
      11,
      14
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65,
      1,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72
    ],
    "durationGrid": [
      1,
      1,
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
      "blues",
      "shuffle triplet pocket"
    ],
    "techniques": [
      "shuffle triplet pocket"
    ]
  },
  {
    "id": "tech-blues-new-orleans-second-line-accents",
    "worldId": "blues",
    "styleIds": [
      "blues-new-orleans-blues"
    ],
    "name": "New Orleans second-line accents",
    "shortName": "New Orleans second-line accents",
    "family": "blues",
    "category": "groove",
    "description": "Technique: New Orleans second-line accents",
    "tags": [
      "blues",
      "New Orleans second-line accents"
    ],
    "approaches": [
      "New Orleans second-line accents"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "lead"
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
      "blues",
      "New Orleans second-line accents"
    ],
    "techniques": [
      "New Orleans second-line accents"
    ]
  },
  {
    "id": "style-blues-memphis-electric-blues-signature",
    "worldId": "blues",
    "styleIds": [
      "blues-memphis-electric-blues"
    ],
    "name": "Memphis Electric Blues Signature Cell",
    "shortName": "Memphis Electric Blues Cell",
    "family": "blues",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "blues",
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
      "organ"
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
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "blues",
      "signature"
    ],
    "techniques": [
      "guitar bend/vibrato phrasing",
      "call-and-response guitar/vocal",
      "blues scale enclosure",
      "stop-time blues",
      "walking-blues bass"
    ]
  },
  {
    "id": "style-blues-west-coast-jump-blues-signature",
    "worldId": "blues",
    "styleIds": [
      "blues-west-coast-jump-blues"
    ],
    "name": "West Coast Jump Blues Signature Cell",
    "shortName": "West Coast Jump Blues Cell",
    "family": "blues",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "blues",
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
      "piano",
      "upright-bass",
      "drums"
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
      1,
      0.7,
      0.7,
      0.7,
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7,
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1,
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
      "blues",
      "signature"
    ],
    "techniques": [
      "call-and-response guitar/vocal",
      "walking-blues bass",
      "blues scale enclosure",
      "boogie bass",
      "guitar bend/vibrato phrasing",
      "shuffle triplet pocket"
    ]
  },
  {
    "id": "style-blues-new-orleans-blues-signature",
    "worldId": "blues",
    "styleIds": [
      "blues-new-orleans-blues"
    ],
    "name": "New Orleans Blues Signature Cell",
    "shortName": "New Orleans Blues Cell",
    "family": "blues",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "blues",
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
      "piano",
      "electric-guitar",
      "bass",
      "drums"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7,
      1,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
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
      "blues",
      "signature"
    ],
    "techniques": [
      "New Orleans second-line accents",
      "walking-blues bass",
      "blues scale enclosure",
      "boogie bass",
      "shuffle triplet pocket",
      "stop-time blues"
    ]
  },
  {
    "id": "style-blues-british-blues-revival-signature",
    "worldId": "blues",
    "styleIds": [
      "blues-british-blues-revival"
    ],
    "name": "British Blues Revival Signature Cell",
    "shortName": "British Blues Revival Cell",
    "family": "blues",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "blues",
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
      "organ"
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
      "blues",
      "signature"
    ],
    "techniques": [
      "dominant 7th riff",
      "guitar bend/vibrato phrasing",
      "blues scale enclosure",
      "call-and-response guitar/vocal",
      "stop-time blues",
      "walking-blues bass"
    ]
  }
];


const BLUES_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "blues-phrase-13",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "12-Bar Phrase",
          "family": "12-Bar",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "blues",
            "12-bar",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmonica"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "harmonica"
          ],
          "compatibleRoles": [
            "harmonica"
          ],
          "compatibleInstruments": [
            "harmonica"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 12,
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
              "id": "blues-phrase-13-v-01",
              "parentPatternId": "blues-phrase-13",
              "name": "12-Bar Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "blues-phrase-13-v-02",
              "parentPatternId": "blues-phrase-13",
              "name": "12-Bar Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Blues world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "blues",
            "12-bar"
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
          "id": "blues--phrasing",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "Blues Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "12-bar vocal phrase placement with call-and-response",
          "tags": [
            "blues",
            "harmonica",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmonica"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "harmonica"
          ],
          "compatibleRoles": [
            "harmonica",
            "lead"
          ],
          "compatibleInstruments": [
            "harmonica"
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
          "swingPercentage": 58,
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
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "blues--phrasing-v--alt",
              "parentPatternId": "blues--phrasing",
              "name": "Blues Vocal Phrasing — alternate phrasing",
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
              "id": "blues--phrasing-v-final-accent",
              "parentPatternId": "blues--phrasing",
              "name": "Blues Vocal Phrasing — accent shift",
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
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Blues.",
          "authenticityTags": [
            "blues",
            "harmonica"
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


const BLUES_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "blues-call-14",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "Rake Response",
          "family": "Rake",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "blues",
            "rake",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmonica"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "harmonica"
          ],
          "compatibleRoles": [
            "harmonica"
          ],
          "compatibleInstruments": [
            "harmonica"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            3,
            4,
            7,
            9,
            10,
            12
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
              "id": "blues-call-14-v-01",
              "parentPatternId": "blues-call-14",
              "name": "Rake Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                4,
                7,
                10,
                12
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
              "id": "blues-call-14-v-02",
              "parentPatternId": "blues-call-14",
              "name": "Rake Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                3,
                4,
                7,
                9,
                10,
                12
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
              "id": "blues-call-14-v-03",
              "parentPatternId": "blues-call-14",
              "name": "Rake Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                3,
                4,
                7,
                9,
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
          "provenance": "GenreDAW catalog rebuild from existing Blues world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "blues",
            "rake"
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


const BLUES_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
    "id": "tech-blues-boogie-bass",
    "worldId": "blues",
    "styleIds": [
      "blues-west-coast-jump-blues",
      "blues-new-orleans-blues"
    ],
    "name": "boogie bass",
    "shortName": "boogie bass",
    "family": "blues",
    "category": "bass",
    "description": "Technique: boogie bass",
    "tags": [
      "blues",
      "boogie bass"
    ],
    "approaches": [
      "boogie bass"
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
      "blues",
      "boogie bass"
    ],
    "techniques": [
      "boogie bass"
    ]
  },
  {
    "id": "tech-blues-walking-blues-bass",
    "worldId": "blues",
    "styleIds": [
      "blues-memphis-electric-blues",
      "blues-west-coast-jump-blues",
      "blues-new-orleans-blues",
      "blues-british-blues-revival"
    ],
    "name": "walking-blues bass",
    "shortName": "walking-blues bass",
    "family": "blues",
    "category": "bass",
    "description": "Technique: walking-blues bass",
    "tags": [
      "blues",
      "walking-blues bass"
    ],
    "approaches": [
      "walking-blues bass"
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
      0.65,
      0.65,
      0.65,
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72,
      0.92,
      0.72
    ],
    "durationGrid": [
      1,
      1,
      1,
      1,
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
      "blues",
      "walking-blues bass"
    ],
    "techniques": [
      "walking-blues bass"
    ]
  }
];


const BLUES_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-blues-12-bar-turnaround-variants",
    "worldId": "blues",
    "styleIds": [],
    "name": "12-bar turnaround variants",
    "shortName": "12-bar turnaround variants",
    "family": "blues",
    "category": "comping",
    "description": "Technique: 12-bar turnaround variants",
    "tags": [
      "blues",
      "12-bar turnaround variants"
    ],
    "approaches": [
      "12-bar turnaround variants"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "harmony",
      "lead"
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
      "blues",
      "12-bar turnaround variants"
    ],
    "techniques": [
      "12-bar turnaround variants"
    ]
  },
  {
    "id": "tech-blues-guitar-bend-vibrato-phrasing",
    "worldId": "blues",
    "styleIds": [
      "blues-memphis-electric-blues",
      "blues-west-coast-jump-blues",
      "blues-british-blues-revival"
    ],
    "name": "guitar bend/vibrato phrasing",
    "shortName": "guitar bend/vibrato phrasing",
    "family": "blues",
    "category": "comping",
    "description": "Technique: guitar bend/vibrato phrasing",
    "tags": [
      "blues",
      "guitar bend/vibrato phrasing"
    ],
    "approaches": [
      "guitar bend/vibrato phrasing"
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
      "blues",
      "guitar bend/vibrato phrasing"
    ],
    "techniques": [
      "guitar bend/vibrato phrasing"
    ]
  }
];


const BLUES_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-blues-dominant-7th-riff",
    "worldId": "blues",
    "styleIds": [
      "blues-british-blues-revival"
    ],
    "name": "dominant 7th riff",
    "shortName": "dominant 7th riff",
    "family": "blues",
    "category": "lead",
    "description": "Technique: dominant 7th riff",
    "tags": [
      "blues",
      "dominant 7th riff"
    ],
    "approaches": [
      "dominant 7th riff"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "guitar",
      "lead"
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
      "blues",
      "dominant 7th riff"
    ],
    "techniques": [
      "dominant 7th riff"
    ]
  },
  {
    "id": "tech-blues-blues-scale-enclosure",
    "worldId": "blues",
    "styleIds": [
      "blues-memphis-electric-blues",
      "blues-west-coast-jump-blues",
      "blues-new-orleans-blues",
      "blues-british-blues-revival"
    ],
    "name": "blues scale enclosure",
    "shortName": "blues scale enclosure",
    "family": "blues",
    "category": "lead",
    "description": "Technique: blues scale enclosure",
    "tags": [
      "blues",
      "blues scale enclosure"
    ],
    "approaches": [
      "blues scale enclosure"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "guitar",
      "lead"
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
      "blues",
      "blues scale enclosure"
    ],
    "techniques": [
      "blues scale enclosure"
    ]
  },
  {
    "id": "tech-blues-call-and-response-guitar-vocal",
    "worldId": "blues",
    "styleIds": [
      "blues-memphis-electric-blues",
      "blues-west-coast-jump-blues",
      "blues-british-blues-revival"
    ],
    "name": "call-and-response guitar/vocal",
    "shortName": "call-and-response guitar/vocal",
    "family": "blues",
    "category": "lead",
    "description": "Technique: call-and-response guitar/vocal",
    "tags": [
      "blues",
      "call-and-response guitar/vocal"
    ],
    "approaches": [
      "call-and-response guitar/vocal"
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
      "blues",
      "call-and-response guitar/vocal"
    ],
    "techniques": [
      "call-and-response guitar/vocal"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "fill": BLUES_WORLD_PATTERNS_FILL,
  "ostinato": BLUES_WORLD_PATTERNS_OSTINATO,
  "cadence": BLUES_WORLD_PATTERNS_CADENCE,
  "break": BLUES_WORLD_PATTERNS_BREAK,
  "groove": BLUES_WORLD_PATTERNS_GROOVE,
  "phrasePattern": BLUES_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": BLUES_WORLD_PATTERNS_INTERACTIONPATTERN,
  "bass": BLUES_WORLD_PATTERNS_BASS,
  "comping": BLUES_WORLD_PATTERNS_COMPING,
  "lead": BLUES_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"fill","index":0},{"category":"ostinato","index":0},{"category":"cadence","index":0},{"category":"break","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":8},{"category":"phrasePattern","index":1},{"category":"bass","index":0},{"category":"bass","index":1},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"lead","index":0},{"category":"lead","index":1},{"category":"lead","index":2}];

export const BLUES_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
