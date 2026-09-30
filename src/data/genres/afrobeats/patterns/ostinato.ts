import type { MusicalPattern } from '../../../schema';

export const AFROBEATS_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "afro-highlife-guitar",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop", "afrobeats-afrobeat"],
          "name": "Highlife Fingerstyle Clean Guitar",
          "family": "Highlife Guitar",
          "category": "ostinato",
          "description": "Bright clean electric guitar playing rhythmic",
          "tags": [
            "afrobeats",
            "guitar",
            "highlife",
            "clean"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "guitar"
          ],
    
          "approaches": ["comping", "chop"],
          "instruments": [
            "guitar",
            "electric-guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            7,
            8,
            11,
            13,
            15
          ],
          "accentProfile": [
            0.85,
            0.95,
            0.75,
            0.9,
            0.8,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.8,
            0.9,
            0.7,
            0.85,
            0.75,
            0.9,
            0.65
          ],
          "supportedEnergy": [2, 3, 4],
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
              "id": "afro-highlife-guitar-v-01",
              "parentPatternId": "afro-highlife-guitar",
              "name": "Highlife Fingerstyle Clean Guitar — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                7,
                8,
                13,
                15
              ],
              "accentProfile": [
                0.7999999999999999,
                0.8999999999999999,
                0.7,
                0.85,
                0.75
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.8200000000000001,
                0.62,
                0.77,
                0.67
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
              "id": "afro-highlife-guitar-v-02",
              "parentPatternId": "afro-highlife-guitar",
              "name": "Highlife Fingerstyle Clean Guitar — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                4,
                7,
                8,
                11,
                13,
                15
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.71,
                0.98,
                0.76,
                1,
                0.6599999999999999
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.88,
                0.6799999999999999,
                0.9099999999999999,
                0.73,
                0.88,
                0.71
              ],
              "microtimingOffset": [
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
    
          "difficulty": 2,
          "weight": 0.7,
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
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
        },
  {
          "id": "afrobeats-anchor-8",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop", "afrobeats-afrobeat"],
          "name": "Hook Anchor",
          "family": "Hook",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "afrobeats",
            "hook",
            "anchor",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "compatibleRoles": [
            "bass"
          ],
          "compatibleInstruments": [
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            5,
            8,
            10,
            13
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74
          ],
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [2, 3, 4],
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
              "id": "afrobeats-anchor-8-v-01",
              "parentPatternId": "afrobeats-anchor-8",
              "name": "Hook Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5,
                8,
                13
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "afrobeats-anchor-8-v-02",
              "parentPatternId": "afrobeats-anchor-8",
              "name": "Hook Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                5,
                8,
                10,
                13
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "hook"
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
