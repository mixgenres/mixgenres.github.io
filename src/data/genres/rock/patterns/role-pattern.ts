import type { MusicalPattern } from '../../../schema';

export const ROCK_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "rock-roster-",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Rock  part",
          "family": "Build",
          "category": "rolePattern",
          "description": "A default-roster coverage pattern that gives",
          "tags": [
            "rock",
            "build",
            "roster",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "electric-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "electric-guitar"
          ],
          "compatibleRoles": [
            "electric-guitar"
          ],
          "compatibleInstruments": [
            "electric-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            4,
            7,
            10,
            13,
            15
          ],
          "accentProfile": [
            1,
            0.72,
            0.72,
            1,
            0.72,
            0.72
          ],
          "velocityProfile": [
            0.95,
            0.68,
            0.68,
            0.95,
            0.68,
            0.68
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "muted"
          ],
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
              "id": "rock-roster-13-v-01",
              "parentPatternId": "rock-roster-13",
              "name": "Build Texture — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                8,
                12
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
              "id": "rock-roster-13-v-02",
              "parentPatternId": "rock-roster-13",
              "name": "Build Texture — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "rock",
            "build"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 1,
          "weight": 0.7,
          "enabled": true
        }
];
