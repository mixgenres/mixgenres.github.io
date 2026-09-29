import type { MusicalPattern } from '../../../schema';

export const TIMBA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "timba-conga-gear",
          "worldId": "timba",
          "styleIds": ["timba-havana-modern"],
          "name": "Timba Conga Gear",
          "family": "Conga",
          "category": "break",
          "transitionType": "fill",
          "description": "Dense modern timba conga pattern with",
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
            3,
            4,
            7,
            8,
            11,
            12,
            15
          ],
          "accentProfile": [
            0.75,
            0.95,
            0.6,
            0.85,
            0.75,
            0.95,
            0.6,
            0.9
          ],
          "velocityProfile": [
            0.7,
            0.95,
            0.55,
            0.8,
            0.7,
            0.95,
            0.55,
            0.85
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
              "id": "timba-conga-gear-v-01",
              "parentPatternId": "timba-conga-gear",
              "name": "Timba Conga Gear — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                7,
                11,
                12
              ],
              "accentProfile": [
                0.7,
                0.8999999999999999,
                0.5499999999999999,
                0.7999999999999999,
                0.7
              ],
              "velocityProfile": [
                0.62,
                0.87,
                0.47000000000000003,
                0.7200000000000001,
                0.62
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
              "id": "timba-conga-gear-v-02",
              "parentPatternId": "timba-conga-gear",
              "name": "Timba Conga Gear — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                11,
                12,
                15
              ],
              "accentProfile": [
                0.71,
                1,
                0.5599999999999999,
                0.9299999999999999,
                0.71,
                1,
                0.5599999999999999,
                0.98
              ],
              "velocityProfile": [
                0.76,
                0.9299999999999999,
                0.53,
                0.8600000000000001,
                0.6799999999999999,
                0.9299999999999999,
                0.6100000000000001,
                0.83
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
