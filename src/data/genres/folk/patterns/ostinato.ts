import type { MusicalPattern } from '../../../schema';

export const FOLK_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "folk-fiddle-drone",
          "worldId": "folk",
          "styleIds": ["folk-bluegrass"],
          "name": "Old-Time Fiddle Drone & Shuffle Bow",
          "family": "Fiddle",
          "category": "ostinato",
          "description": "Sustained open-string drone under a rhythmic",
          "tags": [
            "folk",
            "old-time",
            "fiddle"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "violin"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "violin"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            4,
            6,
            9,
            10
          ],
          "accentProfile": [
            1,
            0.6,
            0.75,
            0.9,
            0.6,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.7,
            0.85,
            0.55,
            0.7
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
              "id": "folk-fiddle-drone-v-01",
              "parentPatternId": "folk-fiddle-drone",
              "name": "Old-Time Fiddle Drone & Shuffle Bow — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                10
              ],
              "accentProfile": [
                0.95,
                0.5499999999999999,
                0.7,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.47000000000000003,
                0.62,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "folk-fiddle-drone-v-02",
              "parentPatternId": "folk-fiddle-drone",
              "name": "Old-Time Fiddle Drone & Shuffle Bow — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                6,
                9,
                10
              ],
              "accentProfile": [
                0.96,
                0.6799999999999999,
                0.71,
                0.98,
                0.5599999999999999,
                0.83
              ],
              "velocityProfile": [
                1,
                0.53,
                0.6799999999999999,
                0.9099999999999999,
                0.53,
                0.6799999999999999
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
          "weight": 0.7,
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "folk-anchor-14",
          "worldId": "folk",
          "styleIds": ["folk-singer-songwriter"],
          "name": "Vocal Harmony Anchor",
          "family": "Vocal Harmony",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "folk",
            "vocal-harmony",
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
            2,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95
          ],
          "syncopationRating": 0.8,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["accented"],
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
              "id": "folk-anchor-14-v-01",
              "parentPatternId": "folk-anchor-14",
              "name": "Vocal Harmony Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                8,
                11
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "folk-anchor-14-v-02",
              "parentPatternId": "folk-anchor-14",
              "name": "Vocal Harmony Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                5,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
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
          "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "folk",
            "vocal-harmony"
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
