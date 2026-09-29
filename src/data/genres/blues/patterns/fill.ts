import type { MusicalPattern } from '../../../schema';

export const BLUES_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "blues-shuffle",
          "worldId": "blues",
          "styleIds": ["blues-chicago"],
          "name": "Chicago Shuffle",
          "family": "Shuffle",
          "category": "fill",
          "transitionType": "fill",
          "description": "A repeating triplet-derived blues pulse with",
          "tags": [
            "blues",
            "shuffle",
            "backbeat"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "drums",
            "percussion",
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            11
          ],
          "accentProfile": [
            1,
            0.65,
            0.9,
            0.65,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.6,
            0.85,
            0.6,
            0.9,
            0.65
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "blues-shuffle-fill",
              "parentPatternId": "blues-shuffle",
              "name": "Shuffle Fill",
              "variationType": "fill",
              "probability": 0.45,
              "onsetGrid": [
                0,
                3,
                4,
                6,
                8,
                9,
                11
              ],
              "accentProfile": [
                1,
                0.6,
                0.85,
                0.7,
                0.9,
                0.65,
                1
              ],
              "description": "A short turnaround-oriented fill that leaves"
            },
            {
              "id": "blues-shuffle-v-02",
              "parentPatternId": "blues-shuffle",
              "name": "Chicago Shuffle — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                11
              ],
              "accentProfile": [
                0.96,
                0.73,
                0.86,
                0.73,
                0.9099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                0.96,
                0.58,
                0.83,
                0.6599999999999999,
                0.88,
                0.63
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];
