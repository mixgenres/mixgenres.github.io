import type { MusicalPattern } from '../../../schema';

export const ROCK_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "rock-straight-drive",
          "worldId": "rock",
          "styleIds": ["rock-punk-rock"],
          "name": "Straight-Eighth Drive",
          "family": "Driving Eighths",
          "category": "phrasePattern",
          "description": "Continuous guitar eighths with a firm",
          "tags": [
            "rock",
            "punk",
            "eighths",
            "drive"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "rhythm-guitar",
            "bass",
            "drums",
            "pulse"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "electric-guitar",
            "bass",
            "drums"
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
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.9,
            0.7,
            1,
            0.7,
            0.9,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.85,
            0.65,
            0.95,
            0.65,
            0.85,
            0.65
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "rock-straight-drive-v-01",
              "parentPatternId": "rock-straight-drive",
              "name": "Straight-Eighth Drive — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.85,
                0.6499999999999999,
                0.95
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.77,
                0.5700000000000001,
                0.87
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
              "id": "rock-straight-drive-v-02",
              "parentPatternId": "rock-straight-drive",
              "name": "Straight-Eighth Drive — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.86,
                0.7799999999999999,
                0.96,
                0.7799999999999999,
                0.86,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.83,
                0.71,
                0.9299999999999999,
                0.63,
                0.9099999999999999,
                0.63
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
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
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
