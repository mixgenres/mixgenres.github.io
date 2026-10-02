import type { MusicalPattern } from '../../../schema';

export const TANGO_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "tango-bass-pizzicato",
          "worldId": "tango",
          "styleIds": ["tango-tango-nuevo"],
          "name": "Pizzicato Bass",
          "family": "Bass",
          "category": "groove",
          "description": "Plucked bass syncopations with dynamic accents.",
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
          "subdivisions": 8,
          "onsetGrid": [
            0,
            3,
            6
          ],
          "accentProfile": [
            1,
            0.85,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.8,
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
              "id": "tango-bass-pizzicato-v-01",
              "parentPatternId": "tango-bass-pizzicato",
              "name": "Pizzicato Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6
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
              "id": "tango-bass-pizzicato-v-02",
              "parentPatternId": "tango-bass-pizzicato",
              "name": "Pizzicato Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.71
              ],
              "velocityProfile": [
                1,
                0.78,
                0.6799999999999999
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
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
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
          "id": "tango-comp-15",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Yumba Comping",
          "family": "Yumba",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
          "tags": [
            "tango",
            "yumba",
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
            0,
            3,
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
            "rubato-aware"
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
              "id": "tango-comp-15-v-01",
              "parentPatternId": "tango-comp-15",
              "name": "Yumba Comping — sparse variation",
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
              "id": "tango-comp-15-v-02",
              "parentPatternId": "tango-comp-15",
              "name": "Yumba Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
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
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "yumba"
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
          "id": "tango-verse-17",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Síncopa Verse Variation",
          "family": "Síncopa",
          "category": "groove",
          "description": "A restrained verse variation with intentional",
          "tags": [
            "tango",
            "sincopa",
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
            3,
            6,
            7,
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
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
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
              "id": "tango-verse-17-v-01",
              "parentPatternId": "tango-verse-17",
              "name": "Síncopa Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                3,
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
              "id": "tango-verse-17-v-02",
              "parentPatternId": "tango-verse-17",
              "name": "Síncopa Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                3,
                6,
                7,
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
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "sincopa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        }
];
