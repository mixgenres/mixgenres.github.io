import type { MusicalPattern } from '../../../schema';

export const SALSA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "salsa-guiro",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Guiro Pattern",
          "family": "Guiro",
          "category": "break",
          "transitionType": "fill",
          "description": "Traditional long down-stroke and rapid up-up",
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
            2,
            3,
            4,
            6,
            7,
            8,
            10,
            11,
            12,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.5,
            0.7,
            1,
            0.5,
            0.7,
            1,
            0.5,
            0.7,
            1,
            0.5,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.45,
            0.65,
            0.95,
            0.45,
            0.65,
            0.95,
            0.45,
            0.65,
            0.95,
            0.45,
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
              "id": "salsa-guiro-v-01",
              "parentPatternId": "salsa-guiro",
              "name": "Guiro Pattern — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
                0.95,
                0.45,
                0.6499999999999999,
                0.95,
                0.45,
                0.6499999999999999,
                0.95,
                0.45
              ],
              "velocityProfile": [
                0.87,
                0.4,
                0.5700000000000001,
                0.87,
                0.4,
                0.5700000000000001,
                0.87,
                0.4
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
              "id": "salsa-guiro-v-02",
              "parentPatternId": "salsa-guiro",
              "name": "Guiro Pattern — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                7,
                8,
                10,
                11,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                0.58,
                0.6599999999999999,
                1,
                0.46,
                0.7799999999999999,
                0.96,
                0.58,
                0.6599999999999999,
                1,
                0.46,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.43,
                0.63,
                1,
                0.43,
                0.63,
                1,
                0.43,
                0.63,
                1,
                0.43,
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
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
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
