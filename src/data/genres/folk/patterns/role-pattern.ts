import type { MusicalPattern } from '../../../schema';

export const FOLK_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "folk-roster-bass",
          "worldId": "folk",
          "styleIds": ["folk-singer-songwriter"],
          "name": "Folk bass part",
          "family": "Flatpick",
          "category": "rolePattern",
          "description": "A default-roster coverage pattern gives each ensemble role a playable part.",
          "tags": [
            "folk",
            "flatpick",
            "roster",
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
            3,
            6,
            9,
            12
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
          "syncopationRating": 0.6,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["accented"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "folk-roster-11-v-01",
              "parentPatternId": "folk-roster-11",
              "name": "Flatpick Texture — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                9
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
              "id": "folk-roster-11-v-02",
              "parentPatternId": "folk-roster-11",
              "name": "Flatpick Texture — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                9,
                12
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
            "flatpick"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "folk-roster-",
          "worldId": "folk",
          "styleIds": ["folk-singer-songwriter"],
          "name": "Folk  part",
          "family": "Banjo Roll",
          "category": "rolePattern",
          "description": "A default-roster coverage pattern gives each ensemble role a playable part.",
          "tags": [
            "folk",
            "banjo-roll",
            "roster",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "acoustic-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "acoustic-guitar"
          ],
          "compatibleRoles": [
            "acoustic-guitar"
          ],
          "compatibleInstruments": [
            "acoustic-guitar"
          ],
          "canCrossRole": true,
          "meter": "6/8",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            4,
            7,
            10,
            13
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
          "articulations": ["breath"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "folk-roster-12-v-01",
              "parentPatternId": "folk-roster-12",
              "name": "Banjo Roll Texture — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                7,
                10
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
              "id": "folk-roster-12-v-02",
              "parentPatternId": "folk-roster-12",
              "name": "Banjo Roll Texture — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                7,
                10,
                13
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
            "banjo-roll"
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
