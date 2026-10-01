import type { GenreWorld, MusicalPattern } from '../../schema';


const COUNTRY_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "country-boom-chuck",
          "worldId": "country",
          "styleIds": ["country-honky-tonk", "country-neotraditional"],
          "name": "Boom-Chuck",
          "family": "Rhythm",
          "category": "fill",
          "transitionType": "fill",
          "description": "Alternating root/fifth bass and upbeat chord",
          "tags": [
            "country",
            "honky-tonk"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar",
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "guitar",
            "bass"
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
            0.82,
            0.94,
            0.84
          ],
          "velocityProfile": [
            0.95,
            0.78,
            0.9,
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
              "id": "country-boom-chuck-variant-bluegrass-2-4",
              "parentPatternId": "country-boom-chuck",
              "name": "Bluegrass 2/4",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Fast 2/4 cut-time rhythm with high-speed",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                1,
                0.88,
                0.96,
                0.88
              ],
              "velocityProfile": [
                0.95,
                0.84,
                0.92,
                0.84
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "country-boom-chuck-variant-country-pop-rock",
              "parentPatternId": "country-boom-chuck",
              "name": "Country Pop Rock",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Straight 8ths rock backbeat for contemporary",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                0.9,
                1,
                0.85,
                1
              ],
              "velocityProfile": [
                0.85,
                0.95,
                0.8,
                0.95
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const COUNTRY_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "country-train",
          "worldId": "country",
          "styleIds": ["country-honky-tonk", "country-neotraditional"],
          "name": "Train Beat",
          "family": "Beat",
          "category": "break",
          "transitionType": "fill",
          "description": "A continuous 16th-note snare pattern drives the train beat.",
          "tags": [
            "country",
            "honky-tonk"
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
            0.8,
            0.6,
            0.7,
            0.65,
            1,
            0.65,
            0.7,
            0.65,
            0.85,
            0.6,
            0.7,
            0.65,
            1,
            0.65,
            0.7,
            0.65
          ],
          "velocityProfile": [
            0.75,
            0.5,
            0.6,
            0.55,
            0.95,
            0.55,
            0.6,
            0.55,
            0.8,
            0.5,
            0.6,
            0.55,
            0.95,
            0.55,
            0.6,
            0.55
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
              "id": "country-train-v-01",
              "parentPatternId": "country-train",
              "name": "Train Beat — sparse variation",
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
                0.75,
                0.5499999999999999,
                0.6499999999999999,
                0.6,
                0.95,
                0.6,
                0.6499999999999999,
                0.6,
                0.7999999999999999,
                0.5499999999999999,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.67,
                0.42,
                0.52,
                0.47000000000000003,
                0.87,
                0.47000000000000003,
                0.52,
                0.47000000000000003,
                0.7200000000000001,
                0.42,
                0.52
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
              "id": "country-train-v-02",
              "parentPatternId": "country-train",
              "name": "Train Beat — accent shift",
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
                0.76,
                0.6799999999999999,
                0.6599999999999999,
                0.73,
                0.96,
                0.73,
                0.6599999999999999,
                0.73,
                0.8099999999999999,
                0.6799999999999999,
                0.6599999999999999,
                0.73,
                0.96,
                0.73,
                0.6599999999999999,
                0.73
              ],
              "velocityProfile": [
                0.81,
                0.48,
                0.58,
                0.6100000000000001,
                0.9299999999999999,
                0.53,
                0.6599999999999999,
                0.53,
                0.78,
                0.56,
                0.58,
                0.53,
                1,
                0.53,
                0.58,
                0.6100000000000001
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const COUNTRY_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "country-trap-hats",
          "worldId": "country",
          "styleIds": ["country-americana"],
          "name": "Hick-Hop Trap Hi-Hats",
          "family": "Beat",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Modern country-trap crossover: rolling hi-hat bursts",
          "tags": [
            "country",
            "trap",
            "hick-hop"
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
            0,
            4,
            8,
            10,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.95,
            0.6,
            0.75,
            1,
            0.55,
            0.65,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.55,
            0.7,
            0.95,
            0.5,
            0.6,
            0.8
          ],
          "supportedEnergy": [4, 5],
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
              "id": "country-trap-hats-v-01",
              "parentPatternId": "country-trap-hats",
              "name": "Hick-Hop Trap Hi-Hats — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                10,
                13,
                14
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999,
                0.5499999999999999,
                0.7,
                0.95
              ],
              "velocityProfile": [
                0.87,
                0.8200000000000001,
                0.47000000000000003,
                0.62,
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
              "id": "country-trap-hats-v-02",
              "parentPatternId": "country-trap-hats",
              "name": "Hick-Hop Trap Hi-Hats — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                10,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                1,
                0.5599999999999999,
                0.83,
                0.96,
                0.63,
                0.61,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.88,
                0.53,
                0.76,
                0.9299999999999999,
                0.48,
                0.6599999999999999,
                0.78
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const COUNTRY_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "country-outlaw",
          "worldId": "country",
          "styleIds": ["country-honky-tonk", "country-neotraditional"],
          "name": "Outlaw 8ths",
          "family": "Bass",
          "category": "groove",
          "description": "Heavy driving 8th note bass line",
          "tags": [
            "country",
            "outlaw"
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
          "subdivisions": 8,
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          "accentProfile": [
            1,
            0.72,
            0.88,
            0.72,
            0.94,
            0.72,
            0.88,
            0.78
          ],
          "velocityProfile": [
            0.95,
            0.68,
            0.82,
            0.68,
            0.9,
            0.68,
            0.82,
            0.72
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
              "id": "country-outlaw-v-01",
              "parentPatternId": "country-outlaw",
              "name": "Outlaw 8ths — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6
              ],
              "accentProfile": [
                0.95,
                0.6699999999999999,
                0.83,
                0.6699999999999999,
                0.8899999999999999
              ],
              "velocityProfile": [
                0.87,
                0.6000000000000001,
                0.74,
                0.6000000000000001,
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
              "id": "country-outlaw-v-02",
              "parentPatternId": "country-outlaw",
              "name": "Outlaw 8ths — accent shift",
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
                7
              ],
              "accentProfile": [
                0.96,
                0.7999999999999999,
                0.84,
                0.7999999999999999,
                0.8999999999999999,
                0.7999999999999999,
                0.84,
                0.86
              ],
              "velocityProfile": [
                1,
                0.66,
                0.7999999999999999,
                0.74,
                0.88,
                0.66,
                0.8799999999999999,
                0.7
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "country-waltz",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Country Waltz",
          "family": "Beat",
          "category": "groove",
          "description": "Classic 3/4 country waltz with accented",
          "tags": [
            "country",
            "waltz"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums",
            "bass"
          ],
    
          "approaches": ["groove", "walking"],
          "instruments": [
            "drums",
            "bass"
          ],
          "meter": "3/4",
          "cycleLength": 1,
          "subdivisions": 6,
          "onsetGrid": [
            0,
            2,
            4
          ],
          "accentProfile": [
            1,
            0.75,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.7,
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
              "id": "country-waltz-v-01",
              "parentPatternId": "country-waltz",
              "name": "Country Waltz — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.95,
                0.7
              ],
              "velocityProfile": [
                0.87,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "country-waltz-v-02",
              "parentPatternId": "country-waltz",
              "name": "Country Waltz — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4
              ],
              "accentProfile": [
                0.96,
                0.83,
                0.6599999999999999
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.63
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "country-western-swing",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Western Swing",
          "family": "Beat",
          "category": "groove",
          "description": "4/4 swung jazzy Texas swing feel",
          "tags": [
            "country",
            "western-swing"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums",
            "bass"
          ],
    
          "approaches": ["groove", "walking"],
          "instruments": [
            "drums",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            6,
            9
          ],
          "accentProfile": [
            0.95,
            0.88,
            1,
            0.88
          ],
          "velocityProfile": [
            0.9,
            0.82,
            0.95,
            0.82
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
              "id": "country-western-swing-v-01",
              "parentPatternId": "country-western-swing",
              "name": "Western Swing — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                9
              ],
              "accentProfile": [
                0.8999999999999999,
                0.83,
                0.95
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.74,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "country-western-swing-v-02",
              "parentPatternId": "country-western-swing",
              "name": "Western Swing — accent shift",
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
                0.9099999999999999,
                0.96,
                0.96,
                0.96
              ],
              "velocityProfile": [
                0.96,
                0.7999999999999999,
                0.9299999999999999,
                0.8799999999999999
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "country-nashville",
          "worldId": "country",
          "styleIds": ["country-americana", "country-neotraditional"],
          "name": "Nashville Smooth",
          "family": "Beat",
          "category": "groove",
          "description": "Smooth 4/4 session groove with tasteful",
          "tags": [
            "country",
            "contemporary"
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
            0,
            4,
            8,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.9,
            0.95,
            0.9,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.85,
            0.9,
            0.85,
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
              "id": "country-nashville-v-01",
              "parentPatternId": "country-nashville",
              "name": "Nashville Smooth — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
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
              "id": "country-nashville-v-02",
              "parentPatternId": "country-nashville",
              "name": "Nashville Smooth — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.9099999999999999,
                0.98,
                0.71
              ],
              "velocityProfile": [
                1,
                0.83,
                0.88,
                0.9099999999999999,
                0.6799999999999999
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "country-chicken",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Chicken Pickin",
          "family": "Guitar",
          "category": "groove",
          "description": "Syncopated, muted Telecaster licks add a sharp lead response.",
          "tags": [
            "country",
            "guitar"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "electric-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar"
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
            1,
            0.75,
            0.9,
            0.75,
            0.95,
            0.75,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.7,
            0.85,
            0.7,
            0.9,
            0.7,
            0.85,
            0.75
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
              "id": "country-chicken-v-01",
              "parentPatternId": "country-chicken",
              "name": "Chicken Pickin — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                7,
                11,
                12
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.85,
                0.7,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.62,
                0.77,
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
              "id": "country-chicken-v-02",
              "parentPatternId": "country-chicken",
              "name": "Chicken Pickin — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
                0.96,
                0.83,
                0.86,
                0.83,
                0.9099999999999999,
                0.83,
                0.86,
                0.88
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.83,
                0.76,
                0.88,
                0.6799999999999999,
                0.9099999999999999,
                0.73
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "country-ballad",
          "worldId": "country",
          "styleIds": ["country-americana"],
          "name": "Slow Ballad 6/8",
          "family": "Beat",
          "category": "groove",
          "description": "Emotional 6/8 slow dance ballad groove.",
          "tags": [
            "country",
            "ballad"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums",
            "bass"
          ],
    
          "approaches": ["groove", "walking"],
          "instruments": [
            "drums",
            "bass"
          ],
          "meter": "6/8",
          "cycleLength": 1,
          "subdivisions": 6,
          "onsetGrid": [
            0,
            3
          ],
          "accentProfile": [
            1,
            0.82
          ],
          "velocityProfile": [
            0.95,
            0.78
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
              "id": "country-ballad-v-01-safe",
              "parentPatternId": "country-ballad",
              "name": "Slow Ballad 6/8 — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                3
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.98,
                0.74
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "country-ballad-v-02-safe",
              "parentPatternId": "country-ballad",
              "name": "Slow Ballad 6/8 — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                3
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.98,
                0.74
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "country-comp-14",
          "worldId": "country",
          "styleIds": ["country-honky-tonk", "country-neotraditional"],
          "name": "Steel Comping",
          "family": "Steel",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "country",
            "steel",
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
            0,
            3,
            4,
            6,
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
          "syncopationRating": 0.625,
          "anticipationOffset": 0,
          "swingPercentage": 52,
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
              "id": "country-comp-14-v-01",
              "parentPatternId": "country-comp-14",
              "name": "Steel Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                9,
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
              "id": "country-comp-14-v-02",
              "parentPatternId": "country-comp-14",
              "name": "Steel Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                6,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "steel"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 1,
          "enabled": true
        },
  {
          "id": "country-verse-16",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Train Verse Variation",
          "family": "Train",
          "category": "groove",
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
          "tags": [
            "country",
            "train",
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
            "guitar"
          ],
          "compatibleRoles": [
            "pulse",
            "rhythm-guitar",
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
            2,
            4,
            6,
            8,
            11,
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
          "swingPercentage": 52,
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
              "id": "country-verse-16-v-01",
              "parentPatternId": "country-verse-16",
              "name": "Train Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                6,
                8,
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
              "id": "country-verse-16-v-02",
              "parentPatternId": "country-verse-16",
              "name": "Train Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                4,
                6,
                8,
                11,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "train"
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
    "id": "tech-country-boom-chicka-rhythm",
    "worldId": "country",
    "styleIds": [],
    "name": "boom-chicka rhythm",
    "shortName": "boom-chicka rhythm",
    "family": "country",
    "category": "groove",
    "description": "Technique: boom-chicka rhythm",
    "tags": [
      "country",
      "boom-chicka rhythm"
    ],
    "approaches": [
      "boom-chicka rhythm"
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
      "country",
      "boom-chicka rhythm"
    ],
    "techniques": [
      "boom-chicka rhythm"
    ]
  },
  {
    "id": "tech-country-train-beat",
    "worldId": "country",
    "styleIds": [],
    "name": "train beat",
    "shortName": "train beat",
    "family": "country",
    "category": "groove",
    "description": "Technique: train beat",
    "tags": [
      "country",
      "train beat"
    ],
    "approaches": [
      "train beat"
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
      "country",
      "train beat"
    ],
    "techniques": [
      "train beat"
    ]
  },
  {
    "id": "tech-country-country-shuffle",
    "worldId": "country",
    "styleIds": [
      "country-nashville-country-pop",
      "country-country-rock",
      "country-alt-country-roots-rock",
      "country-country-gospel"
    ],
    "name": "country shuffle",
    "shortName": "country shuffle",
    "family": "country",
    "category": "groove",
    "description": "Technique: country shuffle",
    "tags": [
      "country",
      "country shuffle"
    ],
    "approaches": [
      "country shuffle"
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
      "country",
      "country shuffle"
    ],
    "techniques": [
      "country shuffle"
    ]
  },
  {
    "id": "style-country-appalachian-old-time-signature",
    "worldId": "country",
    "styleIds": [
      "country-appalachian-old-time"
    ],
    "name": "Appalachian Old-Time Signature Cell",
    "shortName": "Appalachian Old-Time Cell",
    "family": "country",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "country",
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
      "banjo",
      "fiddle",
      "acoustic-guitar",
      "upright-bass"
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
      "country",
      "signature"
    ],
    "techniques": [
      "banjo roll",
      "fiddle drone",
      "Carter-style alternating bass"
    ]
  },
  {
    "id": "style-country-nashville-country-pop-signature",
    "worldId": "country",
    "styleIds": [
      "country-nashville-country-pop"
    ],
    "name": "Nashville Country-Pop Signature Cell",
    "shortName": "Nashville Country-Pop Cell",
    "family": "country",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "country",
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
      "steel-guitar",
      "strings",
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
      "country",
      "signature"
    ],
    "techniques": [
      "pedal-steel fills",
      "vocal harmony thirds/sixths",
      "Nashville number-style progression",
      "country shuffle"
    ]
  },
  {
    "id": "style-country-country-rock-signature",
    "worldId": "country",
    "styleIds": [
      "country-country-rock"
    ],
    "name": "Country Rock Signature Cell",
    "shortName": "Country Rock Cell",
    "family": "country",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "country",
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
      "acoustic-guitar",
      "bass",
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
      "country",
      "signature"
    ],
    "techniques": [
      "country shuffle",
      "pedal-steel fills",
      "vocal harmony thirds/sixths"
    ]
  },
  {
    "id": "style-country-alt-country-roots-rock-signature",
    "worldId": "country",
    "styleIds": [
      "country-alt-country-roots-rock"
    ],
    "name": "Alt-Country / Roots Rock Signature Cell",
    "shortName": "Alt-Country / Roots Rock Cell",
    "family": "country",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "country",
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
      "country",
      "signature"
    ],
    "techniques": [
      "country shuffle",
      "pedal-steel fills"
    ]
  },
  {
    "id": "style-country-country-gospel-signature",
    "worldId": "country",
    "styleIds": [
      "country-country-gospel"
    ],
    "name": "Country Gospel Signature Cell",
    "shortName": "Country Gospel Cell",
    "family": "country",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "country",
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
      "piano",
      "bass",
      "fiddle"
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
      "country",
      "signature"
    ],
    "techniques": [
      "vocal harmony thirds/sixths",
      "country shuffle"
    ]
  }
];


const COUNTRY_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "country-pedal-steel-swell",
          "worldId": "country",
          "styleIds": ["country-americana"],
          "name": "Pedal Steel Volume Swell",
          "family": "Texture",
          "category": "cell",
          "description": "Crying pedal-steel swells fade into the phrase.",
          "tags": [
            "country",
            "pedal-steel",
            "texture"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "texture"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            5
          ],
          "accentProfile": [
            0.75,
            1
          ],
          "velocityProfile": [
            0.7,
            0.95
          ],
          "supportedEnergy": [1, 2],
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
              "id": "country-pedal-steel-swell-v-01-safe",
              "parentPatternId": "country-pedal-steel-swell",
              "name": "Pedal Steel Volume Swell — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                5
              ],
              "accentProfile": [
                0.7,
                1
              ],
              "velocityProfile": [
                0.73,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "country-pedal-steel-swell-v-02-safe",
              "parentPatternId": "country-pedal-steel-swell",
              "name": "Pedal Steel Volume Swell — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                5
              ],
              "accentProfile": [
                0.7,
                1
              ],
              "velocityProfile": [
                0.73,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const COUNTRY_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "country-phrase-11",
          "worldId": "country",
          "styleIds": ["country-honky-tonk", "country-neotraditional"],
          "name": "Train Phrase",
          "family": "Train",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "country",
            "train",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "steel-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "steel-guitar"
          ],
          "compatibleRoles": [
            "steel-guitar"
          ],
          "compatibleInstruments": [
            "steel-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            3,
            5,
            8,
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
          "syncopationRating": 0.625,
          "anticipationOffset": 0,
          "swingPercentage": 52,
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
              "id": "country-phrase-11-v-01",
              "parentPatternId": "country-phrase-11",
              "name": "Train Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                5,
                10,
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
              "id": "country-phrase-11-v-02",
              "parentPatternId": "country-phrase-11",
              "name": "Train Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "train"
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
          "id": "country--phrasing",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Country Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Storytelling verse vocal placement with room",
          "tags": [
            "country",
            "steel-guitar",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "steel-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "steel-guitar"
          ],
          "compatibleRoles": [
            "steel-guitar",
            "lead"
          ],
          "compatibleInstruments": [
            "steel-guitar"
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
              "id": "country--phrasing-v--alt",
              "parentPatternId": "country--phrasing",
              "name": "Country Vocal Phrasing — alternate phrasing",
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
              "id": "country--phrasing-v-final-accent",
              "parentPatternId": "country--phrasing",
              "name": "Country Vocal Phrasing — accent shift",
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
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Country.",
          "authenticityTags": [
            "country",
            "steel-guitar"
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


const COUNTRY_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "country-call-12",
          "worldId": "country",
          "styleIds": ["country-honky-tonk", "country-neotraditional"],
          "name": "Nashville Response",
          "family": "Nashville",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "country",
            "nashville",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "steel-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "steel-guitar"
          ],
          "compatibleRoles": [
            "steel-guitar"
          ],
          "compatibleInstruments": [
            "steel-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            3,
            4,
            6,
            9,
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
            0.95,
            0.62
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62,
            0.95,
            0.57
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 52,
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
              "id": "country-call-12-v-01",
              "parentPatternId": "country-call-12",
              "name": "Nashville Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                4,
                9,
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
              "id": "country-call-12-v-02",
              "parentPatternId": "country-call-12",
              "name": "Nashville Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                3,
                4,
                6,
                9,
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
                0.9099999999999999,
                0.7
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999,
                0.8799999999999999,
                0.6,
                1,
                0.5499999999999999
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
              "id": "country-call-12-v-03",
              "parentPatternId": "country-call-12",
              "name": "Nashville Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                1,
                3,
                4,
                6,
                9,
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
                0.6,
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
                0.57,
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
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "nashville"
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


const COUNTRY_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "country-anchor-13",
          "worldId": "country",
          "styleIds": ["country-honky-tonk", "country-neotraditional"],
          "name": "Chicken Pickin Anchor",
          "family": "Chicken Pickin",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "country",
            "chicken-pickin",
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
            5,
            7,
            10,
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
          "swingPercentage": 52,
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
              "id": "country-anchor-13-v-01",
              "parentPatternId": "country-anchor-13",
              "name": "Chicken Pickin Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                4,
                5,
                10,
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
              "id": "country-anchor-13-v-02",
              "parentPatternId": "country-anchor-13",
              "name": "Chicken Pickin Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                2,
                4,
                5,
                7,
                10,
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
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "chicken-pickin"
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


const COUNTRY_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "country-intro-15",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Boom-Chuck Intro",
          "family": "Boom-Chuck",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish the groove before the full ensemble enters.",
          "tags": [
            "country",
            "boom-chuck",
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
          "meter": "3/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            2,
            4,
            5,
            8
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95
          ],
          "syncopationRating": 0.6,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["accented"],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "country-intro-15-v-01",
              "parentPatternId": "country-intro-15",
              "name": "Boom-Chuck Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                4,
                5
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "country-intro-15-v-02",
              "parentPatternId": "country-intro-15",
              "name": "Boom-Chuck Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                2,
                4,
                5,
                8
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2
              ]
            },
            {
              "id": "country-intro-15-v-03",
              "parentPatternId": "country-intro-15",
              "name": "Boom-Chuck Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                2,
                4,
                5,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "boom-chuck"
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


const COUNTRY_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
    "id": "tech-country-carter-style-alternating-bass",
    "worldId": "country",
    "styleIds": [
      "country-appalachian-old-time"
    ],
    "name": "Carter-style alternating bass",
    "shortName": "Carter-style alternating bass",
    "family": "country",
    "category": "bass",
    "description": "Technique: Carter-style alternating bass",
    "tags": [
      "country",
      "Carter-style alternating bass"
    ],
    "approaches": [
      "Carter-style alternating bass"
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
      "country",
      "Carter-style alternating bass"
    ],
    "techniques": [
      "Carter-style alternating bass"
    ]
  }
];


const COUNTRY_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-country-chicken-picking",
    "worldId": "country",
    "styleIds": [],
    "name": "chicken-picking",
    "shortName": "chicken-picking",
    "family": "country",
    "category": "comping",
    "description": "Technique: chicken-picking",
    "tags": [
      "country",
      "chicken-picking"
    ],
    "approaches": [
      "chicken-picking"
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
      "country",
      "chicken-picking"
    ],
    "techniques": [
      "chicken-picking"
    ]
  },
  {
    "id": "tech-country-banjo-roll",
    "worldId": "country",
    "styleIds": [
      "country-appalachian-old-time"
    ],
    "name": "banjo roll",
    "shortName": "banjo roll",
    "family": "country",
    "category": "comping",
    "description": "Technique: banjo roll",
    "tags": [
      "country",
      "banjo roll"
    ],
    "approaches": [
      "banjo roll"
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
      "banjo"
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
    "articulations": [
      "roll"
    ],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "country",
      "banjo roll"
    ],
    "techniques": [
      "banjo roll"
    ]
  },
  {
    "id": "tech-country-nashville-number-style-progression",
    "worldId": "country",
    "styleIds": [
      "country-nashville-country-pop"
    ],
    "name": "Nashville number-style progression",
    "shortName": "Nashville number-style progression",
    "family": "country",
    "category": "comping",
    "description": "Technique: Nashville number-style progression",
    "tags": [
      "country",
      "Nashville number-style progression"
    ],
    "approaches": [
      "Nashville number-style progression"
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
      "country",
      "Nashville number-style progression"
    ],
    "techniques": [
      "Nashville number-style progression"
    ]
  },
  {
    "id": "tech-country-vocal-harmony-thirds-sixths",
    "worldId": "country",
    "styleIds": [
      "country-nashville-country-pop",
      "country-country-rock",
      "country-country-gospel"
    ],
    "name": "vocal harmony thirds/sixths",
    "shortName": "vocal harmony thirds/sixths",
    "family": "country",
    "category": "comping",
    "description": "Technique: vocal harmony thirds/sixths",
    "tags": [
      "country",
      "vocal harmony thirds/sixths"
    ],
    "approaches": [
      "vocal harmony thirds/sixths"
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
      "country",
      "vocal harmony thirds/sixths"
    ],
    "techniques": [
      "vocal harmony thirds/sixths"
    ]
  }
];


const COUNTRY_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-country-pedal-steel-fills",
    "worldId": "country",
    "styleIds": [
      "country-nashville-country-pop",
      "country-country-rock",
      "country-alt-country-roots-rock"
    ],
    "name": "pedal-steel fills",
    "shortName": "pedal-steel fills",
    "family": "country",
    "category": "lead",
    "description": "Technique: pedal-steel fills",
    "tags": [
      "country",
      "pedal-steel fills"
    ],
    "approaches": [
      "pedal-steel fills"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "lead",
      "counterline"
    ],
    "instruments": [
      "steel-guitar"
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
      "country",
      "pedal-steel fills"
    ],
    "techniques": [
      "pedal-steel fills"
    ]
  },
  {
    "id": "tech-country-fiddle-drone",
    "worldId": "country",
    "styleIds": [
      "country-appalachian-old-time"
    ],
    "name": "fiddle drone",
    "shortName": "fiddle drone",
    "family": "country",
    "category": "lead",
    "description": "Technique: fiddle drone",
    "tags": [
      "country",
      "fiddle drone"
    ],
    "approaches": [
      "fiddle drone"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "lead",
      "counterline"
    ],
    "instruments": [
      "fiddle"
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
      "country",
      "fiddle drone"
    ],
    "techniques": [
      "fiddle drone"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "fill": COUNTRY_WORLD_PATTERNS_FILL,
  "break": COUNTRY_WORLD_PATTERNS_BREAK,
  "cadence": COUNTRY_WORLD_PATTERNS_CADENCE,
  "groove": COUNTRY_WORLD_PATTERNS_GROOVE,
  "cell": COUNTRY_WORLD_PATTERNS_CELL,
  "phrasePattern": COUNTRY_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": COUNTRY_WORLD_PATTERNS_INTERACTIONPATTERN,
  "ostinato": COUNTRY_WORLD_PATTERNS_OSTINATO,
  "sectionPattern": COUNTRY_WORLD_PATTERNS_SECTIONPATTERN,
  "bass": COUNTRY_WORLD_PATTERNS_BASS,
  "comping": COUNTRY_WORLD_PATTERNS_COMPING,
  "lead": COUNTRY_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"cell","index":0},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":0},{"category":"groove","index":6},{"category":"sectionPattern","index":0},{"category":"groove","index":7},{"category":"phrasePattern","index":1},{"category":"bass","index":0},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"comping","index":2},{"category":"comping","index":3},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"lead","index":0},{"category":"lead","index":1}];

export const COUNTRY_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
