import type { MusicalPattern } from '../../../schema';

export const FLAMENCO_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "flamenco-bulerias-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-bulerias"],
          "name": "Bulerias Palmas",
          "family": "Palmas",
          "category": "break",
          "transitionType": "fill",
          "description": "12-beat compás cycle handclaps with classic",
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
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            7,
            8,
            10
          ],
          "accentProfile": [
            1,
            0.85,
            0.9,
            0.95,
            1
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.85,
            0.9,
            0.95
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
              "id": "flamenco-bulerias-palmas-v-01",
              "parentPatternId": "flamenco-bulerias-palmas",
              "name": "Bulerias Palmas — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                7,
                8
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "flamenco-bulerias-palmas-v-02",
              "parentPatternId": "flamenco-bulerias-palmas",
              "name": "Bulerias Palmas — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                7,
                8,
                10
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.86,
                1,
                0.96
              ],
              "velocityProfile": [
                1,
                0.78,
                0.83,
                0.96,
                0.9299999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "flamenco"
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
