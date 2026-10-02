import type { MusicalPattern } from '../../../schema';

export const KIZOMBA_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "kizomba-fill-17",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Call Fill",
          "family": "Call",
          "category": "fill",
          "transitionType": "fill",
          "description": "A short transition fill that signals",
          "tags": [
            "kizomba",
            "call",
            "fill",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "fill",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion"
          ],
          "compatibleRoles": [
            "fill",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.72,
            0.78,
            0.84,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            1
          ],
          "syncopationRating": 0,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "fill"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "pre-chorus",
            "turnaround",
            "ending"
          ],
    
    
          "variants": [
            {
              "id": "kizomba-fill-17-v-01",
              "parentPatternId": "kizomba-fill-17",
              "name": "Call Fill — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                0.6699999999999999,
                0.73,
                0.7899999999999999
              ],
              "velocityProfile": [
                0.64,
                0.65,
                0.76
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-fill-17-v-02",
              "parentPatternId": "kizomba-fill-17",
              "name": "Call Fill — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.6799999999999999,
                0.86,
                0.7999999999999999,
                1
              ],
              "velocityProfile": [
                0.78,
                0.71,
                0.82,
                1
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "kizomba-fill-17-v-03",
              "parentPatternId": "kizomba-fill-17",
              "name": "Call Fill — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.7,
                0.76,
                0.82,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                0.72,
                0.73,
                0.84,
                1,
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
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "call"
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
