import type { MusicalPattern } from '../../../schema';

export const BLUES_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "blues-turnaround",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "12-Bar Turnaround",
          "family": "Turnaround",
          "category": "cadence",
          "transitionType": "fill",
          "description": "A compact cadence in the final",
          "tags": [
            "blues",
            "12-bar",
            "turnaround",
            "cadence"
          ],
          "scopes": [
            "phrase",
            "region",
            "song"
          ],
          "roles": [
            "harmony",
            "rhythm-guitar",
            "melody"
          ],
    
          "approaches": ["comping", "phrase"],
          "instruments": [
            "electric-guitar",
            "guitar",
            "piano"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.8,
            0.6,
            0.75,
            0.9,
            0.7,
            0.85,
            0.7,
            1
          ],
          "velocityProfile": [
            0.75,
            0.55,
            0.7,
            0.9,
            0.65,
            0.8,
            0.65,
            1
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "turnaround",
            "ending"
          ],
          "variants": [
            {
              "id": "blues-turnaround-v-01",
              "parentPatternId": "blues-turnaround",
              "name": "12-Bar Turnaround — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.75,
                0.5499999999999999,
                0.7,
                0.85,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.67,
                0.47000000000000003,
                0.62,
                0.8200000000000001,
                0.5700000000000001
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
              "id": "blues-turnaround-v-02",
              "parentPatternId": "blues-turnaround",
              "name": "12-Bar Turnaround — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.76,
                0.6799999999999999,
                0.71,
                0.98,
                0.6599999999999999,
                0.9299999999999999,
                0.6599999999999999,
                1
              ],
              "velocityProfile": [
                0.81,
                0.53,
                0.6799999999999999,
                0.96,
                0.63,
                0.78,
                0.71,
                0.98
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
              "id": "blues-turnaround-v-03",
              "parentPatternId": "blues-turnaround",
              "name": "12-Bar Turnaround — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.78,
                0.58,
                0.73,
                0.88,
                0.6799999999999999,
                0.83,
                1,
                1
              ],
              "velocityProfile": [
                0.75,
                0.55,
                0.7,
                0.9,
                0.65,
                0.8,
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
    
          "difficulty": 3,
          "weight": 0.7,
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
