import type { MusicalPattern } from '../../../schema';

export const FLAMENCO_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "flamenco-golpe",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Golpe (Tap)",
          "family": "Percussion",
          "category": "fill",
          "transitionType": "fill",
          "description": "Resonant finger taps on the tapador/guitar",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion",
            "guitar"
          ],
    
          "approaches": ["groove", "chop"],
          "instruments": [
            "percussion",
            "guitar"
          ],
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
            0.9,
            1,
            0.85,
            1
          ],
          "velocityProfile": [
            0.85,
            0.95,
            0.8,
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
              "id": "flamenco-golpe-v-01",
              "parentPatternId": "flamenco-golpe",
              "name": "Golpe (Tap) — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                0.85,
                0.95,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.77,
                0.87,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "flamenco-golpe-v-02",
              "parentPatternId": "flamenco-golpe",
              "name": "Golpe (Tap) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.86,
                1,
                0.8099999999999999,
                1
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.9299999999999999,
                0.78,
                1
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 1,
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
