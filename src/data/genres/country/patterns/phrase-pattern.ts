import type { MusicalPattern } from '../../../schema';

export const COUNTRY_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "country-phrase-11",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
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
