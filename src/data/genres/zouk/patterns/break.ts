import type { MusicalPattern } from '../../../schema';

export const ZOUK_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "zouk-french-bass",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "French Antillean Zouk Bass",
          "family": "Bass",
          "category": "break",
          "transitionType": "fill",
          "description": "Melodic driving bass line with Caribbean",
          "tags": [
            "zouk",
            "bass",
            "antilles"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            12
          ],
          "accentProfile": [
            1,
            0.75,
            0.9,
            0.8,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.7,
            0.85,
            0.75,
            0.9
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
              "id": "zouk-french-bass-v-01",
              "parentPatternId": "zouk-french-bass",
              "name": "French Antillean Zouk Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                8
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.62,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "zouk-french-bass-v-02",
              "parentPatternId": "zouk-french-bass",
              "name": "French Antillean Zouk Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                12
              ],
              "accentProfile": [
                0.96,
                0.83,
                0.86,
                0.88,
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.83,
                0.81,
                0.88
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
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
        }
];
