import type { MusicalPattern } from '../../../schema';

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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
          "instruments": [
            "guitar"
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
          "styleIds": ["cumbia-colombiana"],
          "name": "Cumbia Güiro",
          "family": "Guiro",
          "category": "groove",
          "description": "Classic cumbia shh-shh-pah scraper rhythm.",
          "tags": [
            "cumbia",
            "guiro",
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
