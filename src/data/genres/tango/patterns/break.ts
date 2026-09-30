import type { MusicalPattern } from '../../../schema';

export const TANGO_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "tango-violin-melody",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Violin Legato",
          "family": "Strings",
          "category": "break",
          "transitionType": "fill",
          "description": "Smooth expressive legato melody phrasing.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "violin",
            "strings"
          ],
    
          "approaches": ["sustain"],
          "instruments": [
            "violin",
            "strings"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            1,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.75
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
              "id": "tango-violin-melody-v-01-safe",
              "parentPatternId": "tango-violin-melody",
              "name": "Violin Legato — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.95,
                0.88
              ],
              "velocityProfile": [
                0.98,
                0.71
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "tango-violin-melody-v-02-safe",
              "parentPatternId": "tango-violin-melody",
              "name": "Violin Legato — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.95,
                0.88
              ],
              "velocityProfile": [
                0.98,
                0.71
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
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
