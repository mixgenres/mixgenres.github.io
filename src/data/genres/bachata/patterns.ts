import type { MusicalPattern, GenreWorld } from '../../schema';

export const BACHATA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "bachata-bass-majao",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Bass Majao",
          "family": "Bass",
          "category": "break",
          "transitionType": "fill",
          "description": "Driving syncopated bass pattern for majao",
          "tags": [
            "bachata",
            "bass",
            "majao"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": ["bass"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            1,
            0.85,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "majao",
            "chorus",
            "mambo"
          ],
          "variants": [
            {
              "id": "bachata-bass-majao-v-01",
              "parentPatternId": "bachata-bass-majao",
              "name": "Bass Majao — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                12
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "bachata-bass-majao-v-02",
              "parentPatternId": "bachata-bass-majao",
              "name": "Bass Majao — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.78,
                0.88
              ],
              "microtimingOffset": [
                2,
                -5,
                2
              ]
            },
            {
              "id": "bachata-bass-majao-v-03",
              "parentPatternId": "bachata-bass-majao",
              "name": "Bass Majao — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                8,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.83,
                0.9299999999999999,
                1,
                1
              ],
              "velocityProfile": [
                0.95,
                0.8,
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
          "weight": 1,
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
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
        }
];

export const BACHATA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "bachata-bongo-derecho",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Bongo Derecho",
          "family": "Bongo",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Martillo bongo pattern for verses with",
          "tags": [
            "bachata",
            "bongo",
            "derecho"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": ["percussion"],
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
            15
          ],
          "accentProfile": [
            0.7,
            0.6,
            0.85,
            0.6,
            0.7,
            0.6,
            1,
            0.65
          ],
          "velocityProfile": [
            0.65,
            0.55,
            0.8,
            0.55,
            0.65,
            0.55,
            0.95,
            0.6
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "derecho",
            "verse",
            "ending",
            "turnaround"
          ],
          "variants": [
            {
              "id": "bachata-bongo-derecho-v-01",
              "parentPatternId": "bachata-bongo-derecho",
              "name": "Bongo Derecho — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12
              ],
              "accentProfile": [
                0.6499999999999999,
                0.5499999999999999,
                0.7999999999999999,
                0.5499999999999999,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.5700000000000001,
                0.47000000000000003,
                0.7200000000000001,
                0.47000000000000003,
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
              "id": "bachata-bongo-derecho-v-02",
              "parentPatternId": "bachata-bongo-derecho",
              "name": "Bongo Derecho — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.6599999999999999,
                0.6799999999999999,
                0.8099999999999999,
                0.6799999999999999,
                0.6599999999999999,
                0.6799999999999999,
                0.96,
                0.73
              ],
              "velocityProfile": [
                0.71,
                0.53,
                0.78,
                0.6100000000000001,
                0.63,
                0.53,
                1,
                0.58
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
              "id": "bachata-bongo-derecho-v-03",
              "parentPatternId": "bachata-bongo-derecho",
              "name": "Bongo Derecho — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.6799999999999999,
                0.58,
                0.83,
                0.58,
                0.6799999999999999,
                0.58,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                0.65,
                0.55,
                0.8,
                0.55,
                0.65,
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
                0,
                0,
                -6,
                -6
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 1,
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
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
        }
];

export const BACHATA_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "bachata-bass-derecho",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Bass Derecho",
          "family": "Bass",
          "category": "fill",
          "transitionType": "fill",
          "description": "Standard bachata bass on 1, 2-and,",
          "tags": [
            "bachata",
            "bass",
            "derecho"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": ["bass"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            8,
            12
          ],
          "accentProfile": [
            1,
            0.9,
            0.85,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.85,
            0.8,
            0.9
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "derecho",
            "verse"
          ],
          "variants": [
            {
              "id": "bachata-bass-derecho-v-01",
              "parentPatternId": "bachata-bass-derecho",
              "name": "Bass Derecho — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.85,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.77,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "bachata-bass-derecho-v-02",
              "parentPatternId": "bachata-bass-derecho",
              "name": "Bass Derecho — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                6,
                8,
                12
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.8099999999999999,
                1
              ],
              "velocityProfile": [
                1,
                0.83,
                0.78,
                0.96
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "bachata-bass-derecho-v-03",
              "parentPatternId": "bachata-bass-derecho",
              "name": "Bass Derecho — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                6,
                8,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.88,
                0.83,
                0.9299999999999999,
                1,
                1
              ],
              "velocityProfile": [
                0.95,
                0.85,
                0.8,
                0.9,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
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
        }
];

export const BACHATA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "bachata-bongo-majao",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Bongo Majao",
          "family": "Bongo",
          "category": "groove",
          "description": "Heavy bongo pattern with resonant bell",
          "tags": [
            "bachata",
            "bongo",
            "majao"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": ["percussion"],
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
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "majao",
            "chorus",
            "mambo"
          ],
          "variants": [
            {
              "id": "bachata-bongo-majao-variant-requinto-majao-chops",
              "parentPatternId": "bachata-bongo-majao",
              "name": "Requinto Majao Chops",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Rhythmic chord chops on the requinto",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.9,
                1,
                0.85,
                0.95
              ],
              "velocityProfile": [
                0.85,
                0.95,
                0.8,
                0.9
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "bachata-bongo-majao-v-02",
              "parentPatternId": "bachata-bongo-majao",
              "name": "Bongo Majao — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                12
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
          "weight": 1,
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
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
          "id": "bachata-guira-majao",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Güira Majao",
          "family": "Guira",
          "category": "groove",
          "description": "Continuous 16ths on the metal güira",
          "tags": [
            "bachata",
            "guira",
            "majao"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": ["percussion"],
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
            0.6,
            0.85,
            0.6,
            0.95,
            0.6,
            0.85,
            0.6,
            1,
            0.6,
            0.85,
            0.6,
            0.95,
            0.6,
            0.85,
            0.65
          ],
          "velocityProfile": [
            0.95,
            0.5,
            0.8,
            0.5,
            0.9,
            0.5,
            0.8,
            0.5,
            0.95,
            0.5,
            0.8,
            0.5,
            0.9,
            0.5,
            0.8,
            0.55
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "majao",
            "chorus",
            "mambo"
          ],
          "variants": [
            {
              "id": "bachata-guira-majao-v-01",
              "parentPatternId": "bachata-guira-majao",
              "name": "Güira Majao — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
                0.5499999999999999,
                0.7999999999999999,
                0.5499999999999999,
                0.8999999999999999,
                0.5499999999999999,
                0.7999999999999999,
                0.5499999999999999,
                0.95,
                0.5499999999999999,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.42,
                0.7200000000000001,
                0.42,
                0.8200000000000001,
                0.42,
                0.7200000000000001,
                0.42,
                0.87,
                0.42,
                0.7200000000000001
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
              "id": "bachata-guira-majao-v-02",
              "parentPatternId": "bachata-guira-majao",
              "name": "Güira Majao — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
                0.6799999999999999,
                0.8099999999999999,
                0.6799999999999999,
                0.9099999999999999,
                0.6799999999999999,
                0.8099999999999999,
                0.6799999999999999,
                0.96,
                0.6799999999999999,
                0.8099999999999999,
                0.6799999999999999,
                0.9099999999999999,
                0.6799999999999999,
                0.8099999999999999,
                0.73
              ],
              "velocityProfile": [
                1,
                0.48,
                0.78,
                0.56,
                0.88,
                0.48,
                0.8600000000000001,
                0.48,
                0.9299999999999999,
                0.56,
                0.78,
                0.48,
                0.96,
                0.48,
                0.78,
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
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
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
          "id": "bachata-segunda-derecho",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Segunda Guitar",
          "family": "Guitar",
          "category": "groove",
          "description": "Rhythm acoustic guitar striking syncopated upbeats",
          "tags": [
            "bachata",
            "guitar",
            "segunda"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "guitar"
          ],
    
          "approaches": ["chop"],
          "instruments": ["guitar"],
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
            0.88,
            0.96,
            0.88,
            1
          ],
          "velocityProfile": [
            0.82,
            0.92,
            0.82,
            0.96
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "derecho",
            "verse",
            "majao",
            "chorus"
          ],
          "variants": [
            {
              "id": "bachata-segunda-derecho-v-01",
              "parentPatternId": "bachata-segunda-derecho",
              "name": "Segunda Guitar — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                10,
                14
              ],
              "accentProfile": [
                0.83,
                0.9099999999999999,
                0.83
              ],
              "velocityProfile": [
                0.74,
                0.8400000000000001,
                0.74
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "bachata-segunda-derecho-v-02",
              "parentPatternId": "bachata-segunda-derecho",
              "name": "Segunda Guitar — accent shift",
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
                0.84,
                1,
                0.84,
                1
              ],
              "velocityProfile": [
                0.8799999999999999,
                0.9,
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
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
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
          "id": "cumbia-guiro",
          "worldId": "bachata",
          "styleIds": [],
          "name": "Cumbia Güiro",
          "family": "Guiro",
          "category": "groove",
          "description": "Classic cumbia shh-shh-pah scraper rhythm.",
          "tags": [
            "cumbia",
            "guira",
            "percussion"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": ["percussion"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.75,
            0.75,
            1,
            0.75,
            0.75,
            1
          ],
          "velocityProfile": [
            0.7,
            0.7,
            0.95,
            0.7,
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
              "id": "cumbia-guiro-v-01",
              "parentPatternId": "cumbia-guiro",
              "name": "Cumbia Güiro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.7,
                0.7,
                0.95,
                0.7
              ],
              "velocityProfile": [
                0.62,
                0.62,
                0.87,
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
              "id": "cumbia-guiro-v-02",
              "parentPatternId": "cumbia-guiro",
              "name": "Cumbia Güiro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                4,
                6,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.71,
                0.83,
                0.96,
                0.83,
                0.71,
                1
              ],
              "velocityProfile": [
                0.76,
                0.6799999999999999,
                0.9299999999999999,
                0.76,
                0.6799999999999999,
                0.9299999999999999
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
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
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
          "id": "bachata-comp-13",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Coro Comping",
          "family": "Coro / backing vocals",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
          "tags": [
            "bachata",
            "coro",
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
          "instruments": ["guitar"],
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
            6,
            8,
            11,
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
          "syncopationRating": 0.5714285714285714,
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
              "id": "bachata-comp-13-v-01",
              "parentPatternId": "bachata-comp-13",
              "name": "Coro Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                6,
                8,
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
              "id": "bachata-comp-13-v-02",
              "parentPatternId": "bachata-comp-13",
              "name": "Coro Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                4,
                6,
                8,
                11,
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
          "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "bachata",
            "coro"
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
          "id": "bachata-verse-15",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Derecho Verse Variation",
          "family": "Derecho",
          "category": "groove",
          "description": "A restrained verse variation with intentional",
          "tags": [
            "bachata",
            "derecho",
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
          "instruments": ["drums", "percussion", "guitar"],
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
            0,
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
          "syncopationRating": 0.5714285714285714,
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
            "verse"
          ],
    
    
          "variants": [
            {
              "id": "bachata-verse-15-v-01",
              "parentPatternId": "bachata-verse-15",
              "name": "Derecho Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
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
              "id": "bachata-verse-15-v-02",
              "parentPatternId": "bachata-verse-15",
              "name": "Derecho Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
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
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "bachata",
            "derecho"
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
];

export const BACHATA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "bachata-call-11",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Majao Response",
          "family": "Majao",
          "category": "interactionPattern",
          "description": "A call-and-response shape that leaves the",
          "tags": [
            "bachata",
            "majao",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "requinto"
          ],
    
          "approaches": ["phrase"],
          "instruments": ["requinto"],
          "compatibleRoles": [
            "requinto"
          ],
          "compatibleInstruments": [
            "requinto"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            3,
            5,
            8,
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
              "id": "bachata-call-11-v-01",
              "parentPatternId": "bachata-call-11",
              "name": "Majao Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                5,
                8,
                12,
                15
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
              "id": "bachata-call-11-v-02",
              "parentPatternId": "bachata-call-11",
              "name": "Majao Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                3,
                5,
                8,
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
              "id": "bachata-call-11-v-03",
              "parentPatternId": "bachata-call-11",
              "name": "Majao Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                1,
                3,
                5,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "bachata",
            "majao"
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

export const BACHATA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "bachata-requinto-derecho",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Requinto Derecho (Verse Picking)",
          "family": "Bachata Requinto",
          "category": "ostinato",
          "description": "Crisp lead guitar arpeggiation with muted",
          "tags": [
            "bachata",
            "requinto",
            "guitar",
            "derecho",
            "dominican"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "lead",
            "harmony",
            "melodic-guitar"
          ],
    
          "approaches": ["phrase", "comping"],
          "instruments": ["guitar", "guitar"],
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
            0.85,
            0.5,
            0.9,
            0.5,
            1,
            0.6
          ],
          "velocityProfile": [
            0.9,
            0.5,
            0.8,
            0.5,
            0.85,
            0.5,
            0.95,
            0.6
          ],
          "articulations": [
            "muted-thumb",
            "bright-pluck"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "derecho",
            "verse"
          ],
          "variants": [
            {
              "id": "bachata-requinto-majao-sync",
              "parentPatternId": "bachata-requinto-derecho",
              "name": "Requinto Majao (Chorus Drive)",
              "variationType": "syncopated",
              "probability": 0.6,
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
                0.8,
                0.95,
                0.7,
                0.9,
                1
              ],
              "description": "Syncopated sync-pluck driving the energetic Majao"
            },
            {
              "id": "bachata-requinto-mambo-solo",
              "parentPatternId": "bachata-requinto-derecho",
              "name": "Requinto Mambo (Virtuosic Solo Breakdown)",
              "variationType": "dense",
              "probability": 0.5,
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                14,
                15
              ],
              "accentProfile": [
                1,
                0.6,
                0.7,
                0.6,
                0.9,
                0.8,
                0.6,
                1,
                0.6,
                0.7,
                0.6,
                0.9,
                1,
                0.7
              ],
              "description": "Rapid 16th-note scalar runs and bends"
            },
            {
              "id": "bachata-requinto-derecho-variant-bongo-martillo-g-ira-repique",
              "parentPatternId": "bachata-requinto-derecho",
              "name": "Bongo Martillo & Güira Repique",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Bongo alternating between low thumb and",
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
                0.8,
                0.4,
                0.85,
                0.4,
                0.8,
                0.4,
                1,
                0.5
              ],
              "velocityProfile": [
                0.8,
                0.45,
                0.8,
                0.45,
                0.8,
                0.45,
                1,
                0.5
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "bachata-requinto-derecho-variant-bachata-mambo-solo",
              "parentPatternId": "bachata-requinto-derecho",
              "name": "Bachata Mambo Solo",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Fast virtuosic arpeggiated requinto lines for",
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
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 0.7,
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "cumbia-bass-groove",
          "worldId": "bachata",
          "styleIds": [],
          "name": "Cumbia Syncopated Bassline",
          "family": "Cumbia Bass",
          "category": "ostinato",
          "description": "Hypnotic syncopated cumbia bass hitting on",
          "tags": [
            "cumbia",
            "bass",
            "syncopated",
            "colombia"
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
          "instruments": ["bass", "piano"],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            0.9,
            1,
            0.8,
            0.95
          ],
          "velocityProfile": [
            0.85,
            1,
            0.75,
            0.9
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
              "id": "cumbia-bass-villera-synth",
              "parentPatternId": "cumbia-bass-groove",
              "name": "Cumbia Villera Punchy Synth Bass",
              "variationType": "dense",
              "probability": 0.45,
              "onsetGrid": [
                0,
                4,
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
                0.7,
                1
              ],
              "description": "Added 8th note pump for modern"
            },
            {
              "id": "cumbia-bass-groove-v-02",
              "parentPatternId": "cumbia-bass-groove",
              "name": "Cumbia Syncopated Bassline — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                0.86,
                1,
                0.76,
                1
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.98,
                0.73,
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
          "weight": 0.7,
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
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
          "id": "bachata-anchor-12",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Mambo Anchor",
          "family": "Mambo",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "bachata",
            "mambo",
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
          "instruments": ["bass"],
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
            4,
            6,
            9,
            10,
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
              "id": "bachata-anchor-12-v-01",
              "parentPatternId": "bachata-anchor-12",
              "name": "Mambo Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                6,
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
              "id": "bachata-anchor-12-v-02",
              "parentPatternId": "bachata-anchor-12",
              "name": "Mambo Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                9,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "bachata",
            "mambo"
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

export const BACHATA_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "bachata--phrasing",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Bachata Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Romantic verse/coro phrase placement that leaves",
          "tags": [
            "bachata",
            "requinto",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "requinto"
          ],
    
          "approaches": ["phrase"],
          "instruments": ["requinto"],
          "compatibleRoles": [
            "requinto",
            "lead"
          ],
          "compatibleInstruments": [
            "requinto"
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
              "id": "bachata--phrasing-v--alt",
              "parentPatternId": "bachata--phrasing",
              "name": "Bachata Vocal Phrasing — alternate phrasing",
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
              "id": "bachata--phrasing-v-final-accent",
              "parentPatternId": "bachata--phrasing",
              "name": "Bachata Vocal Phrasing — accent shift",
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
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Bachata.",
          "authenticityTags": [
            "bachata",
            "requinto"
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

export const BACHATA_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "bachata-roster-drums",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Bachata drums part",
          "family": "Derecho",
          "category": "rolePattern",
          "description": "A default-roster coverage pattern that gives",
          "tags": [
            "bachata",
            "derecho",
            "roster",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": ["drums", "drums"],
          "compatibleRoles": [
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "drums"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
            7,
            8,
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
          "syncopationRating": 0.5714285714285714,
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
              "id": "bachata-roster-10-v-01",
              "parentPatternId": "bachata-roster-drums",
              "name": "Derecho Texture — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                7,
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
              "id": "bachata-roster-10-v-02",
              "parentPatternId": "bachata-roster-drums",
              "name": "Derecho Texture — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                4,
                7,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "bachata",
            "derecho"
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

export const BACHATA_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "bachata-intro-14",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Requinto Intro",
          "family": "Requinto",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish",
          "tags": [
            "bachata",
            "requinto",
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
          "instruments": ["guitar"],
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
          "syncopationRating": 0.8571428571428571,
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
              "id": "bachata-intro-14-v-01",
              "parentPatternId": "bachata-intro-14",
              "name": "Requinto Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
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
              "id": "bachata-intro-14-v-02",
              "parentPatternId": "bachata-intro-14",
              "name": "Requinto Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                3,
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
            },
            {
              "id": "bachata-intro-14-v-03",
              "parentPatternId": "bachata-intro-14",
              "name": "Requinto Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                1,
                3,
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
          "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "bachata",
            "requinto"
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
          "id": "bachata-chorus-16",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Majao Chorus Lift",
          "family": "Majao",
          "category": "sectionPattern",
          "description": "A higher-energy chorus layer that increases",
          "tags": [
            "bachata",
            "majao",
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
          "instruments": ["drums", "percussion", "guitar"],
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
            3,
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
          "syncopationRating": 0.8571428571428571,
          "anticipationOffset": 1,
          "swingPercentage": 53,
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
              "id": "bachata-chorus-16-v-01",
              "parentPatternId": "bachata-chorus-16",
              "name": "Majao Chorus Lift — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                5,
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
              "id": "bachata-chorus-16-v-02",
              "parentPatternId": "bachata-chorus-16",
              "name": "Majao Chorus Lift — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                3,
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
              "id": "bachata-chorus-16-v-03",
              "parentPatternId": "bachata-chorus-16",
              "name": "Majao Chorus Lift — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                1,
                3,
                5,
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
          "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "bachata",
            "majao"
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

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": BACHATA_WORLD_PATTERNS_OSTINATO,
  "fill": BACHATA_WORLD_PATTERNS_FILL,
  "break": BACHATA_WORLD_PATTERNS_BREAK,
  "cadence": BACHATA_WORLD_PATTERNS_CADENCE,
  "groove": BACHATA_WORLD_PATTERNS_GROOVE,
  "rolePattern": BACHATA_WORLD_PATTERNS_ROLEPATTERN,
  "interactionPattern": BACHATA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": BACHATA_WORLD_PATTERNS_SECTIONPATTERN,
  "phrasePattern": BACHATA_WORLD_PATTERNS_PHRASEPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"rolePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":4},{"category":"sectionPattern","index":0},{"category":"groove","index":5},{"category":"sectionPattern","index":1},{"category":"phrasePattern","index":0}];

export const BACHATA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index])
    .filter(pattern => pattern.id !== 'cumbia-bass-groove' && pattern.id !== 'cumbia-guiro'),
};
