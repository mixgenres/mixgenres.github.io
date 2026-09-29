import type { MusicalPattern } from '../../../schema';

export const BACHATA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "bachata-bongo-derecho",
          "worldId": "bachata",
          "styleIds": ["latin-bachata"],
          "name": "Bongo Derecho",
          "family": "Bongo",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Martillo bongo pattern for verses with",
          "tags": [
            "bachata",
            "bongo",
            "derecho"
          ],
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
            2,
            4,
            6,
            8,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.7,
            0.6,
            0.85,
            0.6,
            0.7,
            0.6,
            1,
            0.65
          ],
          "velocityProfile": [
            0.65,
            0.55,
            0.8,
            0.55,
            0.65,
            0.55,
            0.95,
            0.6
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "derecho",
            "verse",
            "ending",
            "turnaround"
          ],
          "variants": [
            {
              "id": "bachata-bongo-derecho-v-01",
              "parentPatternId": "bachata-bongo-derecho",
              "name": "Bongo Derecho — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12
              ],
              "accentProfile": [
                0.6499999999999999,
                0.5499999999999999,
                0.7999999999999999,
                0.5499999999999999,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.5700000000000001,
                0.47000000000000003,
                0.7200000000000001,
                0.47000000000000003,
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
              "id": "bachata-bongo-derecho-v-02",
              "parentPatternId": "bachata-bongo-derecho",
              "name": "Bongo Derecho — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.6599999999999999,
                0.6799999999999999,
                0.8099999999999999,
                0.6799999999999999,
                0.6599999999999999,
                0.6799999999999999,
                0.96,
                0.73
              ],
              "velocityProfile": [
                0.71,
                0.53,
                0.78,
                0.6100000000000001,
                0.63,
                0.53,
                1,
                0.58
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
              "id": "bachata-bongo-derecho-v-03",
              "parentPatternId": "bachata-bongo-derecho",
              "name": "Bongo Derecho — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.6799999999999999,
                0.58,
                0.83,
                0.58,
                0.6799999999999999,
                0.58,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                0.65,
                0.55,
                0.8,
                0.55,
                0.65,
                0.55,
                0.95,
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
                0,
                -6,
                -6
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 1,
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
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
