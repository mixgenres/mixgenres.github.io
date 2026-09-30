import type { MusicalPattern } from '../../../schema';

export const ZOUK_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "zouk-shaker",
          "worldId": "zouk",
          "styleIds": ["zouk-love"],
          "name": "Zouk Shaker",
          "family": "Percussion",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Continuous 16ths shaker with accented 8th",
          "tags": [
            "zouk",
            "shaker",
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
            0.9,
            0.5,
            0.7,
            0.5,
            0.95,
            0.5,
            0.7,
            0.5,
            0.9,
            0.5,
            0.7,
            0.5,
            0.95,
            0.5,
            0.7,
            0.55
          ],
          "velocityProfile": [
            0.85,
            0.45,
            0.65,
            0.45,
            0.9,
            0.45,
            0.65,
            0.45,
            0.85,
            0.45,
            0.65,
            0.45,
            0.9,
            0.45,
            0.65,
            0.5
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
              "id": "zouk-shaker-v-01",
              "parentPatternId": "zouk-shaker",
              "name": "Zouk Shaker — sparse variation",
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
                0.85,
                0.45,
                0.6499999999999999,
                0.45,
                0.8999999999999999,
                0.45,
                0.6499999999999999,
                0.45,
                0.85,
                0.45,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.77,
                0.4,
                0.5700000000000001,
                0.4,
                0.8200000000000001,
                0.4,
                0.5700000000000001,
                0.4,
                0.77,
                0.4,
                0.5700000000000001
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
              "id": "zouk-shaker-v-02",
              "parentPatternId": "zouk-shaker",
              "name": "Zouk Shaker — accent shift",
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
                0.86,
                0.58,
                0.6599999999999999,
                0.58,
                0.9099999999999999,
                0.58,
                0.6599999999999999,
                0.58,
                0.86,
                0.58,
                0.6599999999999999,
                0.58,
                0.9099999999999999,
                0.58,
                0.6599999999999999,
                0.63
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.43,
                0.63,
                0.51,
                0.88,
                0.43,
                0.71,
                0.43,
                0.83,
                0.51,
                0.63,
                0.43,
                0.96,
                0.43,
                0.63,
                0.56
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];
