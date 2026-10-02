import type { MusicalPattern } from '../../../schema';

export const ROCK_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "rock-call-14",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Break Response",
          "family": "Break",
          "category": "interactionPattern",
          "description": "A call-and-response shape that leaves the",
          "tags": [
            "rock",
            "break",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "electric-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "electric-guitar"
          ],
          "compatibleRoles": [
            "electric-guitar"
          ],
          "compatibleInstruments": [
            "electric-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            5,
            9,
            13
          ],
          "accentProfile": [
            0.95,
            0.62,
            0.95,
            0.62
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "muted"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "rock-call-14-v-01",
              "parentPatternId": "rock-call-14",
              "name": "Break Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                9,
                13
              ],
              "accentProfile": [
                0.8999999999999999,
                0.57,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.48999999999999994,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "rock-call-14-v-02",
              "parentPatternId": "rock-call-14",
              "name": "Break Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                5,
                9,
                13
              ],
              "accentProfile": [
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "rock-call-14-v-03",
              "parentPatternId": "rock-call-14",
              "name": "Break Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                1,
                5,
                9,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.9299999999999999,
                0.6,
                0.9299999999999999,
                0.6,
                1,
                1
              ],
              "velocityProfile": [
                0.95,
                0.57,
                0.95,
                0.62,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "rock",
            "break"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 1,
          "weight": 0.7,
          "enabled": true
        }
];
