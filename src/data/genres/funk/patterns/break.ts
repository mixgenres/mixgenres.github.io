import type { MusicalPattern } from '../../../schema';

export const FUNK_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "funk-16th-strum",
          "worldId": "funk",
          "styleIds": [],
          "name": "16th Note Strum",
          "family": "Guitar",
          "category": "break",
          "transitionType": "fill",
          "description": "Continuous 16ths chicken-scratch with accented backbeat",
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
            2,
            3,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.7,
            1,
            0.65,
            0.9,
            0.6,
            1,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.5,
            0.6,
            0.95,
            0.55,
            0.85,
            0.5,
            0.95,
            0.6
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
              "id": "funk-16th-strum-v-01",
              "parentPatternId": "funk-16th-strum",
              "name": "16th Note Strum — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                3,
                4,
                8,
                10,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.5499999999999999,
                0.6499999999999999,
                0.95,
                0.6,
                0.85
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.42,
                0.52,
                0.87,
                0.47000000000000003,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "funk-16th-strum-v-02",
              "parentPatternId": "funk-16th-strum",
              "name": "16th Note Strum — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                0.6799999999999999,
                0.6599999999999999,
                1,
                0.61,
                0.98,
                0.5599999999999999,
                1,
                0.6599999999999999
              ],
              "velocityProfile": [
                0.96,
                0.48,
                0.58,
                1,
                0.53,
                0.83,
                0.56,
                0.9299999999999999,
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
                -5,
                2
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
