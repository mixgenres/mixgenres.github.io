import type { MusicalPattern } from '../../../schema';

export const SALSA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "salsa-maracas",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Maracas",
          "family": "Maracas",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Crisp forward-back maraca pulse with accented",
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
            0.6,
            0.9,
            0.6,
            0.95,
            0.6,
            0.9,
            0.65
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.85,
            0.55,
            0.9,
            0.55,
            0.85,
            0.6
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
              "id": "salsa-maracas-v-01",
              "parentPatternId": "salsa-maracas",
              "name": "Maracas — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6
              ],
              "accentProfile": [
                0.95,
                0.5499999999999999,
                0.85,
                0.5499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.47000000000000003,
                0.77,
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
              "id": "salsa-maracas-v-02",
              "parentPatternId": "salsa-maracas",
              "name": "Maracas — accent shift",
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
                7
              ],
              "accentProfile": [
                0.96,
                0.6799999999999999,
                0.86,
                0.6799999999999999,
                0.9099999999999999,
                0.6799999999999999,
                0.86,
                0.73
              ],
              "velocityProfile": [
                1,
                0.53,
                0.83,
                0.6100000000000001,
                0.88,
                0.53,
                0.9099999999999999,
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
            }
          ],
    
          "difficulty": 3,
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
