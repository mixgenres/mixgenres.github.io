import type { MusicalPattern } from '../../../schema';

export const METAL_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "metal-djent-sync",
          "worldId": "metal",
          "styleIds": ["metal-progressive-metal"],
          "name": "Djent Syncopation",
          "family": "Guitar",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Complex syncopated low-register chugging.",
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
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            13
          ],
          "accentProfile": [
            1,
            0.9,
            0.8,
            0.95,
            0.85,
            1
          ],
          "velocityProfile": [
            0.95,
            0.85,
            0.75,
            0.9,
            0.8,
            0.95
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
              "id": "metal-djent-sync-v-01",
              "parentPatternId": "metal-djent-sync",
              "name": "Djent Syncopation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                5,
                8,
                13
              ],
              "accentProfile": [
                0.95,
                0.85,
                0.75,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.77,
                0.67,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "metal-djent-sync-v-02",
              "parentPatternId": "metal-djent-sync",
              "name": "Djent Syncopation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                11,
                13
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.76,
                1,
                0.8099999999999999,
                1
              ],
              "velocityProfile": [
                1,
                0.83,
                0.73,
                0.96,
                0.78,
                0.9299999999999999
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
          "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "metal"
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
