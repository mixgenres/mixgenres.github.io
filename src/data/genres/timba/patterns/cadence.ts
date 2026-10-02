import type { MusicalPattern } from '../../../schema';

export const TIMBA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "timba-bata-fusion",
          "worldId": "timba",
          "styleIds": ["timba-songo"],
          "name": "Bata Fusion",
          "family": "Percussion",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Bata drum accents blended into drumkit",
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
            4,
            8,
            10,
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.9,
            0.8,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.85,
            0.75,
            0.9
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
              "id": "timba-bata-fusion-v-01",
              "parentPatternId": "timba-bata-fusion",
              "name": "Bata Fusion — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                8,
                10
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "timba-bata-fusion-v-02",
              "parentPatternId": "timba-bata-fusion",
              "name": "Bata Fusion — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                10,
                14
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.86,
                0.88,
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.83,
                0.81,
                0.88
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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
