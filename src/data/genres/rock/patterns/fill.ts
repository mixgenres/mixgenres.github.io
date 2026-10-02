import type { MusicalPattern } from '../../../schema';

export const ROCK_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "rock-power-chords",
          "worldId": "rock",
          "styleIds": ["rock-punk-rock"],
          "name": "Power Chords",
          "family": "Guitar",
          "category": "fill",
          "transitionType": "fill",
          "description": "Distorted 8th note power chords driving",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "electric-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar"
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
            0.78,
            0.88,
            0.76,
            0.95,
            0.78,
            0.88,
            0.82
          ],
          "velocityProfile": [
            0.95,
            0.72,
            0.82,
            0.7,
            0.9,
            0.72,
            0.82,
            0.78
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
              "id": "rock-power-chords-v-01",
              "parentPatternId": "rock-power-chords",
              "name": "Power Chords — sparse variation",
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
                0.73,
                0.83,
                0.71,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.64,
                0.74,
                0.62,
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
              "id": "rock-power-chords-v-02",
              "parentPatternId": "rock-power-chords",
              "name": "Power Chords — accent shift",
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
                0.86,
                0.84,
                0.84,
                0.9099999999999999,
                0.86,
                0.84,
                0.8999999999999999
              ],
              "velocityProfile": [
                1,
                0.7,
                0.7999999999999999,
                0.76,
                0.88,
                0.7,
                0.8799999999999999,
                0.76
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
