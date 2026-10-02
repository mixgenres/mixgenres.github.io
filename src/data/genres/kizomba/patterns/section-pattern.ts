import type { MusicalPattern } from '../../../schema';

export const KIZOMBA_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "kizomba-intro-13",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Drop Intro",
          "family": "Drop",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish",
          "tags": [
            "kizomba",
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
            6,
            7,
            10,
            12,
            14,
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
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "kizomba-intro-13-v-01",
              "parentPatternId": "kizomba-intro-13",
              "name": "Drop Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
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
              "id": "kizomba-intro-13-v-02",
              "parentPatternId": "kizomba-intro-13",
              "name": "Drop Intro — accent shift",
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
                14,
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
              "id": "kizomba-intro-13-v-03",
              "parentPatternId": "kizomba-intro-13",
              "name": "Drop Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                2,
                6,
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
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "drop"
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
          "id": "kizomba-chorus-15",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Kizomba Bass Chorus Lift",
          "family": "Kizomba Bass",
          "category": "sectionPattern",
          "description": "A higher-energy chorus layer that increases",
          "tags": [
            "kizomba",
            "kizomba-bass",
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
          "syncopationRating": 0.5,
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
              "id": "kizomba-chorus-15-v-01",
              "parentPatternId": "kizomba-chorus-15",
              "name": "Kizomba Bass Chorus Lift — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                2,
                4,
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
              "id": "kizomba-chorus-15-v-02",
              "parentPatternId": "kizomba-chorus-15",
              "name": "Kizomba Bass Chorus Lift — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
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
              "id": "kizomba-chorus-15-v-03",
              "parentPatternId": "kizomba-chorus-15",
              "name": "Kizomba Bass Chorus Lift — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                1,
                2,
                4,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "kizomba-bass"
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
          "id": "kizomba-bridge-16",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Semba Bridge",
          "family": "Semba",
          "category": "sectionPattern",
          "description": "A contrasting bridge texture designed to",
          "tags": [
            "kizomba",
            "semba",
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
            2,
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
              "id": "kizomba-bridge-16-v-01",
              "parentPatternId": "kizomba-bridge-16",
              "name": "Semba Bridge — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                3,
                4,
                10,
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
              "id": "kizomba-bridge-16-v-02",
              "parentPatternId": "kizomba-bridge-16",
              "name": "Semba Bridge — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
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
              "id": "kizomba-bridge-16-v-03",
              "parentPatternId": "kizomba-bridge-16",
              "name": "Semba Bridge — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "semba"
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
