import type { MusicalPattern } from '../../../schema';

export const COUNTRY_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "country-train",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Train Beat",
          "family": "Beat",
          "category": "break",
          "transitionType": "fill",
          "description": "Continuous 16ths snare train beat with",
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
