import type { MusicalPattern } from '../../../schema';

export const FUNK_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "funk-slap-bass",
          "worldId": "funk",
          "styleIds": ["funk-pfunk-neworleans"],
          "name": "Slap Bass",
          "family": "Bass",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Thumb slap on downbeats and syncopated",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
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
            10,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.85,
            0.7,
            0.9,
            0.95,
            0.8,
            0.7,
            0.85
          ],
          "velocityProfile": [
            1,
            0.8,
            0.65,
            0.85,
            0.9,
            0.75,
            0.65,
            0.8
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
              "id": "funk-slap-bass-v-01",
              "parentPatternId": "funk-slap-bass",
              "name": "Slap Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                7,
                10,
                12
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999,
                0.6499999999999999,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.92,
                0.7200000000000001,
                0.5700000000000001,
                0.77,
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
              "id": "funk-slap-bass-v-02",
              "parentPatternId": "funk-slap-bass",
              "name": "Slap Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.6599999999999999,
                0.98,
                0.9099999999999999,
                0.88,
                0.6599999999999999,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.78,
                0.63,
                0.9099999999999999,
                0.88,
                0.73,
                0.71,
                0.78
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
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
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
