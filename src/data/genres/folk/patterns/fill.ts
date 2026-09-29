import type { MusicalPattern } from '../../../schema';

export const FOLK_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "folk-travis-sync",
          "worldId": "folk",
          "styleIds": ["folk-singer-songwriter"],
          "name": "Syncopated Travis",
          "family": "Fingerpicking",
          "category": "fill",
          "transitionType": "fill",
          "description": "Travis picking with anticipations.",
          "tags": [
            "folk",
            "fingerpicking"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            7,
            8,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.85,
            0.9,
            0.95,
            0.85,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.85,
            0.9,
            0.8,
            0.75
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
              "id": "folk-travis-sync-v-01",
              "parentPatternId": "folk-travis-sync",
              "name": "Syncopated Travis — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                7,
                8,
                15
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001,
                0.77,
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
              "id": "folk-travis-sync-v-02",
              "parentPatternId": "folk-travis-sync",
              "name": "Syncopated Travis — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                7,
                8,
                12,
                15
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.86,
                1,
                0.8099999999999999,
                0.88
              ],
              "velocityProfile": [
                1,
                0.78,
                0.83,
                0.96,
                0.78,
                0.73
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
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
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
