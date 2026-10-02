import type { MusicalPattern } from '../../../schema';

export const SALSA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "salsa-call-13",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Mambo Response",
          "family": "Mambo",
          "category": "interactionPattern",
          "description": "A call-and-response shape that leaves the",
          "tags": [
            "salsa",
            "mambo",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "trumpet"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet"
          ],
          "compatibleRoles": [
            "trumpet"
          ],
          "compatibleInstruments": [
            "trumpet"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            6,
            7,
            10,
            13,
            15
          ],
          "accentProfile": [
            0.95,
            0.62,
            0.95,
            0.62,
            0.95,
            0.62
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "breath",
            "phrase-end"
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
              "id": "salsa-call-13-v-01",
              "parentPatternId": "salsa-call-13",
              "name": "Mambo Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                3,
                7,
                10,
                15
              ],
              "accentProfile": [
                0.8999999999999999,
                0.57,
                0.8999999999999999,
                0.57
              ],
              "velocityProfile": [
                0.87,
                0.48999999999999994,
                0.87,
                0.54
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "salsa-call-13-v-02",
              "parentPatternId": "salsa-call-13",
              "name": "Mambo Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                3,
                6,
                7,
                10,
                13,
                15
              ],
              "accentProfile": [
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999,
                0.8799999999999999,
                0.6
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "salsa-call-13-v-03",
              "parentPatternId": "salsa-call-13",
              "name": "Mambo Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                3,
                6,
                7,
                10,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.9299999999999999,
                0.6,
                0.9299999999999999,
                0.6,
                0.9299999999999999,
                1,
                1
              ],
              "velocityProfile": [
                0.95,
                0.57,
                0.95,
                0.62,
                0.8999999999999999,
                0.98,
                0.98
              ],
              "microtimingOffset": [
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
          "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "salsa",
            "mambo"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];
