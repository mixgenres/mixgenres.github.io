import type { MusicalPattern } from '../../../schema';

export const ROCK_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "rock-halftime-groove",
          "worldId": "rock",
          "styleIds": ["rock-grunge"],
          "name": "Half-Time Groove",
          "family": "Drums",
          "category": "break",
          "transitionType": "fill",
          "description": "Spacious half-time groove with massive snare",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            0.96,
            1
          ],
          "velocityProfile": [
            0.92,
            0.98
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
              "id": "rock-halftime-groove-v-01-safe",
              "parentPatternId": "rock-halftime-groove",
              "name": "Half-Time Groove — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                0.9500000000000001,
                0.94
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "rock-halftime-groove-v-02-safe",
              "parentPatternId": "rock-halftime-groove",
              "name": "Half-Time Groove — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                0.9500000000000001,
                0.94
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
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
