import type { MusicalPattern } from '../../../schema';

export const COUNTRY_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "country-anchor-13",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Chicken Pickin Anchor",
          "family": "Chicken Pickin",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "country",
            "chicken-pickin",
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
            1,
            2,
            4,
            5,
            7,
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.63
          ],
          "syncopationRating": 0.75,
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
              "id": "country-anchor-13-v-01",
              "parentPatternId": "country-anchor-13",
              "name": "Chicken Pickin Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                4,
                5,
                10,
                12
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
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
              "id": "country-anchor-13-v-02",
              "parentPatternId": "country-anchor-13",
              "name": "Chicken Pickin Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                2,
                4,
                5,
                7,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96,
                0.61
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "chicken-pickin"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.7,
          "enabled": true
        }
];
