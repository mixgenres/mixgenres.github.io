import type { MusicalPattern } from '../../../schema';

export const ROCK_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "rock-tom-beat",
          "worldId": "rock",
          "styleIds": ["rock-grunge"],
          "name": "Tom Groove",
          "family": "Drums",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Tribal tom-tom beat for atmospheric verses",
          "tags": [],
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
            0.7,
            0.85,
            0.65,
            0.95,
            0.7,
            0.85,
            0.65
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.8,
            0.6,
            0.9,
            0.65,
            0.8,
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
              "id": "rock-tom-beat-v-01",
              "parentPatternId": "rock-tom-beat",
              "name": "Tom Groove — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                7,
                11,
                12
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.7999999999999999,
                0.6,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.7200000000000001,
                0.52,
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
              "id": "rock-tom-beat-v-02",
              "parentPatternId": "rock-tom-beat",
              "name": "Tom Groove — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
                0.7799999999999999,
                0.8099999999999999,
                0.73,
                0.9099999999999999,
                0.7799999999999999,
                0.8099999999999999,
                0.73
              ],
              "velocityProfile": [
                1,
                0.63,
                0.78,
                0.6599999999999999,
                0.88,
                0.63,
                0.8600000000000001,
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
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];
