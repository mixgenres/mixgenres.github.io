import type { MusicalPattern } from '../../../schema';

export const KIZOMBA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "kizomba-dikanza-scraper",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba"],
          "name": "Dikanza Scraper",
          "family": "Percussion",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Authentic Angolan dikanza (reco-reco / bamboo",
          "tags": [
            "kizomba",
            "semba",
            "dikanza",
            "percussion",
            "angola"
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
            2,
            4,
            7,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.76,
            0.94,
            0.72,
            0.88,
            0.82,
            0.94
          ],
          "velocityProfile": [
            0.72,
            0.88,
            0.68,
            0.84,
            0.76,
            0.88
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
              "id": "kizomba-dikanza-scraper-v-01",
              "parentPatternId": "kizomba-dikanza-scraper",
              "name": "Dikanza Scraper — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                7,
                10,
                15
              ],
              "accentProfile": [
                0.71,
                0.8899999999999999,
                0.6699999999999999,
                0.83
              ],
              "velocityProfile": [
                0.64,
                0.8,
                0.6000000000000001,
                0.76
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "kizomba-dikanza-scraper-v-02",
              "parentPatternId": "kizomba-dikanza-scraper",
              "name": "Dikanza Scraper — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                4,
                7,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.72,
                1,
                0.6799999999999999,
                0.96,
                0.7799999999999999,
                1
              ],
              "velocityProfile": [
                0.78,
                0.86,
                0.66,
                0.8999999999999999,
                0.74,
                0.86
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
          "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "kizomba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];
